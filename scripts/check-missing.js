const { getDb } = require('../src/db/database');
const { VERIFIED_DATA } = require('../src/data/verified-model-data');

const db = getDb();
const models = db.prepare('SELECT b.slug as brand_slug, m.slug as model_slug, b.name as brand_name, m.name as model_name FROM models m JOIN brands b ON m.brand_id = b.id ORDER BY b.slug, m.slug').all();

const verifiedKeys = new Set(Object.keys(VERIFIED_DATA));
const missing = models.filter(m => !verifiedKeys.has(`${m.brand_slug}|${m.model_slug}`));

console.log('DB modelleri:', models.length);
console.log('Verified modeller:', verifiedKeys.size);
console.log('Eksik model sayısı:', missing.length);
console.log('');

if (missing.length > 0) {
  console.log('Eksik modeller:');
  const byBrand = {};
  missing.forEach(m => {
    if (!byBrand[m.brand_slug]) byBrand[m.brand_slug] = [];
    byBrand[m.brand_slug].push(m.model_slug);
  });
  Object.entries(byBrand).forEach(([brand, models]) => {
    console.log(`  ${brand} (${models.length}): ${models.join(', ')}`);
  });
}
