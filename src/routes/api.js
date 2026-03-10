const express = require('express');
const router = express.Router();
const { getDb } = require('../db/database');

// ─── Middleware helpers ───
function auth(req, res, next) {
  if (!req.session.user) return res.status(401).json({ error: 'Giriş yapmalısınız' });
  next();
}
function adminOnly(req, res, next) {
  if (!req.session.user || req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yetkiniz yok' });
  next();
}
function businessOnly(req, res, next) {
  if (!req.session.user || (req.session.user.role !== 'kurumsal' && req.session.user.role !== 'admin')) return res.status(403).json({ error: 'İşletme hesabı gerekli' });
  next();
}

// ═══════════════════════════════════════════════
//  AUTH / SESSION
// ═══════════════════════════════════════════════

// Mevcut oturum bilgisi
router.get('/auth/me', (req, res) => {
  if (!req.session.user) return res.json({ authenticated: false });
  const db = getDb();
  const u = db.prepare('SELECT id, name, email, phone, avatar, role, is_verified, profile_completion, created_at FROM users WHERE id = ?').get(req.session.user.id);
  res.json({ authenticated: true, user: u });
});

// ═══════════════════════════════════════════════
//  MARKALAR / MODELLER
// ═══════════════════════════════════════════════

// Tüm markalar
router.get('/brands', (req, res) => {
  const db = getDb();
  const brands = db.prepare('SELECT * FROM brands ORDER BY name').all();
  res.json(brands);
});

// Marka detay
router.get('/brands/:slug', (req, res) => {
  const db = getDb();
  const brand = db.prepare('SELECT * FROM brands WHERE slug = ?').get(req.params.slug);
  if (!brand) return res.status(404).json({ error: 'Marka bulunamadı' });
  const models = db.prepare('SELECT * FROM models WHERE brand_id = ? ORDER BY name').all(brand.id);
  res.json({ ...brand, models });
});

// Marka'ya göre model listesi
router.get('/models/:brandId', (req, res) => {
  const db = getDb();
  const models = db.prepare('SELECT * FROM models WHERE brand_id = ? ORDER BY name').all(req.params.brandId);
  res.json(models);
});

// ═══════════════════════════════════════════════
//  İLANLAR
// ═══════════════════════════════════════════════

// İlan listesi (JSON, sayfalama + filtre)
router.get('/listings', (req, res) => {
  const db = getDb();
  const { marka, model, yil_min, yil_max, fiyat_min, fiyat_max, yakit, vites, sehir, siralama, sayfa, limit: limitQ } = req.query;

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

  let orderBy = 'ORDER BY l.is_featured DESC, l.created_at DESC';
  if (siralama === 'fiyat-artan') orderBy = 'ORDER BY l.price ASC';
  if (siralama === 'fiyat-azalan') orderBy = 'ORDER BY l.price DESC';
  if (siralama === 'yil-yeni') orderBy = 'ORDER BY l.year DESC';
  if (siralama === 'km-az') orderBy = 'ORDER BY l.km ASC';
  if (siralama === 'populer') orderBy = 'ORDER BY l.view_count DESC';

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = Math.min(50, Math.max(1, Number(limitQ) || 20));
  const offset = (page - 1) * limit;

  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id ${where}`).get(...params).c;
  const listings = db.prepare(`
    SELECT l.*, b.name as brand_name, b.slug as brand_slug, m.name as model_name, m.slug as model_slug,
           u.name as seller_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l
    JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id JOIN users u ON l.user_id = u.id
    ${where} ${orderBy} LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  res.json({ listings, totalCount, page, totalPages: Math.ceil(totalCount / limit), limit });
});

// Tek ilan detay (JSON)
router.get('/listings/:idOrSlug', (req, res) => {
  const db = getDb();
  const val = req.params.idOrSlug;
  const listing = db.prepare(`
    SELECT l.*, b.name as brand_name, b.slug as brand_slug, m.name as model_name, m.slug as model_slug,
           u.name as seller_name, u.phone as seller_phone, u.role as seller_role, u.avatar as seller_avatar, u.id as seller_id
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id JOIN users u ON l.user_id = u.id
    WHERE l.id = ? OR l.slug = ?
  `).get(val, val);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı' });

  const images = db.prepare('SELECT * FROM listing_images WHERE listing_id = ? ORDER BY sort_order').all(listing.id);
  const features = db.prepare('SELECT feature FROM listing_features WHERE listing_id = ?').all(listing.id).map(r => r.feature);

  let isFavorited = false;
  if (req.session.user) {
    isFavorited = !!db.prepare('SELECT id FROM favorites WHERE user_id = ? AND listing_id = ?').get(req.session.user.id, listing.id);
  }

  res.json({ ...listing, images, features, isFavorited });
});

// İlan düzenle
router.put('/listings/:id', auth, (req, res) => {
  const db = getDb();
  const listing = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı' });
  if (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Bu ilanı düzenleme yetkiniz yok' });
  }

  const fields = ['title', 'year', 'km', 'fuel_type', 'transmission', 'hp', 'color', 'price', 'description', 'city'];
  const updates = [];
  const values = [];
  fields.forEach(f => {
    if (req.body[f] !== undefined) { updates.push(`${f} = ?`); values.push(req.body[f]); }
  });
  if (updates.length === 0) return res.status(400).json({ error: 'Güncellenecek alan yok' });

  updates.push('updated_at = CURRENT_TIMESTAMP');
  values.push(req.params.id);
  db.prepare(`UPDATE listings SET ${updates.join(', ')} WHERE id = ?`).run(...values);

  res.json({ success: true, message: 'İlan güncellendi' });
});

// İlan sil
router.delete('/listings/:id', auth, (req, res) => {
  const db = getDb();
  const listing = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı' });
  if (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Bu ilanı silme yetkiniz yok' });
  }
  db.prepare('DELETE FROM listing_images WHERE listing_id = ?').run(req.params.id);
  db.prepare('DELETE FROM listing_features WHERE listing_id = ?').run(req.params.id);
  db.prepare('DELETE FROM favorites WHERE listing_id = ?').run(req.params.id);
  db.prepare('DELETE FROM listings WHERE id = ?').run(req.params.id);
  res.json({ success: true, message: 'İlan silindi' });
});

// İlan durumunu değiştir (satıldı, pasif, aktif)
router.patch('/listings/:id/status', auth, (req, res) => {
  const db = getDb();
  const listing = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı' });
  if (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Yetkiniz yok' });
  }

  const { status } = req.body;
  const allowed = ['active', 'sold', 'expired', 'draft'];
  if (!allowed.includes(status)) return res.status(400).json({ error: 'Geçersiz durum: ' + allowed.join(', ') });

  db.prepare('UPDATE listings SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(status, req.params.id);
  res.json({ success: true, status });
});

// İlan özelliklerini güncelle
router.put('/listings/:id/features', auth, (req, res) => {
  const db = getDb();
  const listing = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı' });
  if (listing.user_id !== req.session.user.id && req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yetkiniz yok' });

  const { features } = req.body;
  if (!Array.isArray(features)) return res.status(400).json({ error: 'features dizisi gerekli' });

  db.prepare('DELETE FROM listing_features WHERE listing_id = ?').run(listing.id);
  const insert = db.prepare('INSERT INTO listing_features (listing_id, feature) VALUES (?, ?)');
  features.forEach(f => insert.run(listing.id, f));

  res.json({ success: true, count: features.length });
});

// ═══════════════════════════════════════════════
//  FAVORİLER
// ═══════════════════════════════════════════════

// Favori toggle
router.post('/favorite/:listingId', auth, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;
  const listingId = Number(req.params.listingId);

  const existing = db.prepare('SELECT id FROM favorites WHERE user_id = ? AND listing_id = ?').get(userId, listingId);
  if (existing) {
    db.prepare('DELETE FROM favorites WHERE id = ?').run(existing.id);
    db.prepare('UPDATE listings SET favorite_count = MAX(0, favorite_count - 1) WHERE id = ?').run(listingId);
    res.json({ favorited: false });
  } else {
    db.prepare('INSERT INTO favorites (user_id, listing_id) VALUES (?, ?)').run(userId, listingId);
    db.prepare('UPDATE listings SET favorite_count = favorite_count + 1 WHERE id = ?').run(listingId);
    res.json({ favorited: true });
  }
});

// Favori listesi
router.get('/favorites', auth, (req, res) => {
  const db = getDb();
  const favorites = db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name, f.created_at as favorited_at,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM favorites f JOIN listings l ON f.listing_id = l.id
    JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id
    WHERE f.user_id = ? ORDER BY f.created_at DESC
  `).all(req.session.user.id);
  res.json(favorites);
});

// Favori kaldır
router.delete('/favorites/:listingId', auth, (req, res) => {
  const db = getDb();
  db.prepare('DELETE FROM favorites WHERE user_id = ? AND listing_id = ?').run(req.session.user.id, req.params.listingId);
  db.prepare('UPDATE listings SET favorite_count = MAX(0, favorite_count - 1) WHERE id = ?').run(req.params.listingId);
  res.json({ success: true });
});

// ═══════════════════════════════════════════════
//  MESAJLAR
// ═══════════════════════════════════════════════

// Okunmamış mesaj sayısı (bu route en üstte olmalı, /:userId'den önce)
router.get('/messages/unread/count', auth, (req, res) => {
  const db = getDb();
  const count = db.prepare('SELECT COUNT(*) as c FROM messages WHERE receiver_id = ? AND is_read = 0').get(req.session.user.id).c;
  res.json({ count });
});

// Mesaj gönder (yeni API)
router.post('/messages', auth, (req, res) => {
  const db = getDb();
  const { receiver_id, listing_id, content } = req.body;
  if (!receiver_id || !content || !content.trim()) return res.status(400).json({ error: 'Alıcı ve mesaj gerekli' });

  if (Number(receiver_id) === req.session.user.id) return res.status(400).json({ error: 'Kendinize mesaj gönderemezsiniz' });

  const receiver = db.prepare('SELECT id, name FROM users WHERE id = ?').get(receiver_id);
  if (!receiver) return res.status(404).json({ error: 'Alıcı bulunamadı' });

  db.prepare('INSERT INTO messages (sender_id, receiver_id, listing_id, content) VALUES (?, ?, ?, ?)')
    .run(req.session.user.id, receiver_id, listing_id || null, content.trim());

  // Bildirim oluştur
  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'message', 'Yeni Mesaj', ?, '/kullanici/panel')")
    .run(receiver_id, `${req.session.user.name} size mesaj gönderdi`);

  res.json({ success: true });
});

// Eski uyumluluk: POST /api/message
router.post('/message', auth, (req, res) => {
  const db = getDb();
  const { receiver_id, listing_id, content } = req.body;
  if (!receiver_id || !content) return res.status(400).json({ error: 'Gerekli alanlar eksik' });
  db.prepare('INSERT INTO messages (sender_id, receiver_id, listing_id, content) VALUES (?, ?, ?, ?)')
    .run(req.session.user.id, receiver_id, listing_id || null, content);
  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'message', 'Yeni Mesaj', ?, '/kullanici/panel')")
    .run(receiver_id, `${req.session.user.name} size mesaj gönderdi`);
  res.json({ success: true });
});

// Gelen kutusu (konuşma listesi)
router.get('/messages', auth, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;

  // Son mesajları grupla
  const conversations = db.prepare(`
    SELECT 
      CASE WHEN m.sender_id = ? THEN m.receiver_id ELSE m.sender_id END as other_user_id,
      MAX(m.id) as last_message_id
    FROM messages m
    WHERE m.sender_id = ? OR m.receiver_id = ?
    GROUP BY other_user_id
    ORDER BY last_message_id DESC
  `).all(userId, userId, userId);

  const result = conversations.map(c => {
    const lastMsg = db.prepare('SELECT * FROM messages WHERE id = ?').get(c.last_message_id);
    const otherUser = db.prepare('SELECT id, name, avatar, role FROM users WHERE id = ?').get(c.other_user_id);
    const unread = db.prepare('SELECT COUNT(*) as c FROM messages WHERE sender_id = ? AND receiver_id = ? AND is_read = 0').get(c.other_user_id, userId).c;
    const listing = lastMsg.listing_id ? db.prepare('SELECT id, title, slug FROM listings WHERE id = ?').get(lastMsg.listing_id) : null;

    return {
      otherUser,
      lastMessage: { content: lastMsg.content, created_at: lastMsg.created_at, sender_id: lastMsg.sender_id },
      unreadCount: unread,
      listing
    };
  });

  res.json(result);
});

// Konuşma detay (iki kullanıcı arası mesajlar)
router.get('/messages/:userId', auth, (req, res) => {
  const db = getDb();
  const myId = req.session.user.id;
  const otherId = Number(req.params.userId);

  const messages = db.prepare(`
    SELECT m.*, u.name as sender_name, u.avatar as sender_avatar
    FROM messages m JOIN users u ON m.sender_id = u.id
    WHERE (m.sender_id = ? AND m.receiver_id = ?) OR (m.sender_id = ? AND m.receiver_id = ?)
    ORDER BY m.created_at ASC
  `).all(myId, otherId, otherId, myId);

  // Okundu işaretle
  db.prepare('UPDATE messages SET is_read = 1 WHERE sender_id = ? AND receiver_id = ? AND is_read = 0').run(otherId, myId);

  const otherUser = db.prepare('SELECT id, name, avatar, role FROM users WHERE id = ?').get(otherId);
  res.json({ messages, otherUser });
});

// Mesajı okundu işaretle
router.patch('/messages/:id/read', auth, (req, res) => {
  const db = getDb();
  db.prepare('UPDATE messages SET is_read = 1 WHERE id = ? AND receiver_id = ?').run(req.params.id, req.session.user.id);
  res.json({ success: true });
});

// Mesaj sil
router.delete('/messages/:id', auth, (req, res) => {
  const db = getDb();
  const msg = db.prepare('SELECT * FROM messages WHERE id = ? AND (sender_id = ? OR receiver_id = ?)').get(req.params.id, req.session.user.id, req.session.user.id);
  if (!msg) return res.status(404).json({ error: 'Mesaj bulunamadı' });
  db.prepare('DELETE FROM messages WHERE id = ?').run(msg.id);
  res.json({ success: true });
});

// ═══════════════════════════════════════════════
//  BİLDİRİMLER
// ═══════════════════════════════════════════════

// Bildirimleri listele
router.get('/notifications', auth, (req, res) => {
  const db = getDb();
  const page = Math.max(1, Number(req.query.sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const notifications = db.prepare('SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?')
    .all(req.session.user.id, limit, offset);
  const unreadCount = db.prepare('SELECT COUNT(*) as c FROM notifications WHERE user_id = ? AND is_read = 0').get(req.session.user.id).c;
  const totalCount = db.prepare('SELECT COUNT(*) as c FROM notifications WHERE user_id = ?').get(req.session.user.id).c;

  res.json({ notifications, unreadCount, totalCount, page, totalPages: Math.ceil(totalCount / limit) });
});

// Okunmamış bildirim sayısı
router.get('/notifications/unread/count', auth, (req, res) => {
  const db = getDb();
  const count = db.prepare('SELECT COUNT(*) as c FROM notifications WHERE user_id = ? AND is_read = 0').get(req.session.user.id).c;
  res.json({ count });
});

// Bildirim okundu işaretle
router.post('/notification/:id/read', auth, (req, res) => {
  const db = getDb();
  db.prepare('UPDATE notifications SET is_read = 1 WHERE id = ? AND user_id = ?').run(req.params.id, req.session.user.id);
  res.json({ success: true });
});

// Tüm bildirimleri okundu yap
router.post('/notifications/read-all', auth, (req, res) => {
  const db = getDb();
  const result = db.prepare('UPDATE notifications SET is_read = 1 WHERE user_id = ? AND is_read = 0').run(req.session.user.id);
  res.json({ success: true, updated: result.changes });
});

// Bildirim sil
router.delete('/notifications/:id', auth, (req, res) => {
  const db = getDb();
  db.prepare('DELETE FROM notifications WHERE id = ? AND user_id = ?').run(req.params.id, req.session.user.id);
  res.json({ success: true });
});

// Tüm bildirimleri sil
router.delete('/notifications', auth, (req, res) => {
  const db = getDb();
  db.prepare('DELETE FROM notifications WHERE user_id = ?').run(req.session.user.id);
  res.json({ success: true });
});

// ═══════════════════════════════════════════════
//  FORUM
// ═══════════════════════════════════════════════

// Forum kategorileri
router.get('/forum/categories', (req, res) => {
  const db = getDb();
  const categories = db.prepare('SELECT * FROM forum_categories ORDER BY sort_order').all();
  res.json(categories);
});

// Forum konuları (JSON, sayfalama + filtre)
router.get('/forum/topics', (req, res) => {
  const db = getDb();
  const { kategori, siralama, sayfa } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (kategori) { where += ' AND fc.slug = ?'; params.push(kategori); }

  let orderBy = 'ORDER BY ft.is_pinned DESC, ft.last_reply_at DESC';
  if (siralama === 'populer') orderBy = 'ORDER BY ft.view_count DESC';
  if (siralama === 'yeni') orderBy = 'ORDER BY ft.created_at DESC';
  if (siralama === 'cevapsiz') { where += ' AND ft.reply_count = 0'; orderBy = 'ORDER BY ft.created_at DESC'; }

  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;

  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM forum_topics ft JOIN forum_categories fc ON ft.category_id = fc.id ${where}`).get(...params).c;
  const topics = db.prepare(`
    SELECT ft.*, u.name as author_name, u.avatar as author_avatar, fc.name as category_name, fc.color as category_color, fc.slug as category_slug
    FROM forum_topics ft JOIN users u ON ft.user_id = u.id JOIN forum_categories fc ON ft.category_id = fc.id
    ${where} ${orderBy} LIMIT ? OFFSET ?
  `).all(...params, limit, offset);

  res.json({ topics, totalCount, page, totalPages: Math.ceil(totalCount / limit) });
});

// Yeni forum konusu oluştur
router.post('/forum/topics', auth, (req, res) => {
  const db = getDb();
  const { category_id, title, content } = req.body;
  if (!category_id || !title || !content) return res.status(400).json({ error: 'Kategori, başlık ve içerik gerekli' });
  if (title.length < 5) return res.status(400).json({ error: 'Başlık en az 5 karakter olmalı' });
  if (content.length < 20) return res.status(400).json({ error: 'İçerik en az 20 karakter olmalı' });

  const category = db.prepare('SELECT id FROM forum_categories WHERE id = ?').get(category_id);
  if (!category) return res.status(400).json({ error: 'Geçersiz kategori' });

  const slug = title.toLowerCase()
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')
    .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString(36);

  const result = db.prepare('INSERT INTO forum_topics (category_id, user_id, title, slug, content) VALUES (?, ?, ?, ?, ?)')
    .run(category_id, req.session.user.id, title, slug, content);

  db.prepare('UPDATE forum_categories SET topic_count = topic_count + 1 WHERE id = ?').run(category_id);

  res.status(201).json({ success: true, id: result.lastInsertRowid, slug });
});

// Forum konu detay (JSON)
router.get('/forum/topics/:idOrSlug', (req, res) => {
  const db = getDb();
  const val = req.params.idOrSlug;
  const topic = db.prepare(`
    SELECT ft.*, u.name as author_name, u.avatar as author_avatar, u.role as author_role,
           fc.name as category_name, fc.slug as category_slug
    FROM forum_topics ft JOIN users u ON ft.user_id = u.id JOIN forum_categories fc ON ft.category_id = fc.id
    WHERE ft.id = ? OR ft.slug = ?
  `).get(val, val);
  if (!topic) return res.status(404).json({ error: 'Konu bulunamadı' });

  const replies = db.prepare(`
    SELECT fr.*, u.name as author_name, u.avatar as author_avatar, u.role as author_role
    FROM forum_replies fr JOIN users u ON fr.user_id = u.id
    WHERE fr.topic_id = ? ORDER BY fr.created_at ASC
  `).all(topic.id);

  res.json({ topic, replies });
});

// Forum konu düzenle
router.put('/forum/topics/:id', auth, (req, res) => {
  const db = getDb();
  const topic = db.prepare('SELECT * FROM forum_topics WHERE id = ?').get(req.params.id);
  if (!topic) return res.status(404).json({ error: 'Konu bulunamadı' });
  if (topic.user_id !== req.session.user.id && req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yetkiniz yok' });

  const { title, content } = req.body;
  const updates = [];
  const values = [];
  if (title) { updates.push('title = ?'); values.push(title); }
  if (content) { updates.push('content = ?'); values.push(content); }
  if (updates.length === 0) return res.status(400).json({ error: 'Güncellenecek alan yok' });

  values.push(topic.id);
  db.prepare(`UPDATE forum_topics SET ${updates.join(', ')} WHERE id = ?`).run(...values);
  res.json({ success: true });
});

// Forum konu sil
router.delete('/forum/topics/:id', auth, (req, res) => {
  const db = getDb();
  const topic = db.prepare('SELECT * FROM forum_topics WHERE id = ?').get(req.params.id);
  if (!topic) return res.status(404).json({ error: 'Konu bulunamadı' });
  if (topic.user_id !== req.session.user.id && req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yetkiniz yok' });

  db.prepare('DELETE FROM forum_replies WHERE topic_id = ?').run(topic.id);
  db.prepare('DELETE FROM forum_topics WHERE id = ?').run(topic.id);
  db.prepare('UPDATE forum_categories SET topic_count = MAX(0, topic_count - 1) WHERE id = ?').run(topic.category_id);
  res.json({ success: true });
});

// Forum yanıt ekle (API)
router.post('/forum/topics/:id/replies', auth, (req, res) => {
  const db = getDb();
  const topic = db.prepare('SELECT * FROM forum_topics WHERE id = ?').get(req.params.id);
  if (!topic) return res.status(404).json({ error: 'Konu bulunamadı' });
  if (topic.is_locked) return res.status(400).json({ error: 'Bu konu kilitli' });

  const { content } = req.body;
  if (!content || content.trim().length < 10) return res.status(400).json({ error: 'Yanıt en az 10 karakter olmalı' });

  const result = db.prepare('INSERT INTO forum_replies (topic_id, user_id, content) VALUES (?, ?, ?)').run(topic.id, req.session.user.id, content.trim());
  db.prepare('UPDATE forum_topics SET reply_count = reply_count + 1, last_reply_at = CURRENT_TIMESTAMP, last_reply_by = ? WHERE id = ?').run(req.session.user.id, topic.id);
  db.prepare('UPDATE forum_categories SET post_count = post_count + 1 WHERE id = ?').run(topic.category_id);

  // Konu sahibine bildirim
  if (topic.user_id !== req.session.user.id) {
    db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'forum', 'Yeni Yanıt', ?, ?)")
      .run(topic.user_id, `${req.session.user.name} konunuza yanıt yazdı`, `/forum/konu/${topic.slug}`);
  }

  res.status(201).json({ success: true, id: result.lastInsertRowid });
});

// Forum beğeni toggle
router.post('/forum/like/:replyId', auth, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;
  const replyId = Number(req.params.replyId);

  const existing = db.prepare('SELECT id FROM forum_likes WHERE user_id = ? AND reply_id = ?').get(userId, replyId);
  if (existing) {
    db.prepare('DELETE FROM forum_likes WHERE id = ?').run(existing.id);
    db.prepare('UPDATE forum_replies SET like_count = MAX(0, like_count - 1) WHERE id = ?').run(replyId);
    res.json({ liked: false });
  } else {
    db.prepare('INSERT INTO forum_likes (user_id, reply_id) VALUES (?, ?)').run(userId, replyId);
    db.prepare('UPDATE forum_replies SET like_count = like_count + 1 WHERE id = ?').run(replyId);
    res.json({ liked: true });
  }
});

// Forum yanıt düzenle
router.put('/forum/replies/:id', auth, (req, res) => {
  const db = getDb();
  const reply = db.prepare('SELECT * FROM forum_replies WHERE id = ?').get(req.params.id);
  if (!reply) return res.status(404).json({ error: 'Yanıt bulunamadı' });
  if (reply.user_id !== req.session.user.id && req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yetkiniz yok' });

  const { content } = req.body;
  if (!content || content.trim().length < 10) return res.status(400).json({ error: 'En az 10 karakter gerekli' });

  db.prepare('UPDATE forum_replies SET content = ? WHERE id = ?').run(content.trim(), reply.id);
  res.json({ success: true });
});

// Forum yanıt sil
router.delete('/forum/replies/:id', auth, (req, res) => {
  const db = getDb();
  const reply = db.prepare('SELECT * FROM forum_replies WHERE id = ?').get(req.params.id);
  if (!reply) return res.status(404).json({ error: 'Yanıt bulunamadı' });
  if (reply.user_id !== req.session.user.id && req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yetkiniz yok' });

  db.prepare('DELETE FROM forum_replies WHERE id = ?').run(reply.id);
  db.prepare('UPDATE forum_topics SET reply_count = MAX(0, reply_count - 1) WHERE id = ?').run(reply.topic_id);
  res.json({ success: true });
});

// Forum yanıtı çözüm olarak işaretle
router.patch('/forum/replies/:id/solution', auth, (req, res) => {
  const db = getDb();
  const reply = db.prepare('SELECT fr.*, ft.user_id as topic_owner FROM forum_replies fr JOIN forum_topics ft ON fr.topic_id = ft.id WHERE fr.id = ?').get(req.params.id);
  if (!reply) return res.status(404).json({ error: 'Yanıt bulunamadı' });
  if (reply.topic_owner !== req.session.user.id && req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yalnızca konu sahibi çözüm işaretleyebilir' });

  db.prepare('UPDATE forum_replies SET is_solution = 0 WHERE topic_id = ?').run(reply.topic_id);
  db.prepare('UPDATE forum_replies SET is_solution = 1 WHERE id = ?').run(reply.id);
  res.json({ success: true });
});

// ═══════════════════════════════════════════════
//  KULLANICI PROFİL
// ═══════════════════════════════════════════════

// Profil güncelle
router.put('/profile', auth, (req, res) => {
  const db = getDb();
  const { name, phone, avatar } = req.body;
  const updates = [];
  const values = [];

  if (name && name.trim()) { updates.push('name = ?'); values.push(name.trim()); }
  if (phone !== undefined) { updates.push('phone = ?'); values.push(phone || null); }
  if (avatar !== undefined) { updates.push('avatar = ?'); values.push(avatar || null); }

  if (updates.length === 0) return res.status(400).json({ error: 'Güncellenecek alan yok' });

  updates.push('updated_at = CURRENT_TIMESTAMP');
  values.push(req.session.user.id);
  db.prepare(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`).run(...values);

  // Session güncelle
  if (name) req.session.user.name = name.trim();
  if (avatar !== undefined) req.session.user.avatar = avatar;

  res.json({ success: true, message: 'Profil güncellendi' });
});

// Şifre değiştir
router.put('/profile/password', auth, (req, res) => {
  const bcrypt = require('bcryptjs');
  const db = getDb();
  const { current_password, new_password, new_password_confirm } = req.body;

  if (!current_password || !new_password) return res.status(400).json({ error: 'Mevcut ve yeni şifre gerekli' });
  if (new_password.length < 6) return res.status(400).json({ error: 'Yeni şifre en az 6 karakter olmalı' });
  if (new_password !== new_password_confirm) return res.status(400).json({ error: 'Şifreler uyuşmuyor' });

  const user = db.prepare('SELECT password FROM users WHERE id = ?').get(req.session.user.id);
  if (!bcrypt.compareSync(current_password, user.password)) return res.status(400).json({ error: 'Mevcut şifre hatalı' });

  const hashed = bcrypt.hashSync(new_password, 10);
  db.prepare('UPDATE users SET password = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(hashed, req.session.user.id);
  res.json({ success: true, message: 'Şifre değiştirildi' });
});

// Herkese açık kullanıcı profili
router.get('/users/:id', (req, res) => {
  const db = getDb();
  const user = db.prepare('SELECT id, name, avatar, role, is_verified, created_at FROM users WHERE id = ?').get(req.params.id);
  if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });

  const listingCount = db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id = ? AND status = 'active'").get(user.id).c;
  const forumTopics = db.prepare('SELECT COUNT(*) as c FROM forum_topics WHERE user_id = ?').get(user.id).c;
  const forumReplies = db.prepare('SELECT COUNT(*) as c FROM forum_replies WHERE user_id = ?').get(user.id).c;

  res.json({ ...user, listingCount, forumTopics, forumReplies });
});

// Kullanıcının aktif ilanları (herkese açık)
router.get('/users/:id/listings', (req, res) => {
  const db = getDb();
  const listings = db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id
    WHERE l.user_id = ? AND l.status = 'active' ORDER BY l.created_at DESC
  `).all(req.params.id);
  res.json(listings);
});

// Benim tüm ilanlarım (giriş yapan)
router.get('/my/listings', auth, (req, res) => {
  const db = getDb();
  const { durum } = req.query;
  let where = 'WHERE l.user_id = ?';
  const params = [req.session.user.id];
  if (durum) { where += ' AND l.status = ?'; params.push(durum); }

  const listings = db.prepare(`
    SELECT l.*, b.name as brand_name, m.name as model_name,
           (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id
    ${where} ORDER BY l.created_at DESC
  `).all(...params);
  res.json(listings);
});

// Benim forum konularım
router.get('/my/topics', auth, (req, res) => {
  const db = getDb();
  const topics = db.prepare(`
    SELECT ft.*, fc.name as category_name, fc.color as category_color
    FROM forum_topics ft JOIN forum_categories fc ON ft.category_id = fc.id
    WHERE ft.user_id = ? ORDER BY ft.created_at DESC
  `).all(req.session.user.id);
  res.json(topics);
});

// ═══════════════════════════════════════════════
//  İŞLETMELER / SERVİSLER
// ═══════════════════════════════════════════════

// İşletme listesi (JSON)
router.get('/businesses', (req, res) => {
  const db = getDb();
  const { tur, sehir, arama, siralama } = req.query;

  let where = 'WHERE b.is_verified = 1';
  const params = [];
  if (tur) { where += ' AND b.type = ?'; params.push(tur); }
  if (sehir) { where += ' AND b.city = ?'; params.push(sehir); }
  if (arama) { where += ' AND (b.name LIKE ? OR b.description LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }

  let orderBy = 'ORDER BY b.is_premium DESC, b.rating DESC';
  if (siralama === 'yeni') orderBy = 'ORDER BY b.created_at DESC';
  if (siralama === 'puan') orderBy = 'ORDER BY b.rating DESC';
  if (siralama === 'yorum') orderBy = 'ORDER BY b.review_count DESC';

  const businesses = db.prepare(`SELECT b.* FROM businesses b ${where} ${orderBy}`).all(...params);
  res.json(businesses);
});

// İşletme detay (JSON)
router.get('/businesses/:idOrSlug', (req, res) => {
  const db = getDb();
  const val = req.params.idOrSlug;
  const business = db.prepare('SELECT b.*, u.name as owner_name FROM businesses b JOIN users u ON b.user_id = u.id WHERE b.id = ? OR b.slug = ?')
    .get(val, val);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  const reviews = db.prepare(`
    SELECT r.*, u.name as reviewer_name, u.avatar as reviewer_avatar
    FROM reviews r JOIN users u ON r.user_id = u.id WHERE r.business_id = ? ORDER BY r.created_at DESC
  `).all(business.id);

  res.json({ ...business, reviews });
});

// ═══════════════════════════════════════════════
//  DEĞERLENDİRMELER
// ═══════════════════════════════════════════════

// İşletmeye değerlendirme yaz
router.post('/reviews', auth, (req, res) => {
  const db = getDb();
  const { business_id, rating, comment, service_type } = req.body;

  if (!business_id || !rating) return res.status(400).json({ error: 'İşletme ve puan gerekli' });
  if (rating < 1 || rating > 5) return res.status(400).json({ error: 'Puan 1-5 arasında olmalı' });

  const business = db.prepare('SELECT id, user_id, name, slug FROM businesses WHERE id = ?').get(business_id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  const existing = db.prepare('SELECT id FROM reviews WHERE user_id = ? AND business_id = ?').get(req.session.user.id, business_id);
  if (existing) return res.status(400).json({ error: 'Bu işletmeyi zaten değerlendirdiniz' });

  db.prepare('INSERT INTO reviews (business_id, user_id, rating, comment, service_type) VALUES (?, ?, ?, ?, ?)')
    .run(business_id, req.session.user.id, rating, comment || null, service_type || null);

  // İşletme rating güncelle
  const avgRating = db.prepare('SELECT AVG(rating) as avg, COUNT(*) as cnt FROM reviews WHERE business_id = ?').get(business_id);
  db.prepare('UPDATE businesses SET rating = ROUND(?, 1), review_count = ? WHERE id = ?')
    .run(avgRating.avg, avgRating.cnt, business_id);

  // İşletme sahibine bildirim
  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'review', 'Yeni Değerlendirme', ?, ?)")
    .run(business.user_id, `${req.session.user.name} işletmenizi ${rating} yıldız ile değerlendirdi`, `/servis/${business.slug}`);

  res.status(201).json({ success: true, message: 'Değerlendirme eklendi' });
});

// İşletme değerlendirmeleri (herkese açık)
router.get('/reviews/:businessId', (req, res) => {
  const db = getDb();
  const reviews = db.prepare(`
    SELECT r.*, u.name as reviewer_name, u.avatar as reviewer_avatar
    FROM reviews r JOIN users u ON r.user_id = u.id
    WHERE r.business_id = ? ORDER BY r.created_at DESC
  `).all(req.params.businessId);
  res.json(reviews);
});

// Değerlendirme sil
router.delete('/reviews/:id', auth, (req, res) => {
  const db = getDb();
  const review = db.prepare('SELECT * FROM reviews WHERE id = ?').get(req.params.id);
  if (!review) return res.status(404).json({ error: 'Değerlendirme bulunamadı' });
  if (review.user_id !== req.session.user.id && req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yetkiniz yok' });

  db.prepare('DELETE FROM reviews WHERE id = ?').run(review.id);

  const avgRating = db.prepare('SELECT AVG(rating) as avg, COUNT(*) as cnt FROM reviews WHERE business_id = ?').get(review.business_id);
  db.prepare('UPDATE businesses SET rating = ROUND(COALESCE(?, 0), 1), review_count = ? WHERE id = ?')
    .run(avgRating.avg, avgRating.cnt, review.business_id);

  res.json({ success: true });
});

// ═══════════════════════════════════════════════
//  RANDEVULAR
// ═══════════════════════════════════════════════

// Randevu oluştur
router.post('/appointments', auth, (req, res) => {
  const db = getDb();
  const { business_id, service_type, vehicle_info, date, time, notes } = req.body;

  if (!business_id || !date || !time) return res.status(400).json({ error: 'İşletme, tarih ve saat gerekli' });

  const business = db.prepare('SELECT id, user_id, name FROM businesses WHERE id = ?').get(business_id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  const result = db.prepare('INSERT INTO appointments (business_id, user_id, service_type, vehicle_info, date, time, notes) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .run(business_id, req.session.user.id, service_type || null, vehicle_info || null, date, time, notes || null);

  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'appointment', 'Yeni Randevu', ?, '/isletme/panel')")
    .run(business.user_id, `${req.session.user.name} ${date} ${time} için randevu aldı`);

  res.status(201).json({ success: true, id: result.lastInsertRowid, message: 'Randevu oluşturuldu' });
});

// Kullanıcının randevuları
router.get('/appointments', auth, (req, res) => {
  const db = getDb();
  const appointments = db.prepare(`
    SELECT a.*, b.name as business_name, b.slug as business_slug, b.city as business_city
    FROM appointments a JOIN businesses b ON a.business_id = b.id
    WHERE a.user_id = ? ORDER BY a.date DESC, a.time DESC
  `).all(req.session.user.id);
  res.json(appointments);
});

// Randevu iptal (kullanıcı)
router.patch('/appointments/:id/cancel', auth, (req, res) => {
  const db = getDb();
  const appt = db.prepare('SELECT a.*, b.user_id as business_owner FROM appointments a JOIN businesses b ON a.business_id = b.id WHERE a.id = ?').get(req.params.id);
  if (!appt) return res.status(404).json({ error: 'Randevu bulunamadı' });
  if (appt.user_id !== req.session.user.id && req.session.user.role !== 'admin') return res.status(403).json({ error: 'Yetkiniz yok' });

  db.prepare("UPDATE appointments SET status = 'cancelled' WHERE id = ?").run(appt.id);

  // İşletmeye bildirim
  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'appointment', 'Randevu İptal', ?, '/isletme/panel')")
    .run(appt.business_owner, `${req.session.user.name} ${appt.date} tarihli randevusunu iptal etti`);

  res.json({ success: true, message: 'Randevu iptal edildi' });
});

// ═══════════════════════════════════════════════
//  TEKLİF İSTEKLERİ
// ═══════════════════════════════════════════════

// Teklif isteği oluştur
router.post('/quotes', auth, (req, res) => {
  const db = getDb();
  const { business_id, vehicle_info, service_type, description } = req.body;

  if (!business_id || !description) return res.status(400).json({ error: 'İşletme ve açıklama gerekli' });

  const business = db.prepare('SELECT id, user_id, name FROM businesses WHERE id = ?').get(business_id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  const result = db.prepare('INSERT INTO quote_requests (business_id, user_id, vehicle_info, service_type, description) VALUES (?, ?, ?, ?, ?)')
    .run(business_id, req.session.user.id, vehicle_info || null, service_type || null, description);

  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'quote', 'Yeni Teklif İsteği', ?, '/isletme/panel')")
    .run(business.user_id, `${req.session.user.name}: ${description.substring(0, 80)}`);

  res.status(201).json({ success: true, id: result.lastInsertRowid });
});

// Kullanıcının teklif istekleri
router.get('/quotes', auth, (req, res) => {
  const db = getDb();
  const quotes = db.prepare(`
    SELECT qr.*, b.name as business_name, b.slug as business_slug
    FROM quote_requests qr JOIN businesses b ON qr.business_id = b.id
    WHERE qr.user_id = ? ORDER BY qr.created_at DESC
  `).all(req.session.user.id);
  res.json(quotes);
});

// ═══════════════════════════════════════════════
//  ARAMA
// ═══════════════════════════════════════════════

// Genel arama
router.get('/search', (req, res) => {
  const db = getDb();
  const q = req.query.q;
  if (!q || q.length < 2) return res.json({ listings: [], topics: [], businesses: [] });

  const listings = db.prepare(`
    SELECT l.id, l.title, l.slug, l.price, b.name as brand_name
    FROM listings l JOIN brands b ON l.brand_id = b.id
    WHERE l.status = 'active' AND (l.title LIKE ? OR b.name LIKE ?) LIMIT 5
  `).all(`%${q}%`, `%${q}%`);

  const topics = db.prepare('SELECT id, title, slug FROM forum_topics WHERE title LIKE ? LIMIT 5').all(`%${q}%`);
  const businesses = db.prepare("SELECT id, name, slug, type FROM businesses WHERE is_verified=1 AND name LIKE ? LIMIT 5").all(`%${q}%`);

  res.json({ listings, topics, businesses });
});

// Gelişmiş arama / autocomplete
router.get('/search/suggestions', (req, res) => {
  const db = getDb();
  const q = req.query.q;
  if (!q || q.length < 1) return res.json([]);

  const brands = db.prepare("SELECT name as text, 'brand' as type, slug FROM brands WHERE name LIKE ? LIMIT 3").all(`%${q}%`);
  const models = db.prepare(`
    SELECT m.name || ' (' || b.name || ')' as text, 'model' as type, b.slug || '/' || m.slug as slug
    FROM models m JOIN brands b ON m.brand_id = b.id WHERE m.name LIKE ? LIMIT 3
  `).all(`%${q}%`);
  const cities = db.prepare("SELECT DISTINCT city as text, 'city' as type FROM listings WHERE status='active' AND city IS NOT NULL AND city LIKE ? LIMIT 3").all(`%${q}%`);

  res.json([...brands, ...models, ...cities]);
});

// ═══════════════════════════════════════════════
//  İSTATİSTİKLER
// ═══════════════════════════════════════════════

// Genel platform istatistikleri (herkese açık)
router.get('/stats', (req, res) => {
  const db = getDb();
  res.json({
    listings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE status='active'").get().c,
    users: db.prepare('SELECT COUNT(*) as c FROM users').get().c,
    businesses: db.prepare("SELECT COUNT(*) as c FROM businesses WHERE is_verified=1").get().c,
    forumTopics: db.prepare('SELECT COUNT(*) as c FROM forum_topics').get().c,
    forumReplies: db.prepare('SELECT COUNT(*) as c FROM forum_replies').get().c,
    brands: db.prepare('SELECT COUNT(*) as c FROM brands').get().c,
  });
});

// Fiyat istatistikleri (belirli model/marka için)
router.get('/stats/prices', (req, res) => {
  const db = getDb();
  const { marka, model, yil_min, yil_max } = req.query;
  let where = "WHERE l.status = 'active'";
  const params = [];
  if (marka) { where += ' AND b.slug = ?'; params.push(marka); }
  if (model) { where += ' AND m.slug = ?'; params.push(model); }
  if (yil_min) { where += ' AND l.year >= ?'; params.push(Number(yil_min)); }
  if (yil_max) { where += ' AND l.year <= ?'; params.push(Number(yil_max)); }

  const stats = db.prepare(`
    SELECT MIN(l.price) as min_price, MAX(l.price) as max_price, ROUND(AVG(l.price)) as avg_price, COUNT(*) as count
    FROM listings l JOIN brands b ON l.brand_id = b.id JOIN models m ON l.model_id = m.id ${where}
  `).get(...params);

  res.json(stats);
});

// Kullanıcı dashboard istatistikleri
router.get('/stats/dashboard', auth, (req, res) => {
  const db = getDb();
  const userId = req.session.user.id;
  res.json({
    activeListings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id=? AND status='active'").get(userId).c,
    totalListings: db.prepare('SELECT COUNT(*) as c FROM listings WHERE user_id=?').get(userId).c,
    soldListings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id=? AND status='sold'").get(userId).c,
    favorites: db.prepare('SELECT COUNT(*) as c FROM favorites WHERE user_id=?').get(userId).c,
    unreadMessages: db.prepare('SELECT COUNT(*) as c FROM messages WHERE receiver_id=? AND is_read=0').get(userId).c,
    unreadNotifications: db.prepare('SELECT COUNT(*) as c FROM notifications WHERE user_id=? AND is_read=0').get(userId).c,
    forumTopics: db.prepare('SELECT COUNT(*) as c FROM forum_topics WHERE user_id=?').get(userId).c,
    forumReplies: db.prepare('SELECT COUNT(*) as c FROM forum_replies WHERE user_id=?').get(userId).c,
    totalViews: db.prepare('SELECT COALESCE(SUM(view_count),0) as c FROM listings WHERE user_id=?').get(userId).c,
    totalFavReceived: db.prepare('SELECT COALESCE(SUM(favorite_count),0) as c FROM listings WHERE user_id=?').get(userId).c,
  });
});

// ═══════════════════════════════════════════════
//  İŞLETME YÖNETİM API'LERİ
// ═══════════════════════════════════════════════

// İşletme profil güncelle
router.put('/business/profile', businessOnly, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT * FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  const fields = ['name', 'description', 'address', 'city', 'district', 'phone', 'email', 'website', 'working_hours', 'services'];
  const updates = [];
  const values = [];
  fields.forEach(f => { if (req.body[f] !== undefined) { updates.push(`${f} = ?`); values.push(req.body[f]); } });
  if (updates.length === 0) return res.status(400).json({ error: 'Güncellenecek alan yok' });

  values.push(business.id);
  db.prepare(`UPDATE businesses SET ${updates.join(', ')} WHERE id = ?`).run(...values);
  res.json({ success: true, message: 'İşletme profili güncellendi' });
});

// İşletme randevularını listele
router.get('/business/appointments', businessOnly, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT id FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  const { tarih, durum } = req.query;
  let where = 'WHERE a.business_id = ?';
  const params = [business.id];
  if (tarih) { where += ' AND a.date = ?'; params.push(tarih); }
  if (durum) { where += ' AND a.status = ?'; params.push(durum); }

  const appointments = db.prepare(`
    SELECT a.*, u.name as customer_name, u.phone as customer_phone, u.email as customer_email
    FROM appointments a JOIN users u ON a.user_id = u.id ${where} ORDER BY a.date ASC, a.time ASC
  `).all(...params);
  res.json(appointments);
});

// Randevu durumunu güncelle (işletme tarafı)
router.patch('/business/appointments/:id', businessOnly, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT id FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.status(403).json({ error: 'İşletme bulunamadı' });

  const appt = db.prepare('SELECT * FROM appointments WHERE id = ? AND business_id = ?').get(req.params.id, business.id);
  if (!appt) return res.status(404).json({ error: 'Randevu bulunamadı' });

  const { status } = req.body;
  const allowed = ['confirmed', 'cancelled', 'completed'];
  if (!allowed.includes(status)) return res.status(400).json({ error: 'Geçersiz durum' });

  db.prepare('UPDATE appointments SET status = ? WHERE id = ?').run(status, appt.id);

  const statusText = { confirmed: 'onaylandı', cancelled: 'iptal edildi', completed: 'tamamlandı' };
  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'appointment', 'Randevu Güncellendi', ?, '/kullanici/panel')")
    .run(appt.user_id, `${appt.date} ${appt.time} tarihli randevunuz ${statusText[status]}`);

  res.json({ success: true, status });
});

// İşletme teklif istekleri
router.get('/business/quotes', businessOnly, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT id FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  const quotes = db.prepare(`
    SELECT qr.*, u.name as customer_name, u.phone as customer_phone, u.email as customer_email
    FROM quote_requests qr JOIN users u ON qr.user_id = u.id
    WHERE qr.business_id = ? ORDER BY qr.created_at DESC
  `).all(business.id);
  res.json(quotes);
});

// Teklif isteğine cevap ver
router.patch('/business/quotes/:id', businessOnly, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT id, name FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.status(403).json({ error: 'İşletme bulunamadı' });

  const quote = db.prepare('SELECT * FROM quote_requests WHERE id = ? AND business_id = ?').get(req.params.id, business.id);
  if (!quote) return res.status(404).json({ error: 'Teklif isteği bulunamadı' });

  const { status, quote_amount } = req.body;
  const allowed = ['quoted', 'rejected'];
  if (!allowed.includes(status)) return res.status(400).json({ error: 'Geçersiz durum' });

  if (status === 'quoted' && !quote_amount) return res.status(400).json({ error: 'Teklif tutarı gerekli' });

  db.prepare('UPDATE quote_requests SET status = ?, quote_amount = ? WHERE id = ?').run(status, quote_amount || null, quote.id);

  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'quote', 'Teklif Yanıtı', ?, '/kullanici/panel')")
    .run(quote.user_id, status === 'quoted' ? `${business.name}: ${new Intl.NumberFormat('tr-TR').format(quote_amount)} ₺` : `${business.name} teklif isteğinizi reddetti`);

  res.json({ success: true, status });
});

