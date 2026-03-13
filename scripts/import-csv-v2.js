#!/usr/bin/env node
/**
 * CSV Araç Verisi → Vehicle Variants Güncelleme Scripti (v2)
 * ============================================================
 * CSV tip adlarını DB model isimleriyle eşleştirir ve her model için:
 *   - Boyutlar (uzunluk, genişlik, yükseklik, dingil mesafesi)
 *   - Ağırlık, bagaj hacmi
 *   - Motor/HP/Tork/Maks Hız verileri
 * çıkarır.
 *
 * Kullanım: node scripts/import-csv-v2.js [--report] [--write-json]
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { getDb } = require('../src/db/database');

const CSV_PATH = path.join(__dirname, '..', 'arac-verileri.csv');

// ═══════════════════════════════════════════
//  CSV MARKA ADI → DB SLUG EŞLEŞTİRME
// ═══════════════════════════════════════════
const BRAND_MAP = {
  'ALFA ROMEO': 'alfa-romeo', 'ASTON MARTIN': 'aston-martin', 'AUDI': 'audi',
  'BMW': 'bmw', 'BYD': 'byd', 'BENTLEY': 'bentley', 'CADILLAC': 'cadillac',
  'CHANGAN': 'changan', 'CHERY': 'chery', 'CHEVROLET': 'chevrolet',
  'CHRYSLER': 'chrysler', 'CITROEN': 'citroen', 'CUPRA': 'cupra', 'DFSK': 'dfsk',
  'DS': 'ds', 'DACIA': 'dacia', 'DAIHATSU': 'daihatsu', 'DODGE/USA': 'dodge',
  'FERRARI': 'ferrari', 'FIAT': 'fiat', 'TOFAS-FIAT': 'fiat', 'FORD': 'ford',
  'FORD /USA': 'ford', 'TRUMPCHI/GAC': 'gac', 'GEELY': 'geely', 'HONDA': 'honda',
  'HYUNDAI': 'hyundai', 'INFINITI': 'infiniti', 'ISUZU': 'isuzu',
  'OTOYOL\\IVECO\\FIAT': 'iveco', 'JAC': 'jac', 'JAGUAR': 'jaguar', 'KIA': 'kia',
  'LADA': 'lada', 'LAMBORGHINI': 'lamborghini', 'LANCIA': 'lancia',
  'LAND ROVER': 'land-rover', 'RANGE ROVER': 'land-rover', 'LEXUS': 'lexus',
  'LINCOLN': 'lincoln', 'LOTUS': 'lotus', 'LUCID': 'lucid', 'MG': 'mg',
  'MASERATI': 'maserati', 'MAXUS': 'maxus', 'MAZDA': 'mazda', 'MCLAREN': 'mclaren',
  'MERCEDES': 'mercedes-benz', 'MINI': 'mini', 'MITSUBISHI': 'mitsubishi',
  'NISSAN': 'nissan', 'OPEL': 'opel', 'PEUGEOT': 'peugeot', 'POLESTAR': 'polestar',
  'POLESTONES': 'polestar', 'PORSCHE': 'porsche', 'PROTON': 'proton',
  'RENAULT': 'renault', 'RENAULT (OYAK)': 'renault', 'ROLLS-ROYCE': 'rolls-royce',
  'SAAB': 'saab', 'SEAT': 'seat', 'SKODA': 'skoda', 'SMART': 'smart',
  'SSANGYONG': 'ssangyong', 'KGMOBILITY': 'ssangyong', 'SUBARU': 'subaru',
  'SUZUKI': 'suzuki', 'TATA': 'tata', 'TESLA': 'tesla', 'TOGG': 'togg',
  'TOYOTA': 'toyota', 'VOLKSWAGEN': 'volkswagen', 'VOLVO': 'volvo',
  'VOLVO-TR': 'volvo', 'WMA': 'wey',
};

// ═══════════════════════════════════════════
//  CSV TİP ADI → DB MODEL EŞLEŞTİRME
// ═══════════════════════════════════════════

// Bazı markalar için özel model keyword eşleştirmeleri
// CSV tip adındaki keyword → DB model slug
const MODEL_KEYWORDS = {
  'bmw': {
    '1 SERİSİ': '1-serisi', '116': '1-serisi', '118': '1-serisi', '120': '1-serisi', '125': '1-serisi', '128': '1-serisi', 'M135': '1-serisi', 'M140': '1-serisi',
    '2 SERİSİ ACTIVE': '2-serisi-active-tourer', '2 SERİSİ GRAN COUPE': '2-serisi-gran-coupe', '218 GRAN COUPE': '2-serisi-gran-coupe', '220 GRAN COUPE': '2-serisi-gran-coupe',
    '218 ACTIVE': '2-serisi-active-tourer', '220 ACTIVE': '2-serisi-active-tourer', '225 ACTIVE': '2-serisi-active-tourer',
    '218 COUPE': '2-serisi-coupe', '220 COUPE': '2-serisi-coupe', '230 COUPE': '2-serisi-coupe', 'M240': '2-serisi-coupe', 'M235': '2-serisi-coupe',
    '3 SERİSİ': '3-serisi', '316': '3-serisi', '318': '3-serisi', '320': '3-serisi', '325': '3-serisi', '328': '3-serisi', '330': '3-serisi', '335': '3-serisi', '340': '3-serisi',
    '3 SERİSİ TOURING': '3-serisi-touring', '318 TOURING': '3-serisi-touring', '320 TOURING': '3-serisi-touring', '330 TOURING': '3-serisi-touring',
    '4 SERİSİ': '4-serisi-gran-coupe', '418': '4-serisi-gran-coupe', '420': '4-serisi-gran-coupe', '430': '4-serisi-gran-coupe', 'M440': '4-serisi-gran-coupe',
    '420 COUPE': '4-serisi-coupe', '430 COUPE': '4-serisi-coupe', '420 CABRIO': '4-serisi-cabrio', '430 CABRIO': '4-serisi-cabrio',
    '5 SERİSİ': '5-serisi', '520': '5-serisi', '525': '5-serisi', '530': '5-serisi', '540': '5-serisi', '545': '5-serisi', '550': '5-serisi', 'M550': '5-serisi',
    '5 SERİSİ TOURING': '5-serisi-touring', '520 TOURING': '5-serisi-touring', '530 TOURING': '5-serisi-touring',
    '6 SERİSİ GT': '6-serisi-gt', '630 GT': '6-serisi-gt', '640 GT': '6-serisi-gt',
    '7 SERİSİ': '7-serisi', '730': '7-serisi', '740': '7-serisi', '745': '7-serisi', '750': '7-serisi', '760': '7-serisi',
    '8 SERİSİ': '8-serisi-coupe', 'M850': '8-serisi-coupe', '840': '8-serisi-coupe',
    'X1': 'x1', 'X2': 'x2', 'X3 M': 'x3-m', 'X3': 'x3', 'X4 M': 'x4-m', 'X4': 'x4',
    'X5 M': 'x5-m', 'X5': 'x5', 'X6 M': 'x6-m', 'X6': 'x6', 'X7': 'x7', 'XM': 'xm',
    'Z4': 'z4', 'I3': 'i3', 'I4': 'i4', 'I5': 'i5', 'I7': 'i7', 'IX': 'ix', 'IX1': 'ix1', 'IX3': 'ix3',
    'M2': 'm2', 'M3 TOURING': 'm3-touring', 'M3': 'm3', 'M4 CABRIO': 'm4-cabrio', 'M4': 'm4', 'M5': 'm5', 'M8': 'm8',
  },
  'mercedes-benz': {
    'A 180': 'a-serisi', 'A 200': 'a-serisi', 'A 250': 'a-serisi', 'A 160': 'a-serisi', 'A 35': 'amg-a-35', 'A 45': 'amg-a-45',
    'A SEDAN': 'a-serisi-sedan', 'A 180 SEDAN': 'a-serisi-sedan', 'A 200 SEDAN': 'a-serisi-sedan',
    'B 180': 'b-serisi', 'B 200': 'b-serisi',
    'C 180': 'c-serisi', 'C 200': 'c-serisi', 'C 220': 'c-serisi', 'C 250': 'c-serisi', 'C 300': 'c-serisi', 'C 350': 'c-serisi', 'C 43': 'amg-c-43', 'C 63': 'amg-c-63',
    'C ESTATE': 'c-serisi-estate', 'C COUPE': 'c-serisi-coupe', 'C CABRIO': 'c-serisi-cabriolet',
    'CLA 180': 'cla', 'CLA 200': 'cla', 'CLA 250': 'cla', 'CLA SHOOTING': 'cla-shooting-brake',
    'CLS 250': 'cls', 'CLS 350': 'cls', 'CLS 400': 'cls', 'CLS 500': 'cls',
    'E 180': 'e-serisi', 'E 200': 'e-serisi', 'E 220': 'e-serisi', 'E 250': 'e-serisi', 'E 300': 'e-serisi', 'E 350': 'e-serisi', 'E 400': 'e-serisi', 'E 53': 'amg-e-53', 'E 63': 'amg-e-63',
    'E COUPE': 'e-serisi-coupe', 'E ESTATE': 'e-serisi-estate', 'E CABRIO': 'e-serisi-cabriolet',
    'S 350': 's-serisi', 'S 400': 's-serisi', 'S 500': 's-serisi', 'S 560': 's-serisi', 'S 63': 'amg-s-63', 'S 580': 's-serisi',
    'GLA 180': 'gla', 'GLA 200': 'gla', 'GLA 250': 'gla',
    'GLB 180': 'glb', 'GLB 200': 'glb', 'GLB 250': 'glb',
    'GLC 200': 'glc', 'GLC 220': 'glc', 'GLC 250': 'glc', 'GLC 300': 'glc', 'GLC 43': 'amg-glc-43', 'GLC 63': 'amg-glc-63',
    'GLC COUPE': 'glc-coupe',
    'GLE 250': 'gle', 'GLE 300': 'gle', 'GLE 350': 'gle', 'GLE 400': 'gle', 'GLE 450': 'gle', 'GLE 53': 'amg-gle-53', 'GLE 63': 'amg-gle-63',
    'GLE COUPE': 'gle-coupe',
    'GLS 350': 'gls', 'GLS 400': 'gls', 'GLS 450': 'gls', 'GLS 580': 'gls',
    'G 350': 'g-serisi', 'G 400': 'g-serisi', 'G 500': 'g-serisi', 'G 63': 'amg-g-63',
    'EQA': 'eqa', 'EQB': 'eqb', 'EQC': 'eqc', 'EQE SUV': 'eqe-suv', 'EQE': 'eqe', 'EQS SUV': 'eqs-suv', 'EQS': 'eqs', 'EQV': 'eqv',
    'V 220': 'v-serisi', 'V 250': 'v-serisi', 'V 300': 'v-serisi',
    'VITO': 'vito', 'SL ': 'sl', 'SLC': 'slc', 'SLK': 'slk',
    'X 220': 'x-serisi', 'X 250': 'x-serisi', 'X 350': 'x-serisi',
    'MAYBACH GLS': 'maybach-gls', 'MAYBACH S': 'maybach-s-serisi',
    'AMG GT': 'amg-gt',
  },
  'volkswagen': {
    'GOLF GTI': 'golf-gti', 'GOLF GTE': 'golf-gte', 'GOLF R ': 'golf-r', 'GOLF VARIANT': 'golf-variant', 'GOLF': 'golf',
    'POLO': 'polo', 'PASSAT VARIANT': 'passat-variant', 'PASSAT': 'passat',
    'TIGUAN ALLSPACE': 'tiguan-allspace', 'TIGUAN': 'tiguan', 'TOUAREG': 'touareg', 'TOURAN': 'touran',
    'T-CROSS': 't-cross', 'T-ROC CABRIO': 't-roc-cabriolet', 'T-ROC': 't-roc', 'TAIGO': 'taigo',
    'ARTEON SHOOTING': 'arteon-shooting-brake', 'ARTEON': 'arteon',
    'JETTA': 'jetta', 'CC': 'cc', 'SCIROCCO': 'scirocco', 'BEETLE': 'beetle', 'EOS': 'eos',
    'UP': 'up', 'CADDY': 'caddy', 'CARAVELLE': 'caravelle', 'MULTIVAN': 'multivan',
    'SHARAN': 'sharan', 'TRANSPORTER': 'transporter',
    'ID.3': 'id-3', 'ID.4': 'id-4', 'ID.5': 'id-5', 'ID.7': 'id-7', 'ID.BUZZ': 'id-buzz',
    'ID 3': 'id-3', 'ID 4': 'id-4', 'ID 5': 'id-5', 'ID 7': 'id-7',
  },
  'toyota': {
    'COROLLA CROSS': 'corolla-cross', 'COROLLA HB': 'corolla-hatchback', 'COROLLA HATCHBACK': 'corolla-hatchback',
    'COROLLA TOURING': 'corolla-touring-sports', 'COROLLA': 'corolla',
    'YARIS CROSS': 'yaris-cross', 'GR YARIS': 'gr-yaris', 'YARIS': 'yaris',
    'C-HR': 'c-hr', 'CHR': 'c-hr', 'RAV4': 'rav4', 'RAV 4': 'rav4',
    'AYGO X': 'aygo-x', 'AYGO': 'aygo', 'CAMRY': 'camry',
    'HIGHLANDER': 'highlander', 'HILUX': 'hilux', 'SUPRA': 'supra', 'GR86': 'gr86', 'GR 86': 'gr86',
    'LAND CRUISER PRADO': 'land-cruiser-prado', 'LAND CRUISER': 'land-cruiser',
    'BZ4X': 'bz4x', 'PRIUS': 'prius', 'AURIS': 'auris', 'AVENSIS': 'avensis', 'VERSO': 'verso',
    'CROWN': 'crown', 'MIRAI': 'mirai', 'CENTURY': 'century',
    'PROACE CITY VERSO': 'proace-city-verso', 'PROACE CITY': 'proace-city', 'PROACE VERSO': 'proace-verso', 'PROACE': 'proace',
  },
  'fiat': {
    'EGEA CROSS': 'egea-cross', 'EGEA HB': 'egea-hatchback', 'EGEA HATCHBACK': 'egea-hatchback',
    'EGEA SW': 'egea-station-wagon', 'EGEA STATION': 'egea-station-wagon', 'EGEA SEDAN': 'egea-sedan', 'EGEA': 'egea-sedan',
    'TIPO CROSS': 'tipo-cross', 'TIPO HB': 'tipo-hatchback', 'TIPO HATCHBACK': 'tipo-hatchback',
    'TIPO SW': 'tipo-station-wagon', 'TIPO STATION': 'tipo-station-wagon', 'TIPO': 'tipo',
    '500X': '500x', '500L': '500l', '500E': '500e', '500 ': '500', '600E': '600e',
    'LINEA': 'linea', 'PANDA CROSS': 'panda-cross', 'PANDA': 'panda', 'PUNTO': 'punto',
    'BRAVO': 'bravo', 'DOBLO': 'doblo', 'FIORINO': 'fiorino', 'FREEMONT': 'freemont',
    '124 SPIDER': '124-spider', 'TOPOLINO': 'topolino',
  },
  'hyundai': {
    'I10': 'i10', 'I20 N': 'i20-n', 'I20': 'i20', 'I30 FASTBACK': 'i30-fastback', 'I30 N': 'i30-n', 'I30 WAGON': 'i30-wagon', 'I30': 'i30',
    'TUCSON': 'tucson', 'SANTA FE': 'santa-fe', 'KONA ELECTRIC': 'kona-electric', 'KONA': 'kona',
    'BAYON': 'bayon', 'ELANTRA': 'elantra', 'ACCENT': 'accent', 'STARIA': 'staria', 'PALISADE': 'palisade',
    'IONIQ 5': 'ioniq-5', 'IONIQ 6': 'ioniq-6', 'NEXO': 'nexo', 'VELOSTER': 'veloster',
  },
  'renault': {
    'CLIO': 'clio', 'MEGANE': 'megane', 'CAPTUR': 'captur', 'KADJAR': 'kadjar', 'KOLEOS': 'koleos',
    'TALISMAN': 'talisman', 'SCENIC': 'scenic', 'KANGOO': 'kangoo', 'FLUENCE': 'fluence',
    'SYMBOL': 'symbol', 'LATITUDE': 'latitude', 'ZOE': 'zoe', 'AUSTRAL': 'austral',
    'ARKANA': 'arkana', 'RAFALE': 'rafale', 'ESPACE': 'espace', 'TALIANT': 'taliant',
    'TRAFIC': 'trafic', 'MASTER': 'master', 'EXPRESS': 'express',
    'TWINGO': 'twingo', 'LAGUNA': 'laguna',
  },
  'honda': {
    'CIVIC': 'civic', 'CR-V': 'cr-v', 'CRV': 'cr-v', 'HR-V': 'hr-v', 'HRV': 'hr-v',
    'JAZZ': 'jazz', 'ACCORD': 'accord', 'CITY': 'city', 'E:NY1': 'eny1', 'ZR-V': 'zr-v',
  },
  'kia': {
    'SPORTAGE': 'sportage', 'CEED': 'ceed', 'CERATO': 'cerato', 'PICANTO': 'picanto',
    'STONIC': 'stonic', 'NIRO': 'niro', 'EV6': 'ev6', 'EV9': 'ev9', 'SORENTO': 'sorento',
    'XCEED': 'xceed', 'PROCEED': 'proceed', 'CARNIVAL': 'carnival', 'STINGER': 'stinger',
    'SOUL': 'soul', 'OPTIMA': 'optima', 'RIO': 'rio', 'VENGA': 'venga',
  },
  'audi': {
    'A1': 'a1', 'A3 SEDAN': 'a3-sedan', 'A3 SPORTBACK': 'a3', 'A3': 'a3', 'A4 AVANT': 'a4-avant', 'A4 ALLROAD': 'a4-allroad', 'A4': 'a4',
    'A5 SPORTBACK': 'a5-sportback', 'A5 COUPE': 'a5', 'A5 CABRIO': 'a5-cabriolet', 'A5': 'a5',
    'A6 AVANT': 'a6-avant', 'A6 ALLROAD': 'a6-allroad', 'A6': 'a6', 'A7': 'a7', 'A8': 'a8',
    'Q2': 'q2', 'Q3 SPORTBACK': 'q3-sportback', 'Q3': 'q3', 'Q5 SPORTBACK': 'q5-sportback', 'Q5': 'q5',
    'Q7': 'q7', 'Q8 E-TRON': 'q8-e-tron', 'Q8': 'q8',
    'E-TRON GT': 'e-tron-gt', 'E-TRON SPORTBACK': 'e-tron-sportback', 'E-TRON': 'e-tron',
    'RS3': 'rs3', 'RS4': 'rs4', 'RS5': 'rs5', 'RS6': 'rs6', 'RS7': 'rs7', 'RSQ8': 'rs-q8', 'RS Q8': 'rs-q8',
    'S3': 's3', 'S4': 's4', 'S5': 's5', 'S6': 's6', 'S7': 's7', 'S8': 's8',
    'TT': 'tt', 'R8': 'r8',
  },
  'opel': {
    'CORSA': 'corsa', 'ASTRA': 'astra', 'MOKKA': 'mokka', 'CROSSLAND': 'crossland',
    'GRANDLAND': 'grandland', 'INSIGNIA': 'insignia', 'COMBO': 'combo',
    'ZAFIRA': 'zafira', 'ADAM': 'adam', 'KARL': 'karl', 'MERIVA': 'meriva',
    'CASCADA': 'cascada', 'VIVARO': 'vivaro', 'MOVANO': 'movano',
  },
  'peugeot': {
    '108': '108', '208': '208', '2008': '2008', '301': '301', '308': '308', '3008': '3008',
    '408': '408', '508': '508', '5008': '5008', 'PARTNER': 'partner', 'RIFTER': 'rifter',
    'TRAVELLER': 'traveller', 'EXPERT': 'expert', 'E-208': 'e-208', 'E-2008': 'e-2008',
    'E-308': 'e-308', 'E-3008': 'e-3008', 'E-5008': 'e-5008',
  },
  'citroen': {
    'C3 AIRCROSS': 'c3-aircross', 'C3': 'c3', 'C4 CACTUS': 'c4-cactus', 'C4 X': 'c4-x', 'C4': 'c4',
    'C5 AIRCROSS': 'c5-aircross', 'C5 X': 'c5-x', 'C5': 'c5',
    'C1': 'c1', 'C-ELYSEE': 'c-elysee', 'BERLINGO': 'berlingo', 'JUMPY': 'jumpy',
    'SPACETOURER': 'spacetourer', 'NEMO': 'nemo', 'DS3': 'ds3', 'DS4': 'ds4', 'DS5': 'ds5',
  },
  'skoda': {
    'OCTAVIA': 'octavia', 'SUPERB': 'superb', 'FABIA': 'fabia', 'KAMIQ': 'kamiq',
    'KAROQ': 'karoq', 'KODIAQ': 'kodiaq', 'SCALA': 'scala', 'RAPID': 'rapid',
    'ENYAQ': 'enyaq', 'YETI': 'yeti', 'CITIGO': 'citigo', 'ROOMSTER': 'roomster',
  },
  'dacia': {
    'DUSTER': 'duster', 'SANDERO': 'sandero', 'JOGGER': 'jogger', 'SPRING': 'spring',
    'LOGAN': 'logan', 'LODGY': 'lodgy', 'DOKKER': 'dokker',
    'STEPWAY': 'sandero', // Sandero Stepway
  },
  'seat': {
    'IBIZA': 'ibiza', 'LEON': 'leon', 'ARONA': 'arona', 'ATECA': 'ateca', 'TARRACO': 'tarraco',
    'ALHAMBRA': 'alhambra', 'TOLEDO': 'toledo', 'MII': 'mii',
  },
  'ford': {
    'FOCUS': 'focus', 'FIESTA': 'fiesta', 'PUMA': 'puma', 'KUGA': 'kuga',
    'MONDEO': 'mondeo', 'ECOSPORT': 'ecosport', 'RANGER': 'ranger',
    'TOURNEO CONNECT': 'tourneo-connect', 'TOURNEO COURIER': 'tourneo-courier', 'TOURNEO CUSTOM': 'tourneo-custom',
    'TRANSIT CONNECT': 'transit-connect', 'TRANSIT COURIER': 'transit-courier', 'TRANSIT CUSTOM': 'transit-custom', 'TRANSIT': 'transit',
    'MUSTANG MACH-E': 'mustang-mach-e', 'MUSTANG': 'mustang', 'EXPLORER': 'explorer',
    'EDGE': 'edge', 'GALAXY': 'galaxy', 'S-MAX': 's-max', 'B-MAX': 'b-max', 'C-MAX': 'c-max',
    'BRONCO': 'bronco', 'E-TOURNEO': 'e-tourneo-courier', 'E-TRANSIT': 'e-transit',
    'MAVERICK': 'maverick',
  },
  'nissan': {
    'QASHQAI': 'qashqai', 'JUKE': 'juke', 'X-TRAIL': 'x-trail', 'MICRA': 'micra',
    'NOTE': 'note', 'LEAF': 'leaf', 'NAVARA': 'navara', 'ARIYA': 'ariya',
    'PULSAR': 'pulsar', 'MURANO': 'murano', 'PATHFINDER': 'pathfinder', 'NV200': 'nv200',
    'NV300': 'nv300', 'PRIMASTAR': 'primastar', 'INTERSTAR': 'interstar',
  },
  'tesla': {
    'MODEL S': 'model-s', 'MODEL 3': 'model-3', 'MODEL X': 'model-x', 'MODEL Y': 'model-y',
    'CYBERTRUCK': 'cybertruck',
  },
  'togg': {
    'T10X': 't10x', 'T10F': 't10f',
  },
  'porsche': {
    'CAYENNE': 'cayenne', 'MACAN': 'macan', 'TAYCAN': 'taycan', '911': '911',
    'PANAMERA': 'panamera', '718 CAYMAN': '718-cayman', '718 BOXSTER': '718-boxster', '718': '718-cayman',
  },
  'volvo': {
    'XC40': 'xc40', 'XC60': 'xc60', 'XC90': 'xc90', 'S60': 's60', 'S90': 's90',
    'V40': 'v40', 'V60': 'v60', 'V90': 'v90', 'C40': 'c40', 'EX30': 'ex30', 'EX90': 'ex90',
  },
  'mini': {
    'COOPER': 'cooper', 'COUNTRYMAN': 'countryman', 'CLUBMAN': 'clubman',
    'PACEMAN': 'paceman', 'COUPE': 'coupe', 'CABRIO': 'cabrio',
    'JOHN COOPER': 'john-cooper-works',
  },
  'land-rover': {
    'RANGE ROVER EVOQUE': 'range-rover-evoque', 'RANGE ROVER VELAR': 'range-rover-velar',
    'RANGE ROVER SPORT': 'range-rover-sport', 'RANGE ROVER': 'range-rover',
    'DEFENDER': 'defender', 'DISCOVERY SPORT': 'discovery-sport', 'DISCOVERY': 'discovery',
    'FREELANDER': 'freelander',
  },
  'subaru': {
    'FORESTER': 'forester', 'OUTBACK': 'outback', 'XV': 'xv', 'IMPREZA': 'impreza',
    'LEVORG': 'levorg', 'BRZ': 'brz', 'WRX': 'wrx', 'CROSSTREK': 'crosstrek', 'SOLTERRA': 'solterra',
  },
  'suzuki': {
    'VITARA': 'vitara', 'S-CROSS': 's-cross', 'SWIFT': 'swift', 'JIMNY': 'jimny',
    'SX4': 'sx4', 'BALENO': 'baleno', 'IGNIS': 'ignis', 'ACROSS': 'across', 'SWACE': 'swace',
    'CELERIO': 'celerio', 'ALTO': 'alto',
  },
  'mazda': {
    'CX-3': 'cx-3', 'CX-30': 'cx-30', 'CX-5': 'cx-5', 'CX-60': 'cx-60',
    'MAZDA3': 'mazda3', '3': 'mazda3', 'MAZDA6': 'mazda6', '6': 'mazda6',
    'MX-5': 'mx-5', 'MX-30': 'mx-30', 'MAZDA2': 'mazda2', '2': 'mazda2',
  },
  'jeep': {
    'RENEGADE': 'renegade', 'COMPASS': 'compass', 'CHEROKEE': 'cherokee',
    'GRAND CHEROKEE': 'grand-cherokee', 'WRANGLER': 'wrangler', 'GLADIATOR': 'gladiator',
    'AVENGER': 'avenger',
  },
  'lexus': {
    'NX': 'nx', 'UX': 'ux', 'RX': 'rx', 'ES': 'es', 'IS': 'is', 'LS': 'ls',
    'LC': 'lc', 'LBX': 'lbx', 'RZ': 'rz', 'CT': 'ct',
  },
  'cupra': {
    'FORMENTOR': 'formentor', 'BORN': 'born', 'LEON': 'leon', 'ATECA': 'ateca', 'TAVASCAN': 'tavascan',
  },
};

// ═══════════════════════════════════════════
//  MODEL EŞLEŞTİRME FONKSİYONU
// ═══════════════════════════════════════════

function matchModel(brandSlug, tipAdi) {
  if (!tipAdi) return null;
  const tip = tipAdi.toUpperCase();
  
  const brandKeywords = MODEL_KEYWORDS[brandSlug];
  if (brandKeywords) {
    // Uzun keyword'leri önce dene (daha spesifik olanlar)
    const sorted = Object.entries(brandKeywords).sort((a, b) => b[0].length - a[0].length);
    for (const [keyword, modelSlug] of sorted) {
      if (tip.includes(keyword.toUpperCase())) return modelSlug;
    }
  }
  
  return null;
}

// ═══════════════════════════════════════════
//  CSV PARSER
// ═══════════════════════════════════════════

function parseCSV() {
  let content = fs.readFileSync(CSV_PATH, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  const lines = content.split(/\r?\n/).filter(l => l.trim());
  
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(';');
    if (cols.length < 20) continue;
    rows.push({
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
//  ANA İŞLEM
// ═══════════════════════════════════════════

(async () => {
  console.log('🚗 CSV Araç Verisi İçe Aktarma v2\n');
  
  const db = getDb();
  const dbModels = await db.prepare(`
    SELECT m.id, m.name, m.slug, m.body_type, b.slug as brand_slug, b.name as brand_name
    FROM models m JOIN brands b ON m.brand_id = b.id
  `).all();
  
  console.log(`📂 DB: ${dbModels.length} model`);
  
  const rows = parseCSV();
  console.log(`📂 CSV: ${rows.length} satır\n`);
  
  // Model başına veri toplama
  // Key: brandSlug + '|' + modelSlug
  const modelData = {};
  let matched = 0, unmatched = 0;
  const unmatchedSamples = {};
  
  for (const row of rows) {
    const brandSlug = BRAND_MAP[row.markaAdi];
    if (!brandSlug) continue;
    
    const modelSlug = matchModel(brandSlug, row.tipAdi);
    if (!modelSlug) {
      unmatched++;
      if (!unmatchedSamples[brandSlug]) unmatchedSamples[brandSlug] = new Set();
      if (unmatchedSamples[brandSlug].size < 5) unmatchedSamples[brandSlug].add(row.tipAdi);
      continue;
    }
    
    const key = `${brandSlug}|${modelSlug}`;
    if (!modelData[key]) {
      modelData[key] = {
        brandSlug, modelSlug,
        years: new Set(),
        dimensions: { uzunluk: null, genislik: null, yukseklik: null, dingilMesafesi: null, agirlik: null, bagajHacmi: null },
        variants: [],
        maxHp: 0, maxTork: 0, maxSpeed: 0,
      };
    }
    
    const md = modelData[key];
    if (row.yil) md.years.add(row.yil);
    
    // Boyutlar — en büyük (en güncel/doğru) değerleri tercih et
    const d = md.dimensions;
    if (row.uzunluk > 2000 && (!d.uzunluk || row.uzunluk > d.uzunluk)) d.uzunluk = row.uzunluk;
    if (row.genislik > 1000 && (!d.genislik || row.genislik > d.genislik)) d.genislik = row.genislik;
    if (row.yukseklik > 1000 && (!d.yukseklik || row.yukseklik > d.yukseklik)) d.yukseklik = row.yukseklik;
    if (row.dingilMesafesi > 1500 && (!d.dingilMesafesi || row.dingilMesafesi > d.dingilMesafesi)) d.dingilMesafesi = row.dingilMesafesi;
    if (row.agirlik > 500 && (!d.agirlik || Math.abs(row.agirlik - d.agirlik) > 100)) {
      // Ağırlığı ortalama olarak tutalım (farklı varyantlar farklı ağırlık)
      d.agirlik = d.agirlik ? Math.round((d.agirlik + row.agirlik) / 2) : row.agirlik;
    }
    if (row.bagajHacmi > 0 && (!d.bagajHacmi || row.bagajHacmi > d.bagajHacmi)) d.bagajHacmi = row.bagajHacmi;
    
    // HP, tork, hız
    if (row.hp > 50 && row.hp > md.maxHp) md.maxHp = row.hp;
    if (row.tork > 50 && row.tork > md.maxTork) md.maxTork = row.tork;
    if (row.maksHiz > 100 && row.maksHiz > md.maxSpeed) md.maxSpeed = row.maksHiz;
    
    matched++;
  }
  
  // Set → Array
  for (const md of Object.values(modelData)) {
    md.years = [...md.years].sort((a, b) => a - b);
  }
  
  console.log(`✅ Eşleşen satır: ${matched}`);
  console.log(`❌ Eşleşmeyen satır: ${unmatched}`);
  console.log(`📊 Toplam model verisi: ${Object.keys(modelData).length}\n`);
  
  // Eşleşmeyen örnekler
  if (Object.keys(unmatchedSamples).length > 0) {
    console.log('⚠️  Eşleşmeyen örnekler (marka başına 5):');
    for (const [brand, samples] of Object.entries(unmatchedSamples)) {
      console.log(`  ${brand}: ${[...samples].slice(0, 3).join(' | ')}`);
    }
  }
  
  // Özet tablo
  console.log('\n═══════════════════════════════════════════');
  console.log('  MODEL VERİ ÖZETİ');
  console.log('═══════════════════════════════════════════\n');
  
  const showBrands = ['bmw', 'mercedes-benz', 'toyota', 'fiat', 'volkswagen', 'hyundai', 'audi', 'renault', 'ford', 'tesla', 'togg'];
  for (const brand of showBrands) {
    const brandModels = Object.entries(modelData).filter(([k]) => k.startsWith(brand + '|'));
    if (brandModels.length === 0) continue;
    
    console.log(`\n📌 ${brand} (${brandModels.length} model):`);
    for (const [key, md] of brandModels.sort((a, b) => a[0].localeCompare(b[0]))) {
      const d = md.dimensions;
      const yrRange = md.years.length > 0 ? `${md.years[0]}-${md.years[md.years.length-1]}` : '-';
      console.log(`  ${md.modelSlug.padEnd(25)} ${yrRange.padEnd(12)} ${(d.uzunluk || '?') + '×' + (d.genislik || '?') + '×' + (d.yukseklik || '?') + 'mm'.padEnd(20)} ${(d.bagajHacmi || '?') + 'L'.padEnd(8)} ${(d.agirlik || '?') + 'kg'.padEnd(8)} HP:${md.maxHp || '?'}`);
    }
  }
  
  // JSON kaydet
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'csv-vehicle-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(modelData, null, 2), 'utf8');
  console.log(`\n💾 Kaydedildi: ${outputPath}`);
  
  // DB eşleştirme kapsamı
  const dbModelKeys = new Set(dbModels.map(m => `${m.brand_slug}|${m.slug}`));
  const csvModelKeys = new Set(Object.keys(modelData));
  const overlap = [...csvModelKeys].filter(k => dbModelKeys.has(k));
  const csvOnly = [...csvModelKeys].filter(k => !dbModelKeys.has(k));
  const dbOnly = [...dbModelKeys].filter(k => !csvModelKeys.has(k));
  
  console.log(`\n📊 Eşleştirme kapsamı:`);
  console.log(`  DB'de ve CSV'de: ${overlap.length} model ✅`);
  console.log(`  CSV'de var, DB'de yok: ${csvOnly.length} (eşleştirme sorunu olabilir)`);
  console.log(`  DB'de var, CSV'de yok: ${dbOnly.length}`);
  
  if (csvOnly.length > 0) {
    console.log(`\n  CSV'de var, DB'de yok:`);
    csvOnly.forEach(k => console.log(`    ${k}`));
  }
  
  if (args.includes('--db-only')) {
    console.log(`\n  DB'de var, CSV'de yok:`);
    dbOnly.forEach(k => console.log(`    ${k}`));
  }
})();

// args must be at module level (hoisted) but reference in IIFE works because IIFE runs async
const args = process.argv.slice(2);
