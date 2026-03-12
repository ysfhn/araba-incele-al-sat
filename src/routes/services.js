const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');

// Servis Rehberi - GET /servis
const VALID_TYPES = ['servis', 'galeri', 'yedek_parca', 'ekspertiz'];

router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const { tur, sehir, arama } = req.query;

    let where = 'WHERE b.is_verified = 1';
    const params = [];
    if (tur && VALID_TYPES.includes(tur)) { where += ' AND b.type = ?'; params.push(tur); }
    if (sehir) { where += ' AND b.city = ?'; params.push(sehir); }
    if (arama) {
      const searchTerm = String(arama).slice(0, 100);
      where += ' AND (b.name LIKE ? OR b.description LIKE ?)';
      params.push(`%${searchTerm}%`, `%${searchTerm}%`);
    }

    const businesses = await db.prepare(`SELECT b.* FROM businesses b ${where} ORDER BY b.is_premium DESC, b.rating DESC`).all(...params);
    const cities = (await db.prepare("SELECT DISTINCT city FROM businesses WHERE is_verified=1 AND city IS NOT NULL ORDER BY city").all()).map(r => r.city);

    res.render('pages/servis-rehberi', {
      title: 'Servis Rehberi - Araba İncele Al Sat',
      businesses, cities, filters: req.query
    });
  } catch (err) {
    console.error('Servis rehberi hatası:', err);
    req.flash('error', 'Servis listesi yüklenirken bir hata oluştu.');
    res.redirect('/');
  }
});

// İşletme Profili - GET /servis/:slug
router.get('/:slug', async (req, res) => {
  try {
    const db = getDb();
    const business = await db.prepare(`
      SELECT b.*, u.name as owner_name FROM businesses b
      JOIN users u ON b.user_id = u.id
      WHERE b.slug = ?
    `).get(req.params.slug);

    if (!business) {
      return res.status(404).render('pages/404', { title: 'İşletme Bulunamadı' });
    }

    const reviews = await db.prepare(`
      SELECT r.*, u.name as reviewer_name, u.avatar as reviewer_avatar
      FROM reviews r JOIN users u ON r.user_id = u.id
      WHERE r.business_id = ?
      ORDER BY r.created_at DESC LIMIT 10
    `).all(business.id);

    const ratingDist = {};
    for (let i = 1; i <= 5; i++) {
      ratingDist[i] = (await db.prepare('SELECT COUNT(*) as c FROM reviews WHERE business_id = ? AND rating = ?').get(business.id, i)).c;
    }

    res.render('pages/isletme-profili', {
      title: `${business.name} - Araba İncele Al Sat`,
      business, reviews, ratingDist
    });
  } catch (err) {
    console.error('İşletme profili hatası:', err);
    req.flash('error', 'İşletme sayfası yüklenirken bir hata oluştu.');
    res.redirect('/servis');
  }
});

module.exports = router;
