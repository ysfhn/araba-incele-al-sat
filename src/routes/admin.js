const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');
const { isAdmin } = require('../middleware/auth');

// Admin Dashboard - GET /admin/panel
router.get('/panel', isAdmin, async (req, res) => {
  try {
  const db = getDb();

  const stats = {
    totalUsers: (await db.prepare('SELECT COUNT(*) as c FROM users').get()).c,
    activeListings: (await db.prepare("SELECT COUNT(*) as c FROM listings WHERE status='active'").get()).c,
    pendingListings: (await db.prepare("SELECT COUNT(*) as c FROM listings WHERE status='pending'").get()).c,
    businesses: (await db.prepare('SELECT COUNT(*) as c FROM businesses').get()).c,
    verifiedBusinesses: (await db.prepare("SELECT COUNT(*) as c FROM businesses WHERE is_verified=1").get()).c,
    pendingModeration: (await db.prepare("SELECT COUNT(*) as c FROM moderation_queue WHERE status='pending'").get()).c,
    forumTopics: (await db.prepare('SELECT COUNT(*) as c FROM forum_topics').get()).c,
    totalReviews: (await db.prepare('SELECT COUNT(*) as c FROM reviews').get()).c,
    totalMessages: (await db.prepare('SELECT COUNT(*) as c FROM messages').get()).c,
    totalAppointments: (await db.prepare('SELECT COUNT(*) as c FROM appointments').get()).c,
    pendingBusinesses: (await db.prepare('SELECT COUNT(*) as c FROM businesses WHERE is_verified = 0 OR is_verified IS NULL').get()).c,
  };

  const recentActivity = await db.prepare(`
    SELECT 'user' as type, name as detail, created_at FROM users
    UNION ALL
    SELECT 'listing' as type, title as detail, created_at FROM listings
    UNION ALL
    SELECT 'business' as type, name as detail, created_at FROM businesses
    ORDER BY created_at DESC LIMIT 15
  `).all();

  const moderationQueue = await db.prepare(`
    SELECT mq.*, 
      CASE 
        WHEN mq.type = 'listing' THEN (SELECT title FROM listings WHERE id = mq.item_id)
        WHEN mq.type = 'business' THEN (SELECT name FROM businesses WHERE id = mq.item_id)
        WHEN mq.type = 'forum_topic' THEN (SELECT title FROM forum_topics WHERE id = mq.item_id)
        WHEN mq.type = 'forum_reply' THEN (SELECT SUBSTR(content, 1, 80) FROM forum_replies WHERE id = mq.item_id)
        WHEN mq.type = 'review' THEN (SELECT SUBSTR(comment, 1, 80) FROM reviews WHERE id = mq.item_id)
        ELSE 'İçerik #' || mq.item_id
      END as item_detail,
      u.name as reported_by_name
    FROM moderation_queue mq LEFT JOIN users u ON mq.reported_by = u.id
    WHERE mq.status = 'pending'
    ORDER BY mq.created_at DESC LIMIT 10
  `).all();

  res.render('pages/admin-paneli', {
    title: 'Admin Paneli - Araba İncele Al Sat',
    stats, recentActivity, moderationQueue
  });
  } catch (err) {
    console.error('Admin dashboard hatası:', err);
    req.flash('error', 'Panel yüklenirken bir hata oluştu.');
    res.redirect('/');
  }
});

