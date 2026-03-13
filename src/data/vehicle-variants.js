/**
 * Araç Varyant Veritabanı — Ana Modül
 * 4 parçadan oluşan veriyi birleştirir ve yardımcı fonksiyonları dışa aktarır.
 */

const part1 = require('./vehicle-variants-1');
const part2 = require('./vehicle-variants-2');
const part3 = require('./vehicle-variants-3');
const part4 = require('./vehicle-variants-4');

// Tüm varyantları tek bir obje altında birleştir
const VARIANTS = Object.assign({}, part1, part2, part3, part4);

/* ─── Yardımcı Fonksiyonlar ─────────────────────────────── */

/**
 * Model slug'ını çözümle — önce birebir eşleşme, yoksa prefix eşleşme dene.
 * Örn: "corolla" → brand'de yoksa "corolla-sedan" veya ilk "corolla-*" eşleşmesini bul.
 */
function resolveModel(brand, modelSlug) {
  if (!brand) return null;
  // Birebir eşleşme
  if (brand[modelSlug]) return brand[modelSlug];
  // Prefix eşleşme: modelSlug + "-" ile başlayan ilk key (sedan > hatchback > diğer)
  const prefixKeys = Object.keys(brand).filter(k => k.startsWith(modelSlug + '-'));
  if (prefixKeys.length === 0) return null;
  // Sedan, hatchback, suv sıralamasıyla tercih et
  const priority = ['-sedan', '-hatchback', '-suv', '-coupe', '-cross'];
  for (const suffix of priority) {
    const match = prefixKeys.find(k => k === modelSlug + suffix);
    if (match) return brand[match];
  }
  return brand[prefixKeys[0]];
}

/**
 * Bir marka-model kombinasyonu için tanımlı yılları döndürür.
 * @returns {number[]}
 */
function getYears(brandSlug, modelSlug) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return [];
  const model = resolveModel(brand, modelSlug);
  if (!model) return [];
  return model.years || [];
}

/**
 * Bir marka-model için benzersiz yakıt tiplerini döndürür.
 * @returns {string[]}  örn. ['benzin','dizel','hibrit']
 */
function getFuelTypes(brandSlug, modelSlug) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return [];
  const model = resolveModel(brand, modelSlug);
  if (!model || !model.variants) return [];
  const set = new Set(model.variants.map(v => v.fuel));
  return [...set];
}

/**
 * Yakıt tipine göre şanzıman çeşitlerini döndürür.
 * @param {string} [fuel]  İsteğe bağlı yakıt filtresi
 * @returns {string[]}
 */
function getTransmissions(brandSlug, modelSlug, fuel) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return [];
  const model = resolveModel(brand, modelSlug);
  if (!model || !model.variants) return [];
  let variants = model.variants;
  if (fuel) variants = variants.filter(v => v.fuel === fuel);
  const set = new Set(variants.map(v => v.transmission));
  return [...set];
}

/**
 * Yakıt + şanzıman filtresine göre motor seçeneklerini döndürür.
 * @returns {Array<{engine:string, hp:number, cc:number}>}
 */
function getEngines(brandSlug, modelSlug, fuel, transmission) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return [];
  const model = resolveModel(brand, modelSlug);
  if (!model || !model.variants) return [];
  let variants = model.variants;
  if (fuel) variants = variants.filter(v => v.fuel === fuel);
  if (transmission) variants = variants.filter(v => v.transmission === transmission);
  // Benzersiz motor isimleri
  const seen = new Set();
  const result = [];
  for (const v of variants) {
    if (!seen.has(v.engine)) {
      seen.add(v.engine);
      result.push({ engine: v.engine, hp: v.hp, cc: v.cc });
    }
  }
  return result;
}

/**
 * Tüm filtrelere göre paket listesini döndürür.
 * @returns {string[]}
 */
function getPackages(brandSlug, modelSlug, fuel, transmission, engine) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return [];
  const model = resolveModel(brand, modelSlug);
  if (!model || !model.variants) return [];
  let variants = model.variants;
  if (fuel) variants = variants.filter(v => v.fuel === fuel);
  if (transmission) variants = variants.filter(v => v.transmission === transmission);
  if (engine) variants = variants.filter(v => v.engine === engine);
  const set = new Set();
  for (const v of variants) {
    if (v.packages) v.packages.forEach(p => set.add(p));
  }
  return [...set];
}

