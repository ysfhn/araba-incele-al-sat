/**
 * Hub Content Generator
 * ─────────────────────
 * vehicle_hubs tablosunda kaydı olmayan marka/model kombinasyonları için
 * otomatik olarak zengin içerik üreten yardımcı modül.
 *
 * Marka segmenti, gövde tipi ve model adına göre gerçekçi varsayılan
 * teknik özellikler, editör yorumu, artı/eksi listesi üretir.
 *
 * CSV teknik verileri (boyut, ağırlık, bagaj, tork, hız) varsa
 * BODY_DEFAULTS yerine gerçek veri kullanılır.
 */

const { getRealDimensions } = require('../data/csv-tech-data');
const { getNcapResult } = require('../data/euro-ncap-data');

/* ═══════════════════════════════════════════════════════════════
   MARKA SEGMENTLERİ
   ═══════════════════════════════════════════════════════════════ */
const BRAND_SEGMENTS = {
  // Lüks / Premium
  'mercedes-benz': 'premium', 'bmw': 'premium', 'audi': 'premium',
  'lexus': 'premium', 'volvo': 'premium', 'infiniti': 'premium',
  'genesis': 'premium', 'lincoln': 'premium', 'cadillac': 'premium',
  'alfa-romeo': 'premium', 'ds': 'premium', 'polestar': 'premium',

  // Süper Lüks
  'porsche': 'super_premium', 'maserati': 'super_premium', 'jaguar': 'super_premium',
  'land-rover': 'super_premium', 'bentley': 'super_premium', 'rolls-royce': 'super_premium',
  'aston-martin': 'super_premium', 'ferrari': 'super_premium', 'lamborghini': 'super_premium',
  'mclaren': 'super_premium', 'lotus': 'super_premium', 'lucid': 'super_premium',

  // Elektrikli
  'tesla': 'electric', 'togg': 'electric', 'rivian': 'electric',
  'polestar': 'electric',

  // Japon Mainstream
  'toyota': 'mainstream', 'honda': 'mainstream', 'nissan': 'mainstream',
  'mazda': 'mainstream', 'subaru': 'mainstream', 'suzuki': 'mainstream',
  'mitsubishi': 'mainstream', 'daihatsu': 'mainstream', 'isuzu': 'mainstream',

  // Kore
  'hyundai': 'mainstream', 'kia': 'mainstream', 'ssangyong': 'mainstream',

  // Avrupa Mainstream
  'volkswagen': 'mainstream', 'renault': 'mainstream', 'peugeot': 'mainstream',
  'citroen': 'mainstream', 'opel': 'mainstream', 'skoda': 'mainstream',
  'seat': 'mainstream', 'fiat': 'mainstream', 'dacia': 'mainstream',

  // Amerikan
  'ford': 'mainstream', 'chevrolet': 'mainstream', 'jeep': 'mainstream',
  'dodge': 'mainstream', 'chrysler': 'mainstream', 'ram': 'mainstream',

  // Çin / Yeni Markalar
  'chery': 'value', 'mg': 'value', 'byd': 'value', 'geely': 'value',
  'changan': 'value', 'gac': 'value', 'gwm': 'value', 'jac': 'value',
  'omoda': 'value', 'dfsk': 'value', 'maxus': 'value', 'wey': 'value',
  'proton': 'value',

  // Diğer
  'tata': 'value', 'lada': 'value', 'rover': 'value', 'saab': 'mainstream',
  'lancia': 'mainstream', 'daewoo': 'value', 'iveco': 'commercial',
  'smart': 'city'
};

/* ═══════════════════════════════════════════════════════════════
   GÖVDE TİPİ VARSAYILAN ÖZELLİKLERİ
   ═══════════════════════════════════════════════════════════════ */
const BODY_DEFAULTS = {
  sedan: {
    length: '4650 mm', width: '1820 mm', height: '1450 mm', wheelbase: '2700 mm', weight: '1450 kg',
    fuel_consumption: '6.5L/100km', acceleration: '8.5 sn', top_speed: '220 km/s',
    icon: 'directions_car'
  },
  hatchback: {
    length: '4200 mm', width: '1790 mm', height: '1460 mm', wheelbase: '2600 mm', weight: '1280 kg',
    fuel_consumption: '5.8L/100km', acceleration: '9.2 sn', top_speed: '210 km/s',
    icon: 'directions_car'
  },
  suv: {
    length: '4600 mm', width: '1880 mm', height: '1680 mm', wheelbase: '2750 mm', weight: '1750 kg',
    fuel_consumption: '7.8L/100km', acceleration: '9.0 sn', top_speed: '200 km/s',
    icon: 'directions_car'
  },
  crossover: {
    length: '4400 mm', width: '1840 mm', height: '1620 mm', wheelbase: '2650 mm', weight: '1550 kg',
    fuel_consumption: '6.8L/100km', acceleration: '9.5 sn', top_speed: '195 km/s',
    icon: 'directions_car'
  },
  coupe: {
    length: '4500 mm', width: '1850 mm', height: '1380 mm', wheelbase: '2700 mm', weight: '1500 kg',
    fuel_consumption: '7.5L/100km', acceleration: '6.5 sn', top_speed: '250 km/s',
    icon: 'directions_car'
  },
  cabrio: {
    length: '4450 mm', width: '1840 mm', height: '1400 mm', wheelbase: '2680 mm', weight: '1600 kg',
    fuel_consumption: '7.8L/100km', acceleration: '7.0 sn', top_speed: '240 km/s',
    icon: 'directions_car'
  },
  station_wagon: {
    length: '4750 mm', width: '1830 mm', height: '1500 mm', wheelbase: '2790 mm', weight: '1550 kg',
    fuel_consumption: '6.8L/100km', acceleration: '8.8 sn', top_speed: '215 km/s',
    icon: 'directions_car'
  },
  minivan: {
    length: '4800 mm', width: '1890 mm', height: '1750 mm', wheelbase: '2900 mm', weight: '1800 kg',
    fuel_consumption: '8.2L/100km', acceleration: '10.5 sn', top_speed: '190 km/s',
    icon: 'airport_shuttle'
  },
  pickup: {
    length: '5300 mm', width: '1920 mm', height: '1800 mm', wheelbase: '3100 mm', weight: '2100 kg',
    fuel_consumption: '9.5L/100km', acceleration: '11.0 sn', top_speed: '175 km/s',
    icon: 'local_shipping'
  }
};

/* ═══════════════════════════════════════════════════════════════
   SEGMENT BAZLI FİYAT, MOTOR, BEYGİR
   ═══════════════════════════════════════════════════════════════ */
