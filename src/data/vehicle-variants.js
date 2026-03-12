/**
 * Araç Varyant Veritabanı — Birleştirici Index
 * 4 parça dosyayı tek VEHICLE_VARIANTS objesi altında toplar.
 *
 * Yapı:
 *   VEHICLE_VARIANTS[markaSluq][modelSlug] = {
 *     years: [2020, 2021, ...],
 *     variants: [
 *       { fuel, transmission, engine, hp, cc, packages: [...] }
 *     ]
 *   }
 */

const VARIANTS_PART1 = require('./vehicle-variants-1');
const VARIANTS_PART2 = require('./vehicle-variants-2');
const VARIANTS_PART3 = require('./vehicle-variants-3');
const VARIANTS_PART4 = require('./vehicle-variants-4');

const VEHICLE_VARIANTS = Object.assign(
  {},
  VARIANTS_PART1,
  VARIANTS_PART2,
  VARIANTS_PART3,
  VARIANTS_PART4
);

// ── Helper: belirli marka-model-yıl için geçerli varyantları filtrele ──
function getVariantsForModel(brandSlug, modelSlug, year) {
  const brand = VEHICLE_VARIANTS[brandSlug];
  if (!brand) return null;
  const model = brand[modelSlug];
  if (!model) return null;

  // Yıl filtresi (isteğe bağlı)
  if (year) {
    const y = parseInt(year);
    if (!model.years.includes(y)) return null;
  }

  return model;
}

// ── Helper: Marka-model için yakıt tiplerini getir ──
function getFuelTypes(brandSlug, modelSlug) {
  const model = getVariantsForModel(brandSlug, modelSlug);
  if (!model) return [];
  const fuels = [...new Set(model.variants.map(v => v.fuel))];
  return fuels;
}

// ── Helper: Marka-model-yakıt için şanzıman tiplerini getir ──
function getTransmissions(brandSlug, modelSlug, fuel) {
  const model = getVariantsForModel(brandSlug, modelSlug);
  if (!model) return [];
  const filtered = fuel ? model.variants.filter(v => v.fuel === fuel) : model.variants;
  return [...new Set(filtered.map(v => v.transmission))];
}

// ── Helper: Marka-model-yakıt-şanzıman için motorları getir ──
function getEngines(brandSlug, modelSlug, fuel, transmission) {
  const model = getVariantsForModel(brandSlug, modelSlug);
  if (!model) return [];
  let filtered = model.variants;
  if (fuel) filtered = filtered.filter(v => v.fuel === fuel);
  if (transmission) filtered = filtered.filter(v => v.transmission === transmission);
  // Unique engines
  const engineMap = {};
  filtered.forEach(v => {
    if (!engineMap[v.engine]) {
      engineMap[v.engine] = { ad: v.engine, hp: v.hp, cc: v.cc };
    }
  });
  return Object.values(engineMap);
}

// ── Helper: Tüm filtreler sonrası paketleri getir ──
function getPackages(brandSlug, modelSlug, fuel, transmission, engine) {
  const model = getVariantsForModel(brandSlug, modelSlug);
  if (!model) return [];
  let filtered = model.variants;
  if (fuel) filtered = filtered.filter(v => v.fuel === fuel);
  if (transmission) filtered = filtered.filter(v => v.transmission === transmission);
  if (engine) filtered = filtered.filter(v => v.engine === engine);
  const pkgs = new Set();
  filtered.forEach(v => v.packages.forEach(p => pkgs.add(p)));
  return [...pkgs];
}

// ── Helper: Marka-model için yılları getir ──
function getYears(brandSlug, modelSlug) {
  const model = getVariantsForModel(brandSlug, modelSlug);
  if (!model) return [];
  return model.years.slice().sort((a, b) => b - a); // Yeniden eskiye
}

// ── Helper: Tam cascade bilgisi (tek seferde) ──
function getFullCascade(brandSlug, modelSlug, opts = {}) {
  const model = getVariantsForModel(brandSlug, modelSlug);
  if (!model) return null;

  const { fuel, transmission, engine } = opts;

  let filtered = model.variants;
  if (fuel) filtered = filtered.filter(v => v.fuel === fuel);
  if (transmission) filtered = filtered.filter(v => v.transmission === transmission);
  if (engine) filtered = filtered.filter(v => v.engine === engine);

  const fuels = [...new Set(model.variants.map(v => v.fuel))];
  const transmissions = [...new Set(filtered.map(v => v.transmission))];

  const engineMap = {};
  filtered.forEach(v => {
    if (!engineMap[v.engine]) engineMap[v.engine] = { ad: v.engine, hp: v.hp, cc: v.cc };
  });

  const pkgs = new Set();
  filtered.forEach(v => v.packages.forEach(p => pkgs.add(p)));

  return {
    years: model.years.slice().sort((a, b) => b - a),
    fuels,
    transmissions,
    engines: Object.values(engineMap),
    packages: [...pkgs]
  };
}

module.exports = {
  VEHICLE_VARIANTS,
  getVariantsForModel,
  getFuelTypes,
  getTransmissions,
  getEngines,
  getPackages,
  getYears,
  getFullCascade
};
