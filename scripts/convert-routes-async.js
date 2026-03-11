/**
 * Route Dosyalarını Async'e Dönüştürme Scripti
 * 
 * Strateji: Tüm dosya içeriğini işle, multi-line pattern'ları da yakala
 * 
 * Kullanım: node scripts/convert-routes-async.js
 */

const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '..', 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.js'));

let totalChanges = 0;

function convertFile(content) {
  // ═══════════════════════════════════════════════
  // AŞAMA 1: Route handler'ları async yap
  // ═══════════════════════════════════════════════
  
  // Arrow: (req, res) => { ve (req, res, next) => {
  content = content.replace(
    /(?<!async\s)\(req,\s*res(?:,\s*next)?\)\s*=>\s*\{/g,
    (match) => 'async ' + match
  );

  // function(req, res) {
  content = content.replace(
    /(?<!async\s)function\s*\(req,\s*res(?:,\s*next)?\)\s*\{/g,
    (match) => 'async ' + match
  );

  // ═══════════════════════════════════════════════
  // AŞAMA 2: db.prepare() zincirlerini await'le
  // ═══════════════════════════════════════════════
  
  // Strateji: Her db.prepare( başlangıcını bul,
  // ardından gelen .get/.all/.run çağrısını bul,
  // ve sonra property erişimi var mı bak.
  
  // Bu fonksiyon bir pozisyondan başlayarak eşleşen kapanış parantezini bulur
  function findMatchingParen(str, startIdx) {
    let depth = 0;
    for (let i = startIdx; i < str.length; i++) {
      if (str[i] === '(') depth++;
      else if (str[i] === ')') {
        depth--;
        if (depth === 0) return i;
      }
      // String içindeki parantezleri atla
      if (str[i] === "'" || str[i] === '"' || str[i] === '`') {
        const quote = str[i];
        i++;
        while (i < str.length && str[i] !== quote) {
          if (str[i] === '\\') i++; // escape
          i++;
        }
      }
    }
    return -1;
  }

  // db.prepare(...) çağrılarını bul ve await ekle
  let result = '';
  let i = 0;
  
  while (i < content.length) {
    // db.prepare( başlangıcı bul
    const prepIdx = content.indexOf('db.prepare(', i);
    if (prepIdx === -1) {
      result += content.slice(i);
      break;
    }

    // Öncesinde await var mı kontrol et
    const before = content.slice(Math.max(0, prepIdx - 20), prepIdx);
    if (before.match(/await\s+$/) || before.match(/\(await\s+$/)) {
      result += content.slice(i, prepIdx + 11); // db.prepare( dahil
      i = prepIdx + 11;
      continue;
    }

    // prepare() parantezini bul
    const prepParenStart = prepIdx + 10; // 'db.prepare'.length = 10, sonra (
    const prepParenEnd = findMatchingParen(content, prepParenStart);
    if (prepParenEnd === -1) {
      result += content.slice(i, prepIdx + 11);
      i = prepIdx + 11;
      continue;
    }

    // prepare() sonrasında whitespace atla ve .get/.all/.run ara
    let afterPrepare = prepParenEnd + 1;
    // Whitespace ve newline'ları atla
    while (afterPrepare < content.length && /\s/.test(content[afterPrepare])) {
      afterPrepare++;
    }

    if (content[afterPrepare] !== '.') {
      // .method yok — sadece prepare() çağrısı (statement objesi oluşturma)
      // Bu durumda prepare sync, ama sonraki .run/.get/.all async olacak
      result += content.slice(i, prepParenEnd + 1);
      i = prepParenEnd + 1;
      continue;
    }

    // .method adını al
    const methodMatch = content.slice(afterPrepare).match(/^\.(get|all|run)\s*\(/);
    if (!methodMatch) {
      result += content.slice(i, prepParenEnd + 1);
      i = prepParenEnd + 1;
      continue;
    }

    const methodName = methodMatch[1];
    const methodCallStart = afterPrepare + 1 + methodName.length; // '.' + method adı sonrası
    // whitespace atla
    let methodParenStart = methodCallStart;
    while (methodParenStart < content.length && content[methodParenStart] !== '(') {
      methodParenStart++;
    }
    
    const methodParenEnd = findMatchingParen(content, methodParenStart);
    if (methodParenEnd === -1) {
      result += content.slice(i, prepParenEnd + 1);
      i = prepParenEnd + 1;
      continue;
    }

    // method() sonrasında property erişimi var mı? (.c, .id, .lastInsertRowid vb.)
    let afterMethod = methodParenEnd + 1;
    // Whitespace (ama newline değil) atla
    const restAfterMethod = content.slice(afterMethod);
    const propMatch = restAfterMethod.match(/^(\.(\w+))/);

    const dbCallFull = content.slice(prepIdx, methodParenEnd + 1); // db.prepare(...).get(...)

    if (propMatch) {
      // Zincirleme erişim: (await db.prepare(...).get(...)).c
      const propText = propMatch[1]; // .c
      result += content.slice(i, prepIdx) + '(await ' + dbCallFull + ')' + propText;
      i = methodParenEnd + 1 + propText.length;
    } else {
      // Basit çağrı: await db.prepare(...).get(...)
      result += content.slice(i, prepIdx) + 'await ' + dbCallFull;
      i = methodParenEnd + 1;
    }
  }

  content = result;

  // ═══════════════════════════════════════════════
  // AŞAMA 3: Stored statement objelerinin method çağrılarını await'le
  // ═══════════════════════════════════════════════
  // Pattern: const stmt = db.prepare('...'); ... stmt.run(...); 
  // stmt.run() → await stmt.run()
  // Bunları bulmak için: değişken adını bilmek lazım
  
  // Stored statement'ları bul
  const stmtNames = [];
  const stmtRegex = /(?:const|let|var)\s+(\w+)\s*=\s*db\.prepare\(/g;
  let stmtMatch;
  while ((stmtMatch = stmtRegex.exec(content)) !== null) {
    // Bu, db.prepare().get/all/run() zaten olan çağrılar da yakalıyor
    // Sadece .get/.all/.run olmayan (yani statement olarak saklanan) olanları al
    const varName = stmtMatch[1];
    const afterAssign = content.slice(stmtMatch.index + stmtMatch[0].length - 1); // ( dahil
    const endParen = findMatchingParen(afterAssign, 0);
    if (endParen === -1) continue;
    
    const afterPrepClose = afterAssign.slice(endParen + 1).trimStart();
    // Eğer hemen .get/.all/.run geliyorsa bu stored statement değil
    if (afterPrepClose.match(/^\.(get|all|run)/)) continue;
    
    stmtNames.push(varName);
  }

  // Her stored statement için .run/.get/.all çağrılarına await ekle
  for (const name of stmtNames) {
    // name.run(...) → await name.run(...)
    // name.get(...) → await name.get(...)
    // name.all(...) → await name.all(...)
    const callRegex = new RegExp(`(?<!await\\s)\\b${name}\\.(run|get|all)\\(`, 'g');
    content = content.replace(callRegex, `await ${name}.$1(`);
  }

  // ═══════════════════════════════════════════════
  // AŞAMA 4: db.exec() çağrılarını await'le
  // ═══════════════════════════════════════════════
  content = content.replace(
    /(?<!await\s)(db\.exec\()/g,
    'await $1'
  );

  return content;
}

files.forEach(file => {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  content = convertFile(content);

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    const awaitCount = (content.match(/await\s+db\./g) || []).length + 
                       (content.match(/\(await\s+db\./g) || []).length;
    const asyncCount = (content.match(/async\s+\(/g) || []).length + 
                       (content.match(/async\s+function/g) || []).length;
    console.log(`✅ ${file} — ${asyncCount} async handler, ${awaitCount} await çağrısı`);
    totalChanges++;
  } else {
    console.log(`⏭️  ${file} — değişiklik yok`);
  }
});

console.log(`\n🎯 Toplam ${totalChanges} dosya güncellendi`);

// ═══════════════════════════════════════════════
// Doğrulama: await'siz db çağrıları kaldı mı?
// ═══════════════════════════════════════════════
console.log('\n🔍 Doğrulama...');
let issues = 0;
files.forEach(file => {
  const filePath = path.join(routesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    // db.prepare ile başlayan ama await olmayan satırları bul
    if (line.includes('db.prepare(') && !line.includes('await') && !line.includes('const ') && !line.includes('let ') && !line.includes('var ')) {
      // Stored statement tanımı olabilir, onu atla
      if (!line.match(/=\s*db\.prepare\(/)) {
        console.log(`  ⚠️  ${file}:${idx + 1} — ${line.trim().substring(0, 80)}`);
        issues++;
      }
    }
  });
});
if (issues === 0) {
  console.log('  ✅ Tüm db çağrıları düzgün dönüştürüldü!');
} else {
  console.log(`  ⚠️  ${issues} potansiyel sorun bulundu`);
}

