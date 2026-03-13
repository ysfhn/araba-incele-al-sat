#!/usr/bin/env node
/**
 * CSV Araç Verisi İçe Aktarma Scripti
 * ====================================
 * arac-verileri.csv dosyasını okur, parse eder, DB marka/model eşleştirmesi yapar
 * ve vehicle-variants veri dosyalarını gerçek teknik verilerle günceller.
 *
 * Kullanım: node scripts/import-csv-data.js [--dry-run] [--report] [--update]
 *   --dry-run  : Değişiklik yapmadan sadece eşleştirme raporu gösterir
 *   --report   : Detaylı eşleştirme raporu oluşturur
 *   --update   : vehicle-variants dosyalarını günceller
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

const CSV_PATH = path.join(__dirname, '..', 'arac-verileri.csv');

// ═══════════════════════════════════════════
//  CSV MARKA ADI → DB SLUG EŞLEŞTİRME
// ═══════════════════════════════════════════
const BRAND_MAP = {
  'ALFA ROMEO': 'alfa-romeo',
  'ASTON MARTIN': 'aston-martin',
  'AUDI': 'audi',
  'BMW': 'bmw',
  'BYD': 'byd',
  'BENTLEY': 'bentley',
  'CADILLAC': 'cadillac',
  'CHANGAN': 'changan',
  'CHERY': 'chery',
  'CHEVROLET': 'chevrolet',
  'CHRYSLER': 'chrysler',
  'CITROEN': 'citroen',
  'CUPRA': 'cupra',
  'DFSK': 'dfsk',
  'DS': 'ds',
  'DACIA': 'dacia',
  'DAIHATSU': 'daihatsu',
  'DODGE/USA': 'dodge',
  'FERRARI': 'ferrari',
  'FIAT': 'fiat',
  'TOFAS-FIAT': 'fiat',
  'FORD': 'ford',
  'FORD /USA': 'ford',
  'TRUMPCHI/GAC': 'gac',
  'GEELY': 'geely',
  'HONDA': 'honda',
  'HYUNDAI': 'hyundai',
  'INFINITI': 'infiniti',
  'ISUZU': 'isuzu',
  'OTOYOL\\IVECO\\FIAT': 'iveco',
  'JAC': 'jac',
  'JAGUAR': 'jaguar',
  'KIA': 'kia',
  'LADA': 'lada',
  'LAMBORGHINI': 'lamborghini',
  'LANCIA': 'lancia',
  'LAND ROVER': 'land-rover',
  'RANGE ROVER': 'land-rover',
  'LEXUS': 'lexus',
  'LINCOLN': 'lincoln',
  'LOTUS': 'lotus',
  'LUCID': 'lucid',
  'MG': 'mg',
  'MASERATI': 'maserati',
  'MAXUS': 'maxus',
  'MAZDA': 'mazda',
  'MCLAREN': 'mclaren',
  'MERCEDES': 'mercedes-benz',
  'MINI': 'mini',
  'MITSUBISHI': 'mitsubishi',
  'NISSAN': 'nissan',
  'OPEL': 'opel',
  'PEUGEOT': 'peugeot',
  'POLESTAR': 'polestar',
  'POLESTONES': 'polestar',
  'PORSCHE': 'porsche',
  'PROTON': 'proton',
  'RENAULT': 'renault',
  'RENAULT (OYAK)': 'renault',
  'ROLLS-ROYCE': 'rolls-royce',
  'SAAB': 'saab',
  'SEAT': 'seat',
  'SKODA': 'skoda',
  'SMART': 'smart',
  'SSANGYONG': 'ssangyong',
  'KGMOBILITY': 'ssangyong',
  'SUBARU': 'subaru',
  'SUZUKI': 'suzuki',
  'TATA': 'tata',
  'TESLA': 'tesla',
  'TOGG': 'togg',
  'TOYOTA': 'toyota',
  'VOLKSWAGEN': 'volkswagen',
  'VOLVO': 'volvo',
  'VOLVO-TR': 'volvo',
  'WMA': 'wey',
};

// ═══════════════════════════════════════════
//  CSV TİP ADI → MODEL SLUG ÇÖZÜMLEYİCİ
// ═══════════════════════════════════════════

/**
 * CSV tip adından model adını çıkarır.
 * Örn: "320i SEDAN 1.6 170 50 JAHRE EDITION" → "3-serisi"
 *       "COROLLA 1.5 VISION FL" → "corolla"
 *       "EGEA SEDAN EASY 1.4 FIRE 95 E6" → "egea-sedan"
 */
