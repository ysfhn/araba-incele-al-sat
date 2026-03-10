const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { getDb } = require('../db/database');
const { isGuest } = require('../middleware/auth');

// GET /auth/giris
router.get('/giris', isGuest, (req, res) => {
  res.render('pages/giris-kayit', { title: 'Giriş Yap / Kayıt Ol - Araba İncele Al Sat' });
});

// POST /auth/giris
router.post('/giris', (req, res) => {
  const { email, password, remember } = req.body;
  const db = getDb();

  if (!email || !password) {
    req.flash('error', 'E-posta ve şifre zorunludur.');
    return res.redirect('/giris');
  }

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) {
    req.flash('error', 'E-posta veya şifre hatalı.');
    return res.redirect('/giris');
  }

  if (!bcrypt.compareSync(password, user.password)) {
    req.flash('error', 'E-posta veya şifre hatalı.');
    return res.redirect('/giris');
  }

  // Session'a kullanıcıyı kaydet
  req.session.user = {
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    avatar: user.avatar,
    is_verified: user.is_verified
  };

  if (remember) {
    req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // 30 gün
  }

  req.flash('success', `Hoş geldiniz, ${user.name}!`);

  // Role göre yönlendirme
  if (user.role === 'admin') return res.redirect('/admin/panel');
  if (user.role === 'kurumsal') return res.redirect('/isletme/panel');
  return res.redirect('/kullanici/panel');
});

// POST /auth/kayit
router.post('/kayit', (req, res) => {
  const { name, email, password, password_confirm, phone, role } = req.body;
  const db = getDb();

  // Validasyon
  if (!name || !email || !password) {
    req.flash('error', 'Tüm alanları doldurunuz.');
    return res.redirect('/giris');
  }

  if (password !== password_confirm) {
    req.flash('error', 'Şifreler uyuşmuyor.');
    return res.redirect('/giris');
  }

  if (password.length < 6) {
    req.flash('error', 'Şifre en az 6 karakter olmalıdır.');
    return res.redirect('/giris');
  }

  // Email kontrolü
  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) {
    req.flash('error', 'Bu e-posta adresi zaten kayıtlı.');
    return res.redirect('/giris');
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const userRole = (role === 'kurumsal') ? 'kurumsal' : 'bireysel';

  const result = db.prepare(
    'INSERT INTO users (email, password, name, phone, role) VALUES (?, ?, ?, ?, ?)'
  ).run(email, hashedPassword, name, phone || null, userRole);

  // Otomatik giriş
  req.session.user = {
    id: result.lastInsertRowid,
    email,
    name,
    role: userRole,
    avatar: null,
    is_verified: 0
  };

  req.flash('success', 'Hesabınız başarıyla oluşturuldu!');
  if (userRole === 'kurumsal') return res.redirect('/isletme/panel');
  return res.redirect('/kullanici/panel');
});

// GET /auth/cikis
router.get('/cikis', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
