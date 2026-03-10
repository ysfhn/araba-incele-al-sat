const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { getDb } = require('../db/database');
const { isAuthenticated } = require('../middleware/auth');

// Kullanıcı Paneli - GET /kullanici/panel
router.get('/panel', isAuthenticated, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;

  const stats = {
    activeListings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id=? AND status='active'").get(userId).c,
    totalListings: db.prepare('SELECT COUNT(*) as c FROM listings WHERE user_id=?').get(userId).c,
    favorites: db.prepare('SELECT COUNT(*) as c FROM favorites WHERE user_id=?').get(userId).c,
    unreadMessages: db.prepare('SELECT COUNT(*) as c FROM messages WHERE receiver_id=? AND is_read=0').get(userId).c,
    forumReplies: db.prepare('SELECT COUNT(*) as c FROM forum_replies WHERE user_id=?').get(userId).c,
    forumTopics: db.prepare('SELECT COUNT(*) as c FROM forum_topics WHERE user_id=?').get(userId).c,
    totalViews: db.prepare('SELECT COALESCE(SUM(view_count),0) as c FROM listings WHERE user_id=?').get(userId).c,
  };

  const recentListings = db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id
    WHERE l.user_id = ? ORDER BY l.created_at DESC LIMIT 3
  `).all(userId);

  const recentFavorites = db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM favorites f
    JOIN listings l ON f.listing_id = l.id
    JOIN brands b ON l.brand_id = b.id
    JOIN models m ON l.model_id = m.id
    WHERE f.user_id = ? ORDER BY f.created_at DESC LIMIT 3
  `).all(userId);

  const messages = db.prepare(`
    SELECT m.*, u.name as sender_name, u.avatar as sender_avatar
    FROM messages m JOIN users u ON m.sender_id = u.id
    WHERE m.receiver_id = ? ORDER BY m.created_at DESC LIMIT 5
  `).all(userId);

  const forumActivity = db.prepare(`
    SELECT fr.content, ft.title as topic_title, ft.slug as topic_slug, fr.created_at
    FROM forum_replies fr JOIN forum_topics ft ON fr.topic_id = ft.id
    WHERE fr.user_id = ? ORDER BY fr.created_at DESC LIMIT 3
  `).all(userId);

  const notifications = db.prepare(`
    SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 5
  `).all(userId);

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);

  res.render('pages/kullanici-paneli', {
    title: 'Kullanıcı Paneli - Araba İncele Al Sat',
    stats, recentListings, recentFavorites, messages, forumActivity, notifications, userProfile: user
  });
});

// İlanlarım - GET /kullanici/ilanlarim
router.get('/ilanlarim', isAuthenticated, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;
  const { durum } = req.query;

  let where = 'WHERE l.user_id = ?';
  const params = [userId];
  if (durum) { where += ' AND l.status = ?'; params.push(durum); }

  const listings = db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id
    ${where} ORDER BY l.created_at DESC
  `).all(...params);

  const statusCounts = {
    all: db.prepare('SELECT COUNT(*) as c FROM listings WHERE user_id=?').get(userId).c,
    active: db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id=? AND status='active'").get(userId).c,
    pending: db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id=? AND status='pending'").get(userId).c,
    sold: db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id=? AND status='sold'").get(userId).c,
    draft: db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id=? AND status='draft'").get(userId).c,
  };

  res.render('pages/kullanici-paneli', {
    title: 'İlanlarım - Araba İncele Al Sat',
    stats: statusCounts, recentListings: [], recentFavorites: [], messages: [], forumActivity: [], notifications: [],
    userProfile: db.prepare('SELECT * FROM users WHERE id = ?').get(userId),
    userPage: 'ilanlarim', userData: { listings, statusCounts, filters: req.query }
  });
});

// Favorilerim - GET /kullanici/favorilerim
router.get('/favorilerim', isAuthenticated, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;

  const favorites = db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name, f.created_at as favorited_at,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM favorites f JOIN listings l ON f.listing_id = l.id
    JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id
    WHERE f.user_id = ? ORDER BY f.created_at DESC
  `).all(userId);

  res.render('pages/kullanici-paneli', {
    title: 'Favorilerim - Araba İncele Al Sat',
    stats: { favorites: favorites.length }, recentListings: [], recentFavorites: [], messages: [], forumActivity: [], notifications: [],
    userProfile: db.prepare('SELECT * FROM users WHERE id = ?').get(userId),
    userPage: 'favorilerim', userData: { favorites }
  });
});

