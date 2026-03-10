const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const DB_PATH = path.join(__dirname, 'database.sqlite');

let db;

function getDb() {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
  }
  return db;
}

function initializeDatabase() {
  const db = getDb();

  db.exec(`
    -- Kullanıcılar
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT NOT NULL,
      phone TEXT,
      avatar TEXT,
      role TEXT DEFAULT 'bireysel' CHECK(role IN ('bireysel', 'kurumsal', 'admin')),
      is_verified INTEGER DEFAULT 0,
      profile_completion INTEGER DEFAULT 25,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- İşletmeler
    CREATE TABLE IF NOT EXISTS businesses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      type TEXT DEFAULT 'servis' CHECK(type IN ('servis', 'galeri', 'yedek_parca', 'ekspertiz')),
      description TEXT,
      address TEXT,
      city TEXT,
      district TEXT,
      phone TEXT,
      email TEXT,
      website TEXT,
      logo TEXT,
      cover_image TEXT,
      rating REAL DEFAULT 0,
      review_count INTEGER DEFAULT 0,
      is_premium INTEGER DEFAULT 0,
      is_verified INTEGER DEFAULT 0,
      lat REAL,
      lng REAL,
      working_hours TEXT,
      services TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Araç Markaları
    CREATE TABLE IF NOT EXISTS brands (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      logo TEXT
    );

    -- Araç Modelleri
    CREATE TABLE IF NOT EXISTS models (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      brand_id INTEGER NOT NULL REFERENCES brands(id),
      name TEXT NOT NULL,
      slug TEXT NOT NULL,
      body_type TEXT,
      UNIQUE(brand_id, slug)
    );

    -- İlanlar
    CREATE TABLE IF NOT EXISTS listings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      brand_id INTEGER REFERENCES brands(id),
      model_id INTEGER REFERENCES models(id),
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      year INTEGER NOT NULL,
      km INTEGER DEFAULT 0,
      fuel_type TEXT CHECK(fuel_type IN ('benzin', 'dizel', 'elektrik', 'hibrit', 'lpg')),
      transmission TEXT CHECK(transmission IN ('otomatik', 'manuel', 'yari_otomatik')),
      hp INTEGER,
      cc INTEGER,
      color TEXT,
      body_type TEXT,
      drive_type TEXT,
      description TEXT,
      price INTEGER NOT NULL,
      currency TEXT DEFAULT 'TRY',
      city TEXT,
      district TEXT,
      status TEXT DEFAULT 'active' CHECK(status IN ('draft', 'pending', 'active', 'sold', 'expired', 'rejected')),
      is_featured INTEGER DEFAULT 0,
      package_type TEXT DEFAULT 'free' CHECK(package_type IN ('free', 'premium', 'vip')),
      view_count INTEGER DEFAULT 0,
      favorite_count INTEGER DEFAULT 0,
      damage_free INTEGER DEFAULT 1,
      trade_in INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      expires_at DATETIME
    );

    -- İlan Görselleri
    CREATE TABLE IF NOT EXISTS listing_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
      url TEXT NOT NULL,
      is_primary INTEGER DEFAULT 0,
      sort_order INTEGER DEFAULT 0
    );

    -- İlan Özellikleri
    CREATE TABLE IF NOT EXISTS listing_features (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
      feature TEXT NOT NULL
    );

    -- Favoriler
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      listing_id INTEGER NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, listing_id)
    );

    -- Mesajlar
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      sender_id INTEGER NOT NULL REFERENCES users(id),
      receiver_id INTEGER NOT NULL REFERENCES users(id),
      listing_id INTEGER REFERENCES listings(id),
      content TEXT NOT NULL,
      is_read INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Forum Kategorileri
    CREATE TABLE IF NOT EXISTS forum_categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      description TEXT,
      icon TEXT,
      color TEXT DEFAULT '#1775d3',
      sort_order INTEGER DEFAULT 0,
      topic_count INTEGER DEFAULT 0,
      post_count INTEGER DEFAULT 0
    );

    -- Forum Konuları
    CREATE TABLE IF NOT EXISTS forum_topics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER NOT NULL REFERENCES forum_categories(id),
      user_id INTEGER NOT NULL REFERENCES users(id),
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      content TEXT NOT NULL,
      is_pinned INTEGER DEFAULT 0,
      is_locked INTEGER DEFAULT 0,
      view_count INTEGER DEFAULT 0,
      reply_count INTEGER DEFAULT 0,
      last_reply_at DATETIME,
      last_reply_by INTEGER REFERENCES users(id),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Forum Yanıtları
    CREATE TABLE IF NOT EXISTS forum_replies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      topic_id INTEGER NOT NULL REFERENCES forum_topics(id) ON DELETE CASCADE,
      user_id INTEGER NOT NULL REFERENCES users(id),
      content TEXT NOT NULL,
      like_count INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Forum Beğenileri
    CREATE TABLE IF NOT EXISTS forum_likes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id),
      reply_id INTEGER NOT NULL REFERENCES forum_replies(id) ON DELETE CASCADE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, reply_id)
    );

    -- İşletme Değerlendirmeleri
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_id INTEGER NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
      user_id INTEGER NOT NULL REFERENCES users(id),
      rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
      comment TEXT,
      service_type TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Randevular
    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_id INTEGER NOT NULL REFERENCES businesses(id),
      user_id INTEGER NOT NULL REFERENCES users(id),
      service_type TEXT,
      vehicle_info TEXT,
      date DATE NOT NULL,
      time TEXT NOT NULL,
      status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'confirmed', 'cancelled', 'completed')),
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Teklif İstekleri
    CREATE TABLE IF NOT EXISTS quote_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      business_id INTEGER NOT NULL REFERENCES businesses(id),
      user_id INTEGER NOT NULL REFERENCES users(id),
      vehicle_info TEXT,
      service_type TEXT,
      description TEXT,
      status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'quoted', 'accepted', 'rejected')),
      quote_amount INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Bildirimler
    CREATE TABLE IF NOT EXISTS notifications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      type TEXT NOT NULL,
      title TEXT NOT NULL,
      message TEXT,
      link TEXT,
      is_read INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Araç Hub Sayfaları
    CREATE TABLE IF NOT EXISTS vehicle_hubs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      brand_id INTEGER NOT NULL REFERENCES brands(id),
      model_id INTEGER NOT NULL REFERENCES models(id),
      year INTEGER,
      avg_price INTEGER,
      fuel_type TEXT,
      engine TEXT,
      hp INTEGER,
      torque TEXT,
      transmission TEXT,
      acceleration TEXT,
      top_speed TEXT,
      fuel_consumption TEXT,
      length TEXT,
      width TEXT,
      height TEXT,
      wheelbase TEXT,
      weight TEXT,
      editor_rating REAL,
      editor_review TEXT,
      pros TEXT,
      cons TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Moderasyon Kuyruğu
    CREATE TABLE IF NOT EXISTS moderation_queue (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL CHECK(type IN ('listing', 'business', 'forum_topic', 'forum_reply', 'review')),
      item_id INTEGER NOT NULL,
      reason TEXT,
      reported_by INTEGER REFERENCES users(id),
      status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected')),
      reviewed_by INTEGER REFERENCES users(id),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    -- Indexes
    CREATE INDEX IF NOT EXISTS idx_listings_user ON listings(user_id);
    CREATE INDEX IF NOT EXISTS idx_listings_brand ON listings(brand_id);
    CREATE INDEX IF NOT EXISTS idx_listings_status ON listings(status);
    CREATE INDEX IF NOT EXISTS idx_listings_price ON listings(price);
    CREATE INDEX IF NOT EXISTS idx_listings_year ON listings(year);
    CREATE INDEX IF NOT EXISTS idx_listings_city ON listings(city);
    CREATE INDEX IF NOT EXISTS idx_forum_topics_category ON forum_topics(category_id);
    CREATE INDEX IF NOT EXISTS idx_forum_replies_topic ON forum_replies(topic_id);
    CREATE INDEX IF NOT EXISTS idx_messages_sender ON messages(sender_id);
    CREATE INDEX IF NOT EXISTS idx_messages_receiver ON messages(receiver_id);
    CREATE INDEX IF NOT EXISTS idx_favorites_user ON favorites(user_id);
    CREATE INDEX IF NOT EXISTS idx_businesses_city ON businesses(city);
    CREATE INDEX IF NOT EXISTS idx_businesses_type ON businesses(type);
    CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);
  `);

  console.log('✅ Veritabanı tabloları oluşturuldu');
  return db;
}

module.exports = { getDb, initializeDatabase };
