/**
 * Doğrulanmış Model Verileri — Part 2 (Fiat → Mazda)
 */

const VERIFIED_DATA_PART2 = {

  // ══════════════════════════════════════════════════════════════
  // FIAT
  // ══════════════════════════════════════════════════════════════
  'fiat|egea-sedan':         { price2024: 950000, price2020: 650000, length: 4502, width: 1790, height: 1483, wheelbase: 2638, weight: 1260, trunk: 520, topSpeed: '195 km/s' },
  'fiat|egea-hatchback':     { price2024: 900000, price2020: 620000, length: 4368, width: 1790, height: 1490, wheelbase: 2638, weight: 1245, trunk: 450, topSpeed: '195 km/s' },
  'fiat|egea-cross':         { price2024: 1050000, price2020: 700000, length: 4390, width: 1797, height: 1520, wheelbase: 2638, weight: 1300, trunk: 440, topSpeed: '190 km/s' },
  'fiat|egea-station-wagon': { price2024: 1000000, price2020: 680000, length: 4571, width: 1790, height: 1497, wheelbase: 2638, weight: 1290, trunk: 550, topSpeed: '195 km/s' },
  'fiat|500':                { price2024: 750000, price2020: 450000, price2015: 280000, length: 3571, width: 1627, height: 1488, wheelbase: 2300, weight: 940, trunk: 185, topSpeed: '170 km/s' },
  'fiat|500e':               { price2024: 1200000, length: 3631, width: 1683, height: 1527, wheelbase: 2322, weight: 1365, trunk: 185, topSpeed: '150 km/s' },
  'fiat|500l':               { price2024: 600000, price2020: 400000, price2015: 250000, length: 4146, width: 1784, height: 1658, wheelbase: 2612, weight: 1360, trunk: 455, topSpeed: '180 km/s' },
  'fiat|500x':               { price2024: 1200000, price2020: 800000, length: 4248, width: 1796, height: 1595, wheelbase: 2570, weight: 1360, trunk: 350, topSpeed: '195 km/s' },
  'fiat|600e':               { price2024: 1400000, length: 4171, width: 1781, height: 1523, wheelbase: 2561, weight: 1579, trunk: 360, topSpeed: '150 km/s' },
  'fiat|124-spider':         { price2024: 1800000, price2020: 1200000, length: 4054, width: 1740, height: 1233, wheelbase: 2310, weight: 1060, trunk: 140, topSpeed: '232 km/s' },
  'fiat|bravo':              { price2024: 350000, price2020: 240000, price2015: 150000, length: 4336, width: 1792, height: 1498, wheelbase: 2600, weight: 1305, trunk: 400, topSpeed: '200 km/s' },
  'fiat|doblo':              { price2024: 1100000, price2020: 750000, price2015: 400000, length: 4406, width: 1832, height: 1845, wheelbase: 2755, weight: 1550, trunk: 775, topSpeed: '175 km/s' },
  'fiat|fiorino':            { price2024: 750000, price2020: 500000, price2015: 300000, length: 3864, width: 1716, height: 1720, wheelbase: 2513, weight: 1180, trunk: 660, topSpeed: '160 km/s' },
  'fiat|freemont':           { price2024: 600000, price2020: 400000, price2015: 250000, length: 4887, width: 1878, height: 1691, wheelbase: 2890, weight: 1735, trunk: 556, topSpeed: '195 km/s' },
  'fiat|linea':              { price2024: 300000, price2020: 210000, price2015: 130000, length: 4560, width: 1735, height: 1498, wheelbase: 2603, weight: 1145, trunk: 500, topSpeed: '185 km/s' },
  'fiat|panda':              { price2024: 650000, price2020: 400000, price2015: 250000, length: 3686, width: 1660, height: 1551, wheelbase: 2299, weight: 940, trunk: 225, topSpeed: '164 km/s' },
  'fiat|panda-cross':        { price2024: 750000, price2020: 480000, price2015: 280000, length: 3686, width: 1660, height: 1601, wheelbase: 2299, weight: 1040, trunk: 225, topSpeed: '164 km/s' },
  'fiat|punto':              { price2024: 250000, price2020: 180000, price2015: 110000, length: 4065, width: 1687, height: 1490, wheelbase: 2510, weight: 1125, trunk: 275, topSpeed: '188 km/s' },
  'fiat|tipo':               { price2024: 800000, price2020: 550000, price2015: 330000, length: 4532, width: 1792, height: 1497, wheelbase: 2638, weight: 1265, trunk: 520, topSpeed: '195 km/s' },
  'fiat|tipo-cross':         { price2024: 900000, price2020: 600000, length: 4390, width: 1792, height: 1530, wheelbase: 2638, weight: 1310, trunk: 440, topSpeed: '190 km/s' },
  'fiat|tipo-hatchback':     { price2024: 780000, price2020: 530000, length: 4368, width: 1792, height: 1497, wheelbase: 2638, weight: 1255, trunk: 440, topSpeed: '195 km/s' },
  'fiat|tipo-station-wagon': { price2024: 820000, price2020: 560000, length: 4571, width: 1792, height: 1497, wheelbase: 2638, weight: 1290, trunk: 550, topSpeed: '195 km/s' },
  'fiat|topolino':           { price2024: 500000, length: 2535, width: 1400, height: 1590, wheelbase: 1740, weight: 615, trunk: 63, topSpeed: '45 km/s' },

  // ══════════════════════════════════════════════════════════════
  // FORD
  // ══════════════════════════════════════════════════════════════
  'ford|fiesta':             { price2024: 950000, price2020: 600000, price2015: 340000, length: 4040, width: 1735, height: 1476, wheelbase: 2489, weight: 1130, trunk: 292, topSpeed: '195 km/s' },
  'ford|focus':              { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4378, width: 1825, height: 1448, wheelbase: 2700, weight: 1355, trunk: 375, topSpeed: '210 km/s' },
  'ford|focus-sedan':        { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4534, width: 1825, height: 1466, wheelbase: 2700, weight: 1370, trunk: 511, topSpeed: '210 km/s' },
  'ford|focus-station-wagon': { price2024: 1350000, price2020: 880000, price2015: 500000, length: 4668, width: 1825, height: 1484, wheelbase: 2700, weight: 1400, trunk: 575, topSpeed: '208 km/s' },
  'ford|puma':               { price2024: 1400000, price2020: 950000, length: 4186, width: 1805, height: 1536, wheelbase: 2588, weight: 1300, trunk: 456, topSpeed: '195 km/s' },
  'ford|kuga':               { price2024: 1800000, price2020: 1150000, price2015: 600000, length: 4614, width: 1882, height: 1679, wheelbase: 2710, weight: 1575, trunk: 475, topSpeed: '205 km/s' },
  'ford|ranger':             { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 5362, width: 1918, height: 1886, wheelbase: 3270, weight: 2200, trunk: null, topSpeed: '180 km/s' },
  'ford|b-max':              { price2024: 450000, price2020: 320000, price2015: 190000, length: 4077, width: 1751, height: 1604, wheelbase: 2490, weight: 1205, trunk: 318, topSpeed: '183 km/s' },
  'ford|bronco':             { price2024: 4000000, price2020: 2800000, length: 4813, width: 1938, height: 1866, wheelbase: 2948, weight: 2115, trunk: 562, topSpeed: '180 km/s' },
  'ford|c-max':              { price2024: 500000, price2020: 350000, price2015: 200000, length: 4379, width: 1828, height: 1619, wheelbase: 2649, weight: 1390, trunk: 432, topSpeed: '200 km/s' },
  'ford|e-transit':          { price2024: 2200000, length: 5981, width: 2059, height: 2574, wheelbase: 3750, weight: 2600, trunk: 9500, topSpeed: '120 km/s' },
  'ford|ecosport':           { price2024: 800000, price2020: 550000, price2015: 320000, length: 4096, width: 1765, height: 1647, wheelbase: 2519, weight: 1290, trunk: 356, topSpeed: '182 km/s' },
  'ford|edge':               { price2024: 2500000, price2020: 1700000, length: 4778, width: 1928, height: 1742, wheelbase: 2849, weight: 1838, trunk: 602, topSpeed: '210 km/s' },
  'ford|explorer':           { price2024: 3500000, price2020: 2500000, length: 5050, width: 2004, height: 1778, wheelbase: 3025, weight: 2260, trunk: 640, topSpeed: '230 km/s' },
  'ford|f-150':              { price2024: 4500000, price2020: 3200000, price2015: 1700000, length: 5885, width: 2029, height: 1918, wheelbase: 3698, weight: 2130, trunk: null, topSpeed: '175 km/s' },
  'ford|galaxy':             { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 4845, width: 1916, height: 1775, wheelbase: 2850, weight: 1710, trunk: 800, topSpeed: '208 km/s' },
  'ford|mondeo':             { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4871, width: 1852, height: 1477, wheelbase: 2850, weight: 1550, trunk: 550, topSpeed: '225 km/s' },
  'ford|mustang':            { price2024: 4500000, price2020: 3000000, price2015: 1600000, length: 4794, width: 1916, height: 1381, wheelbase: 2720, weight: 1651, trunk: 382, topSpeed: '250 km/s' },
  'ford|mustang-mach-e':     { price2024: 2800000, length: 4743, width: 1881, height: 1613, wheelbase: 2984, weight: 2100, trunk: 402, topSpeed: '180 km/s' },
  'ford|raptor':             { price2024: 3500000, price2020: 2500000, length: 5362, width: 2028, height: 1929, wheelbase: 3270, weight: 2423, trunk: null, topSpeed: '180 km/s' },
  'ford|s-max':              { price2024: 1400000, price2020: 950000, price2015: 520000, length: 4796, width: 1916, height: 1658, wheelbase: 2850, weight: 1660, trunk: 630, topSpeed: '210 km/s' },
  'ford|tourneo-connect':    { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4393, width: 1835, height: 1826, wheelbase: 2785, weight: 1560, trunk: 680, topSpeed: '170 km/s' },
  'ford|tourneo-courier':    { price2024: 900000, price2020: 600000, price2015: 340000, length: 4157, width: 1768, height: 1788, wheelbase: 2519, weight: 1290, trunk: 566, topSpeed: '165 km/s' },
  'ford|tourneo-custom':     { price2024: 2000000, price2020: 1400000, price2015: 750000, length: 5340, width: 1986, height: 2085, wheelbase: 3300, weight: 2050, trunk: 1300, topSpeed: '175 km/s' },
  'ford|transit':            { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 5981, width: 2059, height: 2574, wheelbase: 3750, weight: 2150, trunk: 9500, topSpeed: '160 km/s' },
  'ford|transit-connect':    { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4410, width: 1835, height: 1826, wheelbase: 2662, weight: 1520, trunk: 680, topSpeed: '165 km/s' },
  'ford|transit-courier':    { price2024: 850000, price2020: 580000, price2015: 330000, length: 4157, width: 1768, height: 1788, wheelbase: 2519, weight: 1240, trunk: 566, topSpeed: '162 km/s' },
  'ford|transit-custom':     { price2024: 1600000, price2020: 1100000, price2015: 600000, length: 5340, width: 1986, height: 2085, wheelbase: 3300, weight: 1920, trunk: 5800, topSpeed: '160 km/s' },

  // ══════════════════════════════════════════════════════════════
  // GAC
  // ══════════════════════════════════════════════════════════════
  'gac|aion-s':   { price2024: 1000000, length: 4810, width: 1880, height: 1515, wheelbase: 2750, weight: 1580, trunk: 453, topSpeed: '156 km/s' },
  'gac|aion-y':   { price2024: 900000, length: 4410, width: 1870, height: 1645, wheelbase: 2750, weight: 1540, trunk: 380, topSpeed: '150 km/s' },
  'gac|emkoo':    { price2024: 1100000, length: 4432, width: 1875, height: 1610, wheelbase: 2650, weight: 1490, trunk: 420, topSpeed: '175 km/s' },
  'gac|gs3':      { price2024: 700000, length: 4350, width: 1825, height: 1685, wheelbase: 2560, weight: 1310, trunk: 370, topSpeed: '170 km/s' },
  'gac|gs4':      { price2024: 850000, length: 4545, width: 1856, height: 1700, wheelbase: 2680, weight: 1405, trunk: 450, topSpeed: '180 km/s' },
  'gac|gs5':      { price2024: 1000000, length: 4695, width: 1885, height: 1726, wheelbase: 2710, weight: 1520, trunk: 510, topSpeed: '185 km/s' },
  'gac|gs8':      { price2024: 1500000, length: 4980, width: 1950, height: 1780, wheelbase: 2920, weight: 1850, trunk: 570, topSpeed: '190 km/s' },

  // ══════════════════════════════════════════════════════════════
  // GEELY
  // ══════════════════════════════════════════════════════════════
  'geely|atlas':      { price2024: 900000, length: 4519, width: 1831, height: 1694, wheelbase: 2670, weight: 1500, trunk: 380, topSpeed: '180 km/s' },
  'geely|coolray':    { price2024: 850000, length: 4330, width: 1800, height: 1609, wheelbase: 2600, weight: 1345, trunk: 330, topSpeed: '185 km/s' },
  'geely|emgrand':    { price2024: 650000, length: 4638, width: 1820, height: 1460, wheelbase: 2650, weight: 1280, trunk: 475, topSpeed: '185 km/s' },
  'geely|geometry-c': { price2024: 1100000, length: 4432, width: 1833, height: 1560, wheelbase: 2700, weight: 1605, trunk: 400, topSpeed: '150 km/s' },
  'geely|monjaro':    { price2024: 1400000, length: 4770, width: 1895, height: 1689, wheelbase: 2777, weight: 1785, trunk: 520, topSpeed: '190 km/s' },
  'geely|okavango':   { price2024: 1100000, length: 4835, width: 1900, height: 1780, wheelbase: 2815, weight: 1730, trunk: 540, topSpeed: '180 km/s' },
  'geely|tugella':    { price2024: 1200000, length: 4605, width: 1878, height: 1643, wheelbase: 2700, weight: 1615, trunk: 415, topSpeed: '190 km/s' },

  // ══════════════════════════════════════════════════════════════
  // GENESIS
  // ══════════════════════════════════════════════════════════════
  'genesis|gv70':    { price2024: 3800000, length: 4715, width: 1910, height: 1630, wheelbase: 2875, weight: 1850, trunk: 503, topSpeed: '235 km/s' },
  'genesis|gv80':    { price2024: 5000000, length: 4945, width: 1975, height: 1715, wheelbase: 2955, weight: 2150, trunk: 727, topSpeed: '230 km/s' },
  'genesis|g80':     { price2024: 4200000, length: 4995, width: 1925, height: 1465, wheelbase: 3010, weight: 1900, trunk: 424, topSpeed: '250 km/s' },
  'genesis|g70':     { price2024: 3200000, price2020: 2200000, length: 4685, width: 1850, height: 1400, wheelbase: 2835, weight: 1650, trunk: 330, topSpeed: '250 km/s' },
  'genesis|g90':     { price2024: 7000000, length: 5275, width: 1930, height: 1470, wheelbase: 3160, weight: 2200, trunk: 424, topSpeed: '250 km/s' },
  'genesis|gv60':    { price2024: 3500000, length: 4515, width: 1890, height: 1580, wheelbase: 2900, weight: 2095, trunk: 432, topSpeed: '235 km/s' },
  'genesis|x':       { price2024: 5000000, length: 4830, width: 1920, height: 1400, wheelbase: 2900, weight: 1980, trunk: 380, topSpeed: '250 km/s' },

  // ══════════════════════════════════════════════════════════════
  // GWM
  // ══════════════════════════════════════════════════════════════
  'gwm|haval-h6':       { price2024: 1200000, length: 4653, width: 1886, height: 1730, wheelbase: 2738, weight: 1560, trunk: 600, topSpeed: '185 km/s' },
  'gwm|haval-jolion':   { price2024: 900000, length: 4472, width: 1841, height: 1619, wheelbase: 2700, weight: 1370, trunk: 450, topSpeed: '180 km/s' },
  'gwm|ora-03':         { price2024: 1000000, length: 4235, width: 1825, height: 1596, wheelbase: 2650, weight: 1570, trunk: 228, topSpeed: '155 km/s' },
  'gwm|ora-07':         { price2024: 1400000, length: 4871, width: 1862, height: 1500, wheelbase: 2870, weight: 1810, trunk: 340, topSpeed: '180 km/s' },
  'gwm|poer':           { price2024: 1300000, length: 5190, width: 1866, height: 1837, wheelbase: 3140, weight: 1930, trunk: null, topSpeed: '175 km/s' },
  'gwm|tank-300':       { price2024: 1600000, length: 4760, width: 1930, height: 1903, wheelbase: 2750, weight: 2160, trunk: 330, topSpeed: '175 km/s' },
  'gwm|tank-500':       { price2024: 2200000, length: 5070, width: 1934, height: 1905, wheelbase: 2850, weight: 2530, trunk: 380, topSpeed: '180 km/s' },
  'gwm|wey-coffee-01':  { price2024: 1500000, length: 4870, width: 1890, height: 1710, wheelbase: 2745, weight: 2150, trunk: 458, topSpeed: '180 km/s' },
  'gwm|wey-coffee-02':  { price2024: 1300000, length: 4510, width: 1870, height: 1680, wheelbase: 2745, weight: 1990, trunk: 380, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // HONDA
  // ══════════════════════════════════════════════════════════════
  'honda|civic':          { price2024: 1500000, price2020: 950000, price2015: 500000, length: 4549, width: 1800, height: 1415, wheelbase: 2733, weight: 1340, trunk: 410, topSpeed: '220 km/s' },
  'honda|jazz':           { price2024: 1100000, price2020: 700000, price2015: 400000, length: 4044, width: 1694, height: 1526, wheelbase: 2519, weight: 1130, trunk: 354, topSpeed: '185 km/s' },
  'honda|cr-v':           { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4694, width: 1855, height: 1680, wheelbase: 2700, weight: 1640, trunk: 561, topSpeed: '200 km/s' },
  'honda|hr-v':           { price2024: 1400000, price2020: 900000, length: 4340, width: 1790, height: 1580, wheelbase: 2610, weight: 1350, trunk: 319, topSpeed: '190 km/s' },
  'honda|accord':         { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4890, width: 1862, height: 1450, wheelbase: 2830, weight: 1520, trunk: 473, topSpeed: '215 km/s' },
  'honda|city':           { price2024: 950000, price2020: 620000, price2015: 350000, length: 4553, width: 1748, height: 1467, wheelbase: 2600, weight: 1200, trunk: 506, topSpeed: '190 km/s' },
  'honda|civic-hatchback': { price2024: 1550000, price2020: 980000, price2015: 520000, length: 4550, width: 1800, height: 1408, wheelbase: 2733, weight: 1355, trunk: 404, topSpeed: '220 km/s' },
  'honda|civic-sedan':    { price2024: 1500000, price2020: 950000, price2015: 500000, length: 4674, width: 1800, height: 1415, wheelbase: 2733, weight: 1345, trunk: 519, topSpeed: '220 km/s' },
  'honda|civic-type-r':   { price2024: 3500000, price2020: 2500000, length: 4593, width: 1890, height: 1405, wheelbase: 2733, weight: 1430, trunk: 404, topSpeed: '275 km/s' },
  'honda|cr-z':           { price2024: 700000, price2020: 500000, price2015: 300000, length: 4080, width: 1740, height: 1394, wheelbase: 2435, weight: 1130, trunk: 225, topSpeed: '200 km/s' },
  'honda|e-ny1':          { price2024: 2000000, length: 4387, width: 1790, height: 1584, wheelbase: 2610, weight: 1735, trunk: 361, topSpeed: '160 km/s' },
  'honda|honda-e':        { price2024: 1500000, length: 3894, width: 1752, height: 1512, wheelbase: 2530, weight: 1543, trunk: 171, topSpeed: '145 km/s' },
  'honda|nsx':            { price2024: 12000000, price2020: 8000000, length: 4490, width: 1940, height: 1215, wheelbase: 2630, weight: 1725, trunk: 110, topSpeed: '307 km/s' },
  'honda|s2000':          { price2024: 3000000, price2020: 2000000, price2015: 1200000, length: 4135, width: 1750, height: 1275, wheelbase: 2400, weight: 1260, trunk: 175, topSpeed: '241 km/s' },
  'honda|zr-v':           { price2024: 1600000, length: 4568, width: 1840, height: 1620, wheelbase: 2655, weight: 1490, trunk: 380, topSpeed: '195 km/s' },

  // ══════════════════════════════════════════════════════════════
  // HYUNDAI
  // ══════════════════════════════════════════════════════════════
  'hyundai|i10':         { price2024: 700000, price2020: 420000, length: 3670, width: 1680, height: 1500, wheelbase: 2425, weight: 960, trunk: 252, topSpeed: '172 km/s' },
  'hyundai|i20':         { price2024: 950000, price2020: 600000, price2015: 350000, length: 4040, width: 1775, height: 1450, wheelbase: 2580, weight: 1100, trunk: 352, topSpeed: '190 km/s' },
  'hyundai|bayon':       { price2024: 1100000, price2020: 750000, length: 4180, width: 1775, height: 1490, wheelbase: 2580, weight: 1185, trunk: 411, topSpeed: '185 km/s' },
  'hyundai|kona':        { price2024: 1400000, price2020: 950000, length: 4355, width: 1825, height: 1575, wheelbase: 2660, weight: 1380, trunk: 466, topSpeed: '195 km/s' },
  'hyundai|tucson':      { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4500, width: 1865, height: 1650, wheelbase: 2680, weight: 1540, trunk: 546, topSpeed: '205 km/s' },
  'hyundai|elantra':     { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4650, width: 1825, height: 1400, wheelbase: 2720, weight: 1350, trunk: 474, topSpeed: '210 km/s' },
  'hyundai|accent':      { price2024: 600000, price2020: 400000, price2015: 230000, length: 4440, width: 1729, height: 1470, wheelbase: 2600, weight: 1170, trunk: 480, topSpeed: '190 km/s' },
  'hyundai|i20-n':       { price2024: 1600000, price2020: 1100000, length: 4075, width: 1790, height: 1440, wheelbase: 2580, weight: 1240, trunk: 352, topSpeed: '230 km/s' },
  'hyundai|i30':         { price2024: 1250000, price2020: 800000, price2015: 450000, length: 4340, width: 1795, height: 1455, wheelbase: 2650, weight: 1310, trunk: 395, topSpeed: '210 km/s' },
  'hyundai|i30-fastback': { price2024: 1350000, price2020: 850000, length: 4455, width: 1795, height: 1420, wheelbase: 2650, weight: 1315, trunk: 450, topSpeed: '215 km/s' },
  'hyundai|i30-n':       { price2024: 2200000, price2020: 1500000, length: 4385, width: 1825, height: 1440, wheelbase: 2650, weight: 1450, trunk: 395, topSpeed: '250 km/s' },
  'hyundai|i30-wagon':   { price2024: 1300000, price2020: 830000, price2015: 470000, length: 4585, width: 1795, height: 1465, wheelbase: 2650, weight: 1350, trunk: 602, topSpeed: '208 km/s' },
  'hyundai|ioniq-5':     { price2024: 2500000, length: 4635, width: 1890, height: 1605, wheelbase: 3000, weight: 1870, trunk: 527, topSpeed: '185 km/s' },
  'hyundai|ioniq-6':     { price2024: 2800000, length: 4855, width: 1880, height: 1495, wheelbase: 2950, weight: 1940, trunk: 401, topSpeed: '185 km/s' },
  'hyundai|kona-electric': { price2024: 1800000, length: 4355, width: 1825, height: 1575, wheelbase: 2660, weight: 1740, trunk: 332, topSpeed: '167 km/s' },
  'hyundai|n-vision-74': { price2024: 5000000, length: 4905, width: 1995, height: 1330, wheelbase: 2905, weight: 2100, trunk: 350, topSpeed: '250 km/s' },
  'hyundai|nexo':        { price2024: 3000000, length: 4670, width: 1860, height: 1630, wheelbase: 2790, weight: 1889, trunk: 461, topSpeed: '179 km/s' },
  'hyundai|palisade':    { price2024: 3200000, price2020: 2200000, length: 4980, width: 1975, height: 1750, wheelbase: 2900, weight: 2015, trunk: 704, topSpeed: '210 km/s' },
  'hyundai|santa-fe':    { price2024: 2500000, price2020: 1600000, price2015: 850000, length: 4830, width: 1900, height: 1720, wheelbase: 2815, weight: 1770, trunk: 634, topSpeed: '210 km/s' },
  'hyundai|staria':      { price2024: 2800000, price2020: 1900000, length: 5253, width: 1997, height: 1990, wheelbase: 3273, weight: 2190, trunk: 830, topSpeed: '185 km/s' },
  'hyundai|veloster':    { price2024: 1000000, price2020: 700000, price2015: 400000, length: 4230, width: 1800, height: 1400, wheelbase: 2650, weight: 1265, trunk: 303, topSpeed: '210 km/s' },

  // ══════════════════════════════════════════════════════════════
  // INFINITI
  // ══════════════════════════════════════════════════════════════
  'infiniti|q30':    { price2024: 1200000, price2020: 800000, length: 4425, width: 1815, height: 1495, wheelbase: 2700, weight: 1475, trunk: 430, topSpeed: '220 km/s' },
  'infiniti|q50':    { price2024: 2500000, price2020: 1700000, price2015: 950000, length: 4800, width: 1820, height: 1440, wheelbase: 2850, weight: 1670, trunk: 500, topSpeed: '250 km/s' },
  'infiniti|q60':    { price2024: 3000000, price2020: 2000000, length: 4683, width: 1850, height: 1370, wheelbase: 2850, weight: 1710, trunk: 262, topSpeed: '250 km/s' },
  'infiniti|q70':    { price2024: 2000000, price2020: 1400000, price2015: 800000, length: 4945, width: 1845, height: 1500, wheelbase: 2900, weight: 1740, trunk: 450, topSpeed: '250 km/s' },
  'infiniti|qx30':   { price2024: 1400000, price2020: 950000, length: 4425, width: 1815, height: 1530, wheelbase: 2700, weight: 1500, trunk: 430, topSpeed: '215 km/s' },
  'infiniti|qx50':   { price2024: 2800000, price2020: 1800000, length: 4693, width: 1903, height: 1679, wheelbase: 2800, weight: 1730, trunk: 565, topSpeed: '230 km/s' },
  'infiniti|qx55':   { price2024: 3200000, price2020: 2100000, length: 4718, width: 1903, height: 1625, wheelbase: 2800, weight: 1750, trunk: 543, topSpeed: '230 km/s' },
  'infiniti|qx60':   { price2024: 3800000, price2020: 2500000, price2015: 1400000, length: 5035, width: 1961, height: 1770, wheelbase: 2900, weight: 2014, trunk: 630, topSpeed: '210 km/s' },
  'infiniti|qx70':   { price2024: 2200000, price2020: 1500000, price2015: 850000, length: 4645, width: 1928, height: 1660, wheelbase: 2885, weight: 1940, trunk: 410, topSpeed: '240 km/s' },
  'infiniti|qx80':   { price2024: 5000000, price2020: 3500000, price2015: 1800000, length: 5340, width: 2030, height: 1925, wheelbase: 3075, weight: 2670, trunk: 470, topSpeed: '210 km/s' },

  // ══════════════════════════════════════════════════════════════
  // ISUZU
  // ══════════════════════════════════════════════════════════════
  'isuzu|d-max':   { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 5265, width: 1870, height: 1790, wheelbase: 3125, weight: 1940, trunk: null, topSpeed: '180 km/s' },
  'isuzu|mu-x':    { price2024: 2200000, price2020: 1500000, length: 4850, width: 1870, height: 1840, wheelbase: 2855, weight: 2050, trunk: 690, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // IVECO
  // ══════════════════════════════════════════════════════════════
  'iveco|daily':   { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 5957, width: 2010, height: 2715, wheelbase: 3520, weight: 2300, trunk: 7300, topSpeed: '146 km/s' },

  // ══════════════════════════════════════════════════════════════
  // JAC
  // ══════════════════════════════════════════════════════════════
  'jac|e-js1':   { price2024: 700000, length: 3620, width: 1610, height: 1570, wheelbase: 2390, weight: 1110, trunk: 230, topSpeed: '130 km/s' },
  'jac|iev7s':   { price2024: 800000, length: 4135, width: 1750, height: 1560, wheelbase: 2490, weight: 1550, trunk: 340, topSpeed: '130 km/s' },
  'jac|j7':      { price2024: 850000, length: 4770, width: 1820, height: 1475, wheelbase: 2760, weight: 1400, trunk: 480, topSpeed: '190 km/s' },
  'jac|js2':     { price2024: 650000, length: 4135, width: 1750, height: 1560, wheelbase: 2490, weight: 1220, trunk: 340, topSpeed: '170 km/s' },
  'jac|js3':     { price2024: 750000, length: 4270, width: 1770, height: 1635, wheelbase: 2590, weight: 1290, trunk: 380, topSpeed: '175 km/s' },
  'jac|js4':     { price2024: 850000, length: 4405, width: 1800, height: 1651, wheelbase: 2620, weight: 1370, trunk: 430, topSpeed: '180 km/s' },
  'jac|js6':     { price2024: 1100000, length: 4776, width: 1900, height: 1760, wheelbase: 2800, weight: 1650, trunk: 565, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // JAGUAR
  // ══════════════════════════════════════════════════════════════
  'jaguar|f-pace':            { price2024: 4500000, price2020: 2800000, length: 4747, width: 2175, height: 1652, wheelbase: 2874, weight: 1960, trunk: 619, topSpeed: '240 km/s' },
  'jaguar|e-pace':            { price2024: 3200000, price2020: 2000000, length: 4395, width: 2043, height: 1649, wheelbase: 2681, weight: 1780, trunk: 577, topSpeed: '225 km/s' },
  'jaguar|f-type-convertible': { price2024: 6000000, price2020: 4000000, price2015: 2300000, length: 4470, width: 1923, height: 1313, wheelbase: 2622, weight: 1650, trunk: 196, topSpeed: '275 km/s' },
  'jaguar|f-type-coupe':      { price2024: 5500000, price2020: 3700000, price2015: 2100000, length: 4470, width: 1923, height: 1311, wheelbase: 2622, weight: 1580, trunk: 310, topSpeed: '285 km/s' },
  'jaguar|i-pace':            { price2024: 4800000, price2020: 3200000, length: 4682, width: 2139, height: 1565, wheelbase: 2990, weight: 2208, trunk: 505, topSpeed: '200 km/s' },
  'jaguar|xe':                { price2024: 2500000, price2020: 1700000, price2015: 950000, length: 4672, width: 2082, height: 1416, wheelbase: 2835, weight: 1545, trunk: 455, topSpeed: '250 km/s' },
  'jaguar|xf':                { price2024: 3200000, price2020: 2100000, price2015: 1200000, length: 4954, width: 2091, height: 1457, wheelbase: 2960, weight: 1650, trunk: 540, topSpeed: '250 km/s' },
  'jaguar|xf-sportbrake':     { price2024: 3500000, price2020: 2300000, price2015: 1350000, length: 4966, width: 2091, height: 1504, wheelbase: 2960, weight: 1720, trunk: 565, topSpeed: '250 km/s' },
  'jaguar|xj':                { price2024: 3000000, price2020: 2000000, price2015: 1100000, length: 5122, width: 2096, height: 1457, wheelbase: 3030, weight: 1760, trunk: 520, topSpeed: '250 km/s' },

  // ══════════════════════════════════════════════════════════════
  // JEEP
  // ══════════════════════════════════════════════════════════════
  'jeep|renegade':            { price2024: 1500000, price2020: 950000, length: 4236, width: 1805, height: 1667, wheelbase: 2570, weight: 1410, trunk: 351, topSpeed: '195 km/s' },
  'jeep|compass':             { price2024: 1800000, price2020: 1150000, length: 4395, width: 1818, height: 1640, wheelbase: 2636, weight: 1510, trunk: 438, topSpeed: '200 km/s' },
  'jeep|grand-cherokee':      { price2024: 4500000, price2020: 2800000, price2015: 1500000, length: 4914, width: 1979, height: 1795, wheelbase: 2964, weight: 2160, trunk: 1050, topSpeed: '210 km/s' },
  'jeep|avenger':             { price2024: 1600000, length: 4084, width: 1776, height: 1528, wheelbase: 2561, weight: 1415, trunk: 380, topSpeed: '200 km/s' },
  'jeep|cherokee':            { price2024: 2500000, price2020: 1600000, price2015: 850000, length: 4624, width: 1859, height: 1730, wheelbase: 2717, weight: 1760, trunk: 570, topSpeed: '195 km/s' },
  'jeep|commander':           { price2024: 2800000, length: 4769, width: 1859, height: 1682, wheelbase: 2782, weight: 1750, trunk: 661, topSpeed: '195 km/s' },
  'jeep|gladiator':           { price2024: 4000000, price2020: 2800000, length: 5591, width: 1894, height: 1848, wheelbase: 3488, weight: 2230, trunk: null, topSpeed: '175 km/s' },
  'jeep|grand-cherokee-l':    { price2024: 5000000, price2020: 3200000, length: 5204, width: 1979, height: 1795, wheelbase: 3091, weight: 2240, trunk: 1050, topSpeed: '205 km/s' },
  'jeep|wrangler':            { price2024: 3500000, price2020: 2500000, price2015: 1300000, length: 4334, width: 1894, height: 1848, wheelbase: 2459, weight: 1950, trunk: 544, topSpeed: '177 km/s' },
  'jeep|wrangler-unlimited':  { price2024: 3800000, price2020: 2700000, price2015: 1400000, length: 4882, width: 1894, height: 1848, wheelbase: 3008, weight: 2020, trunk: 548, topSpeed: '177 km/s' },

  // ══════════════════════════════════════════════════════════════
  // KIA
  // ══════════════════════════════════════════════════════════════
  'kia|picanto':         { price2024: 650000, price2020: 400000, price2015: 250000, length: 3595, width: 1595, height: 1485, wheelbase: 2400, weight: 940, trunk: 255, topSpeed: '167 km/s' },
  'kia|stonic':          { price2024: 1100000, price2020: 700000, length: 4140, width: 1760, height: 1520, wheelbase: 2580, weight: 1200, trunk: 352, topSpeed: '185 km/s' },
  'kia|ceed':            { price2024: 1250000, price2020: 800000, length: 4310, width: 1800, height: 1447, wheelbase: 2650, weight: 1305, trunk: 395, topSpeed: '210 km/s' },
  'kia|sportage':        { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4515, width: 1865, height: 1650, wheelbase: 2680, weight: 1590, trunk: 543, topSpeed: '205 km/s' },
  'kia|sorento':         { price2024: 2600000, price2020: 1600000, price2015: 850000, length: 4810, width: 1900, height: 1700, wheelbase: 2815, weight: 1885, trunk: 821, topSpeed: '210 km/s' },
  'kia|carnival':        { price2024: 2800000, price2020: 1800000, length: 5155, width: 1995, height: 1740, wheelbase: 3090, weight: 2040, trunk: 627, topSpeed: '200 km/s' },
  'kia|ceed-sportswagon': { price2024: 1350000, price2020: 850000, length: 4600, width: 1800, height: 1465, wheelbase: 2650, weight: 1360, trunk: 625, topSpeed: '208 km/s' },
  'kia|cerato':          { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4640, width: 1800, height: 1435, wheelbase: 2700, weight: 1290, trunk: 502, topSpeed: '205 km/s' },
  'kia|ev6':             { price2024: 2500000, length: 4680, width: 1880, height: 1550, wheelbase: 2900, weight: 1935, trunk: 490, topSpeed: '185 km/s' },
  'kia|ev9':             { price2024: 4000000, length: 5010, width: 1980, height: 1755, wheelbase: 3100, weight: 2420, trunk: 333, topSpeed: '185 km/s' },
  'kia|k5':              { price2024: 1600000, price2020: 1100000, length: 4905, width: 1860, height: 1445, wheelbase: 2850, weight: 1470, trunk: 510, topSpeed: '215 km/s' },
  'kia|k8':              { price2024: 2500000, length: 5015, width: 1890, height: 1460, wheelbase: 2895, weight: 1650, trunk: 521, topSpeed: '230 km/s' },
  'kia|niro':            { price2024: 1500000, price2020: 1000000, length: 4420, width: 1825, height: 1570, wheelbase: 2720, weight: 1400, trunk: 451, topSpeed: '190 km/s' },
  'kia|niro-ev':         { price2024: 1800000, length: 4420, width: 1825, height: 1570, wheelbase: 2720, weight: 1715, trunk: 475, topSpeed: '167 km/s' },
  'kia|niro-hev':        { price2024: 1500000, length: 4420, width: 1825, height: 1570, wheelbase: 2720, weight: 1420, trunk: 451, topSpeed: '185 km/s' },
  'kia|optima':          { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4855, width: 1860, height: 1465, wheelbase: 2805, weight: 1440, trunk: 510, topSpeed: '215 km/s' },
  'kia|proceed':         { price2024: 1400000, price2020: 900000, length: 4605, width: 1800, height: 1422, wheelbase: 2650, weight: 1370, trunk: 594, topSpeed: '215 km/s' },
  'kia|rio':             { price2024: 850000, price2020: 550000, price2015: 300000, length: 4065, width: 1725, height: 1450, wheelbase: 2580, weight: 1080, trunk: 325, topSpeed: '185 km/s' },
  'kia|seltos':          { price2024: 1300000, price2020: 900000, length: 4370, width: 1800, height: 1615, wheelbase: 2630, weight: 1350, trunk: 433, topSpeed: '185 km/s' },
  'kia|soul':            { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4195, width: 1800, height: 1600, wheelbase: 2600, weight: 1280, trunk: 315, topSpeed: '185 km/s' },
  'kia|stinger':         { price2024: 3000000, price2020: 2000000, length: 4830, width: 1870, height: 1400, wheelbase: 2905, weight: 1740, trunk: 406, topSpeed: '270 km/s' },
  'kia|venga':           { price2024: 400000, price2020: 280000, price2015: 170000, length: 4068, width: 1765, height: 1600, wheelbase: 2615, weight: 1185, trunk: 440, topSpeed: '185 km/s' },
  'kia|xceed':           { price2024: 1400000, price2020: 950000, length: 4395, width: 1826, height: 1505, wheelbase: 2650, weight: 1380, trunk: 426, topSpeed: '205 km/s' },

  // ══════════════════════════════════════════════════════════════
  // LADA
  // ══════════════════════════════════════════════════════════════
  'lada|granta':   { price2024: 300000, price2020: 200000, length: 4260, width: 1700, height: 1500, wheelbase: 2476, weight: 1060, trunk: 480, topSpeed: '172 km/s' },
  'lada|kalina':   { price2024: 200000, price2020: 140000, price2015: 80000, length: 3893, width: 1700, height: 1500, wheelbase: 2476, weight: 1080, trunk: 235, topSpeed: '165 km/s' },
  'lada|niva':     { price2024: 500000, price2020: 350000, price2015: 200000, length: 3740, width: 1680, height: 1640, wheelbase: 2200, weight: 1210, trunk: 265, topSpeed: '137 km/s' },
  'lada|priora':   { price2024: 200000, price2020: 150000, price2015: 85000, length: 4350, width: 1680, height: 1420, wheelbase: 2492, weight: 1090, trunk: 430, topSpeed: '183 km/s' },
  'lada|samara':   { price2024: 120000, price2020: 80000, price2015: 50000, length: 4006, width: 1650, height: 1402, wheelbase: 2460, weight: 1010, trunk: 300, topSpeed: '155 km/s' },
  'lada|vesta':    { price2024: 500000, price2020: 350000, length: 4410, width: 1764, height: 1497, wheelbase: 2635, weight: 1230, trunk: 480, topSpeed: '182 km/s' },
  'lada|xray':     { price2024: 450000, price2020: 320000, length: 4165, width: 1764, height: 1570, wheelbase: 2592, weight: 1220, trunk: 361, topSpeed: '178 km/s' },

  // ══════════════════════════════════════════════════════════════
  // LAMBORGHINI
  // ══════════════════════════════════════════════════════════════
  'lamborghini|aventador':      { price2024: 25000000, price2020: 18000000, price2015: 12000000, length: 4797, width: 2030, height: 1136, wheelbase: 2700, weight: 1575, trunk: 110, topSpeed: '350 km/s' },
  'lamborghini|gallardo':       { price2024: 8000000, price2020: 5500000, price2015: 3500000, length: 4345, width: 1900, height: 1165, wheelbase: 2560, weight: 1430, trunk: 110, topSpeed: '325 km/s' },
  'lamborghini|huracan':        { price2024: 18000000, price2020: 13000000, length: 4520, width: 1933, height: 1165, wheelbase: 2620, weight: 1422, trunk: 100, topSpeed: '325 km/s' },
  'lamborghini|huracan-spyder': { price2024: 20000000, price2020: 15000000, length: 4520, width: 1933, height: 1180, wheelbase: 2620, weight: 1509, trunk: 100, topSpeed: '320 km/s' },
  'lamborghini|murcielago':     { price2024: 12000000, price2020: 8000000, price2015: 5500000, length: 4580, width: 2045, height: 1135, wheelbase: 2665, weight: 1650, trunk: 100, topSpeed: '330 km/s' },
  'lamborghini|revuelto':       { price2024: 35000000, length: 4947, width: 2033, height: 1160, wheelbase: 2779, weight: 1772, trunk: 150, topSpeed: '350 km/s' },
  'lamborghini|temerario':      { price2024: 22000000, length: 4558, width: 1950, height: 1167, wheelbase: 2650, weight: 1550, trunk: 130, topSpeed: '340 km/s' },
  'lamborghini|urus':           { price2024: 18000000, price2020: 12000000, length: 5112, width: 2016, height: 1638, wheelbase: 3003, weight: 2200, trunk: 616, topSpeed: '305 km/s' },
  'lamborghini|urus-se':        { price2024: 20000000, length: 5112, width: 2016, height: 1638, wheelbase: 3003, weight: 2350, trunk: 616, topSpeed: '312 km/s' },

  // ══════════════════════════════════════════════════════════════
  // LANCIA
  // ══════════════════════════════════════════════════════════════
  'lancia|delta':   { price2024: 400000, price2020: 280000, price2015: 170000, length: 4520, width: 1800, height: 1500, wheelbase: 2700, weight: 1405, trunk: 380, topSpeed: '200 km/s' },
  'lancia|musa':    { price2024: 200000, price2020: 140000, price2015: 85000, length: 3970, width: 1718, height: 1590, wheelbase: 2391, weight: 1120, trunk: 365, topSpeed: '170 km/s' },
  'lancia|thema':   { price2024: 500000, price2020: 350000, price2015: 200000, length: 5070, width: 1877, height: 1500, wheelbase: 3052, weight: 1780, trunk: 467, topSpeed: '230 km/s' },
  'lancia|ypsilon':  { price2024: 300000, price2020: 200000, price2015: 120000, length: 3843, width: 1676, height: 1522, wheelbase: 2392, weight: 1005, trunk: 245, topSpeed: '170 km/s' },

  // ══════════════════════════════════════════════════════════════
  // LAND ROVER
  // ══════════════════════════════════════════════════════════════
  'land-rover|range-rover-evoque': { price2024: 3800000, price2020: 2400000, length: 4371, width: 1904, height: 1649, wheelbase: 2681, weight: 1795, trunk: 591, topSpeed: '217 km/s' },
  'land-rover|range-rover-sport':  { price2024: 7000000, price2020: 4500000, price2015: 2500000, length: 4946, width: 2047, height: 1820, wheelbase: 2997, weight: 2310, trunk: 835, topSpeed: '242 km/s' },
  'land-rover|range-rover':        { price2024: 10000000, price2020: 6000000, price2015: 3000000, length: 5052, width: 2047, height: 1870, wheelbase: 3100, weight: 2560, trunk: 725, topSpeed: '250 km/s' },
  'land-rover|defender':           { price2024: 5500000, price2020: 3500000, length: 4758, width: 2008, height: 1967, wheelbase: 3022, weight: 2240, trunk: 786, topSpeed: '191 km/s' },
  'land-rover|defender-90':        { price2024: 5000000, price2020: 3200000, length: 4323, width: 2008, height: 1969, wheelbase: 2587, weight: 2150, trunk: 297, topSpeed: '191 km/s' },
  'land-rover|defender-110':       { price2024: 5500000, price2020: 3500000, length: 4758, width: 2008, height: 1967, wheelbase: 3022, weight: 2240, trunk: 786, topSpeed: '191 km/s' },
  'land-rover|defender-130':       { price2024: 6000000, price2020: 3800000, length: 5358, width: 2008, height: 1970, wheelbase: 3022, weight: 2400, trunk: 1329, topSpeed: '191 km/s' },
  'land-rover|discovery':          { price2024: 5500000, price2020: 3500000, price2015: 1800000, length: 4956, width: 2073, height: 1888, wheelbase: 2923, weight: 2360, trunk: 986, topSpeed: '222 km/s' },
  'land-rover|discovery-sport':    { price2024: 3500000, price2020: 2200000, length: 4597, width: 2069, height: 1727, wheelbase: 2741, weight: 1890, trunk: 602, topSpeed: '210 km/s' },
  'land-rover|freelander':         { price2024: 900000, price2020: 600000, price2015: 350000, length: 4500, width: 2195, height: 1740, wheelbase: 2660, weight: 1680, trunk: 420, topSpeed: '200 km/s' },
  'land-rover|range-rover-velar':  { price2024: 5000000, price2020: 3200000, length: 4803, width: 2145, height: 1665, wheelbase: 2874, weight: 1960, trunk: 673, topSpeed: '241 km/s' },

  // ══════════════════════════════════════════════════════════════
  // LEXUS
  // ══════════════════════════════════════════════════════════════
  'lexus|nx':    { price2024: 3500000, price2020: 2200000, length: 4660, width: 1865, height: 1660, wheelbase: 2690, weight: 1790, trunk: 520, topSpeed: '200 km/s' },
  'lexus|rx':    { price2024: 4500000, price2020: 3000000, price2015: 1600000, length: 4890, width: 1920, height: 1695, wheelbase: 2850, weight: 1930, trunk: 612, topSpeed: '200 km/s' },
  'lexus|ux':    { price2024: 2800000, price2020: 1800000, length: 4495, width: 1840, height: 1545, wheelbase: 2640, weight: 1540, trunk: 320, topSpeed: '177 km/s' },
  'lexus|es':    { price2024: 3200000, price2020: 2000000, length: 4975, width: 1865, height: 1445, wheelbase: 2870, weight: 1680, trunk: 454, topSpeed: '180 km/s' },
  'lexus|ct':    { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 4350, width: 1765, height: 1440, wheelbase: 2600, weight: 1380, trunk: 375, topSpeed: '180 km/s' },
  'lexus|gs':    { price2024: 2500000, price2020: 1600000, price2015: 900000, length: 4880, width: 1840, height: 1455, wheelbase: 2850, weight: 1720, trunk: 480, topSpeed: '250 km/s' },
  'lexus|gx':    { price2024: 5500000, price2020: 3500000, length: 4890, width: 1980, height: 1870, wheelbase: 2850, weight: 2450, trunk: 672, topSpeed: '200 km/s' },
  'lexus|is':    { price2024: 2800000, price2020: 1800000, price2015: 1000000, length: 4710, width: 1840, height: 1435, wheelbase: 2800, weight: 1590, trunk: 480, topSpeed: '230 km/s' },
  'lexus|lbx':   { price2024: 2500000, length: 4190, width: 1825, height: 1545, wheelbase: 2580, weight: 1430, trunk: 340, topSpeed: '175 km/s' },
  'lexus|lc':    { price2024: 7000000, price2020: 4500000, length: 4770, width: 1920, height: 1345, wheelbase: 2870, weight: 1935, trunk: 197, topSpeed: '270 km/s' },
  'lexus|ls':    { price2024: 6500000, price2020: 4000000, price2015: 2000000, length: 5235, width: 1900, height: 1460, wheelbase: 3125, weight: 2280, trunk: 480, topSpeed: '250 km/s' },
  'lexus|lx':    { price2024: 8000000, price2020: 5000000, price2015: 2800000, length: 5100, width: 1990, height: 1885, wheelbase: 2850, weight: 2620, trunk: 690, topSpeed: '210 km/s' },
  'lexus|rc':    { price2024: 3500000, price2020: 2200000, length: 4695, width: 1840, height: 1395, wheelbase: 2730, weight: 1710, trunk: 340, topSpeed: '230 km/s' },
  'lexus|rz':    { price2024: 3800000, length: 4805, width: 1895, height: 1635, wheelbase: 2850, weight: 2090, trunk: 522, topSpeed: '160 km/s' },

  // ══════════════════════════════════════════════════════════════
  // LINCOLN
  // ══════════════════════════════════════════════════════════════
  'lincoln|corsair':      { price2024: 3500000, length: 4606, width: 1887, height: 1626, wheelbase: 2711, weight: 1775, trunk: 699, topSpeed: '215 km/s' },
  'lincoln|nautilus':     { price2024: 4500000, price2020: 2800000, length: 4849, width: 1936, height: 1717, wheelbase: 2849, weight: 1930, trunk: 963, topSpeed: '210 km/s' },
  'lincoln|aviator':      { price2024: 5500000, price2020: 3500000, length: 5080, width: 2005, height: 1785, wheelbase: 3025, weight: 2280, trunk: 695, topSpeed: '210 km/s' },
  'lincoln|continental':  { price2024: 3500000, price2020: 2400000, price2015: 1300000, length: 5116, width: 1911, height: 1484, wheelbase: 2994, weight: 1910, trunk: 460, topSpeed: '210 km/s' },
  'lincoln|navigator':    { price2024: 7000000, price2020: 4500000, price2015: 2500000, length: 5340, width: 2073, height: 1949, wheelbase: 3112, weight: 2710, trunk: 590, topSpeed: '190 km/s' },

  // ══════════════════════════════════════════════════════════════
  // LOTUS
  // ══════════════════════════════════════════════════════════════
  'lotus|eletre':  { price2024: 6000000, length: 5103, width: 2131, height: 1630, wheelbase: 3019, weight: 2490, trunk: 688, topSpeed: '265 km/s' },
  'lotus|elise':   { price2024: 4000000, price2020: 2800000, price2015: 1600000, length: 3785, width: 1727, height: 1117, wheelbase: 2300, weight: 860, trunk: 112, topSpeed: '233 km/s' },
  'lotus|emira':   { price2024: 5000000, length: 4412, width: 1895, height: 1225, wheelbase: 2575, weight: 1405, trunk: 151, topSpeed: '290 km/s' },
  'lotus|evija':   { price2024: 60000000, length: 4459, width: 2000, height: 1122, wheelbase: 2650, weight: 1680, trunk: 0, topSpeed: '340 km/s' },
  'lotus|evora':   { price2024: 5000000, price2020: 3500000, price2015: 2000000, length: 4342, width: 1848, height: 1223, wheelbase: 2575, weight: 1382, trunk: 160, topSpeed: '280 km/s' },
  'lotus|exige':   { price2024: 4500000, price2020: 3200000, price2015: 1800000, length: 4080, width: 1800, height: 1138, wheelbase: 2300, weight: 1080, trunk: 112, topSpeed: '274 km/s' },

  // ══════════════════════════════════════════════════════════════
  // LUCID
  // ══════════════════════════════════════════════════════════════
  'lucid|air':               { price2024: 5000000, length: 4975, width: 1939, height: 1410, wheelbase: 2960, weight: 2100, trunk: 456, topSpeed: '270 km/s' },
  'lucid|air-grand-touring': { price2024: 7000000, length: 4975, width: 1939, height: 1410, wheelbase: 2960, weight: 2250, trunk: 456, topSpeed: '270 km/s' },
  'lucid|gravity':           { price2024: 6000000, length: 5034, width: 2007, height: 1624, wheelbase: 3030, weight: 2650, trunk: 700, topSpeed: '250 km/s' },

  // ══════════════════════════════════════════════════════════════
  // MASERATI
  // ══════════════════════════════════════════════════════════════
  'maserati|ghibli':       { price2024: 5500000, price2020: 3500000, length: 4971, width: 1945, height: 1461, wheelbase: 2998, weight: 1810, trunk: 500, topSpeed: '267 km/s' },
  'maserati|levante':      { price2024: 6500000, price2020: 4000000, length: 5003, width: 1981, height: 1693, wheelbase: 3004, weight: 2109, trunk: 580, topSpeed: '251 km/s' },
  'maserati|grancabrio':   { price2024: 12000000, length: 4960, width: 1957, height: 1353, wheelbase: 2930, weight: 1870, trunk: 151, topSpeed: '326 km/s' },
  'maserati|granturismo':  { price2024: 10000000, price2020: 6000000, length: 4960, width: 1957, height: 1353, wheelbase: 2930, weight: 1795, trunk: 310, topSpeed: '320 km/s' },
  'maserati|grecale':      { price2024: 5000000, length: 4846, width: 1948, height: 1670, wheelbase: 2901, weight: 1870, trunk: 535, topSpeed: '285 km/s' },
  'maserati|mc20':         { price2024: 15000000, length: 4669, width: 1965, height: 1224, wheelbase: 2700, weight: 1475, trunk: 150, topSpeed: '325 km/s' },
  'maserati|mc20-cielo':   { price2024: 17000000, length: 4669, width: 1965, height: 1224, wheelbase: 2700, weight: 1540, trunk: 150, topSpeed: '320 km/s' },
  'maserati|quattroporte': { price2024: 8000000, price2020: 5000000, price2015: 2800000, length: 5262, width: 1948, height: 1481, wheelbase: 3171, weight: 1860, trunk: 530, topSpeed: '310 km/s' },

  // ══════════════════════════════════════════════════════════════
  // MAXUS
  // ══════════════════════════════════════════════════════════════
  'maxus|d90':       { price2024: 1600000, length: 5005, width: 1932, height: 1875, wheelbase: 2950, weight: 2150, trunk: 480, topSpeed: '185 km/s' },
  'maxus|deliver-9': { price2024: 1800000, length: 5940, width: 2032, height: 2530, wheelbase: 3366, weight: 2250, trunk: 9700, topSpeed: '130 km/s' },
  'maxus|euniq-6':   { price2024: 1400000, length: 4735, width: 1860, height: 1736, wheelbase: 2760, weight: 1830, trunk: 510, topSpeed: '160 km/s' },
  'maxus|euniq-7':   { price2024: 2200000, length: 5200, width: 2010, height: 1935, wheelbase: 3198, weight: 2600, trunk: 520, topSpeed: '160 km/s' },
  'maxus|mifa-9':    { price2024: 2500000, length: 5270, width: 2000, height: 1840, wheelbase: 3200, weight: 2640, trunk: 430, topSpeed: '180 km/s' },
  'maxus|t60':       { price2024: 1200000, length: 5360, width: 1905, height: 1830, wheelbase: 3155, weight: 1970, trunk: null, topSpeed: '170 km/s' },

  // ══════════════════════════════════════════════════════════════
  // MAZDA
  // ══════════════════════════════════════════════════════════════
  'mazda|3':           { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4459, width: 1797, height: 1435, wheelbase: 2725, weight: 1380, trunk: 358, topSpeed: '215 km/s' },
  'mazda|3-hatchback': { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4459, width: 1797, height: 1435, wheelbase: 2725, weight: 1380, trunk: 358, topSpeed: '215 km/s' },
  'mazda|3-sedan':     { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4662, width: 1797, height: 1445, wheelbase: 2725, weight: 1370, trunk: 444, topSpeed: '215 km/s' },
  'mazda|cx-3':        { price2024: 1200000, price2020: 800000, length: 4275, width: 1765, height: 1535, wheelbase: 2570, weight: 1280, trunk: 350, topSpeed: '195 km/s' },
  'mazda|cx-5':        { price2024: 1900000, price2020: 1250000, price2015: 680000, length: 4550, width: 1842, height: 1680, wheelbase: 2700, weight: 1580, trunk: 506, topSpeed: '205 km/s' },
  'mazda|cx-30':       { price2024: 1500000, price2020: 1000000, length: 4395, width: 1795, height: 1540, wheelbase: 2655, weight: 1380, trunk: 430, topSpeed: '200 km/s' },
  'mazda|6-wagon':     { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 4800, width: 1840, height: 1480, wheelbase: 2830, weight: 1530, trunk: 522, topSpeed: '220 km/s' },
  'mazda|cx-60':       { price2024: 2500000, length: 4740, width: 1890, height: 1685, wheelbase: 2870, weight: 1720, trunk: 570, topSpeed: '220 km/s' },
  'mazda|cx-80':       { price2024: 3000000, length: 4995, width: 1890, height: 1710, wheelbase: 3120, weight: 1900, trunk: 687, topSpeed: '220 km/s' },
  'mazda|cx-90':       { price2024: 3500000, length: 5105, width: 1890, height: 1710, wheelbase: 3120, weight: 2050, trunk: 752, topSpeed: '220 km/s' },
  'mazda|mazda2':      { price2024: 900000, price2020: 600000, price2015: 340000, length: 4065, width: 1695, height: 1495, wheelbase: 2570, weight: 1020, trunk: 280, topSpeed: '185 km/s' },
  'mazda|mazda3':      { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4459, width: 1797, height: 1435, wheelbase: 2725, weight: 1380, trunk: 358, topSpeed: '215 km/s' },
  'mazda|mazda6':      { price2024: 1600000, price2020: 1050000, price2015: 580000, length: 4865, width: 1840, height: 1450, wheelbase: 2830, weight: 1490, trunk: 474, topSpeed: '225 km/s' },
  'mazda|mx-30':       { price2024: 1600000, length: 4395, width: 1795, height: 1555, wheelbase: 2655, weight: 1654, trunk: 366, topSpeed: '140 km/s' },
  'mazda|mx-5':        { price2024: 2200000, price2020: 1500000, price2015: 850000, length: 3915, width: 1735, height: 1225, wheelbase: 2310, weight: 1050, trunk: 127, topSpeed: '219 km/s' },
};

module.exports = { VERIFIED_DATA_PART2 };