// İşletme değerlendirmelerini listele
router.get('/business/reviews', businessOnly, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT id FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  const reviews = db.prepare(`
    SELECT r.*, u.name as reviewer_name, u.avatar as reviewer_avatar
    FROM reviews r JOIN users u ON r.user_id = u.id WHERE r.business_id = ? ORDER BY r.created_at DESC
  `).all(business.id);
  res.json(reviews);
});

// İşletme istatistikleri
router.get('/business/stats', businessOnly, (req, res) => {
  const db = getDb();
  const business = db.prepare('SELECT * FROM businesses WHERE user_id = ?').get(req.session.user.id);
  if (!business) return res.status(404).json({ error: 'İşletme bulunamadı' });

  res.json({
    rating: business.rating,
    reviewCount: business.review_count,
    todayAppointments: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND date=date('now')").get(business.id).c,
    weekAppointments: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND date BETWEEN date('now') AND date('now', '+7 days')").get(business.id).c,
    totalAppointments: db.prepare('SELECT COUNT(*) as c FROM appointments WHERE business_id=?').get(business.id).c,
    pendingAppointments: db.prepare("SELECT COUNT(*) as c FROM appointments WHERE business_id=? AND status='pending'").get(business.id).c,
    pendingQuotes: db.prepare("SELECT COUNT(*) as c FROM quote_requests WHERE business_id=? AND status='pending'").get(business.id).c,
    totalQuotes: db.prepare('SELECT COUNT(*) as c FROM quote_requests WHERE business_id=?').get(business.id).c,
  });
});