// Mesajlarım - GET /kullanici/mesajlar
router.get('/mesajlar', isAuthenticated, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;

  // Konuşma listesi - son mesajları grupla
  const rawConversations = db.prepare(`
    SELECT 
      CASE WHEN m.sender_id = ? THEN m.receiver_id ELSE m.sender_id END as other_user_id,
      MAX(m.id) as last_message_id
    FROM messages m
    WHERE m.sender_id = ? OR m.receiver_id = ?
    GROUP BY other_user_id
    ORDER BY last_message_id DESC
  `).all(userId, userId, userId);

  const conversations = rawConversations.map(c => {
    const lastMsg = db.prepare('SELECT * FROM messages WHERE id = ?').get(c.last_message_id);
    const otherUser = db.prepare('SELECT id, name, avatar, role FROM users WHERE id = ?').get(c.other_user_id);
    const unread = db.prepare('SELECT COUNT(*) as c FROM messages WHERE sender_id = ? AND receiver_id = ? AND is_read = 0').get(c.other_user_id, userId).c;
    return { otherUser, lastMessage: lastMsg, unreadCount: unread };
  });

  res.render('pages/kullanici-paneli', {
    title: 'Mesajlarım - Araba İncele Al Sat',
    stats: { unreadMessages: conversations.reduce((s, c) => s + c.unreadCount, 0) }, recentListings: [], recentFavorites: [], messages: [], forumActivity: [], notifications: [],
    userProfile: db.prepare('SELECT * FROM users WHERE id = ?').get(userId),
    userPage: 'mesajlar', userData: { conversations }
  });
});

// Mesaj konuşma detay - GET /kullanici/mesajlar/:userId
router.get('/mesajlar/:userId', isAuthenticated, (req, res) => {
  const db = getDb();
  const myId = req.session.user.id;
  const otherId = Number(req.params.userId);

  const otherUser = db.prepare('SELECT id, name, avatar, role FROM users WHERE id = ?').get(otherId);
  if (!otherUser) return res.redirect('/kullanici/mesajlar');

  const messages = db.prepare(`
    SELECT m.*, u.name as sender_name, u.avatar as sender_avatar
    FROM messages m JOIN users u ON m.sender_id = u.id
    WHERE (m.sender_id = ? AND m.receiver_id = ?) OR (m.sender_id = ? AND m.receiver_id = ?)
    ORDER BY m.created_at ASC
  `).all(myId, otherId, otherId, myId);

  // Okundu işaretle
  db.prepare('UPDATE messages SET is_read = 1 WHERE sender_id = ? AND receiver_id = ? AND is_read = 0').run(otherId, myId);

  res.render('pages/kullanici-paneli', {
    title: `${otherUser.name} ile Mesajlar - Araba İncele Al Sat`,
    stats: {}, recentListings: [], recentFavorites: [], messages: [], forumActivity: [], notifications: [],
    userProfile: db.prepare('SELECT * FROM users WHERE id = ?').get(myId),
    userPage: 'mesaj-detay', userData: { messages, otherUser }
  });
});

// Mesaj gönder (form POST) - POST /kullanici/mesajlar/:userId
router.post('/mesajlar/:userId', isAuthenticated, (req, res) => {
  const db = getDb();
  const { content, listing_id } = req.body;
  const otherId = Number(req.params.userId);

  if (!content || !content.trim()) {
    req.flash('error', 'Mesaj boş olamaz.');
    return res.redirect(`/kullanici/mesajlar/${otherId}`);
  }

  db.prepare('INSERT INTO messages (sender_id, receiver_id, listing_id, content) VALUES (?, ?, ?, ?)')
    .run(req.session.user.id, otherId, listing_id || null, content.trim());

  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'message', 'Yeni Mesaj', ?, '/kullanici/mesajlar')")
    .run(otherId, `${req.session.user.name} size mesaj gönderdi`);

  res.redirect(`/kullanici/mesajlar/${otherId}`);
});

