const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const { initializeDatabase } = require('./db/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize DB
initializeDatabase();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Middleware
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Session
const SQLiteStore = require('connect-sqlite3')(session);
app.use(session({
  store: new SQLiteStore({ db: 'sessions.sqlite', dir: path.join(__dirname, 'db') }),
  secret: 'araba-incele-al-sat-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 7 gün
}));
app.use(flash());

// Global template variables
app.use((req, res, next) => {
  res.locals.currentUser = req.session.user || null;
  res.locals.currentPath = req.path;
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/api'));
app.use('/ilan', require('./routes/listings'));
app.use('/forum', require('./routes/forum'));
app.use('/servis', require('./routes/services'));
app.use('/kullanici', require('./routes/user'));
app.use('/isletme', require('./routes/business'));
app.use('/admin', require('./routes/admin'));

// 404
app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Sayfa Bulunamadı' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('pages/404', { title: 'Sunucu Hatası' });
});

app.listen(PORT, () => {
  console.log(`\n🚗 Araba İncele Al Sat - http://localhost:${PORT}`);
  console.log(`📂 Ortam: ${process.env.NODE_ENV || 'development'}\n`);
});

module.exports = app;
