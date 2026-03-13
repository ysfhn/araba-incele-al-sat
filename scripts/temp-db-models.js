require('dotenv').config();
const { getDb } = require('../src/db/database');
(async () => {
  const db = getDb();
  const models = await db.prepare(`
    SELECT m.id, m.name, m.slug, m.body_type, b.slug as brand_slug, b.name as brand_name 
    FROM models m JOIN brands b ON m.brand_id = b.id ORDER BY b.slug, m.slug
  `).all();
  console.log('Toplam DB modeli:', models.length);
  const byBrand = {};
  for (const m of models) {
    if (!byBrand[m.brand_slug]) byBrand[m.brand_slug] = [];
    byBrand[m.brand_slug].push(`${m.slug} | ${m.name} | ${m.body_type || '-'}`);
  }
  const show = ['bmw', 'toyota', 'fiat', 'mercedes-benz', 'volkswagen', 'hyundai'];
  for (const brand of show) {
    if (byBrand[brand]) {
      console.log(`\n${brand} (${byBrand[brand].length}):`);
      byBrand[brand].forEach(m => console.log(`  ${m}`));
    }
  }
})();
