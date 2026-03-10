const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');
const { isBusiness } = require('../middleware/auth');

// İşletme Paneli - GET /isletme/panel
router.get('/panel', isBusiness, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;
  const business = db.prepare('SELECT * FROM businesses WHERE user_id = ?').get(userId);

  if (!business) {
    return res.render('pages/isletme-paneli', {
      title: 'İşletme Paneli - Araba İncele Al Sat',
      business: null, stats: {}, todayAppointments: [], quoteRequests: [], recentReviews: [],
      businessPage: null, businessData: null
    });
  }

  const stats = {
    todayAppointments: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND date=date('now')").get(business.id).c,
    weekAppointments: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND date BETWEEN date('now') AND date('now', '+7 days')").get(business.id).c,
    totalAppointments: db.prepare('SELECT COUNT(*) as c FROM appointments WHERE business_id=?').get(business.id).c,
    pendingAppointments: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND status='pending'").get(business.id).c,
    pendingQuotes: db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE business_id=? AND status='pending'").get(business.id).c,
    avgRating: business.rating,
    reviewCount: business.review_count,
  };

  const todayAppointments = db.prepare(`
    SELECT a.*, u.name as customer_name, u.phone as customer_phone
    FROM appointments a JOIN users u ON a.user_id = u.id
    WHERE a.business_id = ? AND a.date = date('now')
    ORDER BY a.time ASC
  `).all(business.id);

  const quoteRequests = db.prepare(`
    SELECT qr.*, u.name as customer_name, u.phone as customer_phone
    FROM quote_requests qr JOIN users u ON qr.user_id = u.id
    WHERE qr.business_id = ? AND qr.status = 'pending'
    ORDER BY qr.created_at DESC LIMIT 5
  `).all(business.id);

  const recentReviews = db.prepare(`
    SELECT r.*, u.name as reviewer_name, u.avatar as reviewer_avatar
    FROM reviews r JOIN users u ON r.user_id = u.id
    WHERE r.business_id = ?
    ORDER BY r.created_at DESC LIMIT 5
  `).all(business.id);

  res.render('pages/isletme-paneli', {
    title: 'İşletme Paneli - Araba İncele Al Sat',
    business, stats, todayAppointments, quoteRequests, recentReviews,
    businessPage: null, businessData: null
  });
});

// Randevular - GET /isletme/randevular
router.get('/randevular', isBusiness, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT * FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.redirect('/isletme/panel');

  const { tarih, durum } = req.query;
  let where = 'WHERE a.business_id = ?';
  const params = [business.id];
  if (tarih) { where += ' AND a.date = ?'; params.push(tarih); }
  if (durum) { where += ' AND a.status = ?'; params.push(durum); }

  const appointments = db.prepare(`
    SELECT a.*, u.name as customer_name, u.phone as customer_phone, u.email as customer_email
    FROM appointments a JOIN users u ON a.user_id = u.id
    ${where} ORDER BY a.date DESC, a.time ASC
  `).all(...params);

  const statusCounts = {
    all: db.prepare('SELECT COUNT(*) as c FROM appointments WHERE business_id=?').get(business.id).c,
    pending: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND status='pending'").get(business.id).c,
    confirmed: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND status='confirmed'").get(business.id).c,
    completed: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND status='completed'").get(business.id).c,
    cancelled: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND status='cancelled'").get(business.id).c,
  };

  res.render('pages/isletme-paneli', {
    title: 'Randevular - İşletme Paneli',
    business, stats: {}, todayAppointments: [], quoteRequests: [], recentReviews: [],
    businessPage: 'randevular', businessData: { appointments, statusCounts, filters: req.query }
  });
});

// Randevu durumunu güncelle - POST /isletme/randevu/:id/durum
router.post('/randevu/:id/durum', isBusiness, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT id FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.redirect('/isletme/panel');

  const appt = db.prepare('SELECT * FROM appointments WHERE id = ? AND business_id = ?').get(req.params.id, business.id);
  if (!appt) {
    req.flash('error', 'Randevu bulunamadı.');
    return res.redirect('/isletme/randevular');
  }

  const { status } = req.body;
  const allowed = ['confirmed', 'cancelled', 'completed'];
  if (!allowed.includes(status)) {
    req.flash('error', 'Geçersiz durum.');
    return res.redirect('/isletme/randevular');
  }

  db.prepare('UPDATE appointments SET status = ? WHERE id = ?').run(status, appt.id);

  const statusText = { confirmed: 'onaylandı', cancelled: 'iptal edildi', completed: 'tamamlandı' };
  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'appointment', 'Randevu Güncellendi', ?, '/kullanici/randevular')")
    .run(appt.user_id, `${appt.date} ${appt.time} tarihli randevunuz ${statusText[status]}`);

  req.flash('success', `Randevu ${statusText[status]}.`);
  res.redirect('/isletme/randevular');
});

