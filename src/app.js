// ─── Environment ───
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const { initializeDatabase } = require('./db/database');

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ─── View engine ───
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// ─── Proxy güveni (rate-limit ve gerçek IP için) ───
app.set('trust proxy', 1);

// ─── Temel Middleware ───
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));

// CORS — API erişimi için
const corsOrigin = (process.env.BASE_URL || 'http://localhost:3000').trim();
app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));

// HTTP loglama
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Rate limiting — DDoS ve brute-force koruması
const limiter = rateLimit({
  windowMs: (Number(process.env.RATE_LIMIT_WINDOW) || 15) * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX) || 100,
  message: { error: 'Çok fazla istek gönderdiniz, lütfen biraz bekleyin.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

// Auth endpoint'leri için daha sıkı limit
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Çok fazla giriş denemesi, 15 dakika sonra tekrar deneyin.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/auth/', authLimiter);

// Admin panel için rate limit
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: 'Çok fazla istek, lütfen biraz bekleyin.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/admin/', adminLimiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// ─── Session ───
let sessionConfig;
if (NODE_ENV === 'production') {
  const pgSession = require('connect-pg-simple')(session);
  const { getPool } = require('./db/pg-wrapper');
  sessionConfig = {
    store: new pgSession({
      pool: getPool(),
      tableName: 'session',
      createTableIfMissing: true,
    }),
    secret: process.env.SESSION_SECRET || 'fallback-secret-change-me',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    },
    name: 'araba.sid',
  };
} else {
  const SQLiteStore = require('connect-sqlite3')(session);
  sessionConfig = {
    store: new SQLiteStore({ db: 'sessions.sqlite', dir: path.join(__dirname, 'db') }),
    secret: process.env.SESSION_SECRET || 'fallback-secret-change-me',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    },
    name: 'araba.sid',
  };
}

app.use(session(sessionConfig));
app.use(flash());

// ─── Global template değişkenleri ───
app.use((req, res, next) => {
  res.locals.currentUser = req.session.user || null;
  res.locals.currentPath = req.path;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.NODE_ENV = NODE_ENV;
  next();
});

// ─── Routes ───
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/api'));
app.use('/ilan', require('./routes/listings'));
app.use('/forum', require('./routes/forum'));
app.use('/servis', require('./routes/services'));
app.use('/kullanici', require('./routes/user'));
app.use('/isletme', require('./routes/business'));
app.use('/admin', require('./routes/admin'));

// ─── Sağlık kontrolü (monitoring için) ───
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    env: NODE_ENV,
  });
});

// ─── 404 ───
app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Sayfa Bulunamadı' });
});

// ─── Error handler ───
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] ❌ ${err.stack}`);
  const statusCode = err.status || 500;
  if (req.path.startsWith('/api/')) {
    return res.status(statusCode).json({
      error: NODE_ENV === 'production' ? 'Sunucu hatası' : err.message,
    });
  }
  // Ensure template locals exist even if middleware chain broke
  if (!res.locals.currentPath) res.locals.currentPath = req.path;
  if (!res.locals.currentUser) res.locals.currentUser = null;
  if (!res.locals.success) res.locals.success = [];
  if (!res.locals.error) res.locals.error = [];
  if (!res.locals.NODE_ENV) res.locals.NODE_ENV = NODE_ENV;
  res.status(statusCode).render('pages/404', { title: 'Sunucu Hatası' });
});

// ─── DB başlat & Sunucu (sadece doğrudan çalıştırılırsa) ───
let dbReady = false;
const dbReadyPromise = initializeDatabase().then(() => {
  dbReady = true;
  console.log('✅ Veritabanı hazır');
}).catch(err => {
  console.error('❌ Veritabanı başlatma hatası:', err);
});

// Vercel serverless: app.listen çalıştırma, sadece export et
if (!process.env.VERCEL) {
  dbReadyPromise.then(() => {
    const server = app.listen(PORT, () => {
      console.log(`\n🚗 Araba İncele Al Sat - http://localhost:${PORT}`);
      console.log(`📂 Ortam: ${NODE_ENV}`);
      console.log(`🛡️  Rate Limit: ${process.env.RATE_LIMIT_MAX || 100} istek / ${process.env.RATE_LIMIT_WINDOW || 15} dk`);
      console.log(`🔑 Session Secret: ${process.env.SESSION_SECRET ? '✅ .env\'den yüklendi' : '⚠️  Varsayılan kullanılıyor'}\n`);
    });

    const gracefulShutdown = (signal) => {
      console.log(`\n🛑 ${signal} sinyali alındı, sunucu kapatılıyor...`);
      server.close(async () => {
        const { closeDatabase } = require('./db/database');
        await closeDatabase();
        console.log('✅ Bağlantılar kapatıldı, çıkış yapılıyor.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));
  });
}

module.exports = app;