const SEGMENT_SPECS = {
  super_premium: {
    priceRange: [3000000, 15000000],
    engines: {
      sedan: { engine: '3.0L V6 Turbo', hp: 380, torque: '500 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      suv: { engine: '3.0L V6 Turbo', hp: 400, torque: '550 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      coupe: { engine: '4.0L V8 Turbo', hp: 500, torque: '650 Nm', transmission: '7 İleri PDK', fuel_type: 'benzin' },
      cabrio: { engine: '4.0L V8 Turbo', hp: 460, torque: '600 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      crossover: { engine: '3.0L V6 Turbo', hp: 360, torque: '500 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      hatchback: { engine: '2.0L Turbo', hp: 300, torque: '400 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      station_wagon: { engine: '3.0L V6 Turbo', hp: 370, torque: '500 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      minivan: { engine: '3.0L V6', hp: 280, torque: '350 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      pickup: { engine: '3.0L V6 Turbo Dizel', hp: 300, torque: '600 Nm', transmission: '8 İleri Otomatik', fuel_type: 'dizel' }
    },
    rating: [8.5, 9.5],
    prosCons: {
      pros: ['Üstün performans', 'Premium malzeme kalitesi', 'Göz alıcı tasarım', 'Gelişmiş teknoloji', 'Yüksek prestij'],
      cons: ['Çok yüksek fiyat', 'Pahalı bakım maliyetleri', 'Yüksek yakıt tüketimi']
    }
  },
  premium: {
    priceRange: [1200000, 5000000],
    engines: {
      sedan: { engine: '2.0L Turbo', hp: 190, torque: '320 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      suv: { engine: '2.0L Turbo', hp: 200, torque: '350 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      coupe: { engine: '3.0L Turbo', hp: 340, torque: '450 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      cabrio: { engine: '2.0L Turbo', hp: 258, torque: '400 Nm', transmission: '7 İleri Otomatik', fuel_type: 'benzin' },
      crossover: { engine: '2.0L Turbo', hp: 190, torque: '320 Nm', transmission: '7 İleri DCT', fuel_type: 'benzin' },
      hatchback: { engine: '2.0L Turbo', hp: 180, torque: '300 Nm', transmission: '7 İleri DSG', fuel_type: 'benzin' },
      station_wagon: { engine: '2.0L Turbo', hp: 200, torque: '340 Nm', transmission: '8 İleri Otomatik', fuel_type: 'benzin' },
      minivan: { engine: '2.0L Turbo', hp: 170, torque: '300 Nm', transmission: '8 İleri Otomatik', fuel_type: 'dizel' },
      pickup: { engine: '3.0L Turbo Dizel', hp: 258, torque: '550 Nm', transmission: '8 İleri Otomatik', fuel_type: 'dizel' }
    },
    rating: [7.5, 9.0],
    prosCons: {
      pros: ['Kaliteli iç mekan', 'Güçlü motor seçenekleri', 'Gelişmiş güvenlik', 'Premium sürüş deneyimi'],
      cons: ['Yüksek fiyat', 'Pahalı opsiyonlar', 'Bakım masrafları']
    }
  },
  electric: {
    priceRange: [1200000, 3500000],
    engines: {
      sedan: { engine: 'Elektrik Motor', hp: 280, torque: '400 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      suv: { engine: 'Dual Motor AWD', hp: 350, torque: '490 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      crossover: { engine: 'Elektrik Motor', hp: 250, torque: '380 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      hatchback: { engine: 'Elektrik Motor', hp: 200, torque: '310 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      coupe: { engine: 'Dual Motor AWD', hp: 400, torque: '580 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      cabrio: { engine: 'Elektrik Motor', hp: 250, torque: '350 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      station_wagon: { engine: 'Elektrik Motor', hp: 270, torque: '390 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      minivan: { engine: 'Elektrik Motor', hp: 220, torque: '350 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      pickup: { engine: 'Dual Motor AWD', hp: 400, torque: '600 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' }
    },
    rating: [7.0, 9.0],
    prosCons: {
      pros: ['Sıfır emisyon', 'Düşük işletme maliyeti', 'Anlık tork', 'Sessiz sürüş', 'OTA güncellemeler'],
      cons: ['Şarj altyapısı sınırlı', 'Uzun şarj süresi', 'Yüksek satın alma fiyatı', 'Menzil kaygısı']
    }
  },
  mainstream: {
    priceRange: [650000, 2500000],
    engines: {
      sedan: { engine: '1.5L Turbo', hp: 150, torque: '250 Nm', transmission: 'CVT', fuel_type: 'benzin' },
      suv: { engine: '1.6L Turbo', hp: 165, torque: '265 Nm', transmission: '7 İleri DCT', fuel_type: 'benzin' },
      crossover: { engine: '1.5L Turbo', hp: 150, torque: '240 Nm', transmission: 'CVT', fuel_type: 'benzin' },
      hatchback: { engine: '1.0L Turbo', hp: 110, torque: '200 Nm', transmission: '6 İleri Otomatik', fuel_type: 'benzin' },
      coupe: { engine: '2.0L Turbo', hp: 200, torque: '300 Nm', transmission: '6 İleri Manuel', fuel_type: 'benzin' },
      cabrio: { engine: '1.5L Turbo', hp: 160, torque: '250 Nm', transmission: '7 İleri DCT', fuel_type: 'benzin' },
      station_wagon: { engine: '1.5L Turbo', hp: 150, torque: '250 Nm', transmission: 'CVT', fuel_type: 'benzin' },
      minivan: { engine: '1.6L Turbo Dizel', hp: 136, torque: '320 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' },
      pickup: { engine: '2.4L Turbo Dizel', hp: 190, torque: '450 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' }
    },
    rating: [6.5, 8.5],
    prosCons: {
      pros: ['Uygun fiyat', 'Ekonomik yakıt tüketimi', 'Yaygın servis ağı', 'Pratik kullanım'],
      cons: ['Orta düzey malzeme kalitesi', 'Sınırlı performans', 'Bazı donanımlar eksik']
    }
  },
  value: {
    priceRange: [500000, 1500000],
    engines: {
      sedan: { engine: '1.5L', hp: 116, torque: '220 Nm', transmission: 'CVT', fuel_type: 'benzin' },
      suv: { engine: '1.5L Turbo', hp: 150, torque: '240 Nm', transmission: '6 İleri DCT', fuel_type: 'benzin' },
      crossover: { engine: '1.5L Turbo', hp: 145, torque: '230 Nm', transmission: 'CVT', fuel_type: 'benzin' },
      hatchback: { engine: '1.0L', hp: 95, torque: '170 Nm', transmission: '5 İleri Manuel', fuel_type: 'benzin' },
      coupe: { engine: '1.5L Turbo', hp: 160, torque: '250 Nm', transmission: '7 İleri DCT', fuel_type: 'benzin' },
      cabrio: { engine: '1.5L Turbo', hp: 145, torque: '230 Nm', transmission: '6 İleri Otomatik', fuel_type: 'benzin' },
      station_wagon: { engine: '1.5L Turbo', hp: 140, torque: '230 Nm', transmission: 'CVT', fuel_type: 'benzin' },
      minivan: { engine: '1.5L Turbo', hp: 150, torque: '230 Nm', transmission: '6 İleri DCT', fuel_type: 'benzin' },
      pickup: { engine: '2.0L Turbo Dizel', hp: 163, torque: '400 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' }
    },
    rating: [6.0, 8.0],
    prosCons: {
      pros: ['Rekabetçi fiyat', 'Zengin donanım', 'Geniş garanti', 'Fiyat-performans dengesi'],
      cons: ['Marka bilinirliği düşük', 'İkinci el değer kaybı', 'Sınırlı servis ağı']
    }
  },
  commercial: {
    priceRange: [900000, 4000000],
    engines: {
      sedan: { engine: '2.3L Turbo Dizel', hp: 160, torque: '400 Nm', transmission: '6 İleri Manuel', fuel_type: 'dizel' },
      suv: { engine: '2.3L Turbo Dizel', hp: 160, torque: '400 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' },
      crossover: { engine: '2.3L Turbo Dizel', hp: 160, torque: '400 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' },
      hatchback: { engine: '2.3L Turbo Dizel', hp: 140, torque: '350 Nm', transmission: '6 İleri Manuel', fuel_type: 'dizel' },
      coupe: { engine: '2.3L Turbo Dizel', hp: 160, torque: '400 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' },
      cabrio: { engine: '2.3L Turbo Dizel', hp: 160, torque: '400 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' },
      station_wagon: { engine: '2.3L Turbo Dizel', hp: 160, torque: '400 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' },
      minivan: { engine: '2.3L Turbo Dizel', hp: 160, torque: '400 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' },
      pickup: { engine: '3.0L Turbo Dizel', hp: 210, torque: '500 Nm', transmission: '6 İleri Otomatik', fuel_type: 'dizel' }
    },
    rating: [6.5, 8.0],
    prosCons: {
      pros: ['Yüksek dayanıklılık', 'Güçlü dizel motor', 'Yüksek taşıma kapasitesi', 'Uzun ömürlü'],
      cons: ['Binek konfor düzeyi düşük', 'Yüksek yakıt tüketimi', 'Sınırlı teknoloji']
    }
  },
  city: {
    priceRange: [400000, 1000000],
    engines: {
      sedan: { engine: '1.0L', hp: 71, torque: '90 Nm', transmission: '5 İleri Manuel', fuel_type: 'benzin' },
      suv: { engine: '1.0L Turbo', hp: 90, torque: '135 Nm', transmission: '6 İleri DCT', fuel_type: 'benzin' },
      crossover: { engine: '1.0L Turbo', hp: 90, torque: '135 Nm', transmission: '6 İleri DCT', fuel_type: 'benzin' },
      hatchback: { engine: 'Elektrik Motor', hp: 82, torque: '160 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      coupe: { engine: '1.0L Turbo', hp: 90, torque: '135 Nm', transmission: '6 İleri DCT', fuel_type: 'benzin' },
      cabrio: { engine: 'Elektrik Motor', hp: 82, torque: '160 Nm', transmission: 'Tek Vitesli', fuel_type: 'elektrik' },
      station_wagon: { engine: '1.0L Turbo', hp: 90, torque: '135 Nm', transmission: '6 İleri DCT', fuel_type: 'benzin' },
      minivan: { engine: '1.0L Turbo', hp: 90, torque: '135 Nm', transmission: '6 İleri DCT', fuel_type: 'benzin' },
      pickup: { engine: '1.0L Turbo', hp: 90, torque: '135 Nm', transmission: '6 İleri DCT', fuel_type: 'benzin' }
    },
    rating: [6.0, 8.0],
    prosCons: {
      pros: ['Kompakt boyut', 'Kolay park', 'Düşük işletme maliyeti', 'Çevik şehir içi kullanım'],
      cons: ['Sınırlı bagaj alanı', 'Şehirlerarası yetersiz', 'Dar iç hacim']
    }
  }
};

/* ═══════════════════════════════════════════════════════════════
   BODY TYPE TÜRKÇE İSİMLER
   ═══════════════════════════════════════════════════════════════ */
const BODY_TYPE_TR = {
  sedan: 'Sedan', hatchback: 'Hatchback', suv: 'SUV', crossover: 'Crossover',
  coupe: 'Coupé', cabrio: 'Cabrio', station_wagon: 'Station Wagon',
  minivan: 'Minivan', pickup: 'Pick-up'
};

/* ═══════════════════════════════════════════════════════════════
   EDİTÖR YORUM ŞABLONLARI
   ═══════════════════════════════════════════════════════════════ */
const REVIEW_TEMPLATES = {
  super_premium: {
    sedan: [
      '{brand} {model}, lüks sedan segmentinin en dikkat çekici modellerinden biri. Üstün performansı, son teknoloji donanımı ve göz alıcı tasarımıyla sınıfının en iyileri arasında yer alıyor.',
      '{brand} {model}, güç ve zarafetin mükemmel birleşimi. Premium malzeme kalitesi ve çığır açan teknolojileriyle rakiplerine fark atıyor.'
    ],
    suv: [
      '{brand} {model}, lüks SUV segmentinde performans ve konforun sınırlarını zorluyor. Güçlü motor seçenekleri ve sofistike iç mekanıyla ayrıcalıklı bir sürüş deneyimi sunuyor.',
      '{brand} {model}, her koşulda üstün performans sağlayan premium bir SUV. Geniş iç hacmi ve ileri teknolojisiyle dikkat çekiyor.'
    ],
    coupe: [
      '{brand} {model}, sportif tasarımı ve yüksek performansıyla otomobil tutkunlarının kalbini kazanan bir coupé. Motor gücü ve aerodinamik yapısıyla pist hissi yaşatıyor.',
      '{brand} {model}, saf sürüş tutkusu arayanlar için tasarlandı. Etkileyici performans rakamları ve baştan çıkarıcı tasarımıyla öne çıkıyor.'
    ],
    _default: [
      '{brand} {model}, premium segmentte fark yaratan bir model. Üstün mühendislik ve lüks donanımıyla sınıfının en iyileri arasında.',
      '{brand} {model}, {bodyType} segmentinde güç ve prestiji bir arada sunan özel bir araç.'
    ]
  },
  premium: {
    sedan: [
      '{brand} {model}, premium sedan segmentinin güçlü oyuncusu. Dengeli sürüş dinamikleri, kaliteli iç mekan malzemeleri ve zengin teknoloji paketiyle günlük kullanımda keyif veriyor.',
      '{brand} {model}, konfor ve performans arasında mükemmel bir denge kuruyor. Gelişmiş güvenlik sistemleri ve premium dokunuşlarıyla sınıfında öne çıkıyor.'
    ],
    suv: [
      '{brand} {model}, premium SUV segmentinde güçlü bir alternatif. Geniş iç hacmi, konforlu süspansiyonu ve güçlü motor seçenekleriyle aileler için ideal.',
      '{brand} {model}, şehir içi zarafet ile arazi kabiliyetini bir arada sunan premium bir SUV. Teknolojik donanımı ve güvenlik özellikleriyle dikkat çekiyor.'
    ],
    hatchback: [
      '{brand} {model}, kompakt segmente premium bir dokunuş katıyor. Çevik yapısı, kaliteli iç mekanı ve ekonomik motor seçenekleriyle şehir içi kullanım için biçilmiş kaftan.',
      '{brand} {model}, premium hatchback segmentinin güçlü temsilcisi. Sportif sürüş karakteri ve pratik kullanımı bir arada sunuyor.'
    ],
    _default: [
      '{brand} {model}, premium {bodyType} segmentinde güçlü bir seçenek. Kaliteli iç mekanı ve gelişmiş teknolojisiyle dikkat çekiyor.',
      '{brand} {model}, {bodyType} sınıfına premium bir bakış açısı getiriyor. Konfor ve performans dengesinde başarılı bir araç.'
    ]
  },
  electric: {
    _default: [
      '{brand} {model}, elektrikli araç dünyasının heyecan verici modellerinden biri. Anlık tork ile etkileyici performans sunarken sıfır emisyonla çevreci bir sürüş deneyimi sağlıyor.',
      '{brand} {model}, geleceğin otomobil teknolojisini bugünden yaşatan bir elektrikli araç. Sessiz sürüşü, düşük işletme maliyeti ve OTA güncellemeleriyle öne çıkıyor.',
      '{brand} {model}, elektrikli mobilite alanında güçlü bir seçenek. Yüksek menzili ve hızlı şarj desteğiyle günlük kullanımda pratiklik sunuyor.'
    ]
  },
  mainstream: {
    sedan: [
      '{brand} {model}, orta segment sedanlar arasında fiyat-performans dengesiyle öne çıkıyor. Ekonomik motor seçenekleri, geniş iç hacmi ve pratik kullanımıyla ailelerin favori aracı.',
      '{brand} {model}, güvenilirliği ve düşük işletme maliyetiyle tanınan popüler bir sedan. Konforlu sürüşü ve zengin donanım paketiyle dikkat çekiyor.'
    ],
    suv: [
      '{brand} {model}, C-SUV segmentinin güçlü temsilcisi. Geniş iç hacmi, modern tasarımı ve ekonomik motor seçenekleriyle ailelerin tercihi olmaya devam ediyor.',
      '{brand} {model}, her ihtiyaca cevap veren çok yönlü bir SUV. Şehir içi kullanımdan tatil yolculuklarına kadar konforlu bir deneyim sunuyor.'
    ],
    hatchback: [
      '{brand} {model}, kompakt segmentin en popüler modellerinden biri. Ekonomik yakıt tüketimi, çevik sürüş karakteri ve pratik iç mekanıyla şehirlinin vazgeçilmezi.',
      '{brand} {model}, günlük kullanım için ideal bir hatchback. Düşük işletme maliyeti ve geniş donanım paketiyle sınıfında fark yaratıyor.'
    ],
    crossover: [
      '{brand} {model}, kompakt crossover segmentinde popüler bir seçim. Yüksek sürüş pozisyonu, şık tasarımı ve pratik iç mekanıyla dikkat çekiyor.',
      '{brand} {model}, modern crossover anlayışını yansıtan dinamik bir araç. Çok yönlü yapısıyla hem şehirde hem uzun yolda keyif veriyor.'
    ],
    station_wagon: [
      '{brand} {model}, geniş bagaj hacmi ve konforlu yol tutuşuyla aileler için mükemmel bir tercih. Ekonomik motor seçenekleri ve pratik kullanımıyla öne çıkıyor.',
      '{brand} {model}, station wagon segmentinin güçlü temsilcisi. Geniş yükleme alanı ve konforlu sürüşüyle uzun yolculukların vazgeçilmezi.'
    ],
    minivan: [
      '{brand} {model}, aile ulaşımında konfor ve pratikliği bir araya getiren başarılı bir minivan. Geniş iç hacmi ve esnek koltuk düzeniyle her ihtiyaca cevap veriyor.',
      '{brand} {model}, büyük aileler için tasarlanmış çok yönlü bir araç. Geniş 7 kişilik yapısı ve konforlu süspansiyonuyla uzun yolculuklar için ideal.'
    ],
    pickup: [
      '{brand} {model}, iş ve günlük kullanımı birleştiren güçlü bir pick-up. Dayanıklı yapısı, yüksek çekiş kapasitesi ve geniş kasasıyla her koşulda güvenilir.',
      '{brand} {model}, pick-up segmentinin popüler modellerinden biri. Güçlü dizel motoruyla zorlu arazi koşullarında bile üstün performans sunuyor.'
    ],
    _default: [
      '{brand} {model}, segmentinde güvenilirliğiyle bilinen popüler bir araç. Ekonomik kullanımı ve geniş servis ağıyla günlük hayatın vazgeçilmezi.',
      '{brand} {model}, {bodyType} segmentinde dikkate değer bir seçenek. Pratik yapısı ve uygun fiyatıyla geniş bir kitleye hitap ediyor.'
    ]
  },
  value: {
    _default: [
      '{brand} {model}, fiyat-performans odaklı alıcılar için cazip bir seçenek. Rekabetçi fiyatı, zengin donanım paketi ve geniş garanti avantajıyla dikkat çekiyor.',
      '{brand} {model}, uygun bütçeyle kaliteli bir araç arayanlar için ideal bir tercih. Modern tasarımı ve teknolojik özellikleriyle segmentinde fark yaratıyor.',
      '{brand} {model}, yeni nesil otomobil anlayışının temsilcisi. Uygun fiyatına rağmen sunduğu özelliklerle şaşırtıyor.'
    ]
  },
  commercial: {
    _default: [
      '{brand} {model}, ticari araç segmentinde güvenilirliğiyle tanınan güçlü bir model. Yüksek taşıma kapasitesi ve dayanıklı yapısıyla profesyonel kullanım için tasarlandı.',
      '{brand} {model}, iş dünyasının güvenilir ortağı. Güçlü dizel motoruyla ağır yükleri kolayca taşırken düşük işletme maliyeti sunuyor.'
    ]
  },
  city: {
    _default: [
      '{brand} {model}, şehir içi kullanım için tasarlanmış kompakt ve çevik bir araç. Kolay park edilebilir boyutları ve düşük tüketimiyle ideal bir şehir arkadaşı.',
      '{brand} {model}, modern şehir yaşamının ihtiyaçlarına cevap veren pratik bir araç. Kompakt boyutları ve ekonomik yapısıyla günlük kullanımda keyif veriyor.'
    ]
  }
};

/* ═══════════════════════════════════════════════════════════════
   ANA FONKSİYON: generateHubContent
   ═══════════════════════════════════════════════════════════════ */

/**
 * @param {Object} brand - { id, name, slug, logo }
 * @param {Object} model - { id, brand_id, name, slug, body_type }
 * @param {Object} [variantOptions] - Wizard'dan gelen seçimler: { fuel, transmission, engine, package, bodyType, year }
 * @returns {Object} hub-benzeri veri nesnesi
 */
function generateHubContent(brand, model, variantOptions = {}) {
  const segment = BRAND_SEGMENTS[brand.slug] || 'mainstream';
  const bodyType = variantOptions.bodyType || model.body_type || 'sedan';
  const specs = SEGMENT_SPECS[segment] || SEGMENT_SPECS.mainstream;
  const bodyDefaults = BODY_DEFAULTS[bodyType] || BODY_DEFAULTS.sedan;

  // Yıl — wizard'dan gelen yıl veya mevcut yıl
  const currentYear = new Date().getFullYear();
  const selectedYear = variantOptions.year || currentYear;

  // Gerçek varyant verisinden motor bilgisi (pages.js'de çözümlendi, resolvedEngine olarak geçildi)
  const engineData = variantOptions.resolvedEngine || null;

  // Eğer gerçek varyant verisi bulunduysa motor bilgisini oradan al, yoksa segment default'u kullan
  let finalEngine, finalHp, finalTorque, finalTransmission, finalFuelType;
  
  if (engineData) {
    finalEngine = engineData.engine;
    finalHp = engineData.hp;
    // Torku gerçekçi hesapla: HP ve yakıt tipine dayalı formül (cc*0.1 yanlıştı)
    finalTorque = estimateTorque(engineData, variantOptions.fuel, segment);
    // Wizard'dan gelen şanzıman varsa onu kullan
    if (variantOptions.transmission) {
      const trMap = { 'otomatik': 'Otomatik', 'manuel': 'Manuel', 'yari-otomatik': 'Yarı Otomatik' };
      finalTransmission = trMap[variantOptions.transmission] || variantOptions.transmission;
    } else {
      finalTransmission = (specs.engines[bodyType] || specs.engines.sedan || {}).transmission || 'Otomatik';
    }
    // Wizard'dan gelen yakıt varsa onu kullan
    if (variantOptions.fuel) {
      const fuelMap = { 'benzin': 'Benzin', 'dizel': 'Dizel', 'hibrit': 'Hibrit', 'elektrik': 'Elektrik', 'lpg': 'LPG' };
      finalFuelType = fuelMap[variantOptions.fuel] || variantOptions.fuel;
    } else {
      finalFuelType = (specs.engines[bodyType] || specs.engines.sedan || {}).fuel_type || 'benzin';
    }
  } else {
    // Segment default motor verisi
    const defaultEngine = (specs.engines[bodyType]) || (specs.engines.sedan) || { engine: '1.5L', hp: 120, torque: '200 Nm', transmission: 'Otomatik', fuel_type: 'benzin' };
    finalEngine = defaultEngine.engine;
    finalHp = defaultEngine.hp;
    finalTorque = defaultEngine.torque;
    // Wizard'dan gelen şanzıman varsa onu kullan
    if (variantOptions.transmission) {
      const trMap = { 'otomatik': 'Otomatik', 'manuel': 'Manuel', 'yari-otomatik': 'Yarı Otomatik' };
      finalTransmission = trMap[variantOptions.transmission] || variantOptions.transmission;
    } else {
      finalTransmission = defaultEngine.transmission;
    }
    // Wizard'dan gelen yakıt varsa onu kullan
    if (variantOptions.fuel) {
      const fuelMap = { 'benzin': 'Benzin', 'dizel': 'Dizel', 'hibrit': 'Hibrit', 'elektrik': 'Elektrik', 'lpg': 'LPG' };
      finalFuelType = fuelMap[variantOptions.fuel] || variantOptions.fuel;
    } else {
      finalFuelType = defaultEngine.fuel_type;
    }
  }

  // Fiyat — segment range içinde deterministik (brand + model slug hashiyle)
  const hash = simpleHash(brand.slug + model.slug);
  const [minPrice, maxPrice] = specs.priceRange;
  const priceStep = 50000;
  const priceRange = maxPrice - minPrice;
  let avgPrice = minPrice + Math.round((hash % priceRange) / priceStep) * priceStep;

  // Yıla göre fiyat değer kaybı uygula
  // Her yıl için ortalama %7 değer kaybı (2. el piyasa gerçeği)
  const yearDiff = currentYear - selectedYear;
  if (yearDiff > 0) {
    const depreciationRate = getDepreciationRate(segment);
    const depreciationMultiplier = Math.pow(1 - depreciationRate, yearDiff);
    avgPrice = Math.round(avgPrice * depreciationMultiplier / priceStep) * priceStep;
    // Minimum fiyat: segment alt limitinin %15'i
    const floorPrice = Math.round(minPrice * 0.15 / priceStep) * priceStep;
    avgPrice = Math.max(avgPrice, floorPrice || priceStep);
  }

  // Rating — segment aralığında
  const [minRating, maxRating] = specs.rating;
  const ratingRange = (maxRating - minRating) * 10;
  const rating = minRating + ((hash % ratingRange) / 10);
  const editorRating = Math.round(rating * 10) / 10;

  // Editör yorumu
  const reviewTemplates = getReviewTemplates(segment, bodyType);
  const reviewIdx = hash % reviewTemplates.length;
  const bodyTypeTR = BODY_TYPE_TR[bodyType] || bodyType;
  const editorReview = reviewTemplates[reviewIdx]
    .replace(/{brand}/g, brand.name)
    .replace(/{model}/g, model.name)
    .replace(/{bodyType}/g, bodyTypeTR);

  // Artılar / Eksiler — body type'a göre özelleştirilmiş eklemeler
  const basePros = [...(specs.prosCons.pros)];
  const baseCons = [...(specs.prosCons.cons)];

  // Eski model yıl ise ek pro/con — başa ekle (slice'da kesilmesin)
  if (yearDiff >= 5) {
    basePros.unshift('İkinci el piyasada uygun fiyat');
    baseCons.unshift('Güncel güvenlik teknolojileri eksik olabilir');
  }

  // Gövde tipine özel eklemeler
  const bodyExtras = getBodyTypeExtras(bodyType);
  basePros.push(...bodyExtras.pros);
  baseCons.push(...bodyExtras.cons);

  // Elektrik ise tüketimi güncelle
  let fuelConsumption = bodyDefaults.fuel_consumption;
  if (finalFuelType === 'elektrik' || finalFuelType === 'Elektrik') {
    fuelConsumption = '0L/100km (' + (14 + (hash % 8)) + '.' + (hash % 10) + ' kWh)';
  } else if (finalFuelType === 'dizel' || finalFuelType === 'Dizel') {
    // Dizel genelde benzinden %15-20 daha ekonomik
    const baseConsumption = parseFloat(bodyDefaults.fuel_consumption);
    fuelConsumption = (baseConsumption * 0.82).toFixed(1) + 'L/100km';
  } else if (finalFuelType === 'hibrit' || finalFuelType === 'Hibrit') {
    // Hibrit benzinden %25-30 daha ekonomik
    const baseConsumption = parseFloat(bodyDefaults.fuel_consumption);
    fuelConsumption = (baseConsumption * 0.72).toFixed(1) + 'L/100km';
  } else if (finalFuelType === 'lpg' || finalFuelType === 'LPG') {
    // LPG tüketimi benzinden ~%15 fazla ama daha ucuz
    const baseConsumption = parseFloat(bodyDefaults.fuel_consumption);
    fuelConsumption = (baseConsumption * 1.15).toFixed(1) + 'L/100km (LPG)';
  }

  // Boyutlara hafif varyasyon — CSV gerçek verisi varsa onu kullan
  const realDims = getRealDimensions(brand.slug, model.slug);

  let lengthNum, widthNum, heightNum, wheelbaseNum, weightNum, trunkVolume, topSpeed;

  if (realDims) {
    // CSV'den gerçek veri var!
    lengthNum = realDims.length ? parseInt(realDims.length) : (parseInt(bodyDefaults.length) + (hash % 150) - 75);
    widthNum = realDims.width ? parseInt(realDims.width) : (parseInt(bodyDefaults.width) + (hash % 60) - 30);
    heightNum = realDims.height ? parseInt(realDims.height) : (parseInt(bodyDefaults.height) + (hash % 40) - 20);
    wheelbaseNum = realDims.wheelbase ? parseInt(realDims.wheelbase) : (parseInt(bodyDefaults.wheelbase) + (hash % 80) - 40);
    weightNum = realDims.weight ? parseInt(realDims.weight) : (parseInt(bodyDefaults.weight) + (hash % 200) - 100);
    trunkVolume = realDims.trunk_volume || getTrunkVolume(bodyType, hash);
    topSpeed = realDims.top_speed || adjustTopSpeed(bodyDefaults.top_speed, segment);

    // Gerçek tork verisi varsa ve hesaplanan tork yoksa veya düşükse, CSV'den al
    if (realDims.maxTork && (!finalTorque || finalTorque === '—')) {
      finalTorque = realDims.maxTork + ' Nm';
    }
  } else {
    // CSV verisi yok, eski davranış: body type defaults + hash varyasyon
    lengthNum = parseInt(bodyDefaults.length) + (hash % 150) - 75;
    widthNum = parseInt(bodyDefaults.width) + (hash % 60) - 30;
    heightNum = parseInt(bodyDefaults.height) + (hash % 40) - 20;
    wheelbaseNum = parseInt(bodyDefaults.wheelbase) + (hash % 80) - 40;
    weightNum = parseInt(bodyDefaults.weight) + (hash % 200) - 100;
    trunkVolume = getTrunkVolume(bodyType, hash);
    topSpeed = adjustTopSpeed(bodyDefaults.top_speed, segment);
  }

  // Güvenlik puanı (segment ve yıla göre, gerçek NCAP verisi varsa öncelikli)
  const safetyInfo = getSafetyInfo(segment, selectedYear, brand.slug, model.slug);

  return {
    brand_id: brand.id,
    model_id: model.id,
    year: selectedYear,
    avg_price: avgPrice,
    fuel_type: finalFuelType,
    engine: finalEngine,
    hp: engineData ? finalHp : finalHp + (hash % 30) - 15,
    torque: finalTorque,
    transmission: finalTransmission,
    acceleration: adjustAcceleration(bodyDefaults.acceleration, segment, bodyType),
    top_speed: topSpeed,
    fuel_consumption: fuelConsumption,
    length: lengthNum + ' mm',
    width: widthNum + ' mm',
    height: heightNum + ' mm',
    wheelbase: wheelbaseNum + ' mm',
    weight: weightNum + ' kg',
    trunk_volume: trunkVolume,
    safety_rating: safetyInfo.rating,
    safety_features: safetyInfo.features,
    ncap_data: safetyInfo.ncapData || null,
    editor_rating: editorRating,
    editor_review: editorReview,
    pros: JSON.stringify(basePros.slice(0, 5)),
    cons: JSON.stringify(baseCons.slice(0, 4)),
    image_url: getModelImage(brand.slug, bodyType),
    // Ek alanlar (view için)
    _generated: true,
    _segment: segment,
    _bodyTypeTR: bodyTypeTR,
    _yearInfo: getYearInfo(selectedYear, currentYear)
  };
}

/* ═══════════════════════════════════════════════════════════════
   YARDIMCI FONKSİYONLAR
   ═══════════════════════════════════════════════════════════════ */

function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function getReviewTemplates(segment, bodyType) {
  const segReviews = REVIEW_TEMPLATES[segment] || REVIEW_TEMPLATES.mainstream;
  return segReviews[bodyType] || segReviews._default || REVIEW_TEMPLATES.mainstream._default;
}

function getBodyTypeExtras(bodyType) {
  const extras = {
    suv:     { pros: ['Yüksek sürüş pozisyonu', 'Geniş bagaj hacmi'], cons: ['Yüksek yakıt tüketimi'] },
    sedan:   { pros: ['Aerodinamik tasarım', 'Konforlu yol tutuşu'], cons: ['Sınırlı arka koltuk alanı'] },
    hatchback: { pros: ['Pratik kullanım', 'Kolay park'], cons: ['Gürültü izolasyonu orta'] },
    crossover: { pros: ['Çok yönlü kullanım', 'Yüksek sürüş pozisyonu'], cons: ['Ne SUV ne sedan'] },
    coupe: { pros: ['Sportif tasarım', 'Keskin direksiyon'], cons: ['İki kapılı pratiklik sorunu'] },
    cabrio: { pros: ['Açık hava deneyimi', 'Dikkat çekici tasarım'], cons: ['Gürültü kapalı tavanda'] },
    station_wagon: { pros: ['Devasa bagaj hacmi', 'Konforlu uzun yolculuk'], cons: ['Hantal görünüm'] },
    minivan: { pros: ['7+ kişilik kapasite', 'Esnek koltuk düzeni'], cons: ['Sportif olmayan sürüş'] },
    pickup: { pros: ['Yüksek çekiş kapasitesi', 'Arazi kabiliyeti'], cons: ['Şehir içi kullanım zor'] }
  };
  return extras[bodyType] || { pros: [], cons: [] };
}

function adjustAcceleration(base, segment, bodyType) {
  const baseVal = parseFloat(base);
  const mods = { super_premium: -2.5, premium: -1.0, electric: -1.5, mainstream: 0, value: 0.5, commercial: 1.0, city: 1.5 };
  const bodyMods = { coupe: -1.0, cabrio: -0.5, pickup: 1.5, minivan: 1.0 };
  const v = baseVal + (mods[segment] || 0) + (bodyMods[bodyType] || 0);
  return Math.max(2.5, Math.round(v * 10) / 10) + ' sn';
}

function adjustTopSpeed(base, segment) {
  const baseVal = parseInt(base);
  const mods = { super_premium: 50, premium: 20, electric: -10, mainstream: 0, value: -10, commercial: -20, city: -30 };
  const v = baseVal + (mods[segment] || 0);
  return Math.max(140, v) + ' km/s';
}

/**
 * Gerçek varyant verisinden daha doğru tork tahmini
 * Eski formül: cc * 0.1 (yanlış — 1998cc = 200 Nm, gerçekte BMW 320i = 320 Nm)
 * Yeni: HP ve yakıt tipine göre gerçekçi tork/HP oranı kullanır
 */
function estimateTorque(engineData, fuelType, segment) {
  if (!engineData || !engineData.hp) return '—';

  const hp = engineData.hp;
  const cc = engineData.cc || 0;
  const fuel = (fuelType || '').toLowerCase();

  // Yakıt tipine göre tork/HP oranı (Nm per HP)
  // Dizel motorlar genelde daha yüksek tork üretir
  let torqueRatio;
  if (fuel === 'elektrik') {
    torqueRatio = 2.5; // Elektrik motorlar çok yüksek tork
  } else if (fuel === 'dizel') {
    torqueRatio = 2.0; // Dizel = yüksek tork
  } else if (fuel === 'hibrit') {
    torqueRatio = 1.8; // Hibrit
  } else {
    // Benzin — turbo mu doğal emişli mi?
    const engineName = (engineData.engine || '').toLowerCase();
    if (engineName.includes('turbo') || engineName.includes('tsi') || engineName.includes('tfsi') || engineName.includes('ecoboost')) {
      torqueRatio = 1.7; // Turbo benzin
    } else if (cc > 2500) {
      torqueRatio = 1.4; // Büyük doğal emişli
    } else {
      torqueRatio = 1.5; // Standart benzin
    }
  }

  // Segment düzeltmesi
  const segmentMod = {
    super_premium: 1.15, premium: 1.1, electric: 1.0,
    mainstream: 1.0, value: 0.95, commercial: 1.2, city: 0.9
  };
  torqueRatio *= (segmentMod[segment] || 1.0);

  // CC bilgisi varsa doğrulama yap — tork en az cc * 0.12 Nm olmalı (fiziksel alt sınır)
  let torque = Math.round(hp * torqueRatio);
  if (cc > 0) {
    const ccBasedMin = Math.round(cc * 0.12);
    const ccBasedMax = Math.round(cc * 0.35); // turbo dizel üst sınır
    torque = Math.max(torque, ccBasedMin);
    torque = Math.min(torque, ccBasedMax);
  }

  // 5'in katına yuvarla (daha gerçekçi görünür)
  torque = Math.round(torque / 5) * 5;

  return torque + ' Nm';
}

/**
 * Segment bazlı yıllık değer kaybı oranı
 * Lüks araçlar daha hızlı, ekonomik araçlar daha yavaş değer kaybeder
 */
function getDepreciationRate(segment) {
  const rates = {
    super_premium: 0.10,  // %10/yıl — lüks araçlar hızlı değer kaybeder
    premium: 0.08,        // %8/yıl
    electric: 0.09,       // %9/yıl — batarya endişesi
    mainstream: 0.07,     // %7/yıl — standart
    value: 0.06,          // %6/yıl — zaten ucuz, daha yavaş
    commercial: 0.05,     // %5/yıl — ticari araçlar yavaş kaybeder
    city: 0.07            // %7/yıl
  };
  return rates[segment] || 0.07;
}

/**
 * Gövde tipine göre bagaj hacmi (litre)
 */
function getTrunkVolume(bodyType, hash) {
  const baseVolumes = {
    sedan: { min: 420, max: 530 },
    hatchback: { min: 300, max: 400 },
    suv: { min: 450, max: 650 },
    crossover: { min: 380, max: 520 },
    coupe: { min: 350, max: 450 },
    cabrio: { min: 200, max: 320 },
    station_wagon: { min: 550, max: 700 },
    minivan: { min: 600, max: 900 },
    pickup: { min: 1000, max: 1500 }  // kasa hacmi
  };
  const vol = baseVolumes[bodyType] || baseVolumes.sedan;
  const range = vol.max - vol.min;
  const value = vol.min + (hash % range);
  return value + ' lt';
}

/**
 * Güvenlik bilgileri — önce gerçek Euro NCAP verisi, yoksa segment/yıl tahmini
 */
function getSafetyInfo(segment, year, brandSlug, modelSlug) {
  // Gerçek Euro NCAP verisi ara
  const ncap = getNcapResult(brandSlug, modelSlug);

  if (ncap) {
    // Gerçek NCAP verisi bulundu
    const features = [];

    // Temel güvenlik (her zaman mevcut)
    features.push('ABS', 'ESP/ESC', 'Çoklu Hava Yastığı');

    // NCAP puanlarına göre dinamik özellik ekleme
    if (ncap.safetyAssist >= 70) {
      features.push('Otomatik Acil Fren', 'Şerit Takip Asistanı');
    }
    if (ncap.safetyAssist >= 80) {
      features.push('Adaptif Hız Sabitleme', 'Şerit Takip Sistemi');
    }
    if (ncap.safetyAssist >= 85) {
      features.push('Kör Nokta Uyarısı');
    }
    if (ncap.safetyAssist >= 90) {
      features.push('360° Kamera');
    }
    if (ncap.pedestrian >= 70) {
      features.push('Yaya Algılama');
    }
    if (ncap.stars >= 5 && ncap.safetyAssist >= 85) {
      features.push('Yarı Otonom Sürüş (Level 2+)');
    }
    if (year >= 2014) features.push('Geri Görüş Kamerası');

    return {
      rating: ncap.stars + '/5 Euro NCAP',
      features: features,
      ncapData: {
        stars: ncap.stars,
        testYear: ncap.testYear,
        adult: ncap.adult,
        child: ncap.child,
        pedestrian: ncap.pedestrian,
        safetyAssist: ncap.safetyAssist,
        isReal: true
      }
    };
  }

  // Gerçek veri bulunamadı — segment ve yıla göre tahmin
  let stars;
  if (year >= 2020) {
    stars = segment === 'super_premium' || segment === 'premium' ? 5 : (segment === 'value' || segment === 'city') ? 4 : 5;
  } else if (year >= 2015) {
    stars = segment === 'super_premium' || segment === 'premium' ? 5 : (segment === 'value' || segment === 'city') ? 3 : 4;
  } else if (year >= 2010) {
    stars = segment === 'super_premium' || segment === 'premium' ? 4 : 3;
  } else {
    stars = segment === 'premium' ? 3 : 2;
  }

  // Yıla ve segmente göre güvenlik özellikleri
  const features = [];

  // Temel — tüm yıllar
  features.push('ABS', 'ESP/ESC');

  if (year >= 2010) {
    features.push('Çoklu Hava Yastığı');
  }
  if (year >= 2014) {
    features.push('Geri Görüş Kamerası');
    if (segment === 'premium' || segment === 'super_premium') {
      features.push('Şerit Takip Sistemi', 'Kör Nokta Uyarısı');
    }
  }
  if (year >= 2018) {
    features.push('Otomatik Acil Fren');
    if (segment !== 'value' && segment !== 'city') {
      features.push('Şerit Takip Asistanı');
    }
    if (segment === 'premium' || segment === 'super_premium') {
      features.push('Adaptif Hız Sabitleme', '360° Kamera');
    }
  }
  if (year >= 2022 && (segment === 'premium' || segment === 'super_premium')) {
    features.push('Yarı Otonom Sürüş (Level 2+)');
  }

  return {
    rating: stars + '/5 Euro NCAP',
    features: features,
    ncapData: null
  };
}

/**
 * Yıl bilgisi meta verisi
 */
function getYearInfo(selectedYear, currentYear) {
  const diff = currentYear - selectedYear;
  if (diff === 0) return { label: 'Sıfır', category: 'new' };
  if (diff <= 1) return { label: 'Yeni', category: 'new' };
  if (diff <= 3) return { label: 'Az Kullanılmış', category: 'recent' };
  if (diff <= 7) return { label: 'Orta Yaşlı', category: 'mid' };
  if (diff <= 15) return { label: 'Eski', category: 'old' };
  return { label: 'Klasik', category: 'classic' };
}


/* ═══════════════════════════════════════════════════════════════
   MARKA ÖZETİ ÜRETME (marka hub sayfası için)
   ═══════════════════════════════════════════════════════════════ */

/**
 * Bir markanın tüm modelleri için genel özet bilgileri üretir
 * @param {Object} brand
 * @param {Array} models
 * @returns {Object} Marka özet bilgisi
 */
function generateBrandSummary(brand, models) {
  const segment = BRAND_SEGMENTS[brand.slug] || 'mainstream';
  const specs = SEGMENT_SPECS[segment] || SEGMENT_SPECS.mainstream;
  const [minPrice, maxPrice] = specs.priceRange;

  // Gövde tipi dağılımı
  const bodyTypes = {};
  models.forEach(m => {
    const bt = m.body_type || 'sedan';
    bodyTypes[bt] = (bodyTypes[bt] || 0) + 1;
  });

  const segmentLabels = {
    super_premium: 'Süper Premium',
    premium: 'Premium',
    electric: 'Elektrikli',
    mainstream: 'Genel',
    value: 'Uygun Fiyatlı',
    commercial: 'Ticari',
    city: 'Şehir'
  };

  return {
    brandName: brand.name,
    brandSlug: brand.slug,
    segment: segmentLabels[segment] || 'Genel',
    modelCount: models.length,
    priceRange: { min: minPrice, max: maxPrice },
    bodyTypes,
    country: getBrandCountry(brand.slug)
  };
}

function getBrandCountry(slug) {
  const countries = {
    'bmw': 'Almanya', 'mercedes-benz': 'Almanya', 'audi': 'Almanya', 'volkswagen': 'Almanya',
    'porsche': 'Almanya', 'opel': 'Almanya', 'smart': 'Almanya',
    'toyota': 'Japonya', 'honda': 'Japonya', 'nissan': 'Japonya', 'mazda': 'Japonya',
    'subaru': 'Japonya', 'suzuki': 'Japonya', 'mitsubishi': 'Japonya', 'lexus': 'Japonya',
    'infiniti': 'Japonya', 'daihatsu': 'Japonya', 'isuzu': 'Japonya',
    'hyundai': 'Güney Kore', 'kia': 'Güney Kore', 'genesis': 'Güney Kore', 'ssangyong': 'Güney Kore',
    'renault': 'Fransa', 'peugeot': 'Fransa', 'citroen': 'Fransa', 'ds': 'Fransa',
    'fiat': 'İtalya', 'alfa-romeo': 'İtalya', 'maserati': 'İtalya', 'ferrari': 'İtalya',
    'lamborghini': 'İtalya', 'lancia': 'İtalya',
    'ford': 'ABD', 'chevrolet': 'ABD', 'jeep': 'ABD', 'dodge': 'ABD',
    'chrysler': 'ABD', 'cadillac': 'ABD', 'lincoln': 'ABD', 'ram': 'ABD',
    'tesla': 'ABD', 'rivian': 'ABD', 'lucid': 'ABD',
    'volvo': 'İsveç', 'saab': 'İsveç', 'polestar': 'İsveç',
    'jaguar': 'İngiltere', 'land-rover': 'İngiltere', 'bentley': 'İngiltere',
    'rolls-royce': 'İngiltere', 'aston-martin': 'İngiltere', 'mclaren': 'İngiltere',
    'lotus': 'İngiltere', 'mg': 'İngiltere', 'rover': 'İngiltere',
    'seat': 'İspanya', 'dacia': 'Romanya', 'skoda': 'Çekya',
    'togg': 'Türkiye',
    'chery': 'Çin', 'byd': 'Çin', 'geely': 'Çin', 'changan': 'Çin',
    'gac': 'Çin', 'gwm': 'Çin', 'jac': 'Çin', 'omoda': 'Çin',
    'dfsk': 'Çin', 'maxus': 'Çin', 'wey': 'Çin',
    'tata': 'Hindistan', 'proton': 'Malezya', 'lada': 'Rusya', 'daewoo': 'Güney Kore',
    'iveco': 'İtalya'
  };
  return countries[slug] || '';
}


/* ═══════════════════════════════════════════════════════════════
   GEÇERLİ YAKIT TİPLERİ
   ═══════════════════════════════════════════════════════════════ */

/**
 * Marka segmentine ve gövde tipine göre seçilebilir yakıt tiplerini döndürür.
 * @param {string} brandSlug
 * @param {string} bodyType
 * @returns {string[]} Geçerli yakıt tipleri dizisi
 */
function getAvailableFuelTypes(brandSlug, bodyType) {
  const segment = BRAND_SEGMENTS[brandSlug] || 'mainstream';

  // Saf elektrikli markalar
  if (segment === 'electric') {
    return ['elektrik'];
  }

  // Ticari araçlar
  if (segment === 'commercial') {
    return ['dizel'];
  }

  // Şehir araçları (Smart vb.)
  if (segment === 'city') {
    return ['benzin', 'elektrik'];
  }

  // Süper premium — genellikle benzin, bazıları hibrit
  if (segment === 'super_premium') {
    // Bazı süper premium markalar hibrit/PHEV de sunuyor
    const hybridBrands = ['porsche', 'ferrari', 'mclaren', 'bentley', 'lamborghini'];
    if (hybridBrands.includes(brandSlug)) {
      return ['benzin', 'hibrit'];
    }
    return ['benzin'];
  }

  // Premium segment
  if (segment === 'premium') {
    const base = ['benzin', 'dizel', 'hibrit'];
    // Bazı premium markalar elektrikli de sunuyor
    const electricPremium = ['bmw', 'mercedes-benz', 'audi', 'volvo', 'lexus', 'genesis', 'polestar'];
    if (electricPremium.includes(brandSlug)) base.push('elektrik');
    return base;
  }

  // Mainstream segment — gövde tipine göre
  if (segment === 'mainstream') {
    const base = ['benzin'];

    // Pickup ve minivan dizel ağırlıklı
    if (bodyType === 'pickup') return ['dizel', 'benzin'];
    if (bodyType === 'minivan') return ['dizel', 'benzin', 'hibrit'];

    // SUV/crossover — geniş seçenek
    if (['suv', 'crossover'].includes(bodyType)) {
      return ['benzin', 'dizel', 'hibrit', 'lpg'];
    }

    // Sedan/hatchback/station_wagon
    base.push('dizel', 'lpg');
    // Bazı mainstream markalar hibrit/elektrik de sunuyor
    const hybridMainstream = ['toyota', 'honda', 'hyundai', 'kia', 'renault', 'ford', 'volkswagen', 'peugeot', 'citroen', 'opel', 'mazda', 'nissan', 'suzuki'];
    if (hybridMainstream.includes(brandSlug)) base.push('hibrit');
    const electricMainstream = ['hyundai', 'kia', 'volkswagen', 'renault', 'nissan', 'mg', 'byd'];
    if (electricMainstream.includes(brandSlug)) base.push('elektrik');
    return [...new Set(base)];
  }

  // Value segment
  if (segment === 'value') {
    const base = ['benzin'];
    if (['suv', 'crossover', 'pickup'].includes(bodyType)) base.push('dizel');
    base.push('lpg');
    // Bazı Çinli markalar elektrikli de sunuyor
    const electricValue = ['byd', 'mg', 'chery', 'geely', 'omoda', 'gac'];
    if (electricValue.includes(brandSlug)) {
      base.push('elektrik');
      base.push('hibrit');
    }
    return [...new Set(base)];
  }

  // Fallback
  return ['benzin', 'dizel', 'hibrit', 'elektrik', 'lpg'];
}


/* ═══════════════════════════════════════════════════════════════
   ARAÇ GÖRSELLERİ
   ═══════════════════════════════════════════════════════════════ */

/**
 * Marka ve gövde tipine göre temsili araç görseli URL'si döndürür
 * Unsplash kaynaklı telif-serbest görseller
 */
function getModelImage(brandSlug, bodyType) {
  // Marka-spesifik görseller (popüler markalar)
  const BRAND_IMAGES = {
    'bmw': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    'mercedes-benz': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    'audi': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    'volkswagen': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
    'toyota': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    'honda': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    'hyundai': 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=800&q=80',
    'kia': 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
    'ford': 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&q=80',
    'renault': 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80',
    'peugeot': 'https://images.unsplash.com/photo-1609838923664-1ea1920a9299?w=800&q=80',
    'citroen': 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80',
    'fiat': 'https://images.unsplash.com/photo-1595787572734-eed6a19b8560?w=800&q=80',
    'volvo': 'https://images.unsplash.com/photo-1611016186353-652a477e78e0?w=800&q=80',
    'nissan': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    'mazda': 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
    'skoda': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    'opel': 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80',
    'porsche': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    'tesla': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    'ferrari': 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
    'lamborghini': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    'maserati': 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80',
    'jaguar': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    'land-rover': 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    'jeep': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
    'chevrolet': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    'dodge': 'https://images.unsplash.com/photo-1594502184342-2e12f877aa73?w=800&q=80',
    'subaru': 'https://images.unsplash.com/photo-1626668011687-8a114cf5a34c?w=800&q=80',
    'mitsubishi': 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
    'suzuki': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80',
    'lexus': 'https://images.unsplash.com/photo-1622194993820-4d1e8b2af738?w=800&q=80',
    'infiniti': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    'genesis': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    'alfa-romeo': 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80',
    'bentley': 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
    'rolls-royce': 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
    'aston-martin': 'https://images.unsplash.com/photo-1596207891316-23751bc5e9b8?w=800&q=80',
    'mclaren': 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
    'lotus': 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
    'togg': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    'rivian': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    'lucid': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    'polestar': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    'dacia': 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=800&q=80',
    'seat': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    'ds': 'https://images.unsplash.com/photo-1609838923664-1ea1920a9299?w=800&q=80',
    'mg': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    'byd': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
    'chery': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    'geely': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    'cadillac': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    'lincoln': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    'chrysler': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    'ram': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
  };

  // Gövde tipine göre genel görseller (fallback)
  const BODY_TYPE_IMAGES = {
    sedan: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
    suv: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    hatchback: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
    crossover: 'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=800&q=80',
    coupe: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    cabrio: 'https://images.unsplash.com/photo-1596207891316-23751bc5e9b8?w=800&q=80',
    station_wagon: 'https://images.unsplash.com/photo-1611016186353-652a477e78e0?w=800&q=80',
    minivan: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
    pickup: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
  };

  return BRAND_IMAGES[brandSlug] || BODY_TYPE_IMAGES[bodyType] || BODY_TYPE_IMAGES.sedan;
}


module.exports = {
  generateHubContent,
  generateBrandSummary,
  getAvailableFuelTypes,
  getModelImage,
  BRAND_SEGMENTS,
  BODY_TYPE_TR,
  getBrandCountry
};