/**
 * Tek istekte tüm cascade bilgisini döndürür.
 * Verilen filtre aşamasına kadar uygulama yapar.
 * @param {object} options  { fuel?, transmission?, engine? }
 * @returns {object|null}   { years, fuels, transmissions, engines, packages, bodyType }
 */
function getFullCascade(brandSlug, modelSlug, options = {}) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return null;
  const model = resolveModel(brand, modelSlug);
  if (!model) return null;

  const { fuel, transmission, engine } = options;

  const years = model.years || [];
  const bodyType = model.bodyType || '';

  // Yakıtlar — filtre yok
  const fuels = getFuelTypes(brandSlug, modelSlug);

  // Şanzımanlar — yakıt filtresi varsa uygula
  const transmissions = getTransmissions(brandSlug, modelSlug, fuel);

  // Motorlar — yakıt + şanzıman filtresi
  const engines = getEngines(brandSlug, modelSlug, fuel, transmission);

  // Paketler — yakıt + şanzıman + motor filtresi
  const packages = getPackages(brandSlug, modelSlug, fuel, transmission, engine);

  return { years, fuels, transmissions, engines, packages, bodyType };
}

/**
 * Bir marka-model için kasa tipini döndürür.
 * @returns {string}
 */
function getBodyType(brandSlug, modelSlug) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return '';
  const model = resolveModel(brand, modelSlug);
  if (!model) return '';
  return model.bodyType || '';
}

/**
 * Bir marka için belirli kasa tipine sahip modellerin slug listesini döndürür.
 * @returns {string[]}
 */
function getModelsByBodyType(brandSlug, bodyType) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return [];
  return Object.keys(brand).filter(k => brand[k].bodyType === bodyType);
}

/**
 * Belirli bir marka + model + yakıt kombinasyonunun geçerli olup olmadığını kontrol eder.
 * @returns {boolean}
 */
function hasVariantData(brandSlug, modelSlug) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return false;
  const model = resolveModel(brand, modelSlug);
  return model !== null && model.variants && model.variants.length > 0;
}

/**
 * Bir modelin belirli bir yılda üretilip üretilmediğini kontrol eder.
 * Eğer varyant verisinde yıl bilgisi yoksa true döndürür (bilinmiyor = engelleme).
 * @returns {boolean}
 */
function isModelAvailableInYear(brandSlug, modelSlug, year) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return true; // Varyant verisi yoksa engelleme
  const model = resolveModel(brand, modelSlug);
  if (!model) return true;
  const years = model.years || [];
  if (years.length === 0) return true; // Yıl bilgisi yoksa engelleme
  return years.includes(year);
}

/**
 * Bir markanın belirli bir yılda herhangi bir modelinin üretilip üretilmediğini kontrol eder.
 * @returns {boolean}
 */
function isBrandAvailableInYear(brandSlug, year) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return true; // Varyant verisi yoksa engelleme
  for (const key of Object.keys(brand)) {
    const model = brand[key];
    const years = model.years || [];
    if (years.length === 0) return true;
    if (years.includes(year)) return true;
  }
  return false;
}

/**
 * Belirli bir marka ve yıl için geçerli model slug'larını döndürür.
 * @param {string} brandSlug
 * @param {number} year
 * @param {string} [bodyType] İsteğe bağlı kasa tipi filtresi
 * @returns {string[]} Model slug'ları
 */
function getModelsForYear(brandSlug, year, bodyType) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return [];
  const result = [];
  for (const key of Object.keys(brand)) {
    const model = brand[key];
    if (bodyType && model.bodyType !== bodyType) continue;
    const years = model.years || [];
    if (years.length === 0 || years.includes(year)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = {
  VARIANTS,
  getYears,
  getFuelTypes,
  getTransmissions,
  getEngines,
  getPackages,
  getFullCascade,
  getBodyType,
  getModelsByBodyType,
  hasVariantData,
  isModelAvailableInYear,
  isBrandAvailableInYear,
  getModelsForYear,
};
