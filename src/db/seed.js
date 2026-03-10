const { getDb, initializeDatabase } = require('./database');
const bcrypt = require('bcryptjs');

function seed() {
  const db = initializeDatabase();

  // Mevcut veri varsa temizle
  db.exec(`
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

  // ========== USERS ==========
  const hash = bcrypt.hashSync('123456', 10);
  const insertUser = db.prepare(`INSERT INTO users (email, password, name, phone, role, is_verified, profile_completion) VALUES (?, ?, ?, ?, ?, ?, ?)`);

  insertUser.run('admin@arabaincele.com', hash, 'Admin', '0555 000 0000', 'admin', 1, 100);
  insertUser.run('ahmet@email.com', hash, 'Ahmet Yılmaz', '0532 111 2233', 'bireysel', 1, 75);
  insertUser.run('elif@email.com', hash, 'Elif Kaya', '0533 222 3344', 'bireysel', 1, 60);
  insertUser.run('mehmet@email.com', hash, 'Mehmet Demir', '0534 333 4455', 'bireysel', 1, 90);
  insertUser.run('zeynep@email.com', hash, 'Zeynep Aydın', '0535 444 5566', 'bireysel', 0, 40);
  insertUser.run('can@email.com', hash, 'Can Doğan', '0536 555 6677', 'bireysel', 1, 85);
  insertUser.run('servis@masterbosch.com', hash, 'Master Bosch Servis', '0212 555 7788', 'kurumsal', 1, 100);
  insertUser.run('galeri@eliteauto.com', hash, 'Elite Auto Galeri', '0216 555 8899', 'kurumsal', 1, 95);
  insertUser.run('servis@otomaster.com', hash, 'Oto Master', '0212 666 1122', 'kurumsal', 1, 90);
  insertUser.run('servis@muratoto.com', hash, 'Murat Oto Elektrik', '0216 777 3344', 'kurumsal', 1, 80);

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
  for (const [name, slug, logo] of brandData) insertBrand.run(name, slug, logo);

  console.log('✅ Markalar oluşturuldu');

  // ========== MODELS ==========
  const insertModel = db.prepare(`INSERT INTO models (brand_id, name, slug, body_type) VALUES (?, ?, ?, ?)`);
  const getBrandId = (slug) => db.prepare('SELECT id FROM brands WHERE slug=?').get(slug).id;

  const alfaId = getBrandId('alfa-romeo');
  const astonId = getBrandId('aston-martin');
  const audiId = getBrandId('audi');
  const bentleyId = getBrandId('bentley');
  const bmwId = getBrandId('bmw');
  const bydId = getBrandId('byd');
  const cadillacId = getBrandId('cadillac');
  const cheryId = getBrandId('chery');
  const chevyId = getBrandId('chevrolet');
  const citroenId = getBrandId('citroen');
  const cupraId = getBrandId('cupra');
  const daciaId = getBrandId('dacia');
  const dsId = getBrandId('ds');
  const ferrariId = getBrandId('ferrari');
  const fiatId = getBrandId('fiat');
  const fordId = getBrandId('ford');
  const genesisId = getBrandId('genesis');
  const hondaId = getBrandId('honda');
  const hyundaiId = getBrandId('hyundai');
  const infinitiId = getBrandId('infiniti');
  const jaguarId = getBrandId('jaguar');
  const jeepId = getBrandId('jeep');
  const kiaId = getBrandId('kia');
  const lamboId = getBrandId('lamborghini');
  const landRoverId = getBrandId('land-rover');
  const lexusId = getBrandId('lexus');
  const maseratiId = getBrandId('maserati');
  const mazdaId = getBrandId('mazda');
  const mercedesId = getBrandId('mercedes');
  const mgId = getBrandId('mg');
  const miniId = getBrandId('mini');
  const mitsuId = getBrandId('mitsubishi');
  const nissanId = getBrandId('nissan');
  const opelId = getBrandId('opel');
  const peugeotId = getBrandId('peugeot');
  const porscheId = getBrandId('porsche');
  const renaultId = getBrandId('renault');
  const rollsId = getBrandId('rolls-royce');
  const seatId = getBrandId('seat');
  const skodaId = getBrandId('skoda');
  const smartId = getBrandId('smart');
  const subaruId = getBrandId('subaru');
  const suzukiId = getBrandId('suzuki');
  const teslaId = getBrandId('tesla');
  const toggId = getBrandId('togg');
  const toyotaId = getBrandId('toyota');
  const vwId = getBrandId('volkswagen');
  const volvoId = getBrandId('volvo');

  // Alfa Romeo
  insertModel.run(alfaId, 'Giulia', 'giulia', 'sedan');
  insertModel.run(alfaId, 'Stelvio', 'stelvio', 'suv');
  insertModel.run(alfaId, 'Tonale', 'tonale', 'crossover');

  // Aston Martin
  insertModel.run(astonId, 'Vantage', 'vantage', 'coupe');
  insertModel.run(astonId, 'DB12', 'db12', 'coupe');
  insertModel.run(astonId, 'DBX', 'dbx', 'suv');

  // Audi
  insertModel.run(audiId, 'A3', 'a3', 'sedan');
  insertModel.run(audiId, 'A4', 'a4', 'sedan');
  insertModel.run(audiId, 'A6', 'a6', 'sedan');
  insertModel.run(audiId, 'A8', 'a8', 'sedan');
  insertModel.run(audiId, 'Q3', 'q3', 'suv');
  insertModel.run(audiId, 'Q5', 'q5', 'suv');
  insertModel.run(audiId, 'Q7', 'q7', 'suv');
  insertModel.run(audiId, 'Q8', 'q8', 'suv');
  insertModel.run(audiId, 'e-tron GT', 'e-tron-gt', 'sedan');
  insertModel.run(audiId, 'RS6 Avant', 'rs6-avant', 'station_wagon');
  insertModel.run(audiId, 'TT', 'tt', 'coupe');

  // Bentley
  insertModel.run(bentleyId, 'Continental GT', 'continental-gt', 'coupe');
  insertModel.run(bentleyId, 'Flying Spur', 'flying-spur', 'sedan');
  insertModel.run(bentleyId, 'Bentayga', 'bentayga', 'suv');

  // BMW
  insertModel.run(bmwId, '1 Serisi', '1-serisi', 'hatchback');
  insertModel.run(bmwId, '2 Serisi Gran Coupe', '2-serisi-gc', 'sedan');
  insertModel.run(bmwId, '3 Serisi', '3-serisi', 'sedan');
  insertModel.run(bmwId, '4 Serisi', '4-serisi', 'coupe');
  insertModel.run(bmwId, '5 Serisi', '5-serisi', 'sedan');
  insertModel.run(bmwId, '7 Serisi', '7-serisi', 'sedan');
  insertModel.run(bmwId, 'X1', 'x1', 'suv');
  insertModel.run(bmwId, 'X3', 'x3', 'suv');
  insertModel.run(bmwId, 'X5', 'x5', 'suv');
  insertModel.run(bmwId, 'X7', 'x7', 'suv');
  insertModel.run(bmwId, 'Z4', 'z4', 'cabrio');
  insertModel.run(bmwId, 'iX', 'ix', 'suv');
  insertModel.run(bmwId, 'i4', 'i4', 'sedan');

  // BYD
  insertModel.run(bydId, 'Atto 3', 'atto-3', 'suv');
  insertModel.run(bydId, 'Han', 'han', 'sedan');
  insertModel.run(bydId, 'Tang', 'tang', 'suv');
  insertModel.run(bydId, 'Seal', 'seal', 'sedan');
  insertModel.run(bydId, 'Dolphin', 'dolphin', 'hatchback');

  // Cadillac
  insertModel.run(cadillacId, 'Escalade', 'escalade', 'suv');
  insertModel.run(cadillacId, 'CT5', 'ct5', 'sedan');
  insertModel.run(cadillacId, 'XT6', 'xt6', 'suv');

  // Chery
  insertModel.run(cheryId, 'Tiggo 4 Pro', 'tiggo-4-pro', 'suv');
  insertModel.run(cheryId, 'Tiggo 7 Pro', 'tiggo-7-pro', 'suv');
  insertModel.run(cheryId, 'Tiggo 8 Pro', 'tiggo-8-pro', 'suv');
  insertModel.run(cheryId, 'Arrizo 5', 'arrizo-5', 'sedan');

  // Chevrolet
  insertModel.run(chevyId, 'Camaro', 'camaro', 'coupe');
  insertModel.run(chevyId, 'Corvette', 'corvette', 'coupe');
  insertModel.run(chevyId, 'Tahoe', 'tahoe', 'suv');
  insertModel.run(chevyId, 'Equinox', 'equinox', 'suv');

  // Citroën
  insertModel.run(citroenId, 'C3', 'c3', 'hatchback');
  insertModel.run(citroenId, 'C3 Aircross', 'c3-aircross', 'crossover');
  insertModel.run(citroenId, 'C4', 'c4', 'hatchback');
  insertModel.run(citroenId, 'C5 Aircross', 'c5-aircross', 'suv');
  insertModel.run(citroenId, 'Berlingo', 'berlingo', 'minivan');

  // Cupra
  insertModel.run(cupraId, 'Formentor', 'formentor', 'crossover');
  insertModel.run(cupraId, 'Born', 'born', 'hatchback');
  insertModel.run(cupraId, 'Leon', 'leon', 'hatchback');
  insertModel.run(cupraId, 'Ateca', 'ateca', 'suv');

  // Dacia
  insertModel.run(daciaId, 'Sandero', 'sandero', 'hatchback');
  insertModel.run(daciaId, 'Duster', 'duster', 'suv');
  insertModel.run(daciaId, 'Jogger', 'jogger', 'minivan');
  insertModel.run(daciaId, 'Spring', 'spring', 'hatchback');

  // DS
  insertModel.run(dsId, 'DS 3', 'ds-3', 'crossover');
  insertModel.run(dsId, 'DS 4', 'ds-4', 'hatchback');
  insertModel.run(dsId, 'DS 7', 'ds-7', 'suv');
  insertModel.run(dsId, 'DS 9', 'ds-9', 'sedan');

  // Ferrari
  insertModel.run(ferrariId, '296 GTB', '296-gtb', 'coupe');
  insertModel.run(ferrariId, 'Roma', 'roma', 'coupe');
  insertModel.run(ferrariId, 'SF90 Stradale', 'sf90', 'coupe');
  insertModel.run(ferrariId, 'Purosangue', 'purosangue', 'suv');
  insertModel.run(ferrariId, '812', '812', 'coupe');

  // Fiat
  insertModel.run(fiatId, 'Egea Sedan', 'egea-sedan', 'sedan');
  insertModel.run(fiatId, 'Egea Hatchback', 'egea-hatchback', 'hatchback');
  insertModel.run(fiatId, 'Egea Cross', 'egea-cross', 'station_wagon');
  insertModel.run(fiatId, '500', '500', 'hatchback');
  insertModel.run(fiatId, '500X', '500x', 'crossover');
  insertModel.run(fiatId, 'Panda', 'panda', 'hatchback');
  insertModel.run(fiatId, 'Doblo', 'doblo', 'minivan');

  // Ford
  insertModel.run(fordId, 'Focus', 'focus', 'hatchback');
  insertModel.run(fordId, 'Fiesta', 'fiesta', 'hatchback');
  insertModel.run(fordId, 'Puma', 'puma', 'crossover');
  insertModel.run(fordId, 'Kuga', 'kuga', 'suv');
  insertModel.run(fordId, 'Mustang', 'mustang', 'coupe');
  insertModel.run(fordId, 'Mustang Mach-E', 'mustang-mach-e', 'suv');
  insertModel.run(fordId, 'Tourneo Courier', 'tourneo-courier', 'minivan');
  insertModel.run(fordId, 'Ranger', 'ranger', 'suv');

  // Genesis
  insertModel.run(genesisId, 'G70', 'g70', 'sedan');
  insertModel.run(genesisId, 'G80', 'g80', 'sedan');
  insertModel.run(genesisId, 'GV70', 'gv70', 'suv');
  insertModel.run(genesisId, 'GV80', 'gv80', 'suv');

  // Honda
  insertModel.run(hondaId, 'Civic', 'civic', 'sedan');
  insertModel.run(hondaId, 'City', 'city', 'sedan');
  insertModel.run(hondaId, 'Accord', 'accord', 'sedan');
  insertModel.run(hondaId, 'CR-V', 'cr-v', 'suv');
  insertModel.run(hondaId, 'HR-V', 'hr-v', 'crossover');
  insertModel.run(hondaId, 'Jazz', 'jazz', 'hatchback');
  insertModel.run(hondaId, 'ZR-V', 'zr-v', 'suv');

  // Hyundai
  insertModel.run(hyundaiId, 'i10', 'i10', 'hatchback');
  insertModel.run(hyundaiId, 'i20', 'i20', 'hatchback');
  insertModel.run(hyundaiId, 'Bayon', 'bayon', 'crossover');
  insertModel.run(hyundaiId, 'Kona', 'kona', 'crossover');
  insertModel.run(hyundaiId, 'Tucson', 'tucson', 'suv');
  insertModel.run(hyundaiId, 'Santa Fe', 'santa-fe', 'suv');
  insertModel.run(hyundaiId, 'Ioniq 5', 'ioniq-5', 'suv');
  insertModel.run(hyundaiId, 'Ioniq 6', 'ioniq-6', 'sedan');
  insertModel.run(hyundaiId, 'Elantra', 'elantra', 'sedan');

  // Infiniti
  insertModel.run(infinitiId, 'Q50', 'q50', 'sedan');
  insertModel.run(infinitiId, 'Q60', 'q60', 'coupe');
  insertModel.run(infinitiId, 'QX50', 'qx50', 'suv');
  insertModel.run(infinitiId, 'QX80', 'qx80', 'suv');

  // Jaguar
  insertModel.run(jaguarId, 'F-Pace', 'f-pace', 'suv');
  insertModel.run(jaguarId, 'E-Pace', 'e-pace', 'suv');
  insertModel.run(jaguarId, 'F-Type', 'f-type', 'coupe');
  insertModel.run(jaguarId, 'XF', 'xf', 'sedan');

  // Jeep
  insertModel.run(jeepId, 'Renegade', 'renegade', 'crossover');
  insertModel.run(jeepId, 'Compass', 'compass', 'suv');
  insertModel.run(jeepId, 'Cherokee', 'cherokee', 'suv');
  insertModel.run(jeepId, 'Grand Cherokee', 'grand-cherokee', 'suv');
  insertModel.run(jeepId, 'Wrangler', 'wrangler', 'suv');
  insertModel.run(jeepId, 'Avenger', 'avenger', 'crossover');

  // Kia
  insertModel.run(kiaId, 'Picanto', 'picanto', 'hatchback');
  insertModel.run(kiaId, 'Rio', 'rio', 'hatchback');
  insertModel.run(kiaId, 'Ceed', 'ceed', 'hatchback');
  insertModel.run(kiaId, 'Sportage', 'sportage', 'suv');
  insertModel.run(kiaId, 'Sorento', 'sorento', 'suv');
  insertModel.run(kiaId, 'Niro', 'niro', 'crossover');
  insertModel.run(kiaId, 'EV6', 'ev6', 'suv');
  insertModel.run(kiaId, 'EV9', 'ev9', 'suv');
  insertModel.run(kiaId, 'Stinger', 'stinger', 'sedan');
  insertModel.run(kiaId, 'XCeed', 'xceed', 'crossover');

  // Lamborghini
  insertModel.run(lamboId, 'Huracán', 'huracan', 'coupe');
  insertModel.run(lamboId, 'Urus', 'urus', 'suv');
  insertModel.run(lamboId, 'Revuelto', 'revuelto', 'coupe');

  // Land Rover
  insertModel.run(landRoverId, 'Range Rover', 'range-rover', 'suv');
  insertModel.run(landRoverId, 'Range Rover Sport', 'range-rover-sport', 'suv');
  insertModel.run(landRoverId, 'Range Rover Evoque', 'range-rover-evoque', 'suv');
  insertModel.run(landRoverId, 'Range Rover Velar', 'range-rover-velar', 'suv');
  insertModel.run(landRoverId, 'Defender', 'defender', 'suv');
  insertModel.run(landRoverId, 'Discovery', 'discovery', 'suv');
  insertModel.run(landRoverId, 'Discovery Sport', 'discovery-sport', 'suv');

  // Lexus
  insertModel.run(lexusId, 'IS', 'is', 'sedan');
  insertModel.run(lexusId, 'ES', 'es', 'sedan');
  insertModel.run(lexusId, 'LS', 'ls', 'sedan');
  insertModel.run(lexusId, 'NX', 'nx', 'suv');
  insertModel.run(lexusId, 'RX', 'rx', 'suv');
  insertModel.run(lexusId, 'UX', 'ux', 'crossover');
  insertModel.run(lexusId, 'LC', 'lc', 'coupe');
  insertModel.run(lexusId, 'RZ', 'rz', 'suv');

  // Maserati
  insertModel.run(maseratiId, 'Ghibli', 'ghibli', 'sedan');
  insertModel.run(maseratiId, 'Quattroporte', 'quattroporte', 'sedan');
  insertModel.run(maseratiId, 'Levante', 'levante', 'suv');
  insertModel.run(maseratiId, 'GranTurismo', 'granturismo', 'coupe');
  insertModel.run(maseratiId, 'Grecale', 'grecale', 'suv');
  insertModel.run(maseratiId, 'MC20', 'mc20', 'coupe');

  // Mazda
  insertModel.run(mazdaId, 'Mazda2', 'mazda2', 'hatchback');
  insertModel.run(mazdaId, 'Mazda3', 'mazda3', 'hatchback');
  insertModel.run(mazdaId, 'Mazda6', 'mazda6', 'sedan');
  insertModel.run(mazdaId, 'CX-3', 'cx-3', 'crossover');
  insertModel.run(mazdaId, 'CX-30', 'cx-30', 'crossover');
  insertModel.run(mazdaId, 'CX-5', 'cx-5', 'suv');
  insertModel.run(mazdaId, 'CX-60', 'cx-60', 'suv');
  insertModel.run(mazdaId, 'MX-5', 'mx-5', 'cabrio');

  // Mercedes-Benz
  insertModel.run(mercedesId, 'A Serisi', 'a-serisi', 'hatchback');
  insertModel.run(mercedesId, 'C Serisi', 'c-serisi', 'sedan');
  insertModel.run(mercedesId, 'CLA', 'cla', 'sedan');
  insertModel.run(mercedesId, 'E Serisi', 'e-serisi', 'sedan');
  insertModel.run(mercedesId, 'S Serisi', 's-serisi', 'sedan');
  insertModel.run(mercedesId, 'GLA', 'gla', 'crossover');
  insertModel.run(mercedesId, 'GLB', 'glb', 'suv');
  insertModel.run(mercedesId, 'GLC', 'glc', 'suv');
  insertModel.run(mercedesId, 'GLE', 'gle', 'suv');
  insertModel.run(mercedesId, 'GLS', 'gls', 'suv');
  insertModel.run(mercedesId, 'EQA', 'eqa', 'suv');
  insertModel.run(mercedesId, 'EQB', 'eqb', 'suv');
  insertModel.run(mercedesId, 'EQC', 'eqc', 'suv');
  insertModel.run(mercedesId, 'EQS', 'eqs', 'sedan');
  insertModel.run(mercedesId, 'AMG GT', 'amg-gt', 'coupe');

  // MG
  insertModel.run(mgId, 'MG4', 'mg4', 'hatchback');
  insertModel.run(mgId, 'ZS', 'zs', 'crossover');
  insertModel.run(mgId, 'HS', 'hs', 'suv');
  insertModel.run(mgId, 'Marvel R', 'marvel-r', 'suv');

  // Mini
  insertModel.run(miniId, 'Cooper', 'cooper', 'hatchback');
  insertModel.run(miniId, 'Countryman', 'countryman', 'crossover');
  insertModel.run(miniId, 'Clubman', 'clubman', 'station_wagon');
  insertModel.run(miniId, 'Cabrio', 'cabrio', 'cabrio');

  // Mitsubishi
  insertModel.run(mitsuId, 'ASX', 'asx', 'crossover');
  insertModel.run(mitsuId, 'Eclipse Cross', 'eclipse-cross', 'suv');
  insertModel.run(mitsuId, 'Outlander', 'outlander', 'suv');
  insertModel.run(mitsuId, 'L200', 'l200', 'suv');
  insertModel.run(mitsuId, 'Space Star', 'space-star', 'hatchback');

  // Nissan
  insertModel.run(nissanId, 'Micra', 'micra', 'hatchback');
  insertModel.run(nissanId, 'Juke', 'juke', 'crossover');
  insertModel.run(nissanId, 'Qashqai', 'qashqai', 'suv');
  insertModel.run(nissanId, 'X-Trail', 'x-trail', 'suv');
  insertModel.run(nissanId, 'Leaf', 'leaf', 'hatchback');
  insertModel.run(nissanId, 'Ariya', 'ariya', 'suv');
  insertModel.run(nissanId, 'GT-R', 'gt-r', 'coupe');

  // Opel
  insertModel.run(opelId, 'Corsa', 'corsa', 'hatchback');
  insertModel.run(opelId, 'Astra', 'astra', 'hatchback');
  insertModel.run(opelId, 'Mokka', 'mokka', 'crossover');
  insertModel.run(opelId, 'Crossland', 'crossland', 'crossover');
  insertModel.run(opelId, 'Grandland', 'grandland', 'suv');
  insertModel.run(opelId, 'Insignia', 'insignia', 'sedan');
  insertModel.run(opelId, 'Combo', 'combo', 'minivan');

  // Peugeot
  insertModel.run(peugeotId, '208', '208', 'hatchback');
  insertModel.run(peugeotId, '308', '308', 'hatchback');
  insertModel.run(peugeotId, '408', '408', 'crossover');
  insertModel.run(peugeotId, '508', '508', 'sedan');
  insertModel.run(peugeotId, '2008', '2008', 'crossover');
  insertModel.run(peugeotId, '3008', '3008', 'suv');
  insertModel.run(peugeotId, '5008', '5008', 'suv');
  insertModel.run(peugeotId, 'Rifter', 'rifter', 'minivan');

  // Porsche
  insertModel.run(porscheId, '911', '911', 'coupe');
  insertModel.run(porscheId, 'Cayenne', 'cayenne', 'suv');
  insertModel.run(porscheId, 'Macan', 'macan', 'suv');
  insertModel.run(porscheId, 'Panamera', 'panamera', 'sedan');
  insertModel.run(porscheId, 'Taycan', 'taycan', 'sedan');
  insertModel.run(porscheId, '718 Cayman', '718-cayman', 'coupe');
  insertModel.run(porscheId, '718 Boxster', '718-boxster', 'cabrio');

  // Renault
  insertModel.run(renaultId, 'Clio', 'clio', 'hatchback');
  insertModel.run(renaultId, 'Megane', 'megane', 'hatchback');
  insertModel.run(renaultId, 'Megane E-Tech', 'megane-e-tech', 'crossover');
  insertModel.run(renaultId, 'Captur', 'captur', 'crossover');
  insertModel.run(renaultId, 'Kadjar', 'kadjar', 'suv');
  insertModel.run(renaultId, 'Austral', 'austral', 'suv');
  insertModel.run(renaultId, 'Koleos', 'koleos', 'suv');
  insertModel.run(renaultId, 'Taliant', 'taliant', 'sedan');
  insertModel.run(renaultId, 'Kangoo', 'kangoo', 'minivan');
  insertModel.run(renaultId, 'Zoe', 'zoe', 'hatchback');

  // Rolls-Royce
  insertModel.run(rollsId, 'Ghost', 'ghost', 'sedan');
  insertModel.run(rollsId, 'Phantom', 'phantom', 'sedan');
  insertModel.run(rollsId, 'Cullinan', 'cullinan', 'suv');
  insertModel.run(rollsId, 'Spectre', 'spectre', 'coupe');
  insertModel.run(rollsId, 'Wraith', 'wraith', 'coupe');

  // Seat
  insertModel.run(seatId, 'Ibiza', 'ibiza', 'hatchback');
  insertModel.run(seatId, 'Leon', 'leon', 'hatchback');
  insertModel.run(seatId, 'Arona', 'arona', 'crossover');
  insertModel.run(seatId, 'Ateca', 'ateca', 'suv');
  insertModel.run(seatId, 'Tarraco', 'tarraco', 'suv');

  // Skoda
  insertModel.run(skodaId, 'Fabia', 'fabia', 'hatchback');
  insertModel.run(skodaId, 'Scala', 'scala', 'hatchback');
  insertModel.run(skodaId, 'Octavia', 'octavia', 'sedan');
  insertModel.run(skodaId, 'Superb', 'superb', 'sedan');
  insertModel.run(skodaId, 'Kamiq', 'kamiq', 'crossover');
  insertModel.run(skodaId, 'Karoq', 'karoq', 'suv');
  insertModel.run(skodaId, 'Kodiaq', 'kodiaq', 'suv');
  insertModel.run(skodaId, 'Enyaq', 'enyaq', 'suv');

  // Smart
  insertModel.run(smartId, '#1', 'smart-1', 'crossover');
  insertModel.run(smartId, '#3', 'smart-3', 'crossover');
  insertModel.run(smartId, 'Fortwo', 'fortwo', 'hatchback');

  // Subaru
  insertModel.run(subaruId, 'Impreza', 'impreza', 'sedan');
  insertModel.run(subaruId, 'XV', 'xv', 'crossover');
  insertModel.run(subaruId, 'Forester', 'forester', 'suv');
  insertModel.run(subaruId, 'Outback', 'outback', 'station_wagon');
  insertModel.run(subaruId, 'BRZ', 'brz', 'coupe');
  insertModel.run(subaruId, 'Solterra', 'solterra', 'suv');

  // Suzuki
  insertModel.run(suzukiId, 'Swift', 'swift', 'hatchback');
  insertModel.run(suzukiId, 'Vitara', 'vitara', 'suv');
  insertModel.run(suzukiId, 'S-Cross', 's-cross', 'crossover');
  insertModel.run(suzukiId, 'Jimny', 'jimny', 'suv');
  insertModel.run(suzukiId, 'Ignis', 'ignis', 'hatchback');
  insertModel.run(suzukiId, 'Across', 'across', 'suv');
  insertModel.run(suzukiId, 'Swace', 'swace', 'station_wagon');

  // Tesla
  insertModel.run(teslaId, 'Model 3', 'model-3', 'sedan');
  insertModel.run(teslaId, 'Model Y', 'model-y', 'suv');
  insertModel.run(teslaId, 'Model S', 'model-s', 'sedan');
  insertModel.run(teslaId, 'Model X', 'model-x', 'suv');
  insertModel.run(teslaId, 'Cybertruck', 'cybertruck', 'suv');

  // Togg
  insertModel.run(toggId, 'T10X', 't10x', 'suv');
  insertModel.run(toggId, 'T10F', 't10f', 'sedan');

  // Toyota
  insertModel.run(toyotaId, 'Yaris', 'yaris', 'hatchback');
  insertModel.run(toyotaId, 'Yaris Cross', 'yaris-cross', 'crossover');
  insertModel.run(toyotaId, 'Corolla', 'corolla', 'sedan');
  insertModel.run(toyotaId, 'Corolla Cross', 'corolla-cross', 'crossover');
  insertModel.run(toyotaId, 'Camry', 'camry', 'sedan');
  insertModel.run(toyotaId, 'C-HR', 'c-hr', 'suv');
  insertModel.run(toyotaId, 'RAV4', 'rav4', 'suv');
  insertModel.run(toyotaId, 'Highlander', 'highlander', 'suv');
  insertModel.run(toyotaId, 'Land Cruiser', 'land-cruiser', 'suv');
  insertModel.run(toyotaId, 'Supra', 'supra', 'coupe');
  insertModel.run(toyotaId, 'bZ4X', 'bz4x', 'suv');
  insertModel.run(toyotaId, 'Hilux', 'hilux', 'suv');
  insertModel.run(toyotaId, 'Proace City', 'proace-city', 'minivan');

  // Volkswagen
  insertModel.run(vwId, 'Polo', 'polo', 'hatchback');
  insertModel.run(vwId, 'Golf', 'golf', 'hatchback');
  insertModel.run(vwId, 'Passat', 'passat', 'sedan');
  insertModel.run(vwId, 'Arteon', 'arteon', 'sedan');
  insertModel.run(vwId, 'T-Cross', 't-cross', 'crossover');
  insertModel.run(vwId, 'T-Roc', 't-roc', 'crossover');
  insertModel.run(vwId, 'Tiguan', 'tiguan', 'suv');
  insertModel.run(vwId, 'Touareg', 'touareg', 'suv');
  insertModel.run(vwId, 'ID.3', 'id-3', 'hatchback');
  insertModel.run(vwId, 'ID.4', 'id-4', 'suv');
  insertModel.run(vwId, 'ID.5', 'id-5', 'suv');
  insertModel.run(vwId, 'Caddy', 'caddy', 'minivan');
  insertModel.run(vwId, 'Taigo', 'taigo', 'crossover');

  // Volvo
  insertModel.run(volvoId, 'S60', 's60', 'sedan');
  insertModel.run(volvoId, 'S90', 's90', 'sedan');
  insertModel.run(volvoId, 'V60', 'v60', 'station_wagon');
  insertModel.run(volvoId, 'V90', 'v90', 'station_wagon');
  insertModel.run(volvoId, 'XC40', 'xc40', 'suv');
  insertModel.run(volvoId, 'XC60', 'xc60', 'suv');
  insertModel.run(volvoId, 'XC90', 'xc90', 'suv');
  insertModel.run(volvoId, 'C40 Recharge', 'c40-recharge', 'suv');
  insertModel.run(volvoId, 'EX30', 'ex30', 'crossover');
  insertModel.run(volvoId, 'EX90', 'ex90', 'suv');

  console.log('✅ Modeller oluşturuldu');

  // ========== LISTINGS ==========
  const insertListing = db.prepare(`
    INSERT INTO listings (user_id, brand_id, model_id, title, slug, year, km, fuel_type, transmission, hp, color, price, city, district, status, is_featured, package_type, view_count, favorite_count, damage_free, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', ?, ?, ?, ?, ?, ?)
  `);

  const corollaModelId = db.prepare("SELECT id FROM models WHERE slug='corolla'").get().id;
  const bmw3ModelId = db.prepare("SELECT id FROM models WHERE slug='3-serisi'").get().id;
  const audiA4ModelId = db.prepare("SELECT id FROM models WHERE slug='a4'").get().id;
  const golfModelId = db.prepare("SELECT id FROM models WHERE slug='golf'").get().id;
  const civicModelId = db.prepare("SELECT id FROM models WHERE slug='civic'").get().id;
  const t10xModelId = db.prepare("SELECT id FROM models WHERE slug='t10x'").get().id;
  const xc60ModelId = db.prepare("SELECT id FROM models WHERE slug='xc60'").get().id;
  const mercCModelId = db.prepare("SELECT id FROM models WHERE slug='c-serisi'").get().id;
  const passatModelId = db.prepare("SELECT id FROM models WHERE slug='passat'").get().id;
  const bmw5ModelId = db.prepare("SELECT id FROM models WHERE slug='5-serisi'").get().id;

  insertListing.run(2, toyotaId, corollaModelId, '2024 Toyota Corolla 1.8 Hybrid Dream e-CVT', 'toyota-corolla-2024-hybrid-dream', 2024, 0, 'hibrit', 'otomatik', 140, 'Beyaz', 1285000, 'İstanbul', 'Kadıköy', 1, 'premium', 342, 28, 1, 'Sıfır kilometre, full donanımlı Toyota Corolla Hybrid Dream paketi. Araç showroom\'dan teslim edilecektir.');
  insertListing.run(4, bmwId, bmw3ModelId, '2021 BMW 320i First Edition Sport Line', 'bmw-320i-2021-first-edition', 2021, 45000, 'benzin', 'otomatik', 170, 'Siyah', 2450000, 'İstanbul', 'Beşiktaş', 1, 'vip', 567, 45, 1, 'Hatasız boyasız BMW 320i. Tüm bakımları yetkili serviste yapılmıştır. Sunroof, deri döşeme, Harman Kardon ses sistemi.');
  insertListing.run(3, audiId, audiA4ModelId, '2020 Audi A4 2.0 TFSI Quattro Design', 'audi-a4-2020-quattro', 2020, 62000, 'benzin', 'otomatik', 190, 'Gri', 2150000, 'Ankara', 'Çankaya', 0, 'premium', 234, 18, 1, 'Quattro dört çeker sistem, matrix LED far, sanal kokpit, Bang & Olufsen ses sistemi mevcut.');
  insertListing.run(2, vwId, golfModelId, '2023 Volkswagen Golf 1.5 eTSI R-Line', 'vw-golf-2023-etsi', 2023, 15000, 'benzin', 'otomatik', 150, 'Lacivert', 1650000, 'İzmir', 'Bornova', 0, 'free', 189, 12, 1, 'Mild hybrid teknolojili Golf 8.5. R-Line paket, dijital kokpit, App-Connect, LED matrix far.');
  insertListing.run(6, hondaId, civicModelId, '2024 Honda Civic 1.5 VTEC Turbo Elegance', 'honda-civic-2024-vtec', 2024, 5000, 'benzin', 'otomatik', 182, 'Kırmızı', 1850000, 'İstanbul', 'Ataşehir', 1, 'premium', 412, 35, 1, '11. nesil Civic, 1.5 turbo motor. Honda Sensing güvenlik paketi, kablosuz CarPlay, Bose ses sistemi.');
  insertListing.run(4, toggId, t10xModelId, '2024 Togg T10X Long Range', 'togg-t10x-2024-long-range', 2024, 8000, 'elektrik', 'otomatik', 200, 'Beyaz', 1550000, 'İstanbul', 'Maltepe', 1, 'vip', 892, 67, 1, 'Yerli ve milli elektrikli SUV. 523km menzil, hızlı şarj desteği, akıllı asistan.');
  insertListing.run(3, toyotaId, corollaModelId, '2023 Toyota Corolla 1.8 Hybrid Flame X-Pack', 'toyota-corolla-2023-flame', 2023, 18500, 'hibrit', 'otomatik', 140, 'Gri', 1190000, 'Ankara', 'Yenimahalle', 0, 'free', 156, 9, 1, 'Tek elden, garajda kullanılmış Corolla Hybrid. Tüm bakımları zamanında yapılmıştır.');
  insertListing.run(6, toyotaId, corollaModelId, '2022 Toyota Corolla 1.8 Hybrid Vision', 'toyota-corolla-2022-vision', 2022, 42000, 'hibrit', 'otomatik', 122, 'Beyaz', 1050000, 'İzmir', 'Karşıyaka', 0, 'free', 98, 5, 0, '2022 model Corolla Vision paket. Değişensiz, ön tampon boyalı. Detaylı ekspertiz raporu mevcuttur.');
  insertListing.run(8, volvoId, xc60ModelId, '2022 Volvo XC60 B4 AWD Inscription', 'volvo-xc60-2022-inscription', 2022, 35000, 'hibrit', 'otomatik', 197, 'Siyah', 3200000, 'İstanbul', 'Levent', 1, 'vip', 324, 29, 1, 'Mild hybrid, AWD, Inscription paket. Bowers & Wilkins, panoramik cam tavan, pilot assist.');
  insertListing.run(2, mercedesId, mercCModelId, '2023 Mercedes-Benz C200 AMG Line', 'mercedes-c200-2023-amg', 2023, 22000, 'benzin', 'otomatik', 204, 'Beyaz', 3450000, 'İstanbul', 'Beşiktaş', 1, 'premium', 445, 38, 1, 'W206 kasa, AMG Line paket. Burmester ses sistemi, MBUX, dijital gösterge, ambient aydınlatma.');
  insertListing.run(4, vwId, passatModelId, '2021 Volkswagen Passat 1.5 TSI Elegance', 'vw-passat-2021-elegance', 2021, 55000, 'benzin', 'otomatik', 150, 'Gri', 1450000, 'Bursa', 'Nilüfer', 0, 'free', 112, 7, 1, 'B8.5 facelift Passat. Ergoactive koltuk, LED matrix far, Travel Assist, dijital kokpit.');
  insertListing.run(6, bmwId, bmw5ModelId, '2022 BMW 520i M Sport', 'bmw-520i-2022-msport', 2022, 30000, 'benzin', 'otomatik', 184, 'Lacivert', 3100000, 'Ankara', 'Çankaya', 1, 'premium', 287, 22, 1, 'G30 LCI, M Sport paket, head-up display, Harman Kardon, laser far, gesture control.');

  console.log('✅ İlanlar oluşturuldu');

  // ========== LISTING IMAGES ==========
  const insertImage = db.prepare('INSERT INTO listing_images (listing_id, url, is_primary, sort_order) VALUES (?, ?, ?, ?)');
  const placeholderImg = '/images/car-placeholder.svg';
  for (let i = 1; i <= 12; i++) {
    insertImage.run(i, placeholderImg, 1, 0);
    insertImage.run(i, placeholderImg, 0, 1);
    insertImage.run(i, placeholderImg, 0, 2);
  }
  console.log('✅ İlan görselleri oluşturuldu');

  // ========== LISTING FEATURES ==========
  const insertFeature = db.prepare('INSERT INTO listing_features (listing_id, feature) VALUES (?, ?)');
  const commonFeatures = ['ABS', 'ESP', 'Geri Görüş Kamerası', 'Park Sensörü', 'Yokuş Kalkış Desteği', 'Şerit Takip', 'Otomatik Klima', 'Navigasyon'];
  for (let i = 1; i <= 12; i++) {
    for (const f of commonFeatures) insertFeature.run(i, f);
  }
  console.log('✅ İlan özellikleri oluşturuldu');

  // ========== BUSINESSES ==========
  const insertBiz = db.prepare(`
    INSERT INTO businesses (user_id, name, slug, type, description, address, city, district, phone, rating, review_count, is_premium, is_verified, working_hours, services)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertBiz.run(7, 'Master Bosch Car Service', 'master-bosch', 'servis', 'Bosch yetkili araç servisi. Tüm marka araçlara profesyonel bakım ve onarım hizmeti.', 'Atatürk Mah. Servis Cad. No:45', 'İstanbul', 'Kadıköy', '0216 345 6789', 4.9, 324, 1, 1, '{"pazartesi":"08:30-18:00","sali":"08:30-18:00","carsamba":"08:30-18:00","persembe":"08:30-18:00","cuma":"08:30-18:00","cumartesi":"09:00-14:00","pazar":"Kapalı"}', '["Periyodik Bakım","Motor Onarım","Fren Sistemi","Elektrik & Elektronik","Klima","Mekatronik","Ön Düzen","Egzoz"]');
  insertBiz.run(8, 'Elite Auto Gallery', 'elite-auto', 'galeri', 'Premium araç galerisi. Garantili ikinci el araçlar.', 'Bağdat Cad. No:128', 'İstanbul', 'Maltepe', '0216 456 7890', 4.7, 156, 1, 1, '{"pazartesi":"09:00-19:00","sali":"09:00-19:00","carsamba":"09:00-19:00","persembe":"09:00-19:00","cuma":"09:00-19:00","cumartesi":"10:00-17:00","pazar":"Kapalı"}', '["Araç Alım","Araç Satım","Takas","Ekspertiz","Kredi Danışmanlık"]');
  insertBiz.run(9, 'Oto Master Hybrid Servis', 'oto-master-hybrid', 'servis', 'Hybrid ve elektrikli araç uzmanı. Toyota, Lexus, Honda hybrid sistemleri.', 'Sanayi Mah. Usta Sok. No:12', 'İstanbul', 'Ümraniye', '0216 567 8901', 4.6, 98, 0, 1, '{"pazartesi":"08:00-18:30","sali":"08:00-18:30","carsamba":"08:00-18:30","persembe":"08:00-18:30","cuma":"08:00-18:30","cumartesi":"09:00-15:00","pazar":"Kapalı"}', '["Hybrid Bakım","Batarya Testi","Inverter Onarım","Periyodik Bakım","Elektrik Sistemi"]');
  insertBiz.run(10, 'Murat Oto Elektrik', 'murat-oto-elektrik', 'servis', 'Araç elektrik ve elektronik sistemleri uzmanı.', 'Organize Sanayi Bölgesi C Blok No:8', 'İstanbul', 'Tuzla', '0216 678 9012', 4.5, 67, 0, 1, '{"pazartesi":"08:30-18:00","sali":"08:30-18:00","carsamba":"08:30-18:00","persembe":"08:30-18:00","cuma":"08:30-18:00","cumartesi":"09:00-14:00","pazar":"Kapalı"}', '["Oto Elektrik","Beyin Tamiri","Far Ayarı","Aküm Değişimi","Klima Gazı"]');

  console.log('✅ İşletmeler oluşturuldu');

  // ========== REVIEWS ==========
  const insertReview = db.prepare('INSERT INTO reviews (business_id, user_id, rating, comment, service_type) VALUES (?, ?, ?, ?, ?)');
  insertReview.run(1, 2, 5, 'Mükemmel hizmet! BMW\'min bakımını çok titiz yaptılar. Kesinlikle tavsiye ederim.', 'Periyodik Bakım');
  insertReview.run(1, 3, 5, 'Fren sorunu için gittim, aynı gün hallettiler. Fiyatlar da gayet makul.', 'Fren Sistemi');
  insertReview.run(1, 6, 4, 'Genel olarak memnunum, sadece randevu saatine biraz geç başladık.', 'Motor Onarım');
  insertReview.run(2, 4, 5, 'Çok profesyonel bir galeri. Aracımı burada sattım, tüm süreci çok güzel yönettiler.', 'Araç Satım');
  insertReview.run(3, 2, 5, 'Corolla Hybrid\'imin bakımını burada yaptırıyorum. Hybrid konusunda gerçekten uzmanlar.', 'Hybrid Bakım');

  console.log('✅ Değerlendirmeler oluşturuldu');

  // ========== FORUM CATEGORIES ==========
  const insertForumCat = db.prepare('INSERT INTO forum_categories (name, slug, description, icon, color, topic_count, post_count) VALUES (?, ?, ?, ?, ?, ?, ?)');
  insertForumCat.run('Genel Tartışma', 'genel', 'Otomobil dünyası hakkında genel sohbetler', 'forum', '#1775d3', 156, 2340);
  insertForumCat.run('Teknik Yardım', 'teknik', 'Araç arıza ve teknik sorunlar için yardım', 'build', '#ef4444', 234, 3450);
  insertForumCat.run('Alım Rehberi', 'alim-rehberi', 'Araç almadan önce sorularınızı sorun', 'shopping_cart', '#22c55e', 189, 2100);
  insertForumCat.run('Bakım & Onarım', 'bakim', 'Bakım ipuçları ve onarım deneyimleri', 'home_repair_service', '#f97316', 145, 1890);
  insertForumCat.run('Modifiye & Aksesuar', 'modifiye', 'Araç modifiye ve aksesuar paylaşımları', 'auto_awesome', '#8b5cf6', 98, 890);
  insertForumCat.run('Elektrikli Araçlar', 'elektrikli', 'Elektrikli ve hybrid araç sahipleri kulübü', 'bolt', '#06b6d4', 67, 540);

  console.log('✅ Forum kategorileri oluşturuldu');

  // ========== FORUM TOPICS ==========
  const insertTopic = db.prepare(`
    INSERT INTO forum_topics (category_id, user_id, title, slug, content, is_pinned, view_count, reply_count, last_reply_at, last_reply_by)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now', ?), ?)
  `);

  insertTopic.run(1, 2, '500.000 TL - 1.000.000 TL arası en iyi araç önerileri', '500k-1m-en-iyi-arac', 'Merhaba arkadaşlar, bu bütçe aralığında alabileceğim en iyi araç nedir? Günlük şehir içi kullanım + haftada bir şehirlerarası yolculuk yapıyorum. Yakıt ekonomisi önemli. Önerilerinizi bekliyorum!', 1, 2450, 45, '-2 hours', 4);
  insertTopic.run(2, 3, 'DSG Şanzıman Bakım İpuçları ve Deneyimlerim', 'dsg-sanziman-bakim', 'VW Golf 7 DSG şanzıman kullanıyorum. 60.000 km\'de yağ değişimi yaptırdım. Bu yazıda DSG bakım deneyimlerimi paylaşıyorum...', 0, 1890, 32, '-5 hours', 2);
  insertTopic.run(3, 4, 'Corolla Hybrid vs Civic - Detaylı Karşılaştırma', 'corolla-vs-civic', 'Her iki aracı da uzun süre test ettim. Yakıt tüketimi, konfor, sürüş keyfi ve bakım maliyetleri açısından karşılaştırmamı paylaşıyorum.', 1, 3200, 67, '-1 hours', 6);
  insertTopic.run(2, 6, 'BMW N20 Motor Zincir Uzama Sorunu', 'bmw-n20-zincir-uzama', 'BMW 320i 2015 model, N20 motor. 80.000 km\'de zincir sesi gelmeye başladı. Bu sorunu yaşayan var mı? Maliyet ne kadar olur?', 0, 1450, 28, '-3 hours', 3);
  insertTopic.run(6, 2, 'Togg T10X 10.000 km Kullanıcı Deneyimi', 'togg-t10x-10bin-km', 'Togg T10X\'imi 10.000 km kullandım. Menzil, şarj altyapısı, sürüş deneyimi hakkında detaylı yazımı paylaşıyorum.', 1, 4500, 89, '-30 minutes', 4);
  insertTopic.run(4, 3, 'Corolla Hybrid 60.000 km bakım maliyeti ne kadar?', 'corolla-hybrid-60k-bakim', '60.000 km bakımına girmem gerekiyor. Yetkili servis ve özel servis fiyatlarını karşılaştıran var mı?', 0, 890, 12, '-2 hours', 2);
  insertTopic.run(1, 4, 'Türkiye\'de araç fiyatları ne zaman düşer?', 'arac-fiyatlari-ne-zaman-duser', 'ÖTV indirimi beklentileri ve piyasa analizi. Sizce araç fiyatları yakın zamanda düşer mi?', 0, 5600, 124, '-45 minutes', 6);
  insertTopic.run(5, 6, 'Golf 8 R-Line Modifiye Projesi', 'golf-8-rline-modifiye', 'Golf 8 R-Line\'ıma yaptığım modifiye çalışmalarını paylaşıyorum. Egzoz, süspansiyon, jant değişikliği...', 0, 1200, 34, '-8 hours', 3);

  console.log('✅ Forum konuları oluşturuldu');

  // ========== FORUM REPLIES ==========
  const insertReply = db.prepare('INSERT INTO forum_replies (topic_id, user_id, content, like_count) VALUES (?, ?, ?, ?)');

  // Topic 1: 500K-1M arası araç
  insertReply.run(1, 4, 'Honda Civic kesinlikle değerlendirmeniz gereken bir araç. 1.0 turbo motor ile yakıt tüketimi çok düşük ve sürüş keyfi harika.', 15);
  insertReply.run(1, 3, 'Bu bütçeyle Toyota Corolla Hybrid almayı düşünebilirsin. 4.5L/100km tüketimle en ekonomik seçenek.', 23);
  insertReply.run(1, 6, 'Ben de aynı bütçeyle araştırma yapıyordum. Sonunda Corolla Hybrid aldım, çok memnunum. Şehir içi 3.8L yakıyor!', 18);

  // Topic 2: DSG bakım
  insertReply.run(2, 2, 'Ben de Golf 7 kullanıyorum, DSG yağını 40.000 km\'de değiştirdim. Vites geçişleri gözle görülür şekilde yumuşadı.', 8);
  insertReply.run(2, 4, 'DSG bakımını kesinlikle ihmal etmeyin. Ben 80.000 km\'ye kadar yaptırmadım, mechatronik arızası çıktı. 45.000 TL tuttu!', 32);

  // Topic 3: Corolla vs Civic
  insertReply.run(3, 2, 'Yakıt tüketiminde Corolla Hybrid açık ara önde. Ama sürüş dinamikleri açısından Civic\'i tercih ederim.', 19);
  insertReply.run(3, 6, 'Toplam sahip olma maliyetini düşünürsek Corolla Hybrid kazanır. Bakım maliyetleri ve yakıt tasarrufu çok önemli.', 14);
  insertReply.run(3, 3, 'Civic\'in iç mekan kalitesi ve teknolojisi bir adım önde. Bose ses sistemi muhteşem.', 11);

  // Topic 6: Corolla 60K bakım
  insertReply.run(6, 4, 'Yetkili serviste 60.000 km bakımı yaklaşık 8.000-10.000 TL tutuyor. Özel servislerde 4.000-6.000 TL arasında.', 7);
  insertReply.run(6, 6, 'Bende de aynı sorun oldu, özel serviste yaptırdım. Çok memnunum, yarı fiyatına hallettik.', 5);

  console.log('✅ Forum yanıtları oluşturuldu');

  // ========== FAVORITES ==========
  const insertFav = db.prepare('INSERT INTO favorites (user_id, listing_id) VALUES (?, ?)');
  insertFav.run(2, 2);  insertFav.run(2, 3);  insertFav.run(2, 5);
  insertFav.run(3, 1);  insertFav.run(3, 6);
  insertFav.run(4, 1);  insertFav.run(4, 4);  insertFav.run(4, 9);
  insertFav.run(6, 2);  insertFav.run(6, 10);

  console.log('✅ Favoriler oluşturuldu');

  // ========== MESSAGES ==========
  const insertMsg = db.prepare("INSERT INTO messages (sender_id, receiver_id, listing_id, content, is_read) VALUES (?, ?, ?, ?, ?)");
  insertMsg.run(4, 2, 1, 'Merhaba, Toyota Corolla ilanınız hâlâ geçerli mi? Takas düşünür müsünüz?', 1);
  insertMsg.run(2, 4, 1, 'Merhaba, evet ilan geçerli. Takas olarak ne düşünüyorsunuz?', 1);
  insertMsg.run(4, 2, 1, 'BMW 320i için teklif gönderdim, değerlendirmenizi rica ederim.', 0);
  insertMsg.run(7, 2, null, 'Randevunuz onaylandı. 15 Ocak Pazartesi saat 09:00.', 0);
  insertMsg.run(3, 6, 5, 'Honda Civic çok güzel araç, fiyatta pazarlık payı var mı?', 0);

  console.log('✅ Mesajlar oluşturuldu');

  // ========== APPOINTMENTS ==========
  const insertAppt = db.prepare("INSERT INTO appointments (business_id, user_id, service_type, vehicle_info, date, time, status) VALUES (?, ?, ?, ?, date('now', ?), ?, ?)");
  insertAppt.run(1, 2, 'Periyodik Bakım', 'BMW 320i 2021', '+0 days', '09:00', 'confirmed');
  insertAppt.run(1, 3, 'Fren Sistemi', 'Audi A4 2020', '+0 days', '11:30', 'pending');
  insertAppt.run(1, 6, 'Ekspertiz', 'Mercedes C200 2023', '+0 days', '14:00', 'confirmed');
  insertAppt.run(3, 2, 'Hybrid Bakım', 'Toyota Corolla 2024', '+1 days', '10:00', 'confirmed');
  insertAppt.run(1, 4, 'Motor Onarım', 'VW Passat 2021', '+2 days', '09:30', 'pending');

  console.log('✅ Randevular oluşturuldu');

  // ========== NOTIFICATIONS ==========
  const insertNotif = db.prepare("INSERT INTO notifications (user_id, type, title, message, link, is_read) VALUES (?, ?, ?, ?, ?, ?)");
  insertNotif.run(2, 'message', 'Yeni Mesaj', 'Mehmet K. size mesaj gönderdi', '/mesajlar', 0);
  insertNotif.run(2, 'favorite', 'İlanınız Beğenildi', 'Toyota Corolla ilanınız 28 kez favorilere eklendi', '/kullanici/ilanlarim', 0);
  insertNotif.run(2, 'appointment', 'Randevu Onayı', 'Master Bosch servis randevunuz onaylandı', '/kullanici/randevularim', 0);
  insertNotif.run(7, 'appointment', 'Yeni Randevu', '3 yeni randevu talebi var', '/isletme/randevular', 0);
  insertNotif.run(7, 'review', 'Yeni Değerlendirme', 'Ahmet Y. 5 yıldız değerlendirme bıraktı', '/isletme/degerlendirmeler', 0);

  console.log('✅ Bildirimler oluşturuldu');

  // ========== VEHICLE HUB ==========
  const insertHub = db.prepare(`
    INSERT INTO vehicle_hubs (brand_id, model_id, year, avg_price, fuel_type, engine, hp, torque, transmission, acceleration, top_speed, fuel_consumption, length, width, height, wheelbase, weight, editor_rating, editor_review, pros, cons)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertHub.run(toyotaId, corollaModelId, 2024, 1250000, 'Hybrid', '1.8L 4 Silindirli Hybrid', 140, '185 Nm', 'e-CVT', '9.4 saniye', '180 km/s', '4.5L/100km', '4.630 mm', '1.780 mm', '1.435 mm', '2.700 mm', '1.370 kg', 8.5,
    '2024 model Toyota Corolla Hybrid, sınıfının en verimli araçlarından biri olmaya devam ediyor. Düşük yakıt tüketimi, yüksek donanım seviyesi ve Toyota\'nın güvenilirlik itibarı ile öne çıkıyor.',
    '["Sınıfının en düşük yakıt tüketimi (4.5L/100km)","Zengin güvenlik donanımı (Toyota Safety Sense 3.0)","Güvenilir ve düşük bakım maliyetli","Konforlu şehir içi sürüş deneyimi","Yüksek ikinci el değeri"]',
    '["CVT vites kutusu yüksek devirlerde gürültülü","Sürüş dinamikleri rakiplere göre zayıf","Bagaj hacmi hybrid batarya sebebiyle küçük","İç mekan malzeme kalitesi ortalama"]'
  );

  insertHub.run(bmwId, bmw3ModelId, 2021, 2450000, 'Benzin', '2.0L 4 Silindirli Turbo', 170, '250 Nm', '8 İleri Otomatik', '7.1 saniye', '235 km/s', '6.4L/100km', '4.709 mm', '1.827 mm', '1.442 mm', '2.851 mm', '1.520 kg', 8.8,
    'BMW 3 Serisi, sportif sürüş dinamikleri ve premium donanımıyla D segmentinin referans noktası olmaya devam ediyor. Hassas direksiyon hissi ve güçlü motor seçenekleriyle sürüş keyfi sunarken, son teknoloji iDrive sistemiyle dijital deneyimi de üst seviyeye taşıyor.',
    '["Sınıfının en iyi sürüş dinamikleri","Güçlü ve verimli motor seçenekleri","Premium iç mekan kalitesi","Gelişmiş sürücü destek sistemleri","Yüksek ikinci el değeri"]',
    '["Bakım ve yedek parça maliyetleri yüksek","Arka koltuk alanı rakiplere göre dar","Bazı donanımlar ekstra paket gerektiriyor","Sert süspansiyon günlük kullanımda rahatsız edebilir"]'
  );

  insertHub.run(hondaId, civicModelId, 2024, 1850000, 'Benzin', '1.5L 4 Silindirli VTEC Turbo', 182, '240 Nm', 'CVT', '7.3 saniye', '220 km/s', '6.0L/100km', '4.674 mm', '1.800 mm', '1.415 mm', '2.735 mm', '1.360 kg', 8.7,
    '11. nesil Honda Civic, hem tasarımıyla hem teknolojisiyle büyük bir sıçrama yaptı. VTEC Turbo motor keyifli bir sürüş sunarken, Honda Sensing güvenlik paketi tam donanım olarak sunuluyor. İç mekan kalitesi ve ergonomisi sınıfında öne çıkıyor.',
    '["Sportif ve çekici tasarım","VTEC Turbo motorun yüksek performansı","Sınıfının en iyi iç mekan kalitesi","Honda Sensing güvenlik paketi standart","Düşük bakım maliyeti"]',
    '["CVT vites kutusu sportif sürüşte yetersiz kalabiliyor","Hibrit seçeneği Türkiye\'de sunulmuyor","Bagaj hacmi sedan segmentinde ortalama","Gürültü yalıtımı iyileştirilebilir"]'
  );

  insertHub.run(toggId, t10xModelId, 2024, 1550000, 'Elektrik', 'Çift Elektrik Motoru AWD', 200, '330 Nm', 'Tek İleri Otomatik', '7.6 saniye', '180 km/s', '0L/100km (18.1 kWh)', '4.600 mm', '1.900 mm', '1.640 mm', '2.830 mm', '2.017 kg', 8.0,
    'Togg T10X, Türkiye\'nin ilk yerli elektrikli SUV\'u olarak büyük beklentileri karşılıyor. 523 km menzil, hızlı şarj desteği ve akıllı asistan özellikleriyle dikkat çekiyor. Geniş iç hacmi ve teknolojik donanımıyla günlük kullanıma son derece uygun.',
    '["523 km menzil","Hızlı şarj desteği (DC 150kW)","Geniş ve teknolojik iç mekan","Yerli üretim ve uygun fiyat","Akıllı dijital asistan"]',
    '["Şarj altyapısı henüz yeterli değil","Servis ağı sınırlı","İkinci el değeri henüz belirsiz","Bazı malzeme kalitesi sorunları"]'
  );

  insertHub.run(vwId, golfModelId, 2023, 1650000, 'Benzin', '1.5L eTSI Mild Hybrid', 150, '250 Nm', '7 İleri DSG', '8.5 saniye', '224 km/s', '5.2L/100km', '4.284 mm', '1.789 mm', '1.456 mm', '2.636 mm', '1.310 kg', 8.3,
    'Volkswagen Golf 8.5, kompakt sınıfın efsanevi modeli olmaya devam ediyor. eTSI mild hybrid teknolojisiyle yakıt tasarrufu sağlarken, dijital kokpit ve yenilenmiş multimedya sistemiyle teknolojide de rakiplerinin önünde. DSG şanzıman kusursuz vites geçişleri sunuyor.',
    '["Mükemmel sürüş kalitesi ve konfor","eTSI mild hybrid teknolojisi ile düşük tüketim","Geniş bagaj hacmi (381L)","Gelişmiş güvenlik sistemleri","Yüksek yapı kalitesi"]',
    '["Dokunmatik kontroller pratik değil","DSG bakım maliyetleri yüksek","Fiyatı segment ortalamasının üstünde","İç mekan tasarımı muhafazakar"]'
  );

  console.log('✅ Araç hub verileri oluşturuldu');

  // ========== MODERATION ==========
  const insertMod = db.prepare("INSERT INTO moderation_queue (type, item_id, reason, reported_by, status) VALUES (?, ?, ?, ?, 'pending')");
  insertMod.run('listing', 8, 'Sahte ilan şüphesi', 3);
  insertMod.run('listing', 11, 'Fiyat tutarsızlığı', 2);
  insertMod.run('business', 2, 'İşletme başvurusu onayı', null);
  insertMod.run('forum_reply', 5, 'Uygunsuz yorum', 4);

  console.log('✅ Moderasyon kuyruğu oluşturuldu');

  console.log('\n🎉 Tüm seed verileri başarıyla yüklendi!');
  console.log('📧 Test hesapları:');
  console.log('   Admin:    admin@arabaincele.com / 123456');
  console.log('   Bireysel: ahmet@email.com / 123456');
  console.log('   Kurumsal: servis@masterbosch.com / 123456');
}

seed();
