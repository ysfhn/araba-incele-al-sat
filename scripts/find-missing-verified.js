const { getDb } = require('../src/db/database');
const v = require('../src/data/verified-model-data');

(async () => {
  const db = getDb();
  const all = await db.prepare('SELECT b.slug as brand_slug, m.slug as model_slug, m.name as model_name, b.name as brand_name FROM models m JOIN brands b ON m.brand_id = b.id ORDER BY b.slug, m.slug').all();
  
  let missing = [];
  let found = [];
  all.forEach(m => {
    const d = v.getVerifiedData(m.brand_slug, m.model_slug);
    if (!d) {
      missing.push(m);
    } else {
      found.push(m);
    }
  });
  
  console.log('Toplam model:', all.length);
  console.log('Verified data OLAN:', found.length);
  console.log('Verified data OLMAYAN:', missing.length);
  console.log('\n--- EKSİK MODELLER (marka bazında) ---');
  
  const byBrand = {};
  missing.forEach(m => {
    if (!byBrand[m.brand_slug]) byBrand[m.brand_slug] = [];
    byBrand[m.brand_slug].push(m.model_slug);
  });
  
  Object.keys(byBrand).sort().forEach(b => {
    console.log(`${b} (${byBrand[b].length}): ${byBrand[b].join(', ')}`);
  });
  
  process.exit(0);
})();
