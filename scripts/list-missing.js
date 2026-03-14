const { getDb } = require('../src/db/database');
const v = require('../src/data/verified-model-data');

(async () => {
  const db = getDb();
  const all = await db.prepare('SELECT b.slug as bs, m.slug as ms, m.name as mn, b.name as bn, m.body_type as bt FROM models m JOIN brands b ON m.brand_id = b.id ORDER BY b.slug, m.slug').all();
  
  const missing = {};
  const found = {};
  all.forEach(m => {
    const d = v.getVerifiedData(m.bs, m.ms);
    if (d) {
      if (!found[m.bs]) found[m.bs] = 0;
      found[m.bs]++;
    } else {
      if (!missing[m.bs]) missing[m.bs] = [];
      missing[m.bs].push(m.ms);
    }
  });
  
  console.log('TOPLAM:', all.length, '| Verified:', Object.values(found).reduce((a,b) => a+b, 0), '| Eksik:', Object.values(missing).reduce((a,b) => a+b.length, 0));
  console.log('\n--- EKSİK MODELLER ---');
  Object.keys(missing).sort().forEach(b => {
    console.log(b + ': ' + missing[b].join(', '));
  });
  
  process.exit(0);
})();
