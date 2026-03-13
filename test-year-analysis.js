const v = require('./src/data/vehicle-variants');

// Analiz 1: Tüm markalarda yıl verisi durumu
const brands = Object.keys(v.VARIANTS);
let brandsAllHaveYears = 0;
brands.forEach(b => {
  const brd = v.VARIANTS[b];
  const keys = Object.keys(brd);
  const withYears = keys.filter(k => (brd[k].years || []).length > 0);
  if (withYears.length === keys.length) brandsAllHaveYears++;
});
console.log('Tüm modellerde yıl verisi olan markalar:', brandsAllHaveYears + '/' + brands.length);

// Analiz 2: Büyük markaların minimum yılları
['bmw','mercedes-benz','audi','volkswagen','ford','fiat','renault','toyota','honda','hyundai','kia','opel','peugeot','nissan','volvo'].forEach(b => {
  const brd = v.VARIANTS[b];
  if (!brd) { console.log(b + ': VARYANT YOK'); return; }
  let minY = 9999;
  Object.keys(brd).forEach(k => {
    const yrs = brd[k].years || [];
    if (yrs.length > 0 && yrs[0] < minY) minY = yrs[0];
  });
  console.log(b + ' en eski model yılı:', minY < 9999 ? minY : 'YOK');
});

// Analiz 3: DB'deki marka sayısı vs varyant verisindeki
const { getDb, initializeDatabase } = require('./src/db/database');
initializeDatabase().then(() => {
  const d = getDb();
  const dbBrands = d.prepare('SELECT slug FROM brands').all();
  const dbSlugs = dbBrands.map(b => b.slug);
  const variantSlugs = Object.keys(v.VARIANTS);
  const inDbNotVariant = dbSlugs.filter(s => !variantSlugs.includes(s));
  const inVariantNotDb = variantSlugs.filter(s => !dbSlugs.includes(s));
  console.log('\nDB markaları:', dbSlugs.length);
  console.log('Varyant markaları:', variantSlugs.length);
  console.log('DB\'de olup varyant verisinde olmayan:', inDbNotVariant.length, inDbNotVariant.length > 0 ? '→ ' + inDbNotVariant.slice(0,5).join(', ') : '');
  console.log('Varyant verisinde olup DB\'de olmayan:', inVariantNotDb.length);
  
  // Analiz 4: Wizard'da yıl seçiminde 1990-2004 arası sorun
  // brands-by-body filtresinde: DB'den kasaya göre markalar çekilir, sonra varyant yılı kontrolü
  // DB'de 77 marka ama varyant verisinde 1990 öncesi yıl yok
  const sedanBrandsDb = d.prepare("SELECT DISTINCT b.slug FROM brands b INNER JOIN models m ON m.brand_id = b.id WHERE m.body_type = 'sedan'").all();
  console.log('\nDB sedan markaları:', sedanBrandsDb.length);
  
  let sedan1990 = sedanBrandsDb.filter(b => v.isBrandAvailableInYear(b.slug, 1990));
  let sedan2005 = sedanBrandsDb.filter(b => v.isBrandAvailableInYear(b.slug, 2005));
  console.log('Sedan + yıl=1990:', sedan1990.length, 'marka');
  console.log('Sedan + yıl=2005:', sedan2005.length, 'marka');
  
  process.exit(0);
});
