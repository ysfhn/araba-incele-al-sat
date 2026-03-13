/**
 * Doğrulanmış Model Verileri
 * ──────────────────────────
 * Popüler modeller için gerçek piyasa fiyatları ve teknik veriler.
 * CSV verisi veya segment tahmini yerine bu veriler öncelikli kullanılır.
 *
 * Fiyatlar: Mart 2026 Türkiye piyasası, ortalama ikinci el + sıfır (TL)
 * Boyutlar: Üretici resmi verileri (mm/kg/L)
 *
 * Format: 'marka-slug|model-slug': { ... }
 */

const VERIFIED_DATA = {
  // ─── BMW ───
  'bmw|1-serisi':    { price2024: 2100000, price2020: 1350000, price2015: 750000, length: 4319, width: 1799, height: 1434, wheelbase: 2670, weight: 1395, trunk: 380, topSpeed: '230 km/s' },
  'bmw|2-serisi':    { price2024: 2300000, price2020: 1500000, price2015: 850000, length: 4526, width: 1800, height: 1440, wheelbase: 2670, weight: 1450, trunk: 390, topSpeed: '240 km/s' },
  'bmw|3-serisi':    { price2024: 3200000, price2020: 2000000, price2015: 1100000, length: 4709, width: 1827, height: 1440, wheelbase: 2851, weight: 1545, trunk: 480, topSpeed: '250 km/s' },
  'bmw|4-serisi':    { price2024: 3600000, price2020: 2300000, price2015: 1250000, length: 4783, width: 1852, height: 1395, wheelbase: 2851, weight: 1590, trunk: 440, topSpeed: '250 km/s' },
  'bmw|5-serisi':    { price2024: 4500000, price2020: 2800000, price2015: 1500000, length: 5060, width: 1900, height: 1515, wheelbase: 2995, weight: 1740, trunk: 520, topSpeed: '250 km/s' },
  'bmw|7-serisi':    { price2024: 7500000, price2020: 4000000, price2015: 2000000, length: 5391, width: 1950, height: 1544, wheelbase: 3215, weight: 2050, trunk: 540, topSpeed: '250 km/s' },
  'bmw|x1':          { price2024: 2800000, price2020: 1700000, price2015: 900000, length: 4500, width: 1845, height: 1642, wheelbase: 2692, weight: 1590, trunk: 540, topSpeed: '220 km/s' },
  'bmw|x3':          { price2024: 3800000, price2020: 2400000, price2015: 1300000, length: 4726, width: 1897, height: 1676, wheelbase: 2864, weight: 1830, trunk: 550, topSpeed: '235 km/s' },
  'bmw|x5':          { price2024: 5500000, price2020: 3500000, price2015: 1800000, length: 4922, width: 2004, height: 1745, wheelbase: 2975, weight: 2185, trunk: 650, topSpeed: '250 km/s' },
  'bmw|x6':          { price2024: 6000000, price2020: 3800000, price2015: 2000000, length: 4935, width: 2004, height: 1696, wheelbase: 2975, weight: 2200, trunk: 580, topSpeed: '250 km/s' },

  // ─── MERCEDES-BENZ ───
  'mercedes-benz|a-serisi':  { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4419, width: 1796, height: 1440, wheelbase: 2729, weight: 1395, trunk: 370, topSpeed: '225 km/s' },
  'mercedes-benz|c-serisi':  { price2024: 3500000, price2020: 2100000, price2015: 1150000, length: 4751, width: 1820, height: 1438, wheelbase: 2865, weight: 1575, trunk: 455, topSpeed: '250 km/s' },
  'mercedes-benz|e-serisi':  { price2024: 5000000, price2020: 3000000, price2015: 1600000, length: 4949, width: 1880, height: 1468, wheelbase: 2961, weight: 1755, trunk: 540, topSpeed: '250 km/s' },
  'mercedes-benz|s-serisi':  { price2024: 8500000, price2020: 4500000, price2015: 2200000, length: 5289, width: 1954, height: 1503, wheelbase: 3216, weight: 2090, trunk: 550, topSpeed: '250 km/s' },
  'mercedes-benz|cla':       { price2024: 2800000, price2020: 1700000, price2015: 850000, length: 4688, width: 1830, height: 1439, wheelbase: 2729, weight: 1475, trunk: 460, topSpeed: '240 km/s' },
  'mercedes-benz|gla':       { price2024: 2700000, price2020: 1700000, price2015: 900000, length: 4410, width: 1834, height: 1611, wheelbase: 2729, weight: 1510, trunk: 435, topSpeed: '220 km/s' },
  'mercedes-benz|glc':       { price2024: 4000000, price2020: 2500000, price2015: 1400000, length: 4716, width: 1890, height: 1640, wheelbase: 2882, weight: 1835, trunk: 620, topSpeed: '240 km/s' },
  'mercedes-benz|gle':       { price2024: 5500000, price2020: 3500000, price2015: 1800000, length: 4924, width: 1947, height: 1772, wheelbase: 2995, weight: 2165, trunk: 630, topSpeed: '245 km/s' },

  // ─── AUDI ───
  'audi|a1':    { price2024: 1600000, price2020: 1000000, price2015: 550000, length: 4029, width: 1740, height: 1409, wheelbase: 2563, weight: 1190, trunk: 335, topSpeed: '210 km/s' },
  'audi|a3':    { price2024: 2300000, price2020: 1500000, price2015: 850000, length: 4343, width: 1816, height: 1425, wheelbase: 2636, weight: 1350, trunk: 380, topSpeed: '240 km/s' },
  'audi|a4':    { price2024: 3000000, price2020: 1900000, price2015: 1050000, length: 4762, width: 1847, height: 1436, wheelbase: 2820, weight: 1555, trunk: 460, topSpeed: '250 km/s' },
  'audi|a5':    { price2024: 3400000, price2020: 2200000, price2015: 1200000, length: 4733, width: 1843, height: 1386, wheelbase: 2824, weight: 1580, trunk: 450, topSpeed: '250 km/s' },
  'audi|a6':    { price2024: 4200000, price2020: 2600000, price2015: 1400000, length: 4939, width: 1886, height: 1457, wheelbase: 2924, weight: 1710, trunk: 530, topSpeed: '250 km/s' },
  'audi|a8':    { price2024: 7500000, price2020: 3800000, price2015: 1800000, length: 5190, width: 1945, height: 1471, wheelbase: 3128, weight: 1990, trunk: 505, topSpeed: '250 km/s' },
  'audi|q3':    { price2024: 2600000, price2020: 1600000, price2015: 850000, length: 4484, width: 1849, height: 1616, wheelbase: 2680, weight: 1540, trunk: 530, topSpeed: '225 km/s' },
  'audi|q5':    { price2024: 3600000, price2020: 2200000, price2015: 1200000, length: 4680, width: 1893, height: 1660, wheelbase: 2819, weight: 1790, trunk: 520, topSpeed: '240 km/s' },
  'audi|q7':    { price2024: 5200000, price2020: 3200000, price2015: 1700000, length: 5063, width: 1970, height: 1741, wheelbase: 2996, weight: 2145, trunk: 770, topSpeed: '250 km/s' },

  // ─── VOLKSWAGEN ───
  'volkswagen|golf':      { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 4284, width: 1789, height: 1456, wheelbase: 2636, weight: 1355, trunk: 381, topSpeed: '224 km/s' },
  'volkswagen|polo':      { price2024: 1100000, price2020: 700000, price2015: 400000, length: 4074, width: 1751, height: 1451, wheelbase: 2564, weight: 1200, trunk: 351, topSpeed: '210 km/s' },
  'volkswagen|passat':    { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4860, width: 1832, height: 1484, wheelbase: 2871, weight: 1530, trunk: 586, topSpeed: '235 km/s' },
  'volkswagen|tiguan':    { price2024: 2100000, price2020: 1400000, price2015: 750000, length: 4509, width: 1839, height: 1657, wheelbase: 2678, weight: 1575, trunk: 615, topSpeed: '210 km/s' },
  'volkswagen|t-roc':     { price2024: 1700000, price2020: 1100000, length: 4236, width: 1819, height: 1573, wheelbase: 2590, weight: 1405, trunk: 445, topSpeed: '205 km/s' },
  'volkswagen|t-cross':   { price2024: 1400000, price2020: 900000, length: 4108, width: 1760, height: 1584, wheelbase: 2551, weight: 1270, trunk: 385, topSpeed: '195 km/s' },

  // ─── TOYOTA ───
  'toyota|corolla':   { price2024: 1300000, price2020: 900000, price2015: 500000, length: 4630, width: 1780, height: 1435, wheelbase: 2700, weight: 1320, trunk: 470, topSpeed: '200 km/s' },
  'toyota|yaris':     { price2024: 1050000, price2020: 650000, price2015: 380000, length: 3940, width: 1745, height: 1500, wheelbase: 2560, weight: 1050, trunk: 286, topSpeed: '185 km/s' },
  'toyota|c-hr':      { price2024: 1550000, price2020: 1050000, length: 4360, width: 1831, height: 1556, wheelbase: 2640, weight: 1400, trunk: 377, topSpeed: '190 km/s' },
  'toyota|rav4':      { price2024: 2100000, price2020: 1500000, price2015: 800000, length: 4600, width: 1855, height: 1685, wheelbase: 2690, weight: 1680, trunk: 580, topSpeed: '200 km/s' },
  'toyota|yaris-cross': { price2024: 1350000, price2020: 900000, length: 4180, width: 1765, height: 1595, wheelbase: 2560, weight: 1280, trunk: 397, topSpeed: '185 km/s' },
  'toyota|corolla-cross': { price2024: 1600000, length: 4460, width: 1825, height: 1620, wheelbase: 2640, weight: 1470, trunk: 433, topSpeed: '195 km/s' },
  'toyota|camry':     { price2024: 2200000, price2020: 1400000, price2015: 700000, length: 4885, width: 1840, height: 1445, wheelbase: 2825, weight: 1570, trunk: 524, topSpeed: '210 km/s' },
  'toyota|land-cruiser': { price2024: 5500000, price2020: 3500000, price2015: 1800000, length: 4985, width: 1980, height: 1930, wheelbase: 2850, weight: 2490, trunk: 553, topSpeed: '210 km/s' },

  // ─── FIAT ───
  'fiat|egea-sedan':  { price2024: 950000, price2020: 650000, length: 4502, width: 1790, height: 1483, wheelbase: 2638, weight: 1260, trunk: 520, topSpeed: '195 km/s' },
  'fiat|egea-hatchback': { price2024: 900000, price2020: 620000, length: 4368, width: 1790, height: 1490, wheelbase: 2638, weight: 1245, trunk: 450, topSpeed: '195 km/s' },
  'fiat|egea-cross':  { price2024: 1050000, price2020: 700000, length: 4390, width: 1797, height: 1520, wheelbase: 2638, weight: 1300, trunk: 440, topSpeed: '190 km/s' },
  'fiat|500':         { price2024: 750000, price2020: 450000, price2015: 280000, length: 3571, width: 1627, height: 1488, wheelbase: 2300, weight: 940, trunk: 185, topSpeed: '170 km/s' },
  'fiat|500x':        { price2024: 1200000, price2020: 800000, length: 4248, width: 1796, height: 1595, wheelbase: 2570, weight: 1360, trunk: 350, topSpeed: '195 km/s' },
  'fiat|doblo':       { price2024: 1100000, price2020: 750000, price2015: 400000, length: 4406, width: 1832, height: 1845, wheelbase: 2755, weight: 1550, trunk: 775, topSpeed: '175 km/s' },
  'fiat|panda':       { price2024: 650000, price2020: 400000, price2015: 250000, length: 3686, width: 1660, height: 1551, wheelbase: 2299, weight: 940, trunk: 225, topSpeed: '164 km/s' },

  // ─── RENAULT ───
  'renault|clio':     { price2024: 1000000, price2020: 700000, price2015: 380000, length: 4050, width: 1798, height: 1440, wheelbase: 2583, weight: 1150, trunk: 391, topSpeed: '198 km/s' },
  'renault|megane':   { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4359, width: 1814, height: 1447, wheelbase: 2669, weight: 1305, trunk: 384, topSpeed: '210 km/s' },
  'renault|taliant':  { price2024: 850000, price2020: 600000, length: 4213, width: 1734, height: 1466, wheelbase: 2604, weight: 1100, trunk: 510, topSpeed: '185 km/s' },
  'renault|captur':   { price2024: 1350000, price2020: 900000, length: 4227, width: 1797, height: 1576, wheelbase: 2639, weight: 1280, trunk: 422, topSpeed: '195 km/s' },
  'renault|kadjar':   { price2024: 1400000, price2020: 950000, length: 4489, width: 1836, height: 1607, wheelbase: 2646, weight: 1450, trunk: 472, topSpeed: '200 km/s' },
  'renault|koleos':   { price2024: 1800000, price2020: 1200000, length: 4673, width: 1843, height: 1678, wheelbase: 2705, weight: 1660, trunk: 624, topSpeed: '205 km/s' },

  // ─── HYUNDAI ───
  'hyundai|i10':      { price2024: 700000, price2020: 420000, length: 3670, width: 1680, height: 1500, wheelbase: 2425, weight: 960, trunk: 252, topSpeed: '172 km/s' },
  'hyundai|i20':      { price2024: 950000, price2020: 600000, price2015: 350000, length: 4040, width: 1775, height: 1450, wheelbase: 2580, weight: 1100, trunk: 352, topSpeed: '190 km/s' },
  'hyundai|bayon':    { price2024: 1100000, price2020: 750000, length: 4180, width: 1775, height: 1490, wheelbase: 2580, weight: 1185, trunk: 411, topSpeed: '185 km/s' },
  'hyundai|kona':     { price2024: 1400000, price2020: 950000, length: 4355, width: 1825, height: 1575, wheelbase: 2660, weight: 1380, trunk: 466, topSpeed: '195 km/s' },
  'hyundai|tucson':   { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4500, width: 1865, height: 1650, wheelbase: 2680, weight: 1540, trunk: 546, topSpeed: '205 km/s' },
  'hyundai|elantra':  { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4650, width: 1825, height: 1400, wheelbase: 2720, weight: 1350, trunk: 474, topSpeed: '210 km/s' },

  // ─── KIA ───
  'kia|picanto':      { price2024: 650000, price2020: 400000, price2015: 250000, length: 3595, width: 1595, height: 1485, wheelbase: 2400, weight: 940, trunk: 255, topSpeed: '167 km/s' },
  'kia|stonic':       { price2024: 1100000, price2020: 700000, length: 4140, width: 1760, height: 1520, wheelbase: 2580, weight: 1200, trunk: 352, topSpeed: '185 km/s' },
  'kia|ceed':         { price2024: 1250000, price2020: 800000, length: 4310, width: 1800, height: 1447, wheelbase: 2650, weight: 1305, trunk: 395, topSpeed: '210 km/s' },
  'kia|sportage':     { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4515, width: 1865, height: 1650, wheelbase: 2680, weight: 1590, trunk: 543, topSpeed: '205 km/s' },
  'kia|sorento':      { price2024: 2600000, price2020: 1600000, price2015: 850000, length: 4810, width: 1900, height: 1700, wheelbase: 2815, weight: 1885, trunk: 821, topSpeed: '210 km/s' },

  // ─── PEUGEOT ───
  'peugeot|208':      { price2024: 1050000, price2020: 650000, length: 4055, width: 1745, height: 1430, wheelbase: 2540, weight: 1120, trunk: 309, topSpeed: '200 km/s' },
  'peugeot|308':      { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4367, width: 1852, height: 1441, wheelbase: 2675, weight: 1340, trunk: 412, topSpeed: '215 km/s' },
  'peugeot|2008':     { price2024: 1400000, price2020: 950000, length: 4300, width: 1770, height: 1530, wheelbase: 2605, weight: 1280, trunk: 434, topSpeed: '195 km/s' },
  'peugeot|3008':     { price2024: 2100000, price2020: 1300000, price2015: 700000, length: 4447, width: 1841, height: 1620, wheelbase: 2675, weight: 1475, trunk: 520, topSpeed: '200 km/s' },
  'peugeot|5008':     { price2024: 2400000, price2020: 1500000, length: 4641, width: 1844, height: 1646, wheelbase: 2840, weight: 1570, trunk: 780, topSpeed: '200 km/s' },

  // ─── CITROEN ───
  'citroen|c3':       { price2024: 850000, price2020: 550000, price2015: 320000, length: 3981, width: 1755, height: 1474, wheelbase: 2540, weight: 1050, trunk: 300, topSpeed: '180 km/s' },
  'citroen|c3-aircross': { price2024: 1150000, price2020: 750000, length: 4154, width: 1756, height: 1637, wheelbase: 2604, weight: 1240, trunk: 410, topSpeed: '185 km/s' },
  'citroen|c4':       { price2024: 1350000, price2020: 900000, length: 4360, width: 1800, height: 1525, wheelbase: 2670, weight: 1310, trunk: 380, topSpeed: '205 km/s' },
  'citroen|c5-aircross': { price2024: 1600000, price2020: 1050000, length: 4500, width: 1859, height: 1670, wheelbase: 2730, weight: 1510, trunk: 580, topSpeed: '200 km/s' },
  'citroen|berlingo':  { price2024: 1050000, price2020: 700000, price2015: 400000, length: 4403, width: 1848, height: 1844, wheelbase: 2785, weight: 1500, trunk: 775, topSpeed: '175 km/s' },

  // ─── OPEL ───
  'opel|corsa':       { price2024: 1100000, price2020: 700000, price2015: 380000, length: 4060, width: 1765, height: 1433, wheelbase: 2538, weight: 1180, trunk: 309, topSpeed: '195 km/s' },
  'opel|astra':       { price2024: 1400000, price2020: 850000, price2015: 480000, length: 4374, width: 1860, height: 1441, wheelbase: 2675, weight: 1350, trunk: 422, topSpeed: '215 km/s' },
  'opel|crossland':   { price2024: 1200000, price2020: 800000, length: 4217, width: 1765, height: 1605, wheelbase: 2604, weight: 1260, trunk: 410, topSpeed: '190 km/s' },
  'opel|grandland':   { price2024: 1700000, price2020: 1100000, length: 4477, width: 1856, height: 1609, wheelbase: 2675, weight: 1470, trunk: 514, topSpeed: '200 km/s' },
  'opel|mokka':       { price2024: 1300000, price2020: 850000, length: 4151, width: 1791, height: 1534, wheelbase: 2557, weight: 1300, trunk: 350, topSpeed: '195 km/s' },

  // ─── SKODA ───
  'skoda|fabia':      { price2024: 1000000, price2020: 650000, price2015: 350000, length: 4108, width: 1780, height: 1460, wheelbase: 2564, weight: 1180, trunk: 380, topSpeed: '205 km/s' },
  'skoda|octavia':    { price2024: 1600000, price2020: 1050000, price2015: 580000, length: 4689, width: 1829, height: 1469, wheelbase: 2686, weight: 1370, trunk: 600, topSpeed: '222 km/s' },
  'skoda|superb':     { price2024: 2200000, price2020: 1400000, price2015: 700000, length: 4869, width: 1849, height: 1478, wheelbase: 2841, weight: 1500, trunk: 625, topSpeed: '235 km/s' },
  'skoda|karoq':      { price2024: 1600000, price2020: 1050000, length: 4382, width: 1841, height: 1605, wheelbase: 2638, weight: 1410, trunk: 521, topSpeed: '205 km/s' },
  'skoda|kodiaq':     { price2024: 2200000, price2020: 1400000, length: 4697, width: 1882, height: 1676, wheelbase: 2791, weight: 1640, trunk: 835, topSpeed: '210 km/s' },

  // ─── SEAT/CUPRA ───
  'seat|ibiza':       { price2024: 1000000, price2020: 600000, price2015: 340000, length: 4059, width: 1780, height: 1444, wheelbase: 2564, weight: 1150, trunk: 355, topSpeed: '200 km/s' },
  'seat|leon':        { price2024: 1350000, price2020: 850000, price2015: 480000, length: 4368, width: 1800, height: 1456, wheelbase: 2636, weight: 1300, trunk: 380, topSpeed: '215 km/s' },
  'seat|arona':       { price2024: 1200000, price2020: 750000, length: 4138, width: 1780, height: 1552, wheelbase: 2566, weight: 1205, trunk: 400, topSpeed: '195 km/s' },
  'seat|ateca':       { price2024: 1600000, price2020: 1050000, length: 4363, width: 1841, height: 1615, wheelbase: 2630, weight: 1440, trunk: 510, topSpeed: '205 km/s' },

  // ─── HONDA ───
  'honda|civic':      { price2024: 1500000, price2020: 950000, price2015: 500000, length: 4549, width: 1800, height: 1415, wheelbase: 2733, weight: 1340, trunk: 410, topSpeed: '220 km/s' },
  'honda|jazz':       { price2024: 1100000, price2020: 700000, price2015: 400000, length: 4044, width: 1694, height: 1526, wheelbase: 2519, weight: 1130, trunk: 354, topSpeed: '185 km/s' },
  'honda|cr-v':       { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4694, width: 1855, height: 1680, wheelbase: 2700, weight: 1640, trunk: 561, topSpeed: '200 km/s' },
  'honda|hr-v':       { price2024: 1400000, price2020: 900000, length: 4340, width: 1790, height: 1580, wheelbase: 2610, weight: 1350, trunk: 319, topSpeed: '190 km/s' },

  // ─── NISSAN ───
  'nissan|qashqai':   { price2024: 1700000, price2020: 1100000, price2015: 600000, length: 4425, width: 1838, height: 1635, wheelbase: 2665, weight: 1480, trunk: 504, topSpeed: '200 km/s' },
  'nissan|juke':      { price2024: 1300000, price2020: 850000, price2015: 450000, length: 4210, width: 1800, height: 1595, wheelbase: 2636, weight: 1280, trunk: 422, topSpeed: '190 km/s' },
  'nissan|x-trail':   { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4680, width: 1840, height: 1720, wheelbase: 2705, weight: 1710, trunk: 585, topSpeed: '200 km/s' },
  'nissan|micra':     { price2024: 850000, price2020: 550000, price2015: 320000, length: 3999, width: 1743, height: 1455, wheelbase: 2525, weight: 1060, trunk: 300, topSpeed: '185 km/s' },

  // ─── MAZDA ───
  'mazda|3':          { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4459, width: 1797, height: 1435, wheelbase: 2725, weight: 1380, trunk: 358, topSpeed: '215 km/s' },
  'mazda|cx-3':       { price2024: 1200000, price2020: 800000, length: 4275, width: 1765, height: 1535, wheelbase: 2570, weight: 1280, trunk: 350, topSpeed: '195 km/s' },
  'mazda|cx-5':       { price2024: 1900000, price2020: 1250000, price2015: 680000, length: 4550, width: 1842, height: 1680, wheelbase: 2700, weight: 1580, trunk: 506, topSpeed: '205 km/s' },
  'mazda|cx-30':      { price2024: 1500000, price2020: 1000000, length: 4395, width: 1795, height: 1540, wheelbase: 2655, weight: 1380, trunk: 430, topSpeed: '200 km/s' },

  // ─── VOLVO ───
  'volvo|xc40':       { price2024: 2400000, price2020: 1600000, length: 4425, width: 1863, height: 1652, wheelbase: 2702, weight: 1625, trunk: 452, topSpeed: '210 km/s' },
  'volvo|xc60':       { price2024: 3700000, price2020: 2400000, price2015: 1300000, length: 4688, width: 1902, height: 1658, wheelbase: 2865, weight: 1850, trunk: 505, topSpeed: '210 km/s' },
  'volvo|xc90':       { price2024: 5500000, price2020: 3500000, price2015: 1800000, length: 4953, width: 1923, height: 1776, wheelbase: 2984, weight: 2140, trunk: 640, topSpeed: '230 km/s' },
  'volvo|s60':        { price2024: 2800000, price2020: 1800000, price2015: 950000, length: 4761, width: 1850, height: 1431, wheelbase: 2872, weight: 1660, trunk: 442, topSpeed: '230 km/s' },
  'volvo|s90':        { price2024: 4000000, price2020: 2600000, length: 4963, width: 1879, height: 1443, wheelbase: 2941, weight: 1840, trunk: 500, topSpeed: '240 km/s' },

  // ─── DACIA ───
  'dacia|sandero':    { price2024: 700000, price2020: 450000, price2015: 260000, length: 4088, width: 1736, height: 1517, wheelbase: 2604, weight: 1050, trunk: 328, topSpeed: '178 km/s' },
  'dacia|duster':     { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4341, width: 1813, height: 1666, wheelbase: 2657, weight: 1340, trunk: 478, topSpeed: '195 km/s' },
  'dacia|jogger':     { price2024: 1100000, length: 4547, width: 1784, height: 1632, wheelbase: 2898, weight: 1290, trunk: 708, topSpeed: '178 km/s' },
  'dacia|spring':     { price2024: 800000, length: 3734, width: 1579, height: 1516, wheelbase: 2423, weight: 970, trunk: 270, topSpeed: '125 km/s' },

  // ─── TESLA ───
  'tesla|model-3':    { price2024: 1900000, length: 4720, width: 1849, height: 1441, wheelbase: 2875, weight: 1790, trunk: 561, topSpeed: '225 km/s' },
  'tesla|model-y':    { price2024: 2100000, length: 4751, width: 1921, height: 1624, wheelbase: 2890, weight: 1960, trunk: 854, topSpeed: '217 km/s' },
  'tesla|model-s':    { price2024: 4500000, length: 4970, width: 1964, height: 1445, wheelbase: 2960, weight: 2100, trunk: 793, topSpeed: '250 km/s' },
  'tesla|model-x':    { price2024: 5500000, length: 5057, width: 1999, height: 1680, wheelbase: 2965, weight: 2350, trunk: 897, topSpeed: '250 km/s' },

  // ─── TOGG ───
  'togg|t10x':        { price2024: 1450000, length: 4600, width: 1900, height: 1572, wheelbase: 2830, weight: 1913, trunk: 460, topSpeed: '180 km/s' },
  'togg|t10f':        { price2024: 1550000, length: 4760, width: 1900, height: 1508, wheelbase: 2830, weight: 1870, trunk: 490, topSpeed: '200 km/s' },

  // ─── PORSCHE ───
  'porsche|911':      { price2024: 10000000, price2020: 7000000, price2015: 4000000, length: 4519, width: 1852, height: 1300, wheelbase: 2450, weight: 1480, trunk: 132, topSpeed: '293 km/s' },
  'porsche|cayenne':  { price2024: 7500000, price2020: 4500000, price2015: 2500000, length: 4918, width: 1983, height: 1696, wheelbase: 2895, weight: 2045, trunk: 772, topSpeed: '248 km/s' },
  'porsche|macan':    { price2024: 5500000, price2020: 3200000, price2015: 1800000, length: 4726, width: 1922, height: 1621, wheelbase: 2807, weight: 1895, trunk: 488, topSpeed: '240 km/s' },
  'porsche|taycan':   { price2024: 7500000, length: 4963, width: 1966, height: 1378, wheelbase: 2900, weight: 2140, trunk: 407, topSpeed: '250 km/s' },
  'porsche|panamera': { price2024: 9000000, price2020: 5000000, price2015: 2800000, length: 5049, width: 1937, height: 1423, wheelbase: 2950, weight: 1940, trunk: 495, topSpeed: '250 km/s' },

  // ─── FORD ───
  'ford|fiesta':      { price2024: 950000, price2020: 600000, price2015: 340000, length: 4040, width: 1735, height: 1476, wheelbase: 2489, weight: 1130, trunk: 292, topSpeed: '195 km/s' },
  'ford|focus':       { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4378, width: 1825, height: 1448, wheelbase: 2700, weight: 1355, trunk: 375, topSpeed: '210 km/s' },
  'ford|puma':        { price2024: 1400000, price2020: 950000, length: 4186, width: 1805, height: 1536, wheelbase: 2588, weight: 1300, trunk: 456, topSpeed: '195 km/s' },
  'ford|kuga':        { price2024: 1800000, price2020: 1150000, price2015: 600000, length: 4614, width: 1882, height: 1679, wheelbase: 2710, weight: 1575, trunk: 475, topSpeed: '205 km/s' },
  'ford|ranger':      { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 5362, width: 1918, height: 1886, wheelbase: 3270, weight: 2200, trunk: null, topSpeed: '180 km/s' },

  // ─── JEEP ───
  'jeep|renegade':    { price2024: 1500000, price2020: 950000, length: 4236, width: 1805, height: 1667, wheelbase: 2570, weight: 1410, trunk: 351, topSpeed: '195 km/s' },
  'jeep|compass':     { price2024: 1800000, price2020: 1150000, length: 4395, width: 1818, height: 1640, wheelbase: 2636, weight: 1510, trunk: 438, topSpeed: '200 km/s' },
  'jeep|grand-cherokee': { price2024: 4500000, price2020: 2800000, price2015: 1500000, length: 4914, width: 1979, height: 1795, wheelbase: 2964, weight: 2160, trunk: 1050, topSpeed: '210 km/s' },

  // ─── LAND ROVER ───
  'land-rover|range-rover-evoque': { price2024: 3800000, price2020: 2400000, length: 4371, width: 1904, height: 1649, wheelbase: 2681, weight: 1795, trunk: 591, topSpeed: '217 km/s' },
  'land-rover|range-rover-sport':  { price2024: 7000000, price2020: 4500000, price2015: 2500000, length: 4946, width: 2047, height: 1820, wheelbase: 2997, weight: 2310, trunk: 835, topSpeed: '242 km/s' },
  'land-rover|range-rover':        { price2024: 10000000, price2020: 6000000, price2015: 3000000, length: 5052, width: 2047, height: 1870, wheelbase: 3100, weight: 2560, trunk: 725, topSpeed: '250 km/s' },
  'land-rover|defender':           { price2024: 5500000, price2020: 3500000, length: 4758, width: 2008, height: 1967, wheelbase: 3022, weight: 2240, trunk: 786, topSpeed: '191 km/s' },

  // ─── JAGUAR ───
  'jaguar|f-pace':    { price2024: 4500000, price2020: 2800000, length: 4747, width: 2175, height: 1652, wheelbase: 2874, weight: 1960, trunk: 619, topSpeed: '240 km/s' },
  'jaguar|e-pace':    { price2024: 3200000, price2020: 2000000, length: 4395, width: 2043, height: 1649, wheelbase: 2681, weight: 1780, trunk: 577, topSpeed: '225 km/s' },

  // ─── SUBARU ───
  'subaru|forester':  { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4640, width: 1815, height: 1730, wheelbase: 2670, weight: 1570, trunk: 509, topSpeed: '195 km/s' },
  'subaru|outback':   { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4870, width: 1875, height: 1675, wheelbase: 2745, weight: 1630, trunk: 522, topSpeed: '200 km/s' },
  'subaru|xv':        { price2024: 1500000, price2020: 1000000, length: 4480, width: 1800, height: 1595, wheelbase: 2670, weight: 1440, trunk: 340, topSpeed: '194 km/s' },

  // ─── SUZUKI ───
  'suzuki|vitara':    { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4175, width: 1775, height: 1610, wheelbase: 2500, weight: 1190, trunk: 375, topSpeed: '190 km/s' },
  'suzuki|s-cross':   { price2024: 1350000, price2020: 900000, length: 4300, width: 1785, height: 1585, wheelbase: 2600, weight: 1280, trunk: 430, topSpeed: '195 km/s' },
  'suzuki|swift':     { price2024: 900000, price2020: 550000, price2015: 300000, length: 3845, width: 1735, height: 1480, wheelbase: 2450, weight: 990, trunk: 265, topSpeed: '185 km/s' },
  'suzuki|jimny':     { price2024: 1400000, price2020: 1000000, length: 3645, width: 1645, height: 1720, wheelbase: 2250, weight: 1100, trunk: 85, topSpeed: '145 km/s' },

  // ─── MITSUBISHI ───
  'mitsubishi|eclipse-cross': { price2024: 1600000, price2020: 1050000, length: 4405, width: 1805, height: 1685, wheelbase: 2670, weight: 1440, trunk: 448, topSpeed: '195 km/s' },
  'mitsubishi|outlander':     { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4710, width: 1862, height: 1745, wheelbase: 2706, weight: 1700, trunk: 495, topSpeed: '200 km/s' },
  'mitsubishi|asx':           { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4295, width: 1770, height: 1625, wheelbase: 2670, weight: 1370, trunk: 406, topSpeed: '195 km/s' },
  'mitsubishi|l200':          { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 5305, width: 1815, height: 1780, wheelbase: 3000, weight: 1910, trunk: null, topSpeed: '180 km/s' },

  // ─── SSANGYONG ───
  'ssangyong|tivoli':   { price2024: 1100000, price2020: 700000, length: 4195, width: 1798, height: 1600, wheelbase: 2600, weight: 1335, trunk: 423, topSpeed: '185 km/s' },
  'ssangyong|korando':  { price2024: 1400000, price2020: 900000, length: 4450, width: 1870, height: 1620, wheelbase: 2675, weight: 1510, trunk: 551, topSpeed: '195 km/s' },
  'ssangyong|rexton':   { price2024: 2200000, price2020: 1400000, length: 4850, width: 1960, height: 1825, wheelbase: 2865, weight: 2120, trunk: 820, topSpeed: '200 km/s' },

  // ─── MG ───
  'mg|zs':        { price2024: 1050000, length: 4323, width: 1809, height: 1624, wheelbase: 2580, weight: 1320, trunk: 448, topSpeed: '180 km/s' },
  'mg|hs':        { price2024: 1400000, length: 4574, width: 1876, height: 1685, wheelbase: 2720, weight: 1550, trunk: 463, topSpeed: '190 km/s' },
  'mg|4':         { price2024: 1200000, length: 4287, width: 1836, height: 1516, wheelbase: 2705, weight: 1655, trunk: 363, topSpeed: '180 km/s' },

  // ─── BYD ───
  'byd|atto-3':   { price2024: 1350000, length: 4455, width: 1875, height: 1615, wheelbase: 2720, weight: 1750, trunk: 440, topSpeed: '160 km/s' },
  'byd|han':      { price2024: 2200000, length: 4995, width: 1910, height: 1495, wheelbase: 2920, weight: 2020, trunk: 410, topSpeed: '185 km/s' },
  'byd|seal':     { price2024: 1800000, length: 4800, width: 1875, height: 1460, wheelbase: 2920, weight: 1885, trunk: 400, topSpeed: '180 km/s' },

  // ─── CHERY ───
  'chery|tiggo-4-pro':  { price2024: 950000, length: 4318, width: 1831, height: 1648, wheelbase: 2610, weight: 1380, trunk: 340, topSpeed: '180 km/s' },
  'chery|tiggo-7-pro':  { price2024: 1200000, length: 4500, width: 1842, height: 1706, wheelbase: 2670, weight: 1510, trunk: 475, topSpeed: '185 km/s' },
  'chery|tiggo-8-pro':  { price2024: 1500000, length: 4722, width: 1860, height: 1746, wheelbase: 2710, weight: 1700, trunk: 892, topSpeed: '190 km/s' },

  // ─── DS ───
  'ds|ds3':       { price2024: 1700000, length: 4118, width: 1791, height: 1534, wheelbase: 2558, weight: 1310, trunk: 350, topSpeed: '205 km/s' },
  'ds|ds7':       { price2024: 2500000, price2020: 1600000, length: 4590, width: 1895, height: 1625, wheelbase: 2730, weight: 1590, trunk: 555, topSpeed: '210 km/s' },

  // ─── ALFA ROMEO ───
  'alfa-romeo|giulia':    { price2024: 2800000, price2020: 1700000, length: 4643, width: 1860, height: 1436, wheelbase: 2820, weight: 1430, trunk: 480, topSpeed: '240 km/s' },
  'alfa-romeo|stelvio':   { price2024: 3200000, price2020: 2000000, length: 4687, width: 1903, height: 1671, wheelbase: 2818, weight: 1660, trunk: 525, topSpeed: '230 km/s' },
  'alfa-romeo|tonale':    { price2024: 2300000, length: 4528, width: 1844, height: 1601, wheelbase: 2636, weight: 1510, trunk: 500, topSpeed: '215 km/s' },

  // ─── LEXUS ───
  'lexus|nx':       { price2024: 3500000, price2020: 2200000, length: 4660, width: 1865, height: 1660, wheelbase: 2690, weight: 1790, trunk: 520, topSpeed: '200 km/s' },
  'lexus|rx':       { price2024: 4500000, price2020: 3000000, price2015: 1600000, length: 4890, width: 1920, height: 1695, wheelbase: 2850, weight: 1930, trunk: 612, topSpeed: '200 km/s' },
  'lexus|ux':       { price2024: 2800000, price2020: 1800000, length: 4495, width: 1840, height: 1545, wheelbase: 2640, weight: 1540, trunk: 320, topSpeed: '177 km/s' },
  'lexus|es':       { price2024: 3200000, price2020: 2000000, length: 4975, width: 1865, height: 1445, wheelbase: 2870, weight: 1680, trunk: 454, topSpeed: '180 km/s' },

  // ─── GENESIS ───
  'genesis|gv70':   { price2024: 3800000, length: 4715, width: 1910, height: 1630, wheelbase: 2875, weight: 1850, trunk: 503, topSpeed: '235 km/s' },
  'genesis|gv80':   { price2024: 5000000, length: 4945, width: 1975, height: 1715, wheelbase: 2955, weight: 2150, trunk: 727, topSpeed: '230 km/s' },
  'genesis|g80':    { price2024: 4200000, length: 4995, width: 1925, height: 1465, wheelbase: 3010, weight: 1900, trunk: 424, topSpeed: '250 km/s' },

  // ─── MASERATI ───
  'maserati|ghibli':   { price2024: 5500000, price2020: 3500000, length: 4971, width: 1945, height: 1461, wheelbase: 2998, weight: 1810, trunk: 500, topSpeed: '267 km/s' },
  'maserati|levante':  { price2024: 6500000, price2020: 4000000, length: 5003, width: 1981, height: 1693, wheelbase: 3004, weight: 2109, trunk: 580, topSpeed: '251 km/s' },

  // ─── POLESTAR ───
  'polestar|polestar-2': { price2024: 2500000, length: 4606, width: 1859, height: 1479, wheelbase: 2735, weight: 1990, trunk: 405, topSpeed: '205 km/s' },

  // ─── CADILLAC ───
  'cadillac|xt4':   { price2024: 3000000, length: 4599, width: 1881, height: 1627, wheelbase: 2779, weight: 1710, trunk: 637, topSpeed: '210 km/s' },
  'cadillac|xt5':   { price2024: 3800000, price2020: 2400000, length: 4812, width: 1903, height: 1750, wheelbase: 2857, weight: 1890, trunk: 850, topSpeed: '210 km/s' },

  // ─── LINCOLN ───
  'lincoln|corsair':   { price2024: 3500000, length: 4606, width: 1887, height: 1626, wheelbase: 2711, weight: 1775, trunk: 699, topSpeed: '215 km/s' },
  'lincoln|nautilus':  { price2024: 4500000, price2020: 2800000, length: 4849, width: 1936, height: 1717, wheelbase: 2849, weight: 1930, trunk: 963, topSpeed: '210 km/s' },

  // ─── CHEVROLET ───
  'chevrolet|trax':    { price2024: 1300000, length: 4246, width: 1776, height: 1674, wheelbase: 2600, weight: 1360, trunk: 356, topSpeed: '185 km/s' },
  'chevrolet|captiva': { price2024: 1500000, length: 4655, width: 1835, height: 1713, wheelbase: 2700, weight: 1590, trunk: 585, topSpeed: '190 km/s' },
};

/**
 * Doğrulanmış veri lookup
 * @param {string} brandSlug
 * @param {string} modelSlug
 * @returns {Object|null}
 */
function getVerifiedData(brandSlug, modelSlug) {
  const key = `${brandSlug}|${modelSlug}`;
  return VERIFIED_DATA[key] || null;
}

/**
 * İstatistikler
 */
function getVerifiedStats() {
  const entries = Object.keys(VERIFIED_DATA);
  const brands = new Set(entries.map(k => k.split('|')[0]));
  return {
    totalModels: entries.length,
    totalBrands: brands.size,
    brands: [...brands]
  };
}

module.exports = { getVerifiedData, getVerifiedStats, VERIFIED_DATA };
