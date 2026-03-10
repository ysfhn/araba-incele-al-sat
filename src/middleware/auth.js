// Auth middleware
function isAuthenticated(req, res, next) {
  if (req.session.user) return next();
  req.flash('error', 'Bu sayfayı görüntülemek için giriş yapmalısınız.');
  res.redirect('/giris');
}

function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === 'admin') return next();
  req.flash('error', 'Bu sayfaya erişim yetkiniz yok.');
  res.redirect('/');
}

function isBusiness(req, res, next) {
  if (req.session.user && (req.session.user.role === 'kurumsal' || req.session.user.role === 'admin')) return next();
  req.flash('error', 'Bu sayfaya erişmek için işletme hesabınız olmalıdır.');
  res.redirect('/');
}

function isGuest(req, res, next) {
  if (!req.session.user) return next();
  res.redirect('/');
}

module.exports = { isAuthenticated, isAdmin, isBusiness, isGuest };
