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
 * Model seviyesinde yıl verisi güvenilirdir — modelin ilk üretim yılından
 * önce veya son üretim yılından sonra false döndürür.
 * @returns {boolean}
 */
function isModelAvailableInYear(brandSlug, modelSlug, year) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return true;
  const model = resolveModel(brand, modelSlug);
  if (!model) return true;
  const years = model.years || [];
  if (years.length === 0) return true;
  // Model seviyesinde yıl verisi kesindir: ilk yıldan önce = yok, son yıldan sonra = yok
  if (year < years[0] || year > years[years.length - 1]) return false;
  return years.includes(year);
}

/**
 * Markaların Türkiye'de aktif satışa başladığı yaklaşık yıllar.
 * Sadece varyant verisinin kapsam alanı dışındaki markalar için kullanılır.
 * Köklü markalar (BMW, Audi vb.) zaten veri kapsamında olduğu için listelenmez.
 * Bu map sayesinde: Tesla 1990'da mevcut değildi (2014+), Fiat 1960'tan beri var gibi
 * kararlar verilebilir.
 */
const BRAND_TURKEY_SINCE = {
  // Köklü markalar — varyant verisi kapsamı dışı yıllar için izin verilir
  'alfa-romeo': 1972, 'audi': 1980, 'bmw': 1975, 'chevrolet': 1990, 'citroen': 1975,
  'dacia': 2005, 'fiat': 1968, 'ford': 1960, 'honda': 1992, 'hyundai': 1997,
  'jeep': 2000, 'kia': 2000, 'lada': 1975, 'mazda': 1995, 'mercedes-benz': 1968,
  'mitsubishi': 1990, 'nissan': 1990, 'opel': 1975, 'peugeot': 1968, 'renault': 1968,
  'seat': 2000, 'skoda': 2000, 'subaru': 1995, 'suzuki': 1995, 'toyota': 1990,
  'volkswagen': 1968, 'volvo': 1980, 'porsche': 1990, 'land-rover': 1995,
  'mini': 2002, 'ferrari': 1990, 'lamborghini': 1995, 'mclaren': 2010,
  'maserati': 2005, 'jaguar': 1990, 'ssangyong': 2005, 'isuzu': 1990,
  'iveco': 1985, 'lancia': 1975, 'infiniti': 2010, 'lincoln': 2018,
  // Yeni markalar — kesin engelleme uygulanır
  'tesla': 2014, 'togg': 2023, 'byd': 2022, 'changan': 2020, 'chery': 2020,
  'cupra': 2020, 'dfsk': 2019, 'gac': 2022, 'geely': 2022, 'genesis': 2019,
  'gwm': 2021, 'jac': 2020, 'lotus': 2022, 'lucid': 2023, 'maxus': 2019,
  'mg': 2020, 'omoda': 2023, 'polestar': 2021, 'proton': 2022, 'ram': 2019,
  'rivian': 2023, 'tata': 2019, 'wey': 2022,
};

/**
 * Bir markanın belirli bir yılda herhangi bir modelinin üretilip üretilmediğini kontrol eder.
 * 
 * 1. Varyant verisinde direkt eşleşme → true
 * 2. Seçilen yıl, markanın en eski varyant yılından eskiyse:
 *    a. BRAND_TURKEY_SINCE map'i varsa → markanın Türkiye'ye giriş yılı ≤ seçilen yıl → true, değilse false
 *    b. Map'te yoksa → true (bilinmeyen marka, engelleme)
 * 3. Varyant kapsamında ama hiçbir modelde eşleşme yok → false
 * @returns {boolean}
 */
function isBrandAvailableInYear(brandSlug, year) {
  const brand = VARIANTS[brandSlug];
  if (!brand) return true;
  let oldestYearInBrand = Infinity;
  for (const key of Object.keys(brand)) {
    const model = brand[key];
    const years = model.years || [];
    if (years.length === 0) return true;
    if (years[0] < oldestYearInBrand) oldestYearInBrand = years[0];
    if (years.includes(year)) return true;
  }
  // Seçilen yıl, bu markanın varyant verisindeki en eski yıldan eskiyse → kapsam dışı
  if (year < oldestYearInBrand) {
    // Markanın Türkiye'ye giriş yılını kontrol et
    const turkeyYear = BRAND_TURKEY_SINCE[brandSlug];
    if (turkeyYear) {
      return year >= turkeyYear;
    }
    // Bilinmeyen marka → izin ver (engelleme)
    return true;
  }
  return false;
}

/**
 * Belirli bir marka ve yıl için geçerli model slug'larını döndürür.
 * Model seviyesinde: modelin years dizisinde yıl varsa VEYA years boşsa dahil et.
 * Kapsam dışı yıllar (year < model.years[0]) dahil EDİLMEZ — model o yılda yoktu.
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
    // year < years[0] veya year > years[years.length-1] → dahil etme (model yoktu)
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
