/**
 * Bu script tüm .ejs sayfa dosyalarından:
 * 1. Hardcoded navbar (header) bölümlerini siler
 * 2. Hardcoded footer bölümlerini siler
 * 3. Dış wrapper div'leri temizler
 */
const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, '..', 'src', 'views', 'pages');
const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.ejs'));

files.forEach(file => {
  const filePath = path.join(viewsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalLength = content.length;

  // 1. Dıştaki wrapper div'leri sil (layout'ta zaten var)
  // Başındaki <div class="relative flex h-auto min-h-screen..."> ve <div class="layout-container...">
  content = content.replace(/^<div class="relative flex h-auto min-h-screen[^"]*">\s*\n\s*<div class="layout-container[^"]*">\s*\n/m, '');
  // Sonundaki kapanış </div></div>
  content = content.replace(/\s*<\/div>\s*<\/div>\s*$/, '');

  // 2. Hardcoded header (navbar) bloğunu sil
  // Header genellikle <header class="flex items-center..."> ile başlar ve </header> ile biter
  content = content.replace(/<!-- Top Navigation -->\s*/g, '');
  content = content.replace(/<header class="flex items-center justify-between[\s\S]*?<\/header>\s*/m, '');

  // 3. Hardcoded footer bloğunu sil
  // Footer genellikle <footer class="bg-white border-t..."> ile başlar
  content = content.replace(/<footer class="bg-white border-t[\s\S]*?<\/footer>\s*/m, '');
  // Veya farklı bir footer yapısı olabilir
  content = content.replace(/<footer class="bg-slate[\s\S]*?<\/footer>\s*/m, '');

  // 4. Bazı sayfalarda admin footer farklı olabilir
  content = content.replace(/<footer class="bg-charcoal[\s\S]*?<\/footer>\s*/m, '');

  // Baştaki ve sondaki boşlukları temizle
  content = content.trim();

  if (content.length !== originalLength) {
    fs.writeFileSync(filePath, content + '\n', 'utf-8');
    console.log(`✅ ${file} - temizlendi (${originalLength} → ${content.length} byte)`);
  } else {
    console.log(`⚪ ${file} - değişiklik yok`);
  }
});

console.log('\n✅ Tüm dosyalar işlendi!');
