const { getDb, initializeDatabase } = require('./database');
const bcrypt = require('bcryptjs');

async function seed() {
  await initializeDatabase();
  const db = getDb();

  // Mevcut veri varsa temizle
  await db.exec(`
    DELETE FROM moderation_queue;
    DELETE FROM notifications;
    DELETE FROM quote_requests;
    DELETE FROM appointments;
    DELETE FROM reviews;
    DELETE FROM forum_likes;
    DELETE FROM forum_replies;
    DELETE FROM forum_topics;
    DELETE FROM forum_categories;
    DELETE FROM messages;
    DELETE FROM favorites;
    DELETE FROM listing_features;
    DELETE FROM listing_images;
    DELETE FROM listings;
    DELETE FROM vehicle_hubs;
    DELETE FROM businesses;
    DELETE FROM models;
    DELETE FROM brands;
    DELETE FROM users;
  `);

  // Reset auto-increment counters (SQLite) so IDs start from 1
  try { await db.exec(`DELETE FROM sqlite_sequence;`); } catch (e) {
    // PG: reset all serial sequences
    try {
      await db.exec(`
        ALTER SEQUENCE users_id_seq RESTART WITH 1;
        ALTER SEQUENCE brands_id_seq RESTART WITH 1;
        ALTER SEQUENCE models_id_seq RESTART WITH 1;
        ALTER SEQUENCE listings_id_seq RESTART WITH 1;
        ALTER SEQUENCE listing_images_id_seq RESTART WITH 1;
        ALTER SEQUENCE listing_features_id_seq RESTART WITH 1;
        ALTER SEQUENCE businesses_id_seq RESTART WITH 1;
        ALTER SEQUENCE reviews_id_seq RESTART WITH 1;
        ALTER SEQUENCE forum_categories_id_seq RESTART WITH 1;
        ALTER SEQUENCE forum_topics_id_seq RESTART WITH 1;
        ALTER SEQUENCE forum_replies_id_seq RESTART WITH 1;
        ALTER SEQUENCE favorites_id_seq RESTART WITH 1;
        ALTER SEQUENCE messages_id_seq RESTART WITH 1;
        ALTER SEQUENCE appointments_id_seq RESTART WITH 1;
        ALTER SEQUENCE notifications_id_seq RESTART WITH 1;
        ALTER SEQUENCE vehicle_hubs_id_seq RESTART WITH 1;
        ALTER SEQUENCE moderation_queue_id_seq RESTART WITH 1;
      `);
    } catch (e2) { console.log('⚠️  Sequence reset skipped:', e2.message); }
  }

  // ========== USERS ==========
  const hash = bcrypt.hashSync('123456', 10);
  const insertUser = db.prepare(`INSERT INTO users (email, password, name, phone, role, is_verified, profile_completion) VALUES (?, ?, ?, ?, ?, ?, ?)`);

  const u1 = await insertUser.run('admin@arabaincele.com', hash, 'Admin', '0555 000 0000', 'admin', 1, 100);
  const u2 = await insertUser.run('ahmet@email.com', hash, 'Ahmet Yılmaz', '0532 111 2233', 'bireysel', 1, 75);
  const u3 = await insertUser.run('elif@email.com', hash, 'Elif Kaya', '0533 222 3344', 'bireysel', 1, 60);
  const u4 = await insertUser.run('mehmet@email.com', hash, 'Mehmet Demir', '0534 333 4455', 'bireysel', 1, 90);
  const u5 = await insertUser.run('zeynep@email.com', hash, 'Zeynep Aydın', '0535 444 5566', 'bireysel', 0, 40);
  const u6 = await insertUser.run('can@email.com', hash, 'Can Doğan', '0536 555 6677', 'bireysel', 1, 85);
  const u7 = await insertUser.run('servis@masterbosch.com', hash, 'Master Bosch Servis', '0212 555 7788', 'kurumsal', 1, 100);
  const u8 = await insertUser.run('galeri@eliteauto.com', hash, 'Elite Auto Galeri', '0216 555 8899', 'kurumsal', 1, 95);
  const u9 = await insertUser.run('servis@otomaster.com', hash, 'Oto Master', '0212 666 1122', 'kurumsal', 1, 90);
  const u10 = await insertUser.run('servis@muratoto.com', hash, 'Murat Oto Elektrik', '0216 777 3344', 'kurumsal', 1, 80);

  // User ID references (lastInsertRowid for SQLite, id for PG)
  const adminId = u1.lastInsertRowid || u1.id;      // 1 = admin
  const ahmetId = u2.lastInsertRowid || u2.id;      // 2 = ahmet (bireysel)
  const elifId = u3.lastInsertRowid || u3.id;       // 3 = elif (bireysel)
  const mehmetId = u4.lastInsertRowid || u4.id;     // 4 = mehmet (bireysel)
  const zeynepId = u5.lastInsertRowid || u5.id;     // 5 = zeynep (bireysel)
  const canId = u6.lastInsertRowid || u6.id;        // 6 = can (bireysel)
  const masterBoschId = u7.lastInsertRowid || u7.id; // 7 = master bosch (kurumsal)
  const eliteAutoUserId = u8.lastInsertRowid || u8.id; // 8 = elite auto (kurumsal)
  const otoMasterId = u9.lastInsertRowid || u9.id;  // 9 = oto master (kurumsal)
  const muratOtoId = u10.lastInsertRowid || u10.id;  // 10 = murat oto (kurumsal)

  console.log('✅ Kullanıcılar oluşturuldu');

  // ========== BRANDS ==========
  const insertBrand = db.prepare(`INSERT INTO brands (name, slug, logo) VALUES (?, ?, ?)`);
  const brandData = [
    ['Alfa Romeo', 'alfa-romeo', 'https://www.carlogos.org/car-logos/alfa-romeo-logo.png'],
    ['Aston Martin', 'aston-martin', 'https://www.carlogos.org/car-logos/aston-martin-logo.png'],
    ['Audi', 'audi', 'https://www.carlogos.org/car-logos/audi-logo.png'],
    ['Bentley', 'bentley', 'https://www.carlogos.org/car-logos/bentley-logo.png'],
    ['BMW', 'bmw', 'https://www.carlogos.org/car-logos/bmw-logo.png'],
    ['BYD', 'byd', 'https://www.carlogos.org/car-logos/byd-logo.png'],
    ['Cadillac', 'cadillac', 'https://www.carlogos.org/car-logos/cadillac-logo.png'],
    ['Chery', 'chery', 'https://www.carlogos.org/car-logos/chery-logo.png'],
    ['Chevrolet', 'chevrolet', 'https://www.carlogos.org/car-logos/chevrolet-logo.png'],
    ['Citroën', 'citroen', 'https://www.carlogos.org/car-logos/citroen-logo.png'],
    ['Cupra', 'cupra', '/images/brands/cupra.svg'],
    ['Dacia', 'dacia', 'https://www.carlogos.org/car-logos/dacia-logo.png'],
    ['DS', 'ds', '/images/brands/ds.svg'],
    ['Ferrari', 'ferrari', 'https://www.carlogos.org/car-logos/ferrari-logo.png'],
    ['Fiat', 'fiat', 'https://www.carlogos.org/car-logos/fiat-logo.png'],
    ['Ford', 'ford', 'https://www.carlogos.org/car-logos/ford-logo.png'],
    ['Genesis', 'genesis', 'https://www.carlogos.org/car-logos/genesis-logo.png'],
    ['Honda', 'honda', 'https://www.carlogos.org/car-logos/honda-logo.png'],
    ['Hyundai', 'hyundai', 'https://www.carlogos.org/car-logos/hyundai-logo.png'],
    ['Infiniti', 'infiniti', 'https://www.carlogos.org/car-logos/infiniti-logo.png'],
    ['Jaguar', 'jaguar', 'https://www.carlogos.org/car-logos/jaguar-logo.png'],
    ['Jeep', 'jeep', 'https://www.carlogos.org/car-logos/jeep-logo.png'],
    ['Kia', 'kia', 'https://www.carlogos.org/car-logos/kia-logo.png'],
    ['Lamborghini', 'lamborghini', 'https://www.carlogos.org/car-logos/lamborghini-logo.png'],
    ['Land Rover', 'land-rover', 'https://www.carlogos.org/car-logos/land-rover-logo.png'],
    ['Lexus', 'lexus', 'https://www.carlogos.org/car-logos/lexus-logo.png'],
    ['Maserati', 'maserati', 'https://www.carlogos.org/car-logos/maserati-logo.png'],
    ['Mazda', 'mazda', 'https://www.carlogos.org/car-logos/mazda-logo.png'],
    ['Mercedes-Benz', 'mercedes', 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png'],
    ['MG', 'mg', 'https://www.carlogos.org/car-logos/mg-logo.png'],
    ['Mini', 'mini', 'https://www.carlogos.org/car-logos/mini-logo.png'],
    ['Mitsubishi', 'mitsubishi', 'https://www.carlogos.org/car-logos/mitsubishi-logo.png'],
    ['Nissan', 'nissan', 'https://www.carlogos.org/car-logos/nissan-logo.png'],
    ['Opel', 'opel', 'https://www.carlogos.org/car-logos/opel-logo.png'],
    ['Peugeot', 'peugeot', 'https://www.carlogos.org/car-logos/peugeot-logo.png'],
    ['Porsche', 'porsche', 'https://www.carlogos.org/car-logos/porsche-logo.png'],
    ['Renault', 'renault', 'https://www.carlogos.org/car-logos/renault-logo.png'],
    ['Rolls-Royce', 'rolls-royce', 'https://www.carlogos.org/car-logos/rolls-royce-logo.png'],
    ['Seat', 'seat', 'https://www.carlogos.org/car-logos/seat-logo.png'],
    ['Skoda', 'skoda', 'https://www.carlogos.org/car-logos/skoda-logo.png'],
    ['Smart', 'smart', 'https://www.carlogos.org/car-logos/smart-logo.png'],
    ['Subaru', 'subaru', 'https://www.carlogos.org/car-logos/subaru-logo.png'],
    ['Suzuki', 'suzuki', 'https://www.carlogos.org/car-logos/suzuki-logo.png'],
    ['Tesla', 'tesla', 'https://www.carlogos.org/car-logos/tesla-logo.png'],
    ['Togg', 'togg', '/images/brands/togg.svg'],
    ['Toyota', 'toyota', 'https://www.carlogos.org/car-logos/toyota-logo.png'],
    ['Volkswagen', 'volkswagen', 'https://www.carlogos.org/car-logos/volkswagen-logo.png'],
    ['Volvo', 'volvo', 'https://www.carlogos.org/car-logos/volvo-logo.png'],
  ];
  for (const [name, slug, logo] of brandData) await insertBrand.run(name, slug, logo);

  console.log('✅ Markalar oluşturuldu');

  // ========== MODELS ==========
  const insertModel = db.prepare(`INSERT INTO models (brand_id, name, slug, body_type) VALUES (?, ?, ?, ?)`);
  const getBrandId = async (slug) => (await db.prepare('SELECT id FROM brands WHERE slug=?').get(slug)).id;

  const alfaId = await getBrandId('alfa-romeo');
  const astonId = await getBrandId('aston-martin');
  const audiId = await getBrandId('audi');
  const bentleyId = await getBrandId('bentley');
  const bmwId = await getBrandId('bmw');
  const bydId = await getBrandId('byd');
  const cadillacId = await getBrandId('cadillac');
  const cheryId = await getBrandId('chery');
  const chevyId = await getBrandId('chevrolet');
  const citroenId = await getBrandId('citroen');
  const cupraId = await getBrandId('cupra');
  const daciaId = await getBrandId('dacia');
  const dsId = await getBrandId('ds');
  const ferrariId = await getBrandId('ferrari');
  const fiatId = await getBrandId('fiat');
  const fordId = await getBrandId('ford');
  const genesisId = await getBrandId('genesis');
  const hondaId = await getBrandId('honda');
  const hyundaiId = await getBrandId('hyundai');
  const infinitiId = await getBrandId('infiniti');
  const jaguarId = await getBrandId('jaguar');
  const jeepId = await getBrandId('jeep');
  const kiaId = await getBrandId('kia');
  const lamboId = await getBrandId('lamborghini');
  const landRoverId = await getBrandId('land-rover');
  const lexusId = await getBrandId('lexus');
  const maseratiId = await getBrandId('maserati');
  const mazdaId = await getBrandId('mazda');
  const mercedesId = await getBrandId('mercedes');
  const mgId = await getBrandId('mg');
  const miniId = await getBrandId('mini');
  const mitsuId = await getBrandId('mitsubishi');
  const nissanId = await getBrandId('nissan');
  const opelId = await getBrandId('opel');
  const peugeotId = await getBrandId('peugeot');
  const porscheId = await getBrandId('porsche');
  const renaultId = await getBrandId('renault');
  const rollsId = await getBrandId('rolls-royce');
  const seatId = await getBrandId('seat');
  const skodaId = await getBrandId('skoda');
  const smartId = await getBrandId('smart');
  const subaruId = await getBrandId('subaru');
  const suzukiId = await getBrandId('suzuki');
  const teslaId = await getBrandId('tesla');
  const toggId = await getBrandId('togg');
  const toyotaId = await getBrandId('toyota');
  const vwId = await getBrandId('volkswagen');
  const volvoId = await getBrandId('volvo');

  // Alfa Romeo
  await insertModel.run(alfaId, 'Giulia', 'giulia', 'sedan');
  await insertModel.run(alfaId, 'Stelvio', 'stelvio', 'suv');
  await insertModel.run(alfaId, 'Tonale', 'tonale', 'crossover');

  // Aston Martin
  await insertModel.run(astonId, 'Vantage', 'vantage', 'coupe');
  await insertModel.run(astonId, 'DB12', 'db12', 'coupe');
  await insertModel.run(astonId, 'DBX', 'dbx', 'suv');

  // Audi
  await insertModel.run(audiId, 'A3', 'a3', 'sedan');
  await insertModel.run(audiId, 'A4', 'a4', 'sedan');
  await insertModel.run(audiId, 'A6', 'a6', 'sedan');
  await insertModel.run(audiId, 'A8', 'a8', 'sedan');
  await insertModel.run(audiId, 'Q3', 'q3', 'suv');
  await insertModel.run(audiId, 'Q5', 'q5', 'suv');
  await insertModel.run(audiId, 'Q7', 'q7', 'suv');
  await insertModel.run(audiId, 'Q8', 'q8', 'suv');
  await insertModel.run(audiId, 'e-tron GT', 'e-tron-gt', 'sedan');
  await insertModel.run(audiId, 'RS6 Avant', 'rs6-avant', 'station_wagon');
  await insertModel.run(audiId, 'TT', 'tt', 'coupe');

  // Bentley
  await insertModel.run(bentleyId, 'Continental GT', 'continental-gt', 'coupe');
  await insertModel.run(bentleyId, 'Flying Spur', 'flying-spur', 'sedan');
  await insertModel.run(bentleyId, 'Bentayga', 'bentayga', 'suv');

  // BMW
  await insertModel.run(bmwId, '1 Serisi', '1-serisi', 'hatchback');
  await insertModel.run(bmwId, '2 Serisi Gran Coupe', '2-serisi-gc', 'sedan');
  await insertModel.run(bmwId, '3 Serisi', '3-serisi', 'sedan');
  await insertModel.run(bmwId, '4 Serisi', '4-serisi', 'coupe');
  await insertModel.run(bmwId, '5 Serisi', '5-serisi', 'sedan');
  await insertModel.run(bmwId, '7 Serisi', '7-serisi', 'sedan');
  await insertModel.run(bmwId, 'X1', 'x1', 'suv');
  await insertModel.run(bmwId, 'X3', 'x3', 'suv');
  await insertModel.run(bmwId, 'X5', 'x5', 'suv');
  await insertModel.run(bmwId, 'X7', 'x7', 'suv');
  await insertModel.run(bmwId, 'Z4', 'z4', 'cabrio');
  await insertModel.run(bmwId, 'iX', 'ix', 'suv');
  await insertModel.run(bmwId, 'i4', 'i4', 'sedan');

  // BYD
  await insertModel.run(bydId, 'Atto 3', 'atto-3', 'suv');
  await insertModel.run(bydId, 'Han', 'han', 'sedan');
  await insertModel.run(bydId, 'Tang', 'tang', 'suv');
  await insertModel.run(bydId, 'Seal', 'seal', 'sedan');
  await insertModel.run(bydId, 'Dolphin', 'dolphin', 'hatchback');

  // Cadillac
  await insertModel.run(cadillacId, 'Escalade', 'escalade', 'suv');
  await insertModel.run(cadillacId, 'CT5', 'ct5', 'sedan');
  await insertModel.run(cadillacId, 'XT6', 'xt6', 'suv');

  // Chery
  await insertModel.run(cheryId, 'Tiggo 4 Pro', 'tiggo-4-pro', 'suv');
  await insertModel.run(cheryId, 'Tiggo 7 Pro', 'tiggo-7-pro', 'suv');
  await insertModel.run(cheryId, 'Tiggo 8 Pro', 'tiggo-8-pro', 'suv');
  await insertModel.run(cheryId, 'Arrizo 5', 'arrizo-5', 'sedan');

  // Chevrolet
  await insertModel.run(chevyId, 'Camaro', 'camaro', 'coupe');
  await insertModel.run(chevyId, 'Corvette', 'corvette', 'coupe');
  await insertModel.run(chevyId, 'Tahoe', 'tahoe', 'suv');
  await insertModel.run(chevyId, 'Equinox', 'equinox', 'suv');

  // Citroën
  await insertModel.run(citroenId, 'C3', 'c3', 'hatchback');
  await insertModel.run(citroenId, 'C3 Aircross', 'c3-aircross', 'crossover');
  await insertModel.run(citroenId, 'C4', 'c4', 'hatchback');
  await insertModel.run(citroenId, 'C5 Aircross', 'c5-aircross', 'suv');
  await insertModel.run(citroenId, 'Berlingo', 'berlingo', 'minivan');

  // Cupra
  await insertModel.run(cupraId, 'Formentor', 'formentor', 'crossover');
  await insertModel.run(cupraId, 'Born', 'born', 'hatchback');
  await insertModel.run(cupraId, 'Leon', 'leon', 'hatchback');
  await insertModel.run(cupraId, 'Ateca', 'ateca', 'suv');

  // Dacia
  await insertModel.run(daciaId, 'Sandero', 'sandero', 'hatchback');
  await insertModel.run(daciaId, 'Duster', 'duster', 'suv');
  await insertModel.run(daciaId, 'Jogger', 'jogger', 'minivan');
  await insertModel.run(daciaId, 'Spring', 'spring', 'hatchback');

  // DS
  await insertModel.run(dsId, 'DS 3', 'ds-3', 'crossover');
  await insertModel.run(dsId, 'DS 4', 'ds-4', 'hatchback');
  await insertModel.run(dsId, 'DS 7', 'ds-7', 'suv');
  await insertModel.run(dsId, 'DS 9', 'ds-9', 'sedan');

  // Ferrari
  await insertModel.run(ferrariId, '296 GTB', '296-gtb', 'coupe');
  await insertModel.run(ferrariId, 'Roma', 'roma', 'coupe');
  await insertModel.run(ferrariId, 'SF90 Stradale', 'sf90', 'coupe');
  await insertModel.run(ferrariId, 'Purosangue', 'purosangue', 'suv');
  await insertModel.run(ferrariId, '812', '812', 'coupe');

  // Fiat
  await insertModel.run(fiatId, 'Egea Sedan', 'egea-sedan', 'sedan');
  await insertModel.run(fiatId, 'Egea Hatchback', 'egea-hatchback', 'hatchback');
  await insertModel.run(fiatId, 'Egea Cross', 'egea-cross', 'station_wagon');
  await insertModel.run(fiatId, '500', '500', 'hatchback');
  await insertModel.run(fiatId, '500X', '500x', 'crossover');
  await insertModel.run(fiatId, 'Panda', 'panda', 'hatchback');
  await insertModel.run(fiatId, 'Doblo', 'doblo', 'minivan');

  // Ford
  await insertModel.run(fordId, 'Focus', 'focus', 'hatchback');
  await insertModel.run(fordId, 'Fiesta', 'fiesta', 'hatchback');
  await insertModel.run(fordId, 'Puma', 'puma', 'crossover');
  await insertModel.run(fordId, 'Kuga', 'kuga', 'suv');
  await insertModel.run(fordId, 'Mustang', 'mustang', 'coupe');
  await insertModel.run(fordId, 'Mustang Mach-E', 'mustang-mach-e', 'suv');
  await insertModel.run(fordId, 'Tourneo Courier', 'tourneo-courier', 'minivan');
  await insertModel.run(fordId, 'Ranger', 'ranger', 'suv');

  // Genesis
  await insertModel.run(genesisId, 'G70', 'g70', 'sedan');
  await insertModel.run(genesisId, 'G80', 'g80', 'sedan');
  await insertModel.run(genesisId, 'GV70', 'gv70', 'suv');
  await insertModel.run(genesisId, 'GV80', 'gv80', 'suv');

  // Honda
  await insertModel.run(hondaId, 'Civic', 'civic', 'sedan');
  await insertModel.run(hondaId, 'City', 'city', 'sedan');
  await insertModel.run(hondaId, 'Accord', 'accord', 'sedan');
  await insertModel.run(hondaId, 'CR-V', 'cr-v', 'suv');
  await insertModel.run(hondaId, 'HR-V', 'hr-v', 'crossover');
  await insertModel.run(hondaId, 'Jazz', 'jazz', 'hatchback');
  await insertModel.run(hondaId, 'ZR-V', 'zr-v', 'suv');

  // Hyundai
  await insertModel.run(hyundaiId, 'i10', 'i10', 'hatchback');
  await insertModel.run(hyundaiId, 'i20', 'i20', 'hatchback');
  await insertModel.run(hyundaiId, 'Bayon', 'bayon', 'crossover');
  await insertModel.run(hyundaiId, 'Kona', 'kona', 'crossover');
  await insertModel.run(hyundaiId, 'Tucson', 'tucson', 'suv');
  await insertModel.run(hyundaiId, 'Santa Fe', 'santa-fe', 'suv');
  await insertModel.run(hyundaiId, 'Ioniq 5', 'ioniq-5', 'suv');
  await insertModel.run(hyundaiId, 'Ioniq 6', 'ioniq-6', 'sedan');
  await insertModel.run(hyundaiId, 'Elantra', 'elantra', 'sedan');

  // Infiniti
  await insertModel.run(infinitiId, 'Q50', 'q50', 'sedan');
  await insertModel.run(infinitiId, 'Q60', 'q60', 'coupe');
  await insertModel.run(infinitiId, 'QX50', 'qx50', 'suv');
  await insertModel.run(infinitiId, 'QX80', 'qx80', 'suv');

  // Jaguar
  await insertModel.run(jaguarId, 'F-Pace', 'f-pace', 'suv');
  await insertModel.run(jaguarId, 'E-Pace', 'e-pace', 'suv');
  await insertModel.run(jaguarId, 'F-Type', 'f-type', 'coupe');
  await insertModel.run(jaguarId, 'XF', 'xf', 'sedan');

  // Jeep
  await insertModel.run(jeepId, 'Renegade', 'renegade', 'crossover');
  await insertModel.run(jeepId, 'Compass', 'compass', 'suv');
  await insertModel.run(jeepId, 'Cherokee', 'cherokee', 'suv');
  await insertModel.run(jeepId, 'Grand Cherokee', 'grand-cherokee', 'suv');
  await insertModel.run(jeepId, 'Wrangler', 'wrangler', 'suv');
  await insertModel.run(jeepId, 'Avenger', 'avenger', 'crossover');

  // Kia
  await insertModel.run(kiaId, 'Picanto', 'picanto', 'hatchback');
  await insertModel.run(kiaId, 'Rio', 'rio', 'hatchback');
  await insertModel.run(kiaId, 'Ceed', 'ceed', 'hatchback');
  await insertModel.run(kiaId, 'Sportage', 'sportage', 'suv');
  await insertModel.run(kiaId, 'Sorento', 'sorento', 'suv');
  await insertModel.run(kiaId, 'Niro', 'niro', 'crossover');
  await insertModel.run(kiaId, 'EV6', 'ev6', 'suv');
  await insertModel.run(kiaId, 'EV9', 'ev9', 'suv');
  await insertModel.run(kiaId, 'Stinger', 'stinger', 'sedan');
  await insertModel.run(kiaId, 'XCeed', 'xceed', 'crossover');

  // Lamborghini
  await insertModel.run(lamboId, 'Huracán', 'huracan', 'coupe');
  await insertModel.run(lamboId, 'Urus', 'urus', 'suv');
  await insertModel.run(lamboId, 'Revuelto', 'revuelto', 'coupe');

  // Land Rover
  await insertModel.run(landRoverId, 'Range Rover', 'range-rover', 'suv');
  await insertModel.run(landRoverId, 'Range Rover Sport', 'range-rover-sport', 'suv');
  await insertModel.run(landRoverId, 'Range Rover Evoque', 'range-rover-evoque', 'suv');
  await insertModel.run(landRoverId, 'Range Rover Velar', 'range-rover-velar', 'suv');
  await insertModel.run(landRoverId, 'Defender', 'defender', 'suv');
  await insertModel.run(landRoverId, 'Discovery', 'discovery', 'suv');
  await insertModel.run(landRoverId, 'Discovery Sport', 'discovery-sport', 'suv');

  // Lexus
  await insertModel.run(lexusId, 'IS', 'is', 'sedan');
  await insertModel.run(lexusId, 'ES', 'es', 'sedan');
  await insertModel.run(lexusId, 'LS', 'ls', 'sedan');
  await insertModel.run(lexusId, 'NX', 'nx', 'suv');
  await insertModel.run(lexusId, 'RX', 'rx', 'suv');
  await insertModel.run(lexusId, 'UX', 'ux', 'crossover');
  await insertModel.run(lexusId, 'LC', 'lc', 'coupe');
  await insertModel.run(lexusId, 'RZ', 'rz', 'suv');

  // Maserati
  await insertModel.run(maseratiId, 'Ghibli', 'ghibli', 'sedan');
  await insertModel.run(maseratiId, 'Quattroporte', 'quattroporte', 'sedan');
  await insertModel.run(maseratiId, 'Levante', 'levante', 'suv');
  await insertModel.run(maseratiId, 'GranTurismo', 'granturismo', 'coupe');
  await insertModel.run(maseratiId, 'Grecale', 'grecale', 'suv');
  await insertModel.run(maseratiId, 'MC20', 'mc20', 'coupe');

  // Mazda
  await insertModel.run(mazdaId, 'Mazda2', 'mazda2', 'hatchback');
  await insertModel.run(mazdaId, 'Mazda3', 'mazda3', 'hatchback');
  await insertModel.run(mazdaId, 'Mazda6', 'mazda6', 'sedan');
  await insertModel.run(mazdaId, 'CX-3', 'cx-3', 'crossover');
  await insertModel.run(mazdaId, 'CX-30', 'cx-30', 'crossover');
  await insertModel.run(mazdaId, 'CX-5', 'cx-5', 'suv');
  await insertModel.run(mazdaId, 'CX-60', 'cx-60', 'suv');
  await insertModel.run(mazdaId, 'MX-5', 'mx-5', 'cabrio');

  // Mercedes-Benz
  await insertModel.run(mercedesId, 'A Serisi', 'a-serisi', 'hatchback');
  await insertModel.run(mercedesId, 'C Serisi', 'c-serisi', 'sedan');
  await insertModel.run(mercedesId, 'CLA', 'cla', 'sedan');
  await insertModel.run(mercedesId, 'E Serisi', 'e-serisi', 'sedan');
  await insertModel.run(mercedesId, 'S Serisi', 's-serisi', 'sedan');
  await insertModel.run(mercedesId, 'GLA', 'gla', 'crossover');
  await insertModel.run(mercedesId, 'GLB', 'glb', 'suv');
  await insertModel.run(mercedesId, 'GLC', 'glc', 'suv');
  await insertModel.run(mercedesId, 'GLE', 'gle', 'suv');
  await insertModel.run(mercedesId, 'GLS', 'gls', 'suv');
  await insertModel.run(mercedesId, 'EQA', 'eqa', 'suv');
  await insertModel.run(mercedesId, 'EQB', 'eqb', 'suv');
  await insertModel.run(mercedesId, 'EQC', 'eqc', 'suv');
  await insertModel.run(mercedesId, 'EQS', 'eqs', 'sedan');
  await insertModel.run(mercedesId, 'AMG GT', 'amg-gt', 'coupe');

  // MG
  await insertModel.run(mgId, 'MG4', 'mg4', 'hatchback');
  await insertModel.run(mgId, 'ZS', 'zs', 'crossover');
  await insertModel.run(mgId, 'HS', 'hs', 'suv');
  await insertModel.run(mgId, 'Marvel R', 'marvel-r', 'suv');

  // Mini
  await insertModel.run(miniId, 'Cooper', 'cooper', 'hatchback');
  await insertModel.run(miniId, 'Countryman', 'countryman', 'crossover');
  await insertModel.run(miniId, 'Clubman', 'clubman', 'station_wagon');
  await insertModel.run(miniId, 'Cabrio', 'cabrio', 'cabrio');

  // Mitsubishi
  await insertModel.run(mitsuId, 'ASX', 'asx', 'crossover');
  await insertModel.run(mitsuId, 'Eclipse Cross', 'eclipse-cross', 'suv');
  await insertModel.run(mitsuId, 'Outlander', 'outlander', 'suv');
  await insertModel.run(mitsuId, 'L200', 'l200', 'suv');
  await insertModel.run(mitsuId, 'Space Star', 'space-star', 'hatchback');

  // Nissan
  await insertModel.run(nissanId, 'Micra', 'micra', 'hatchback');
  await insertModel.run(nissanId, 'Juke', 'juke', 'crossover');
  await insertModel.run(nissanId, 'Qashqai', 'qashqai', 'suv');
  await insertModel.run(nissanId, 'X-Trail', 'x-trail', 'suv');
  await insertModel.run(nissanId, 'Leaf', 'leaf', 'hatchback');
  await insertModel.run(nissanId, 'Ariya', 'ariya', 'suv');
  await insertModel.run(nissanId, 'GT-R', 'gt-r', 'coupe');

  // Opel
  await insertModel.run(opelId, 'Corsa', 'corsa', 'hatchback');
  await insertModel.run(opelId, 'Astra', 'astra', 'hatchback');
  await insertModel.run(opelId, 'Mokka', 'mokka', 'crossover');
  await insertModel.run(opelId, 'Crossland', 'crossland', 'crossover');
  await insertModel.run(opelId, 'Grandland', 'grandland', 'suv');
  await insertModel.run(opelId, 'Insignia', 'insignia', 'sedan');
  await insertModel.run(opelId, 'Combo', 'combo', 'minivan');

  // Peugeot
  await insertModel.run(peugeotId, '208', '208', 'hatchback');
  await insertModel.run(peugeotId, '308', '308', 'hatchback');
  await insertModel.run(peugeotId, '408', '408', 'crossover');
  await insertModel.run(peugeotId, '508', '508', 'sedan');
  await insertModel.run(peugeotId, '2008', '2008', 'crossover');
  await insertModel.run(peugeotId, '3008', '3008', 'suv');
  await insertModel.run(peugeotId, '5008', '5008', 'suv');
  await insertModel.run(peugeotId, 'Rifter', 'rifter', 'minivan');

  // Porsche
  await insertModel.run(porscheId, '911', '911', 'coupe');
  await insertModel.run(porscheId, 'Cayenne', 'cayenne', 'suv');
  await insertModel.run(porscheId, 'Macan', 'macan', 'suv');
  await insertModel.run(porscheId, 'Panamera', 'panamera', 'sedan');
  await insertModel.run(porscheId, 'Taycan', 'taycan', 'sedan');
  await insertModel.run(porscheId, '718 Cayman', '718-cayman', 'coupe');
  await insertModel.run(porscheId, '718 Boxster', '718-boxster', 'cabrio');

  // Renault
  await insertModel.run(renaultId, 'Clio', 'clio', 'hatchback');
  await insertModel.run(renaultId, 'Megane', 'megane', 'hatchback');
  await insertModel.run(renaultId, 'Megane E-Tech', 'megane-e-tech', 'crossover');
  await insertModel.run(renaultId, 'Captur', 'captur', 'crossover');
  await insertModel.run(renaultId, 'Kadjar', 'kadjar', 'suv');
  await insertModel.run(renaultId, 'Austral', 'austral', 'suv');
  await insertModel.run(renaultId, 'Koleos', 'koleos', 'suv');
  await insertModel.run(renaultId, 'Taliant', 'taliant', 'sedan');
  await insertModel.run(renaultId, 'Kangoo', 'kangoo', 'minivan');
  await insertModel.run(renaultId, 'Zoe', 'zoe', 'hatchback');

  // Rolls-Royce
  await insertModel.run(rollsId, 'Ghost', 'ghost', 'sedan');
  await insertModel.run(rollsId, 'Phantom', 'phantom', 'sedan');
  await insertModel.run(rollsId, 'Cullinan', 'cullinan', 'suv');
  await insertModel.run(rollsId, 'Spectre', 'spectre', 'coupe');
  await insertModel.run(rollsId, 'Wraith', 'wraith', 'coupe');

  // Seat
  await insertModel.run(seatId, 'Ibiza', 'ibiza', 'hatchback');
  await insertModel.run(seatId, 'Leon', 'leon', 'hatchback');
  await insertModel.run(seatId, 'Arona', 'arona', 'crossover');
  await insertModel.run(seatId, 'Ateca', 'ateca', 'suv');
  await insertModel.run(seatId, 'Tarraco', 'tarraco', 'suv');

  // Skoda
  await insertModel.run(skodaId, 'Fabia', 'fabia', 'hatchback');
  await insertModel.run(skodaId, 'Scala', 'scala', 'hatchback');
  await insertModel.run(skodaId, 'Octavia', 'octavia', 'sedan');
  await insertModel.run(skodaId, 'Superb', 'superb', 'sedan');
  await insertModel.run(skodaId, 'Kamiq', 'kamiq', 'crossover');
  await insertModel.run(skodaId, 'Karoq', 'karoq', 'suv');
  await insertModel.run(skodaId, 'Kodiaq', 'kodiaq', 'suv');
  await insertModel.run(skodaId, 'Enyaq', 'enyaq', 'suv');

  // Smart
  await insertModel.run(smartId, '#1', 'smart-1', 'crossover');
  await insertModel.run(smartId, '#3', 'smart-3', 'crossover');
  await insertModel.run(smartId, 'Fortwo', 'fortwo', 'hatchback');

  // Subaru
  await insertModel.run(subaruId, 'Impreza', 'impreza', 'sedan');
  await insertModel.run(subaruId, 'XV', 'xv', 'crossover');
  await insertModel.run(subaruId, 'Forester', 'forester', 'suv');
  await insertModel.run(subaruId, 'Outback', 'outback', 'station_wagon');
  await insertModel.run(subaruId, 'BRZ', 'brz', 'coupe');
  await insertModel.run(subaruId, 'Solterra', 'solterra', 'suv');

  // Suzuki
  await insertModel.run(suzukiId, 'Swift', 'swift', 'hatchback');
  await insertModel.run(suzukiId, 'Vitara', 'vitara', 'suv');
  await insertModel.run(suzukiId, 'S-Cross', 's-cross', 'crossover');
  await insertModel.run(suzukiId, 'Jimny', 'jimny', 'suv');
  await insertModel.run(suzukiId, 'Ignis', 'ignis', 'hatchback');
  await insertModel.run(suzukiId, 'Across', 'across', 'suv');
  await insertModel.run(suzukiId, 'Swace', 'swace', 'station_wagon');

  // Tesla
  await insertModel.run(teslaId, 'Model 3', 'model-3', 'sedan');
  await insertModel.run(teslaId, 'Model Y', 'model-y', 'suv');
  await insertModel.run(teslaId, 'Model S', 'model-s', 'sedan');
  await insertModel.run(teslaId, 'Model X', 'model-x', 'suv');
  await insertModel.run(teslaId, 'Cybertruck', 'cybertruck', 'suv');

  // Togg
  await insertModel.run(toggId, 'T10X', 't10x', 'suv');
  await insertModel.run(toggId, 'T10F', 't10f', 'sedan');

  // Toyota
  await insertModel.run(toyotaId, 'Yaris', 'yaris', 'hatchback');
  await insertModel.run(toyotaId, 'Yaris Cross', 'yaris-cross', 'crossover');
  await insertModel.run(toyotaId, 'Corolla', 'corolla', 'sedan');
  await insertModel.run(toyotaId, 'Corolla Cross', 'corolla-cross', 'crossover');
  await insertModel.run(toyotaId, 'Camry', 'camry', 'sedan');
  await insertModel.run(toyotaId, 'C-HR', 'c-hr', 'suv');
  await insertModel.run(toyotaId, 'RAV4', 'rav4', 'suv');
  await insertModel.run(toyotaId, 'Highlander', 'highlander', 'suv');
  await insertModel.run(toyotaId, 'Land Cruiser', 'land-cruiser', 'suv');
  await insertModel.run(toyotaId, 'Supra', 'supra', 'coupe');
  await insertModel.run(toyotaId, 'bZ4X', 'bz4x', 'suv');
  await insertModel.run(toyotaId, 'Hilux', 'hilux', 'suv');
  await insertModel.run(toyotaId, 'Proace City', 'proace-city', 'minivan');

  // Volkswagen
  await insertModel.run(vwId, 'Polo', 'polo', 'hatchback');
  await insertModel.run(vwId, 'Golf', 'golf', 'hatchback');
  await insertModel.run(vwId, 'Passat', 'passat', 'sedan');
  await insertModel.run(vwId, 'Arteon', 'arteon', 'sedan');
  await insertModel.run(vwId, 'T-Cross', 't-cross', 'crossover');
  await insertModel.run(vwId, 'T-Roc', 't-roc', 'crossover');
  await insertModel.run(vwId, 'Tiguan', 'tiguan', 'suv');
  await insertModel.run(vwId, 'Touareg', 'touareg', 'suv');
  await insertModel.run(vwId, 'ID.3', 'id-3', 'hatchback');
  await insertModel.run(vwId, 'ID.4', 'id-4', 'suv');
  await insertModel.run(vwId, 'ID.5', 'id-5', 'suv');
  await insertModel.run(vwId, 'Caddy', 'caddy', 'minivan');
  await insertModel.run(vwId, 'Taigo', 'taigo', 'crossover');

  // Volvo
  await insertModel.run(volvoId, 'S60', 's60', 'sedan');
  await insertModel.run(volvoId, 'S90', 's90', 'sedan');
  await insertModel.run(volvoId, 'V60', 'v60', 'station_wagon');
  await insertModel.run(volvoId, 'V90', 'v90', 'station_wagon');
  await insertModel.run(volvoId, 'XC40', 'xc40', 'suv');
  await insertModel.run(volvoId, 'XC60', 'xc60', 'suv');
  await insertModel.run(volvoId, 'XC90', 'xc90', 'suv');
  await insertModel.run(volvoId, 'C40 Recharge', 'c40-recharge', 'suv');
  await insertModel.run(volvoId, 'EX30', 'ex30', 'crossover');
  await insertModel.run(volvoId, 'EX90', 'ex90', 'suv');

  console.log('✅ Modeller oluşturuldu');

  // ========== LISTINGS ==========
  const insertListing = db.prepare(`
    INSERT INTO listings (user_id, brand_id, model_id, title, slug, year, km, fuel_type, transmission, hp, color, price, city, district, status, is_featured, package_type, view_count, favorite_count, damage_free, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', ?, ?, ?, ?, ?, ?)
  `);

  const corollaModelId = (await db.prepare("SELECT id FROM models WHERE slug='corolla'").get()).id;
  const bmw3ModelId = (await db.prepare("SELECT id FROM models WHERE slug='3-serisi'").get()).id;
  const audiA4ModelId = (await db.prepare("SELECT id FROM models WHERE slug='a4'").get()).id;
  const golfModelId = (await db.prepare("SELECT id FROM models WHERE slug='golf'").get()).id;
  const civicModelId = (await db.prepare("SELECT id FROM models WHERE slug='civic'").get()).id;
  const t10xModelId = (await db.prepare("SELECT id FROM models WHERE slug='t10x'").get()).id;
  const xc60ModelId = (await db.prepare("SELECT id FROM models WHERE slug='xc60'").get()).id;
  const mercCModelId = (await db.prepare("SELECT id FROM models WHERE slug='c-serisi'").get()).id;
  const passatModelId = (await db.prepare("SELECT id FROM models WHERE slug='passat'").get()).id;
  const bmw5ModelId = (await db.prepare("SELECT id FROM models WHERE slug='5-serisi'").get()).id;

  await insertListing.run(ahmetId, toyotaId, corollaModelId, '2024 Toyota Corolla 1.8 Hybrid Dream e-CVT', 'toyota-corolla-2024-hybrid-dream', 2024, 0, 'hibrit', 'otomatik', 140, 'Beyaz', 1285000, 'İstanbul', 'Kadıköy', 1, 'premium', 342, 28, 1, 'Sıfır kilometre, full donanımlı Toyota Corolla Hybrid Dream paketi. Araç showroom\'dan teslim edilecektir.');
  await insertListing.run(mehmetId, bmwId, bmw3ModelId, '2021 BMW 320i First Edition Sport Line', 'bmw-320i-2021-first-edition', 2021, 45000, 'benzin', 'otomatik', 170, 'Siyah', 2450000, 'İstanbul', 'Beşiktaş', 1, 'vip', 567, 45, 1, 'Hatasız boyasız BMW 320i. Tüm bakımları yetkili serviste yapılmıştır. Sunroof, deri döşeme, Harman Kardon ses sistemi.');
  await insertListing.run(elifId, audiId, audiA4ModelId, '2020 Audi A4 2.0 TFSI Quattro Design', 'audi-a4-2020-quattro', 2020, 62000, 'benzin', 'otomatik', 190, 'Gri', 2150000, 'Ankara', 'Çankaya', 0, 'premium', 234, 18, 1, 'Quattro dört çeker sistem, matrix LED far, sanal kokpit, Bang & Olufsen ses sistemi mevcut.');
  await insertListing.run(ahmetId, vwId, golfModelId, '2023 Volkswagen Golf 1.5 eTSI R-Line', 'vw-golf-2023-etsi', 2023, 15000, 'benzin', 'otomatik', 150, 'Lacivert', 1650000, 'İzmir', 'Bornova', 0, 'free', 189, 12, 1, 'Mild hybrid teknolojili Golf 8.5. R-Line paket, dijital kokpit, App-Connect, LED matrix far.');
  await insertListing.run(canId, hondaId, civicModelId, '2024 Honda Civic 1.5 VTEC Turbo Elegance', 'honda-civic-2024-vtec', 2024, 5000, 'benzin', 'otomatik', 182, 'Kırmızı', 1850000, 'İstanbul', 'Ataşehir', 1, 'premium', 412, 35, 1, '11. nesil Civic, 1.5 turbo motor. Honda Sensing güvenlik paketi, kablosuz CarPlay, Bose ses sistemi.');
  await insertListing.run(mehmetId, toggId, t10xModelId, '2024 Togg T10X Long Range', 'togg-t10x-2024-long-range', 2024, 8000, 'elektrik', 'otomatik', 200, 'Beyaz', 1550000, 'İstanbul', 'Maltepe', 1, 'vip', 892, 67, 1, 'Yerli ve milli elektrikli SUV. 523km menzil, hızlı şarj desteği, akıllı asistan.');
  await insertListing.run(elifId, toyotaId, corollaModelId, '2023 Toyota Corolla 1.8 Hybrid Flame X-Pack', 'toyota-corolla-2023-flame', 2023, 18500, 'hibrit', 'otomatik', 140, 'Gri', 1190000, 'Ankara', 'Yenimahalle', 0, 'free', 156, 9, 1, 'Tek elden, garajda kullanılmış Corolla Hybrid. Tüm bakımları zamanında yapılmıştır.');
  await insertListing.run(canId, toyotaId, corollaModelId, '2022 Toyota Corolla 1.8 Hybrid Vision', 'toyota-corolla-2022-vision', 2022, 42000, 'hibrit', 'otomatik', 122, 'Beyaz', 1050000, 'İzmir', 'Karşıyaka', 0, 'free', 98, 5, 0, '2022 model Corolla Vision paket. Değişensiz, ön tampon boyalı. Detaylı ekspertiz raporu mevcuttur.');
  await insertListing.run(eliteAutoUserId, volvoId, xc60ModelId, '2022 Volvo XC60 B4 AWD Inscription', 'volvo-xc60-2022-inscription', 2022, 35000, 'hibrit', 'otomatik', 197, 'Siyah', 3200000, 'İstanbul', 'Levent', 1, 'vip', 324, 29, 1, 'Mild hybrid, AWD, Inscription paket. Bowers & Wilkins, panoramik cam tavan, pilot assist.');
  await insertListing.run(ahmetId, mercedesId, mercCModelId, '2023 Mercedes-Benz C200 AMG Line', 'mercedes-c200-2023-amg', 2023, 22000, 'benzin', 'otomatik', 204, 'Beyaz', 3450000, 'İstanbul', 'Beşiktaş', 1, 'premium', 445, 38, 1, 'W206 kasa, AMG Line paket. Burmester ses sistemi, MBUX, dijital gösterge, ambient aydınlatma.');
  await insertListing.run(mehmetId, vwId, passatModelId, '2021 Volkswagen Passat 1.5 TSI Elegance', 'vw-passat-2021-elegance', 2021, 55000, 'benzin', 'otomatik', 150, 'Gri', 1450000, 'Bursa', 'Nilüfer', 0, 'free', 112, 7, 1, 'B8.5 facelift Passat. Ergoactive koltuk, LED matrix far, Travel Assist, dijital kokpit.');
  await insertListing.run(canId, bmwId, bmw5ModelId, '2022 BMW 520i M Sport', 'bmw-520i-2022-msport', 2022, 30000, 'benzin', 'otomatik', 184, 'Lacivert', 3100000, 'Ankara', 'Çankaya', 1, 'premium', 287, 22, 1, 'G30 LCI, M Sport paket, head-up display, Harman Kardon, laser far, gesture control.');

  console.log('✅ İlanlar oluşturuldu');

  // ========== LISTING IMAGES ==========
  const insertImage = db.prepare('INSERT INTO listing_images (listing_id, url, is_primary, sort_order) VALUES (?, ?, ?, ?)');
  const placeholderImg = '/images/car-placeholder.svg';
  for (let i = 1; i <= 12; i++) {
    await insertImage.run(i, placeholderImg, 1, 0);
    await insertImage.run(i, placeholderImg, 0, 1);
    await insertImage.run(i, placeholderImg, 0, 2);
  }
  console.log('✅ İlan görselleri oluşturuldu');

  // ========== LISTING FEATURES ==========
  const insertFeature = db.prepare('INSERT INTO listing_features (listing_id, feature) VALUES (?, ?)');
  const commonFeatures = ['ABS', 'ESP', 'Geri Görüş Kamerası', 'Park Sensörü', 'Yokuş Kalkış Desteği', 'Şerit Takip', 'Otomatik Klima', 'Navigasyon'];
  for (let i = 1; i <= 12; i++) {
    for (const f of commonFeatures) await insertFeature.run(i, f);
  }
  console.log('✅ İlan özellikleri oluşturuldu');

  // ========== BUSINESSES ==========
  const insertBiz = db.prepare(`
    INSERT INTO businesses (user_id, name, slug, type, description, address, city, district, phone, rating, review_count, is_premium, is_verified, lat, lng, working_hours, services)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  await insertBiz.run(masterBoschId, 'Master Bosch Car Service', 'master-bosch', 'servis', 'Bosch yetkili araç servisi. Tüm marka araçlara profesyonel bakım ve onarım hizmeti.', 'Atatürk Mah. Servis Cad. No:45', 'İstanbul', 'Kadıköy', '0216 345 6789', 4.9, 324, 1, 1, 40.9862, 29.0286, '{"pazartesi":"08:30-18:00","sali":"08:30-18:00","carsamba":"08:30-18:00","persembe":"08:30-18:00","cuma":"08:30-18:00","cumartesi":"09:00-14:00","pazar":"Kapalı"}', '["Periyodik Bakım","Motor Onarım","Fren Sistemi","Elektrik & Elektronik","Klima","Mekatronik","Ön Düzen","Egzoz"]');
  await insertBiz.run(eliteAutoUserId, 'Elite Auto Gallery', 'elite-auto', 'galeri', 'Premium araç galerisi. Garantili ikinci el araçlar.', 'Bağdat Cad. No:128', 'İstanbul', 'Maltepe', '0216 456 7890', 4.7, 156, 1, 1, 40.9339, 29.1286, '{"pazartesi":"09:00-19:00","sali":"09:00-19:00","carsamba":"09:00-19:00","persembe":"09:00-19:00","cuma":"09:00-19:00","cumartesi":"10:00-17:00","pazar":"Kapalı"}', '["Araç Alım","Araç Satım","Takas","Ekspertiz","Kredi Danışmanlık"]');
  await insertBiz.run(otoMasterId, 'Oto Master Hybrid Servis', 'oto-master-hybrid', 'servis', 'Hybrid ve elektrikli araç uzmanı. Toyota, Lexus, Honda hybrid sistemleri.', 'Sanayi Mah. Usta Sok. No:12', 'İstanbul', 'Ümraniye', '0216 567 8901', 4.6, 98, 0, 1, 41.0163, 29.1210, '{"pazartesi":"08:00-18:30","sali":"08:00-18:30","carsamba":"08:00-18:30","persembe":"08:00-18:30","cuma":"08:00-18:30","cumartesi":"09:00-15:00","pazar":"Kapalı"}', '["Hybrid Bakım","Batarya Testi","Inverter Onarım","Periyodik Bakım","Elektrik Sistemi"]');
  await insertBiz.run(muratOtoId, 'Murat Oto Elektrik', 'murat-oto-elektrik', 'servis', 'Araç elektrik ve elektronik sistemleri uzmanı.', 'Organize Sanayi Bölgesi C Blok No:8', 'İstanbul', 'Tuzla', '0216 678 9012', 4.5, 67, 0, 1, 40.8187, 29.2883, '{"pazartesi":"08:30-18:00","sali":"08:30-18:00","carsamba":"08:30-18:00","persembe":"08:30-18:00","cuma":"08:30-18:00","cumartesi":"09:00-14:00","pazar":"Kapalı"}', '["Oto Elektrik","Beyin Tamiri","Far Ayarı","Aküm Değişimi","Klima Gazı"]');

  console.log('✅ İşletmeler oluşturuldu');

  // ========== REVIEWS ==========
  const insertReview = db.prepare('INSERT INTO reviews (business_id, user_id, rating, comment, service_type) VALUES (?, ?, ?, ?, ?)');
  await insertReview.run(1, ahmetId, 5, 'Mükemmel hizmet! BMW\'min bakımını çok titiz yaptılar. Kesinlikle tavsiye ederim.', 'Periyodik Bakım');
  await insertReview.run(1, elifId, 5, 'Fren sorunu için gittim, aynı gün hallettiler. Fiyatlar da gayet makul.', 'Fren Sistemi');
  await insertReview.run(1, canId, 4, 'Genel olarak memnunum, sadece randevu saatine biraz geç başladık.', 'Motor Onarım');
  await insertReview.run(2, mehmetId, 5, 'Çok profesyonel bir galeri. Aracımı burada sattım, tüm süreci çok güzel yönettiler.', 'Araç Satım');
  await insertReview.run(3, ahmetId, 5, 'Corolla Hybrid\'imin bakımını burada yaptırıyorum. Hybrid konusunda gerçekten uzmanlar.', 'Hybrid Bakım');

  console.log('✅ Değerlendirmeler oluşturuldu');

  // ========== FORUM CATEGORIES ==========
  const insertForumCat = db.prepare('INSERT INTO forum_categories (name, slug, description, icon, color, topic_count, post_count) VALUES (?, ?, ?, ?, ?, ?, ?)');
  await insertForumCat.run('Genel Tartışma', 'genel', 'Otomobil dünyası hakkında genel sohbetler', 'forum', '#1775d3', 156, 2340);
  await insertForumCat.run('Teknik Yardım', 'teknik', 'Araç arıza ve teknik sorunlar için yardım', 'build', '#ef4444', 234, 3450);
  await insertForumCat.run('Alım Rehberi', 'alim-rehberi', 'Araç almadan önce sorularınızı sorun', 'shopping_cart', '#22c55e', 189, 2100);
  await insertForumCat.run('Bakım & Onarım', 'bakim', 'Bakım ipuçları ve onarım deneyimleri', 'home_repair_service', '#f97316', 145, 1890);
  await insertForumCat.run('Modifiye & Aksesuar', 'modifiye', 'Araç modifiye ve aksesuar paylaşımları', 'auto_awesome', '#8b5cf6', 98, 890);
  await insertForumCat.run('Elektrikli Araçlar', 'elektrikli', 'Elektrikli ve hybrid araç sahipleri kulübü', 'bolt', '#06b6d4', 67, 540);

  console.log('✅ Forum kategorileri oluşturuldu');

  // ========== FORUM TOPICS ==========
  const insertTopic = db.prepare(`
    INSERT INTO forum_topics (category_id, user_id, title, slug, content, is_pinned, view_count, reply_count, last_reply_at, last_reply_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now', ?), ?)
  `);

  await insertTopic.run(1, ahmetId, '500.000 TL - 1.000.000 TL arası en iyi araç önerileri', '500k-1m-en-iyi-arac', 'Merhaba arkadaşlar, bu bütçe aralığında alabileceğim en iyi araç nedir? Günlük şehir içi kullanım + haftada bir şehirlerarası yolculuk yapıyorum. Yakıt ekonomisi önemli. Önerilerinizi bekliyorum!', 1, 2450, 45, '-2 hours', mehmetId);
  await insertTopic.run(2, elifId, 'DSG Şanzıman Bakım İpuçları ve Deneyimlerim', 'dsg-sanziman-bakim', 'VW Golf 7 DSG şanzıman kullanıyorum. 60.000 km\'de yağ değişimi yaptırdım. Bu yazıda DSG bakım deneyimlerimi paylaşıyorum...', 0, 1890, 32, '-5 hours', ahmetId);
  await insertTopic.run(3, mehmetId, 'Corolla Hybrid vs Civic - Detaylı Karşılaştırma', 'corolla-vs-civic', 'Her iki aracı da uzun süre test ettim. Yakıt tüketimi, konfor, sürüş keyfi ve bakım maliyetleri açısından karşılaştırmamı paylaşıyorum.', 1, 3200, 67, '-1 hours', canId);
  await insertTopic.run(2, canId, 'BMW N20 Motor Zincir Uzama Sorunu', 'bmw-n20-zincir-uzama', 'BMW 320i 2015 model, N20 motor. 80.000 km\'de zincir sesi gelmeye başladı. Bu sorunu yaşayan var mı? Maliyet ne kadar olur?', 0, 1450, 28, '-3 hours', elifId);
  await insertTopic.run(6, ahmetId, 'Togg T10X 10.000 km Kullanıcı Deneyimi', 'togg-t10x-10bin-km', 'Togg T10X\'imi 10.000 km kullandım. Menzil, şarj altyapısı, sürüş deneyimi hakkında detaylı yazımı paylaşıyorum.', 1, 4500, 89, '-30 minutes', mehmetId);
  await insertTopic.run(4, elifId, 'Corolla Hybrid 60.000 km bakım maliyeti ne kadar?', 'corolla-hybrid-60k-bakim', '60.000 km bakımına girmem gerekiyor. Yetkili servis ve özel servis fiyatlarını karşılaştıran var mı?', 0, 890, 12, '-2 hours', ahmetId);
  await insertTopic.run(1, mehmetId, 'Türkiye\'de araç fiyatları ne zaman düşer?', 'arac-fiyatlari-ne-zaman-duser', 'ÖTV indirimi beklentileri ve piyasa analizi. Sizce araç fiyatları yakın zamanda düşer mi?', 0, 5600, 124, '-45 minutes', canId);
  await insertTopic.run(5, canId, 'Golf 8 R-Line Modifiye Projesi', 'golf-8-rline-modifiye', 'Golf 8 R-Line\'ıma yaptığım modifiye çalışmalarını paylaşıyorum. Egzoz, süspansiyon, jant değişikliği...', 0, 1200, 34, '-8 hours', elifId);

  console.log('✅ Forum konuları oluşturuldu');

  // ========== FORUM REPLIES ==========
  const insertReply = db.prepare('INSERT INTO forum_replies (topic_id, user_id, content, like_count) VALUES (?, ?, ?, ?)');

  // Topic 1: 500K-1M arası araç
  await insertReply.run(1, mehmetId, 'Honda Civic kesinlikle değerlendirmeniz gereken bir araç. 1.0 turbo motor ile yakıt tüketimi çok düşük ve sürüş keyfi harika.', 15);
  await insertReply.run(1, elifId, 'Bu bütçeyle Toyota Corolla Hybrid almayı düşünebilirsin. 4.5L/100km tüketimle en ekonomik seçenek.', 23);
  await insertReply.run(1, canId, 'Ben de aynı bütçeyle araştırma yapıyordum. Sonunda Corolla Hybrid aldım, çok memnunum. Şehir içi 3.8L yakıyor!', 18);

  // Topic 2: DSG bakım
  await insertReply.run(2, ahmetId, 'Ben de Golf 7 kullanıyorum, DSG yağını 40.000 km\'de değiştirdim. Vites geçişleri gözle görülür şekilde yumuşadı.', 8);
  await insertReply.run(2, mehmetId, 'DSG bakımını kesinlikle ihmal etmeyin. Ben 80.000 km\'ye kadar yaptırmadım, mechatronik arızası çıktı. 45.000 TL tuttu!', 32);

  // Topic 3: Corolla vs Civic
  await insertReply.run(3, ahmetId, 'Yakıt tüketiminde Corolla Hybrid açık ara önde. Ama sürüş dinamikleri açısından Civic\'i tercih ederim.', 19);
  await insertReply.run(3, canId, 'Toplam sahip olma maliyetini düşünürsek Corolla Hybrid kazanır. Bakım maliyetleri ve yakıt tasarrufu çok önemli.', 14);
  await insertReply.run(3, elifId, 'Civic\'in iç mekan kalitesi ve teknolojisi bir adım önde. Bose ses sistemi muhteşem.', 11);

  // Topic 6: Corolla 60K bakım
  await insertReply.run(6, mehmetId, 'Yetkili serviste 60.000 km bakımı yaklaşık 8.000-10.000 TL tutuyor. Özel servislerde 4.000-6.000 TL arasında.', 7);
  await insertReply.run(6, canId, 'Bende de aynı sorun oldu, özel serviste yaptırdım. Çok memnunum, yarı fiyatına hallettik.', 5);

  console.log('✅ Forum yanıtları oluşturuldu');

  // ========== FAVORITES ==========
  const insertFav = db.prepare('INSERT INTO favorites (user_id, listing_id) VALUES (?, ?)');
  await insertFav.run(ahmetId, 2);  await insertFav.run(ahmetId, 3);  await insertFav.run(ahmetId, 5);
  await insertFav.run(elifId, 1);  await insertFav.run(elifId, 6);
  await insertFav.run(mehmetId, 1);  await insertFav.run(mehmetId, 4);  await insertFav.run(mehmetId, 9);
  await insertFav.run(canId, 2);  await insertFav.run(canId, 10);

  console.log('✅ Favoriler oluşturuldu');

  // ========== MESSAGES ==========
  const insertMsg = db.prepare("INSERT INTO messages (sender_id, receiver_id, listing_id, content, is_read) VALUES (?, ?, ?, ?, ?)");
  await insertMsg.run(mehmetId, ahmetId, 1, 'Merhaba, Toyota Corolla ilanınız hâlâ geçerli mi? Takas düşünür müsünüz?', 1);
  await insertMsg.run(ahmetId, mehmetId, 1, 'Merhaba, evet ilan geçerli. Takas olarak ne düşünüyorsunuz?', 1);
  await insertMsg.run(mehmetId, ahmetId, 1, 'BMW 320i için teklif gönderdim, değerlendirmenizi rica ederim.', 0);
  await insertMsg.run(masterBoschId, ahmetId, null, 'Randevunuz onaylandı. 15 Ocak Pazartesi saat 09:00.', 0);
  await insertMsg.run(elifId, canId, 5, 'Honda Civic çok güzel araç, fiyatta pazarlık payı var mı?', 0);

  console.log('✅ Mesajlar oluşturuldu');

  // ========== APPOINTMENTS ==========
  const insertAppt = db.prepare("INSERT INTO appointments (business_id, user_id, service_type, vehicle_info, date, time, status) VALUES (?, ?, ?, ?, date('now', ?), ?, ?)");
  await insertAppt.run(1, ahmetId, 'Periyodik Bakım', 'BMW 320i 2021', '+0 days', '09:00', 'confirmed');
  await insertAppt.run(1, elifId, 'Fren Sistemi', 'Audi A4 2020', '+0 days', '11:30', 'pending');
  await insertAppt.run(1, canId, 'Ekspertiz', 'Mercedes C200 2023', '+0 days', '14:00', 'confirmed');
  await insertAppt.run(3, ahmetId, 'Hybrid Bakım', 'Toyota Corolla 2024', '+1 days', '10:00', 'confirmed');
  await insertAppt.run(1, mehmetId, 'Motor Onarım', 'VW Passat 2021', '+2 days', '09:30', 'pending');

  console.log('✅ Randevular oluşturuldu');

  // ========== NOTIFICATIONS ==========
  const insertNotif = db.prepare("INSERT INTO notifications (user_id, type, title, message, link, is_read) VALUES (?, ?, ?, ?, ?, ?)");
  await insertNotif.run(ahmetId, 'message', 'Yeni Mesaj', 'Mehmet K. size mesaj gönderdi', '/mesajlar', 0);
  await insertNotif.run(ahmetId, 'favorite', 'İlanınız Beğenildi', 'Toyota Corolla ilanınız 28 kez favorilere eklendi', '/kullanici/ilanlarim', 0);
  await insertNotif.run(ahmetId, 'appointment', 'Randevu Onayı', 'Master Bosch servis randevunuz onaylandı', '/kullanici/randevularim', 0);
  await insertNotif.run(masterBoschId, 'appointment', 'Yeni Randevu', '3 yeni randevu talebi var', '/isletme/randevular', 0);
  await insertNotif.run(masterBoschId, 'review', 'Yeni Değerlendirme', 'Ahmet Y. 5 yıldız değerlendirme bıraktı', '/isletme/degerlendirmeler', 0);

  console.log('✅ Bildirimler oluşturuldu');

  // ========== VEHICLE HUB ==========
  const insertHub = db.prepare(`
    INSERT INTO vehicle_hubs (brand_id, model_id, year, avg_price, fuel_type, engine, hp, torque, transmission, acceleration, top_speed, fuel_consumption, length, width, height, wheelbase, weight, editor_rating, editor_review, pros, cons, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  await insertHub.run(toyotaId, corollaModelId, 2024, 1250000, 'Hybrid', '1.8L 4 Silindirli Hybrid', 140, '185 Nm', 'e-CVT', '9.4 saniye', '180 km/s', '4.5L/100km', '4.630 mm', '1.780 mm', '1.435 mm', '2.700 mm', '1.370 kg', 8.5,
    '2024 model Toyota Corolla Hybrid, sınıfının en verimli araçlarından biri olmaya devam ediyor. Düşük yakıt tüketimi, yüksek donanım seviyesi ve Toyota\'nın güvenilirlik itibarı ile öne çıkıyor.',
    '["Sınıfının en düşük yakıt tüketimi (4.5L/100km)","Zengin güvenlik donanımı (Toyota Safety Sense 3.0)","Güvenilir ve düşük bakım maliyetli","Konforlu şehir içi sürüş deneyimi","Yüksek ikinci el değeri"]',
    '["CVT vites kutusu yüksek devirlerde gürültülü","Sürüş dinamikleri rakiplere göre zayıf","Bagaj hacmi hybrid batarya sebebiyle küçük","İç mekan malzeme kalitesi ortalama"]',
    'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&q=80'
  );

  await insertHub.run(bmwId, bmw3ModelId, 2021, 2450000, 'Benzin', '2.0L 4 Silindirli Turbo', 170, '250 Nm', '8 İleri Otomatik', '7.1 saniye', '235 km/s', '6.4L/100km', '4.709 mm', '1.827 mm', '1.442 mm', '2.851 mm', '1.520 kg', 8.8,
    'BMW 3 Serisi, sportif sürüş dinamikleri ve premium donanımıyla D segmentinin referans noktası olmaya devam ediyor. Hassas direksiyon hissi ve güçlü motor seçenekleriyle sürüş keyfi sunarken, son teknoloji iDrive sistemiyle dijital deneyimi de üst seviyeye taşıyor.',
    '["Sınıfının en iyi sürüş dinamikleri","Güçlü ve verimli motor seçenekleri","Premium iç mekan kalitesi","Gelişmiş sürücü destek sistemleri","Yüksek ikinci el değeri"]',
    '["Bakım ve yedek parça maliyetleri yüksek","Arka koltuk alanı rakiplere göre dar","Bazı donanımlar ekstra paket gerektiriyor","Sert süspansiyon günlük kullanımda rahatsız edebilir"]',
    'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80'
  );

  await insertHub.run(hondaId, civicModelId, 2024, 1850000, 'Benzin', '1.5L 4 Silindirli VTEC Turbo', 182, '240 Nm', 'CVT', '7.3 saniye', '220 km/s', '6.0L/100km', '4.674 mm', '1.800 mm', '1.415 mm', '2.735 mm', '1.360 kg', 8.7,
    '11. nesil Honda Civic, hem tasarımıyla hem teknolojisiyle büyük bir sıçrama yaptı. VTEC Turbo motor keyifli bir sürüş sunarken, Honda Sensing güvenlik paketi tam donanım olarak sunuluyor. İç mekan kalitesi ve ergonomisi sınıfında öne çıkıyor.',
    '["Sportif ve çekici tasarım","VTEC Turbo motorun yüksek performansı","Sınıfının en iyi iç mekan kalitesi","Honda Sensing güvenlik paketi standart","Düşük bakım maliyeti"]',
    '["CVT vites kutusu sportif sürüşte yetersiz kalabiliyor","Hibrit seçeneği Türkiye\'de sunulmuyor","Bagaj hacmi sedan segmentinde ortalama","Gürültü yalıtımı iyileştirilebilir"]',
    'https://images.unsplash.com/photo-1679508056592-8afe54eb4b57?w=800&q=80'
  );

  await insertHub.run(toggId, t10xModelId, 2024, 1550000, 'Elektrik', 'Çift Elektrik Motoru AWD', 200, '330 Nm', 'Tek İleri Otomatik', '7.6 saniye', '180 km/s', '0L/100km (18.1 kWh)', '4.600 mm', '1.900 mm', '1.640 mm', '2.830 mm', '2.017 kg', 8.0,
    'Togg T10X, Türkiye\'nin ilk yerli elektrikli SUV\'u olarak büyük beklentileri karşılıyor. 523 km menzil, hızlı şarj desteği ve akıllı asistan özellikleriyle dikkat çekiyor. Geniş iç hacmi ve teknolojik donanımıyla günlük kullanıma son derece uygun.',
    '["523 km menzil","Hızlı şarj desteği (DC 150kW)","Geniş ve teknolojik iç mekan","Yerli üretim ve uygun fiyat","Akıllı dijital asistan"]',
    '["Şarj altyapısı henüz yeterli değil","Servis ağı sınırlı","İkinci el değeri henüz belirsiz","Bazı malzeme kalitesi sorunları"]',
    'https://images.unsplash.com/photo-1690406757952-89e1d7abf824?w=800&q=80'
  );

  await insertHub.run(vwId, golfModelId, 2023, 1650000, 'Benzin', '1.5L eTSI Mild Hybrid', 150, '250 Nm', '7 İleri DSG', '8.5 saniye', '224 km/s', '5.2L/100km', '4.284 mm', '1.789 mm', '1.456 mm', '2.636 mm', '1.310 kg', 8.3,
    'Volkswagen Golf 8.5, kompakt sınıfın efsanevi modeli olmaya devam ediyor. eTSI mild hybrid teknolojisiyle yakıt tasarrufu sağlarken, dijital kokpit ve yenilenmiş multimedya sistemiyle teknolojide de rakiplerinin önünde. DSG şanzıman kusursuz vites geçişleri sunuyor.',
    '["Mükemmel sürüş kalitesi ve konfor","eTSI mild hybrid teknolojisi ile düşük tüketim","Geniş bagaj hacmi (381L)","Gelişmiş güvenlik sistemleri","Yüksek yapı kalitesi"]',
    '["Dokunmatik kontroller pratik değil","DSG bakım maliyetleri yüksek","Fiyatı segment ortalamasının üstünde","İç mekan tasarımı muhafazakar"]',
    'https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?w=800&q=80'
  );

  console.log('✅ Araç hub verileri oluşturuldu');

  // ========== MODERATION ==========
  const insertMod = db.prepare("INSERT INTO moderation_queue (type, item_id, reason, reported_by, status) VALUES (?, ?, ?, ?, 'pending')");
  await insertMod.run('listing', 8, 'Sahte ilan şüphesi', elifId);
  await insertMod.run('listing', 11, 'Fiyat tutarsızlığı', ahmetId);
  await insertMod.run('business', 2, 'İşletme başvurusu onayı', null);
  await insertMod.run('forum_reply', 5, 'Uygunsuz yorum', mehmetId);

  console.log('✅ Moderasyon kuyruğu oluşturuldu');

  console.log('\n🎉 Tüm seed verileri başarıyla yüklendi!');
  console.log('📧 Test hesapları:');
  console.log('   Admin:    admin@arabaincele.com / 123456');
  console.log('   Bireysel: ahmet@email.com / 123456');
  console.log('   Kurumsal: servis@masterbosch.com / 123456');
}

seed().catch(err => { console.error('❌ Seed hatası:', err); process.exit(1); });
