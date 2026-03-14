/**
 * Doğrulanmış Model Verileri — Tüm Modeller
 * ──────────────────────────────────────────
 * 925 model için gerçek piyasa fiyatları ve üretici teknik verileri.
 * CSV verisi veya segment tahmini yerine bu veriler öncelikli kullanılır.
 *
 * Fiyatlar: Mart 2026 Türkiye piyasası, ortalama ikinci el + sıfır (TL)
 * Boyutlar: Üretici resmi verileri (mm/kg/L)
 *
 * Format: 'marka-slug|model-slug': { ... }
 */

const { VERIFIED_DATA: PART1 } = require('./verified-model-data-part1');
const { VERIFIED_DATA_PART2: PART2 } = require('./verified-model-data-part2');
const { VERIFIED_DATA_PART3: PART3 } = require('./verified-model-data-part3');
const { VERIFIED_DATA_PART4: PART4 } = require('./verified-model-data-part4');

const VERIFIED_DATA = {
  ...PART1,
  ...PART2,
  ...PART3,
  ...PART4,
};

/**
 * Doğrulanmış veri lookup
 * @param {string} brandSlug
 * @param {string} modelSlug
 * @returns {Object|null}
 */
function getVerifiedData(brandSlug, modelSlug) {
  const key = `${brandSlug}|${modelSlug}`;
  return VERIFIED_DATA[key] || null;
}

/**
 * İstatistikler
 */
function getVerifiedStats() {
  const entries = Object.keys(VERIFIED_DATA);
  const brands = new Set(entries.map(k => k.split('|')[0]));
  return {
    totalModels: entries.length,
    totalBrands: brands.size,
    brands: [...brands]
  };
}

module.exports = { getVerifiedData, getVerifiedStats, VERIFIED_DATA };
