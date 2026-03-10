/**
 * Bu script tüm .ejs dosyalarındaki HTML wrapper'ları (<!DOCTYPE>, <html>, <head>, <body> vs.)
 * temizler ve sadece <body> içeriğini bırakır.
 * express-ejs-layouts ile çalışması için gerekli.
 */
const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, '..', 'src', 'views', 'pages');

const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.ejs'));

files.forEach(file => {
  const filePath = path.join(viewsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // <body...> ile </body> arasındaki içeriği çıkar
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) {
    let bodyContent = bodyMatch[1].trim();
    
    // Sondaki <script src="/js/app.js"></script> varsa temizle (layout'ta var)
    bodyContent = bodyContent.replace(/<script\s+src="\/js\/app\.js"><\/script>\s*$/i, '').trim();
    
    fs.writeFileSync(filePath, bodyContent, 'utf-8');
    console.log(`✅ ${file} - body içeriği çıkarıldı`);
  } else {
    console.log(`⚠️  ${file} - <body> tag bulunamadı, atlanıyor`);
  }
});

console.log('\n✅ Tüm dosyalar işlendi!');
