const v = require('./src/data/vehicle-variants');
const { getDb } = require('./src/db/database');

const brands = Object.keys(v.VEHICLE_VARIANTS);
console.log('Varyant veritabanindaki marka sayisi:', brands.length);

let totalVModels = 0;
brands.forEach(b => { totalVModels += Object.keys(v.VEHICLE_VARIANTS[b]).length; });
console.log('Varyant veritabanindaki model sayisi:', totalVModels);
console.log('');

(async () => {
  const db = getDb();
  const dbBrands = await db.prepare('SELECT slug, name FROM brands ORDER BY slug').all();
  const dbModels = await db.prepare('SELECT b.slug as brand_slug, b.name as brand_name, m.slug as model_slug, m.name as model_name FROM models m JOIN brands b ON m.brand_id = b.id ORDER BY b.slug, m.slug').all();
  console.log('SQLite veritabanindaki marka sayisi:', dbBrands.length);
  console.log('SQLite veritabanindaki model sayisi:', dbModels.length);
  console.log('');

  // Eksik markalar
  const variantBrands = new Set(brands);
  const missingBrands = dbBrands.filter(b => { return !variantBrands.has(b.slug); });
  console.log('=== EKSIK MARKALAR (' + missingBrands.length + ') ===');
  missingBrands.forEach(b => console.log('  -', b.name, '(' + b.slug + ')'));
  console.log('');

  // Mevcut markalardaki eksik modeller
  let missingModels = [];
  let coveredModels = 0;
  let missingFromMissingBrands = 0;
  dbModels.forEach(m => {
    if (variantBrands.has(m.brand_slug)) {
      const brandData = v.VEHICLE_VARIANTS[m.brand_slug];
      if (brandData && brandData[m.model_slug]) {
        coveredModels++;
      } else {
        missingModels.push({ brand: m.brand_name, brandSlug: m.brand_slug, model: m.model_name, modelSlug: m.model_slug });
      }
    } else {
      missingFromMissingBrands++;
    }
  });

  console.log('=== KAPSAM OZETI ===');
  console.log('Kapsanan modeller:', coveredModels, '/', dbModels.length);
  console.log('Eksik marka nedeniyle kapsamda olmayan:', missingFromMissingBrands);
  console.log('Marka var ama model eksik:', missingModels.length);
  console.log('');

  if (missingModels.length > 0) {
    console.log('=== MARKA VAR AMA MODEL EKSIK (' + missingModels.length + ') ===');
    // Grup grup göster
    let currentBrand = '';
    missingModels.forEach(m => {
      if (m.brand !== currentBrand) {
        currentBrand = m.brand;
        console.log('\n  ' + m.brand + ':');
      }
      console.log('    -', m.model, '(' + m.modelSlug + ')');
    });
  }

  console.log('\n=== YUZDE KAPSAM ===');
  console.log('Marka kapsami:', ((dbBrands.length - missingBrands.length) / dbBrands.length * 100).toFixed(1) + '%');
  console.log('Model kapsami:', (coveredModels / dbModels.length * 100).toFixed(1) + '%');

  process.exit(0);
})();
