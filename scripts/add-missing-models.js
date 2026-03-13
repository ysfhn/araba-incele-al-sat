#!/usr/bin/env node
/**
 * DB'de eksik olan modelleri ekler (CSV'de eşleşme bulunan ama DB'de kaydı olmayan modeller)
 */
require('dotenv').config();
const { getDb } = require('../src/db/database');

const MODELS_TO_ADD = [
  ['audi', 'a3', 'A3', 'hatchback'],
  ['audi', 'tt', 'TT', 'coupe'],
  ['audi', 'a5', 'A5', 'sedan'],
  ['audi', 'a7', 'A7', 'sedan'],
  ['audi', 'rs4', 'RS4', 'station_wagon'],
  ['audi', 'rs6', 'RS6', 'station_wagon'],
  ['audi', 'e-tron', 'e-tron', 'suv'],
  ['audi', 'e-tron-sportback', 'e-tron Sportback', 'suv'],
  ['citroen', 'jumpy', 'Jumpy', 'minivan'],
  ['citroen', 'nemo', 'Nemo', 'minivan'],
  ['citroen', 'c5', 'C5', 'sedan'],
  ['citroen', 'ds3', 'DS3', 'hatchback'],
  ['citroen', 'ds4', 'DS4', 'hatchback'],
  ['citroen', 'ds5', 'DS5', 'sedan'],
  ['ford', 'transit', 'Transit', 'minivan'],
  ['ford', 'e-transit', 'E-Transit', 'minivan'],
  ['honda', 'civic', 'Civic', 'hatchback'],
  ['mazda', 'mazda3', 'Mazda3', 'hatchback'],
  ['nissan', 'primastar', 'Primastar', 'minivan'],
  ['opel', 'combo', 'Combo', 'minivan'],
  ['opel', 'zafira', 'Zafira', 'minivan'],
  ['opel', 'meriva', 'Meriva', 'minivan'],
  ['opel', 'cascada', 'Cascada', 'cabrio'],
  ['opel', 'vivaro', 'Vivaro', 'minivan'],
  ['opel', 'movano', 'Movano', 'minivan'],
  ['peugeot', 'expert', 'Expert', 'minivan'],
  ['peugeot', 'e-308', 'e-308', 'hatchback'],
  ['porsche', '911', '911', 'coupe'],
  ['renault', 'express', 'Express', 'station_wagon'],
  ['renault', 'laguna', 'Laguna', 'sedan'],
  ['skoda', 'enyaq', 'Enyaq', 'suv'],
  ['volvo', 'c40', 'C40', 'suv'],
  ['land-rover', 'defender', 'Defender', 'suv'],
  ['mini', 'cooper', 'Cooper', 'hatchback'],
  ['kia', 'venga', 'Venga', 'minivan'],
];

(async () => {
  const db = getDb();
  let added = 0, exists = 0, noMarka = 0;

  for (const [brandSlug, modelSlug, modelName, bodyType] of MODELS_TO_ADD) {
    const brand = await db.prepare('SELECT id FROM brands WHERE slug = ?').get(brandSlug);
    if (!brand) {
      console.log('  SKIP marka yok:', brandSlug);
      noMarka++;
      continue;
    }

    const existing = await db.prepare('SELECT id FROM models WHERE slug = ? AND brand_id = ?').get(modelSlug, brand.id);
    if (existing) {
      exists++;
      continue;
    }

    await db.prepare('INSERT INTO models (brand_id, name, slug, body_type) VALUES (?, ?, ?, ?)').run(brand.id, modelName, modelSlug, bodyType);
    added++;
    console.log('  + eklendi:', brandSlug + '/' + modelSlug, '(' + bodyType + ')');
  }

  console.log('\nSonuc:', added, 'eklendi,', exists, 'zaten vardi,', noMarka, 'marka yok');
  const totalModels = await db.prepare('SELECT COUNT(*) as c FROM models').get();
  console.log('DB toplam model sayisi:', totalModels.c);
})();