// ═══════════════════════════════════════════════
//  ADMİN API'LERİ
// ═══════════════════════════════════════════════

// Admin: Platform istatistikleri
router.get('/admin/stats', adminOnly, (req, res) => {
  const db = getDb();
  res.json({
    totalUsers: db.prepare('SELECT COUNT(*) as c FROM users').get().c,
    newUsersToday: db.prepare("SELECT COUNT(*) as c FROM users WHERE date(created_at) = date('now')").get().c,
    newUsersWeek: db.prepare("SELECT COUNT(*) as c FROM users WHERE date(created_at) >= date('now', '-7 days')").get().c,
    activeListings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE status='active'").get().c,
    pendingListings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE status='pending'").get().c,
    totalListings: db.prepare('SELECT COUNT(*) as c FROM listings').get().c,
    totalBusinesses: db.prepare('SELECT COUNT(*) as c FROM businesses').get().c,
    verifiedBusinesses: db.prepare("SELECT COUNT(*) as c FROM businesses WHERE is_verified=1").get().c,
    forumTopics: db.prepare('SELECT COUNT(*) as c FROM forum_topics').get().c,
    forumReplies: db.prepare('SELECT COUNT(*) as c FROM forum_replies').get().c,
    totalMessages: db.prepare('SELECT COUNT(*) as c FROM messages').get().c,
    totalReviews: db.prepare('SELECT COUNT(*) as c FROM reviews').get().c,
    pendingModeration: db.prepare("SELECT COUNT(*) as c FROM moderation_queue WHERE status='pending'").get().c,
    totalFavorites: db.prepare('SELECT COUNT(*) as c FROM favorites').get().c,
    totalAppointments: db.prepare('SELECT COUNT(*) as c FROM appointments').get().c,
    totalQuotes: db.prepare('SELECT COUNT(*) as c FROM quote_requests').get().c,
  });
});