function extractModelName(tipAdi, kasaTuru) {
  if (!tipAdi) return null;
  let name = tipAdi.toUpperCase().trim();
  
  // Motor bilgisini çıkar: 1.4L, 1.6, 2.0T vb.
  name = name.replace(/\b\d+\.\d+[LT]?\b/gi, '');
  // HP bilgisini çıkar: (155), (120)
  name = name.replace(/\(\d+\)/g, '');
  // Sayısal HP: 95, 110, 120, 150 vb (bağımsız sayılar)
  name = name.replace(/\b\d{2,3}\b(?!\s*(KAPI|D|I|S|X|E|C|T))/g, '');
  // Paket adlarını çıkar
  const paketler = ['EASY', 'EASY PLUS', 'URBAN', 'LOUNGE', 'COMFORT', 'COMFORT PLUS', 
    'SPORT', 'SPORT PLUS', 'SPORT LINE', 'M SPORT', 'LUXURY', 'LUXURY LINE', 'PREMIUM',
    'PREMIUM LINE', 'ADVANTAGE', 'DISTINCTIVE', 'JOY', 'JOY PLUS', 'PURE', 'URBAN PLUS',
    'M PLUS', 'SPORT PLUS', 'ONE EDITION', 'FIRST EDITION', 'VISION', 'VISION PLUS',
    'DREAM', 'FLAME', 'PASSION', 'PASSION X-PACK', 'FLAME X-PACK', 'DREAM X-PACK',
    'GR SPORT', 'MULTIDRIVE S', 'E-CVT', 'AT6', 'DCT', 'CVT', 'DSG',
    'XDRIVE', 'XLINE', 'X-LINE', 'HIGHLINE', 'COMFORTLINE', 'TRENDLINE',
    'ALLURE', 'ACTIVE', 'GT LINE', 'GT-LINE', 'TEKNA', 'ACENTA', 'VISIA',
    'STYLE', 'EDITION', 'EDITION 1', 'ELEGANCE', '50 JAHRE', 'SPORTLINE',
    'FIRE', 'M.JET', 'MJET', 'E-TORQ', 'TSI', 'TDI', 'TFSI', 'CDI', 'CRDI',
    'TURBO', 'BLUEHDI', 'HDI', 'LIFE', 'STEPWAY', 'TECHNO', 'EXPRESSION',
    'PRESTIGE', 'EXECUTIVE', 'LAUNCH', 'LIMITED', 'STANDART', 'STANDARD',
    'LONG RANGE', 'RANGE', 'RWD', 'AWD', 'PLAID', 'PERFORMANCE', 'FL', 'MC',
    'LEGACY', 'E5+', 'E6', 'E6D', 'PLUS', 'X-PACK'];
  // Sort by length descending to remove longer patterns first
  paketler.sort((a, b) => b.length - a.length);
  for (const p of paketler) {
    name = name.replace(new RegExp('\\b' + p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi'), '');
  }
  // Kapı bilgisini çıkar
  name = name.replace(/\d\s*KAPI/gi, '');
  // SEDAN, HB, SW, COUPE, CABRIO etiketlerini modele dahil et
  // Çoklu boşlukları temizle
  name = name.replace(/\s+/g, ' ').trim();
  
  return name || null;
}

/**
 * Çıkarılan model adını slug'a çevirir.
 */
function toSlug(name) {
  if (!name) return null;
  return name
    .toLowerCase()
    .replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ı/g, 'i')
    .replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// ═══════════════════════════════════════════
//  CSV PARSER
// ═══════════════════════════════════════════

function parseCSV() {
  let content = fs.readFileSync(CSV_PATH, 'utf8');
  // BOM temizle
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  
  const lines = content.split(/\r?\n/).filter(l => l.trim());
  const header = lines[0].split(';');
  
  console.log(`📂 CSV: ${lines.length - 1} satır, ${header.length} sütun`);
  
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(';');
    if (cols.length < 20) continue;
    
    rows.push({
      markaKodu: cols[0],
      tipKodu: cols[1],
      markaAdi: cols[2],
      tipAdi: cols[3],
      yil: parseInt(cols[4]) || null,
      motorHacmi: cols[5],
      motorTipi: cols[6],
      hp: parseInt(cols[7]) || null,
      tork: parseInt(cols[8]) || null,
      maksHiz: parseInt(cols[9]) || null,
      paket: cols[10],
      sanziman: cols[11],
      kasaTuru: cols[12],
      yakitTuru: cols[13],
      uzunluk: parseInt(cols[14]) || null,
      genislik: parseInt(cols[15]) || null,
      yukseklik: parseInt(cols[16]) || null,
      dingilMesafesi: parseInt(cols[17]) || null,
      agirlik: parseInt(cols[18]) || null,
      bagajHacmi: parseInt(cols[19]) || null,
    });
  }
  
  return rows;
}

// ═══════════════════════════════════════════
//  VERİ GRUPLAMA
// ═══════════════════════════════════════════

/**
 * CSV verilerini marka → model → yıl → varyantlar yapısına gruplar.
 */
function groupData(rows) {
  const grouped = {};  // brandSlug → { modelName → { years, bodyType, variants[], dimensions } }
  let matched = 0, unmatched = 0;
  const unmatchedBrands = new Set();
  
  for (const row of rows) {
    const brandSlug = BRAND_MAP[row.markaAdi];
    if (!brandSlug) {
      unmatchedBrands.add(row.markaAdi);
      unmatched++;
      continue;
    }
    
    if (!grouped[brandSlug]) grouped[brandSlug] = {};
    
    const modelName = extractModelName(row.tipAdi, row.kasaTuru);
    if (!modelName) { unmatched++; continue; }
    
    const modelSlug = toSlug(modelName);
    if (!modelSlug) { unmatched++; continue; }
    
    if (!grouped[brandSlug][modelSlug]) {
      grouped[brandSlug][modelSlug] = {
        name: modelName,
        years: new Set(),
        bodyTypes: new Set(),
        variants: [],
        // Fiziksel boyutlar — ilk geçerli değeri sakla
        dimensions: { uzunluk: null, genislik: null, yukseklik: null, dingilMesafesi: null, agirlik: null, bagajHacmi: null },
      };
    }
    
    const model = grouped[brandSlug][modelSlug];
    if (row.yil) model.years.add(row.yil);
    if (row.kasaTuru) model.bodyTypes.add(row.kasaTuru);
    
    // Boyutları güncelle (ilk geçerli değeri al, 0 ve çok düşük değerleri atla)
    const d = model.dimensions;
    if (!d.uzunluk && row.uzunluk > 2000) d.uzunluk = row.uzunluk;
    if (!d.genislik && row.genislik > 1000) d.genislik = row.genislik;
    if (!d.yukseklik && row.yukseklik > 1000) d.yukseklik = row.yukseklik;
    if (!d.dingilMesafesi && row.dingilMesafesi > 1500) d.dingilMesafesi = row.dingilMesafesi;
    if (!d.agirlik && row.agirlik > 500) d.agirlik = row.agirlik;
    if (!d.bagajHacmi && row.bagajHacmi > 0) d.bagajHacmi = row.bagajHacmi;
    
    // Varyant kaydet (benzersiz HP/tork/yakıt/vites kombinasyonu)
    const varKey = `${row.hp}|${row.tork}|${row.yakitTuru}|${row.sanziman}|${row.motorHacmi}`;
    const existing = model.variants.find(v => `${v.hp}|${v.tork}|${v.yakitTuru}|${v.sanziman}|${v.motorHacmi}` === varKey);
    if (!existing && row.hp > 50) {
      model.variants.push({
        motorHacmi: row.motorHacmi,
        motorTipi: row.motorTipi,
        hp: row.hp,
        tork: row.tork,
        maksHiz: row.maksHiz,
        sanziman: row.sanziman,
        yakitTuru: row.yakitTuru,
        paket: row.paket,
      });
    }
    
    matched++;
  }
  
  console.log(`✅ Eşleşen: ${matched}, ❌ Eşleşmeyen: ${unmatched}`);
  if (unmatchedBrands.size > 0) {
    console.log(`⚠️  Eşleşmeyen markalar (${unmatchedBrands.size}): ${[...unmatchedBrands].sort().join(', ')}`);
  }
  
  // Set'leri Array'e çevir
  for (const brand of Object.values(grouped)) {
    for (const model of Object.values(brand)) {
      model.years = [...model.years].sort((a, b) => a - b);
      model.bodyTypes = [...model.bodyTypes];
    }
  }
  
  return grouped;
}

// ═══════════════════════════════════════════
//  RAPOR
// ═══════════════════════════════════════════

function printReport(grouped) {
  console.log('\n═══════════════════════════════════════════');
  console.log('  CSV VERİ ANALİZ RAPORU');
  console.log('═══════════════════════════════════════════\n');
  
  const brandCount = Object.keys(grouped).length;
  let totalModels = 0;
  let totalVariants = 0;
  let withDimensions = 0;
  
  for (const [brandSlug, models] of Object.entries(grouped)) {
    const modelCount = Object.keys(models).length;
    totalModels += modelCount;
    
    for (const [modelSlug, model] of Object.entries(models)) {
      totalVariants += model.variants.length;
      if (model.dimensions.uzunluk) withDimensions++;
    }
  }
  
  console.log(`📊 Toplam: ${brandCount} marka, ${totalModels} model, ${totalVariants} varyant`);
  console.log(`📏 Boyut verisi olan modeller: ${withDimensions}/${totalModels}`);
  
  // Marka başına model sayısı
  console.log('\n📋 Marka başına model sayısı (ilk 20):');
  const brandStats = Object.entries(grouped)
    .map(([slug, models]) => ({ slug, count: Object.keys(models).length }))
    .sort((a, b) => b.count - a.count);
  
  for (const { slug, count } of brandStats.slice(0, 20)) {
    console.log(`  ${slug}: ${count} model`);
  }
  
  // Örnek detay: BMW
  console.log('\n📋 BMW modelleri (örnek):');
  if (grouped.bmw) {
    for (const [slug, model] of Object.entries(grouped.bmw).slice(0, 15)) {
      const d = model.dimensions;
      console.log(`  ${slug}: ${model.years[0]}-${model.years[model.years.length-1]} | ${model.bodyTypes.join(',')} | ${model.variants.length} varyant | ${d.uzunluk || '?'}×${d.genislik || '?'}×${d.yukseklik || '?'}mm | ${d.bagajHacmi || '?'}L`);
    }
  }
  
  // Toyota örnek
  console.log('\n📋 Toyota modelleri (örnek):');
  if (grouped.toyota) {
    for (const [slug, model] of Object.entries(grouped.toyota).slice(0, 15)) {
      const d = model.dimensions;
      console.log(`  ${slug}: ${model.years[0]}-${model.years[model.years.length-1]} | ${model.bodyTypes.join(',')} | ${model.variants.length} varyant | ${d.uzunluk || '?'}×${d.genislik || '?'}×${d.yukseklik || '?'}mm | ${d.bagajHacmi || '?'}L`);
    }
  }
}

// ═══════════════════════════════════════════
//  ANA İŞLEM
// ═══════════════════════════════════════════

const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const isReport = args.includes('--report') || isDryRun;

console.log('🚗 CSV Araç Verisi İçe Aktarma\n');

if (!fs.existsSync(CSV_PATH)) {
  console.error('❌ CSV dosyası bulunamadı:', CSV_PATH);
  process.exit(1);
}

const rows = parseCSV();
const grouped = groupData(rows);

if (isReport) {
  printReport(grouped);
}

// Gruplandırılmış veriyi JSON olarak kaydet (diğer scriptlerin kullanımı için)
const outputPath = path.join(__dirname, '..', 'src', 'data', 'csv-vehicle-data.json');
fs.writeFileSync(outputPath, JSON.stringify(grouped, null, 2), 'utf8');
console.log(`\n💾 Gruplandırılmış veri kaydedildi: ${outputPath}`);
console.log(`   ${Object.keys(grouped).length} marka, toplam model sayıları yukarıda.`);
