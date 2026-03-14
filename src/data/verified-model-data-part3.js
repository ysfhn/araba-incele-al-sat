/**
 * Doğrulanmış Model Verileri — Part 3 (McLaren → Z)
 */

const VERIFIED_DATA_PART3 = {

  // ══════════════════════════════════════════════════════════════
  // McLAREN
  // ══════════════════════════════════════════════════════════════
  'mclaren|540c':   { price2024: 8000000, price2020: 5500000, length: 4530, width: 1913, height: 1202, wheelbase: 2670, weight: 1311, trunk: 144, topSpeed: '315 km/s' },
  'mclaren|570s':   { price2024: 10000000, price2020: 7000000, length: 4530, width: 1930, height: 1202, wheelbase: 2670, weight: 1313, trunk: 144, topSpeed: '328 km/s' },
  'mclaren|600lt':  { price2024: 12000000, price2020: 8000000, length: 4604, width: 1930, height: 1196, wheelbase: 2670, weight: 1247, trunk: 150, topSpeed: '328 km/s' },
  'mclaren|620r':   { price2024: 14000000, length: 4604, width: 1930, height: 1196, wheelbase: 2670, weight: 1282, trunk: 150, topSpeed: '322 km/s' },
  'mclaren|650s':   { price2024: 8000000, price2020: 5000000, price2015: 3000000, length: 4513, width: 1908, height: 1199, wheelbase: 2670, weight: 1330, trunk: 144, topSpeed: '333 km/s' },
  'mclaren|720s':   { price2024: 15000000, price2020: 10000000, length: 4543, width: 1930, height: 1196, wheelbase: 2670, weight: 1283, trunk: 210, topSpeed: '341 km/s' },
  'mclaren|750s':   { price2024: 18000000, length: 4569, width: 1930, height: 1196, wheelbase: 2670, weight: 1277, trunk: 210, topSpeed: '332 km/s' },
  'mclaren|765lt':  { price2024: 20000000, length: 4606, width: 1930, height: 1196, wheelbase: 2670, weight: 1229, trunk: 210, topSpeed: '330 km/s' },
  'mclaren|artura':  { price2024: 16000000, length: 4539, width: 1913, height: 1193, wheelbase: 2640, weight: 1395, trunk: 160, topSpeed: '330 km/s' },
  'mclaren|gt':      { price2024: 12000000, price2020: 8000000, length: 4683, width: 2095, height: 1213, wheelbase: 2675, weight: 1466, trunk: 420, topSpeed: '326 km/s' },
  'mclaren|p1':      { price2024: 50000000, price2020: 35000000, price2015: 25000000, length: 4588, width: 1946, height: 1188, wheelbase: 2670, weight: 1395, trunk: 120, topSpeed: '350 km/s' },
  'mclaren|senna':   { price2024: 40000000, price2020: 30000000, length: 4744, width: 1958, height: 1218, wheelbase: 2670, weight: 1198, trunk: 68, topSpeed: '340 km/s' },
  'mclaren|speedtail': { price2024: 55000000, length: 5137, width: 1884, height: 1120, wheelbase: 2700, weight: 1430, trunk: 150, topSpeed: '403 km/s' },

  // ══════════════════════════════════════════════════════════════
  // MERCEDES-BENZ
  // ══════════════════════════════════════════════════════════════
  'mercedes-benz|a-serisi':     { price2024: 1800000, price2020: 1200000, length: 4419, width: 1796, height: 1440, wheelbase: 2729, weight: 1375, trunk: 370, topSpeed: '225 km/s' },
  'mercedes-benz|c-serisi':     { price2024: 2500000, price2020: 1600000, price2015: 850000, length: 4751, width: 1820, height: 1437, wheelbase: 2865, weight: 1550, trunk: 455, topSpeed: '250 km/s' },
  'mercedes-benz|e-serisi':     { price2024: 3800000, price2020: 2500000, price2015: 1300000, length: 4949, width: 1880, height: 1468, wheelbase: 2961, weight: 1735, trunk: 540, topSpeed: '250 km/s' },
  'mercedes-benz|s-serisi':     { price2024: 7000000, price2020: 4500000, price2015: 2500000, length: 5179, width: 1921, height: 1503, wheelbase: 3106, weight: 2060, trunk: 550, topSpeed: '250 km/s' },
  'mercedes-benz|cla-serisi':   { price2024: 2200000, price2020: 1400000, length: 4688, width: 1830, height: 1439, wheelbase: 2729, weight: 1470, trunk: 460, topSpeed: '240 km/s' },
  'mercedes-benz|cls-serisi':   { price2024: 4000000, price2020: 2600000, price2015: 1400000, length: 4999, width: 1896, height: 1434, wheelbase: 2939, weight: 1775, trunk: 520, topSpeed: '250 km/s' },
  'mercedes-benz|gla-serisi':   { price2024: 2200000, price2020: 1400000, length: 4410, width: 1834, height: 1611, wheelbase: 2729, weight: 1485, trunk: 435, topSpeed: '220 km/s' },
  'mercedes-benz|glb-serisi':   { price2024: 2500000, price2020: 1600000, length: 4634, width: 1834, height: 1658, wheelbase: 2829, weight: 1580, trunk: 570, topSpeed: '215 km/s' },
  'mercedes-benz|glc-serisi':   { price2024: 3200000, price2020: 2000000, price2015: 1100000, length: 4716, width: 1890, height: 1639, wheelbase: 2888, weight: 1790, trunk: 600, topSpeed: '237 km/s' },
  'mercedes-benz|gle-serisi':   { price2024: 5000000, price2020: 3200000, price2015: 1700000, length: 4924, width: 2020, height: 1797, wheelbase: 2995, weight: 2170, trunk: 630, topSpeed: '240 km/s' },
  'mercedes-benz|gls-serisi':   { price2024: 7000000, price2020: 4500000, price2015: 2500000, length: 5207, width: 2030, height: 1823, wheelbase: 3135, weight: 2460, trunk: 890, topSpeed: '250 km/s' },
  'mercedes-benz|v-serisi':     { price2024: 3500000, price2020: 2200000, price2015: 1200000, length: 5140, width: 1928, height: 1880, wheelbase: 3200, weight: 2150, trunk: 1030, topSpeed: '195 km/s' },
  'mercedes-benz|eqa':          { price2024: 2500000, length: 4463, width: 1834, height: 1624, wheelbase: 2729, weight: 2040, trunk: 340, topSpeed: '160 km/s' },
  'mercedes-benz|eqb':          { price2024: 2800000, length: 4684, width: 1834, height: 1667, wheelbase: 2829, weight: 2130, trunk: 495, topSpeed: '160 km/s' },
  'mercedes-benz|eqc':          { price2024: 3500000, price2020: 2500000, length: 4762, width: 1884, height: 1624, wheelbase: 2873, weight: 2420, trunk: 500, topSpeed: '180 km/s' },
  'mercedes-benz|eqe':          { price2024: 4500000, length: 4946, width: 1961, height: 1512, wheelbase: 3120, weight: 2310, trunk: 430, topSpeed: '210 km/s' },
  'mercedes-benz|eqe-suv':      { price2024: 5000000, length: 4863, width: 1940, height: 1686, wheelbase: 3030, weight: 2530, trunk: 520, topSpeed: '210 km/s' },
  'mercedes-benz|eqs':          { price2024: 6000000, length: 5216, width: 1926, height: 1512, wheelbase: 3210, weight: 2480, trunk: 610, topSpeed: '210 km/s' },
  'mercedes-benz|eqs-suv':      { price2024: 6500000, length: 5125, width: 1959, height: 1718, wheelbase: 3210, weight: 2735, trunk: 565, topSpeed: '210 km/s' },
  'mercedes-benz|b-serisi':     { price2024: 1600000, price2020: 1000000, price2015: 550000, length: 4419, width: 1796, height: 1562, wheelbase: 2729, weight: 1395, trunk: 455, topSpeed: '215 km/s' },
  'mercedes-benz|g-serisi':     { price2024: 12000000, price2020: 7000000, price2015: 3500000, length: 4624, width: 1931, height: 1970, wheelbase: 2890, weight: 2560, trunk: 667, topSpeed: '210 km/s' },
  'mercedes-benz|glc-coupe':    { price2024: 3500000, price2020: 2200000, length: 4732, width: 1890, height: 1603, wheelbase: 2888, weight: 1810, trunk: 545, topSpeed: '240 km/s' },
  'mercedes-benz|gle-coupe':    { price2024: 5500000, price2020: 3500000, length: 4939, width: 2010, height: 1731, wheelbase: 2935, weight: 2200, trunk: 655, topSpeed: '250 km/s' },
  'mercedes-benz|sprinter':     { price2024: 2500000, price2020: 1600000, price2015: 850000, length: 5932, width: 1993, height: 2727, wheelbase: 3665, weight: 2250, trunk: 10500, topSpeed: '160 km/s' },
  'mercedes-benz|vito':         { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 5140, width: 1928, height: 1910, wheelbase: 3200, weight: 1920, trunk: 6000, topSpeed: '195 km/s' },
  'mercedes-benz|x-serisi':     { price2024: 2000000, price2020: 1300000, length: 5340, width: 1920, height: 1819, wheelbase: 3150, weight: 2180, trunk: null, topSpeed: '190 km/s' },
  'mercedes-benz|amg-gt':       { price2024: 10000000, price2020: 6000000, length: 4724, width: 1985, height: 1353, wheelbase: 2700, weight: 1710, trunk: 350, topSpeed: '310 km/s' },
  'mercedes-benz|amg-gt-coupe': { price2024: 8000000, price2020: 5000000, length: 4546, width: 1939, height: 1288, wheelbase: 2630, weight: 1615, trunk: 350, topSpeed: '318 km/s' },
  'mercedes-benz|c-serisi-estate': { price2024: 2700000, price2020: 1700000, length: 4751, width: 1820, height: 1455, wheelbase: 2865, weight: 1600, trunk: 490, topSpeed: '250 km/s' },
  'mercedes-benz|c-serisi-coupe':  { price2024: 2800000, price2020: 1800000, length: 4686, width: 1810, height: 1405, wheelbase: 2840, weight: 1520, trunk: 400, topSpeed: '250 km/s' },
  'mercedes-benz|e-serisi-coupe':  { price2024: 4200000, price2020: 2700000, length: 4850, width: 1860, height: 1430, wheelbase: 2873, weight: 1700, trunk: 425, topSpeed: '250 km/s' },
  'mercedes-benz|e-serisi-estate': { price2024: 4000000, price2020: 2600000, price2015: 1400000, length: 4995, width: 1880, height: 1468, wheelbase: 2961, weight: 1800, trunk: 615, topSpeed: '250 km/s' },
  'mercedes-benz|maybach-s-serisi': { price2024: 12000000, price2020: 7500000, length: 5469, width: 1921, height: 1510, wheelbase: 3396, weight: 2250, trunk: 530, topSpeed: '250 km/s' },
  'mercedes-benz|sl-serisi':       { price2024: 8000000, price2020: 5000000, price2015: 2800000, length: 4700, width: 1915, height: 1369, wheelbase: 2700, weight: 1760, trunk: 240, topSpeed: '295 km/s' },

  // ══════════════════════════════════════════════════════════════
  // MG
  // ══════════════════════════════════════════════════════════════
  'mg|4':       { price2024: 1100000, length: 4287, width: 1836, height: 1504, wheelbase: 2705, weight: 1655, trunk: 363, topSpeed: '160 km/s' },
  'mg|hs':      { price2024: 1000000, price2020: 700000, length: 4574, width: 1876, height: 1685, wheelbase: 2720, weight: 1500, trunk: 463, topSpeed: '190 km/s' },
  'mg|marvel-r': { price2024: 1400000, length: 4674, width: 1919, height: 1618, wheelbase: 2807, weight: 1920, trunk: 357, topSpeed: '200 km/s' },
  'mg|mg5':     { price2024: 1050000, length: 4600, width: 1818, height: 1543, wheelbase: 2700, weight: 1520, trunk: 479, topSpeed: '185 km/s' },
  'mg|zs':      { price2024: 850000, price2020: 600000, length: 4323, width: 1809, height: 1653, wheelbase: 2580, weight: 1280, trunk: 448, topSpeed: '175 km/s' },
  'mg|zs-ev':   { price2024: 1200000, length: 4323, width: 1809, height: 1653, wheelbase: 2580, weight: 1580, trunk: 470, topSpeed: '175 km/s' },

  // ══════════════════════════════════════════════════════════════
  // MINI
  // ══════════════════════════════════════════════════════════════
  'mini|cooper':            { price2024: 1600000, price2020: 1100000, price2015: 600000, length: 3821, width: 1727, height: 1414, wheelbase: 2495, weight: 1210, trunk: 211, topSpeed: '233 km/s' },
  'mini|countryman':        { price2024: 2200000, price2020: 1500000, price2015: 800000, length: 4433, width: 1843, height: 1656, wheelbase: 2692, weight: 1485, trunk: 505, topSpeed: '228 km/s' },
  'mini|clubman':           { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4253, width: 1800, height: 1441, wheelbase: 2670, weight: 1345, trunk: 360, topSpeed: '228 km/s' },
  'mini|cabrio':            { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 3821, width: 1727, height: 1415, wheelbase: 2495, weight: 1320, trunk: 160, topSpeed: '225 km/s' },
  'mini|cooper-electric':   { price2024: 1800000, length: 3846, width: 1744, height: 1430, wheelbase: 2526, weight: 1505, trunk: 200, topSpeed: '170 km/s' },
  'mini|cooper-s':          { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 3821, width: 1727, height: 1414, wheelbase: 2495, weight: 1245, trunk: 211, topSpeed: '242 km/s' },
  'mini|john-cooper-works': { price2024: 2500000, price2020: 1800000, length: 3874, width: 1727, height: 1414, wheelbase: 2495, weight: 1260, trunk: 211, topSpeed: '246 km/s' },
  'mini|paceman':           { price2024: 900000, price2020: 600000, price2015: 350000, length: 4113, width: 1786, height: 1531, wheelbase: 2596, weight: 1330, trunk: 330, topSpeed: '205 km/s' },

  // ══════════════════════════════════════════════════════════════
  // MITSUBISHI
  // ══════════════════════════════════════════════════════════════
  'mitsubishi|asx':           { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4365, width: 1810, height: 1640, wheelbase: 2670, weight: 1380, trunk: 406, topSpeed: '190 km/s' },
  'mitsubishi|eclipse-cross': { price2024: 1500000, price2020: 1000000, length: 4405, width: 1805, height: 1685, wheelbase: 2670, weight: 1495, trunk: 448, topSpeed: '200 km/s' },
  'mitsubishi|outlander':     { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4710, width: 1862, height: 1740, wheelbase: 2706, weight: 1640, trunk: 544, topSpeed: '200 km/s' },
  'mitsubishi|l200':          { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 5190, width: 1815, height: 1780, wheelbase: 3000, weight: 1845, trunk: null, topSpeed: '180 km/s' },
  'mitsubishi|colt':          { price2024: 900000, length: 4060, width: 1745, height: 1525, wheelbase: 2560, weight: 1120, trunk: 391, topSpeed: '180 km/s' },
  'mitsubishi|lancer':        { price2024: 500000, price2020: 350000, price2015: 200000, length: 4570, width: 1760, height: 1505, wheelbase: 2635, weight: 1290, trunk: 315, topSpeed: '210 km/s' },
  'mitsubishi|pajero':        { price2024: 2000000, price2020: 1400000, price2015: 750000, length: 4900, width: 1875, height: 1870, wheelbase: 2780, weight: 2090, trunk: 600, topSpeed: '195 km/s' },
  'mitsubishi|pajero-sport':  { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4785, width: 1815, height: 1805, wheelbase: 2800, weight: 1950, trunk: 502, topSpeed: '180 km/s' },
  'mitsubishi|space-star':    { price2024: 650000, price2020: 430000, price2015: 250000, length: 3845, width: 1665, height: 1505, wheelbase: 2450, weight: 890, trunk: 235, topSpeed: '167 km/s' },

  // ══════════════════════════════════════════════════════════════
  // NISSAN
  // ══════════════════════════════════════════════════════════════
  'nissan|qashqai':          { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 4425, width: 1838, height: 1635, wheelbase: 2665, weight: 1413, trunk: 504, topSpeed: '200 km/s' },
  'nissan|juke':             { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4210, width: 1800, height: 1595, wheelbase: 2636, weight: 1275, trunk: 422, topSpeed: '195 km/s' },
  'nissan|x-trail':          { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4680, width: 1840, height: 1725, wheelbase: 2705, weight: 1584, trunk: 585, topSpeed: '200 km/s' },
  'nissan|micra':            { price2024: 900000, price2020: 600000, price2015: 340000, length: 3999, width: 1743, height: 1455, wheelbase: 2530, weight: 1030, trunk: 300, topSpeed: '180 km/s' },
  'nissan|leaf':             { price2024: 1500000, price2020: 1000000, length: 4480, width: 1790, height: 1540, wheelbase: 2700, weight: 1580, trunk: 435, topSpeed: '157 km/s' },
  'nissan|ariya':            { price2024: 2500000, length: 4595, width: 1850, height: 1660, wheelbase: 2775, weight: 1870, trunk: 468, topSpeed: '200 km/s' },
  'nissan|gt-r':             { price2024: 12000000, price2020: 8000000, price2015: 4500000, length: 4710, width: 1895, height: 1370, wheelbase: 2780, weight: 1752, trunk: 315, topSpeed: '315 km/s' },
  'nissan|navara':           { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 5255, width: 1850, height: 1810, wheelbase: 3150, weight: 1980, trunk: null, topSpeed: '180 km/s' },
  'nissan|370z':             { price2024: 3000000, price2020: 2000000, price2015: 1100000, length: 4259, width: 1845, height: 1315, wheelbase: 2550, weight: 1496, trunk: 190, topSpeed: '250 km/s' },
  'nissan|note':             { price2024: 800000, price2020: 500000, price2015: 290000, length: 4095, width: 1695, height: 1520, wheelbase: 2580, weight: 1190, trunk: 340, topSpeed: '175 km/s' },
  'nissan|pathfinder':       { price2024: 3000000, price2020: 2000000, price2015: 1100000, length: 5000, width: 1979, height: 1766, wheelbase: 2900, weight: 2050, trunk: 651, topSpeed: '195 km/s' },
  'nissan|patrol':           { price2024: 5000000, price2020: 3200000, price2015: 1700000, length: 5165, width: 1995, height: 1940, wheelbase: 3075, weight: 2690, trunk: 550, topSpeed: '210 km/s' },
  'nissan|pulsar':           { price2024: 600000, price2020: 400000, price2015: 230000, length: 4385, width: 1768, height: 1515, wheelbase: 2700, weight: 1241, trunk: 385, topSpeed: '200 km/s' },
  'nissan|z':                { price2024: 5000000, length: 4379, width: 1844, height: 1316, wheelbase: 2550, weight: 1600, trunk: 240, topSpeed: '250 km/s' },

  // ══════════════════════════════════════════════════════════════
  // OMODA
  // ══════════════════════════════════════════════════════════════
  'omoda|5':    { price2024: 1050000, length: 4400, width: 1830, height: 1588, wheelbase: 2630, weight: 1380, trunk: 360, topSpeed: '180 km/s' },
  'omoda|7':    { price2024: 1300000, length: 4626, width: 1900, height: 1660, wheelbase: 2745, weight: 1590, trunk: 460, topSpeed: '185 km/s' },

  // ══════════════════════════════════════════════════════════════
  // OPEL
  // ══════════════════════════════════════════════════════════════
  'opel|corsa':           { price2024: 900000, price2020: 600000, price2015: 340000, length: 4060, width: 1765, height: 1433, wheelbase: 2538, weight: 1100, trunk: 309, topSpeed: '195 km/s' },
  'opel|astra':           { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4374, width: 1860, height: 1441, wheelbase: 2675, weight: 1290, trunk: 422, topSpeed: '210 km/s' },
  'opel|mokka':           { price2024: 1200000, price2020: 800000, length: 4151, width: 1791, height: 1534, wheelbase: 2557, weight: 1325, trunk: 350, topSpeed: '195 km/s' },
  'opel|crossland':       { price2024: 1100000, price2020: 750000, length: 4217, width: 1765, height: 1605, wheelbase: 2604, weight: 1195, trunk: 410, topSpeed: '188 km/s' },
  'opel|grandland':       { price2024: 1500000, price2020: 1000000, length: 4477, width: 1856, height: 1609, wheelbase: 2675, weight: 1480, trunk: 514, topSpeed: '205 km/s' },
  'opel|insignia':        { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4897, width: 1863, height: 1455, wheelbase: 2829, weight: 1555, trunk: 490, topSpeed: '227 km/s' },
  'opel|adam':             { price2024: 450000, price2020: 300000, price2015: 180000, length: 3747, width: 1720, height: 1484, wheelbase: 2311, weight: 1045, trunk: 170, topSpeed: '185 km/s' },
  'opel|agila':            { price2024: 200000, price2020: 130000, price2015: 80000, length: 3740, width: 1680, height: 1590, wheelbase: 2360, weight: 1020, trunk: 225, topSpeed: '160 km/s' },
  'opel|ampera':           { price2024: 500000, price2020: 350000, price2015: 200000, length: 4498, width: 1788, height: 1439, wheelbase: 2685, weight: 1715, trunk: 310, topSpeed: '160 km/s' },
  'opel|astra-sports-tourer': { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4642, width: 1860, height: 1467, wheelbase: 2732, weight: 1350, trunk: 608, topSpeed: '208 km/s' },
  'opel|cascada':          { price2024: 700000, price2020: 480000, price2015: 280000, length: 4696, width: 1840, height: 1443, wheelbase: 2695, weight: 1620, trunk: 280, topSpeed: '220 km/s' },
  'opel|combo':            { price2024: 1000000, price2020: 650000, price2015: 370000, length: 4403, width: 1848, height: 1841, wheelbase: 2785, weight: 1450, trunk: 597, topSpeed: '180 km/s' },
  'opel|corsa-e':          { price2024: 1200000, length: 4060, width: 1765, height: 1433, wheelbase: 2538, weight: 1455, trunk: 267, topSpeed: '150 km/s' },
  'opel|frontera':         { price2024: 1300000, length: 4380, width: 1790, height: 1630, wheelbase: 2630, weight: 1480, trunk: 460, topSpeed: '170 km/s' },
  'opel|karl':             { price2024: 300000, price2020: 200000, price2015: 120000, length: 3679, width: 1595, height: 1483, wheelbase: 2385, weight: 870, trunk: 206, topSpeed: '167 km/s' },
  'opel|meriva':           { price2024: 350000, price2020: 240000, price2015: 140000, length: 4300, width: 1770, height: 1615, wheelbase: 2644, weight: 1335, trunk: 400, topSpeed: '185 km/s' },
  'opel|mokka-e':          { price2024: 1400000, length: 4151, width: 1791, height: 1534, wheelbase: 2557, weight: 1598, trunk: 310, topSpeed: '150 km/s' },
  'opel|mokka-x':          { price2024: 900000, price2020: 600000, length: 4278, width: 1776, height: 1558, wheelbase: 2555, weight: 1370, trunk: 356, topSpeed: '195 km/s' },
  'opel|movano':           { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 5548, width: 2070, height: 2547, wheelbase: 3182, weight: 2130, trunk: 8000, topSpeed: '150 km/s' },
  'opel|vivaro':           { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 4998, width: 1920, height: 1940, wheelbase: 2925, weight: 1700, trunk: 5300, topSpeed: '175 km/s' },
  'opel|zafira':           { price2024: 700000, price2020: 480000, price2015: 280000, length: 4666, width: 1860, height: 1634, wheelbase: 2760, weight: 1530, trunk: 536, topSpeed: '200 km/s' },

  // ══════════════════════════════════════════════════════════════
  // PEUGEOT
  // ══════════════════════════════════════════════════════════════
  'peugeot|208':              { price2024: 950000, price2020: 620000, price2015: 350000, length: 4055, width: 1745, height: 1430, wheelbase: 2540, weight: 1100, trunk: 311, topSpeed: '195 km/s' },
  'peugeot|2008':             { price2024: 1200000, price2020: 800000, length: 4300, width: 1770, height: 1530, wheelbase: 2605, weight: 1260, trunk: 434, topSpeed: '195 km/s' },
  'peugeot|308':              { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4367, width: 1852, height: 1441, wheelbase: 2675, weight: 1280, trunk: 412, topSpeed: '215 km/s' },
  'peugeot|3008':             { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4447, width: 1841, height: 1624, wheelbase: 2675, weight: 1470, trunk: 520, topSpeed: '205 km/s' },
  'peugeot|5008':             { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4641, width: 1844, height: 1646, wheelbase: 2840, weight: 1580, trunk: 780, topSpeed: '200 km/s' },
  'peugeot|508':              { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4750, width: 1859, height: 1403, wheelbase: 2793, weight: 1455, trunk: 487, topSpeed: '225 km/s' },
  'peugeot|108':              { price2024: 400000, price2020: 280000, price2015: 160000, length: 3475, width: 1615, height: 1460, wheelbase: 2340, weight: 840, trunk: 196, topSpeed: '165 km/s' },
  'peugeot|301':              { price2024: 650000, price2020: 440000, price2015: 250000, length: 4440, width: 1748, height: 1476, wheelbase: 2652, weight: 1110, trunk: 506, topSpeed: '188 km/s' },
  'peugeot|308-sw':           { price2024: 1500000, price2020: 950000, price2015: 530000, length: 4636, width: 1852, height: 1444, wheelbase: 2732, weight: 1350, trunk: 608, topSpeed: '213 km/s' },
  'peugeot|408':              { price2024: 1700000, length: 4687, width: 1859, height: 1502, wheelbase: 2787, weight: 1430, trunk: 471, topSpeed: '220 km/s' },
  'peugeot|508-sw':           { price2024: 1900000, price2020: 1250000, length: 4778, width: 1859, height: 1420, wheelbase: 2793, weight: 1500, trunk: 530, topSpeed: '225 km/s' },
  'peugeot|bipper':           { price2024: 350000, price2020: 230000, price2015: 140000, length: 3868, width: 1716, height: 1720, wheelbase: 2513, weight: 1100, trunk: 660, topSpeed: '160 km/s' },
  'peugeot|boxer':            { price2024: 1600000, price2020: 1100000, price2015: 600000, length: 5413, width: 2050, height: 2524, wheelbase: 3450, weight: 2100, trunk: 8000, topSpeed: '155 km/s' },
  'peugeot|e-2008':           { price2024: 1500000, length: 4300, width: 1770, height: 1530, wheelbase: 2605, weight: 1548, trunk: 405, topSpeed: '150 km/s' },
  'peugeot|e-208':            { price2024: 1300000, length: 4055, width: 1745, height: 1430, wheelbase: 2540, weight: 1455, trunk: 265, topSpeed: '150 km/s' },
  'peugeot|e-3008':           { price2024: 2200000, length: 4542, width: 1895, height: 1641, wheelbase: 2740, weight: 2088, trunk: 520, topSpeed: '170 km/s' },
  'peugeot|e-308':            { price2024: 1600000, length: 4367, width: 1852, height: 1441, wheelbase: 2675, weight: 1612, trunk: 361, topSpeed: '170 km/s' },
  'peugeot|e-rifter':         { price2024: 1500000, length: 4403, width: 1848, height: 1875, wheelbase: 2785, weight: 1865, trunk: 597, topSpeed: '135 km/s' },
  'peugeot|expert':           { price2024: 1400000, price2020: 950000, price2015: 520000, length: 4959, width: 1920, height: 1935, wheelbase: 2925, weight: 1640, trunk: 5300, topSpeed: '175 km/s' },
  'peugeot|partner':          { price2024: 1000000, price2020: 650000, price2015: 370000, length: 4403, width: 1848, height: 1841, wheelbase: 2785, weight: 1450, trunk: 597, topSpeed: '180 km/s' },
  'peugeot|rcz':              { price2024: 600000, price2020: 420000, price2015: 250000, length: 4290, width: 1845, height: 1359, wheelbase: 2612, weight: 1310, trunk: 309, topSpeed: '237 km/s' },
  'peugeot|rifter':           { price2024: 1100000, price2020: 750000, length: 4403, width: 1848, height: 1875, wheelbase: 2785, weight: 1470, trunk: 775, topSpeed: '180 km/s' },
  'peugeot|traveller':        { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4956, width: 1920, height: 1880, wheelbase: 3275, weight: 1720, trunk: 1384, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // POLESTAR
  // ══════════════════════════════════════════════════════════════
  'polestar|2':    { price2024: 2500000, price2020: 1800000, length: 4606, width: 1859, height: 1482, wheelbase: 2735, weight: 1935, trunk: 405, topSpeed: '205 km/s' },
  'polestar|3':    { price2024: 4000000, length: 4900, width: 2120, height: 1614, wheelbase: 2985, weight: 2584, trunk: 484, topSpeed: '210 km/s' },
  'polestar|4':    { price2024: 3500000, length: 4839, width: 2139, height: 1544, wheelbase: 2999, weight: 2445, trunk: 526, topSpeed: '200 km/s' },

  // ══════════════════════════════════════════════════════════════
  // PORSCHE
  // ══════════════════════════════════════════════════════════════
  'porsche|911':                { price2024: 8000000, price2020: 5000000, price2015: 2800000, length: 4519, width: 1852, height: 1298, wheelbase: 2450, weight: 1480, trunk: 132, topSpeed: '293 km/s' },
  'porsche|cayenne':            { price2024: 5500000, price2020: 3500000, price2015: 1800000, length: 4918, width: 1983, height: 1696, wheelbase: 2895, weight: 2030, trunk: 772, topSpeed: '248 km/s' },
  'porsche|macan':              { price2024: 4000000, price2020: 2500000, length: 4681, width: 1923, height: 1624, wheelbase: 2807, weight: 1845, trunk: 488, topSpeed: '232 km/s' },
  'porsche|taycan':             { price2024: 5500000, price2020: 3500000, length: 4963, width: 1966, height: 1378, wheelbase: 2900, weight: 2140, trunk: 407, topSpeed: '230 km/s' },
  'porsche|panamera':           { price2024: 6500000, price2020: 4200000, price2015: 2200000, length: 5049, width: 1937, height: 1423, wheelbase: 2950, weight: 1870, trunk: 403, topSpeed: '270 km/s' },
  'porsche|718-boxster':        { price2024: 4500000, price2020: 3000000, length: 4379, width: 1801, height: 1265, wheelbase: 2475, weight: 1365, trunk: 275, topSpeed: '265 km/s' },
  'porsche|718-cayman':         { price2024: 4500000, price2020: 3000000, length: 4379, width: 1801, height: 1271, wheelbase: 2475, weight: 1340, trunk: 275, topSpeed: '275 km/s' },
  'porsche|911-gt3':            { price2024: 14000000, price2020: 9000000, length: 4573, width: 1852, height: 1279, wheelbase: 2457, weight: 1418, trunk: 132, topSpeed: '320 km/s' },
  'porsche|911-targa':          { price2024: 9000000, price2020: 5500000, price2015: 3000000, length: 4519, width: 1852, height: 1297, wheelbase: 2450, weight: 1570, trunk: 132, topSpeed: '289 km/s' },
  'porsche|911-turbo':          { price2024: 12000000, price2020: 7500000, price2015: 4000000, length: 4535, width: 1900, height: 1303, wheelbase: 2450, weight: 1640, trunk: 132, topSpeed: '330 km/s' },
  'porsche|cayenne-coupe':      { price2024: 6000000, price2020: 3800000, length: 4931, width: 1983, height: 1676, wheelbase: 2895, weight: 2070, trunk: 625, topSpeed: '243 km/s' },
  'porsche|panamera-sport-turismo': { price2024: 7000000, price2020: 4500000, length: 5049, width: 1937, height: 1432, wheelbase: 2950, weight: 1920, trunk: 520, topSpeed: '265 km/s' },
  'porsche|taycan-cross-turismo':   { price2024: 6000000, price2020: 3800000, length: 4974, width: 1967, height: 1409, wheelbase: 2900, weight: 2220, trunk: 446, topSpeed: '220 km/s' },

  // ══════════════════════════════════════════════════════════════
  // PROTON
  // ══════════════════════════════════════════════════════════════
  'proton|saga':  { price2024: 400000, length: 4331, width: 1689, height: 1492, wheelbase: 2465, weight: 1040, trunk: 420, topSpeed: '175 km/s' },
  'proton|x50':   { price2024: 700000, length: 4330, width: 1800, height: 1609, wheelbase: 2600, weight: 1350, trunk: 330, topSpeed: '185 km/s' },
  'proton|x70':   { price2024: 900000, length: 4519, width: 1831, height: 1694, wheelbase: 2670, weight: 1510, trunk: 380, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // RAM
  // ══════════════════════════════════════════════════════════════
  'ram|1500':     { price2024: 4500000, price2020: 3200000, price2015: 1700000, length: 5817, width: 2040, height: 1905, wheelbase: 3569, weight: 2370, trunk: null, topSpeed: '180 km/s' },
  'ram|2500':     { price2024: 5500000, price2020: 3800000, price2015: 2000000, length: 5994, width: 2040, height: 2000, wheelbase: 3691, weight: 2950, trunk: null, topSpeed: '175 km/s' },
  'ram|promaster': { price2024: 2500000, price2020: 1700000, length: 5991, width: 2039, height: 2726, wheelbase: 4039, weight: 2380, trunk: 10800, topSpeed: '160 km/s' },

  // ══════════════════════════════════════════════════════════════
  // RENAULT
  // ══════════════════════════════════════════════════════════════
  'renault|clio':             { price2024: 950000, price2020: 600000, price2015: 340000, length: 4050, width: 1798, height: 1440, wheelbase: 2583, weight: 1140, trunk: 340, topSpeed: '195 km/s' },
  'renault|captur':           { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4227, width: 1797, height: 1576, wheelbase: 2639, weight: 1250, trunk: 422, topSpeed: '195 km/s' },
  'renault|megane':           { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4359, width: 1814, height: 1447, wheelbase: 2669, weight: 1320, trunk: 384, topSpeed: '210 km/s' },
  'renault|kadjar':           { price2024: 1200000, price2020: 800000, length: 4449, width: 1836, height: 1607, wheelbase: 2646, weight: 1400, trunk: 472, topSpeed: '200 km/s' },
  'renault|scenic':           { price2024: 1800000, price2020: 1000000, price2015: 550000, length: 4470, width: 1863, height: 1571, wheelbase: 2785, weight: 1770, trunk: 545, topSpeed: '170 km/s' },
  'renault|koleos':           { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4672, width: 1843, height: 1690, wheelbase: 2705, weight: 1650, trunk: 624, topSpeed: '200 km/s' },
  'renault|talisman':         { price2024: 1300000, price2020: 850000, length: 4850, width: 1870, height: 1460, wheelbase: 2810, weight: 1430, trunk: 608, topSpeed: '220 km/s' },
  'renault|austral':          { price2024: 1500000, length: 4510, width: 1825, height: 1624, wheelbase: 2667, weight: 1460, trunk: 500, topSpeed: '200 km/s' },
  'renault|espace':           { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4716, width: 1870, height: 1640, wheelbase: 2738, weight: 1580, trunk: 460, topSpeed: '200 km/s' },
  'renault|express':          { price2024: 700000, price2020: 500000, length: 4397, width: 1757, height: 1844, wheelbase: 2716, weight: 1380, trunk: 600, topSpeed: '165 km/s' },
  'renault|fluence':          { price2024: 450000, price2020: 300000, price2015: 180000, length: 4618, width: 1809, height: 1470, wheelbase: 2702, weight: 1280, trunk: 530, topSpeed: '195 km/s' },
  'renault|kangoo':           { price2024: 1000000, price2020: 650000, price2015: 370000, length: 4486, width: 1919, height: 1849, wheelbase: 2716, weight: 1450, trunk: 775, topSpeed: '170 km/s' },
  'renault|latitude':         { price2024: 400000, price2020: 270000, price2015: 160000, length: 4890, width: 1832, height: 1475, wheelbase: 2761, weight: 1530, trunk: 562, topSpeed: '210 km/s' },
  'renault|master':           { price2024: 1700000, price2020: 1100000, price2015: 600000, length: 5548, width: 2070, height: 2547, wheelbase: 3182, weight: 2120, trunk: 8000, topSpeed: '150 km/s' },
  'renault|megane-e-tech':    { price2024: 1800000, length: 4200, width: 1768, height: 1505, wheelbase: 2685, weight: 1636, trunk: 440, topSpeed: '160 km/s' },
  'renault|megane-sedan':     { price2024: 700000, price2020: 480000, price2015: 280000, length: 4631, width: 1814, height: 1447, wheelbase: 2669, weight: 1345, trunk: 508, topSpeed: '210 km/s' },
  'renault|megane-sport-tourer': { price2024: 1350000, price2020: 880000, price2015: 500000, length: 4626, width: 1814, height: 1447, wheelbase: 2713, weight: 1380, trunk: 521, topSpeed: '208 km/s' },
  'renault|rafale':           { price2024: 2200000, length: 4710, width: 1865, height: 1610, wheelbase: 2738, weight: 1610, trunk: 530, topSpeed: '200 km/s' },
  'renault|symbol':           { price2024: 350000, price2020: 240000, price2015: 140000, length: 4427, width: 1748, height: 1477, wheelbase: 2589, weight: 1090, trunk: 510, topSpeed: '175 km/s' },
  'renault|talisman-estate':  { price2024: 1400000, price2020: 900000, length: 4861, width: 1870, height: 1460, wheelbase: 2810, weight: 1470, trunk: 572, topSpeed: '218 km/s' },
  'renault|trafic':           { price2024: 1400000, price2020: 950000, price2015: 520000, length: 4999, width: 1956, height: 1971, wheelbase: 3098, weight: 1700, trunk: 5200, topSpeed: '175 km/s' },
  'renault|twingo':           { price2024: 500000, price2020: 350000, price2015: 200000, length: 3615, width: 1646, height: 1554, wheelbase: 2492, weight: 945, trunk: 219, topSpeed: '165 km/s' },
  'renault|zoe':              { price2024: 1100000, price2020: 750000, length: 4084, width: 1730, height: 1562, wheelbase: 2588, weight: 1468, trunk: 338, topSpeed: '135 km/s' },

  // ══════════════════════════════════════════════════════════════
  // RIVIAN
  // ══════════════════════════════════════════════════════════════
  'rivian|r1s':   { price2024: 5000000, length: 5100, width: 2032, height: 1810, wheelbase: 3076, weight: 2858, trunk: 935, topSpeed: '225 km/s' },
  'rivian|r1t':   { price2024: 4500000, length: 5514, width: 2032, height: 1815, wheelbase: 3450, weight: 2870, trunk: null, topSpeed: '225 km/s' },

  // ══════════════════════════════════════════════════════════════
  // ROLLS-ROYCE
  // ══════════════════════════════════════════════════════════════
  'rolls-royce|cullinan':       { price2024: 25000000, price2020: 16000000, length: 5341, width: 2000, height: 1835, wheelbase: 3295, weight: 2660, trunk: 600, topSpeed: '250 km/s' },
  'rolls-royce|ghost':          { price2024: 18000000, price2020: 12000000, price2015: 7000000, length: 5546, width: 1978, height: 1571, wheelbase: 3295, weight: 2490, trunk: 507, topSpeed: '250 km/s' },
  'rolls-royce|phantom':        { price2024: 25000000, price2020: 16000000, price2015: 9000000, length: 5762, width: 2018, height: 1646, wheelbase: 3552, weight: 2560, trunk: 548, topSpeed: '250 km/s' },
  'rolls-royce|spectre':        { price2024: 22000000, length: 5453, width: 2080, height: 1559, wheelbase: 3210, weight: 2975, trunk: 500, topSpeed: '250 km/s' },
  'rolls-royce|wraith':         { price2024: 16000000, price2020: 10000000, price2015: 6000000, length: 5269, width: 1947, height: 1507, wheelbase: 3112, weight: 2360, trunk: 470, topSpeed: '250 km/s' },
  'rolls-royce|dawn':           { price2024: 18000000, price2020: 12000000, length: 5285, width: 1947, height: 1502, wheelbase: 3112, weight: 2560, trunk: 295, topSpeed: '250 km/s' },

  // ══════════════════════════════════════════════════════════════
  // ROVER (historic)
  // ══════════════════════════════════════════════════════════════
  'rover|25':   { price2024: 80000, price2020: 55000, price2015: 30000, length: 3990, width: 1690, height: 1425, wheelbase: 2360, weight: 1060, trunk: 315, topSpeed: '180 km/s' },
  'rover|45':   { price2024: 90000, price2020: 60000, price2015: 35000, length: 4445, width: 1726, height: 1424, wheelbase: 2620, weight: 1170, trunk: 440, topSpeed: '195 km/s' },
  'rover|75':   { price2024: 120000, price2020: 80000, price2015: 45000, length: 4744, width: 1825, height: 1445, wheelbase: 2750, weight: 1375, trunk: 530, topSpeed: '215 km/s' },

  // ══════════════════════════════════════════════════════════════
  // SAAB
  // ══════════════════════════════════════════════════════════════
  'saab|9-3':   { price2024: 250000, price2020: 170000, price2015: 100000, length: 4635, width: 1762, height: 1424, wheelbase: 2675, weight: 1390, trunk: 425, topSpeed: '210 km/s' },
  'saab|9-5':   { price2024: 300000, price2020: 200000, price2015: 120000, length: 4880, width: 1867, height: 1470, wheelbase: 2837, weight: 1540, trunk: 515, topSpeed: '225 km/s' },

  // ══════════════════════════════════════════════════════════════
  // SEAT
  // ══════════════════════════════════════════════════════════════
  'seat|ibiza':       { price2024: 850000, price2020: 550000, price2015: 310000, length: 4059, width: 1780, height: 1444, wheelbase: 2564, weight: 1085, trunk: 355, topSpeed: '195 km/s' },
  'seat|leon':        { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4368, width: 1799, height: 1442, wheelbase: 2636, weight: 1270, trunk: 380, topSpeed: '215 km/s' },
  'seat|arona':       { price2024: 1050000, price2020: 700000, length: 4145, width: 1780, height: 1552, wheelbase: 2564, weight: 1175, trunk: 400, topSpeed: '188 km/s' },
  'seat|ateca':       { price2024: 1400000, price2020: 900000, length: 4381, width: 1841, height: 1615, wheelbase: 2631, weight: 1395, trunk: 510, topSpeed: '205 km/s' },
  'seat|tarraco':     { price2024: 1800000, price2020: 1200000, length: 4735, width: 1839, height: 1674, wheelbase: 2790, weight: 1605, trunk: 700, topSpeed: '205 km/s' },
  'seat|alhambra':    { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4854, width: 1904, height: 1720, wheelbase: 2919, weight: 1730, trunk: 710, topSpeed: '210 km/s' },
  'seat|leon-sportstourer': { price2024: 1300000, price2020: 850000, length: 4642, width: 1799, height: 1442, wheelbase: 2686, weight: 1320, trunk: 620, topSpeed: '215 km/s' },
  'seat|mii':         { price2024: 350000, price2020: 240000, price2015: 140000, length: 3557, width: 1645, height: 1478, wheelbase: 2420, weight: 857, trunk: 251, topSpeed: '173 km/s' },
  'seat|toledo':      { price2024: 500000, price2020: 340000, price2015: 200000, length: 4482, width: 1706, height: 1472, wheelbase: 2602, weight: 1180, trunk: 550, topSpeed: '195 km/s' },

  // ══════════════════════════════════════════════════════════════
  // SKODA
  // ══════════════════════════════════════════════════════════════
  'skoda|octavia':          { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4689, width: 1829, height: 1468, wheelbase: 2686, weight: 1345, trunk: 600, topSpeed: '227 km/s' },
  'skoda|superb':           { price2024: 1900000, price2020: 1200000, price2015: 650000, length: 4869, width: 1849, height: 1469, wheelbase: 2841, weight: 1430, trunk: 625, topSpeed: '235 km/s' },
  'skoda|kodiaq':           { price2024: 2000000, price2020: 1300000, length: 4697, width: 1882, height: 1676, wheelbase: 2791, weight: 1610, trunk: 720, topSpeed: '205 km/s' },
  'skoda|karoq':            { price2024: 1500000, price2020: 1000000, length: 4382, width: 1841, height: 1605, wheelbase: 2638, weight: 1380, trunk: 521, topSpeed: '205 km/s' },
  'skoda|kamiq':            { price2024: 1200000, price2020: 800000, length: 4241, width: 1793, height: 1553, wheelbase: 2651, weight: 1260, trunk: 400, topSpeed: '200 km/s' },
  'skoda|fabia':            { price2024: 900000, price2020: 600000, price2015: 340000, length: 4108, width: 1780, height: 1459, wheelbase: 2564, weight: 1150, trunk: 380, topSpeed: '200 km/s' },
  'skoda|scala':            { price2024: 1100000, price2020: 750000, length: 4362, width: 1793, height: 1471, wheelbase: 2649, weight: 1240, trunk: 467, topSpeed: '205 km/s' },
  'skoda|enyaq':            { price2024: 2200000, length: 4649, width: 1879, height: 1616, wheelbase: 2765, weight: 1860, trunk: 585, topSpeed: '160 km/s' },
  'skoda|enyaq-coupe':      { price2024: 2400000, length: 4653, width: 1879, height: 1607, wheelbase: 2765, weight: 1880, trunk: 570, topSpeed: '160 km/s' },
  'skoda|citigo':           { price2024: 300000, price2020: 200000, price2015: 120000, length: 3563, width: 1645, height: 1478, wheelbase: 2420, weight: 863, trunk: 251, topSpeed: '173 km/s' },
  'skoda|fabia-combi':      { price2024: 950000, price2020: 630000, price2015: 360000, length: 4257, width: 1780, height: 1459, wheelbase: 2564, weight: 1175, trunk: 530, topSpeed: '198 km/s' },
  'skoda|octavia-combi':    { price2024: 1500000, price2020: 950000, price2015: 530000, length: 4689, width: 1829, height: 1468, wheelbase: 2686, weight: 1380, trunk: 640, topSpeed: '225 km/s' },
  'skoda|rapid':            { price2024: 500000, price2020: 350000, price2015: 200000, length: 4487, width: 1706, height: 1461, wheelbase: 2602, weight: 1160, trunk: 530, topSpeed: '195 km/s' },
  'skoda|roomster':         { price2024: 250000, price2020: 170000, price2015: 100000, length: 4200, width: 1684, height: 1608, wheelbase: 2510, weight: 1230, trunk: 450, topSpeed: '180 km/s' },
  'skoda|superb-combi':     { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4862, width: 1849, height: 1477, wheelbase: 2841, weight: 1470, trunk: 660, topSpeed: '233 km/s' },
  'skoda|yeti':             { price2024: 500000, price2020: 350000, price2015: 200000, length: 4226, width: 1793, height: 1691, wheelbase: 2578, weight: 1400, trunk: 416, topSpeed: '188 km/s' },

  // ══════════════════════════════════════════════════════════════
  // SMART
  // ══════════════════════════════════════════════════════════════
  'smart|eq-fortwo':   { price2024: 800000, price2020: 550000, length: 2695, width: 1663, height: 1555, wheelbase: 1873, weight: 1095, trunk: 185, topSpeed: '130 km/s' },
  'smart|forfour':     { price2024: 700000, price2020: 480000, price2015: 280000, length: 3495, width: 1665, height: 1554, wheelbase: 2494, weight: 1010, trunk: 185, topSpeed: '155 km/s' },
  'smart|fortwo':      { price2024: 600000, price2020: 400000, price2015: 230000, length: 2695, width: 1663, height: 1555, wheelbase: 1873, weight: 900, trunk: 185, topSpeed: '155 km/s' },
  'smart|hashtag-1':   { price2024: 1300000, length: 4300, width: 1844, height: 1556, wheelbase: 2750, weight: 1820, trunk: 323, topSpeed: '180 km/s' },
  'smart|hashtag-3':   { price2024: 1500000, length: 4400, width: 1844, height: 1560, wheelbase: 2785, weight: 1850, trunk: 370, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // SSANGYONG
  // ══════════════════════════════════════════════════════════════
  'ssangyong|korando':   { price2024: 1000000, price2020: 650000, price2015: 370000, length: 4450, width: 1870, height: 1620, wheelbase: 2675, weight: 1470, trunk: 551, topSpeed: '185 km/s' },
  'ssangyong|musso':     { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 5095, width: 1830, height: 1800, wheelbase: 3100, weight: 2050, trunk: null, topSpeed: '175 km/s' },
  'ssangyong|rexton':    { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4850, width: 1960, height: 1825, wheelbase: 2865, weight: 2050, trunk: 820, topSpeed: '195 km/s' },
  'ssangyong|tivoli':    { price2024: 800000, price2020: 550000, length: 4202, width: 1798, height: 1590, wheelbase: 2600, weight: 1315, trunk: 423, topSpeed: '180 km/s' },
  'ssangyong|torres':    { price2024: 1200000, length: 4710, width: 1920, height: 1720, wheelbase: 2680, weight: 1550, trunk: 703, topSpeed: '185 km/s' },

  // ══════════════════════════════════════════════════════════════
  // SUBARU
  // ══════════════════════════════════════════════════════════════
  'subaru|brz':        { price2024: 2200000, price2020: 1500000, length: 4265, width: 1775, height: 1310, wheelbase: 2575, weight: 1270, trunk: 209, topSpeed: '230 km/s' },
  'subaru|crosstrek':  { price2024: 1800000, length: 4480, width: 1800, height: 1580, wheelbase: 2670, weight: 1470, trunk: 345, topSpeed: '190 km/s' },
  'subaru|forester':   { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4640, width: 1820, height: 1730, wheelbase: 2670, weight: 1573, trunk: 509, topSpeed: '194 km/s' },
  'subaru|impreza':    { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4475, width: 1780, height: 1450, wheelbase: 2670, weight: 1370, trunk: 345, topSpeed: '200 km/s' },
  'subaru|legacy':     { price2024: 1600000, price2020: 1100000, price2015: 600000, length: 4830, width: 1840, height: 1500, wheelbase: 2750, weight: 1530, trunk: 510, topSpeed: '210 km/s' },
  'subaru|levorg':     { price2024: 1700000, price2020: 1100000, length: 4755, width: 1795, height: 1500, wheelbase: 2670, weight: 1550, trunk: 492, topSpeed: '210 km/s' },
  'subaru|outback':    { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4870, width: 1875, height: 1675, wheelbase: 2745, weight: 1622, trunk: 561, topSpeed: '195 km/s' },
  'subaru|solterra':   { price2024: 2500000, length: 4690, width: 1860, height: 1650, wheelbase: 2850, weight: 1930, trunk: 441, topSpeed: '160 km/s' },
  'subaru|wrx':        { price2024: 2500000, price2020: 1700000, length: 4670, width: 1825, height: 1455, wheelbase: 2672, weight: 1468, trunk: 345, topSpeed: '240 km/s' },
  'subaru|xv':         { price2024: 1600000, price2020: 1050000, length: 4480, width: 1800, height: 1615, wheelbase: 2665, weight: 1410, trunk: 340, topSpeed: '190 km/s' },

  // ══════════════════════════════════════════════════════════════
  // SUZUKI
  // ══════════════════════════════════════════════════════════════
  'suzuki|vitara':    { price2024: 1100000, price2020: 750000, price2015: 420000, length: 4175, width: 1775, height: 1610, wheelbase: 2500, weight: 1200, trunk: 375, topSpeed: '185 km/s' },
  'suzuki|s-cross':   { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4300, width: 1785, height: 1590, wheelbase: 2600, weight: 1295, trunk: 430, topSpeed: '195 km/s' },
  'suzuki|swift':     { price2024: 800000, price2020: 500000, price2015: 290000, length: 3845, width: 1735, height: 1495, wheelbase: 2450, weight: 940, trunk: 265, topSpeed: '180 km/s' },
  'suzuki|jimny':     { price2024: 1300000, price2020: 900000, length: 3645, width: 1645, height: 1725, wheelbase: 2250, weight: 1110, trunk: 85, topSpeed: '145 km/s' },
  'suzuki|baleno':    { price2024: 700000, price2020: 480000, price2015: 270000, length: 3990, width: 1745, height: 1500, wheelbase: 2520, weight: 910, trunk: 355, topSpeed: '185 km/s' },
  'suzuki|across':    { price2024: 1800000, length: 4635, width: 1855, height: 1690, wheelbase: 2690, weight: 1900, trunk: 490, topSpeed: '180 km/s' },
  'suzuki|celerio':   { price2024: 400000, price2020: 280000, price2015: 160000, length: 3600, width: 1600, height: 1540, wheelbase: 2425, weight: 815, trunk: 254, topSpeed: '155 km/s' },
  'suzuki|fronx':     { price2024: 900000, length: 3995, width: 1765, height: 1550, wheelbase: 2520, weight: 1015, trunk: 308, topSpeed: '180 km/s' },
  'suzuki|grand-vitara': { price2024: 1100000, price2020: 700000, price2015: 400000, length: 4300, width: 1785, height: 1695, wheelbase: 2600, weight: 1420, trunk: 430, topSpeed: '180 km/s' },
  'suzuki|ignis':     { price2024: 700000, price2020: 450000, length: 3700, width: 1660, height: 1595, wheelbase: 2435, weight: 855, trunk: 260, topSpeed: '160 km/s' },
  'suzuki|swace':     { price2024: 1100000, length: 4655, width: 1790, height: 1460, wheelbase: 2700, weight: 1380, trunk: 596, topSpeed: '180 km/s' },
  'suzuki|sx4':       { price2024: 500000, price2020: 350000, price2015: 200000, length: 4300, width: 1765, height: 1570, wheelbase: 2500, weight: 1210, trunk: 430, topSpeed: '190 km/s' },

  // ══════════════════════════════════════════════════════════════
  // TATA
  // ══════════════════════════════════════════════════════════════
  'tata|harrier':  { price2024: 1000000, length: 4598, width: 1894, height: 1706, wheelbase: 2741, weight: 1675, trunk: 425, topSpeed: '180 km/s' },
  'tata|nexon':    { price2024: 700000, length: 3993, width: 1811, height: 1607, wheelbase: 2498, weight: 1280, trunk: 350, topSpeed: '180 km/s' },
  'tata|punch':    { price2024: 500000, length: 3827, width: 1742, height: 1615, wheelbase: 2445, weight: 1030, trunk: 366, topSpeed: '160 km/s' },
  'tata|safari':   { price2024: 1200000, length: 4661, width: 1894, height: 1786, wheelbase: 2741, weight: 1830, trunk: 447, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // TESLA
  // ══════════════════════════════════════════════════════════════
  'tesla|model-3':   { price2024: 1700000, price2020: 1200000, length: 4720, width: 1849, height: 1441, wheelbase: 2875, weight: 1761, trunk: 561, topSpeed: '201 km/s' },
  'tesla|model-y':   { price2024: 1900000, price2020: 1400000, length: 4751, width: 1921, height: 1624, wheelbase: 2890, weight: 1909, trunk: 854, topSpeed: '217 km/s' },
  'tesla|model-s':   { price2024: 3500000, price2020: 2500000, length: 4970, width: 1964, height: 1445, wheelbase: 2960, weight: 2069, trunk: 793, topSpeed: '250 km/s' },
  'tesla|model-x':   { price2024: 4000000, price2020: 3000000, length: 5057, width: 1999, height: 1684, wheelbase: 2965, weight: 2352, trunk: 2577, topSpeed: '250 km/s' },
  'tesla|cybertruck': { price2024: 5000000, length: 5682, width: 2200, height: 1791, wheelbase: 3679, weight: 2995, trunk: 1897, topSpeed: '209 km/s' },

  // ══════════════════════════════════════════════════════════════
  // TOGG
  // ══════════════════════════════════════════════════════════════
  'togg|t10x':   { price2024: 1500000, length: 4599, width: 1890, height: 1610, wheelbase: 2830, weight: 2079, trunk: 450, topSpeed: '180 km/s' },
  'togg|t10f':   { price2024: 1350000, length: 4611, width: 1890, height: 1572, wheelbase: 2830, weight: 2010, trunk: 400, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // TOYOTA
  // ══════════════════════════════════════════════════════════════
  'toyota|corolla':          { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4630, width: 1780, height: 1435, wheelbase: 2700, weight: 1350, trunk: 471, topSpeed: '200 km/s' },
  'toyota|yaris':            { price2024: 1000000, price2020: 650000, price2015: 370000, length: 3940, width: 1745, height: 1500, wheelbase: 2560, weight: 1050, trunk: 286, topSpeed: '175 km/s' },
  'toyota|c-hr':             { price2024: 1500000, price2020: 1000000, length: 4360, width: 1831, height: 1563, wheelbase: 2640, weight: 1380, trunk: 388, topSpeed: '180 km/s' },
  'toyota|rav4':             { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4600, width: 1855, height: 1685, wheelbase: 2690, weight: 1575, trunk: 580, topSpeed: '180 km/s' },
  'toyota|hilux':            { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 5325, width: 1855, height: 1815, wheelbase: 3085, weight: 1940, trunk: null, topSpeed: '175 km/s' },
  'toyota|land-cruiser':     { price2024: 5000000, price2020: 3200000, price2015: 1700000, length: 4985, width: 1980, height: 1920, wheelbase: 2850, weight: 2540, trunk: 553, topSpeed: '210 km/s' },
  'toyota|camry':            { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4880, width: 1840, height: 1445, wheelbase: 2825, weight: 1585, trunk: 493, topSpeed: '210 km/s' },
  'toyota|supra':            { price2024: 4500000, price2020: 3000000, length: 4379, width: 1854, height: 1292, wheelbase: 2470, weight: 1495, trunk: 290, topSpeed: '250 km/s' },
  'toyota|86':               { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4240, width: 1775, height: 1320, wheelbase: 2575, weight: 1270, trunk: 209, topSpeed: '230 km/s' },
  'toyota|auris':            { price2024: 700000, price2020: 450000, price2015: 260000, length: 4330, width: 1760, height: 1460, wheelbase: 2600, weight: 1300, trunk: 360, topSpeed: '195 km/s' },
  'toyota|avalon':           { price2024: 2500000, price2020: 1700000, price2015: 950000, length: 4975, width: 1850, height: 1435, wheelbase: 2870, weight: 1625, trunk: 456, topSpeed: '210 km/s' },
  'toyota|avensis':          { price2024: 600000, price2020: 400000, price2015: 230000, length: 4820, width: 1810, height: 1480, wheelbase: 2700, weight: 1405, trunk: 509, topSpeed: '210 km/s' },
  'toyota|aygo':             { price2024: 500000, price2020: 340000, price2015: 190000, length: 3455, width: 1615, height: 1460, wheelbase: 2340, weight: 840, trunk: 168, topSpeed: '160 km/s' },
  'toyota|aygo-x':           { price2024: 750000, length: 3700, width: 1740, height: 1525, wheelbase: 2430, weight: 940, trunk: 231, topSpeed: '160 km/s' },
  'toyota|bz4x':             { price2024: 2200000, length: 4690, width: 1860, height: 1650, wheelbase: 2850, weight: 1920, trunk: 452, topSpeed: '160 km/s' },
  'toyota|corolla-cross':    { price2024: 1600000, length: 4460, width: 1825, height: 1620, wheelbase: 2640, weight: 1390, trunk: 440, topSpeed: '180 km/s' },
  'toyota|corolla-hatchback': { price2024: 1200000, price2020: 800000, length: 4370, width: 1790, height: 1435, wheelbase: 2640, weight: 1310, trunk: 361, topSpeed: '200 km/s' },
  'toyota|corolla-sedan':    { price2024: 1300000, price2020: 850000, price2015: 480000, length: 4630, width: 1780, height: 1435, wheelbase: 2700, weight: 1350, trunk: 471, topSpeed: '200 km/s' },
  'toyota|corolla-touring-sports': { price2024: 1400000, price2020: 900000, length: 4650, width: 1790, height: 1460, wheelbase: 2700, weight: 1400, trunk: 596, topSpeed: '195 km/s' },
  'toyota|gr-yaris':         { price2024: 2500000, length: 3995, width: 1805, height: 1455, wheelbase: 2560, weight: 1280, trunk: 174, topSpeed: '230 km/s' },
  'toyota|highlander':       { price2024: 3000000, price2020: 2000000, length: 4966, width: 1930, height: 1755, wheelbase: 2850, weight: 2010, trunk: 658, topSpeed: '180 km/s' },
  'toyota|land-cruiser-prado': { price2024: 4000000, price2020: 2500000, price2015: 1400000, length: 4840, width: 1885, height: 1890, wheelbase: 2790, weight: 2120, trunk: 553, topSpeed: '180 km/s' },
  'toyota|prius':            { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4600, width: 1780, height: 1420, wheelbase: 2750, weight: 1390, trunk: 412, topSpeed: '177 km/s' },
  'toyota|proace':           { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 4959, width: 1920, height: 1935, wheelbase: 2925, weight: 1640, trunk: 5300, topSpeed: '175 km/s' },
  'toyota|proace-city':      { price2024: 1000000, price2020: 650000, length: 4403, width: 1848, height: 1841, wheelbase: 2785, weight: 1400, trunk: 597, topSpeed: '180 km/s' },
  'toyota|verso':            { price2024: 600000, price2020: 400000, price2015: 230000, length: 4440, width: 1790, height: 1620, wheelbase: 2780, weight: 1405, trunk: 440, topSpeed: '190 km/s' },
  'toyota|yaris-cross':      { price2024: 1200000, price2020: 800000, length: 4180, width: 1765, height: 1560, wheelbase: 2560, weight: 1170, trunk: 390, topSpeed: '170 km/s' },

  // ══════════════════════════════════════════════════════════════
  // VOLKSWAGEN
  // ══════════════════════════════════════════════════════════════
  'volkswagen|golf':          { price2024: 1500000, price2020: 1000000, price2015: 550000, length: 4284, width: 1789, height: 1456, wheelbase: 2636, weight: 1310, trunk: 381, topSpeed: '224 km/s' },
  'volkswagen|passat':        { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4775, width: 1832, height: 1477, wheelbase: 2871, weight: 1490, trunk: 586, topSpeed: '235 km/s' },
  'volkswagen|tiguan':        { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4509, width: 1839, height: 1658, wheelbase: 2681, weight: 1530, trunk: 615, topSpeed: '210 km/s' },
  'volkswagen|polo':          { price2024: 950000, price2020: 620000, price2015: 350000, length: 4053, width: 1751, height: 1446, wheelbase: 2564, weight: 1100, trunk: 351, topSpeed: '195 km/s' },
  'volkswagen|t-roc':         { price2024: 1400000, price2020: 950000, length: 4236, width: 1819, height: 1573, wheelbase: 2590, weight: 1355, trunk: 445, topSpeed: '210 km/s' },
  'volkswagen|t-cross':       { price2024: 1200000, price2020: 800000, length: 4108, width: 1760, height: 1559, wheelbase: 2551, weight: 1215, trunk: 385, topSpeed: '195 km/s' },
  'volkswagen|touareg':       { price2024: 4000000, price2020: 2500000, price2015: 1400000, length: 4878, width: 1984, height: 1717, wheelbase: 2899, weight: 2095, trunk: 810, topSpeed: '250 km/s' },
  'volkswagen|arteon':        { price2024: 2200000, price2020: 1400000, length: 4866, width: 1871, height: 1450, wheelbase: 2841, weight: 1540, trunk: 563, topSpeed: '250 km/s' },
  'volkswagen|id-3':          { price2024: 1600000, length: 4261, width: 1809, height: 1552, wheelbase: 2765, weight: 1760, trunk: 385, topSpeed: '160 km/s' },
  'volkswagen|id-4':          { price2024: 2000000, length: 4584, width: 1852, height: 1640, wheelbase: 2766, weight: 1930, trunk: 543, topSpeed: '160 km/s' },
  'volkswagen|id-5':          { price2024: 2200000, length: 4599, width: 1852, height: 1618, wheelbase: 2766, weight: 1950, trunk: 549, topSpeed: '160 km/s' },
  'volkswagen|id-7':          { price2024: 2800000, length: 4961, width: 1862, height: 1536, wheelbase: 2971, weight: 2070, trunk: 532, topSpeed: '180 km/s' },
  'volkswagen|amarok':        { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 5350, width: 1920, height: 1888, wheelbase: 3270, weight: 2200, trunk: null, topSpeed: '180 km/s' },
  'volkswagen|beetle':        { price2024: 600000, price2020: 400000, price2015: 230000, length: 4278, width: 1808, height: 1486, wheelbase: 2537, weight: 1205, trunk: 310, topSpeed: '200 km/s' },
  'volkswagen|caddy':         { price2024: 1400000, price2020: 900000, price2015: 500000, length: 4500, width: 1855, height: 1833, wheelbase: 2755, weight: 1530, trunk: 834, topSpeed: '195 km/s' },
  'volkswagen|caravelle':     { price2024: 2500000, price2020: 1600000, price2015: 850000, length: 4904, width: 1904, height: 1990, wheelbase: 3000, weight: 2030, trunk: 1200, topSpeed: '192 km/s' },
  'volkswagen|cc':            { price2024: 700000, price2020: 480000, price2015: 280000, length: 4812, width: 1855, height: 1417, wheelbase: 2712, weight: 1495, trunk: 532, topSpeed: '240 km/s' },
  'volkswagen|crafter':       { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 5986, width: 2036, height: 2590, wheelbase: 3640, weight: 2250, trunk: 9000, topSpeed: '155 km/s' },
  'volkswagen|e-up':          { price2024: 700000, price2020: 480000, length: 3600, width: 1641, height: 1489, wheelbase: 2420, weight: 1235, trunk: 250, topSpeed: '130 km/s' },
  'volkswagen|eos':           { price2024: 500000, price2020: 350000, price2015: 200000, length: 4410, width: 1791, height: 1443, wheelbase: 2578, weight: 1530, trunk: 205, topSpeed: '222 km/s' },
  'volkswagen|golf-gte':      { price2024: 1700000, price2020: 1100000, length: 4284, width: 1789, height: 1456, wheelbase: 2636, weight: 1580, trunk: 272, topSpeed: '224 km/s' },
  'volkswagen|golf-gti':      { price2024: 2000000, price2020: 1300000, price2015: 700000, length: 4284, width: 1789, height: 1456, wheelbase: 2636, weight: 1395, trunk: 374, topSpeed: '250 km/s' },
  'volkswagen|golf-r':        { price2024: 2500000, price2020: 1700000, length: 4284, width: 1789, height: 1456, wheelbase: 2636, weight: 1470, trunk: 374, topSpeed: '250 km/s' },
  'volkswagen|golf-sportsvan': { price2024: 800000, price2020: 530000, price2015: 300000, length: 4338, width: 1807, height: 1578, wheelbase: 2635, weight: 1355, trunk: 500, topSpeed: '205 km/s' },
  'volkswagen|golf-variant':  { price2024: 1600000, price2020: 1050000, price2015: 580000, length: 4633, width: 1789, height: 1498, wheelbase: 2686, weight: 1385, trunk: 611, topSpeed: '220 km/s' },
  'volkswagen|id-buzz':       { price2024: 3500000, length: 4712, width: 1985, height: 1927, wheelbase: 2989, weight: 2468, trunk: 1121, topSpeed: '145 km/s' },
  'volkswagen|jetta':         { price2024: 850000, price2020: 550000, price2015: 310000, length: 4640, width: 1778, height: 1473, wheelbase: 2651, weight: 1310, trunk: 510, topSpeed: '210 km/s' },
  'volkswagen|multivan':      { price2024: 3000000, price2020: 2000000, price2015: 1100000, length: 4973, width: 1941, height: 1903, wheelbase: 3124, weight: 2100, trunk: 469, topSpeed: '188 km/s' },
  'volkswagen|passat-variant': { price2024: 2100000, price2020: 1350000, price2015: 730000, length: 4866, width: 1832, height: 1517, wheelbase: 2871, weight: 1530, trunk: 650, topSpeed: '233 km/s' },
  'volkswagen|scirocco':      { price2024: 600000, price2020: 420000, price2015: 240000, length: 4256, width: 1810, height: 1404, wheelbase: 2578, weight: 1290, trunk: 312, topSpeed: '230 km/s' },
  'volkswagen|sharan':        { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4854, width: 1904, height: 1720, wheelbase: 2919, weight: 1720, trunk: 710, topSpeed: '210 km/s' },
  'volkswagen|taigo':         { price2024: 1200000, price2020: 800000, length: 4266, width: 1757, height: 1494, wheelbase: 2566, weight: 1235, trunk: 438, topSpeed: '200 km/s' },
  'volkswagen|transporter':   { price2024: 2200000, price2020: 1400000, price2015: 750000, length: 4904, width: 1904, height: 1990, wheelbase: 3000, weight: 1870, trunk: 5800, topSpeed: '192 km/s' },
  'volkswagen|up':            { price2024: 500000, price2020: 340000, price2015: 190000, length: 3600, width: 1641, height: 1489, wheelbase: 2420, weight: 929, trunk: 251, topSpeed: '175 km/s' },

  // ══════════════════════════════════════════════════════════════
  // VOLVO
  // ══════════════════════════════════════════════════════════════
  'volvo|xc60':          { price2024: 2800000, price2020: 1800000, price2015: 1000000, length: 4688, width: 1902, height: 1658, wheelbase: 2865, weight: 1845, trunk: 468, topSpeed: '210 km/s' },
  'volvo|xc90':          { price2024: 4000000, price2020: 2500000, price2015: 1400000, length: 4953, width: 2008, height: 1776, wheelbase: 2984, weight: 2100, trunk: 262, topSpeed: '210 km/s' },
  'volvo|xc40':          { price2024: 2000000, price2020: 1300000, length: 4425, width: 1863, height: 1647, wheelbase: 2702, weight: 1640, trunk: 452, topSpeed: '205 km/s' },
  'volvo|s60':           { price2024: 2500000, price2020: 1600000, price2015: 850000, length: 4761, width: 1850, height: 1431, wheelbase: 2872, weight: 1710, trunk: 442, topSpeed: '250 km/s' },
  'volvo|s90':           { price2024: 3500000, price2020: 2200000, length: 4963, width: 1890, height: 1443, wheelbase: 2941, weight: 1750, trunk: 500, topSpeed: '250 km/s' },
  'volvo|v60':           { price2024: 2600000, price2020: 1700000, price2015: 900000, length: 4761, width: 1850, height: 1427, wheelbase: 2872, weight: 1750, trunk: 529, topSpeed: '245 km/s' },
  'volvo|v90':           { price2024: 3600000, price2020: 2300000, length: 4936, width: 1890, height: 1475, wheelbase: 2941, weight: 1820, trunk: 560, topSpeed: '250 km/s' },
  'volvo|c40':           { price2024: 2200000, length: 4440, width: 1873, height: 1596, wheelbase: 2702, weight: 2040, trunk: 413, topSpeed: '180 km/s' },
  'volvo|ex30':          { price2024: 1600000, length: 4233, width: 1836, height: 1549, wheelbase: 2650, weight: 1790, trunk: 318, topSpeed: '180 km/s' },
  'volvo|ex90':          { price2024: 4500000, length: 5037, width: 2032, height: 1747, wheelbase: 3100, weight: 2818, trunk: 655, topSpeed: '180 km/s' },
  'volvo|v40':           { price2024: 1000000, price2020: 650000, price2015: 370000, length: 4369, width: 1802, height: 1420, wheelbase: 2647, weight: 1395, trunk: 335, topSpeed: '210 km/s' },
  'volvo|v40-cross-country': { price2024: 1100000, price2020: 700000, price2015: 400000, length: 4370, width: 1802, height: 1470, wheelbase: 2647, weight: 1420, trunk: 335, topSpeed: '210 km/s' },
  'volvo|v60-cross-country': { price2024: 2800000, price2020: 1800000, length: 4774, width: 1891, height: 1522, wheelbase: 2872, weight: 1810, trunk: 519, topSpeed: '210 km/s' },
  'volvo|v90-cross-country': { price2024: 3800000, price2020: 2400000, length: 4939, width: 1908, height: 1543, wheelbase: 2941, weight: 1860, trunk: 560, topSpeed: '210 km/s' },
  'volvo|xc40-recharge':     { price2024: 2200000, length: 4425, width: 1863, height: 1647, wheelbase: 2702, weight: 2090, trunk: 419, topSpeed: '180 km/s' },

  // ══════════════════════════════════════════════════════════════
  // WEY
  // ══════════════════════════════════════════════════════════════
  'wey|coffee-01':  { price2024: 1500000, length: 4870, width: 1890, height: 1710, wheelbase: 2745, weight: 2150, trunk: 458, topSpeed: '180 km/s' },
  'wey|coffee-02':  { price2024: 1300000, length: 4510, width: 1870, height: 1680, wheelbase: 2745, weight: 1990, trunk: 380, topSpeed: '180 km/s' },
};

module.exports = { VERIFIED_DATA_PART3 };
