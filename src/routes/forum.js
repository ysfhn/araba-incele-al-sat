const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');

// Slug whitelist: yalnızca harf, rakam ve tire
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Forum Ana Sayfa - GET /forum
router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const { kategori } = req.query;

    const categories = await db.prepare('SELECT * FROM forum_categories ORDER BY sort_order').all();

    let topicsWhere = '';
    const topicsParams = [];
    if (kategori) {
      // Kategori slug whitelist kontrolü
      const validSlugs = categories.map(c => c.slug);
      if (!validSlugs.includes(kategori)) {
        return res.redirect('/forum');
      }
      topicsWhere = 'WHERE fc.slug = ?';
      topicsParams.push(kategori);
    }

    const recentTopics = await db.prepare(`
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

    const popularTopics = await db.prepare(`
      SELECT ft.*, u.name as author_name, fc.name as category_name
      FROM forum_topics ft
      JOIN users u ON ft.user_id = u.id
      JOIN forum_categories fc ON ft.category_id = fc.id
      ORDER BY ft.view_count DESC LIMIT 5
    `).all();

    const stats = {
      topics: (await db.prepare('SELECT COUNT(*) as c FROM forum_topics').get()).c,
      replies: (await db.prepare('SELECT COUNT(*) as c FROM forum_replies').get()).c,
      users: (await db.prepare('SELECT COUNT(*) as c FROM users').get()).c
    };

    res.render('pages/forum', {
      title: 'Forum - Araba İncele Al Sat',
      categories, recentTopics, popularTopics, stats,
      activeCategory: kategori || null
    });
  } catch (err) {
    console.error('Forum ana sayfa hatası:', err);
    res.status(500).render('pages/404', { title: 'Sunucu Hatası' });
  }
});

// Yeni Konu Form - GET /forum/yeni-konu
router.get('/yeni-konu', async (req, res) => {
  try {
    if (!req.session.user) {
      req.flash('error', 'Konu oluşturmak için giriş yapmalısınız.');
      return res.redirect('/giris');
    }

    const db = getDb();
    const categories = await db.prepare('SELECT * FROM forum_categories ORDER BY sort_order').all();

    res.render('pages/forum-konu', {
      title: 'Yeni Konu Oluştur - Forum - Araba İncele Al Sat',
      topic: null, replies: [], userLikes: [], relatedTopics: [],
      forumPage: 'yeni-konu', categories
    });
  } catch (err) {
    console.error('Yeni konu formu hatası:', err);
    res.status(500).render('pages/404', { title: 'Sunucu Hatası' });
  }
});

// Yeni Konu Kaydet - POST /forum/yeni-konu
router.post('/yeni-konu', async (req, res) => {
  try {
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

    const trimmedTitle = title.trim();
    const trimmedContent = content.trim();

    if (trimmedTitle.length < 5) {
      req.flash('error', 'Başlık en az 5 karakter olmalı.');
      return res.redirect('/forum/yeni-konu');
    }

    if (trimmedTitle.length > 200) {
      req.flash('error', 'Başlık en fazla 200 karakter olabilir.');
      return res.redirect('/forum/yeni-konu');
    }

    if (trimmedContent.length < 20) {
      req.flash('error', 'İçerik en az 20 karakter olmalı.');
      return res.redirect('/forum/yeni-konu');
    }

    if (trimmedContent.length > 10000) {
      req.flash('error', 'İçerik en fazla 10.000 karakter olabilir.');
      return res.redirect('/forum/yeni-konu');
    }

    // Kategori varlık kontrolü
    const catId = parseInt(category_id, 10);
    if (isNaN(catId)) {
      req.flash('error', 'Geçersiz kategori.');
      return res.redirect('/forum/yeni-konu');
    }
    const categoryExists = await db.prepare('SELECT id FROM forum_categories WHERE id = ?').get(catId);
    if (!categoryExists) {
      req.flash('error', 'Geçersiz kategori.');
      return res.redirect('/forum/yeni-konu');
    }

    const slug = trimmedTitle.toLowerCase()
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')
      .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);

    await db.prepare('INSERT INTO forum_topics (category_id, user_id, title, slug, content) VALUES (?, ?, ?, ?, ?)')
      .run(catId, req.session.user.id, trimmedTitle, slug, trimmedContent);

    await db.prepare('UPDATE forum_categories SET topic_count = topic_count + 1 WHERE id = ?').run(catId);

    req.flash('success', 'Konunuz oluşturuldu!');
    res.redirect(`/forum/konu/${encodeURIComponent(slug)}`);
  } catch (err) {
    console.error('Yeni konu kayıt hatası:', err);
    req.flash('error', 'Konu oluşturulurken bir hata oluştu.');
    res.redirect('/forum/yeni-konu');
  }
});

// Forum Konu Detay - GET /forum/konu/:slug
router.get('/konu/:slug', async (req, res) => {
  try {
    const db = getDb();

    // Slug format kontrolü (güvenlik)
    const slug = req.params.slug;
    if (!slug || slug.length > 300) {
      return res.status(404).render('pages/404', { title: 'Konu Bulunamadı' });
    }

    const topic = await db.prepare(`
      SELECT ft.*, u.name as author_name, u.avatar as author_avatar, u.role as author_role,
             u.created_at as author_since, fc.name as category_name, fc.slug as category_slug
      FROM forum_topics ft
      JOIN users u ON ft.user_id = u.id
      JOIN forum_categories fc ON ft.category_id = fc.id
      WHERE ft.slug = ?
    `).get(slug);

    if (!topic) {
      return res.status(404).render('pages/404', { title: 'Konu Bulunamadı' });
    }

    // Oturum bazlı görüntülenme (aynı oturumda tekrar artmaz)
    const viewedKey = `forum_viewed_${topic.id}`;
    if (!req.session[viewedKey]) {
      await db.prepare('UPDATE forum_topics SET view_count = view_count + 1 WHERE id = ?').run(topic.id);
      req.session[viewedKey] = true;
    }

    const replies = await db.prepare(`
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
      userLikes = (await db.prepare(`
        SELECT reply_id FROM forum_likes WHERE user_id = ? AND reply_id IN (SELECT id FROM forum_replies WHERE topic_id = ?)
      `).all(req.session.user.id, topic.id)).map(r => r.reply_id);
    }

    const relatedTopics = await db.prepare(`
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
  } catch (err) {
    console.error('Konu detay hatası:', err);
    res.status(500).render('pages/404', { title: 'Sunucu Hatası' });
  }
});

// Yeni Yanıt - POST /forum/konu/:slug/yanit
router.post('/konu/:slug/yanit', async (req, res) => {
  const slug = req.params.slug;
  try {
    if (!req.session.user) {
      req.flash('error', 'Yanıt yazmak için giriş yapmalısınız.');
      return res.redirect(`/forum/konu/${encodeURIComponent(slug)}`);
    }

    const db = getDb();
    const topic = await db.prepare('SELECT * FROM forum_topics WHERE slug = ?').get(slug);
    if (!topic || topic.is_locked) {
      req.flash('error', 'Bu konuya yanıt yazılamaz.');
      return res.redirect('/forum');
    }

    const { content } = req.body;
    const trimmed = (content || '').trim();

    if (trimmed.length < 10) {
      req.flash('error', 'Yanıt en az 10 karakter olmalıdır.');
      return res.redirect(`/forum/konu/${encodeURIComponent(slug)}`);
    }

    if (trimmed.length > 5000) {
      req.flash('error', 'Yanıt en fazla 5.000 karakter olabilir.');
      return res.redirect(`/forum/konu/${encodeURIComponent(slug)}`);
    }

    await db.prepare('INSERT INTO forum_replies (topic_id, user_id, content) VALUES (?, ?, ?)').run(topic.id, req.session.user.id, trimmed);
    await db.prepare('UPDATE forum_topics SET reply_count = reply_count + 1, last_reply_at = CURRENT_TIMESTAMP, last_reply_by = ? WHERE id = ?').run(req.session.user.id, topic.id);
    await db.prepare('UPDATE forum_categories SET post_count = post_count + 1 WHERE id = ?').run(topic.category_id);

    // Konu sahibine bildirim
    if (topic.user_id !== req.session.user.id) {
      await db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'forum', 'Yeni Yanıt', ?, ?)")
        .run(topic.user_id, `${req.session.user.name} konunuza yanıt yazdı: "${topic.title}"`, `/forum/konu/${topic.slug}`);
    }

    req.flash('success', 'Yanıtınız eklendi!');
    res.redirect(`/forum/konu/${encodeURIComponent(slug)}`);
  } catch (err) {
    console.error('Yanıt ekleme hatası:', err);
    req.flash('error', 'Yanıt eklenirken bir hata oluştu.');
    res.redirect(`/forum/konu/${encodeURIComponent(slug)}`);
  }
});

module.exports = router;
