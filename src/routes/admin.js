const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');
const { isAdmin } = require('../middleware/auth');

// Admin Dashboard - GET /admin/panel
router.get('/panel', isAdmin, (req, res) => {
  const db = getDb();

  const stats = {
    totalUsers: db.prepare('SELECT COUNT(*) as c FROM users').get().c,
    activeListings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE status='active'").get().c,
    pendingListings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE status='pending'").get().c,
    businesses: db.prepare('SELECT COUNT(*) as c FROM businesses').get().c,
    verifiedBusinesses: db.prepare("SELECT COUNT(*) as c FROM businesses WHERE is_verified=1").get().c,
    pendingModeration: db.prepare("SELECT COUNT(*) as c FROM moderation_queue WHERE status='pending'").get().c,
    forumTopics: db.prepare('SELECT COUNT(*) as c FROM forum_topics').get().c,
    totalReviews: db.prepare('SELECT COUNT(*) as c FROM reviews').get().c,
    totalMessages: db.prepare('SELECT COUNT(*) as c FROM messages').get().c,
    totalAppointments: db.prepare('SELECT COUNT(*) as c FROM appointments').get().c,
  };

  const recentActivity = db.prepare(`
    SELECT 'user' as type, name as detail, created_at FROM users
    UNION ALL
    SELECT 'listing' as type, title as detail, created_at FROM listings
    UNION ALL
    SELECT 'business' as type, name as detail, created_at FROM businesses
    ORDER BY created_at DESC LIMIT 15
  `).all();

  const moderationQueue = db.prepare(`
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
});

// Admin: Kullanıcı Yönetimi - GET /admin/kullanicilar
router.get('/kullanicilar', isAdmin, (req, res) => {
  const db = getDb();
  const { sayfa, arama, rol } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (arama) { where += ' AND (name LIKE ? OR email LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }
  if (rol) { where += ' AND role = ?'; params.push(rol); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM users ${where}`).get(...params).c;
  const users = db.prepare(`SELECT id, name, email, phone, role, is_verified, avatar, created_at FROM users ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`)
    .all(...params, limit, offset);

  res.render('pages/admin-paneli', {
    title: 'Kullanıcı Yönetimi - Admin - Araba İncele Al Sat',
    stats: { totalUsers: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'kullanicilar', adminData: { users, totalCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query }
  });
});

// Admin: İlan Yönetimi - GET /admin/ilanlar
router.get('/ilanlar', isAdmin, (req, res) => {
  const db = getDb();
  const { durum, sayfa, arama } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (durum) { where += ' AND l.status = ?'; params.push(durum); }
  if (arama) { where += ' AND (l.title LIKE ? OR b.name LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM listings l JOIN brands b ON l.brand_id = b.id ${where}`).get(...params).c;
  const listings = db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name, u.name as seller_name, u.email as seller_email
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id JOIN users u ON l.user_id = u.id
    ${where} ORDER BY l.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  res.render('pages/admin-paneli', {
    title: 'İlan Yönetimi - Admin - Araba İncele Al Sat',
    stats: { activeListings: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'ilanlar', adminData: { listings, totalCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query }
  });
});

// Admin: İşletme Yönetimi - GET /admin/isletmeler
router.get('/isletmeler', isAdmin, (req, res) => {
  const db = getDb();
  const { sayfa, arama, tur } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (arama) { where += ' AND (b.name LIKE ? OR u.name LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }
  if (tur) { where += ' AND b.type = ?'; params.push(tur); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM businesses b JOIN users u ON b.user_id = u.id ${where}`).get(...params).c;
  const businesses = db.prepare(`
    SELECT b.*, u.name as owner_name, u.email as owner_email
    FROM businesses b JOIN users u ON b.user_id = u.id ${where} ORDER BY b.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  res.render('pages/admin-paneli', {
    title: 'İşletme Yönetimi - Admin - Araba İncele Al Sat',
    stats: { businesses: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'isletmeler', adminData: { businesses, totalCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query }
  });
});

// Admin: Randevu Yönetimi - GET /admin/randevular
router.get('/randevular', isAdmin, (req, res) => {
  const db = getDb();
  const { sayfa, durum, arama } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (durum) { where += ' AND a.status = ?'; params.push(durum); }
  if (arama) { where += ' AND (b.name LIKE ? OR u.name LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM appointments a JOIN businesses b ON a.business_id = b.id JOIN users u ON a.user_id = u.id ${where}`).get(...params).c;
  const appointments = db.prepare(`
    SELECT a.*, b.name as business_name, u.name as user_name, u.email as user_email
    FROM appointments a JOIN businesses b ON a.business_id = b.id JOIN users u ON a.user_id = u.id
    ${where} ORDER BY a.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const statusCounts = {
    pending: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE status='pending'").get().c,
    confirmed: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE status='confirmed'").get().c,
    completed: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE status='completed'").get().c,
    cancelled: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE status='cancelled'").get().c,
  };

  res.render('pages/admin-paneli', {
    title: 'Randevu Yönetimi - Admin - Araba İncele Al Sat',
    stats: { totalAppointments: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'randevular', adminData: { appointments, totalCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query, statusCounts }
  });
});

// Admin: Teklif Yönetimi - GET /admin/teklifler
router.get('/teklifler', isAdmin, (req, res) => {
  const db = getDb();
  const { sayfa, durum, arama } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (durum) { where += ' AND qr.status = ?'; params.push(durum); }
  if (arama) { where += ' AND (b.name LIKE ? OR u.name LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM quote_requests qr JOIN businesses b ON qr.business_id = b.id JOIN users u ON qr.user_id = u.id ${where}`).get(...params).c;
  const quotes = db.prepare(`
    SELECT qr.*, b.name as business_name, u.name as user_name, u.email as user_email
    FROM quote_requests qr JOIN businesses b ON qr.business_id = b.id JOIN users u ON qr.user_id = u.id
    ${where} ORDER BY qr.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const statusCounts = {
    pending: db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE status='pending'").get().c,
    responded: db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE status='responded'").get().c,
    closed: db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE status='closed'").get().c,
  };

  res.render('pages/admin-paneli', {
    title: 'Teklif Yönetimi - Admin - Araba İncele Al Sat',
    stats: {}, recentActivity: [], moderationQueue: [],
    adminPage: 'teklifler', adminData: { quotes, totalCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query, statusCounts }
  });
});

// Admin: Değerlendirme Yönetimi - GET /admin/degerlendirmeler
router.get('/degerlendirmeler', isAdmin, (req, res) => {
  const db = getDb();
  const { sayfa, arama } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (arama) { where += ' AND (b.name LIKE ? OR u.name LIKE ? OR r.comment LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`, `%${arama}%`); }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM reviews r JOIN businesses b ON r.business_id = b.id JOIN users u ON r.user_id = u.id ${where}`).get(...params).c;
  const reviews = db.prepare(`
    SELECT r.*, b.name as business_name, u.name as reviewer_name, u.email as reviewer_email
    FROM reviews r JOIN businesses b ON r.business_id = b.id JOIN users u ON r.user_id = u.id
    ${where} ORDER BY r.created_at DESC LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const avgRating = db.prepare('SELECT AVG(rating) as avg FROM reviews').get().avg || 0;
  const ratingDist = {};
  for (let i = 1; i <= 5; i++) {
    ratingDist[i] = db.prepare('SELECT COUNT(*) as c FROM reviews WHERE rating = ?').get(i).c;
  }

  res.render('pages/admin-paneli', {
    title: 'Değerlendirme Yönetimi - Admin - Araba İncele Al Sat',
    stats: { totalReviews: totalCount }, recentActivity: [], moderationQueue: [],
    adminPage: 'degerlendirmeler', adminData: { reviews, totalCount, page, totalPages: Math.ceil(totalCount / limit), filters: req.query, avgRating: avgRating.toFixed(1), ratingDist }
  });
});

// Admin: Forum Yönetimi - GET /admin/forum
router.get('/forum', isAdmin, (req, res) => {
  const db = getDb();
  const topics = db.prepare(`
    SELECT ft.*, u.name as author_name, fc.name as category_name
    FROM forum_topics ft JOIN users u ON ft.user_id = u.id JOIN forum_categories fc ON ft.category_id = fc.id
    ORDER BY ft.created_at DESC LIMIT 50
  `).all();

  res.render('pages/admin-paneli', {
    title: 'Forum Yönetimi - Admin - Araba İncele Al Sat',
    stats: { forumTopics: topics.length }, recentActivity: [], moderationQueue: [],
    adminPage: 'forum', adminData: { topics }
  });
});

// Admin: Moderasyon - GET /admin/moderasyon
router.get('/moderasyon', isAdmin, (req, res) => {
  const db = getDb();
  const queue = db.prepare(`
    SELECT mq.*,
      CASE 
        WHEN mq.type = 'listing' THEN (SELECT title FROM listings WHERE id = mq.item_id)
        WHEN mq.type = 'business' THEN (SELECT name FROM businesses WHERE id = mq.item_id)
        WHEN mq.type = 'forum_topic' THEN (SELECT title FROM forum_topics WHERE id = mq.item_id)
        WHEN mq.type = 'forum_reply' THEN (SELECT SUBSTR(content, 1, 100) FROM forum_replies WHERE id = mq.item_id)
        WHEN mq.type = 'review' THEN (SELECT SUBSTR(comment, 1, 100) FROM reviews WHERE id = mq.item_id)
        ELSE 'İçerik #' || mq.item_id
      END as item_detail,
      u.name as reported_by_name
    FROM moderation_queue mq LEFT JOIN users u ON mq.reported_by = u.id
    ORDER BY mq.status ASC, mq.created_at DESC
  `).all();

  res.render('pages/admin-paneli', {
    title: 'Moderasyon - Admin - Araba İncele Al Sat',
    stats: { pendingModeration: queue.filter(q => q.status === 'pending').length }, recentActivity: [], moderationQueue: queue,
    adminPage: 'moderasyon', adminData: { queue }
  });
});

// Admin: Araç Hub Yönetimi - GET /admin/hublar
router.get('/hublar', isAdmin, (req, res) => {
  const db = getDb();
  const hubs = db.prepare(`
    SELECT vh.*, b.name as brand_name, m.name as model_name
    FROM vehicle_hubs vh JOIN brands b ON vh.brand_id = b.id JOIN models m ON vh.model_id = m.id
    ORDER BY vh.created_at DESC
  `).all();
  const brands = db.prepare('SELECT * FROM brands ORDER BY name ASC').all();
  const models = db.prepare('SELECT * FROM models ORDER BY name ASC').all();

  res.render('pages/admin-paneli', {
    title: 'Araç Hub Yönetimi - Admin - Araba İncele Al Sat',
    stats: { hubs: hubs.length }, recentActivity: [], moderationQueue: [],
    adminPage: 'hublar', adminData: { hubs, brands, models }
  });
});

// Admin: Marka/Model Yönetimi - GET /admin/markalar
router.get('/markalar', isAdmin, (req, res) => {
  const db = getDb();
  const brands = db.prepare(`
    SELECT b.*, 
      (SELECT COUNT(*) FROM models WHERE brand_id = b.id) as model_count,
      (SELECT COUNT(*) FROM listings WHERE brand_id = b.id) as listing_count
    FROM brands b ORDER BY b.name ASC
  `).all();
  const models = db.prepare(`
    SELECT m.*, b.name as brand_name,
      (SELECT COUNT(*) FROM listings WHERE model_id = m.id) as listing_count
    FROM models m JOIN brands b ON m.brand_id = b.id ORDER BY b.name ASC, m.name ASC
  `).all();

  res.render('pages/admin-paneli', {
    title: 'Marka/Model Yönetimi - Admin - Araba İncele Al Sat',
    stats: { brands: brands.length, models: models.length }, recentActivity: [], moderationQueue: [],
    adminPage: 'markalar', adminData: { brands, models }
  });
});

module.exports = router;