// Teklifler - GET /isletme/teklifler
router.get('/teklifler', isBusiness, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT * FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.redirect('/isletme/panel');

  const quotes = db.prepare(`
    SELECT qr.*, u.name as customer_name, u.phone as customer_phone, u.email as customer_email
    FROM quote_requests qr JOIN users u ON qr.user_id = u.id
    WHERE qr.business_id = ? ORDER BY qr.created_at DESC
  `).all(business.id);

  res.render('pages/isletme-paneli', {
    title: 'Teklif İstekleri - İşletme Paneli',
    business, stats: {}, todayAppointments: [], quoteRequests: [], recentReviews: [],
    businessPage: 'teklifler', businessData: { quotes }
  });
});

// Teklif yanıtla - POST /isletme/teklif/:id/yanit
router.post('/teklif/:id/yanit', isBusiness, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT id, name FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.redirect('/isletme/panel');

  const quote = db.prepare('SELECT * FROM quote_requests WHERE id = ? AND business_id = ?').get(req.params.id, business.id);
  if (!quote) {
    req.flash('error', 'Teklif isteği bulunamadı.');
    return res.redirect('/isletme/teklifler');
  }

  const { status, quote_amount } = req.body;
  if (status === 'quoted' && !quote_amount) {
    req.flash('error', 'Teklif tutarı giriniz.');
    return res.redirect('/isletme/teklifler');
  }

  db.prepare('UPDATE quote_requests SET status = ?, quote_amount = ? WHERE id = ?').run(status, quote_amount || null, quote.id);

  const msgText = status === 'quoted' ? `${business.name}: ${new Intl.NumberFormat('tr-TR').format(quote_amount)} ₺ teklif verdi` : `${business.name} teklif isteğinizi reddetti`;
  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'quote', 'Teklif Yanıtı', ?, '/kullanici/panel')")
    .run(quote.user_id, msgText);

  req.flash('success', status === 'quoted' ? 'Teklif gönderildi!' : 'Teklif reddedildi.');
  res.redirect('/isletme/teklifler');
});

// Değerlendirmeler - GET /isletme/degerlendirmeler
router.get('/degerlendirmeler', isBusiness, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT * FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.redirect('/isletme/panel');

  const reviews = db.prepare(`
    SELECT r.*, u.name as reviewer_name, u.avatar as reviewer_avatar
    FROM reviews r JOIN users u ON r.user_id = u.id
    WHERE r.business_id = ? ORDER BY r.created_at DESC
  `).all(business.id);

  const ratingDist = {};
  for (let i = 1; i <= 5; i++) {
    ratingDist[i] = db.prepare('SELECT COUNT(*) as c FROM reviews WHERE business_id = ? AND rating = ?').get(business.id, i).c;
  }

  res.render('pages/isletme-paneli', {
    title: 'Değerlendirmeler - İşletme Paneli',
    business, stats: {}, todayAppointments: [], quoteRequests: [], recentReviews: [],
    businessPage: 'degerlendirmeler', businessData: { reviews, ratingDist }
  });
});

// İşletme Profil Düzenle - GET /isletme/profil
router.get('/profil', isBusiness, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT * FROM businesses WHERE user_id = ?').get(req.session.user.id);

  res.render('pages/isletme-paneli', {
    title: 'İşletme Profili Düzenle - İşletme Paneli',
    business, stats: {}, todayAppointments: [], quoteRequests: [], recentReviews: [],
    businessPage: 'profil', businessData: { business }
  });
});

// İşletme Profil Kaydet - POST /isletme/profil
router.post('/profil', isBusiness, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT * FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) {
    req.flash('error', 'İşletme bulunamadı.');
    return res.redirect('/isletme/panel');
  }

  const { name, description, address, city, district, phone, email, website, working_hours, services } = req.body;

  db.prepare(`UPDATE businesses SET name=?, description=?, address=?, city=?, district=?, phone=?, email=?, website=?, working_hours=?, services=? WHERE id=?`)
    .run(name || business.name, description || business.description, address || business.address,
      city || business.city, district || business.district, phone || business.phone,
      email || business.email, website || null, working_hours || null, services || business.services, business.id);

  req.flash('success', 'İşletme profili güncellendi!');
  res.redirect('/isletme/profil');
});

module.exports = router;
