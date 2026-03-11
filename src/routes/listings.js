const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');
const { isAuthenticated } = require('../middleware/auth');

// İlan Listesi - GET /ilan
router.get('/', async (req, res) => {
  const db = getDb();
  const { marka, model, yil_min, yil_max, fiyat_min, fiyat_max, yakit, vites, sehir, siralama, sayfa } = req.query;

  let where = "WHERE l.status = 'active'";
  const params = [];

  if (marka) { where += ' AND b.slug = ?'; params.push(marka); }
  if (model) { where += ' AND m.slug = ?'; params.push(model); }
  if (yil_min) { where += ' AND l.year >= ?'; params.push(Number(yil_min)); }
  if (yil_max) { where += ' AND l.year <= ?'; params.push(Number(yil_max)); }
  if (fiyat_min) { where += ' AND l.price >= ?'; params.push(Number(fiyat_min)); }
  if (fiyat_max) { where += ' AND l.price <= ?'; params.push(Number(fiyat_max)); }
  if (yakit) { where += ' AND l.fuel_type = ?'; params.push(yakit); }
  if (vites) { where += ' AND l.transmission = ?'; params.push(vites); }
  if (sehir) { where += ' AND l.city = ?'; params.push(sehir); }

  let orderBy = 'ORDER BY l.created_at DESC';
  if (siralama === 'fiyat-artan') orderBy = 'ORDER BY l.price ASC';
  if (siralama === 'fiyat-azalan') orderBy = 'ORDER BY l.price DESC';
  if (siralama === 'yil-yeni') orderBy = 'ORDER BY l.year DESC';
  if (siralama === 'km-az') orderBy = 'ORDER BY l.km ASC';

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 12;
  const offset = (page - 1) * limit;

  const totalCount = (await db.prepare(`
    SELECT COUNT(*) as count FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    ${where}
  `).get(...params)).count;

  const listings = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    ${where} ${orderBy}
    LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  const brands = await db.prepare('SELECT * FROM brands ORDER BY name').all();
  const cities = (await db.prepare("SELECT DISTINCT city FROM listings WHERE status='active' AND city IS NOT NULL ORDER BY city").all()).map(r => r.city);

  const totalPages = Math.ceil(totalCount / limit);

  res.render('pages/ilan-arama', {
    title: 'İlan Arama - Araba İncele Al Sat',
    listings, brands, cities, totalCount, page, totalPages,
    filters: req.query
  });
});

// İlan Ver Form - GET /ilan/ver
router.get('/ver', isAuthenticated, async (req, res) => {
  const db = getDb();
  const brands = await db.prepare('SELECT * FROM brands ORDER BY name').all();
  res.render('pages/ilan-ver', { title: 'İlan Ver - Araba İncele Al Sat', brands, editMode: false, listing: null, models: [], features: [], images: [] });
});

// İlan Kaydet - POST /ilan/ver
router.post('/ver', isAuthenticated, async (req, res) => {
  const db = getDb();
  const { brand_id, model_id, year, km, fuel_type, transmission, hp, color, price, description, title } = req.body;

  if (!brand_id || !model_id || !year || !price) {
    req.flash('error', 'Zorunlu alanları doldurunuz.');
    return res.redirect('/ilan/ver');
  }

  const brand = await db.prepare('SELECT * FROM brands WHERE id = ?').get(brand_id);
  const model = await db.prepare('SELECT * FROM models WHERE id = ?').get(model_id);

  const autoTitle = title || `${year} ${brand.name} ${model.name}`;
  const slug = autoTitle.toLowerCase()
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);

  const result = await db.prepare(`
    INSERT INTO listings (user_id, brand_id, model_id, title, slug, year, km, fuel_type, transmission, hp, color, price, description, city, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
  `).run(req.session.user.id, brand_id, model_id, autoTitle, slug, year, km || 0, fuel_type, transmission, hp || null, color || null, price, description || null, req.body.city || null);

  // Placeholder görsel ekle
  await db.prepare('INSERT INTO listing_images (listing_id, url, is_primary) VALUES (?, ?, 1)').run(result.lastInsertRowid, '/images/car-placeholder.svg');

  req.flash('success', 'İlanınız başarıyla oluşturuldu!');
  res.redirect(`/ilan/${slug}`);
});

