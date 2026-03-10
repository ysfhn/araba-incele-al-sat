const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');

// Forum Ana Sayfa - GET /forum
router.get('/', (req, res) => {
  const db = getDb();
  const { kategori } = req.query;

  const categories = db.prepare('SELECT * FROM forum_categories ORDER BY sort_order').all();

  let topicsWhere = '';
  const topicsParams = [];
  if (kategori) {
    topicsWhere = 'WHERE fc.slug = ?';
    topicsParams.push(kategori);
  }

  const recentTopics = db.prepare(`
    SELECT ft.*, u.name as author_name, u.avatar as author_avatar, fc.name as category_name, fc.icon as category_icon, fc.color as category_color,
           lu.name as last_reply_name
    FROM forum_topics ft
    JOIN users u ON ft.user_id = u.id
    JOIN forum_categories fc ON ft.category_id = fc.id
    LEFT JOIN users lu ON ft.last_reply_by = lu.id
    ${topicsWhere}
    ORDER BY ft.is_pinned DESC, ft.last_reply_at DESC
    LIMIT 20
  `).all(...topicsParams);

  const popularTopics = db.prepare(`
    SELECT ft.*, u.name as author_name, fc.name as category_name
    FROM forum_topics ft
    JOIN users u ON ft.user_id = u.id
    JOIN forum_categories fc ON ft.category_id = fc.id
    ORDER BY ft.view_count DESC LIMIT 5
  `).all();

  const stats = {
    topics: db.prepare('SELECT COUNT(*) as c FROM forum_topics').get().c,
    replies: db.prepare('SELECT COUNT(*) as c FROM forum_replies').get().c,
    users: db.prepare('SELECT COUNT(*) as c FROM users').get().c
  };

  res.render('pages/forum', {
    title: 'Forum - Araba İncele Al Sat',
    categories, recentTopics, popularTopics, stats,
    activeCategory: kategori || null
  });
});

// Yeni Konu Form - GET /forum/yeni-konu
router.get('/yeni-konu', (req, res) => {
  if (!req.session.user) {
    req.flash('error', 'Konu oluşturmak için giriş yapmalısınız.');
    return res.redirect('/giris');
  }

  const db = getDb();
  const categories = db.prepare('SELECT * FROM forum_categories ORDER BY sort_order').all();

  res.render('pages/forum-konu', {
    title: 'Yeni Konu Oluştur - Forum - Araba İncele Al Sat',
    topic: null, replies: [], userLikes: [], relatedTopics: [],
    forumPage: 'yeni-konu', categories
  });
});

// Yeni Konu Kaydet - POST /forum/yeni-konu
router.post('/yeni-konu', (req, res) => {
  if (!req.session.user) {
    req.flash('error', 'Giriş yapmalısınız.');
    return res.redirect('/giris');
  }

  const db = getDb();
  const { category_id, title, content } = req.body;

  if (!category_id || !title || !content) {
    req.flash('error', 'Tüm alanları doldurunuz.');
    return res.redirect('/forum/yeni-konu');
  }

  if (title.length < 5) {
    req.flash('error', 'Başlık en az 5 karakter olmalı.');
    return res.redirect('/forum/yeni-konu');
  }

  if (content.length < 20) {
    req.flash('error', 'İçerik en az 20 karakter olmalı.');
    return res.redirect('/forum/yeni-konu');
  }

  const slug = title.toLowerCase()
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);

  db.prepare('INSERT INTO forum_topics (category_id, user_id, title, slug, content) VALUES (?, ?, ?, ?, ?)')
    .run(category_id, req.session.user.id, title, slug, content);

  db.prepare('UPDATE forum_categories SET topic_count = topic_count + 1 WHERE id = ?').run(category_id);

  req.flash('success', 'Konunuz oluşturuldu!');
  res.redirect(`/forum/konu/${slug}`);
});

