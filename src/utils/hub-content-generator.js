/**
 * Hub Content Generator
 * ─────────────────────
 * vehicle_hubs tablosunda kaydı olmayan marka/model kombinasyonları için
 * otomatik olarak zengin içerik üreten yardımcı modül.
 *
 * Marka segmenti, gövde tipi ve model adına göre gerçekçi varsayılan
 * teknik özellikler, editör yorumu, artı/eksi listesi üretir.
 */

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
 * @returns {Object} hub-benzeri veri nesnesi
 */
function generateHubContent(brand, model) {
  const segment = BRAND_SEGMENTS[brand.slug] || 'mainstream';
  const bodyType = model.body_type || 'sedan';
  const specs = SEGMENT_SPECS[segment] || SEGMENT_SPECS.mainstream;
  const bodyDefaults = BODY_DEFAULTS[bodyType] || BODY_DEFAULTS.sedan;

  // Motor & performans
  const engineData = (specs.engines[bodyType]) || (specs.engines.sedan) || { engine: '1.5L', hp: 120, torque: '200 Nm', transmission: 'Otomatik', fuel_type: 'benzin' };

  // Fiyat — segment range içinde deterministik (brand + model slug hashiyle)
  const hash = simpleHash(brand.slug + model.slug);
  const [minPrice, maxPrice] = specs.priceRange;
  const priceStep = 50000;
  const priceRange = maxPrice - minPrice;
  const avgPrice = minPrice + Math.round((hash % priceRange) / priceStep) * priceStep;

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

  // Gövde tipine özel eklemeler
  const bodyExtras = getBodyTypeExtras(bodyType);
  basePros.push(...bodyExtras.pros);
  baseCons.push(...bodyExtras.cons);

  // Elektrik ise tüketimi güncelle
  let fuelConsumption = bodyDefaults.fuel_consumption;
  if (engineData.fuel_type === 'elektrik') {
    fuelConsumption = '0L/100km (' + (14 + (hash % 8)) + '.' + (hash % 10) + ' kWh)';
  }

  // Boyutlara hafif varyasyon
  const lengthNum = parseInt(bodyDefaults.length) + (hash % 150) - 75;
  const widthNum = parseInt(bodyDefaults.width) + (hash % 60) - 30;
  const heightNum = parseInt(bodyDefaults.height) + (hash % 40) - 20;
  const wheelbaseNum = parseInt(bodyDefaults.wheelbase) + (hash % 80) - 40;
  const weightNum = parseInt(bodyDefaults.weight) + (hash % 200) - 100;

  return {
    brand_id: brand.id,
    model_id: model.id,
    year: 2024,
    avg_price: avgPrice,
    fuel_type: engineData.fuel_type,
    engine: engineData.engine,
    hp: engineData.hp + (hash % 30) - 15,
    torque: engineData.torque,
    transmission: engineData.transmission,
    acceleration: adjustAcceleration(bodyDefaults.acceleration, segment, bodyType),
    top_speed: adjustTopSpeed(bodyDefaults.top_speed, segment),
    fuel_consumption: fuelConsumption,
    length: lengthNum + ' mm',
    width: widthNum + ' mm',
    height: heightNum + ' mm',
    wheelbase: wheelbaseNum + ' mm',
    weight: weightNum + ' kg',
    editor_rating: editorRating,
    editor_review: editorReview,
    pros: JSON.stringify(basePros.slice(0, 5)),
    cons: JSON.stringify(baseCons.slice(0, 4)),
    image_url: null,
    // Ek alanlar (view için)
    _generated: true,
    _segment: segment,
    _bodyTypeTR: bodyTypeTR
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

module.exports = {
  generateHubContent,
  generateBrandSummary,
  BRAND_SEGMENTS,
  BODY_TYPE_TR,
  getBrandCountry
};
