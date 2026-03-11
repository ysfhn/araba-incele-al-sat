const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');

// Ana Sayfa
router.get('/', async (req, res) => {
  const db = getDb();
  const featuredListings = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    WHERE l.status = 'active' AND l.is_featured = 1
    ORDER BY l.created_at DESC LIMIT 4
  `).all();

  const latestListings = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    WHERE l.status = 'active'
    ORDER BY l.created_at DESC LIMIT 8
  `).all();

  const forumTopics = await db.prepare(`
    SELECT ft.*, u.name as author_name, fc.name as category_name, fc.icon as category_icon
    FROM forum_topics ft
    JOIN users u ON ft.user_id = u.id
    JOIN forum_categories fc ON ft.category_id = fc.id
    ORDER BY ft.last_reply_at DESC LIMIT 5
  `).all();

  const topServices = await db.prepare(`
    SELECT * FROM businesses WHERE is_verified = 1 ORDER BY rating DESC LIMIT 4
  `).all();

  const stats = {
    users: (await db.prepare('SELECT COUNT(*) as count FROM users').get()).count,
    listings: (await db.prepare("SELECT COUNT(*) as count FROM listings WHERE status='active'").get()).count,
    businesses: (await db.prepare('SELECT COUNT(*) as count FROM businesses WHERE is_verified=1').get()).count,
    topics: (await db.prepare('SELECT COUNT(*) as count FROM forum_topics').get()).count
  };

  const brands = await db.prepare('SELECT * FROM brands ORDER BY name').all();
  const cities = (await db.prepare("SELECT DISTINCT city FROM listings WHERE status='active' AND city IS NOT NULL ORDER BY city").all()).map(r => r.city);

  res.render('pages/index', {
    title: 'Ana Sayfa - Araba İncele Al Sat',
    featuredListings, latestListings, forumTopics, topServices, stats, brands, cities
  });
});

// Nasıl Çalışır
router.get('/nasil-calisir', async (req, res) => {
  res.render('pages/nasil-calisir', { title: 'Nasıl Çalışır - Araba İncele Al Sat' });
});

// Araç Seçim Sihirbazı
router.get('/arac-secim', async (req, res) => {
  const db = getDb();
  const brands = await db.prepare('SELECT * FROM brands ORDER BY name').all();
  res.render('pages/arac-secim', { title: 'Araç Seçim Sihirbazı - Araba İncele Al Sat', brands });
});

// Akıllı Öneri (AI Araç Asistanı)
router.get('/akilli-oneri', async (req, res) => {
  res.render('pages/akilli-oneri', { title: 'Akıllı Araç Asistanı - Araba İncele Al Sat' });
});

// Giriş / Kayıt
router.get('/giris', async (req, res) => {
  if (req.session.user) return res.redirect('/');
  res.render('pages/giris-kayit', { title: 'Giriş Yap / Kayıt Ol - Araba İncele Al Sat' });
});

// Araç Hub
router.get('/arac/:brandSlug/:modelSlug', async (req, res) => {
  const db = getDb();
  const brand = await db.prepare('SELECT * FROM brands WHERE slug = ?').get(req.params.brandSlug);
  const model = brand ? await db.prepare('SELECT * FROM models WHERE brand_id = ? AND slug = ?').get(brand.id, req.params.modelSlug) : null;

  if (!brand || !model) {
    return res.status(404).render('pages/404', { title: 'Araç Bulunamadı' });
  }

  // Query params from wizard
  const queryYear = req.query.yil ? parseInt(req.query.yil) : null;
  const queryFuel = req.query.yakit || null;

  const hub = await db.prepare('SELECT * FROM vehicle_hubs WHERE brand_id = ? AND model_id = ?').get(brand.id, model.id);

  const listings = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    WHERE l.brand_id = ? AND l.model_id = ? AND l.status = 'active'
    ORDER BY l.created_at DESC LIMIT 6
  `).all(brand.id, model.id);

  // Price stats
  const priceStats = await db.prepare(`
    SELECT COUNT(*) as count, AVG(price) as avg, MIN(price) as min, MAX(price) as max
    FROM listings WHERE brand_id = ? AND model_id = ? AND status = 'active'
  `).get(brand.id, model.id);
  if (priceStats && priceStats.avg) priceStats.avg = Math.round(priceStats.avg);

  const forumTopics = await db.prepare(`
    SELECT ft.*, u.name as author_name
    FROM forum_topics ft
    JOIN users u ON ft.user_id = u.id
    WHERE ft.title LIKE ? OR ft.content LIKE ?
    ORDER BY ft.reply_count DESC LIMIT 5
  `).all(`%${model.name}%`, `%${model.name}%`);

  const nearbyServices = await db.prepare(`
    SELECT * FROM businesses WHERE type = 'servis' AND is_verified = 1 ORDER BY rating DESC LIMIT 3
  `).all();

  res.render('pages/arac-hub', {
    title: `${brand.name} ${model.name}${queryYear ? ' ' + queryYear : ''} - Araba İncele Al Sat`,
    brand, model, hub, listings, forumTopics, nearbyServices, priceStats,
    queryYear, queryFuel
  });
});

module.exports = router;
