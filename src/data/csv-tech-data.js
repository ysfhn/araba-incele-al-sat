/**
 * CSV Teknik Veri Modülü
 * ======================
 * arac-verileri.csv'den çıkarılan gerçek araç teknik verilerini sağlar.
 * hub-content-generator tarafından boyut, ağırlık, bagaj, tork, hız verisi için kullanılır.
 *
 * Placeholder tespit kuralı:
 *   uzunluk=4000 && genislik=1720 && yukseklik=1460 && bagaj=300 && agirlik=1100 && maxHp<=90
 *   → Gerçek veri değil, CSV'deki template row → atlanır
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, 'csv-vehicle-data.json');

let _cache = null;

/**
 * Placeholder (sahte) veriyi tespit eder
 */
function isPlaceholder(md) {
  if (!md || !md.dimensions) return true;
  const d = md.dimensions;
  return (
    d.uzunluk === 4000 && d.genislik === 1720 && d.yukseklik === 1460 &&
    d.bagajHacmi === 300 && d.agirlik === 1100 && (md.maxHp || 0) <= 90
  );
}

/**
 * JSON dosyasını yükler ve cache'ler. Placeholder verileri filtreler.
 */
function loadData() {
  if (_cache) return _cache;
  try {
    const raw = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
    _cache = {};
    for (const [key, md] of Object.entries(raw)) {
      if (!isPlaceholder(md)) {
        _cache[key] = md;
      }
    }
    return _cache;
  } catch (e) {
    _cache = {};
    return _cache;
  }
}

/**
 * Belirli bir marka+model için CSV teknik verilerini döndürür.
 * @param {string} brandSlug  örn. 'bmw'
 * @param {string} modelSlug  örn. '3-serisi'
 * @returns {object|null} { dimensions, maxHp, maxTork, maxSpeed, years }
 */
function getTechData(brandSlug, modelSlug) {
  const data = loadData();
  return data[`${brandSlug}|${modelSlug}`] || null;
}

/**
 * Hub content generator için formatlı boyut bilgilerini döndürür.
 * BODY_DEFAULTS yerine gerçek CSV verisini kullanır.
 * @returns {object|null} { length, width, height, wheelbase, weight, trunk_volume, top_speed, maxHp, maxTork }
 */
function getRealDimensions(brandSlug, modelSlug) {
  const td = getTechData(brandSlug, modelSlug);
  if (!td) return null;

  const d = td.dimensions;
  if (!d) return null;

  const result = {};

  // Boyutlar
  if (d.uzunluk && d.uzunluk > 2000) result.length = d.uzunluk + ' mm';
  if (d.genislik && d.genislik > 1000) result.width = d.genislik + ' mm';
  if (d.yukseklik && d.yukseklik > 1000) result.height = d.yukseklik + ' mm';
  if (d.dingilMesafesi && d.dingilMesafesi > 1500) result.wheelbase = d.dingilMesafesi + ' mm';
  if (d.agirlik && d.agirlik > 500) result.weight = d.agirlik + ' kg';
  if (d.bagajHacmi && d.bagajHacmi > 0) result.trunk_volume = d.bagajHacmi + ' L';

  // Performans
  if (td.maxSpeed && td.maxSpeed > 100) result.top_speed = td.maxSpeed + ' km/s';
  if (td.maxHp && td.maxHp > 50) result.maxHp = td.maxHp;
  if (td.maxTork && td.maxTork > 50) result.maxTork = td.maxTork;

  return Object.keys(result).length > 0 ? result : null;
}

/**
 * Cache'i temizler (test amaçlı)
 */
function clearCache() {
  _cache = null;
}

/**
 * Yüklü veri istatistikleri
 */
function getStats() {
  const data = loadData();
  const count = Object.keys(data).length;
  const brands = new Set(Object.keys(data).map(k => k.split('|')[0]));
  return { modelCount: count, brandCount: brands.size };
}

module.exports = {
  getTechData,
  getRealDimensions,
  clearCache,
  getStats,
  isPlaceholder,
};