// Admin: Tüm kullanıcılar
router.get('/admin/users', adminOnly, (req, res) => {
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
  const users = db.prepare(`SELECT id, name, email, phone, role, is_verified, created_at FROM users ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`)
    .all(...params, limit, offset);

  res.json({ users, totalCount, page, totalPages: Math.ceil(totalCount / limit) });
});

// Admin: Kullanıcı detay
router.get('/admin/users/:id', adminOnly, (req, res) => {
  const db = getDb();
  const user = db.prepare('SELECT id, name, email, phone, avatar, role, is_verified, profile_completion, created_at, updated_at FROM users WHERE id = ?').get(req.params.id);
  if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });

  const stats = {
    listings: db.prepare('SELECT COUNT(*) as c FROM listings WHERE user_id=?').get(user.id).c,
    activeListings: db.prepare("SELECT COUNT(*) as c FROM listings WHERE user_id=? AND status='active'").get(user.id).c,
    forumTopics: db.prepare('SELECT COUNT(*) as c FROM forum_topics WHERE user_id=?').get(user.id).c,
    forumReplies: db.prepare('SELECT COUNT(*) as c FROM forum_replies WHERE user_id=?').get(user.id).c,
    messages: db.prepare('SELECT COUNT(*) as c FROM messages WHERE sender_id=? OR receiver_id=?').get(user.id, user.id).c,
  };

  res.json({ ...user, stats });
});

