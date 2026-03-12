const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');
const { generateHubContent, generateBrandSummary, BODY_TYPE_TR, getBrandCountry } = require('../utils/hub-content-generator');

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
  const db = getDb();
  const stats = {
    users: (await db.prepare('SELECT COUNT(*) as count FROM users').get()).count,
    listings: (await db.prepare("SELECT COUNT(*) as count FROM listings WHERE status='active'").get()).count,
    businesses: (await db.prepare('SELECT COUNT(*) as count FROM businesses WHERE is_verified=1').get()).count,
    topics: (await db.prepare('SELECT COUNT(*) as count FROM forum_topics').get()).count
  };
  res.render('pages/nasil-calisir', { title: 'Nasıl Çalışır - Araba İncele Al Sat', stats });
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

// Araç Hub — Marka Sayfası (tüm modelleri listeler)
router.get('/arac/:brandSlug', async (req, res) => {
  const db = getDb();
  const brand = await db.prepare('SELECT * FROM brands WHERE slug = ?').get(req.params.brandSlug);
  if (!brand) return res.status(404).render('pages/404', { title: 'Marka Bulunamadı' });

  const models = await db.prepare('SELECT * FROM models WHERE brand_id = ? ORDER BY name').all(brand.id);
  const summary = generateBrandSummary(brand, models);

  // Modelleri gövde tipine göre grupla
  const modelsByBody = {};
  models.forEach(m => {
    const bt = m.body_type || 'sedan';
    if (!modelsByBody[bt]) modelsByBody[bt] = [];
    modelsByBody[bt].push(m);
  });

  // Tüm markalar (sidebar için)
  const allBrands = await db.prepare('SELECT id, name, slug FROM brands ORDER BY name').all();

  res.render('pages/marka-hub', {
    title: `${brand.name} Modelleri — Araba İncele Al Sat`,
    brand, models, summary, modelsByBody, allBrands,
    BODY_TYPE_TR, getBrandCountry
  });
});

// Araç Hub — Model Detay Sayfası
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
  const queryTransmission = req.query.vites || null;
  const queryBudget = req.query.butce ? parseInt(req.query.butce) : null;

  const hub = await db.prepare('SELECT * FROM vehicle_hubs WHERE brand_id = ? AND model_id = ?').get(brand.id, model.id);

  // Hub kaydı yoksa otomatik içerik üret
  const effectiveHub = hub || generateHubContent(brand, model);

  // Build dynamic listing query with optional year/fuel/transmission/budget filters
  let listingWhere = "WHERE l.brand_id = ? AND l.model_id = ? AND l.status = 'active'";
  const listingParams = [brand.id, model.id];
  if (queryYear) { listingWhere += ' AND l.year = ?'; listingParams.push(queryYear); }
  if (queryFuel) { listingWhere += ' AND l.fuel_type = ?'; listingParams.push(queryFuel); }
  if (queryTransmission) { listingWhere += ' AND l.transmission = ?'; listingParams.push(queryTransmission); }
  if (queryBudget) { listingWhere += ' AND l.price <= ?'; listingParams.push(queryBudget); }

  const listings = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    ${listingWhere}
    ORDER BY l.created_at DESC LIMIT 6
  `).all(...listingParams);

  // Price stats — also filtered by year/fuel/transmission/budget if present
  let priceWhere = "WHERE brand_id = ? AND model_id = ? AND status = 'active'";
  const priceParams = [brand.id, model.id];
  if (queryYear) { priceWhere += ' AND year = ?'; priceParams.push(queryYear); }
  if (queryFuel) { priceWhere += ' AND fuel_type = ?'; priceParams.push(queryFuel); }
  if (queryTransmission) { priceWhere += ' AND transmission = ?'; priceParams.push(queryTransmission); }
  if (queryBudget) { priceWhere += ' AND price <= ?'; priceParams.push(queryBudget); }

  const priceStats = await db.prepare(`
    SELECT COUNT(*) as count, AVG(price) as avg, MIN(price) as min, MAX(price) as max
    FROM listings ${priceWhere}
  `).get(...priceParams);
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

  // Aynı markanın diğer modelleri (sidebar/karşılaştırma için)
  const otherModels = await db.prepare('SELECT * FROM models WHERE brand_id = ? AND id != ? ORDER BY name').all(brand.id, model.id);

  res.render('pages/arac-hub', {
    title: `${brand.name} ${model.name}${queryYear ? ' ' + queryYear : ''} - Araba İncele Al Sat`,
    brand, model, hub: effectiveHub, listings, forumTopics, nearbyServices, priceStats,
    queryYear, queryFuel, queryTransmission, queryBudget, otherModels, BODY_TYPE_TR
  });
});

module.exports = router;
