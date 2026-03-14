/**
 * Araç Belgeleri — Üretici Resmi Doküman Linkleri
 * ─────────────────────────────────────────────────
 * Her marka için resmi web sitesinden erişilebilen dokümantasyon URL'leri.
 * Belgeler: Kullanım Kılavuzu, Teknik Şartname, Garanti Koşulları, Bakım Planı
 *
 * URL Stratejisi:
 * - Üreticilerin resmi support/owners portalları (doğrudan PDF veya doküman hub)
 * - Genel marka-seviyesi doküman portalları (model-bazlı filtreleme kullanıcıya bırakılır)
 */

const BRAND_DOC_PORTALS = {
  // ─── ALMAN MARKALARI ───
  'bmw': {
    ownersManual: 'https://www.bmw.com.tr/tr/footer/legal/owners-handbook.html',
    techSpecs:    'https://www.bmw.com.tr/tr/all-models.html',
    warranty:     'https://www.bmw.com.tr/tr/topics/offers-and-services/bmw-service/bmw-warranty.html',
    maintenance:  'https://www.bmw.com.tr/tr/topics/offers-and-services/bmw-service/condition-based-service.html',
    brandName:    'BMW'
  },
  'mercedes-benz': {
    ownersManual: 'https://www.mercedes-benz.com.tr/passengercars/services/digital-owners-manual.html',
    techSpecs:    'https://www.mercedes-benz.com.tr/passengercars/models.html',
    warranty:     'https://www.mercedes-benz.com.tr/passengercars/services/warranty.html',
    maintenance:  'https://www.mercedes-benz.com.tr/passengercars/services/maintenance.html',
    brandName:    'Mercedes-Benz'
  },
  'audi': {
    ownersManual: 'https://www.audi.com.tr/tr/web/tr/customer-area/useful-information/owners-manual.html',
    techSpecs:    'https://www.audi.com.tr/tr/web/tr/models.html',
    warranty:     'https://www.audi.com.tr/tr/web/tr/customer-area/useful-information/warranty.html',
    maintenance:  'https://www.audi.com.tr/tr/web/tr/customer-area/service-maintenance.html',
    brandName:    'Audi'
  },
  'volkswagen': {
    ownersManual: 'https://www.volkswagen.com.tr/tr/sahipler/kullanim-kilavuzu.html',
    techSpecs:    'https://www.volkswagen.com.tr/tr/modeller.html',
    warranty:     'https://www.volkswagen.com.tr/tr/sahipler/garanti.html',
    maintenance:  'https://www.volkswagen.com.tr/tr/servis/bakim-planlari.html',
    brandName:    'Volkswagen'
  },
  'porsche': {
    ownersManual: 'https://www.porsche.com/turkey/tr/accessoriesandservice/porscheservice/informationanddocuments/',
    techSpecs:    'https://www.porsche.com/turkey/tr/models/',
    warranty:     'https://www.porsche.com/turkey/tr/accessoriesandservice/porscheservice/warranty/',
    maintenance:  'https://www.porsche.com/turkey/tr/accessoriesandservice/porscheservice/maintenance/',
    brandName:    'Porsche'
  },
  'opel': {
    ownersManual: 'https://www.opel.com.tr/araclaryonetimi/kullanim-klavuzlari.html',
    techSpecs:    'https://www.opel.com.tr/araclar.html',
    warranty:     'https://www.opel.com.tr/araclaryonetimi/garanti.html',
    maintenance:  'https://www.opel.com.tr/servis/bakim.html',
    brandName:    'Opel'
  },
  'smart': {
    ownersManual: 'https://www.smart.mercedes-benz.com/tr/tr/owners-manual',
    techSpecs:    'https://www.smart.mercedes-benz.com/tr/tr/models',
    warranty:     'https://www.smart.mercedes-benz.com/tr/tr/warranty',
    maintenance:  'https://www.smart.mercedes-benz.com/tr/tr/service',
    brandName:    'smart'
  },

  // ─── FRANSIZ MARKALARI ───
  'renault': {
    ownersManual: 'https://www.renault.com.tr/servis-ve-aksesuarlar/my-renault/kullanici-kilavuzu.html',
    techSpecs:    'https://www.renault.com.tr/araclar.html',
    warranty:     'https://www.renault.com.tr/servis-ve-aksesuarlar/garanti.html',
    maintenance:  'https://www.renault.com.tr/servis-ve-aksesuarlar/bakim.html',
    brandName:    'Renault'
  },
  'peugeot': {
    ownersManual: 'https://www.peugeot.com.tr/mypeugeot/kullanim-kilavuzu.html',
    techSpecs:    'https://www.peugeot.com.tr/modellerimiz.html',
    warranty:     'https://www.peugeot.com.tr/servis/garanti.html',
    maintenance:  'https://www.peugeot.com.tr/servis/bakim.html',
    brandName:    'Peugeot'
  },
  'citroen': {
    ownersManual: 'https://www.citroen.com.tr/servis/kullanim-kilavuzlari.html',
    techSpecs:    'https://www.citroen.com.tr/modeller.html',
    warranty:     'https://www.citroen.com.tr/servis/garanti.html',
    maintenance:  'https://www.citroen.com.tr/servis/bakim-programi.html',
    brandName:    'Citroën'
  },
  'ds': {
    ownersManual: 'https://www.dsautomobiles.com.tr/servisler/kullanim-kilavuzu.html',
    techSpecs:    'https://www.dsautomobiles.com.tr/modeller.html',
    warranty:     'https://www.dsautomobiles.com.tr/servisler/garanti.html',
    maintenance:  'https://www.dsautomobiles.com.tr/servisler/bakim.html',
    brandName:    'DS Automobiles'
  },
  'alpine': {
    ownersManual: 'https://www.alpinecars.com/en/after-sales/',
    techSpecs:    'https://www.alpinecars.com/en/models/',
    warranty:     'https://www.alpinecars.com/en/after-sales/',
    maintenance:  'https://www.alpinecars.com/en/after-sales/',
    brandName:    'Alpine'
  },

  // ─── İTALYAN MARKALARI ───
  'fiat': {
    ownersManual: 'https://www.fiat.com.tr/servisler/kullanim-kilavuzu.html',
    techSpecs:    'https://www.fiat.com.tr/modeller.html',
    warranty:     'https://www.fiat.com.tr/servisler/garanti.html',
    maintenance:  'https://www.fiat.com.tr/servisler/bakim.html',
    brandName:    'Fiat'
  },
  'alfa-romeo': {
    ownersManual: 'https://www.alfaromeo.com.tr/servisler/kullanim-kilavuzu.html',
    techSpecs:    'https://www.alfaromeo.com.tr/modeller.html',
    warranty:     'https://www.alfaromeo.com.tr/servisler/garanti.html',
    maintenance:  'https://www.alfaromeo.com.tr/servisler/bakim.html',
    brandName:    'Alfa Romeo'
  },
  'ferrari': {
    ownersManual: 'https://www.ferrari.com/en-EN/auto/owners',
    techSpecs:    'https://www.ferrari.com/en-EN/auto',
    warranty:     'https://www.ferrari.com/en-EN/auto/warranty',
    maintenance:  'https://www.ferrari.com/en-EN/auto/service',
    brandName:    'Ferrari'
  },
  'lamborghini': {
    ownersManual: 'https://www.lamborghini.com/en-en/ownership/service',
    techSpecs:    'https://www.lamborghini.com/en-en/models',
    warranty:     'https://www.lamborghini.com/en-en/ownership/warranty',
    maintenance:  'https://www.lamborghini.com/en-en/ownership/service',
    brandName:    'Lamborghini'
  },
  'maserati': {
    ownersManual: 'https://www.maserati.com/tr/tr/services/owners-info',
    techSpecs:    'https://www.maserati.com/tr/tr/models',
    warranty:     'https://www.maserati.com/tr/tr/services/warranty',
    maintenance:  'https://www.maserati.com/tr/tr/services/maintenance',
    brandName:    'Maserati'
  },
  'lancia': {
    ownersManual: 'https://www.lancia.com/services',
    techSpecs:    'https://www.lancia.com/models',
    warranty:     'https://www.lancia.com/services',
    maintenance:  'https://www.lancia.com/services',
    brandName:    'Lancia'
  },

  // ─── JAPON MARKALARI ───
  'toyota': {
    ownersManual: 'https://www.toyota.com.tr/owners/manuals',
    techSpecs:    'https://www.toyota.com.tr/new-cars',
    warranty:     'https://www.toyota.com.tr/owners/warranty',
    maintenance:  'https://www.toyota.com.tr/owners/maintenance',
    brandName:    'Toyota'
  },
  'honda': {
    ownersManual: 'https://www.honda.com.tr/otomobil/sahipler/kullanim-kilavuzu',
    techSpecs:    'https://www.honda.com.tr/otomobil/modeller',
    warranty:     'https://www.honda.com.tr/otomobil/sahipler/garanti',
    maintenance:  'https://www.honda.com.tr/otomobil/sahipler/bakim',
    brandName:    'Honda'
  },
  'nissan': {
    ownersManual: 'https://www.nissan.com.tr/sahipleri/kullanim-kilavuzu.html',
    techSpecs:    'https://www.nissan.com.tr/araclar.html',
    warranty:     'https://www.nissan.com.tr/sahipleri/garanti.html',
    maintenance:  'https://www.nissan.com.tr/sahipleri/bakim.html',
    brandName:    'Nissan'
  },
  'mazda': {
    ownersManual: 'https://www.mazda.com.tr/sahiplik/mazda-servisi/',
    techSpecs:    'https://www.mazda.com.tr/modeller/',
    warranty:     'https://www.mazda.com.tr/sahiplik/garanti/',
    maintenance:  'https://www.mazda.com.tr/sahiplik/mazda-servisi/',
    brandName:    'Mazda'
  },
  'suzuki': {
    ownersManual: 'https://www.suzuki.com.tr/otomobil/servis-ve-destek',
    techSpecs:    'https://www.suzuki.com.tr/otomobil/modeller',
    warranty:     'https://www.suzuki.com.tr/otomobil/servis-ve-destek',
    maintenance:  'https://www.suzuki.com.tr/otomobil/servis-ve-destek',
    brandName:    'Suzuki'
  },
  'mitsubishi': {
    ownersManual: 'https://www.mitsubishi-motors.com.tr/sahipler/kullanim-kilavuzu.html',
    techSpecs:    'https://www.mitsubishi-motors.com.tr/araclar.html',
    warranty:     'https://www.mitsubishi-motors.com.tr/sahipler/garanti.html',
    maintenance:  'https://www.mitsubishi-motors.com.tr/sahipler/bakim.html',
    brandName:    'Mitsubishi'
  },
  'subaru': {
    ownersManual: 'https://www.subaru.com.tr/sahipler',
    techSpecs:    'https://www.subaru.com.tr/modeller',
    warranty:     'https://www.subaru.com.tr/sahipler',
    maintenance:  'https://www.subaru.com.tr/sahipler',
    brandName:    'Subaru'
  },
  'isuzu': {
    ownersManual: 'https://www.isuzu.com.tr/servis',
    techSpecs:    'https://www.isuzu.com.tr/modeller',
    warranty:     'https://www.isuzu.com.tr/servis/garanti',
    maintenance:  'https://www.isuzu.com.tr/servis',
    brandName:    'Isuzu'
  },
  'daihatsu': {
    ownersManual: 'https://www.daihatsu.co.jp/service/',
    techSpecs:    'https://www.daihatsu.co.jp/lineup/',
    warranty:     'https://www.daihatsu.co.jp/service/',
    maintenance:  'https://www.daihatsu.co.jp/service/',
    brandName:    'Daihatsu'
  },
  'lexus': {
    ownersManual: 'https://www.lexus.com.tr/owners/',
    techSpecs:    'https://www.lexus.com.tr/models/',
    warranty:     'https://www.lexus.com.tr/owners/warranty/',
    maintenance:  'https://www.lexus.com.tr/owners/maintenance/',
    brandName:    'Lexus'
  },
  'infiniti': {
    ownersManual: 'https://www.infinitiusa.com/owners',
    techSpecs:    'https://www.infinitiusa.com/vehicles',
    warranty:     'https://www.infinitiusa.com/owners/warranty',
    maintenance:  'https://www.infinitiusa.com/owners/maintenance',
    brandName:    'Infiniti'
  },

  // ─── KORE MARKALARI ───
  'hyundai': {
    ownersManual: 'https://www.hyundai.com.tr/sahiplik/kullanim-kilavuzu',
    techSpecs:    'https://www.hyundai.com.tr/modeller',
    warranty:     'https://www.hyundai.com.tr/sahiplik/garanti',
    maintenance:  'https://www.hyundai.com.tr/sahiplik/bakim',
    brandName:    'Hyundai'
  },
  'kia': {
    ownersManual: 'https://www.kia.com/tr/servis-aksesuarlar/sahipler/kullanim-kilavuzu.html',
    techSpecs:    'https://www.kia.com/tr/modeller.html',
    warranty:     'https://www.kia.com/tr/servis-aksesuarlar/sahipler/7-yil-garanti.html',
    maintenance:  'https://www.kia.com/tr/servis-aksesuarlar/servis/bakim-plani.html',
    brandName:    'KIA'
  },
  'genesis': {
    ownersManual: 'https://www.genesis.com/tr/tr/owners.html',
    techSpecs:    'https://www.genesis.com/tr/tr/models.html',
    warranty:     'https://www.genesis.com/tr/tr/owners/warranty.html',
    maintenance:  'https://www.genesis.com/tr/tr/owners/service.html',
    brandName:    'Genesis'
  },
  'ssangyong': {
    ownersManual: 'https://www.kkmotor.com.tr/servis',
    techSpecs:    'https://www.kkmotor.com.tr/modeller',
    warranty:     'https://www.kkmotor.com.tr/servis/garanti',
    maintenance:  'https://www.kkmotor.com.tr/servis',
    brandName:    'SsangYong'
  },
  'daewoo': {
    ownersManual: null,
    techSpecs:    null,
    warranty:     null,
    maintenance:  null,
    brandName:    'Daewoo'
  },

  // ─── İSVEÇ MARKALARI ───
  'volvo': {
    ownersManual: 'https://www.volvocars.com/tr/support/manuals/',
    techSpecs:    'https://www.volvocars.com/tr/cars/',
    warranty:     'https://www.volvocars.com/tr/support/warranty/',
    maintenance:  'https://www.volvocars.com/tr/professional/services/service-plans/',
    brandName:    'Volvo'
  },
  'polestar': {
    ownersManual: 'https://www.polestar.com/tr/manual/',
    techSpecs:    'https://www.polestar.com/tr/',
    warranty:     'https://www.polestar.com/tr/service/warranty/',
    maintenance:  'https://www.polestar.com/tr/service/',
    brandName:    'Polestar'
  },
  'saab': {
    ownersManual: null,
    techSpecs:    null,
    warranty:     null,
    maintenance:  null,
    brandName:    'Saab'
  },

  // ─── İNGİLİZ MARKALARI ───
  'jaguar': {
    ownersManual: 'https://www.jaguar.com/owners/manuals.html',
    techSpecs:    'https://www.jaguar.com/all-models.html',
    warranty:     'https://www.jaguar.com/owners/warranty.html',
    maintenance:  'https://www.jaguar.com/owners/service.html',
    brandName:    'Jaguar'
  },
  'land-rover': {
    ownersManual: 'https://www.landrover.com/owners/manuals.html',
    techSpecs:    'https://www.landrover.com/all-models.html',
    warranty:     'https://www.landrover.com/owners/warranty.html',
    maintenance:  'https://www.landrover.com/owners/service.html',
    brandName:    'Land Rover'
  },
  'bentley': {
    ownersManual: 'https://www.bentleymotors.com/en/world-of-bentley/ownership.html',
    techSpecs:    'https://www.bentleymotors.com/en/models.html',
    warranty:     'https://www.bentleymotors.com/en/world-of-bentley/ownership.html',
    maintenance:  'https://www.bentleymotors.com/en/world-of-bentley/ownership.html',
    brandName:    'Bentley'
  },
  'aston-martin': {
    ownersManual: 'https://www.astonmartin.com/en/ownership',
    techSpecs:    'https://www.astonmartin.com/en/models',
    warranty:     'https://www.astonmartin.com/en/ownership',
    maintenance:  'https://www.astonmartin.com/en/ownership',
    brandName:    'Aston Martin'
  },
  'rolls-royce': {
    ownersManual: 'https://www.rolls-roycemotorcars.com/en_GB/ownership.html',
    techSpecs:    'https://www.rolls-roycemotorcars.com/en_GB/models.html',
    warranty:     'https://www.rolls-roycemotorcars.com/en_GB/ownership.html',
    maintenance:  'https://www.rolls-roycemotorcars.com/en_GB/ownership.html',
    brandName:    'Rolls-Royce'
  },
  'mclaren': {
    ownersManual: 'https://www.mclaren.com/ownership/',
    techSpecs:    'https://www.mclaren.com/models/',
    warranty:     'https://www.mclaren.com/ownership/',
    maintenance:  'https://www.mclaren.com/ownership/',
    brandName:    'McLaren'
  },
  'lotus': {
    ownersManual: 'https://www.lotuscars.com/owners/',
    techSpecs:    'https://www.lotuscars.com/models/',
    warranty:     'https://www.lotuscars.com/owners/',
    maintenance:  'https://www.lotuscars.com/owners/',
    brandName:    'Lotus'
  },
  'mini': {
    ownersManual: 'https://www.mini.com.tr/tr_TR/home/owners-lounge.html',
    techSpecs:    'https://www.mini.com.tr/tr_TR/home/range.html',
    warranty:     'https://www.mini.com.tr/tr_TR/home/owners-lounge.html',
    maintenance:  'https://www.mini.com.tr/tr_TR/home/owners-lounge.html',
    brandName:    'MINI'
  },
  'rover': {
    ownersManual: null,
    techSpecs:    null,
    warranty:     null,
    maintenance:  null,
    brandName:    'Rover'
  },

  // ─── AMERİKAN MARKALARI ───
  'ford': {
    ownersManual: 'https://www.ford.com.tr/sahiplik/kullanim-kilavuzu',
    techSpecs:    'https://www.ford.com.tr/araclar',
    warranty:     'https://www.ford.com.tr/sahiplik/garanti',
    maintenance:  'https://www.ford.com.tr/sahiplik/servis-ve-bakim',
    brandName:    'Ford'
  },
  'chevrolet': {
    ownersManual: 'https://www.chevrolet.com/owners/manuals',
    techSpecs:    'https://www.chevrolet.com/cars',
    warranty:     'https://www.chevrolet.com/owners/warranty',
    maintenance:  'https://www.chevrolet.com/owners/service',
    brandName:    'Chevrolet'
  },
  'jeep': {
    ownersManual: 'https://www.jeep.com.tr/sahipler/kullanim-kilavuzu.html',
    techSpecs:    'https://www.jeep.com.tr/modeller.html',
    warranty:     'https://www.jeep.com.tr/sahipler/garanti.html',
    maintenance:  'https://www.jeep.com.tr/sahipler/servis.html',
    brandName:    'Jeep'
  },
  'dodge': {
    ownersManual: 'https://www.dodge.com/owners.html',
    techSpecs:    'https://www.dodge.com/vehicles.html',
    warranty:     'https://www.dodge.com/owners/warranty.html',
    maintenance:  'https://www.dodge.com/owners/service.html',
    brandName:    'Dodge'
  },
  'chrysler': {
    ownersManual: 'https://www.chrysler.com/owners.html',
    techSpecs:    'https://www.chrysler.com/vehicles.html',
    warranty:     'https://www.chrysler.com/owners/warranty.html',
    maintenance:  'https://www.chrysler.com/owners/service.html',
    brandName:    'Chrysler'
  },
  'ram': {
    ownersManual: 'https://www.ramtrucks.com/owners.html',
    techSpecs:    'https://www.ramtrucks.com/trucks.html',
    warranty:     'https://www.ramtrucks.com/owners/warranty.html',
    maintenance:  'https://www.ramtrucks.com/owners/service.html',
    brandName:    'RAM'
  },
  'cadillac': {
    ownersManual: 'https://www.cadillac.com/owners/manuals',
    techSpecs:    'https://www.cadillac.com/vehicles',
    warranty:     'https://www.cadillac.com/owners/warranty',
    maintenance:  'https://www.cadillac.com/owners/service',
    brandName:    'Cadillac'
  },
  'lincoln': {
    ownersManual: 'https://www.lincoln.com/owners/manuals',
    techSpecs:    'https://www.lincoln.com/vehicles',
    warranty:     'https://www.lincoln.com/owners/warranty',
    maintenance:  'https://www.lincoln.com/owners/service',
    brandName:    'Lincoln'
  },
  'tesla': {
    ownersManual: 'https://www.tesla.com/ownersmanual',
    techSpecs:    'https://www.tesla.com/models',
    warranty:     'https://www.tesla.com/support/vehicle-warranty',
    maintenance:  'https://www.tesla.com/support/car-maintenance',
    brandName:    'Tesla'
  },
  'rivian': {
    ownersManual: 'https://rivian.com/support/owners-guide',
    techSpecs:    'https://rivian.com/vehicles',
    warranty:     'https://rivian.com/support/warranty',
    maintenance:  'https://rivian.com/support/service',
    brandName:    'Rivian'
  },
  'lucid': {
    ownersManual: 'https://www.lucidmotors.com/owners-manual',
    techSpecs:    'https://www.lucidmotors.com/air',
    warranty:     'https://www.lucidmotors.com/warranty',
    maintenance:  'https://www.lucidmotors.com/service',
    brandName:    'Lucid'
  },

  // ─── ROMANYA / DİĞER AVRUPA ───
  'dacia': {
    ownersManual: 'https://www.dacia.com.tr/servis-aksesuarlar/my-dacia/kullanim-kilavuzu.html',
    techSpecs:    'https://www.dacia.com.tr/araclar.html',
    warranty:     'https://www.dacia.com.tr/servis-aksesuarlar/garanti.html',
    maintenance:  'https://www.dacia.com.tr/servis-aksesuarlar/bakim.html',
    brandName:    'Dacia'
  },
  'skoda': {
    ownersManual: 'https://www.skoda.com.tr/sahipler/kullanim-kilavuzu',
    techSpecs:    'https://www.skoda.com.tr/modeller',
    warranty:     'https://www.skoda.com.tr/sahipler/garanti',
    maintenance:  'https://www.skoda.com.tr/sahipler/bakim',
    brandName:    'Škoda'
  },
  'seat': {
    ownersManual: 'https://www.seat.com.tr/sahipler/kilavuz.html',
    techSpecs:    'https://www.seat.com.tr/modeller.html',
    warranty:     'https://www.seat.com.tr/sahipler/garanti.html',
    maintenance:  'https://www.seat.com.tr/sahipler/bakim.html',
    brandName:    'SEAT'
  },
  'cupra': {
    ownersManual: 'https://www.cupraofficial.com.tr/owners/manuals.html',
    techSpecs:    'https://www.cupraofficial.com.tr/models.html',
    warranty:     'https://www.cupraofficial.com.tr/owners/warranty.html',
    maintenance:  'https://www.cupraofficial.com.tr/owners/service.html',
    brandName:    'CUPRA'
  },
  'lada': {
    ownersManual: 'https://www.lada.ru/owners/',
    techSpecs:    'https://www.lada.ru/cars/',
    warranty:     'https://www.lada.ru/owners/warranty/',
    maintenance:  'https://www.lada.ru/owners/service/',
    brandName:    'Lada'
  },

  // ─── TÜRKİYE ───
  'togg': {
    ownersManual: 'https://www.togg.com.tr/destek',
    techSpecs:    'https://www.togg.com.tr/t10x',
    warranty:     'https://www.togg.com.tr/destek/garanti',
    maintenance:  'https://www.togg.com.tr/destek/servis',
    brandName:    'TOGG'
  },

  // ─── ÇİN MARKALARI ───
  'byd': {
    ownersManual: 'https://www.byd.com/tr/support',
    techSpecs:    'https://www.byd.com/tr',
    warranty:     'https://www.byd.com/tr/support',
    maintenance:  'https://www.byd.com/tr/support',
    brandName:    'BYD'
  },
  'chery': {
    ownersManual: 'https://www.chery.com.tr/servis',
    techSpecs:    'https://www.chery.com.tr/modeller',
    warranty:     'https://www.chery.com.tr/servis/garanti',
    maintenance:  'https://www.chery.com.tr/servis',
    brandName:    'Chery'
  },
  'omoda': {
    ownersManual: 'https://www.omoda.com.tr/servis',
    techSpecs:    'https://www.omoda.com.tr/modeller',
    warranty:     'https://www.omoda.com.tr/servis/garanti',
    maintenance:  'https://www.omoda.com.tr/servis',
    brandName:    'OMODA'
  },
  'mg': {
    ownersManual: 'https://www.mgmotor.com.tr/servis',
    techSpecs:    'https://www.mgmotor.com.tr/modeller',
    warranty:     'https://www.mgmotor.com.tr/servis/garanti',
    maintenance:  'https://www.mgmotor.com.tr/servis',
    brandName:    'MG'
  },
  'geely': {
    ownersManual: 'https://www.geely.com/support',
    techSpecs:    'https://www.geely.com/models',
    warranty:     'https://www.geely.com/support',
    maintenance:  'https://www.geely.com/support',
    brandName:    'Geely'
  },
  'gwm': {
    ownersManual: 'https://www.gwm-global.com/support',
    techSpecs:    'https://www.gwm-global.com/models',
    warranty:     'https://www.gwm-global.com/support',
    maintenance:  'https://www.gwm-global.com/support',
    brandName:    'GWM'
  },
  'changan': {
    ownersManual: 'https://www.changan.com.tr/servis',
    techSpecs:    'https://www.changan.com.tr/modeller',
    warranty:     'https://www.changan.com.tr/servis',
    maintenance:  'https://www.changan.com.tr/servis',
    brandName:    'Changan'
  },
  'gac': {
    ownersManual: 'https://www.gac-motor.com/support',
    techSpecs:    'https://www.gac-motor.com/models',
    warranty:     'https://www.gac-motor.com/support',
    maintenance:  'https://www.gac-motor.com/support',
    brandName:    'GAC'
  },
  'jac': {
    ownersManual: 'https://www.jac.com.tr/servis',
    techSpecs:    'https://www.jac.com.tr/modeller',
    warranty:     'https://www.jac.com.tr/servis',
    maintenance:  'https://www.jac.com.tr/servis',
    brandName:    'JAC'
  },
  'maxus': {
    ownersManual: 'https://www.maxus.com.tr/servis',
    techSpecs:    'https://www.maxus.com.tr/modeller',
    warranty:     'https://www.maxus.com.tr/servis',
    maintenance:  'https://www.maxus.com.tr/servis',
    brandName:    'Maxus'
  },
  'dfsk': {
    ownersManual: 'https://www.dfsk.com.tr/servis',
    techSpecs:    'https://www.dfsk.com.tr/modeller',
    warranty:     'https://www.dfsk.com.tr/servis',
    maintenance:  'https://www.dfsk.com.tr/servis',
    brandName:    'DFSK'
  },
  'wey': {
    ownersManual: 'https://www.wey.com/support',
    techSpecs:    'https://www.wey.com/models',
    warranty:     'https://www.wey.com/support',
    maintenance:  'https://www.wey.com/support',
    brandName:    'WEY'
  },

  // ─── HİNT MARKALARI ───
  'tata': {
    ownersManual: 'https://www.tatamotors.com/owners/',
    techSpecs:    'https://www.tatamotors.com/cars/',
    warranty:     'https://www.tatamotors.com/owners/',
    maintenance:  'https://www.tatamotors.com/owners/',
    brandName:    'Tata'
  },
  'proton': {
    ownersManual: 'https://www.proton.com/owners',
    techSpecs:    'https://www.proton.com/models',
    warranty:     'https://www.proton.com/owners',
    maintenance:  'https://www.proton.com/owners',
    brandName:    'Proton'
  },
  'iveco': {
    ownersManual: 'https://www.iveco.com/turkey/servis',
    techSpecs:    'https://www.iveco.com/turkey/araclar',
    warranty:     'https://www.iveco.com/turkey/servis',
    maintenance:  'https://www.iveco.com/turkey/servis',
    brandName:    'Iveco'
  },
};

/**
 * Belirli bir marka için doküman linklerini döndür
 * @param {string} brandSlug — marka slug'ı (ör: 'bmw', 'toyota')
 * @returns {Object} documents — { ownersManual, techSpecs, warranty, maintenance }
 */
function getVehicleDocuments(brandSlug) {
  const portal = BRAND_DOC_PORTALS[brandSlug];

  if (!portal) {
    // Bilinmeyen marka — genel Google arama linkleri
    return {
      ownersManual: null,
      techSpecs:    null,
      warranty:     null,
      maintenance:  null,
      brandName:    brandSlug,
      hasDocuments: false,
    };
  }

  return {
    ownersManual: portal.ownersManual,
    techSpecs:    portal.techSpecs,
    warranty:     portal.warranty,
    maintenance:  portal.maintenance,
    brandName:    portal.brandName,
    hasDocuments: !!(portal.ownersManual || portal.techSpecs || portal.warranty || portal.maintenance),
  };
}

module.exports = { getVehicleDocuments, BRAND_DOC_PORTALS };
