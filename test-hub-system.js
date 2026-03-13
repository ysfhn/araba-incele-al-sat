/**
 * Hub Sistematiği Kapsamlı Test Scripti
 * Wizard akışı, API endpoint'leri, hub sayfası ve tüm kombinasyonları test eder.
 */

const BASE = 'http://localhost:3000';

async function fetchJSON(url) {
  const res = await fetch(BASE + url);
  if (!res.ok) return { _error: res.status, _url: url };
  try { return await res.json(); } catch { return { _error: 'parse', _url: url }; }
}

async function fetchHTML(url) {
  const res = await fetch(BASE + url);
  return { status: res.status, html: await res.text(), url };
}

let passed = 0, failed = 0, warnings = 0;
const issues = [];

function ok(test, msg) { passed++; console.log(`  ✅ ${msg}`); }
function fail(test, msg, detail) { failed++; issues.push({ test, msg, detail }); console.log(`  ❌ ${msg}${detail ? ' — ' + detail : ''}`); }
function warn(msg) { warnings++; console.log(`  ⚠️  ${msg}`); }

async function main() {
  console.log('═══════════════════════════════════════════');
  console.log('  HUB SİSTEMATİĞİ KAPSAMLI TEST');
  console.log('═══════════════════════════════════════════\n');

  // ═══ TEST 1: API Endpoint'leri Sağlık Kontrolü ═══
  console.log('📋 TEST 1: API Endpoint Sağlık Kontrolü');

  const brands = await fetchJSON('/api/brands');
  if (Array.isArray(brands) && brands.length > 0) ok(1, `Markalar: ${brands.length} adet`);
  else fail(1, 'Markalar yüklenemedi');

  const sedanBrands = await fetchJSON('/api/brands-by-body/sedan');
  if (Array.isArray(sedanBrands)) ok(1, `Sedan markaları: ${sedanBrands.length}`);
  else fail(1, 'Sedan markaları yüklenemedi');

  const suvBrands = await fetchJSON('/api/brands-by-body/suv');
  if (Array.isArray(suvBrands)) ok(1, `SUV markaları: ${suvBrands.length}`);
  else fail(1, 'SUV markaları yüklenemedi');

  const hatchBrands = await fetchJSON('/api/brands-by-body/hatchback');
  if (Array.isArray(hatchBrands)) ok(1, `Hatchback markaları: ${hatchBrands.length}`);
  else fail(1, 'Hatchback markaları yüklenemedi');

  console.log('');

  // ═══ TEST 2: Yıl Bazlı Marka Filtreleme ═══
  console.log('📋 TEST 2: Yıl Bazlı Marka Filtreleme');

  const suv1990 = await fetchJSON('/api/brands-by-body/suv?year=1990');
  const suv2024 = await fetchJSON('/api/brands-by-body/suv?year=2024');
  const sedan1990 = await fetchJSON('/api/brands-by-body/sedan?year=1990');

  if (Array.isArray(suv1990)) {
    const names1990 = suv1990.map(b => b.name);
    if (!names1990.includes('TOGG')) ok(2, 'TOGG 1990 SUV\'de yok (doğru — 2023+)');
    else fail(2, 'TOGG 1990 SUV\'de görünüyor (yanlış)', 'TOGG 2023\'te başladı');
    if (!names1990.includes('Tesla')) ok(2, 'Tesla 1990 SUV\'de yok (doğru)');
    else fail(2, 'Tesla 1990 SUV\'de görünüyor');
    console.log(`  ℹ️  1990 SUV: ${suv1990.length} marka, 2024 SUV: ${suv2024.length} marka`);
  }

  if (Array.isArray(sedan1990)) {
    const names = sedan1990.map(b => b.name);
    if (names.includes('BMW')) ok(2, 'BMW 1990 sedan\'da var (doğru)');
    else warn('BMW 1990 sedan\'da yok — varyant verisi kontrol edilmeli');
  }

  console.log('');

  // ═══ TEST 3: Model Filtreleme (Yıl + Kasa) ═══
  console.log('📋 TEST 3: Yıl Bazlı Model Filtreleme');

  // Fiat sedan 2014 — Egea olmamalı (2015+), Linea olmalı
  const fiatBrand = brands.find(b => b.slug === 'fiat');
  if (fiatBrand) {
    const fiat2014 = await fetchJSON(`/api/models/${fiatBrand.id}?body_type=sedan&year=2014`);
    const fiat2016 = await fetchJSON(`/api/models/${fiatBrand.id}?body_type=sedan&year=2016`);
    
    if (Array.isArray(fiat2014)) {
      const names2014 = fiat2014.map(m => m.name);
      if (names2014.includes('Linea')) ok(3, 'Fiat Linea 2014 sedan\'da var (doğru)');
      else warn('Fiat Linea 2014 sedan\'da yok');
      
      const hasEgea = names2014.some(n => n.toLowerCase().includes('egea'));
      if (!hasEgea) ok(3, 'Fiat Egea 2014 sedan\'da yok (doğru — 2015+)');
      else fail(3, 'Fiat Egea 2014 sedan\'da görünüyor', 'Egea 2015\'te başladı');
    }
    
    if (Array.isArray(fiat2016)) {
      const names2016 = fiat2016.map(m => m.name);
      const hasEgea2016 = names2016.some(n => n.toLowerCase().includes('egea'));
      if (hasEgea2016) ok(3, 'Fiat Egea 2016 sedan\'da var (doğru)');
      else warn('Fiat Egea 2016 sedan\'da yok — DB body_type kontrol edilmeli');
    }
  }

  // Toyota modelleri — kasa tipine göre doğru filtrelenebiliyor mu
  const toyotaBrand = brands.find(b => b.slug === 'toyota');
  if (toyotaBrand) {
    const toyotaSedan = await fetchJSON(`/api/models/${toyotaBrand.id}?body_type=sedan`);
    const toyotaSuv = await fetchJSON(`/api/models/${toyotaBrand.id}?body_type=suv`);
    if (Array.isArray(toyotaSedan) && Array.isArray(toyotaSuv)) {
      ok(3, `Toyota sedan: ${toyotaSedan.length}, SUV: ${toyotaSuv.length}`);
      // Corolla sedan'da olmalı
      if (toyotaSedan.some(m => m.name.toLowerCase().includes('corolla'))) ok(3, 'Corolla sedan\'da var (doğru)');
      else warn('Corolla sedan\'da yok — body_type kontrol edilmeli');
    }
  }

  console.log('');

  // ═══ TEST 4: Cascade API (Yakıt → Şanzıman → Motor → Paket) ═══
  console.log('📋 TEST 4: Cascade API Testi');

  // BMW 3 Serisi cascade
  const bmwFuels = await fetchJSON('/api/variants/fuels/bmw/3-serisi');
  if (bmwFuels.fuels && bmwFuels.fuels.length > 0) {
    ok(4, `BMW 3 Serisi yakıtlar: ${bmwFuels.fuels.map(f => f.key).join(', ')}`);
    
    const firstFuel = bmwFuels.fuels[0].key;
    const bmwTrans = await fetchJSON(`/api/variants/transmissions/bmw/3-serisi?fuel=${firstFuel}`);
    if (bmwTrans.transmissions && bmwTrans.transmissions.length > 0) {
      ok(4, `BMW 3 Serisi (${firstFuel}) şanzımanlar: ${bmwTrans.transmissions.map(t => t.key).join(', ')}`);
      
      const firstTrans = bmwTrans.transmissions[0].key;
      const bmwEngines = await fetchJSON(`/api/variants/engines/bmw/3-serisi?fuel=${firstFuel}&transmission=${firstTrans}`);
      if (bmwEngines.engines && bmwEngines.engines.length > 0) {
        ok(4, `BMW 3 Serisi motorlar: ${bmwEngines.engines.map(e => e.engine).join(', ')}`);
        
        const firstEngine = bmwEngines.engines[0].engine;
        const bmwPkgs = await fetchJSON(`/api/variants/packages/bmw/3-serisi?fuel=${firstFuel}&transmission=${firstTrans}&engine=${encodeURIComponent(firstEngine)}`);
        if (bmwPkgs.packages && bmwPkgs.packages.length > 0) {
          ok(4, `BMW 3 Serisi paketler: ${bmwPkgs.packages.length} adet`);
        } else {
          warn('BMW 3 Serisi paket verisi yok');
        }
      } else {
        warn('BMW 3 Serisi motor verisi yok — variant veri kontrolü gerekli');
      }
    } else {
      warn('BMW 3 Serisi şanzıman verisi yok');
    }
  } else {
    warn('BMW 3 Serisi yakıt verisi yok — varyant verisi mevcut olmayabilir');
    // Fallback ile kontrol
    const fallbackFuels = await fetchJSON('/api/fuel-types/bmw/3-serisi');
    if (fallbackFuels.fuelTypes) ok(4, `BMW 3 Serisi fallback yakıtlar: ${fallbackFuels.fuelTypes.join(', ')}`);
    else fail(4, 'BMW 3 Serisi hiçbir yakıt verisi yok');
  }

  // Full cascade tek sorguda
  const cascadeRes = await fetchJSON('/api/variants/cascade/bmw/3-serisi');
  if (cascadeRes && !cascadeRes._error) {
    ok(4, `BMW cascade OK — yıl: ${cascadeRes.years?.length || 0}, yakıt: ${cascadeRes.fuels?.length || 0}`);
  } else {
    warn('BMW cascade endpoint varyant verisi döndürmedi');
  }

  console.log('');

  // ═══ TEST 5: Hub Sayfası Doğruluk Kontrolü ═══
  console.log('📋 TEST 5: Hub Sayfası İçerik Kontrolü');

  // Test: Tam parametreli hub sayfası
  const hubTests = [
    { url: '/arac/bmw/3-serisi', desc: 'BMW 3 Serisi (filtresiz)' },
    { url: '/arac/bmw/3-serisi?yil=2024&yakit=benzin&vites=otomatik', desc: 'BMW 3 Serisi 2024 benzin otomatik' },
    { url: '/arac/bmw/3-serisi?yil=2015&yakit=dizel', desc: 'BMW 3 Serisi 2015 dizel' },
    { url: '/arac/toyota/corolla', desc: 'Toyota Corolla (filtresiz)' },
    { url: '/arac/toyota/corolla?yil=2020&yakit=hibrit', desc: 'Toyota Corolla 2020 hibrit' },
    { url: '/arac/fiat/egea-sedan?yil=2022', desc: 'Fiat Egea Sedan 2022' },
    { url: '/arac/togg/t10x?yil=1990', desc: 'TOGG T10X 1990 (uyarı bekleniyor)' },
    { url: '/arac/togg/t10x?yil=2024', desc: 'TOGG T10X 2024' },
    { url: '/arac/mercedes-benz/c-serisi?yil=2024&yakit=benzin&vites=otomatik&kasa=sedan', desc: 'Mercedes C 2024 benzin oto sedan' },
  ];

  for (const t of hubTests) {
    const { status, html } = await fetchHTML(t.url);
    if (status === 200) {
      // İçerik doğruluk kontrolleri
      const checks = [];
      
      // Temel bölümler var mı?
      if (html.includes('id="genel-bakis"')) checks.push('genel-bakış');
      if (html.includes('id="teknik"')) checks.push('teknik');
      if (html.includes('id="ilanlar"')) checks.push('ilanlar');
      if (html.includes('id="forum"')) checks.push('forum');
      
      // Motor/HP bilgisi var mı?
      const hasEngine = html.includes('Motor Tipi') || html.includes('Beygir Gücü');
      if (hasEngine) checks.push('motor-bilgisi');
      
      // Fiyat bilgisi var mı?
      const hasPrice = html.includes('Ortalama Fiyat') || html.includes('Ort. Fiyat');
      if (hasPrice) checks.push('fiyat');
      
      // Yıl uyarısı kontrolü (TOGG 1990 için olmalı)
      const hasYearWarning = html.includes('yılları arasında üretilmiştir');
      
      if (t.url.includes('togg') && t.url.includes('1990')) {
        if (hasYearWarning) ok(5, `${t.desc}: ✓ Yıl uyarısı gösteriliyor`);
        else fail(5, `${t.desc}: Yıl uyarısı eksik`, 'yearWarning bekleniyor');
      } else if (t.url.includes('togg') && t.url.includes('2024')) {
        if (!hasYearWarning) ok(5, `${t.desc}: ✓ Yıl uyarısı yok (doğru)`);
        else fail(5, `${t.desc}: Gereksiz yıl uyarısı var`);
      } else {
        ok(5, `${t.desc}: ${status} [${checks.join(', ')}]`);
      }

      // Filtre etiketleri hub'da gösteriliyor mu?
      if (t.url.includes('yil=') && html.includes('calendar_today')) {
        // Yıl filtresi gösteriliyor
      }
      if (t.url.includes('yakit=') && html.includes('local_gas_station')) {
        // Yakıt filtresi gösteriliyor
      }
    } else {
      fail(5, `${t.desc}: HTTP ${status}`, t.url);
    }
  }

  console.log('');

  // ═══ TEST 6: Hub İçerik Parametrelere Göre Değişiyor mu? ═══
  console.log('📋 TEST 6: Parametrelere Göre Hub İçerik Farkı');

  const hub2024 = await fetchHTML('/arac/bmw/3-serisi?yil=2024');
  const hub2015 = await fetchHTML('/arac/bmw/3-serisi?yil=2015');
  const hubBenzin = await fetchHTML('/arac/bmw/3-serisi?yil=2024&yakit=benzin');
  const hubDizel = await fetchHTML('/arac/bmw/3-serisi?yil=2024&yakit=dizel');

  // Fiyat farkı kontrolü — 2024 > 2015 olmalı
  function extractPrice(html) {
    // Fiyat değeri, "Ortalama Fiyat" başlığından ÖNCE gelir: <p>1.350.000 ₺</p> <p>Ortalama Fiyat</p>
    const m = html.match(/([\d.]+)\s*₺[\s\S]*?Ortalama Fiyat/);
    if (m) return parseInt(m[1].replace(/\./g, ''));
    const m2 = html.match(/([\d.]+)\s*₺[\s\S]*?Ort\.\s*Fiyat/);
    if (m2) return parseInt(m2[1].replace(/\./g, ''));
    return null;
  }

  const price2024 = extractPrice(hub2024.html);
  const price2015 = extractPrice(hub2015.html);
  if (price2024 && price2015) {
    if (price2024 > price2015) ok(6, `Yıl bazlı fiyat farkı: 2024=${price2024.toLocaleString('tr')}₺ > 2015=${price2015.toLocaleString('tr')}₺ ✓`);
    else fail(6, `Yıl bazlı fiyat farkı yanlış: 2024=${price2024} <= 2015=${price2015}`);
  } else {
    warn(`Fiyat çıkarılamadı: 2024=${price2024}, 2015=${price2015}`);
  }

  // Yakıt tüketimi farkı — benzin vs dizel farklı olmalı
  function extractConsumption(html) {
    const m = html.match(/Tüketim<\/p><p class="value">([\d.]+)/);
    if (m) return parseFloat(m[1]);
    return null;
  }
  const consBenzin = extractConsumption(hubBenzin.html);
  const consDizel = extractConsumption(hubDizel.html);
  if (consBenzin && consDizel) {
    if (consBenzin !== consDizel) ok(6, `Yakıt tüketimi farkı: benzin=${consBenzin}L vs dizel=${consDizel}L ✓`);
    else warn('Benzin ve dizel tüketimi aynı — kontrol gerekli');
  }

  // 2015 model "eski araç" pro/con ekleniyor mu?
  if (hub2015.html.includes('İkinci el piyasada uygun fiyat')) ok(6, '2015 model "uygun fiyat" pro ekleniyor ✓');
  else warn('2015 model için eski araç pro\'su eksik olabilir');

  console.log('');

  // ═══ TEST 7: Marka Hub Sayfası ═══
  console.log('📋 TEST 7: Marka Hub Sayfası');

  const brandHubTests = [
    { url: '/arac/bmw', desc: 'BMW Marka Hub' },
    { url: '/arac/toyota', desc: 'Toyota Marka Hub' },
    { url: '/arac/fiat', desc: 'Fiat Marka Hub' },
  ];

  for (const t of brandHubTests) {
    const { status, html } = await fetchHTML(t.url);
    if (status === 200) {
      const hasModels = html.includes('/arac/' + t.url.split('/arac/')[1] + '/');
      ok(7, `${t.desc}: ${status}${hasModels ? ' — model linkleri var' : ''}`);
    } else {
      fail(7, `${t.desc}: HTTP ${status}`);
    }
  }

  console.log('');

  // ═══ TEST 8: 404 Kontrolü ═══
  console.log('📋 TEST 8: Hatalı URL 404 Kontrolü');

  const notFoundTests = [
    '/arac/olmayan-marka',
    '/arac/bmw/olmayan-model',
    '/arac/xyz/abc',
  ];

  for (const url of notFoundTests) {
    const { status } = await fetchHTML(url);
    if (status === 404) ok(8, `${url} → 404 ✓`);
    else fail(8, `${url} → ${status} (404 bekleniyor)`);
  }

  console.log('');

  // ═══ TEST 9: Wizard → Hub Yönlendirme Parametreleri ═══
  console.log('📋 TEST 9: Wizard Parametre Kombinasyonları');

  // Wizard'ın üretebileceği tüm parametre kombinasyonları
  const paramTests = [
    { params: '', desc: 'Hiç parametre yok' },
    { params: '?yil=2024', desc: 'Sadece yıl' },
    { params: '?yil=2024&kasa=sedan', desc: 'Yıl + kasa' },
    { params: '?yil=2024&yakit=benzin', desc: 'Yıl + yakıt' },
    { params: '?yil=2024&yakit=benzin&vites=otomatik', desc: 'Yıl + yakıt + vites' },
    { params: '?yil=2024&yakit=benzin&vites=otomatik&motor=320i', desc: 'Yıl + yakıt + vites + motor' },
    { params: '?yil=2024&yakit=benzin&vites=otomatik&motor=320i&paket=Sport%20Line', desc: 'Tam kombo' },
    { params: '?yil=2024&yakit=benzin&vites=otomatik&motor=320i&paket=Sport%20Line&kasa=sedan', desc: 'Tam + kasa' },
    { params: '?yakit=dizel&vites=manuel', desc: 'Yılsız yakıt+vites' },
    { params: '?butce=500000', desc: 'Sadece bütçe' },
  ];

  for (const t of paramTests) {
    const { status, html } = await fetchHTML('/arac/bmw/3-serisi' + t.params);
    if (status === 200) {
      // Filtre etiketleri doğru gösteriliyor mu?
      const filterBar = html.includes('filter_alt');
      const shouldHaveFilter = t.params.length > 0;
      if (shouldHaveFilter && filterBar) ok(9, `${t.desc}: 200 + filtre etiketi ✓`);
      else if (!shouldHaveFilter && !filterBar) ok(9, `${t.desc}: 200, filtre yok ✓`);
      else if (shouldHaveFilter && !filterBar) warn(`${t.desc}: Filtre etiketi gösterilmiyor`);
      else ok(9, `${t.desc}: 200 ✓`);
    } else {
      fail(9, `${t.desc}: HTTP ${status}`);
    }
  }

  console.log('');

  // ═══ TEST 10: Güvenlik ve Bagaj Bölümleri ═══
  console.log('📋 TEST 10: Güvenlik & Bagaj Hacmi');

  const safetyTest = await fetchHTML('/arac/bmw/3-serisi?yil=2024');
  if (safetyTest.html.includes('id="guvenlik"')) ok(10, 'Güvenlik bölümü mevcut ✓');
  else warn('Güvenlik bölümü görünmüyor');
  
  if (safetyTest.html.includes('Euro NCAP')) ok(10, 'Euro NCAP puanı mevcut ✓');
  else warn('Euro NCAP puanı yok');

  if (safetyTest.html.includes('Bagaj Hacmi')) ok(10, 'Bagaj hacmi mevcut ✓');
  else warn('Bagaj hacmi yok');

  if (safetyTest.html.includes('ABS') || safetyTest.html.includes('ESP')) ok(10, 'Güvenlik özellikleri (ABS/ESP) mevcut ✓');
  else warn('Güvenlik özellikleri eksik');

  console.log('');

  // ═══ TEST 11: Check-models Variant Durumu ═══
  console.log('📋 TEST 11: Check-models Varyant Tutarlılığı');

  const checkBmw = await fetchJSON('/api/variants/check-models/bmw?body_type=sedan');
  if (checkBmw.models) {
    const modelKeys = Object.keys(checkBmw.models);
    const withVariants = modelKeys.filter(k => checkBmw.models[k] === true);
    ok(11, `BMW sedan varyant kontrolü: ${withVariants.length}/${modelKeys.length} modelde varyant var`);
    
    // Yıl filtreli check-models
    const checkBmw1990 = await fetchJSON('/api/variants/check-models/bmw?body_type=sedan&year=1990');
    const checkBmw2024 = await fetchJSON('/api/variants/check-models/bmw?body_type=sedan&year=2024');
    const keys1990 = Object.keys(checkBmw1990.models || {});
    const keys2024 = Object.keys(checkBmw2024.models || {});
    console.log(`  ℹ️  BMW sedan 1990: ${keys1990.length} model, 2024: ${keys2024.length} model`);
    if (keys2024.length >= keys1990.length) ok(11, '2024\'te en az 1990 kadar model var (mantıklı)');
    // Beklentimiz: Bazı yeni modeller 1990'da yoktur
  } else {
    warn('BMW check-models boş döndü');
  }

  console.log('');

  // ═══ TEST 12: Edge Case'ler ═══
  console.log('📋 TEST 12: Edge Case\'ler');

  // Var olmayan kasa tipi
  const noBody = await fetchJSON('/api/brands-by-body/tank');
  if (Array.isArray(noBody) && noBody.length === 0) ok(12, 'Geçersiz kasa tipi boş array ✓');
  else if (noBody._error) warn('Geçersiz kasa tipi hata döndürdü');
  else ok(12, `Geçersiz kasa tipi: ${noBody.length} marka (DB'deki body_type eşleşmesi)`);

  // Çok eski yıl (1950)
  const veryOld = await fetchJSON('/api/brands-by-body/sedan?year=1950');
  if (Array.isArray(veryOld)) ok(12, `1950 sedan: ${veryOld.length} marka (eski yıl edge case)`);

  // Gelecek yılı (2027)
  const future = await fetchJSON('/api/brands-by-body/sedan?year=2027');
  if (Array.isArray(future)) ok(12, `2027 sedan: ${future.length} marka (gelecek yıl edge case)`);

  // Unicode/Türkçe karakter parametresi
  const turkishParams = await fetchHTML('/arac/bmw/3-serisi?paket=Lüks%20Paket');
  if (turkishParams.status === 200) ok(12, 'Türkçe karakter parametresi: 200 ✓');
  else fail(12, 'Türkçe karakter parametresi hata verdi');

  // Boş yıl parametresi
  const emptyYear = await fetchHTML('/arac/bmw/3-serisi?yil=');
  if (emptyYear.status === 200) ok(12, 'Boş yıl parametresi: 200 ✓');
  else fail(12, 'Boş yıl parametresi hata verdi');

  // Geçersiz yıl parametresi
  const badYear = await fetchHTML('/arac/bmw/3-serisi?yil=abc');
  if (badYear.status === 200) ok(12, 'Geçersiz yıl (abc): 200 ✓');
  else fail(12, 'Geçersiz yıl (abc) hata verdi');

  console.log('');

  // ═══ SONUÇ ═══
  console.log('═══════════════════════════════════════════');
  console.log(`  SONUÇ: ✅ ${passed} geçti | ❌ ${failed} başarısız | ⚠️  ${warnings} uyarı`);
  console.log('═══════════════════════════════════════════');

  if (issues.length > 0) {
    console.log('\n🔴 BAŞARISIZ TESTLER:');
    issues.forEach((i, idx) => {
      console.log(`  ${idx + 1}. [Test ${i.test}] ${i.msg}${i.detail ? '\n     → ' + i.detail : ''}`);
    });
  }

  console.log('');
}

main().catch(e => {
  console.error('Test scripti hatası:', e.message);
  process.exit(1);
});