// Bildirimlerim - GET /kullanici/bildirimler
router.get('/bildirimler', isAuthenticated, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;

  const notifications = db.prepare('SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT 50').all(userId);
  const unreadCount = db.prepare('SELECT COUNT(*) as c FROM notifications WHERE user_id = ? AND is_read = 0').get(userId).c;

  res.render('pages/kullanici-paneli', {
    title: 'Bildirimlerim - Araba İncele Al Sat',
    stats: { unreadNotifications: unreadCount }, recentListings: [], recentFavorites: [], messages: [], forumActivity: [], notifications: [],
    userProfile: db.prepare('SELECT * FROM users WHERE id = ?').get(userId),
    userPage: 'bildirimler', userData: { notifications, unreadCount }
  });
});

// Randevularım - GET /kullanici/randevular
router.get('/randevular', isAuthenticated, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;

  const appointments = db.prepare(`
    SELECT a.*, b.name as business_name, b.slug as business_slug, b.city as business_city, b.phone as business_phone
    FROM appointments a JOIN businesses b ON a.business_id = b.id
    WHERE a.user_id = ? ORDER BY a.date DESC, a.time DESC
  `).all(userId);

  res.render('pages/kullanici-paneli', {
    title: 'Randevularım - Araba İncele Al Sat',
    stats: {}, recentListings: [], recentFavorites: [], messages: [], forumActivity: [], notifications: [],
    userProfile: db.prepare('SELECT * FROM users WHERE id = ?').get(userId),
    userPage: 'randevular', userData: { appointments }
  });
});

// Profil Düzenle - GET /kullanici/profil
router.get('/profil', isAuthenticated, (req, res) => {
  const db = getDb();
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.session.user.id);

  res.render('pages/kullanici-paneli', {
    title: 'Profil Düzenle - Araba İncele Al Sat',
    stats: {}, recentListings: [], recentFavorites: [], messages: [], forumActivity: [], notifications: [],
    userProfile: user,
    userPage: 'profil', userData: { user }
  });
});

// Profil Kaydet - POST /kullanici/profil
router.post('/profil', isAuthenticated, (req, res) => {
  const db = getDb();
  const { name, phone } = req.body;

  if (!name || !name.trim()) {
    req.flash('error', 'Ad soyad zorunludur.');
    return res.redirect('/kullanici/profil');
  }

  db.prepare('UPDATE users SET name = ?, phone = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?')
    .run(name.trim(), phone || null, req.session.user.id);

  req.session.user.name = name.trim();
  req.flash('success', 'Profiliniz güncellendi!');
  res.redirect('/kullanici/profil');
});

// Şifre Değiştir - POST /kullanici/sifre
router.post('/sifre', isAuthenticated, (req, res) => {
  const db = getDb();
  const { current_password, new_password, new_password_confirm } = req.body;

  if (!current_password || !new_password) {
    req.flash('error', 'Mevcut ve yeni şifre zorunludur.');
    return res.redirect('/kullanici/profil');
  }

  if (new_password.length < 6) {
    req.flash('error', 'Yeni şifre en az 6 karakter olmalıdır.');
    return res.redirect('/kullanici/profil');
  }

  if (new_password !== new_password_confirm) {
    req.flash('error', 'Yeni şifreler uyuşmuyor.');
    return res.redirect('/kullanici/profil');
  }

  const user = db.prepare('SELECT password FROM users WHERE id = ?').get(req.session.user.id);
  if (!bcrypt.compareSync(current_password, user.password)) {
    req.flash('error', 'Mevcut şifre hatalı.');
    return res.redirect('/kullanici/profil');
  }

  const hashed = bcrypt.hashSync(new_password, 10);
  db.prepare('UPDATE users SET password = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(hashed, req.session.user.id);

  req.flash('success', 'Şifreniz değiştirildi!');
  res.redirect('/kullanici/profil');
});

module.exports = router;