// Admin: Kullanıcı Yönetimi - GET /admin/kullanicilar
router.get('/kullanicilar', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const { sayfa, arama, rol, onay } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (arama) { where += ' AND (u.name LIKE ? OR u.email LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }
  if (rol) { where += ' AND u.role = ?'; params.push(rol); }
  if (onay === '1') { where += ' AND u.is_verified = 1'; }
  else if (onay === '0') { where += ' AND (u.is_verified = 0 OR u.is_verified IS NULL)'; }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = (await db.prepare(`SELECT COUNT(*) as c FROM users u ${where}`).get(...params)).c;
  const users = await db.prepare(`
    SELECT u.id, u.name, u.email, u.phone, u.role, u.is_verified, u.avatar, u.created_at,
      (SELECT COUNT(*) FROM listings WHERE user_id = u.id) as listing_count,
      (SELECT COUNT(*) FROM forum_topics WHERE user_id = u.id) as topic_count,
      CASE WHEN u.avatar IS NOT NULL AND u.phone IS NOT NULL AND u.email IS NOT NULL THEN 100
           WHEN u.phone IS NOT NULL AND u.email IS NOT NULL THEN 75
           WHEN u.email IS NOT NULL THEN 50
           ELSE 25 END as profile_completion
    FROM users u ${where} ORDER BY u.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const allCount = (await db.prepare('SELECT COUNT(*) as c FROM users').get()).c;
  const unverifiedCount = (await db.prepare('SELECT COUNT(*) as c FROM users WHERE is_verified = 0 OR is_verified IS NULL').get()).c;
  const roleMap = {
    bireysel: (await db.prepare("SELECT COUNT(*) as c FROM users WHERE role='bireysel'").get()).c,
    kurumsal: (await db.prepare("SELECT COUNT(*) as c FROM users WHERE role='kurumsal'").get()).c,
    admin: (await db.prepare("SELECT COUNT(*) as c FROM users WHERE role='admin'").get()).c,
  };

  res.render('pages/admin-paneli', {
    title: 'Kullanıcı Yönetimi - Admin - Araba İncele Al Sat',
    stats: { totalUsers: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'kullanicilar', adminData: { users, totalCount, allCount, unverifiedCount, roleMap, page, totalPages: Math.ceil(totalCount / limit), filters: req.query }
  });
  } catch (err) {
    console.error('Admin kullanıcılar hatası:', err);
    req.flash('error', 'Kullanıcı listesi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: İlan Yönetimi - GET /admin/ilanlar
router.get('/ilanlar', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const { durum, sayfa, arama } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (durum) { where += ' AND l.status = ?'; params.push(durum); }
  if (arama) { where += ' AND (l.title LIKE ? OR b.name LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = (await db.prepare(`SELECT COUNT(*) as c FROM listings l JOIN brands b ON l.brand_id = b.id ${where}`).get(...params)).c;
  const pendingCount = (await db.prepare("SELECT COUNT(*) as c FROM listings WHERE status='pending'").get()).c;
  const listings = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name, u.name as seller_name, u.email as seller_email
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id JOIN users u ON l.user_id = u.id
    ${where} ORDER BY l.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  res.render('pages/admin-paneli', {
    title: 'İlan Yönetimi - Admin - Araba İncele Al Sat',
    stats: { activeListings: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'ilanlar', adminData: { listings, totalCount, pendingCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query }
  });
  } catch (err) {
    console.error('Admin ilanlar hatası:', err);
    req.flash('error', 'İlan listesi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: İşletme Yönetimi - GET /admin/isletmeler
router.get('/isletmeler', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const { sayfa, arama, tur, durum } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (arama) { where += ' AND (b.name LIKE ? OR u.name LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }
  if (tur) { where += ' AND b.type = ?'; params.push(tur); }
  if (durum === 'pending') { where += ' AND (b.is_verified = 0 OR b.is_verified IS NULL)'; }
  else if (durum === 'verified') { where += ' AND b.is_verified = 1'; }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = (await db.prepare(`SELECT COUNT(*) as c FROM businesses b JOIN users u ON b.user_id = u.id ${where}`).get(...params)).c;
  const allBusinessCount = (await db.prepare('SELECT COUNT(*) as c FROM businesses').get()).c;
  const pendingBusinessCount = (await db.prepare('SELECT COUNT(*) as c FROM businesses WHERE is_verified = 0 OR is_verified IS NULL').get()).c;
  const verifiedBusinessCount = (await db.prepare('SELECT COUNT(*) as c FROM businesses WHERE is_verified = 1').get()).c;
  const businesses = await db.prepare(`
    SELECT b.*, u.name as owner_name, u.email as owner_email
    FROM businesses b JOIN users u ON b.user_id = u.id ${where} ORDER BY b.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  res.render('pages/admin-paneli', {
    title: 'İşletme Yönetimi - Admin - Araba İncele Al Sat',
    stats: { businesses: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'isletmeler', adminData: { businesses, totalCount, allBusinessCount, pendingBusinessCount, verifiedBusinessCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query }
  });
  } catch (err) {
    console.error('Admin işletmeler hatası:', err);
    req.flash('error', 'İşletme listesi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: Randevu Yönetimi - GET /admin/randevular
router.get('/randevular', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const { sayfa, durum, arama } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (durum) { where += ' AND a.status = ?'; params.push(durum); }
  if (arama) { where += ' AND (b.name LIKE ? OR u.name LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = (await db.prepare(`SELECT COUNT(*) as c FROM appointments a JOIN businesses b ON a.business_id = b.id JOIN users u ON a.user_id = u.id ${where}`).get(...params)).c;
  const appointments = await db.prepare(`
    SELECT a.*, b.name as business_name, u.name as user_name, u.email as user_email
    FROM appointments a JOIN businesses b ON a.business_id = b.id JOIN users u ON a.user_id = u.id
    ${where} ORDER BY a.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const statusCounts = {
    pending: (await db.prepare("SELECT COUNT(*) as c FROM appointments WHERE status='pending'").get()).c,
    confirmed: (await db.prepare("SELECT COUNT(*) as c FROM appointments WHERE status='confirmed'").get()).c,
    completed: (await db.prepare("SELECT COUNT(*) as c FROM appointments WHERE status='completed'").get()).c,
    cancelled: (await db.prepare("SELECT COUNT(*) as c FROM appointments WHERE status='cancelled'").get()).c,
  };

  res.render('pages/admin-paneli', {
    title: 'Randevu Yönetimi - Admin - Araba İncele Al Sat',
    stats: { totalAppointments: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'randevular', adminData: { appointments, totalCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query, statusCounts }
  });
  } catch (err) {
    console.error('Admin randevular hatası:', err);
    req.flash('error', 'Randevu listesi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: Teklif Yönetimi - GET /admin/teklifler
router.get('/teklifler', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const { sayfa, durum, arama } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (durum) { where += ' AND qr.status = ?'; params.push(durum); }
  if (arama) { where += ' AND (b.name LIKE ? OR u.name LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = (await db.prepare(`SELECT COUNT(*) as c FROM quote_requests qr JOIN businesses b ON qr.business_id = b.id JOIN users u ON qr.user_id = u.id ${where}`).get(...params)).c;
  const quotes = await db.prepare(`
    SELECT qr.*, b.name as business_name, u.name as user_name, u.email as user_email
    FROM quote_requests qr JOIN businesses b ON qr.business_id = b.id JOIN users u ON qr.user_id = u.id
    ${where} ORDER BY qr.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const statusCounts = {
    pending: (await db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE status='pending'").get()).c,
    quoted: (await db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE status='quoted'").get()).c,
    accepted: (await db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE status='accepted'").get()).c,
    rejected: (await db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE status='rejected'").get()).c,
  };

  res.render('pages/admin-paneli', {
    title: 'Teklif Yönetimi - Admin - Araba İncele Al Sat',
    stats: {}, recentActivity: [], moderationQueue: [],
    adminPage: 'teklifler', adminData: { quotes, totalCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query, statusCounts }
  });
  } catch (err) {
    console.error('Admin teklifler hatası:', err);
    req.flash('error', 'Teklif listesi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: Değerlendirme Yönetimi - GET /admin/degerlendirmeler
router.get('/degerlendirmeler', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const { sayfa, arama, puan, isletme } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (arama) { where += ' AND (b.name LIKE ? OR u.name LIKE ? OR r.comment LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`, `%${arama}%`); }
  if (puan) { where += ' AND r.rating = ?'; params.push(Number(puan)); }
  if (isletme) { where += ' AND r.business_id = ?'; params.push(Number(isletme)); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = (await db.prepare(`SELECT COUNT(*) as c FROM reviews r JOIN businesses b ON r.business_id = b.id JOIN users u ON r.user_id = u.id ${where}`).get(...params)).c;
  const reviews = await db.prepare(`
    SELECT r.*, b.name as business_name, u.name as reviewer_name, u.email as reviewer_email
    FROM reviews r JOIN businesses b ON r.business_id = b.id JOIN users u ON r.user_id = u.id
    ${where} ORDER BY r.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const avgRating = (await db.prepare('SELECT AVG(rating) as avg FROM reviews').get()).avg || 0;
  const ratingDist = {};
  for (let i = 1; i <= 5; i++) {
    ratingDist[i] = (await db.prepare('SELECT COUNT(*) as c FROM reviews WHERE rating = ?').get(i)).c;
  }

  const businessList = await db.prepare('SELECT b.id, b.name, b.review_count FROM businesses b WHERE b.review_count > 0 ORDER BY b.name ASC').all();

  res.render('pages/admin-paneli', {
    title: 'Değerlendirme Yönetimi - Admin - Araba İncele Al Sat',
    stats: { totalReviews: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'degerlendirmeler', adminData: { reviews, totalCount, businessList, page, totalPages: Math.ceil(totalCount / limit), filters: req.query, avgRating: avgRating.toFixed(1), ratingDist }
  });
  } catch (err) {
    console.error('Admin değerlendirmeler hatası:', err);
    req.flash('error', 'Değerlendirme listesi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: Forum Yönetimi - GET /admin/forum
router.get('/forum', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const categories = await db.prepare(`
    SELECT fc.*, (SELECT COUNT(*) FROM forum_topics WHERE category_id = fc.id) as topic_count
    FROM forum_categories fc ORDER BY fc.sort_order ASC, fc.name ASC
  `).all();
  const topics = await db.prepare(`
    SELECT ft.*, u.name as author_name, fc.name as category_name
    FROM forum_topics ft JOIN users u ON ft.user_id = u.id JOIN forum_categories fc ON ft.category_id = fc.id
    ORDER BY ft.created_at DESC LIMIT 50
  `).all();

  res.render('pages/admin-paneli', {
    title: 'Forum Yönetimi - Admin - Araba İncele Al Sat',
    stats: { forumTopics: topics.length }, recentActivity: [], moderationQueue: [],
    adminPage: 'forum', adminData: { topics, categories }
  });
  } catch (err) {
    console.error('Admin forum hatası:', err);
    req.flash('error', 'Forum yönetimi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: Moderasyon - GET /admin/moderasyon
router.get('/moderasyon', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const { durum, tur } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (durum) { where += ' AND mq.status = ?'; params.push(durum); }
  if (tur) { where += ' AND mq.type = ?'; params.push(tur); }

  const queue = await db.prepare(`
    SELECT mq.*,
      CASE 
        WHEN mq.type = 'listing' THEN (SELECT title FROM listings WHERE id = mq.item_id)
        WHEN mq.type = 'business' THEN (SELECT name FROM businesses WHERE id = mq.item_id)
        WHEN mq.type = 'forum_topic' THEN (SELECT title FROM forum_topics WHERE id = mq.item_id)
        WHEN mq.type = 'forum_reply' THEN (SELECT SUBSTR(content, 1, 100) FROM forum_replies WHERE id = mq.item_id)
        WHEN mq.type = 'review' THEN (SELECT SUBSTR(comment, 1, 100) FROM reviews WHERE id = mq.item_id)
        ELSE 'İçerik #' || mq.item_id
      END as item_detail,
      CASE 
        WHEN mq.type = 'listing' THEN '/ilan/' || (SELECT slug FROM listings WHERE id = mq.item_id)
        WHEN mq.type = 'business' THEN '/servis/' || (SELECT slug FROM businesses WHERE id = mq.item_id)
        WHEN mq.type = 'forum_topic' THEN '/forum/konu/' || (SELECT slug FROM forum_topics WHERE id = mq.item_id)
        WHEN mq.type = 'forum_reply' THEN '/forum/konu/' || (SELECT ft.slug FROM forum_replies fr JOIN forum_topics ft ON fr.topic_id = ft.id WHERE fr.id = mq.item_id)
        ELSE '#'
      END as item_link,
      u.name as reported_by_name,
      u.email as reported_by_email,
      ru.name as reviewed_by_name
    FROM moderation_queue mq
    LEFT JOIN users u ON mq.reported_by = u.id
    LEFT JOIN users ru ON mq.reviewed_by = ru.id
    ${where}
    ORDER BY CASE mq.status WHEN 'pending' THEN 0 WHEN 'approved' THEN 1 ELSE 2 END ASC, mq.created_at DESC
  `).all(...params);

  // Durum sayaçları (filtresiz)
  const statusCounts = {
    all: (await db.prepare('SELECT COUNT(*) as c FROM moderation_queue').get()).c,
    pending: (await db.prepare("SELECT COUNT(*) as c FROM moderation_queue WHERE status='pending'").get()).c,
    approved: (await db.prepare("SELECT COUNT(*) as c FROM moderation_queue WHERE status='approved'").get()).c,
    rejected: (await db.prepare("SELECT COUNT(*) as c FROM moderation_queue WHERE status='rejected'").get()).c,
  };

  // Tür sayaçları
  const typeCountsRaw = await db.prepare("SELECT type, COUNT(*) as c FROM moderation_queue WHERE status='pending' GROUP BY type").all();
  const typeCounts = { listing: 0, forum_topic: 0, forum_reply: 0, review: 0, business: 0 };
  typeCountsRaw.forEach(r => { typeCounts[r.type] = r.c; });

  res.render('pages/admin-paneli', {
    title: 'Moderasyon - Admin - Araba İncele Al Sat',
    stats: { pendingModeration: statusCounts.pending }, recentActivity: [], moderationQueue: queue,
    adminPage: 'moderasyon', adminData: { queue, statusCounts, typeCounts, filters: req.query }
  });
  } catch (err) {
    console.error('Admin moderasyon hatası:', err);
    req.flash('error', 'Moderasyon yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: Araç Hub Yönetimi - GET /admin/hublar
router.get('/hublar', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  
  // Manuel hub kayıtları
  const hubs = await db.prepare(`
    SELECT vh.*, b.name as brand_name, b.slug as brand_slug, b.logo as brand_logo,
           m.name as model_name, m.slug as model_slug
    FROM vehicle_hubs vh
    JOIN brands b ON vh.brand_id = b.id
    JOIN models m ON vh.model_id = m.id
    ORDER BY b.name ASC, m.name ASC
  `).all();

  // Manuel hubları model_id bazında hızlı erişim için set yap
  const hubModelIds = new Set(hubs.map(h => h.model_id));

  // Hubları markaya göre grupla (brand_id -> hub dizisi)
  const hubsByBrand = {};
  hubs.forEach(hub => {
    if (!hubsByBrand[hub.brand_id]) {
      hubsByBrand[hub.brand_id] = [];
    }
    hubsByBrand[hub.brand_id].push(hub);
  });

  const brands = await db.prepare('SELECT * FROM brands ORDER BY name ASC').all();
  const models = await db.prepare(`
    SELECT m.*, b.name as brand_name, b.slug as brand_slug, b.logo as brand_logo
    FROM models m
    JOIN brands b ON m.brand_id = b.id
    ORDER BY b.name ASC, m.name ASC
  `).all();

  // TÜM modelleri markaya göre grupla (hub olanlar + olmayanlar)
  const allModelsByBrand = {};
  models.forEach(m => {
    if (!allModelsByBrand[m.brand_id]) allModelsByBrand[m.brand_id] = [];
    allModelsByBrand[m.brand_id].push({
      ...m,
      hasManualHub: hubModelIds.has(m.id),
      manualHub: hubs.find(h => h.model_id === m.id) || null
    });
  });

  const brandsWithHubs = Object.keys(hubsByBrand).length;
  const totalModels = models.length;
  const autoGeneratedCount = totalModels - hubs.length;

  res.render('pages/admin-paneli', {
    title: 'Araç Hub Yönetimi - Admin - Araba İncele Al Sat',
    stats: { hubs: hubs.length }, recentActivity: [], moderationQueue: [],
    adminPage: 'hublar', adminData: { hubs, hubsByBrand, brandsWithHubs, brands, models, allModelsByBrand, totalModels, autoGeneratedCount }
  });
  } catch (err) {
    console.error('Admin hublar hatası:', err);
    req.flash('error', 'Araç Hub yönetimi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

// Admin: Marka/Model Yönetimi - GET /admin/markalar
router.get('/markalar', isAdmin, async (req, res) => {
  try {
  const db = getDb();
  const brands = await db.prepare(`
    SELECT b.*, 
      (SELECT COUNT(*) FROM models WHERE brand_id = b.id) as model_count,
      (SELECT COUNT(*) FROM listings WHERE brand_id = b.id) as listing_count,
      (SELECT COUNT(*) FROM vehicle_hubs WHERE brand_id = b.id) as hub_count
    FROM brands b ORDER BY b.name ASC
  `).all();
  const models = await db.prepare(`
    SELECT m.*, b.name as brand_name,
      (SELECT COUNT(*) FROM listings WHERE model_id = m.id) as listing_count,
      (SELECT COUNT(*) FROM vehicle_hubs WHERE model_id = m.id) as hub_count
    FROM models m JOIN brands b ON m.brand_id = b.id ORDER BY b.name ASC, m.name ASC
  `).all();

  // Modelleri markaya göre grupla
  const modelsByBrand = {};
  models.forEach(m => {
    if (!modelsByBrand[m.brand_id]) modelsByBrand[m.brand_id] = [];
    modelsByBrand[m.brand_id].push(m);
  });

  res.render('pages/admin-paneli', {
    title: 'Marka/Model Yönetimi - Admin - Araba İncele Al Sat',
    stats: { brands: brands.length, models: models.length }, recentActivity: [], moderationQueue: [],
    adminPage: 'markalar', adminData: { brands, models, modelsByBrand }
  });
  } catch (err) {
    console.error('Admin markalar hatası:', err);
    req.flash('error', 'Marka/Model yönetimi yüklenirken bir hata oluştu.');
    res.redirect('/admin/panel');
  }
});

module.exports = router;
