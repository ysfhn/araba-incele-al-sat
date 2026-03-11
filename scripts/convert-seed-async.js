/**
 * Seed dosyasını async'e dönüştürme
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'db', 'seed.js');
let content = fs.readFileSync(filePath, 'utf-8');
const original = content;

// 1) db.exec(...) → await db.exec(...)
content = content.replace(/(?<!await\s)(db\.exec\()/g, 'await $1');

// 2) Inline db.prepare('...').get/run/all(...).prop → (await ...).prop
// Handles both single-quote and backtick strings
content = content.replace(
  /(db\.prepare\((?:[^)]+|\`[^`]*\`)\)\.(get|all|run)\([^)]*\))(\.[\w]+)/g,
  '(await $1)$3'
);

// 3) Standalone db.prepare('...').run/get/all(...) → await ...
content = content.replace(
  /(?<!\(await\s)(?<!await\s)(db\.prepare\((?:[^)]+|\`[^`]*\`)\)\.(get|all|run)\([^)]*\))(?!\.)/g,
  'await $1'
);

// 4) Stored statement .run/.get calls
const stmtNames = [
  'insertUser', 'insertBrand', 'insertModel', 'insertBusiness',
  'insertListing', 'insertImage', 'insertFeature', 'insertCategory',
  'insertTopic', 'insertReply', 'insertReview', 'insertAppointment',
  'insertQuote', 'insertNotification', 'insertHub', 'insertModeration',
  'insertFavorite', 'insertMessage'
];

for (const name of stmtNames) {
  const re = new RegExp(`(?<!await\\s)\\b${name}\\.(run|get|all)\\(`, 'g');
  content = content.replace(re, `await ${name}.$1(`);
}

// 5) getBrandId fonksiyonu async olmalı
// const getBrandId = (slug) => db.prepare('...').get(slug).id;
// → const getBrandId = async (slug) => (await db.prepare('...').get(slug)).id;
content = content.replace(
  /const getBrandId = \(slug\) => /,
  'const getBrandId = async (slug) => '
);

// 6) getBrandId çağrıları await olmalı
content = content.replace(
  /(?<!await\s)getBrandId\(/g,
  'await getBrandId('
);

if (content !== original) {
  fs.writeFileSync(filePath, content);
  console.log('✅ seed.js async dönüşümü tamamlandı');
} else {
  console.log('⏭️  seed.js — değişiklik yok');
}