// Admin: Kullanıcı rolü güncelle
router.patch('/admin/users/:id/role', adminOnly, (req, res) => {
  const db = getDb();
  const { role } = req.body;
  if (!['bireysel', 'kurumsal', 'admin'].includes(role)) return res.status(400).json({ error: 'Geçersiz rol' });
  db.prepare('UPDATE users SET role = ? WHERE id = ?').run(role, req.params.id);
  res.json({ success: true });
});

// Admin: Kullanıcı doğrulama toggle
router.patch('/admin/users/:id/verify', adminOnly, (req, res) => {
  const db = getDb();
  const user = db.prepare('SELECT is_verified FROM users WHERE id = ?').get(req.params.id);
  if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
  const newVal = user.is_verified ? 0 : 1;
  db.prepare('UPDATE users SET is_verified = ? WHERE id = ?').run(newVal, req.params.id);
  res.json({ success: true, is_verified: !!newVal });
});

// Admin: Kullanıcı sil
router.delete('/admin/users/:id', adminOnly, (req, res) => {
  const db = getDb();
  if (Number(req.params.id) === req.session.user.id) return res.status(400).json({ error: 'Kendinizi silemezsiniz' });
  db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// Admin: Tüm ilanlar (filtrelenebilir)
router.get('/admin/listings', adminOnly, (req, res) => {
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

  res.json({ listings, totalCount, page, totalPages: Math.ceil(totalCount / limit) });
});

// Admin: İlan durum güncelle (onayla / reddet)
router.patch('/admin/listings/:id/status', adminOnly, (req, res) => {
  const db = getDb();
  const { status } = req.body;
  if (!['active', 'pending', 'rejected', 'expired', 'sold', 'draft'].includes(status)) return res.status(400).json({ error: 'Geçersiz durum' });

  const listing = db.prepare('SELECT user_id, title FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı' });

  db.prepare('UPDATE listings SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(status, req.params.id);

  const statusText = { active: 'onaylandı', rejected: 'reddedildi', expired: 'süresi doldu', pending: 'incelemeye alındı' };
  if (statusText[status]) {
    db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'listing', 'İlan Güncellendi', ?, '/kullanici/panel')")
      .run(listing.user_id, `"${listing.title}" ilanınız ${statusText[status]}`);
  }

  res.json({ success: true, status });
});

// Admin: İlan öne çıkar toggle
router.patch('/admin/listings/:id/feature', adminOnly, (req, res) => {
  const db = getDb();
  const listing = db.prepare('SELECT is_featured FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'İlan bulunamadı' });
  const newVal = listing.is_featured ? 0 : 1;
  db.prepare('UPDATE listings SET is_featured = ? WHERE id = ?').run(newVal, req.params.id);
  res.json({ success: true, is_featured: !!newVal });
});

// Admin: İlan sil
router.delete('/admin/listings/:id', adminOnly, (req, res) => {
  const db = getDb();
  db.prepare('DELETE FROM listing_images WHERE listing_id = ?').run(req.params.id);
  db.prepare('DELETE FROM listing_features WHERE listing_id = ?').run(req.params.id);
  db.prepare('DELETE FROM favorites WHERE listing_id = ?').run(req.params.id);
  db.prepare('DELETE FROM listings WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// Admin: Tüm işletmeler
router.get('/admin/businesses', adminOnly, (req, res) => {
  const db = getDb();
  const businesses = db.prepare(`
    SELECT b.*, u.name as owner_name, u.email as owner_email
    FROM businesses b JOIN users u ON b.user_id = u.id ORDER BY b.created_at DESC
  `).all();
  res.json(businesses);
});

// Admin: İşletme doğrulama toggle
router.patch('/admin/businesses/:id/verify', adminOnly, (req, res) => {
  const db = getDb();
  const biz = db.prepare('SELECT is_verified, user_id, name FROM businesses WHERE id = ?').get(req.params.id);
  if (!biz) return res.status(404).json({ error: 'İşletme bulunamadı' });
  const newVal = biz.is_verified ? 0 : 1;
  db.prepare('UPDATE businesses SET is_verified = ? WHERE id = ?').run(newVal, req.params.id);

  db.prepare("INSERT INTO notifications (user_id, type, title, message, link) VALUES (?, 'business', 'İşletme Durumu', ?, '/isletme/panel')")
    .run(biz.user_id, newVal ? `"${biz.name}" doğrulandı!` : `"${biz.name}" doğrulaması kaldırıldı`);

  res.json({ success: true, is_verified: !!newVal });
});

// Admin: İşletme premium toggle
router.patch('/admin/businesses/:id/premium', adminOnly, (req, res) => {
  const db = getDb();
  const biz = db.prepare('SELECT is_premium FROM businesses WHERE id = ?').get(req.params.id);
  if (!biz) return res.status(404).json({ error: 'İşletme bulunamadı' });
  const newVal = biz.is_premium ? 0 : 1;
  db.prepare('UPDATE businesses SET is_premium = ? WHERE id = ?').run(newVal, req.params.id);
  res.json({ success: true, is_premium: !!newVal });
});

// Admin: İşletme sil
router.delete('/admin/businesses/:id', adminOnly, (req, res) => {
  const db = getDb();
  db.prepare('DELETE FROM reviews WHERE business_id = ?').run(req.params.id);
  db.prepare('DELETE FROM appointments WHERE business_id = ?').run(req.params.id);
  db.prepare('DELETE FROM quote_requests WHERE business_id = ?').run(req.params.id);
  db.prepare('DELETE FROM businesses WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// Admin: Moderasyon kuyruğu
router.get('/admin/moderation', adminOnly, (req, res) => {
  const db = getDb();
  const { durum } = req.query;
  const statusFilter = durum || 'pending';

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
    WHERE mq.status = ? ORDER BY mq.created_at DESC
  `).all(statusFilter);
  res.json(queue);
});

// Admin: Moderasyon aksiyon (onayla/reddet)
router.patch('/admin/moderation/:id', adminOnly, (req, res) => {
  const db = getDb();
  const { status } = req.body;
  if (!['approved', 'rejected'].includes(status)) return res.status(400).json({ error: 'Geçersiz durum' });

  const item = db.prepare('SELECT * FROM moderation_queue WHERE id = ?').get(req.params.id);
  if (!item) return res.status(404).json({ error: 'Öğe bulunamadı' });

  db.prepare('UPDATE moderation_queue SET status = ?, reviewed_by = ? WHERE id = ?')
    .run(status, req.session.user.id, req.params.id);

  // Reddedildi ise içeriği kaldır
  if (status === 'rejected') {
    if (item.type === 'listing') db.prepare("UPDATE listings SET status = 'rejected' WHERE id = ?").run(item.item_id);
    if (item.type === 'forum_topic') db.prepare('DELETE FROM forum_topics WHERE id = ?').run(item.item_id);
    if (item.type === 'forum_reply') db.prepare('DELETE FROM forum_replies WHERE id = ?').run(item.item_id);
    if (item.type === 'review') db.prepare('DELETE FROM reviews WHERE id = ?').run(item.item_id);
  }

  res.json({ success: true, status });
});

// Admin: Forum konu yönetimi (sabitle/kilitle)
router.patch('/admin/forum/topics/:id', adminOnly, (req, res) => {
  const db = getDb();
  const topic = db.prepare('SELECT * FROM forum_topics WHERE id = ?').get(req.params.id);
  if (!topic) return res.status(404).json({ error: 'Konu bulunamadı' });

  const { is_pinned, is_locked } = req.body;
  if (is_pinned !== undefined) db.prepare('UPDATE forum_topics SET is_pinned = ? WHERE id = ?').run(is_pinned ? 1 : 0, topic.id);
  if (is_locked !== undefined) db.prepare('UPDATE forum_topics SET is_locked = ? WHERE id = ?').run(is_locked ? 1 : 0, topic.id);

  res.json({ success: true, is_pinned: is_pinned !== undefined ? !!is_pinned : !!topic.is_pinned, is_locked: is_locked !== undefined ? !!is_locked : !!topic.is_locked });
});

// ═══════════════════════════════════════════════
//  RAPORLAMA
// ═══════════════════════════════════════════════

// İçerik raporla (herhangi bir içeriği moderasyon kuyruğuna ekle)
router.post('/report', auth, (req, res) => {
  const db = getDb();
  const { type, item_id, reason } = req.body;
  const validTypes = ['listing', 'business', 'forum_topic', 'forum_reply', 'review'];
  if (!validTypes.includes(type) || !item_id) return res.status(400).json({ error: 'Geçersiz rapor' });

  const existing = db.prepare("SELECT id FROM moderation_queue WHERE type = ? AND item_id = ? AND status = 'pending'").get(type, item_id);
  if (existing) return res.status(400).json({ error: 'Bu içerik zaten raporlanmış' });

  db.prepare('INSERT INTO moderation_queue (type, item_id, reason, reported_by) VALUES (?, ?, ?, ?)')
    .run(type, item_id, reason || 'Uygunsuz içerik', req.session.user.id);
  res.json({ success: true, message: 'Raporunuz alındı' });
});

// ═══════════════════════════════════════════════
//  ARAÇ HUB
// ═══════════════════════════════════════════════

// Vehicle hub listesi
router.get('/vehicle-hubs', (req, res) => {
  const db = getDb();
  const hubs = db.prepare(`
    SELECT vh.*, b.name as brand_name, b.slug as brand_slug, m.name as model_name, m.slug as model_slug
    FROM vehicle_hubs vh JOIN brands b ON vh.brand_id = b.id JOIN models m ON vh.model_id = m.id
    ORDER BY vh.created_at DESC
  `).all();
  res.json(hubs);
});

// Vehicle hub detay
router.get('/vehicle-hubs/:brandSlug/:modelSlug', (req, res) => {
  const db = getDb();
  const hub = db.prepare(`
    SELECT vh.*, b.name as brand_name, b.slug as brand_slug, m.name as model_name, m.slug as model_slug
    FROM vehicle_hubs vh JOIN brands b ON vh.brand_id = b.id JOIN models m ON vh.model_id = m.id
    WHERE b.slug = ? AND m.slug = ?
  `).get(req.params.brandSlug, req.params.modelSlug);
  if (!hub) return res.status(404).json({ error: 'Araç hub bulunamadı' });

  // Bu modelin aktif ilanları
  const listings = db.prepare(`
    SELECT l.*, (SELECT url FROM listing_images WHERE listing_id = l.id AND is_primary = 1 LIMIT 1) as image
    FROM listings l WHERE l.brand_id = ? AND l.model_id = ? AND l.status = 'active'
    ORDER BY l.created_at DESC LIMIT 10
  `).all(hub.brand_id, hub.model_id);

  // Fiyat istatistikleri
  const priceStats = db.prepare(`
    SELECT MIN(price) as min_price, MAX(price) as max_price, ROUND(AVG(price)) as avg_price, COUNT(*) as count
    FROM listings WHERE brand_id = ? AND model_id = ? AND status = 'active'
  `).get(hub.brand_id, hub.model_id);

  // Forum konuları
  const topics = db.prepare(`
    SELECT ft.*, u.name as author_name FROM forum_topics ft JOIN users u ON ft.user_id = u.id
    WHERE ft.title LIKE ? OR ft.title LIKE ? ORDER BY ft.reply_count DESC LIMIT 5
  `).all(`%${hub.brand_name}%`, `%${hub.model_name}%`);

  res.json({ ...hub, listings, priceStats, topics });
});

// ═══════════════════════════════════════════════
//  ADMIN: ARAÇ HUB CRUD
// ═══════════════════════════════════════════════

// Admin: Tüm hub'lar
router.get('/admin/hubs', adminOnly, (req, res) => {
  const db = getDb();
  const hubs = db.prepare(`
    SELECT vh.*, b.name as brand_name, b.slug as brand_slug, m.name as model_name, m.slug as model_slug
    FROM vehicle_hubs vh JOIN brands b ON vh.brand_id = b.id JOIN models m ON vh.model_id = m.id
    ORDER BY vh.created_at DESC
  `).all();
  res.json(hubs);
});

// Admin: Hub oluştur
router.post('/admin/hubs', adminOnly, (req, res) => {
  const db = getDb();
  const { brand_id, model_id, year, avg_price, fuel_type, engine, hp, torque, transmission, acceleration, top_speed, fuel_consumption, length, width, height, wheelbase, weight, editor_rating, editor_review, pros, cons } = req.body;
  if (!brand_id || !model_id) return res.status(400).json({ error: 'Marka ve model zorunlu' });
  const existing = db.prepare('SELECT id FROM vehicle_hubs WHERE brand_id = ? AND model_id = ?').get(brand_id, model_id);
  if (existing) return res.status(400).json({ error: 'Bu marka/model için zaten hub var' });
  const result = db.prepare(`INSERT INTO vehicle_hubs (brand_id, model_id, year, avg_price, fuel_type, engine, hp, torque, transmission, acceleration, top_speed, fuel_consumption, length, width, height, wheelbase, weight, editor_rating, editor_review, pros, cons) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
    .run(brand_id, model_id, year || null, avg_price || null, fuel_type || null, engine || null, hp || null, torque || null, transmission || null, acceleration || null, top_speed || null, fuel_consumption || null, length || null, width || null, height || null, wheelbase || null, weight || null, editor_rating || null, editor_review || null, pros || null, cons || null);
  res.json({ success: true, id: result.lastInsertRowid });
});

// Admin: Hub güncelle
router.put('/admin/hubs/:id', adminOnly, (req, res) => {
  const db = getDb();
  const hub = db.prepare('SELECT id FROM vehicle_hubs WHERE id = ?').get(req.params.id);
  if (!hub) return res.status(404).json({ error: 'Hub bulunamadı' });
  const { year, avg_price, fuel_type, engine, hp, torque, transmission, acceleration, top_speed, fuel_consumption, length, width, height, wheelbase, weight, editor_rating, editor_review, pros, cons } = req.body;
  db.prepare(`UPDATE vehicle_hubs SET year=?, avg_price=?, fuel_type=?, engine=?, hp=?, torque=?, transmission=?, acceleration=?, top_speed=?, fuel_consumption=?, length=?, width=?, height=?, wheelbase=?, weight=?, editor_rating=?, editor_review=?, pros=?, cons=? WHERE id=?`)
    .run(year||null, avg_price||null, fuel_type||null, engine||null, hp||null, torque||null, transmission||null, acceleration||null, top_speed||null, fuel_consumption||null, length||null, width||null, height||null, wheelbase||null, weight||null, editor_rating||null, editor_review||null, pros||null, cons||null, req.params.id);
  res.json({ success: true });
});

// Admin: Hub sil
router.delete('/admin/hubs/:id', adminOnly, (req, res) => {
  const db = getDb();
  db.prepare('DELETE FROM vehicle_hubs WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// ═══════════════════════════════════════════════
//  ADMIN: MARKA/MODEL CRUD
// ═══════════════════════════════════════════════

// Admin: Marka oluştur
router.post('/admin/brands', adminOnly, (req, res) => {
  const db = getDb();
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Marka adı zorunlu' });
  const slug = name.toLowerCase().replace(/[^a-z0-9ğüşıöçĞÜŞİÖÇ]+/g, '-').replace(/^-|-$/g, '')
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c');
  const existing = db.prepare('SELECT id FROM brands WHERE slug = ?').get(slug);
  if (existing) return res.status(400).json({ error: 'Bu marka zaten mevcut' });
  const result = db.prepare('INSERT INTO brands (name, slug) VALUES (?, ?)').run(name, slug);
  res.json({ success: true, id: result.lastInsertRowid, slug });
});

// Admin: Marka güncelle
router.put('/admin/brands/:id', adminOnly, (req, res) => {
  const db = getDb();
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Marka adı zorunlu' });
  const slug = name.toLowerCase().replace(/[^a-z0-9ğüşıöçĞÜŞİÖÇ]+/g, '-').replace(/^-|-$/g, '')
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c');
  db.prepare('UPDATE brands SET name = ?, slug = ? WHERE id = ?').run(name, slug, req.params.id);
  res.json({ success: true });
});

// Admin: Marka sil
router.delete('/admin/brands/:id', adminOnly, (req, res) => {
  const db = getDb();
  const modelCount = db.prepare('SELECT COUNT(*) as c FROM models WHERE brand_id = ?').get(req.params.id).c;
  if (modelCount > 0) return res.status(400).json({ error: `Bu markaya ait ${modelCount} model var, önce modelleri silin` });
  db.prepare('DELETE FROM brands WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// Admin: Model oluştur
router.post('/admin/models', adminOnly, (req, res) => {
  const db = getDb();
  const { brand_id, name, body_type } = req.body;
  if (!brand_id || !name) return res.status(400).json({ error: 'Marka ve model adı zorunlu' });
  const slug = name.toLowerCase().replace(/[^a-z0-9ğüşıöçĞÜŞİÖÇ]+/g, '-').replace(/^-|-$/g, '')
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c');
  const existing = db.prepare('SELECT id FROM models WHERE brand_id = ? AND slug = ?').get(brand_id, slug);
  if (existing) return res.status(400).json({ error: 'Bu model zaten mevcut' });
  const result = db.prepare('INSERT INTO models (brand_id, name, slug, body_type) VALUES (?, ?, ?, ?)').run(brand_id, name, slug, body_type || null);
  res.json({ success: true, id: result.lastInsertRowid, slug });
});

// Admin: Model güncelle
router.put('/admin/models/:id', adminOnly, (req, res) => {
  const db = getDb();
  const { name, body_type } = req.body;
  if (!name) return res.status(400).json({ error: 'Model adı zorunlu' });
  const slug = name.toLowerCase().replace(/[^a-z0-9ğüşıöçĞÜŞİÖÇ]+/g, '-').replace(/^-|-$/g, '')
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c');
  db.prepare('UPDATE models SET name = ?, slug = ?, body_type = ? WHERE id = ?').run(name, slug, body_type || null, req.params.id);
  res.json({ success: true });
});

// Admin: Model sil
router.delete('/admin/models/:id', adminOnly, (req, res) => {
  const db = getDb();
  const listingCount = db.prepare('SELECT COUNT(*) as c FROM listings WHERE model_id = ?').get(req.params.id).c;
  if (listingCount > 0) return res.status(400).json({ error: `Bu modele ait ${listingCount} ilan var, önce ilanları silin` });
  db.prepare('DELETE FROM vehicle_hubs WHERE model_id = ?').run(req.params.id);
  db.prepare('DELETE FROM models WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// ═══════════════════════════════════════════════
//  ADMIN: FORUM YÖNETİMİ (genişletilmiş)
// ═══════════════════════════════════════════════

// Admin: Forum konusu sil
router.delete('/admin/forum/topics/:id', adminOnly, (req, res) => {
  const db = getDb();
  db.prepare('DELETE FROM forum_likes WHERE reply_id IN (SELECT id FROM forum_replies WHERE topic_id = ?)').run(req.params.id);
  db.prepare('DELETE FROM forum_replies WHERE topic_id = ?').run(req.params.id);
  db.prepare('DELETE FROM forum_topics WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// Admin: Forum yanıtı sil
router.delete('/admin/forum/replies/:id', adminOnly, (req, res) => {
  const db = getDb();
  const reply = db.prepare('SELECT topic_id FROM forum_replies WHERE id = ?').get(req.params.id);
  db.prepare('DELETE FROM forum_likes WHERE reply_id = ?').run(req.params.id);
  db.prepare('DELETE FROM forum_replies WHERE id = ?').run(req.params.id);
  if (reply) db.prepare('UPDATE forum_topics SET reply_count = MAX(0, reply_count - 1) WHERE id = ?').run(reply.topic_id);
  res.json({ success: true });
});

// Admin: Forum kategorisi oluştur
router.post('/admin/forum/categories', adminOnly, (req, res) => {
  const db = getDb();
  const { name, description, icon, color } = req.body;
  if (!name) return res.status(400).json({ error: 'Kategori adı zorunlu' });
  const slug = name.toLowerCase().replace(/[^a-z0-9ğüşıöçĞÜŞİÖÇ]+/g, '-').replace(/^-|-$/g, '')
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c');
  const result = db.prepare('INSERT INTO forum_categories (name, slug, description, icon, color) VALUES (?, ?, ?, ?, ?)').run(name, slug, description || null, icon || 'forum', color || '#1775d3');
  res.json({ success: true, id: result.lastInsertRowid });
});

// Admin: Forum kategorisi güncelle
router.put('/admin/forum/categories/:id', adminOnly, (req, res) => {
  const db = getDb();
  const { name, description, icon, color } = req.body;
  if (!name) return res.status(400).json({ error: 'Kategori adı zorunlu' });
  const slug = name.toLowerCase().replace(/[^a-z0-9ğüşıöçĞÜŞİÖÇ]+/g, '-').replace(/^-|-$/g, '')
    .replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace(/ı/g,'i').replace(/ö/g,'o').replace(/ç/g,'c');
  db.prepare('UPDATE forum_categories SET name=?, slug=?, description=?, icon=?, color=? WHERE id=?').run(name, slug, description||null, icon||'forum', color||'#1775d3', req.params.id);
  res.json({ success: true });
});

// Admin: Forum kategorisi sil
router.delete('/admin/forum/categories/:id', adminOnly, (req, res) => {
  const db = getDb();
  const topicCount = db.prepare('SELECT COUNT(*) as c FROM forum_topics WHERE category_id = ?').get(req.params.id).c;
  if (topicCount > 0) return res.status(400).json({ error: `Bu kategoride ${topicCount} konu var, önce konuları taşıyın veya silin` });
  db.prepare('DELETE FROM forum_categories WHERE id = ?').run(req.params.id);
  res.json({ success: true });
});

// Admin: Tüm forum kategorileri (yönetim)
router.get('/admin/forum/categories', adminOnly, (req, res) => {
  const db = getDb();
  const categories = db.prepare('SELECT * FROM forum_categories ORDER BY sort_order ASC, name ASC').all();
  res.json(categories);
});

// Admin: Forum konularını listele (genişletilmiş)
router.get('/admin/forum/topics', adminOnly, (req, res) => {
  const db = getDb();
  const { sayfa, arama, kategori } = req.query;
  let where = 'WHERE 1=1';
  const params = [];
  if (arama) { where += ' AND (ft.title LIKE ? OR ft.content LIKE ?)'; params.push(`%${arama}%`, `%${arama}%`); }
  if (kategori) { where += ' AND ft.category_id = ?'; params.push(kategori); }
  const page = Math.max(1, Number(sayfa) || 1);
  const limit = 20;
  const offset = (page - 1) * limit;
  const totalCount = db.prepare(`SELECT COUNT(*) as c FROM forum_topics ft ${where}`).get(...params).c;
  const topics = db.prepare(`SELECT ft.*, u.name as author_name, fc.name as category_name FROM forum_topics ft JOIN users u ON ft.user_id = u.id JOIN forum_categories fc ON ft.category_id = fc.id ${where} ORDER BY ft.created_at DESC LIMIT ? OFFSET ?`).all(...params, limit, offset);
  res.json({ topics, totalCount, page, totalPages: Math.ceil(totalCount / limit) });
});

// Admin: İşletme premium toggle — zaten var yukarıda

// Admin: İşletme sil — zaten var yukarıda

module.exports = router;