// İlan Düzenle Form - GET /ilan/:slug/duzenle
router.get('/:slug/duzenle', isAuthenticated, async (req, res) => {
  const db = getDb();
  const listing = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id
    WHERE l.slug = ?
  `).get(req.params.slug);

  if (!listing) return res.status(404).render('pages/404', { title: 'İlan Bulunamadı' });
  if (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin') {
    req.flash('error', 'Bu ilanı düzenleme yetkiniz yok.');
    return res.redirect(`/ilan/${req.params.slug}`);
  }

  const brands = await db.prepare('SELECT * FROM brands ORDER BY name').all();
  const models = await db.prepare('SELECT * FROM models WHERE brand_id = ? ORDER BY name').all(listing.brand_id);
  const features = (await db.prepare('SELECT feature FROM listing_features WHERE listing_id = ?').all(listing.id)).map(r => r.feature);
  const images = await db.prepare('SELECT * FROM listing_images WHERE listing_id = ? ORDER BY sort_order').all(listing.id);

  res.render('pages/ilan-ver', {
    title: 'İlan Düzenle - Araba İncele Al Sat',
    brands, editMode: true, listing, models, features, images
  });
});

// İlan Düzenle Kaydet - POST /ilan/:slug/duzenle
router.post('/:slug/duzenle', isAuthenticated, async (req, res) => {
  const db = getDb();
  const listing = await db.prepare('SELECT * FROM listings WHERE slug = ?').get(req.params.slug);

  if (!listing) return res.status(404).render('pages/404', { title: 'İlan Bulunamadı' });
  if (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin') {
    req.flash('error', 'Bu ilanı düzenleme yetkiniz yok.');
    return res.redirect(`/ilan/${req.params.slug}`);
  }

  const { brand_id, model_id, year, km, fuel_type, transmission, hp, color, price, description, title, city } = req.body;

  await db.prepare(`
    UPDATE listings SET brand_id=?, model_id=?, year=?, km=?, fuel_type=?, transmission=?, hp=?, color=?, price=?, description=?, title=?, city=?, updated_at=CURRENT_TIMESTAMP
    WHERE id=?
  `).run(brand_id, model_id, year, km || 0, fuel_type, transmission, hp || null, color || null, price, description || null, title, city || null, listing.id);

  // Özellikleri güncelle
  const features = req.body.features;
  if (features) {
    await db.prepare('DELETE FROM listing_features WHERE listing_id = ?').run(listing.id);
    const featureArr = Array.isArray(features) ? features : [features];
    const insertFeature = db.prepare('INSERT INTO listing_features (listing_id, feature) VALUES (?, ?)');
    for (const f of featureArr) { if (f.trim()) await insertFeature.run(listing.id, f.trim()); }
  }

  req.flash('success', 'İlan güncellendi!');
  res.redirect(`/ilan/${req.params.slug}`);
});

// İlan Satıldı İşaretle - POST /ilan/:slug/satildi
router.post('/:slug/satildi', isAuthenticated, async (req, res) => {
  const db = getDb();
  const listing = await db.prepare('SELECT * FROM listings WHERE slug = ?').get(req.params.slug);
  if (!listing || (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin')) {
    req.flash('error', 'Yetkiniz yok.');
    return res.redirect('/kullanici/ilanlarim');
  }

  await db.prepare("UPDATE listings SET status = 'sold', updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(listing.id);
  req.flash('success', 'İlan "Satıldı" olarak işaretlendi!');
  res.redirect('/kullanici/ilanlarim');
});

// İlan Sil - POST /ilan/:slug/sil
router.post('/:slug/sil', isAuthenticated, async (req, res) => {
  const db = getDb();
  const listing = await db.prepare('SELECT * FROM listings WHERE slug = ?').get(req.params.slug);
  if (!listing || (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin')) {
    req.flash('error', 'Yetkiniz yok.');
    return res.redirect('/kullanici/ilanlarim');
  }

  await db.prepare('DELETE FROM listing_images WHERE listing_id = ?').run(listing.id);
  await db.prepare('DELETE FROM listing_features WHERE listing_id = ?').run(listing.id);
  await db.prepare('DELETE FROM favorites WHERE listing_id = ?').run(listing.id);
  await db.prepare('DELETE FROM listings WHERE id = ?').run(listing.id);

  req.flash('success', 'İlan silindi!');
  res.redirect('/kullanici/ilanlarim');
});

// İlan Yayından Kaldır - POST /ilan/:slug/pasif
router.post('/:slug/pasif', isAuthenticated, async (req, res) => {
  const db = getDb();
  const listing = await db.prepare('SELECT * FROM listings WHERE slug = ?').get(req.params.slug);
  if (!listing || (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin')) {
    req.flash('error', 'Yetkiniz yok.');
    return res.redirect('/kullanici/ilanlarim');
  }

  await db.prepare("UPDATE listings SET status = 'draft', updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(listing.id);
  req.flash('success', 'İlan yayından kaldırıldı.');
  res.redirect('/kullanici/ilanlarim');
});

// İlan Tekrar Yayınla - POST /ilan/:slug/yayin
router.post('/:slug/yayin', isAuthenticated, async (req, res) => {
  const db = getDb();
  const listing = await db.prepare('SELECT * FROM listings WHERE slug = ?').get(req.params.slug);
  if (!listing || (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin')) {
    req.flash('error', 'Yetkiniz yok.');
    return res.redirect('/kullanici/ilanlarim');
  }

  await db.prepare("UPDATE listings SET status = 'active', updated_at = CURRENT_TIMESTAMP WHERE id = ?").run(listing.id);
  req.flash('success', 'İlan tekrar yayınlandı!');
  res.redirect('/kullanici/ilanlarim');
});

// İlan Detay - GET /ilan/:slug
router.get('/:slug', async (req, res) => {
  const db = getDb();
  const listing = await db.prepare(`
    SELECT l.*, b.name as brand_name, b.slug as brand_slug, m.name as model_name, m.slug as model_slug,
           u.name as seller_name, u.phone as seller_phone, u.email as seller_email,
           u.created_at as seller_since, u.role as seller_role
    FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    JOIN users u ON l.user_id = u.id
    WHERE l.slug = ?
  `).get(req.params.slug);

  if (!listing) {
    return res.status(404).render('pages/404', { title: 'İlan Bulunamadı' });
  }

  // Görüntülenme sayısını artır
  await db.prepare('UPDATE listings SET view_count = view_count + 1 WHERE id = ?').run(listing.id);

  const images = await db.prepare('SELECT * FROM listing_images WHERE listing_id = ? ORDER BY sort_order').all(listing.id);
  const features = (await db.prepare('SELECT feature FROM listing_features WHERE listing_id = ?').all(listing.id)).map(r => r.feature);

  const isFavorited = req.session.user ?
    !!await db.prepare('SELECT id FROM favorites WHERE user_id = ? AND listing_id = ?').get(req.session.user.id, listing.id) : false;

  const similarListings = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    WHERE l.status = 'active' AND l.id != ? AND (l.brand_id = ? OR l.model_id = ?)
    ORDER BY ABS(l.price - ?) ASC LIMIT 4
  `).all(listing.id, listing.brand_id, listing.model_id, listing.price);

  // Satıcının diğer ilanları
  const sellerListings = await db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    WHERE l.user_id = ? AND l.id != ? AND l.status = 'active'
    LIMIT 3
  `).all(listing.user_id, listing.id);

  res.render('pages/ilan-detay', {
    title: `${listing.title} - Araba İncele Al Sat`,
    listing, images, features, isFavorited, similarListings, sellerListings
  });
});

module.exports = router;