// Forum Konu Detay - GET /forum/konu/:slug
router.get('/konu/:slug', (req, res) => {
  const db = getDb();
  const topic = db.prepare(`
    SELECT ft.*, u.name as author_name, u.avatar as author_avatar, u.role as author_role,
           u.created_at as author_since, fc.name as category_name, fc.slug as category_slug
    FROM forum_topics ft
    JOIN users u ON ft.user_id = u.id
    JOIN forum_categories fc ON ft.category_id = fc.id
    WHERE ft.slug = ?
  `).get(req.params.slug);

  if (!topic) {
    return res.status(404).render('pages/404', { title: 'Konu Bulunamadı' });
  }

  // Görüntülenme artır
  db.prepare('UPDATE forum_topics SET view_count = view_count + 1 WHERE id = ?').run(topic.id);

  const replies = db.prepare(`
    SELECT fr.*, u.name as author_name, u.avatar as author_avatar, u.role as author_role,
           u.created_at as author_since
    FROM forum_replies fr
    JOIN users u ON fr.user_id = u.id
    WHERE fr.topic_id = ?
    ORDER BY fr.created_at ASC
  `).all(topic.id);

  // Kullanıcının beğenileri
  let userLikes = [];
  if (req.session.user) {
    userLikes = db.prepare(`
      SELECT reply_id FROM forum_likes WHERE user_id = ? AND reply_id IN (SELECT id FROM forum_replies WHERE topic_id = ?)
    `).all(req.session.user.id, topic.id).map(r => r.reply_id);
  }

  const relatedTopics = db.prepare(`
    SELECT ft.*, u.name as author_name
    FROM forum_topics ft
    JOIN users u ON ft.user_id = u.id
    WHERE ft.category_id = ? AND ft.id != ?
    ORDER BY ft.reply_count DESC LIMIT 5
  `).all(topic.category_id, topic.id);

  res.render('pages/forum-konu', {
    title: `${topic.title} - Forum - Araba İncele Al Sat`,
    topic, replies, userLikes, relatedTopics,
    forumPage: null, categories: []
  });
});

// Yeni Yanıt - POST /forum/konu/:slug/yanit
router.post('/konu/:slug/yanit', (req, res) => {
  if (!req.session.user) {
    req.flash('error', 'Yanıt yazmak için giriş yapmalısınız.');
    return res.redirect(`/forum/konu/${req.params.slug}`);
  }

  const db = getDb();
  const topic = db.prepare('SELECT * FROM forum_topics WHERE slug = ?').get(req.params.slug);
  if (!topic || topic.is_locked) {
    req.flash('error', 'Bu konuya yanıt yazılamaz.');
    return res.redirect('/forum');
  }

  const { content } = req.body;
  if (!content || content.trim().length < 10) {
    req.flash('error', 'Yanıt en az 10 karakter olmalıdır.');
    return res.redirect(`/forum/konu/${req.params.slug}`);
  }

  db.prepare('INSERT INTO forum_replies (topic_id, user_id, content) VALUES (?, ?, ?)').run(topic.id, req.session.user.id, content.trim());
  db.prepare('UPDATE forum_topics SET reply_count = reply_count + 1, last_reply_at = CURRENT_TIMESTAMP, last_reply_by = ? WHERE id = ?').run(req.session.user.id, topic.id);
  db.prepare('UPDATE forum_categories SET post_count = post_count + 1 WHERE id = ?').run(topic.category_id);

  // Konu sahibine bildirim
  if (topic.user_id !== req.session.user.id) {
    db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'forum', 'Yeni Yanıt', ?, ?)")
      .run(topic.user_id, `${req.session.user.name} konunuza yanıt yazdı: "${topic.title}"`, `/forum/konu/${topic.slug}`);
  }

  req.flash('success', 'Yanıtınız eklendi!');
  res.redirect(`/forum/konu/${req.params.slug}`);
});

module.exports = router;
