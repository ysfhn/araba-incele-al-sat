/**
 * Seed Script – Kapsamlı Marka / Model Veritabanı
 * Sahibinden.com referanslı tüm markalar ve modeller
 */

const { initializeDatabase, getDb, closeDatabase } = require('./database');

async function seed() {
  const db = await initializeDatabase();
  const isProd = process.env.NODE_ENV === 'production';

  /* ─── Yardımcı ─── */
  const run  = (sql, ...p) => isProd ? db.prepare(sql).run(...p) : db.prepare(sql).run(...p);
  const get  = (sql, ...p) => isProd ? db.prepare(sql).get(...p) : db.prepare(sql).get(...p);
  const all  = (sql, ...p) => isProd ? db.prepare(sql).all(...p) : db.prepare(sql).all(...p);
  const exec = (sql)       => isProd ? db.exec(sql) : db.exec(sql);

  console.log('🗑️  Mevcut veriler temizleniyor…');
  const tables = [
    'moderation_queue','vehicle_hubs','notifications','appointments','quote_requests',
    'reviews','forum_likes','forum_replies','forum_topics','forum_categories',
    'messages','favorites','listing_features','listing_images','listings',
    'models','brands','businesses','users'
  ];
  for (const t of tables) await run(`DELETE FROM ${t}`);

  /* Sequence sıfırlama */
  if (isProd) {
    for (const t of tables) {
      try { await exec(`ALTER SEQUENCE ${t}_id_seq RESTART WITH 1`); } catch {}
    }
  } else {
    // SQLite: sqlite_sequence tablosundaki auto-increment sayacını sıfırla
    try {
      for (const t of tables) await run(`DELETE FROM sqlite_sequence WHERE name = ?`, t);
    } catch {}
  }

  /* ═══════════════════════════════════════════════════════
     USERS
     ═══════════════════════════════════════════════════════ */
  console.log('👤 Kullanıcılar ekleniyor…');
  const insertUser = await db.prepare(`
    INSERT INTO users (email,password,name,phone,avatar,role,is_verified,profile_completion)
    VALUES (?,?,?,?,?,?,?,?)
  `);
  const bcrypt = require('bcryptjs');
  const hash = await bcrypt.hash('Test1234!', 10);

  const users = [
    ['admin@arabaal.com',       hash,'Admin Kullanıcı','05001112233',null,'admin',1,100],
    ['ahmet@test.com',          hash,'Ahmet Yılmaz','05321234567',null,'bireysel',1,85],
    ['mehmet@test.com',         hash,'Mehmet Kaya','05339876543',null,'bireysel',1,70],
    ['ayse@test.com',           hash,'Ayşe Demir','05551112233',null,'bireysel',1,60],
    ['fatma@test.com',          hash,'Fatma Çelik','05441234567',null,'bireysel',1,55],
    ['galeri@test.com',         hash,'Prestij Otomotiv','05301234567',null,'kurumsal',1,95],
    ['servis@test.com',         hash,'Oto Master Servis','05501234567',null,'kurumsal',1,90],
    ['ekspertiz@test.com',      hash,'Güven Ekspertiz','05201234567',null,'kurumsal',1,85],
    ['yedekparca@test.com',     hash,'Parça Market','05601234567',null,'kurumsal',1,80],
    ['ali@test.com',            hash,'Ali Özkan','05421234567',null,'bireysel',1,50],
  ];
  for (const u of users) await insertUser.run(...u);

  /* ═══════════════════════════════════════════════════════
     BRANDS  –  75+ marka (sahibinden referans)
     ═══════════════════════════════════════════════════════ */
  console.log('🏷️  Markalar ekleniyor…');
  const insertBrand = await db.prepare(`INSERT INTO brands (name,slug,logo) VALUES (?,?,?)`);

  const brandData = [
    ['Alfa Romeo','alfa-romeo','https://www.carlogos.org/car-logos/alfa-romeo-logo.png'],
    ['Aston Martin','aston-martin','https://www.carlogos.org/car-logos/aston-martin-logo.png'],
    ['Audi','audi','https://www.carlogos.org/car-logos/audi-logo.png'],
    ['Bentley','bentley','https://www.carlogos.org/car-logos/bentley-logo.png'],
    ['BMW','bmw','https://www.carlogos.org/car-logos/bmw-logo.png'],
    ['BYD','byd','https://www.carlogos.org/car-logos/byd-logo.png'],
    ['Cadillac','cadillac','https://www.carlogos.org/car-logos/cadillac-logo.png'],
    ['Changan','changan','https://www.carlogos.org/car-logos/changan-logo.png'],
    ['Chery','chery','https://www.carlogos.org/car-logos/chery-logo.png'],
    ['Chevrolet','chevrolet','https://www.carlogos.org/car-logos/chevrolet-logo.png'],
    ['Chrysler','chrysler','https://www.carlogos.org/car-logos/chrysler-logo.png'],
    ['Citroën','citroen','https://www.carlogos.org/car-logos/citroen-logo.png'],
    ['Cupra','cupra','https://www.carlogos.org/car-logos/cupra-logo.png'],
    ['Dacia','dacia','https://www.carlogos.org/car-logos/dacia-logo.png'],
    ['Daewoo','daewoo','https://www.carlogos.org/car-logos/daewoo-logo.png'],
    ['Daihatsu','daihatsu','https://www.carlogos.org/car-logos/daihatsu-logo.png'],
    ['DFSK','dfsk','https://www.carlogos.org/car-logos/dfsk-logo.png'],
    ['Dodge','dodge','https://www.carlogos.org/car-logos/dodge-logo.png'],
    ['DS','ds','https://www.carlogos.org/car-logos/ds-logo.png'],
    ['Ferrari','ferrari','https://www.carlogos.org/car-logos/ferrari-logo.png'],
    ['Fiat','fiat','https://www.carlogos.org/car-logos/fiat-logo.png'],
    ['Ford','ford','https://www.carlogos.org/car-logos/ford-logo.png'],
    ['GAC','gac','https://www.carlogos.org/car-logos/gac-logo.png'],
    ['Geely','geely','https://www.carlogos.org/car-logos/geely-logo.png'],
    ['Genesis','genesis','https://www.carlogos.org/car-logos/genesis-logo.png'],
    ['GWM','gwm','https://www.carlogos.org/car-logos/great-wall-logo.png'],
    ['Honda','honda','https://www.carlogos.org/car-logos/honda-logo.png'],
    ['Hyundai','hyundai','https://www.carlogos.org/car-logos/hyundai-logo.png'],
    ['Infiniti','infiniti','https://www.carlogos.org/car-logos/infiniti-logo.png'],
    ['Isuzu','isuzu','https://www.carlogos.org/car-logos/isuzu-logo.png'],
    ['Iveco','iveco','https://www.carlogos.org/car-logos/iveco-logo.png'],
    ['JAC','jac','https://www.carlogos.org/car-logos/jac-logo.png'],
    ['Jaguar','jaguar','https://www.carlogos.org/car-logos/jaguar-logo.png'],
    ['Jeep','jeep','https://www.carlogos.org/car-logos/jeep-logo.png'],
    ['Kia','kia','https://www.carlogos.org/car-logos/kia-logo.png'],
    ['Lada','lada','https://www.carlogos.org/car-logos/lada-logo.png'],
    ['Lamborghini','lamborghini','https://www.carlogos.org/car-logos/lamborghini-logo.png'],
    ['Lancia','lancia','https://www.carlogos.org/car-logos/lancia-logo.png'],
    ['Land Rover','land-rover','https://www.carlogos.org/car-logos/land-rover-logo.png'],
    ['Lexus','lexus','https://www.carlogos.org/car-logos/lexus-logo.png'],
    ['Lincoln','lincoln','https://www.carlogos.org/car-logos/lincoln-logo.png'],
    ['Lotus','lotus','https://www.carlogos.org/car-logos/lotus-logo.png'],
    ['Lucid','lucid','https://www.carlogos.org/car-logos/lucid-logo.png'],
    ['Maserati','maserati','https://www.carlogos.org/car-logos/maserati-logo.png'],
    ['Maxus','maxus','https://www.carlogos.org/car-logos/maxus-logo.png'],
    ['Mazda','mazda','https://www.carlogos.org/car-logos/mazda-logo.png'],
    ['McLaren','mclaren','https://www.carlogos.org/car-logos/mclaren-logo.png'],
    ['Mercedes-Benz','mercedes-benz','https://www.carlogos.org/car-logos/mercedes-benz-logo.png'],
    ['MG','mg','https://www.carlogos.org/car-logos/mg-logo.png'],
    ['Mini','mini','https://www.carlogos.org/car-logos/mini-logo.png'],
    ['Mitsubishi','mitsubishi','https://www.carlogos.org/car-logos/mitsubishi-logo.png'],
    ['Nissan','nissan','https://www.carlogos.org/car-logos/nissan-logo.png'],
    ['Omoda','omoda','https://www.carlogos.org/car-logos/omoda-logo.png'],
    ['Opel','opel','https://www.carlogos.org/car-logos/opel-logo.png'],
    ['Peugeot','peugeot','https://www.carlogos.org/car-logos/peugeot-logo.png'],
    ['Polestar','polestar','https://www.carlogos.org/car-logos/polestar-logo.png'],
    ['Porsche','porsche','https://www.carlogos.org/car-logos/porsche-logo.png'],
    ['Proton','proton','https://www.carlogos.org/car-logos/proton-logo.png'],
    ['RAM','ram','https://www.carlogos.org/car-logos/ram-logo.png'],
    ['Renault','renault','https://www.carlogos.org/car-logos/renault-logo.png'],
    ['Rivian','rivian','https://www.carlogos.org/car-logos/rivian-logo.png'],
    ['Rolls-Royce','rolls-royce','https://www.carlogos.org/car-logos/rolls-royce-logo.png'],
    ['Rover','rover','https://www.carlogos.org/car-logos/rover-logo.png'],
    ['Saab','saab','https://www.carlogos.org/car-logos/saab-logo.png'],
    ['Seat','seat','https://www.carlogos.org/car-logos/seat-logo.png'],
    ['Skoda','skoda','https://www.carlogos.org/car-logos/skoda-logo.png'],
    ['Smart','smart','https://www.carlogos.org/car-logos/smart-logo.png'],
    ['SsangYong','ssangyong','https://www.carlogos.org/car-logos/ssangyong-logo.png'],
    ['Subaru','subaru','https://www.carlogos.org/car-logos/subaru-logo.png'],
    ['Suzuki','suzuki','https://www.carlogos.org/car-logos/suzuki-logo.png'],
    ['Tata','tata','https://www.carlogos.org/car-logos/tata-logo.png'],
    ['Tesla','tesla','https://www.carlogos.org/car-logos/tesla-logo.png'],
    ['Togg','togg','/images/brands/togg.svg'],
    ['Toyota','toyota','https://www.carlogos.org/car-logos/toyota-logo.png'],
    ['Volkswagen','volkswagen','https://www.carlogos.org/car-logos/volkswagen-logo.png'],
    ['Volvo','volvo','https://www.carlogos.org/car-logos/volvo-logo.png'],
    ['Wey','wey','https://www.carlogos.org/car-logos/wey-logo.png'],
  ];
  for (const [name,slug,logo] of brandData) await insertBrand.run(name,slug,logo);

  /* ─── Brand ID lookup ─── */
  const getBrandId = async (slug) => {
    const row = await get('SELECT id FROM brands WHERE slug = ?', slug);
    return row ? row.id : null;
  };

  /* ═══════════════════════════════════════════════════════
     MODELS  –  Tüm markalar ve modeller
     body_type: sedan | suv | hatchback | crossover | coupe |
                cabrio | minivan | station_wagon | pickup
     ═══════════════════════════════════════════════════════ */
  console.log('🚗 Modeller ekleniyor…');
  const insertModel = await db.prepare(
    `INSERT INTO models (brand_id,name,slug,body_type) VALUES (?,?,?,?)`
  );

  // ── Alfa Romeo ──
  let bid = await getBrandId('alfa-romeo');
  const alfaModels = [
    ['Giulia','giulia','sedan'],['Giulietta','giulietta','hatchback'],
    ['Stelvio','stelvio','suv'],['Tonale','tonale','crossover'],
    ['MiTo','mito','hatchback'],['159','159','sedan'],
    ['156','156','sedan'],['147','147','hatchback'],
    ['GT','gt','coupe'],['Brera','brera','coupe'],
    ['Spider','spider','cabrio'],['4C','4c','coupe'],
    ['33 Stradale','33-stradale','coupe'],
  ];
  for (const [n,s,t] of alfaModels) await insertModel.run(bid,n,s,t);

  // ── Aston Martin ──
  bid = await getBrandId('aston-martin');
  const astonModels = [
    ['DB11','db11','coupe'],['DB12','db12','coupe'],
    ['DBX','dbx','suv'],['DBX707','dbx707','suv'],
    ['Vantage','vantage','coupe'],['DBS','dbs','coupe'],
    ['Rapide','rapide','sedan'],['DB9','db9','coupe'],
    ['Vanquish','vanquish','coupe'],['Valkyrie','valkyrie','coupe'],
  ];
  for (const [n,s,t] of astonModels) await insertModel.run(bid,n,s,t);

  // ── Audi ──
  bid = await getBrandId('audi');
  const audiModels = [
    ['A1','a1','hatchback'],['A3 Sedan','a3-sedan','sedan'],['A3 Sportback','a3-sportback','hatchback'],
    ['A4','a4','sedan'],['A4 Avant','a4-avant','station_wagon'],['A4 Allroad','a4-allroad','station_wagon'],
    ['A5 Sportback','a5-sportback','sedan'],['A5 Coupé','a5-coupe','coupe'],['A5 Cabriolet','a5-cabriolet','cabrio'],
    ['A6','a6','sedan'],['A6 Avant','a6-avant','station_wagon'],['A6 Allroad','a6-allroad','station_wagon'],
    ['A7 Sportback','a7-sportback','sedan'],['A8','a8','sedan'],
    ['Q2','q2','crossover'],['Q3','q3','crossover'],['Q3 Sportback','q3-sportback','crossover'],
    ['Q4 e-tron','q4-e-tron','suv'],['Q5','q5','suv'],['Q5 Sportback','q5-sportback','suv'],
    ['Q7','q7','suv'],['Q8','q8','suv'],['Q8 e-tron','q8-e-tron','suv'],
    ['e-tron GT','e-tron-gt','sedan'],
    ['TT Coupé','tt-coupe','coupe'],['TT Roadster','tt-roadster','cabrio'],
    ['R8','r8','coupe'],
    ['RS3','rs3','sedan'],['RS4 Avant','rs4-avant','station_wagon'],
    ['RS5','rs5','coupe'],['RS6 Avant','rs6-avant','station_wagon'],
    ['RS7','rs7','sedan'],['RS Q8','rs-q8','suv'],
    ['S3','s3','sedan'],['S4','s4','sedan'],['S5','s5','coupe'],
    ['S6','s6','sedan'],['S7','s7','sedan'],['S8','s8','sedan'],
    ['SQ5','sq5','suv'],['SQ7','sq7','suv'],['SQ8','sq8','suv'],
  ];
  for (const [n,s,t] of audiModels) await insertModel.run(bid,n,s,t);

  // ── Bentley ──
  bid = await getBrandId('bentley');
  const bentleyModels = [
    ['Continental GT','continental-gt','coupe'],['Continental GTC','continental-gtc','cabrio'],
    ['Flying Spur','flying-spur','sedan'],['Bentayga','bentayga','suv'],
    ['Bacalar','bacalar','cabrio'],['Mulliner','mulliner','coupe'],
  ];
  for (const [n,s,t] of bentleyModels) await insertModel.run(bid,n,s,t);

  // ── BMW ──
  bid = await getBrandId('bmw');
  const bmwModels = [
    ['1 Serisi','1-serisi','hatchback'],
    ['2 Serisi Gran Coupé','2-serisi-gran-coupe','sedan'],['2 Serisi Coupé','2-serisi-coupe','coupe'],
    ['2 Serisi Active Tourer','2-serisi-active-tourer','minivan'],
    ['3 Serisi','3-serisi','sedan'],['3 Serisi Touring','3-serisi-touring','station_wagon'],
    ['4 Serisi Gran Coupé','4-serisi-gran-coupe','sedan'],['4 Serisi Coupé','4-serisi-coupe','coupe'],
    ['4 Serisi Cabrio','4-serisi-cabrio','cabrio'],
    ['5 Serisi','5-serisi','sedan'],['5 Serisi Touring','5-serisi-touring','station_wagon'],
    ['6 Serisi GT','6-serisi-gt','sedan'],
    ['7 Serisi','7-serisi','sedan'],
    ['8 Serisi Gran Coupé','8-serisi-gran-coupe','sedan'],['8 Serisi Coupé','8-serisi-coupe','coupe'],
    ['8 Serisi Cabrio','8-serisi-cabrio','cabrio'],
    ['X1','x1','crossover'],['X2','x2','crossover'],['X3','x3','suv'],['X4','x4','suv'],
    ['X5','x5','suv'],['X6','x6','suv'],['X7','x7','suv'],['XM','xm','suv'],
    ['Z4','z4','cabrio'],
    ['i3','i3','hatchback'],['i4','i4','sedan'],['i5','i5','sedan'],
    ['i7','i7','sedan'],['iX','ix','suv'],['iX1','ix1','crossover'],
    ['iX3','ix3','suv'],
    ['M2','m2','coupe'],['M3','m3','sedan'],['M3 Touring','m3-touring','station_wagon'],
    ['M4','m4','coupe'],['M4 Cabrio','m4-cabrio','cabrio'],
    ['M5','m5','sedan'],['M8','m8','coupe'],
    ['X3 M','x3-m','suv'],['X4 M','x4-m','suv'],['X5 M','x5-m','suv'],['X6 M','x6-m','suv'],
  ];
  for (const [n,s,t] of bmwModels) await insertModel.run(bid,n,s,t);

  // ── BYD ──
  bid = await getBrandId('byd');
  const bydModels = [
    ['Atto 3','atto-3','crossover'],['Dolphin','dolphin','hatchback'],
    ['Han','han','sedan'],['Tang','tang','suv'],
    ['Seal','seal','sedan'],['Song Plus','song-plus','suv'],
    ['Yuan Plus','yuan-plus','crossover'],['Seal U','seal-u','suv'],
  ];
  for (const [n,s,t] of bydModels) await insertModel.run(bid,n,s,t);

  // ── Cadillac ──
  bid = await getBrandId('cadillac');
  const cadillacModels = [
    ['CT4','ct4','sedan'],['CT5','ct5','sedan'],
    ['Escalade','escalade','suv'],['XT4','xt4','crossover'],
    ['XT5','xt5','suv'],['XT6','xt6','suv'],
    ['Lyriq','lyriq','suv'],['CTS','cts','sedan'],
    ['ATS','ats','sedan'],['SRX','srx','suv'],
  ];
  for (const [n,s,t] of cadillacModels) await insertModel.run(bid,n,s,t);

  // ── Changan ──
  bid = await getBrandId('changan');
  const changanModels = [
    ['Alsvin','alsvin','sedan'],['CS35 Plus','cs35-plus','crossover'],
    ['CS55 Plus','cs55-plus','suv'],['CS75 Plus','cs75-plus','suv'],
    ['Uni-T','uni-t','crossover'],['Uni-K','uni-k','suv'],
    ['Uni-V','uni-v','sedan'],['Eado Plus','eado-plus','sedan'],
  ];
  for (const [n,s,t] of changanModels) await insertModel.run(bid,n,s,t);

  // ── Chery ──
  bid = await getBrandId('chery');
  const cheryModels = [
    ['Tiggo 4 Pro','tiggo-4-pro','crossover'],['Tiggo 7 Pro','tiggo-7-pro','suv'],
    ['Tiggo 8 Pro','tiggo-8-pro','suv'],['Arrizo 6','arrizo-6','sedan'],
    ['Arrizo 8','arrizo-8','sedan'],['Tiggo 2 Pro','tiggo-2-pro','crossover'],
    ['Exeed TXL','exeed-txl','suv'],['Exeed LX','exeed-lx','suv'],
    ['Exeed VX','exeed-vx','suv'],
  ];
  for (const [n,s,t] of cheryModels) await insertModel.run(bid,n,s,t);

  // ── Chevrolet ──
  bid = await getBrandId('chevrolet');
  const chevroletModels = [
    ['Aveo','aveo','sedan'],['Cruze','cruze','sedan'],
    ['Captiva','captiva','suv'],['Trax','trax','crossover'],
    ['Spark','spark','hatchback'],['Camaro','camaro','coupe'],
    ['Corvette','corvette','coupe'],['Tahoe','tahoe','suv'],
    ['Equinox','equinox','suv'],['Blazer','blazer','suv'],
    ['Malibu','malibu','sedan'],['Suburban','suburban','suv'],
    ['Traverse','traverse','suv'],['Colorado','colorado','pickup'],
    ['Silverado','silverado','pickup'],
  ];
  for (const [n,s,t] of chevroletModels) await insertModel.run(bid,n,s,t);

  // ── Chrysler ──
  bid = await getBrandId('chrysler');
  const chryslerModels = [
    ['300C','300c','sedan'],['Pacifica','pacifica','minivan'],
    ['PT Cruiser','pt-cruiser','hatchback'],['Voyager','voyager','minivan'],
  ];
  for (const [n,s,t] of chryslerModels) await insertModel.run(bid,n,s,t);

  // ── Citroën ──
  bid = await getBrandId('citroen');
  const citroenModels = [
    ['C1','c1','hatchback'],['C3','c3','hatchback'],['C3 Aircross','c3-aircross','crossover'],
    ['C4','c4','hatchback'],['C4 X','c4-x','sedan'],['C4 Cactus','c4-cactus','crossover'],
    ['C5 Aircross','c5-aircross','suv'],['C5 X','c5-x','sedan'],
    ['C-Elysée','c-elysee','sedan'],
    ['Berlingo','berlingo','minivan'],['ë-C4','e-c4','hatchback'],
    ['ë-Berlingo','e-berlingo','minivan'],['ë-C3','e-c3','hatchback'],
    ['SpaceTourer','spacetourer','minivan'],
  ];
  for (const [n,s,t] of citroenModels) await insertModel.run(bid,n,s,t);

  // ── Cupra ──
  bid = await getBrandId('cupra');
  const cupraModels = [
    ['Formentor','formentor','crossover'],['Born','born','hatchback'],
    ['Leon','leon','hatchback'],['Leon Sportstourer','leon-sportstourer','station_wagon'],
    ['Ateca','ateca','suv'],['Tavascan','tavascan','suv'],
    ['Terramar','terramar','suv'],
  ];
  for (const [n,s,t] of cupraModels) await insertModel.run(bid,n,s,t);

  // ── Dacia ──
  bid = await getBrandId('dacia');
  const daciaModels = [
    ['Sandero','sandero','hatchback'],['Sandero Stepway','sandero-stepway','crossover'],
    ['Logan','logan','sedan'],['Duster','duster','suv'],
    ['Jogger','jogger','minivan'],['Spring','spring','hatchback'],
    ['Lodgy','lodgy','minivan'],['Dokker','dokker','minivan'],
  ];
  for (const [n,s,t] of daciaModels) await insertModel.run(bid,n,s,t);

  // ── Daewoo ──
  bid = await getBrandId('daewoo');
  const daewooModels = [
    ['Lanos','lanos','sedan'],['Nubira','nubira','sedan'],
    ['Matiz','matiz','hatchback'],['Lacetti','lacetti','sedan'],
    ['Kalos','kalos','hatchback'],['Leganza','leganza','sedan'],
  ];
  for (const [n,s,t] of daewooModels) await insertModel.run(bid,n,s,t);

  // ── Daihatsu ──
  bid = await getBrandId('daihatsu');
  const daihatsuModels = [
    ['Terios','terios','suv'],['Sirion','sirion','hatchback'],
    ['Cuore','cuore','hatchback'],['Materia','materia','minivan'],
  ];
  for (const [n,s,t] of daihatsuModels) await insertModel.run(bid,n,s,t);

  // ── DFSK ──
  bid = await getBrandId('dfsk');
  const dfskModels = [
    ['Glory 580','glory-580','suv'],['Glory 560','glory-560','suv'],
    ['Eagle 580','eagle-580','suv'],['500','500','hatchback'],
    ['Seres 3','seres-3','suv'],['Seres 5','seres-5','suv'],
  ];
  for (const [n,s,t] of dfskModels) await insertModel.run(bid,n,s,t);

  // ── Dodge ──
  bid = await getBrandId('dodge');
  const dodgeModels = [
    ['Challenger','challenger','coupe'],['Charger','charger','sedan'],
    ['Durango','durango','suv'],['Ram 1500','ram-1500','pickup'],
    ['Nitro','nitro','suv'],['Journey','journey','suv'],
    ['Viper','viper','coupe'],
  ];
  for (const [n,s,t] of dodgeModels) await insertModel.run(bid,n,s,t);

  // ── DS ──
  bid = await getBrandId('ds');
  const dsModels = [
    ['DS 3','ds-3','hatchback'],['DS 3 Crossback','ds-3-crossback','crossover'],
    ['DS 4','ds-4','hatchback'],['DS 5','ds-5','sedan'],
    ['DS 7','ds-7','suv'],['DS 9','ds-9','sedan'],
  ];
  for (const [n,s,t] of dsModels) await insertModel.run(bid,n,s,t);

  // ── Ferrari ──
  bid = await getBrandId('ferrari');
  const ferrariModels = [
    ['F8 Tributo','f8-tributo','coupe'],['F8 Spider','f8-spider','cabrio'],
    ['SF90 Stradale','sf90-stradale','coupe'],['SF90 Spider','sf90-spider','cabrio'],
    ['296 GTB','296-gtb','coupe'],['296 GTS','296-gts','cabrio'],
    ['Roma','roma','coupe'],['Roma Spider','roma-spider','cabrio'],
    ['812 Competizione','812-competizione','coupe'],
    ['Purosangue','purosangue','suv'],
    ['488 GTB','488-gtb','coupe'],['488 Spider','488-spider','cabrio'],
    ['Portofino M','portofino-m','cabrio'],
    ['LaFerrari','laferrari','coupe'],['California T','california-t','cabrio'],
  ];
  for (const [n,s,t] of ferrariModels) await insertModel.run(bid,n,s,t);

  // ── Fiat ──
  bid = await getBrandId('fiat');
  const fiatModels = [
    ['Egea Sedan','egea-sedan','sedan'],['Egea Hatchback','egea-hatchback','hatchback'],
    ['Egea Cross','egea-cross','crossover'],['Egea Station Wagon','egea-station-wagon','station_wagon'],
    ['500','500','hatchback'],['500X','500x','crossover'],['500L','500l','minivan'],
    ['500e','500e','hatchback'],
    ['Panda','panda','hatchback'],['Panda Cross','panda-cross','crossover'],
    ['Tipo','tipo','sedan'],['Tipo Hatchback','tipo-hatchback','hatchback'],
    ['Tipo Station Wagon','tipo-station-wagon','station_wagon'],['Tipo Cross','tipo-cross','crossover'],
    ['Doblo','doblo','minivan'],['Fiorino','fiorino','minivan'],
    ['Punto','punto','hatchback'],['Linea','linea','sedan'],
    ['Bravo','bravo','hatchback'],['Freemont','freemont','suv'],
    ['124 Spider','124-spider','cabrio'],['Topolino','topolino','hatchback'],
    ['600e','600e','crossover'],
  ];
  for (const [n,s,t] of fiatModels) await insertModel.run(bid,n,s,t);

  // ── Ford ──
  bid = await getBrandId('ford');
  const fordModels = [
    ['Fiesta','fiesta','hatchback'],['Focus','focus','hatchback'],
    ['Focus Sedan','focus-sedan','sedan'],['Focus Station Wagon','focus-station-wagon','station_wagon'],
    ['Puma','puma','crossover'],['Kuga','kuga','suv'],
    ['Explorer','explorer','suv'],['Mustang','mustang','coupe'],
    ['Mustang Mach-E','mustang-mach-e','suv'],['Ranger','ranger','pickup'],
    ['Tourneo Connect','tourneo-connect','minivan'],['Tourneo Courier','tourneo-courier','minivan'],
    ['Tourneo Custom','tourneo-custom','minivan'],
    ['Transit Connect','transit-connect','minivan'],['Transit Courier','transit-courier','minivan'],
    ['Transit Custom','transit-custom','minivan'],
    ['Mondeo','mondeo','sedan'],['EcoSport','ecosport','crossover'],
    ['Edge','edge','suv'],['Galaxy','galaxy','minivan'],
    ['S-Max','s-max','minivan'],['B-Max','b-max','minivan'],
    ['C-Max','c-max','minivan'],['Bronco','bronco','suv'],
    ['F-150','f-150','pickup'],['Raptor','raptor','pickup'],
  ];
  for (const [n,s,t] of fordModels) await insertModel.run(bid,n,s,t);

  // ── GAC ──
  bid = await getBrandId('gac');
  const gacModels = [
    ['GS3','gs3','crossover'],['GS4','gs4','suv'],
    ['GS5','gs5','suv'],['GS8','gs8','suv'],
    ['Emkoo','emkoo','crossover'],['Aion S','aion-s','sedan'],
    ['Aion Y','aion-y','crossover'],
  ];
  for (const [n,s,t] of gacModels) await insertModel.run(bid,n,s,t);

  // ── Geely ──
  bid = await getBrandId('geely');
  const geelyModels = [
    ['Coolray','coolray','crossover'],['Atlas','atlas','suv'],
    ['Emgrand','emgrand','sedan'],['Monjaro','monjaro','suv'],
    ['Geometry C','geometry-c','hatchback'],['Okavango','okavango','suv'],
    ['Tugella','tugella','suv'],
  ];
  for (const [n,s,t] of geelyModels) await insertModel.run(bid,n,s,t);

  // ── Genesis ──
  bid = await getBrandId('genesis');
  const genesisModels = [
    ['G70','g70','sedan'],['G80','g80','sedan'],
    ['G90','g90','sedan'],['GV60','gv60','crossover'],
    ['GV70','gv70','suv'],['GV80','gv80','suv'],
    ['X','x','coupe'],
  ];
  for (const [n,s,t] of genesisModels) await insertModel.run(bid,n,s,t);

  // ── GWM ──
  bid = await getBrandId('gwm');
  const gwmModels = [
    ['Haval Jolion','haval-jolion','crossover'],['Haval H6','haval-h6','suv'],
    ['Ora 03','ora-03','hatchback'],['Ora 07','ora-07','sedan'],
    ['Poer','poer','pickup'],['Tank 300','tank-300','suv'],
    ['Tank 500','tank-500','suv'],['Wey Coffee 01','wey-coffee-01','suv'],
    ['Wey Coffee 02','wey-coffee-02','crossover'],
  ];
  for (const [n,s,t] of gwmModels) await insertModel.run(bid,n,s,t);

  // ── Honda ──
  bid = await getBrandId('honda');
  const hondaModels = [
    ['Civic Sedan','civic-sedan','sedan'],['Civic Hatchback','civic-hatchback','hatchback'],
    ['Civic Type R','civic-type-r','hatchback'],
    ['Accord','accord','sedan'],['City','city','sedan'],
    ['Jazz','jazz','hatchback'],
    ['CR-V','cr-v','suv'],['HR-V','hr-v','crossover'],
    ['ZR-V','zr-v','crossover'],
    ['e:Ny1','e-ny1','crossover'],['Honda e','honda-e','hatchback'],
    ['CR-Z','cr-z','coupe'],['S2000','s2000','cabrio'],
    ['NSX','nsx','coupe'],
  ];
  for (const [n,s,t] of hondaModels) await insertModel.run(bid,n,s,t);

  // ── Hyundai ──
  bid = await getBrandId('hyundai');
  const hyundaiModels = [
    ['i10','i10','hatchback'],['i20','i20','hatchback'],['i20 N','i20-n','hatchback'],
    ['i30','i30','hatchback'],['i30 N','i30-n','hatchback'],
    ['i30 Fastback','i30-fastback','sedan'],['i30 Wagon','i30-wagon','station_wagon'],
    ['Elantra','elantra','sedan'],['Accent','accent','sedan'],
    ['Bayon','bayon','crossover'],['Kona','kona','crossover'],
    ['Kona Electric','kona-electric','crossover'],
    ['Tucson','tucson','suv'],['Santa Fe','santa-fe','suv'],
    ['Palisade','palisade','suv'],
    ['Ioniq 5','ioniq-5','crossover'],['Ioniq 6','ioniq-6','sedan'],
    ['Nexo','nexo','suv'],['Staria','staria','minivan'],
    ['Veloster','veloster','coupe'],['N Vision 74','n-vision-74','coupe'],
  ];
  for (const [n,s,t] of hyundaiModels) await insertModel.run(bid,n,s,t);

  // ── Infiniti ──
  bid = await getBrandId('infiniti');
  const infinitiModels = [
    ['Q30','q30','hatchback'],['Q50','q50','sedan'],
    ['Q60','q60','coupe'],['Q70','q70','sedan'],
    ['QX30','qx30','crossover'],['QX50','qx50','suv'],
    ['QX55','qx55','suv'],['QX60','qx60','suv'],
    ['QX70','qx70','suv'],['QX80','qx80','suv'],
  ];
  for (const [n,s,t] of infinitiModels) await insertModel.run(bid,n,s,t);

  // ── Isuzu ──
  bid = await getBrandId('isuzu');
  const isuzuModels = [
    ['D-Max','d-max','pickup'],['MU-X','mu-x','suv'],
  ];
  for (const [n,s,t] of isuzuModels) await insertModel.run(bid,n,s,t);

  // ── Iveco ──
  bid = await getBrandId('iveco');
  const ivecoModels = [
    ['Daily','daily','minivan'],
  ];
  for (const [n,s,t] of ivecoModels) await insertModel.run(bid,n,s,t);

  // ── JAC ──
  bid = await getBrandId('jac');
  const jacModels = [
    ['JS2','js2','crossover'],['JS3','js3','crossover'],
    ['JS4','js4','suv'],['JS6','js6','suv'],
    ['J7','j7','sedan'],['e-JS1','e-js1','hatchback'],
    ['iEV7S','iev7s','crossover'],
  ];
  for (const [n,s,t] of jacModels) await insertModel.run(bid,n,s,t);

  // ── Jaguar ──
  bid = await getBrandId('jaguar');
  const jaguarModels = [
    ['XE','xe','sedan'],['XF','xf','sedan'],
    ['XF Sportbrake','xf-sportbrake','station_wagon'],
    ['XJ','xj','sedan'],
    ['F-Pace','f-pace','suv'],['E-Pace','e-pace','crossover'],
    ['I-Pace','i-pace','suv'],
    ['F-Type Coupé','f-type-coupe','coupe'],['F-Type Convertible','f-type-convertible','cabrio'],
  ];
  for (const [n,s,t] of jaguarModels) await insertModel.run(bid,n,s,t);

  // ── Jeep ──
  bid = await getBrandId('jeep');
  const jeepModels = [
    ['Renegade','renegade','crossover'],['Compass','compass','suv'],
    ['Cherokee','cherokee','suv'],['Grand Cherokee','grand-cherokee','suv'],
    ['Grand Cherokee L','grand-cherokee-l','suv'],
    ['Wrangler','wrangler','suv'],['Wrangler Unlimited','wrangler-unlimited','suv'],
    ['Gladiator','gladiator','pickup'],
    ['Avenger','avenger','crossover'],
    ['Commander','commander','suv'],
  ];
  for (const [n,s,t] of jeepModels) await insertModel.run(bid,n,s,t);

  // ── Kia ──
  bid = await getBrandId('kia');
  const kiaModels = [
    ['Picanto','picanto','hatchback'],['Rio','rio','hatchback'],
    ['Ceed','ceed','hatchback'],['Ceed Sportswagon','ceed-sportswagon','station_wagon'],
    ['ProCeed','proceed','station_wagon'],
    ['Cerato','cerato','sedan'],['Optima','optima','sedan'],
    ['K5','k5','sedan'],['K8','k8','sedan'],
    ['Stonic','stonic','crossover'],['Niro','niro','crossover'],
    ['Niro EV','niro-ev','crossover'],['Niro HEV','niro-hev','crossover'],
    ['Seltos','seltos','crossover'],
    ['Sportage','sportage','suv'],['Sorento','sorento','suv'],
    ['Carnival','carnival','minivan'],
    ['EV6','ev6','crossover'],['EV9','ev9','suv'],
    ['Stinger','stinger','sedan'],
    ['Soul','soul','crossover'],['XCeed','xceed','crossover'],
  ];
  for (const [n,s,t] of kiaModels) await insertModel.run(bid,n,s,t);

  // ── Lada ──
  bid = await getBrandId('lada');
  const ladaModels = [
    ['Vesta','vesta','sedan'],['Granta','granta','sedan'],
    ['Niva','niva','suv'],['XRAY','xray','crossover'],
    ['Kalina','kalina','hatchback'],['Priora','priora','sedan'],
    ['Samara','samara','hatchback'],
  ];
  for (const [n,s,t] of ladaModels) await insertModel.run(bid,n,s,t);

  // ── Lamborghini ──
  bid = await getBrandId('lamborghini');
  const lamborghiniModels = [
    ['Huracán','huracan','coupe'],['Huracán Spyder','huracan-spyder','cabrio'],
    ['Urus','urus','suv'],['Urus SE','urus-se','suv'],
    ['Revuelto','revuelto','coupe'],['Aventador','aventador','coupe'],
    ['Gallardo','gallardo','coupe'],['Murciélago','murcielago','coupe'],
    ['Temerario','temerario','coupe'],
  ];
  for (const [n,s,t] of lamborghiniModels) await insertModel.run(bid,n,s,t);

  // ── Lancia ──
  bid = await getBrandId('lancia');
  const lanciaModels = [
    ['Ypsilon','ypsilon','hatchback'],['Delta','delta','hatchback'],
    ['Thema','thema','sedan'],['Musa','musa','minivan'],
  ];
  for (const [n,s,t] of lanciaModels) await insertModel.run(bid,n,s,t);

  // ── Land Rover ──
  bid = await getBrandId('land-rover');
  const landRoverModels = [
    ['Defender 90','defender-90','suv'],['Defender 110','defender-110','suv'],
    ['Defender 130','defender-130','suv'],
    ['Discovery','discovery','suv'],['Discovery Sport','discovery-sport','suv'],
    ['Range Rover','range-rover','suv'],['Range Rover Sport','range-rover-sport','suv'],
    ['Range Rover Velar','range-rover-velar','suv'],
    ['Range Rover Evoque','range-rover-evoque','crossover'],
    ['Freelander','freelander','suv'],
  ];
  for (const [n,s,t] of landRoverModels) await insertModel.run(bid,n,s,t);

  // ── Lexus ──
  bid = await getBrandId('lexus');
  const lexusModels = [
    ['CT','ct','hatchback'],['IS','is','sedan'],
    ['ES','es','sedan'],['GS','gs','sedan'],
    ['LS','ls','sedan'],
    ['UX','ux','crossover'],['NX','nx','suv'],
    ['RX','rx','suv'],['GX','gx','suv'],['LX','lx','suv'],
    ['RC','rc','coupe'],['LC','lc','coupe'],
    ['RZ','rz','suv'],['LBX','lbx','crossover'],
  ];
  for (const [n,s,t] of lexusModels) await insertModel.run(bid,n,s,t);

  // ── Lincoln ──
  bid = await getBrandId('lincoln');
  const lincolnModels = [
    ['Corsair','corsair','crossover'],['Nautilus','nautilus','suv'],
    ['Aviator','aviator','suv'],['Navigator','navigator','suv'],
    ['Continental','continental','sedan'],
  ];
  for (const [n,s,t] of lincolnModels) await insertModel.run(bid,n,s,t);

  // ── Lotus ──
  bid = await getBrandId('lotus');
  const lotusModels = [
    ['Emira','emira','coupe'],['Eletre','eletre','suv'],
    ['Evija','evija','coupe'],['Elise','elise','cabrio'],
    ['Exige','exige','coupe'],['Evora','evora','coupe'],
  ];
  for (const [n,s,t] of lotusModels) await insertModel.run(bid,n,s,t);

  // ── Lucid ──
  bid = await getBrandId('lucid');
  const lucidModels = [
    ['Air','air','sedan'],['Air Grand Touring','air-grand-touring','sedan'],
    ['Gravity','gravity','suv'],
  ];
  for (const [n,s,t] of lucidModels) await insertModel.run(bid,n,s,t);

  // ── Maserati ──
  bid = await getBrandId('maserati');
  const maseratiModels = [
    ['Ghibli','ghibli','sedan'],['Quattroporte','quattroporte','sedan'],
    ['Levante','levante','suv'],['Grecale','grecale','suv'],
    ['MC20','mc20','coupe'],['MC20 Cielo','mc20-cielo','cabrio'],
    ['GranTurismo','granturismo','coupe'],['GranCabrio','grancabrio','cabrio'],
  ];
  for (const [n,s,t] of maseratiModels) await insertModel.run(bid,n,s,t);

  // ── Maxus ──
  bid = await getBrandId('maxus');
  const maxusModels = [
    ['D90','d90','suv'],['T60','t60','pickup'],
    ['Euniq 6','euniq-6','suv'],['Euniq 7','euniq-7','minivan'],
    ['Deliver 9','deliver-9','minivan'],['MIFA 9','mifa-9','minivan'],
  ];
  for (const [n,s,t] of maxusModels) await insertModel.run(bid,n,s,t);

  // ── Mazda ──
  bid = await getBrandId('mazda');
  const mazdaModels = [
    ['2','mazda2','hatchback'],['3 Sedan','3-sedan','sedan'],['3 Hatchback','3-hatchback','hatchback'],
    ['6','mazda6','sedan'],['6 Wagon','6-wagon','station_wagon'],
    ['CX-3','cx-3','crossover'],['CX-30','cx-30','crossover'],
    ['CX-5','cx-5','suv'],['CX-60','cx-60','suv'],
    ['CX-80','cx-80','suv'],['CX-90','cx-90','suv'],
    ['MX-5','mx-5','cabrio'],['MX-30','mx-30','crossover'],
  ];
  for (const [n,s,t] of mazdaModels) await insertModel.run(bid,n,s,t);

  // ── McLaren ──
  bid = await getBrandId('mclaren');
  const mclarenModels = [
    ['720S','720s','coupe'],['720S Spider','720s-spider','cabrio'],
    ['765LT','765lt','coupe'],['Artura','artura','coupe'],
    ['GT','gt','coupe'],['750S','750s','coupe'],
    ['570S','570s','coupe'],['600LT','600lt','coupe'],
    ['P1','p1','coupe'],['Senna','senna','coupe'],
  ];
  for (const [n,s,t] of mclarenModels) await insertModel.run(bid,n,s,t);

  // ── Mercedes-Benz ──
  bid = await getBrandId('mercedes-benz');
  const mercedesModels = [
    ['A Serisi','a-serisi','hatchback'],['A Serisi Sedan','a-serisi-sedan','sedan'],
    ['B Serisi','b-serisi','minivan'],
    ['C Serisi','c-serisi','sedan'],['C Serisi Estate','c-serisi-estate','station_wagon'],
    ['C Serisi Coupé','c-serisi-coupe','coupe'],['C Serisi Cabriolet','c-serisi-cabriolet','cabrio'],
    ['CLA','cla','sedan'],['CLA Shooting Brake','cla-shooting-brake','station_wagon'],
    ['CLS','cls','sedan'],
    ['E Serisi','e-serisi','sedan'],['E Serisi Estate','e-serisi-estate','station_wagon'],
    ['E Serisi Coupé','e-serisi-coupe','coupe'],['E Serisi Cabriolet','e-serisi-cabriolet','cabrio'],
    ['S Serisi','s-serisi','sedan'],['Maybach S Serisi','maybach-s-serisi','sedan'],
    ['GLA','gla','crossover'],['GLB','glb','crossover'],
    ['GLC','glc','suv'],['GLC Coupé','glc-coupe','suv'],
    ['GLE','gle','suv'],['GLE Coupé','gle-coupe','suv'],
    ['GLS','gls','suv'],['Maybach GLS','maybach-gls','suv'],
    ['G Serisi','g-serisi','suv'],
    ['EQA','eqa','crossover'],['EQB','eqb','crossover'],
    ['EQC','eqc','suv'],['EQE','eqe','sedan'],['EQE SUV','eqe-suv','suv'],
    ['EQS','eqs','sedan'],['EQS SUV','eqs-suv','suv'],
    ['EQV','eqv','minivan'],
    ['V Serisi','v-serisi','minivan'],['Vito','vito','minivan'],
    ['SL','sl','cabrio'],['SLC','slc','cabrio'],['SLK','slk','cabrio'],
    ['AMG GT','amg-gt','coupe'],['AMG GT 4-Kapı','amg-gt-4-kapi','sedan'],
    ['AMG One','amg-one','coupe'],
    ['AMG A 35','amg-a-35','hatchback'],['AMG A 45','amg-a-45','hatchback'],
    ['AMG C 43','amg-c-43','sedan'],['AMG C 63','amg-c-63','sedan'],
    ['AMG E 53','amg-e-53','sedan'],['AMG E 63','amg-e-63','sedan'],
    ['AMG S 63','amg-s-63','sedan'],
    ['AMG GLC 43','amg-glc-43','suv'],['AMG GLC 63','amg-glc-63','suv'],
    ['AMG GLE 53','amg-gle-53','suv'],['AMG GLE 63','amg-gle-63','suv'],
    ['AMG G 63','amg-g-63','suv'],
    ['X Serisi','x-serisi','pickup'],
  ];
  for (const [n,s,t] of mercedesModels) await insertModel.run(bid,n,s,t);

  // ── MG ──
  bid = await getBrandId('mg');
  const mgModels = [
    ['3','mg3','hatchback'],['4','mg4','hatchback'],
    ['5','mg5','station_wagon'],
    ['ZS','zs','crossover'],['ZS EV','zs-ev','crossover'],
    ['HS','hs','suv'],['Marvel R','marvel-r','suv'],
    ['EHS','ehs','suv'],['Cyberster','cyberster','cabrio'],
    ['MG One','mg-one','suv'],
  ];
  for (const [n,s,t] of mgModels) await insertModel.run(bid,n,s,t);

  // ── Mini ──
  bid = await getBrandId('mini');
  const miniModels = [
    ['Cooper 3 Kapı','cooper-3-kapi','hatchback'],['Cooper 5 Kapı','cooper-5-kapi','hatchback'],
    ['Cooper S','cooper-s','hatchback'],['Cooper SE','cooper-se','hatchback'],
    ['Clubman','clubman','station_wagon'],
    ['Countryman','countryman','crossover'],['Countryman SE','countryman-se','crossover'],
    ['John Cooper Works','john-cooper-works','hatchback'],
    ['JCW Countryman','jcw-countryman','crossover'],
    ['Cabrio','cabrio','cabrio'],['Paceman','paceman','coupe'],
    ['Aceman','aceman','crossover'],
  ];
  for (const [n,s,t] of miniModels) await insertModel.run(bid,n,s,t);

  // ── Mitsubishi ──
  bid = await getBrandId('mitsubishi');
  const mitsubishiModels = [
    ['ASX','asx','crossover'],['Eclipse Cross','eclipse-cross','crossover'],
    ['Outlander','outlander','suv'],['Outlander PHEV','outlander-phev','suv'],
    ['Colt','colt','hatchback'],['Space Star','space-star','hatchback'],
    ['Lancer','lancer','sedan'],['L200','l200','pickup'],
    ['Pajero','pajero','suv'],['Pajero Sport','pajero-sport','suv'],
  ];
  for (const [n,s,t] of mitsubishiModels) await insertModel.run(bid,n,s,t);

  // ── Nissan ──
  bid = await getBrandId('nissan');
  const nissanModels = [
    ['Micra','micra','hatchback'],['Note','note','hatchback'],
    ['Pulsar','pulsar','hatchback'],
    ['Juke','juke','crossover'],['Qashqai','qashqai','crossover'],
    ['X-Trail','x-trail','suv'],['Pathfinder','pathfinder','suv'],
    ['Murano','murano','suv'],
    ['Leaf','leaf','hatchback'],['Ariya','ariya','crossover'],
    ['Navara','navara','pickup'],['Patrol','patrol','suv'],
    ['GT-R','gt-r','coupe'],['370Z','370z','coupe'],
    ['Z','z','coupe'],
    ['Skyline','skyline','sedan'],
  ];
  for (const [n,s,t] of nissanModels) await insertModel.run(bid,n,s,t);

  // ── Omoda ──
  bid = await getBrandId('omoda');
  const omodaModels = [
    ['C5','c5','crossover'],['C7','c7','suv'],
    ['E5','e5','crossover'],
  ];
  for (const [n,s,t] of omodaModels) await insertModel.run(bid,n,s,t);

  // ── Opel ──
  bid = await getBrandId('opel');
  const opelModels = [
    ['Corsa','corsa','hatchback'],['Corsa-e','corsa-e','hatchback'],
    ['Astra','astra','hatchback'],['Astra Sedan','astra-sedan','sedan'],
    ['Astra Sports Tourer','astra-sports-tourer','station_wagon'],
    ['Crossland','crossland','crossover'],['Grandland','grandland','suv'],
    ['Mokka','mokka','crossover'],['Mokka-e','mokka-e','crossover'],
    ['Combo Life','combo-life','minivan'],['Zafira Life','zafira-life','minivan'],
    ['Insignia','insignia','sedan'],['Insignia Sports Tourer','insignia-sports-tourer','station_wagon'],
    ['Adam','adam','hatchback'],['Karl','karl','hatchback'],
  ];
  for (const [n,s,t] of opelModels) await insertModel.run(bid,n,s,t);

  // ── Peugeot ──
  bid = await getBrandId('peugeot');
  const peugeotModels = [
    ['108','108','hatchback'],['208','208','hatchback'],['e-208','e-208','hatchback'],
    ['301','301','sedan'],['308','308','hatchback'],
    ['308 SW','308-sw','station_wagon'],['408','408','sedan'],
    ['508','508','sedan'],['508 SW','508-sw','station_wagon'],
    ['2008','2008','crossover'],['e-2008','e-2008','crossover'],
    ['3008','3008','suv'],['e-3008','e-3008','suv'],
    ['5008','5008','suv'],['e-5008','e-5008','suv'],
    ['Rifter','rifter','minivan'],['Partner','partner','minivan'],
    ['Traveller','traveller','minivan'],['e-Rifter','e-rifter','minivan'],
    ['e-Traveller','e-traveller','minivan'],
    ['RCZ','rcz','coupe'],
  ];
  for (const [n,s,t] of peugeotModels) await insertModel.run(bid,n,s,t);

  // ── Polestar ──
  bid = await getBrandId('polestar');
  const polestarModels = [
    ['Polestar 2','polestar-2','sedan'],['Polestar 3','polestar-3','suv'],
    ['Polestar 4','polestar-4','suv'],['Polestar 5','polestar-5','sedan'],
  ];
  for (const [n,s,t] of polestarModels) await insertModel.run(bid,n,s,t);

  // ── Porsche ──
  bid = await getBrandId('porsche');
  const porscheModels = [
    ['911 Carrera','911-carrera','coupe'],['911 Turbo','911-turbo','coupe'],
    ['911 GT3','911-gt3','coupe'],['911 Targa','911-targa','coupe'],
    ['911 Cabriolet','911-cabriolet','cabrio'],
    ['718 Cayman','718-cayman','coupe'],['718 Boxster','718-boxster','cabrio'],
    ['Panamera','panamera','sedan'],['Panamera Sport Turismo','panamera-sport-turismo','station_wagon'],
    ['Cayenne','cayenne','suv'],['Cayenne Coupé','cayenne-coupe','suv'],
    ['Macan','macan','suv'],['Macan Electric','macan-electric','suv'],
    ['Taycan','taycan','sedan'],['Taycan Cross Turismo','taycan-cross-turismo','station_wagon'],
    ['Taycan Sport Turismo','taycan-sport-turismo','station_wagon'],
  ];
  for (const [n,s,t] of porscheModels) await insertModel.run(bid,n,s,t);

  // ── Proton ──
  bid = await getBrandId('proton');
  const protonModels = [
    ['Saga','saga','sedan'],['X50','x50','crossover'],
    ['X70','x70','suv'],['X90','x90','suv'],
    ['Persona','persona','sedan'],
  ];
  for (const [n,s,t] of protonModels) await insertModel.run(bid,n,s,t);

  // ── RAM ──
  bid = await getBrandId('ram');
  const ramModels = [
    ['1500','1500','pickup'],['2500','2500','pickup'],
    ['3500','3500','pickup'],
  ];
  for (const [n,s,t] of ramModels) await insertModel.run(bid,n,s,t);

  // ── Renault ──
  bid = await getBrandId('renault');
  const renaultModels = [
    ['Clio','clio','hatchback'],['Clio Grandtour','clio-grandtour','station_wagon'],
    ['Captur','captur','crossover'],['Arkana','arkana','crossover'],
    ['Kadjar','kadjar','suv'],['Austral','austral','suv'],
    ['Koleos','koleos','suv'],['Espace','espace','suv'],
    ['Megane','megane','hatchback'],['Megane Sedan','megane-sedan','sedan'],
    ['Megane Grandtour','megane-grandtour','station_wagon'],
    ['Megane E-Tech','megane-e-tech','crossover'],
    ['Scenic','scenic','minivan'],['Scenic E-Tech','scenic-e-tech','suv'],
    ['Talisman','talisman','sedan'],['Fluence','fluence','sedan'],
    ['Latitude','latitude','sedan'],
    ['Kangoo','kangoo','minivan'],['Kangoo E-Tech','kangoo-e-tech','minivan'],
    ['Trafic','trafic','minivan'],['Master','master','minivan'],
    ['Symbol','symbol','sedan'],['Taliant','taliant','sedan'],
    ['Twingo','twingo','hatchback'],['Zoe','zoe','hatchback'],
    ['5 E-Tech','5-e-tech','hatchback'],['Rafale','rafale','suv'],
    ['Symbioz','symbioz','suv'],
  ];
  for (const [n,s,t] of renaultModels) await insertModel.run(bid,n,s,t);

  // ── Rivian ──
  bid = await getBrandId('rivian');
  const rivianModels = [
    ['R1T','r1t','pickup'],['R1S','r1s','suv'],
    ['R2','r2','suv'],['R3','r3','crossover'],
  ];
  for (const [n,s,t] of rivianModels) await insertModel.run(bid,n,s,t);

  // ── Rolls-Royce ──
  bid = await getBrandId('rolls-royce');
  const rollsModels = [
    ['Ghost','ghost','sedan'],['Phantom','phantom','sedan'],
    ['Wraith','wraith','coupe'],['Dawn','dawn','cabrio'],
    ['Cullinan','cullinan','suv'],['Spectre','spectre','coupe'],
  ];
  for (const [n,s,t] of rollsModels) await insertModel.run(bid,n,s,t);

  // ── Rover ──
  bid = await getBrandId('rover');
  const roverModels = [
    ['75','75','sedan'],['45','45','sedan'],
    ['25','25','hatchback'],['416','416','sedan'],
  ];
  for (const [n,s,t] of roverModels) await insertModel.run(bid,n,s,t);

  // ── Saab ──
  bid = await getBrandId('saab');
  const saabModels = [
    ['9-3','9-3','sedan'],['9-3 SportCombi','9-3-sportcombi','station_wagon'],
    ['9-5','9-5','sedan'],['9-5 SportCombi','9-5-sportcombi','station_wagon'],
  ];
  for (const [n,s,t] of saabModels) await insertModel.run(bid,n,s,t);

  // ── Seat ──
  bid = await getBrandId('seat');
  const seatModels = [
    ['Ibiza','ibiza','hatchback'],['Leon','leon','hatchback'],
    ['Leon Sportstourer','leon-sportstourer','station_wagon'],
    ['Arona','arona','crossover'],['Ateca','ateca','suv'],
    ['Tarraco','tarraco','suv'],['Mii','mii','hatchback'],
    ['Toledo','toledo','sedan'],['Alhambra','alhambra','minivan'],
  ];
  for (const [n,s,t] of seatModels) await insertModel.run(bid,n,s,t);

  // ── Skoda ──
  bid = await getBrandId('skoda');
  const skodaModels = [
    ['Fabia','fabia','hatchback'],['Fabia Combi','fabia-combi','station_wagon'],
    ['Scala','scala','hatchback'],
    ['Octavia','octavia','sedan'],['Octavia Combi','octavia-combi','station_wagon'],
    ['Superb','superb','sedan'],['Superb Combi','superb-combi','station_wagon'],
    ['Kamiq','kamiq','crossover'],['Karoq','karoq','crossover'],
    ['Kodiaq','kodiaq','suv'],['Enyaq iV','enyaq-iv','suv'],
    ['Enyaq Coupé iV','enyaq-coupe-iv','suv'],
    ['Rapid','rapid','sedan'],['Roomster','roomster','minivan'],
    ['Yeti','yeti','crossover'],['Citigo','citigo','hatchback'],
    ['Elroq','elroq','crossover'],['Epiq','epiq','crossover'],
  ];
  for (const [n,s,t] of skodaModels) await insertModel.run(bid,n,s,t);

  // ── Smart ──
  bid = await getBrandId('smart');
  const smartModels = [
    ['ForTwo','fortwo','hatchback'],['ForFour','forfour','hatchback'],
    ['ForTwo Cabrio','fortwo-cabrio','cabrio'],
    ['#1','smart-1','crossover'],['#3','smart-3','crossover'],
  ];
  for (const [n,s,t] of smartModels) await insertModel.run(bid,n,s,t);

  // ── SsangYong ──
  bid = await getBrandId('ssangyong');
  const ssangyongModels = [
    ['Tivoli','tivoli','crossover'],['Korando','korando','suv'],
    ['Rexton','rexton','suv'],['Musso','musso','pickup'],
    ['Torres','torres','suv'],['Actyon','actyon','suv'],
    ['Kyron','kyron','suv'],['Rodius','rodius','minivan'],
  ];
  for (const [n,s,t] of ssangyongModels) await insertModel.run(bid,n,s,t);

  // ── Subaru ──
  bid = await getBrandId('subaru');
  const subaruModels = [
    ['Impreza','impreza','hatchback'],['WRX','wrx','sedan'],
    ['Crosstrek','crosstrek','crossover'],['XV','xv','crossover'],
    ['Forester','forester','suv'],['Outback','outback','station_wagon'],
    ['Legacy','legacy','sedan'],['Levorg','levorg','station_wagon'],
    ['BRZ','brz','coupe'],['Solterra','solterra','suv'],
  ];
  for (const [n,s,t] of subaruModels) await insertModel.run(bid,n,s,t);

  // ── Suzuki ──
  bid = await getBrandId('suzuki');
  const suzukiModels = [
    ['Swift','swift','hatchback'],['Baleno','baleno','hatchback'],
    ['Ignis','ignis','hatchback'],['Celerio','celerio','hatchback'],
    ['Vitara','vitara','crossover'],['S-Cross','s-cross','crossover'],
    ['Jimny','jimny','suv'],['Across','across','suv'],
    ['Swace','swace','station_wagon'],['SX4','sx4','crossover'],
    ['Grand Vitara','grand-vitara','suv'],['Ciaz','ciaz','sedan'],
    ['Alto','alto','hatchback'],
  ];
  for (const [n,s,t] of suzukiModels) await insertModel.run(bid,n,s,t);

  // ── Tata ──
  bid = await getBrandId('tata');
  const tataModels = [
    ['Nexon','nexon','crossover'],['Harrier','harrier','suv'],
    ['Safari','safari','suv'],['Punch','punch','crossover'],
    ['Tiago','tiago','hatchback'],['Altroz','altroz','hatchback'],
    ['Tigor','tigor','sedan'],
  ];
  for (const [n,s,t] of tataModels) await insertModel.run(bid,n,s,t);

  // ── Tesla ──
  bid = await getBrandId('tesla');
  const teslaModels = [
    ['Model 3','model-3','sedan'],['Model Y','model-y','crossover'],
    ['Model S','model-s','sedan'],['Model X','model-x','suv'],
    ['Cybertruck','cybertruck','pickup'],['Roadster','roadster','cabrio'],
  ];
  for (const [n,s,t] of teslaModels) await insertModel.run(bid,n,s,t);

  // ── Togg ──
  bid = await getBrandId('togg');
  const toggModels = [
    ['T10X','t10x','suv'],['T10F','t10f','sedan'],
    ['T10S','t10s','hatchback'],
  ];
  for (const [n,s,t] of toggModels) await insertModel.run(bid,n,s,t);

  // ── Toyota ──
  bid = await getBrandId('toyota');
  const toyotaModels = [
    ['Yaris','yaris','hatchback'],['Yaris Cross','yaris-cross','crossover'],
    ['GR Yaris','gr-yaris','hatchback'],
    ['Corolla','corolla','sedan'],['Corolla Hatchback','corolla-hatchback','hatchback'],
    ['Corolla Touring Sports','corolla-touring-sports','station_wagon'],['Corolla Cross','corolla-cross','crossover'],
    ['Camry','camry','sedan'],
    ['Aygo','aygo','hatchback'],['Aygo X','aygo-x','hatchback'],
    ['C-HR','c-hr','crossover'],['RAV4','rav4','suv'],
    ['Highlander','highlander','suv'],['Land Cruiser','land-cruiser','suv'],
    ['Land Cruiser Prado','land-cruiser-prado','suv'],
    ['Hilux','hilux','pickup'],
    ['Supra','supra','coupe'],['GR86','gr86','coupe'],
    ['bZ4X','bz4x','suv'],
    ['Proace City','proace-city','minivan'],['Proace City Verso','proace-city-verso','minivan'],
    ['Proace','proace','minivan'],['Proace Verso','proace-verso','minivan'],
    ['Prius','prius','hatchback'],['Mirai','mirai','sedan'],
    ['Crown','crown','sedan'],['Century','century','sedan'],
    ['Avensis','avensis','sedan'],['Auris','auris','hatchback'],
    ['Verso','verso','minivan'],
  ];
  for (const [n,s,t] of toyotaModels) await insertModel.run(bid,n,s,t);

  // ── Volkswagen ──
  bid = await getBrandId('volkswagen');
  const vwModels = [
    ['Polo','polo','hatchback'],['Golf','golf','hatchback'],
    ['Golf Variant','golf-variant','station_wagon'],['Golf GTI','golf-gti','hatchback'],
    ['Golf R','golf-r','hatchback'],['Golf GTE','golf-gte','hatchback'],
    ['ID.3','id-3','hatchback'],['ID.4','id-4','crossover'],
    ['ID.5','id-5','crossover'],['ID.7','id-7','sedan'],
    ['ID.Buzz','id-buzz','minivan'],
    ['T-Cross','t-cross','crossover'],['T-Roc','t-roc','crossover'],
    ['T-Roc Cabriolet','t-roc-cabriolet','cabrio'],
    ['Taigo','taigo','crossover'],
    ['Tiguan','tiguan','suv'],['Tiguan Allspace','tiguan-allspace','suv'],
    ['Touareg','touareg','suv'],
    ['Passat','passat','sedan'],['Passat Variant','passat-variant','station_wagon'],
    ['Arteon','arteon','sedan'],['Arteon Shooting Brake','arteon-shooting-brake','station_wagon'],
    ['Jetta','jetta','sedan'],['CC','cc','sedan'],
    ['Caddy','caddy','minivan'],['Multivan','multivan','minivan'],
    ['Transporter','transporter','minivan'],['Caravelle','caravelle','minivan'],
    ['Amarok','amarok','pickup'],
    ['up!','up','hatchback'],['Scirocco','scirocco','coupe'],
    ['Eos','eos','cabrio'],['Beetle','beetle','hatchback'],
    ['Touran','touran','minivan'],['Sharan','sharan','minivan'],
  ];
  for (const [n,s,t] of vwModels) await insertModel.run(bid,n,s,t);

  // ── Volvo ──
  bid = await getBrandId('volvo');
  const volvoModels = [
    ['S60','s60','sedan'],['S90','s90','sedan'],
    ['V40','v40','hatchback'],['V40 Cross Country','v40-cross-country','crossover'],
    ['V60','v60','station_wagon'],['V60 Cross Country','v60-cross-country','station_wagon'],
    ['V90','v90','station_wagon'],['V90 Cross Country','v90-cross-country','station_wagon'],
    ['XC40','xc40','crossover'],['XC40 Recharge','xc40-recharge','crossover'],
    ['XC60','xc60','suv'],['XC90','xc90','suv'],
    ['C40 Recharge','c40-recharge','crossover'],
    ['EX30','ex30','crossover'],['EX90','ex90','suv'],
    ['EM90','em90','minivan'],
  ];
  for (const [n,s,t] of volvoModels) await insertModel.run(bid,n,s,t);

  // ── Wey ──
  bid = await getBrandId('wey');
  const weyModels = [
    ['Coffee 01','coffee-01','suv'],['Coffee 02','coffee-02','crossover'],
    ['Mocha','mocha','suv'],['Latte','latte','crossover'],
  ];
  for (const [n,s,t] of weyModels) await insertModel.run(bid,n,s,t);

  /* ═══════════════════════════════════════════════════════
     LISTINGS (12 örnek ilan)
     ═══════════════════════════════════════════════════════ */
  console.log('📋 İlanlar ekleniyor…');

  /* Marka/Model ID lookup helper */
  const getModelId = async (brandSlug, modelSlug) => {
    const brand = await get('SELECT id FROM brands WHERE slug = ?', brandSlug);
    if (!brand) return { brandId: null, modelId: null };
    const model = await get('SELECT id FROM models WHERE brand_id = ? AND slug = ?', brand.id, modelSlug);
    return { brandId: brand.id, modelId: model ? model.id : null };
  };

  const insertListing = await db.prepare(`
    INSERT INTO listings (user_id,brand_id,model_id,title,slug,year,km,fuel_type,transmission,hp,cc,color,body_type,drive_type,description,price,city,district,status,is_featured,package_type,view_count,favorite_count,damage_free,trade_in)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `);
  const insertImage = await db.prepare(
    `INSERT INTO listing_images (listing_id,url,is_primary,sort_order) VALUES (?,?,?,?)`
  );
  const insertFeature = await db.prepare(
    `INSERT INTO listing_features (listing_id,feature) VALUES (?,?)`
  );

  // ilan 1
  let ids = await getModelId('bmw','3-serisi');
  await insertListing.run(2,ids.brandId,ids.modelId,'BMW 3 Serisi 320i First Edition Sport Line','bmw-3-serisi-320i-first-edition-2023',2023,15000,'benzin','otomatik',170,2000,'Beyaz','sedan','rwd','Garantili, boyasız, tramersiz.',1250000,'İstanbul','Kadıköy','active',1,'vip',1250,45,1,0);
  await insertImage.run(1,'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',1,0);
  await insertImage.run(1,'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800',0,1);
  for (const f of ['ABS','ESP','Geri Görüş Kamerası','Panoramik Cam Tavan','Deri Döşeme','LED Farlar','Apple CarPlay','Isıtmalı Koltuklar','Adaptif Cruise Control']) await insertFeature.run(1,f);

  // ilan 2
  ids = await getModelId('mercedes-benz','c-serisi');
  await insertListing.run(3,ids.brandId,ids.modelId,'Mercedes-Benz C Serisi C200 AMG','mercedes-c200-amg-2022',2022,28000,'benzin','otomatik',204,1500,'Siyah','sedan','rwd','Hatasız, boyasız, ilk sahibinden.',1450000,'Ankara','Çankaya','active',1,'premium',980,32,1,0);
  await insertImage.run(2,'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',1,0);
  for (const f of ['ABS','ESP','Geri Görüş Kamerası','Sunroof','Deri Döşeme','LED Farlar','Navigasyon','Isıtmalı Koltuklar']) await insertFeature.run(2,f);

  // ilan 3
  ids = await getModelId('volkswagen','golf');
  await insertListing.run(4,ids.brandId,ids.modelId,'Volkswagen Golf 1.5 TSI Style','vw-golf-15-tsi-style-2023',2023,8000,'benzin','otomatik',150,1500,'Gri','hatchback','fwd','Sıfır ayarında, garantili.',1050000,'İzmir','Konak','active',0,'premium',650,28,1,0);
  await insertImage.run(3,'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800',1,0);
  for (const f of ['ABS','ESP','Geri Görüş Kamerası','Dijital Gösterge','LED Farlar','Apple CarPlay','Şerit Takip','Park Sensörü']) await insertFeature.run(3,f);

  // ilan 4
  ids = await getModelId('toyota','corolla');
  await insertListing.run(5,ids.brandId,ids.modelId,'Toyota Corolla 1.8 Hybrid Dream','toyota-corolla-18-hybrid-dream-2024',2024,5000,'hibrit','otomatik',140,1800,'Mavi','sedan','fwd','2024 model, sıfır gibi, hibrit.',1175000,'İstanbul','Beşiktaş','active',1,'vip',1100,55,1,0);
  await insertImage.run(4,'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800',1,0);
  for (const f of ['ABS','ESP','Geri Görüş Kamerası','Adaptif Cruise Control','LED Farlar','Apple CarPlay','Android Auto','Toyota Safety Sense']) await insertFeature.run(4,f);

  // ilan 5
  ids = await getModelId('audi','a3-sedan');
  await insertListing.run(2,ids.brandId,ids.modelId,'Audi A3 Sedan 35 TFSI S Line','audi-a3-sedan-35-tfsi-2023',2023,20000,'benzin','otomatik',150,1500,'Kırmızı','sedan','fwd','S Line paket, matrix LED far.',1100000,'Bursa','Osmangazi','active',0,'free',420,18,1,1);
  await insertImage.run(5,'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',1,0);
  for (const f of ['ABS','ESP','Matrix LED Far','Spor Süspansiyon','Deri Döşeme','Navigasyon','Bang & Olufsen Ses','Virtual Cockpit']) await insertFeature.run(5,f);

  // ilan 6
  ids = await getModelId('hyundai','tucson');
  await insertListing.run(3,ids.brandId,ids.modelId,'Hyundai Tucson 1.6 CRDi Elite Plus','hyundai-tucson-16-crdi-2022',2022,45000,'dizel','otomatik',136,1600,'Beyaz','suv','fwd','Full + full, tüm opsiyonlar.',1050000,'Antalya','Muratpaşa','active',0,'premium',530,22,1,0);
  await insertImage.run(6,'https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=800',1,0);
  for (const f of ['ABS','ESP','360 Derece Kamera','Panoramik Cam Tavan','Deri Döşeme','LED Farlar','Kablosuz Şarj','Isıtmalı Direksiyon']) await insertFeature.run(6,f);

  // ilan 7
  ids = await getModelId('renault','clio');
  await insertListing.run(4,ids.brandId,ids.modelId,'Renault Clio 1.0 TCe Touch','renault-clio-10-tce-2021',2021,35000,'benzin','otomatik',100,1000,'Turuncu','hatchback','fwd','Ekonomik ve şık, bakımlı.',525000,'Konya','Selçuklu','active',0,'free',310,12,1,0);
  await insertImage.run(7,'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',1,0);
  for (const f of ['ABS','ESP','Geri Görüş Kamerası','7 inç Multimedya','LED Gündüz Farı','Yokuş Kalkış Desteği']) await insertFeature.run(7,f);

  // ilan 8
  ids = await getModelId('tesla','model-y');
  await insertListing.run(5,ids.brandId,ids.modelId,'Tesla Model Y Long Range AWD','tesla-model-y-long-range-2024',2024,3000,'elektrik','otomatik',350,0,'Beyaz','crossover','awd','Tam otonom paket, uzun menzil.',2100000,'İstanbul','Ataşehir','active',1,'vip',2100,88,1,0);
  await insertImage.run(8,'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',1,0);
  for (const f of ['Autopilot','Full Self-Driving','Panoramik Cam Tavan','15 inç Dokunmatik Ekran','Netflix & YouTube','Premium Ses','Isıtmalı Tüm Koltuklar','HEPA Filtre','OTA Güncelleme']) await insertFeature.run(8,f);

  // ilan 9
  ids = await getModelId('fiat','egea-sedan');
  await insertListing.run(10,ids.brandId,ids.modelId,'Fiat Egea 1.3 Multijet Urban Plus','fiat-egea-13-multijet-2020',2020,65000,'dizel','manuel',95,1300,'Gri','sedan','fwd','Ekonomik, bakımlı, masrafsız.',475000,'Gaziantep','Şahinbey','active',0,'free',280,8,1,0);
  await insertImage.run(9,'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',1,0);
  for (const f of ['ABS','ESP','Park Sensörü','Klima','Yol Bilgisayarı','Uzaktan Kilit']) await insertFeature.run(9,f);

  // ilan 10
  ids = await getModelId('ford','puma');
  await insertListing.run(2,ids.brandId,ids.modelId,'Ford Puma 1.0 EcoBoost ST-Line X','ford-puma-10-ecoboost-stline-2023',2023,12000,'benzin','otomatik',155,1000,'Yeşil','crossover','fwd','Mega Box, hibrit teknolojisi.',1020000,'İstanbul','Sarıyer','active',0,'premium',380,15,1,0);
  await insertImage.run(10,'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800',1,0);
  for (const f of ['ABS','ESP','Geri Görüş Kamerası','B&O Ses Sistemi','LED Farlar','FordPass Connect','Mega Box','Isıtmalı Ön Cam']) await insertFeature.run(10,f);

  // ilan 11
  ids = await getModelId('porsche','cayenne');
  await insertListing.run(6,ids.brandId,ids.modelId,'Porsche Cayenne 3.0 V6 Platinum Edition','porsche-cayenne-30-v6-2023',2023,8000,'benzin','otomatik',340,3000,'Siyah','suv','awd','Özel seri, hatasız, boyasız.',5950000,'İstanbul','Etiler','active',1,'vip',3200,120,1,0);
  await insertImage.run(11,'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',1,0);
  for (const f of ['ABS','ESP','Panoramik Cam Tavan','Bose Surround','Pnömatik Süspansiyon','21 inç Jant','Burmester Ses','Deri/Alcantara','Sport Chrono']) await insertFeature.run(11,f);

  // ilan 12
  ids = await getModelId('togg','t10x');
  await insertListing.run(3,ids.brandId,ids.modelId,'Togg T10X Uzun Menzil RWD','togg-t10x-uzun-menzil-2024',2024,2000,'elektrik','otomatik',218,0,'Beyaz','suv','rwd','Yerli ve milli, sıfır gibi.',1350000,'Ankara','Çankaya','active',1,'vip',1800,95,1,0);
  await insertImage.run(12,'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800',1,0);
  for (const f of ['Trumore İşletim Sistemi','OTA Güncelleme','Dijital Anahtar','V2G','Panoramik Cam Tavan','Harman Kardon Ses','Matris LED Far','ADAS Paket','NFC Anahtar']) await insertFeature.run(12,f);


  /* ═══════════════════════════════════════════════════════
     BUSINESSES (4 örnek işletme)
     ═══════════════════════════════════════════════════════ */
  console.log('🏢 İşletmeler ekleniyor…');
  const insertBusiness = await db.prepare(`
    INSERT INTO businesses (user_id,name,slug,type,description,address,city,district,phone,email,website,rating,review_count,is_premium,is_verified,working_hours,services)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `);

  await insertBusiness.run(6,'Prestij Otomotiv','prestij-otomotiv','galeri','İstanbul\'un en güvenilir ikinci el araç galerisi','Atatürk Cad. No:45','İstanbul','Kadıköy','05301234567','info@prestijoto.com','https://prestijoto.com',4.7,128,1,1,'{"hafta_ici":"09:00-19:00","cumartesi":"09:00-17:00","pazar":"Kapalı"}','["2. El Araç Satış","Takas","Araç Alım","Ekspertiz","Kredi Danışmanlığı"]');
  await insertBusiness.run(7,'Oto Master Servis','oto-master-servis','servis','Profesyonel araç bakım ve onarım merkezi','Sanayi Sitesi B Blok No:12','İstanbul','Ümraniye','05501234567','info@otomaster.com','https://otomaster.com',4.5,85,1,1,'{"hafta_ici":"08:30-18:30","cumartesi":"09:00-15:00","pazar":"Kapalı"}','["Periyodik Bakım","Motor Tamiri","Boya-Kaporta","Lastik","Fren Bakım","Klima"]');
  await insertBusiness.run(8,'Güven Ekspertiz','guven-ekspertiz','ekspertiz','Yetkili ve güvenilir araç ekspertiz hizmeti','İstiklal Mah. Araç Test Merkezi','Ankara','Yenimahalle','05201234567','info@guvenekspertiz.com','https://guvenekspertiz.com',4.8,210,1,1,'{"hafta_ici":"08:00-18:00","cumartesi":"09:00-14:00","pazar":"Kapalı"}','["Oto Ekspertiz","Boya Ölçüm","Motor Kontrol","Şasi Kontrol","Elektrik Kontrol","OBD Okuma"]');
  await insertBusiness.run(9,'Parça Market','parca-market','yedek_parca','Orijinal ve muadil yedek parça','Yedek Parça Çarşısı No:8','İzmir','Bornova','05601234567','info@parcamarket.com','https://parcamarket.com',4.3,62,0,1,'{"hafta_ici":"08:30-18:00","cumartesi":"09:00-16:00","pazar":"Kapalı"}','["Orijinal Parça","Muadil Parça","Motor Parçaları","Kaporta Parçaları","Elektrik Parçaları","Yağ-Filtre"]');

  /* ─── Reviews ─── */
  const insertReview = await db.prepare(
    `INSERT INTO reviews (business_id,user_id,rating,comment,service_type) VALUES (?,?,?,?,?)`
  );
  await insertReview.run(1,2,5,'Çok memnun kaldım, güvenilir galeri.','Araç Satış');
  await insertReview.run(1,3,4,'Güzel hizmet ama fiyatlar biraz yüksek.','Araç Satış');
  await insertReview.run(2,4,5,'Motor bakımını çok iyi yaptılar.','Motor Bakım');
  await insertReview.run(2,5,4,'Hızlı ve kaliteli servis.','Periyodik Bakım');
  await insertReview.run(3,2,5,'Detaylı ekspertiz raporu aldım.','Ekspertiz');
  await insertReview.run(3,3,5,'Profesyonel ve güvenilir.','Ekspertiz');
  await insertReview.run(4,4,4,'Uygun fiyatlı parçalar.','Yedek Parça');

  /* ═══════════════════════════════════════════════════════
     FORUM
     ═══════════════════════════════════════════════════════ */
  console.log('💬 Forum verileri ekleniyor…');
  const insertCategory = await db.prepare(
    `INSERT INTO forum_categories (name,slug,description,icon,color,sort_order,topic_count,post_count) VALUES (?,?,?,?,?,?,?,?)`
  );
  await insertCategory.run('Genel Tartışma','genel-tartisma','Araçlar hakkında genel sohbet','forum','#1775d3',1,25,156);
  await insertCategory.run('Teknik Destek','teknik-destek','Araç arızaları ve çözümleri','build','#e74c3c',2,18,89);
  await insertCategory.run('Alım-Satım Tavsiyeleri','alim-satim-tavsiyeleri','Araç alım satım önerileri','payments','#27ae60',3,12,67);
  await insertCategory.run('Modifikasyon','modifikasyon','Araç modifikasyon ve aksesuar','auto_fix_high','#f39c12',4,8,45);
  await insertCategory.run('Elektrikli Araçlar','elektrikli-araclar','EV ve hibrit tartışmaları','electric_car','#9b59b6',5,6,34);
  await insertCategory.run('Yarış & Performans','yaris-performans','Yarış ve performans araçları','speed','#e67e22',6,4,23);

  const insertTopic = await db.prepare(
    `INSERT INTO forum_topics (category_id,user_id,title,slug,content,is_pinned,view_count,reply_count,last_reply_at,last_reply_by) VALUES (?,?,?,?,?,?,?,?,datetime('now'),?)`
  );
  await insertTopic.run(1,2,'2024 yılında en iyi sedan hangisi?','2024-en-iyi-sedan','Merhabalar, 2024 model yılında sedan almayı düşünüyorum. BMW 3, Mercedes C, Audi A4 arasında kararsızım. Deneyimlerinizi paylaşır mısınız?',1,456,12,3);
  await insertTopic.run(2,3,'Golf 8 DSG şanzıman sorunu','golf-8-dsg-sanziman-sorunu','Golf 8 1.5 TSI DSG kullanıyorum. Düşük devirlerde takılma hissediyorum. Benzer sorunu yaşayan var mı?',0,234,8,4);
  await insertTopic.run(3,4,'500 bin TL bütçeyle ne alınır?','500-bin-tl-butceyle-ne-alinir','Merhaba, 500 bin TL bütçem var. 2018 ve üzeri model arıyorum. Ekonomik ve güvenilir araç önerir misiniz?',0,567,15,5);
  await insertTopic.run(4,5,'Corolla hibrit chip tuning yapılır mı?','corolla-hibrit-chip-tuning','Corolla 1.8 hibrit kullanıyorum. Chip tuning yaptırmak istiyorum ama garantiyi kaybetmekten çekiniyorum. Deneyimi olan var mı?',0,189,6,2);
  await insertTopic.run(5,2,'Tesla Model Y vs Togg T10X karşılaştırma','tesla-model-y-vs-togg-t10x','İki aracı da test ettim. Detaylı karşılaştırmamı paylaşıyorum…',1,789,22,3);
  await insertTopic.run(1,3,'Dizel mi benzinli mi? 2024 gerçekleri','dizel-mi-benzin-mi-2024','Artık dizel mantıklı mı? Yakıt fiyatları, emisyon normları, yeniden satış değeri açısından değerlendirelim.',0,345,10,4);
  await insertTopic.run(2,4,'Megane 1.3 TCe yağ tüketimi','megane-13-tce-yag-tuketimi','Renault Megane 1.3 TCe alacaktım ama yağ tüketimi sorunları duydum. Gerçekte nasıl?',0,156,5,5);
  await insertTopic.run(6,5,'Nürburgring deneyimi paylaşımı','nurburgring-deneyimi','Geçen ay Nürburgring\'de Golf GTI ile tur atma fırsatı buldum. Deneyimimi paylaşmak istiyorum.',0,234,7,2);

  const insertReply = await db.prepare(
    `INSERT INTO forum_replies (topic_id,user_id,content,like_count) VALUES (?,?,?,?)`
  );
  await insertReply.run(1,3,'BMW 3 Serisi sürüş dinamikleri açısından rakipsiz. M Sport paket ile çok keyifli.',8);
  await insertReply.run(1,4,'Mercedes C Serisi iç kalitesi ve konforu ile öne çıkıyor. Uzun yolda fark ediliyor.',6);
  await insertReply.run(1,5,'Audi A4 quattro ile kış aylarında güvenle sürüyorum. Tavsiye ederim.',5);
  await insertReply.run(2,2,'Bende de benzer sorun vardı. Yazılım güncellemesi ile düzeldi.',12);
  await insertReply.run(2,5,'DSG yağ değişimi yaptırdım, sorun büyük ölçüde azaldı.',7);
  await insertReply.run(3,2,'Bu bütçeye Fiat Egea dizel çok mantıklı. Yakıt tasarrufu mükemmel.',4);
  await insertReply.run(3,3,'Honda Civic 1.6 dizel de güzel alternatif. Sağlam motor.',3);
  await insertReply.run(5,4,'Togg şarj ağı çok hızlı gelişiyor. Şehir içi için mükemmel.',15);
  await insertReply.run(5,3,'Tesla Supercharger ağı hâlâ daha yaygın ama Togg fiyat/performansta çok iyi.',11);

  /* ─── Favorites ─── */
  console.log('⭐ Favoriler ekleniyor…');
  const insertFav = await db.prepare(`INSERT INTO favorites (user_id,listing_id) VALUES (?,?)`);
  await insertFav.run(2,4); await insertFav.run(2,8); await insertFav.run(3,1);
  await insertFav.run(3,12); await insertFav.run(4,2); await insertFav.run(4,8);
  await insertFav.run(5,1); await insertFav.run(5,4); await insertFav.run(5,11);

  /* ─── Messages ─── */
  console.log('✉️ Mesajlar ekleniyor…');
  const insertMsg = await db.prepare(
    `INSERT INTO messages (sender_id,receiver_id,listing_id,content,is_read) VALUES (?,?,?,?,?)`
  );
  await insertMsg.run(2,3,1,'Bu araç hâlâ satılık mı?',1);
  await insertMsg.run(3,2,1,'Evet, satılık. Fiyatta pazarlık payı var.',1);
  await insertMsg.run(4,5,4,'Toyota hâlâ satılık mı? İncelemek istiyorum.',0);
  await insertMsg.run(5,2,8,'Tesla\'nın km bilgisi doğru mu?',0);

  /* ─── Appointments ─── */
  console.log('📅 Randevular ekleniyor…');
  const insertAppt = await db.prepare(
    `INSERT INTO appointments (business_id,user_id,service_type,vehicle_info,date,time,status,notes) VALUES (?,?,?,?,?,?,?,?)`
  );
  await insertAppt.run(2,2,'Periyodik Bakım','BMW 320i 2023','2025-01-20','10:00','pending','30.000 km bakımı');
  await insertAppt.run(3,3,'Oto Ekspertiz','Mercedes C200 2022','2025-01-22','14:00','confirmed','Satış öncesi ekspertiz');
  await insertAppt.run(2,4,'Lastik Değişim','VW Golf 2023','2025-01-25','11:00','pending','4 lastik kış lastiği');

  /* ─── Notifications ─── */
  console.log('🔔 Bildirimler ekleniyor…');
  const insertNotif = await db.prepare(
    `INSERT INTO notifications (user_id,type,title,message,link,is_read) VALUES (?,?,?,?,?,?)`
  );
  await insertNotif.run(2,'message','Yeni Mesaj','İlanınız hakkında yeni bir mesaj aldınız.','/kullanici-paneli#mesajlar',0);
  await insertNotif.run(3,'listing','İlan Onaylandı','İlanınız başarıyla yayınlandı.','/ilan/mercedes-c200-amg-2022',1);
  await insertNotif.run(4,'forum','Yeni Yanıt','Forum konunuza yeni bir yanıt geldi.','/forum/konu/500-bin-tl-butceyle-ne-alinir',0);
  await insertNotif.run(5,'system','Hoş Geldiniz!','araba-al platformuna hoş geldiniz.','/nasil-calisir',1);

  /* ═══════════════════════════════════════════════════════
     VEHICLE HUBS
     ═══════════════════════════════════════════════════════ */
  console.log('🏎️  Vehicle Hub verileri ekleniyor…');
  const insertHub = await db.prepare(`
    INSERT INTO vehicle_hubs (brand_id,model_id,year,avg_price,fuel_type,engine,hp,torque,transmission,acceleration,top_speed,fuel_consumption,length,width,height,wheelbase,weight,editor_rating,editor_review,pros,cons,image_url)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `);

  // BMW 3 Serisi 2024
  ids = await getModelId('bmw','3-serisi');
  await insertHub.run(ids.brandId,ids.modelId,2024,1350000,'benzin','2.0L Turbo',184,'300 Nm','8 İleri Otomat','7.5 sn','235 km/s','6.2L/100km','4713 mm','1827 mm','1440 mm','2851 mm','1540 kg',8.8,'BMW 3 Serisi, sportif sedan segmentinin referans noktası olmaya devam ediyor. Dengeli süspansiyon, keskin direksiyon ve güçlü motor seçenekleri ile sürüş keyfi sunar.','["Mükemmel sürüş dinamikleri","Güçlü motor seçenekleri","Kaliteli iç mekan","Gelişmiş teknoloji"]','["Dar arka koltuk","Opsiyonlar pahalı","Sert süspansiyon"]','https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800');

  // Mercedes C Serisi 2024
  ids = await getModelId('mercedes-benz','c-serisi');
  await insertHub.run(ids.brandId,ids.modelId,2024,1550000,'benzin','1.5L Turbo + EQ Boost',204,'300 Nm','9G-Tronic','7.3 sn','246 km/s','6.5L/100km','4751 mm','1820 mm','1438 mm','2865 mm','1595 kg',8.9,'W206 kasa C Serisi, lüks ve teknolojiyi bir üst seviyeye taşıyor. MBUX Hyperscreen opsiyonu ile teknoloji şöleni sunar. Mild-hibrit motor verimliliği artırır.','["Üstün iç mekan kalitesi","MBUX teknolojisi","Konforlu süspansiyon","Mild-hibrit verimlilik"]','["Arkada sınırlı alan","Dokunmatik tuş hassasiyeti","Dizel seçenek yok"]','https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800');

  // Volkswagen Golf 2024
  ids = await getModelId('volkswagen','golf');
  await insertHub.run(ids.brandId,ids.modelId,2024,1050000,'benzin','1.5 TSI EVO2',150,'250 Nm','7 İleri DSG','8.5 sn','224 km/s','5.6L/100km','4284 mm','1789 mm','1456 mm','2636 mm','1315 kg',8.5,'Golf 8.5 makyajlı versiyonu ile fiziksel tuşlara kısmi geri dönüş yaptı. Kompakt segment lideri olarak güncellenmiş infotainment ve geliştirilmiş sürücü asistanları sunuyor.','["Pratik kullanım","Ekonomik motor","Geniş bagaj","Kaliteli sürüş"]','["İnfotainment öğrenme eğrisi","Arka görüş sınırlı","Fiyat artışı"]','https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800');

  // Toyota Corolla Hybrid 2024
  ids = await getModelId('toyota','corolla');
  await insertHub.run(ids.brandId,ids.modelId,2024,1175000,'hibrit','1.8L Hibrit',140,'185 Nm','e-CVT','9.2 sn','180 km/s','4.4L/100km','4630 mm','1780 mm','1435 mm','2700 mm','1370 kg',8.4,'Corolla Hybrid, segmentinin en ekonomik aracı olmaya devam ediyor. Şehir içi kullanımda 3-4L/100km tüketim mümkün. Toyota güvenilirliği ile uzun vadede düşük maliyetli.','["Düşük yakıt tüketimi","Toyota güvenilirliği","Yüksek ikinci el değeri","Toyota Safety Sense"]','["Düşük performans","CVT sürüş hissi","Plastik iç malzemeler"]','https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800');

  // Tesla Model Y 2024
  ids = await getModelId('tesla','model-y');
  await insertHub.run(ids.brandId,ids.modelId,2024,2100000,'elektrik','Dual Motor AWD',350,'493 Nm','Tek Vitesli','5.0 sn','217 km/s','0L/100km (16.9 kWh)','4751 mm','1921 mm','1624 mm','2890 mm','1979 kg',8.7,'Tesla Model Y, elektrikli SUV segmentinin en popüler aracı. Highland makyajı ile daha rafine bir iç mekan, geliştirilmiş menzil ve yenilenmiş dış tasarım sunar.','["Uzun menzil (533 km)","Supercharger ağı","Geniş iç hacim","OTA güncellemeler"]','["Yüksek fiyat","Montaj kalitesi tutarsızlıkları","Servis ağı sınırlı"]','https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800');

  // Togg T10X 2024
  ids = await getModelId('togg','t10x');
  await insertHub.run(ids.brandId,ids.modelId,2024,1350000,'elektrik','RWD Elektrik Motor',218,'350 Nm','Tek Vitesli','7.6 sn','180 km/s','0L/100km (18.1 kWh)','4599 mm','1890 mm','1672 mm','2830 mm','1886 kg',8.0,'Togg T10X, Türkiye\'nin ilk yerli elektrikli SUV\'u olarak önemli bir kilometre taşı. Trumore işletim sistemi, V2G teknolojisi ve rekabetçi fiyatıyla dikkat çekiyor.','["Rekabetçi fiyat","Yerli üretim","Trumore ekosistemi","V2G desteği"]','["Sınırlı şarj ağı","Menzil orta seviye","2. el pazar belirsizliği"]','https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800');

  // Hyundai Tucson 2024
  ids = await getModelId('hyundai','tucson');
  await insertHub.run(ids.brandId,ids.modelId,2024,1150000,'dizel','1.6 CRDi',136,'320 Nm','7 İleri DCT','10.3 sn','184 km/s','5.3L/100km','4500 mm','1865 mm','1650 mm','2680 mm','1540 kg',8.3,'Tucson, keskin tasarımı ve zengin donanımıyla C-SUV segmentinin güçlü oyuncusu. Parametrik tasarım dili ile fark yaratıyor.','["Dikkat çekici tasarım","Zengin donanım","Geniş iç hacim","Uygun fiyat"]','["Dizel motor sesi","Infotainment karmaşık","Spor sürüş değil"]','https://images.unsplash.com/photo-1629385701021-fcd568a743e8?w=800');

  // Porsche Cayenne 2024
  ids = await getModelId('porsche','cayenne');
  await insertHub.run(ids.brandId,ids.modelId,2024,5950000,'benzin','3.0L V6 Turbo',353,'500 Nm','8 İleri Tiptronic','5.7 sn','248 km/s','10.8L/100km','4930 mm','1983 mm','1696 mm','2895 mm','2060 kg',9.0,'Porsche Cayenne, performans SUV segmentinin kralı olmaya devam ediyor. Sportif sürüş dinamikleri ile lüks SUV konforunu bir arada sunuyor.','["Spor otomobil gibi sürüş","Üstün yapı kalitesi","Geniş iç mekan","Güçlü motor"]','["Yüksek fiyat","Yüksek yakıt tüketimi","Opsiyonlar astronomik"]','https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800');


  /* ═══════════════════════════════════════════════════════
     MODERATION
     ═══════════════════════════════════════════════════════ */
  console.log('🛡️  Moderasyon verileri ekleniyor…');
  const insertMod = await db.prepare(
    `INSERT INTO moderation_queue (type,item_id,reason,reported_by,status) VALUES (?,?,?,?,?)`
  );
  await insertMod.run('listing',9,'Fiyat bilgisi şüpheli',2,'pending');
  await insertMod.run('forum_reply',5,'Spam içerik',3,'pending');


  console.log('✅ Seed tamamlandı!');
  console.log('   📊 Markalar: ' + brandData.length);
  const modelCount = await get('SELECT COUNT(*) as cnt FROM models');
  console.log('   📊 Modeller: ' + (modelCount ? modelCount.cnt : '?'));
  console.log('   📊 İlanlar: 12');
  console.log('   📊 Hub\'lar: 8');
}

seed()
  .then(() => closeDatabase())
  .then(() => process.exit(0))
  .catch(err => { console.error('❌ Seed hatası:', err); process.exit(1); });
