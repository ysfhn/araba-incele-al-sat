/**
 * Doğrulanmış Model Verileri — Part 4
 * Eksik kalan modeller (ek/niş modeller)
 */

const VERIFIED_DATA_PART4 = {
  // ─── McLAREN ───
  'mclaren|720s-spider':  { price2024: 18000000, price2020: 14000000, length: 4543, width: 2059, height: 1196, wheelbase: 2670, weight: 1332, trunk: 150, topSpeed: '341 km/s' },

  // ─── MERCEDES-BENZ ───
  'mercedes-benz|a-serisi-sedan': { price2024: 2350000, price2020: 1500000, length: 4549, width: 1796, height: 1446, wheelbase: 2729, weight: 1420, trunk: 420, topSpeed: '225 km/s' },
  'mercedes-benz|amg-a-35':  { price2024: 3200000, price2020: 2200000, length: 4419, width: 1796, height: 1440, wheelbase: 2729, weight: 1510, trunk: 370, topSpeed: '250 km/s' },
  'mercedes-benz|amg-a-45':  { price2024: 4000000, price2020: 2800000, length: 4419, width: 1796, height: 1440, wheelbase: 2729, weight: 1550, trunk: 370, topSpeed: '270 km/s' },
  'mercedes-benz|amg-c-43':  { price2024: 4500000, price2020: 3000000, length: 4751, width: 1820, height: 1438, wheelbase: 2865, weight: 1685, trunk: 455, topSpeed: '250 km/s' },
  'mercedes-benz|amg-c-63':  { price2024: 6000000, price2020: 4000000, length: 4751, width: 1820, height: 1438, wheelbase: 2865, weight: 1765, trunk: 455, topSpeed: '280 km/s' },
  'mercedes-benz|amg-e-53':  { price2024: 6500000, price2020: 4200000, length: 4949, width: 1880, height: 1468, wheelbase: 2961, weight: 1880, trunk: 540, topSpeed: '250 km/s' },
  'mercedes-benz|amg-e-63':  { price2024: 8000000, price2020: 5500000, length: 4949, width: 1880, height: 1468, wheelbase: 2961, weight: 1950, trunk: 540, topSpeed: '300 km/s' },
  'mercedes-benz|amg-g-63':  { price2024: 12000000, price2020: 8000000, length: 4873, width: 1984, height: 1969, wheelbase: 2890, weight: 2560, trunk: 667, topSpeed: '220 km/s' },
  'mercedes-benz|amg-glc-43': { price2024: 5000000, price2020: 3300000, length: 4716, width: 1890, height: 1640, wheelbase: 2882, weight: 1920, trunk: 550, topSpeed: '250 km/s' },
  'mercedes-benz|amg-glc-63': { price2024: 6500000, price2020: 4500000, length: 4716, width: 1890, height: 1640, wheelbase: 2882, weight: 2000, trunk: 550, topSpeed: '280 km/s' },
  'mercedes-benz|amg-gle-53': { price2024: 7000000, price2020: 4500000, length: 4924, width: 1947, height: 1772, wheelbase: 2995, weight: 2290, trunk: 630, topSpeed: '250 km/s' },
  'mercedes-benz|amg-gle-63': { price2024: 9000000, price2020: 6000000, length: 4924, width: 1947, height: 1772, wheelbase: 2995, weight: 2370, trunk: 630, topSpeed: '280 km/s' },
  'mercedes-benz|amg-gt-4-kapi': { price2024: 10000000, price2020: 7000000, length: 5054, width: 1953, height: 1447, wheelbase: 2951, weight: 2045, trunk: 461, topSpeed: '315 km/s' },
  'mercedes-benz|amg-one':   { price2024: 70000000, length: 4755, width: 2070, height: 1260, wheelbase: 2670, weight: 1695, trunk: 100, topSpeed: '352 km/s' },
  'mercedes-benz|amg-s-63':  { price2024: 12000000, price2020: 7500000, length: 5289, width: 1954, height: 1503, wheelbase: 3216, weight: 2240, trunk: 550, topSpeed: '250 km/s' },
  'mercedes-benz|c-serisi-cabriolet': { price2024: 4200000, price2020: 2800000, length: 4686, width: 1810, height: 1405, wheelbase: 2840, weight: 1740, trunk: 360, topSpeed: '250 km/s' },
  'mercedes-benz|cla-shooting-brake': { price2024: 3000000, price2020: 1900000, length: 4688, width: 1830, height: 1439, wheelbase: 2729, weight: 1515, trunk: 505, topSpeed: '240 km/s' },
  'mercedes-benz|cls':       { price2024: 5500000, price2020: 3500000, length: 4999, width: 1896, height: 1432, wheelbase: 2939, weight: 1830, trunk: 520, topSpeed: '250 km/s' },
  'mercedes-benz|e-serisi-cabriolet': { price2024: 6000000, price2020: 3800000, length: 4849, width: 1860, height: 1430, wheelbase: 2873, weight: 1910, trunk: 385, topSpeed: '250 km/s' },
  'mercedes-benz|eqv':       { price2024: 5000000, length: 5140, width: 1928, height: 1990, wheelbase: 3200, weight: 2755, trunk: 1030, topSpeed: '160 km/s' },
  'mercedes-benz|glb':       { price2024: 3000000, price2020: 1900000, length: 4634, width: 1834, height: 1659, wheelbase: 2829, weight: 1580, trunk: 570, topSpeed: '220 km/s' },
  'mercedes-benz|gls':       { price2024: 8000000, price2020: 5000000, length: 5207, width: 1956, height: 1823, wheelbase: 3135, weight: 2435, trunk: 890, topSpeed: '250 km/s' },
  'mercedes-benz|maybach-gls': { price2024: 14000000, price2020: 9000000, length: 5205, width: 2030, height: 1838, wheelbase: 3135, weight: 2785, trunk: 880, topSpeed: '250 km/s' },
  'mercedes-benz|sl':        { price2024: 9000000, price2020: 6000000, length: 4705, width: 1915, height: 1353, wheelbase: 2700, weight: 1810, trunk: 240, topSpeed: '295 km/s' },
  'mercedes-benz|slc':       { price2024: 3500000, price2020: 2300000, length: 4129, width: 1810, height: 1301, wheelbase: 2430, weight: 1510, trunk: 225, topSpeed: '245 km/s' },
  'mercedes-benz|slk':       { price2024: 2800000, price2020: 1800000, price2015: 900000, length: 4134, width: 1810, height: 1301, wheelbase: 2430, weight: 1465, trunk: 225, topSpeed: '240 km/s' },

  // ─── MG ───
  'mg|cyberster':     { price2024: 2500000, length: 4535, width: 1913, height: 1329, wheelbase: 2690, weight: 1985, trunk: 249, topSpeed: '200 km/s' },
  'mg|ehs':           { price2024: 1600000, length: 4574, width: 1876, height: 1664, wheelbase: 2720, weight: 1740, trunk: 448, topSpeed: '190 km/s' },
  'mg|mg-one':        { price2024: 1350000, length: 4579, width: 1866, height: 1625, wheelbase: 2670, weight: 1480, trunk: 505, topSpeed: '195 km/s' },
  'mg|mg3':           { price2024: 850000, length: 4113, width: 1797, height: 1502, wheelbase: 2570, weight: 1195, trunk: 293, topSpeed: '185 km/s' },
  'mg|mg4':           { price2024: 1200000, length: 4287, width: 1836, height: 1516, wheelbase: 2705, weight: 1655, trunk: 363, topSpeed: '180 km/s' },

  // ─── MINI ───
  'mini|aceman':      { price2024: 2200000, length: 4079, width: 1754, height: 1515, wheelbase: 2604, weight: 1630, trunk: 300, topSpeed: '170 km/s' },
  'mini|cooper-3-kapi': { price2024: 1800000, price2020: 1200000, length: 3850, width: 1727, height: 1432, wheelbase: 2495, weight: 1215, trunk: 210, topSpeed: '220 km/s' },
  'mini|cooper-5-kapi': { price2024: 1900000, price2020: 1250000, length: 4036, width: 1727, height: 1445, wheelbase: 2567, weight: 1245, trunk: 278, topSpeed: '215 km/s' },
  'mini|cooper-se':   { price2024: 2300000, length: 3850, width: 1727, height: 1432, wheelbase: 2495, weight: 1440, trunk: 200, topSpeed: '187 km/s' },
  'mini|countryman-se': { price2024: 2800000, length: 4433, width: 1843, height: 1656, wheelbase: 2670, weight: 1820, trunk: 405, topSpeed: '180 km/s' },
  'mini|jcw-countryman': { price2024: 3200000, length: 4433, width: 1843, height: 1656, wheelbase: 2670, weight: 1660, trunk: 450, topSpeed: '228 km/s' },

  // ─── MITSUBISHI ───
  'mitsubishi|outlander-phev': { price2024: 2500000, price2020: 1600000, length: 4710, width: 1862, height: 1745, wheelbase: 2706, weight: 1900, trunk: 463, topSpeed: '185 km/s' },

  // ─── NISSAN ───
  'nissan|murano':    { price2024: 2800000, price2020: 1800000, price2015: 950000, length: 4887, width: 1915, height: 1691, wheelbase: 2825, weight: 1860, trunk: 900, topSpeed: '195 km/s' },
  'nissan|primastar': { price2024: 1800000, price2020: 1200000, length: 5080, width: 1928, height: 1971, wheelbase: 3098, weight: 1890, trunk: null, topSpeed: '175 km/s' },
  'nissan|skyline':   { price2024: 4500000, price2020: 3000000, price2015: 1500000, length: 4770, width: 1820, height: 1370, wheelbase: 2850, weight: 1640, trunk: 450, topSpeed: '250 km/s' },

  // ─── OMODA ───
  'omoda|c5':         { price2024: 1150000, length: 4400, width: 1830, height: 1585, wheelbase: 2630, weight: 1380, trunk: 360, topSpeed: '190 km/s' },
  'omoda|c7':         { price2024: 1450000, length: 4600, width: 1870, height: 1660, wheelbase: 2700, weight: 1520, trunk: 510, topSpeed: '185 km/s' },
  'omoda|e5':         { price2024: 1350000, length: 4424, width: 1830, height: 1588, wheelbase: 2630, weight: 1750, trunk: 380, topSpeed: '170 km/s' },

  // ─── OPEL ───
  'opel|astra-sedan': { price2024: 1500000, price2020: 900000, price2015: 500000, length: 4702, width: 1871, height: 1482, wheelbase: 2662, weight: 1380, trunk: 510, topSpeed: '215 km/s' },
  'opel|combo-life':  { price2024: 1300000, price2020: 850000, length: 4403, width: 1848, height: 1841, wheelbase: 2785, weight: 1480, trunk: 597, topSpeed: '175 km/s' },
  'opel|insignia-sports-tourer': { price2024: 1800000, price2020: 1150000, price2015: 600000, length: 4986, width: 1863, height: 1500, wheelbase: 2829, weight: 1530, trunk: 560, topSpeed: '230 km/s' },
  'opel|zafira-life':  { price2024: 2200000, price2020: 1400000, length: 5309, width: 1920, height: 1990, wheelbase: 3275, weight: 1920, trunk: 1500, topSpeed: '175 km/s' },

  // ─── PEUGEOT ───
  'peugeot|e-5008':   { price2024: 3000000, length: 4791, width: 1895, height: 1694, wheelbase: 2900, weight: 2100, trunk: 750, topSpeed: '170 km/s' },
  'peugeot|e-traveller': { price2024: 3500000, length: 5309, width: 1920, height: 1990, wheelbase: 3275, weight: 2380, trunk: 1500, topSpeed: '130 km/s' },

  // ─── POLESTAR ───
  'polestar|polestar-3': { price2024: 4500000, length: 4900, width: 2120, height: 1614, wheelbase: 2985, weight: 2584, trunk: 484, topSpeed: '210 km/s' },
  'polestar|polestar-4': { price2024: 3800000, length: 4839, width: 2139, height: 1544, wheelbase: 2999, weight: 2405, trunk: 526, topSpeed: '200 km/s' },
  'polestar|polestar-5': { price2024: 5500000, length: 4890, width: 1968, height: 1428, wheelbase: 2900, weight: 2210, trunk: 450, topSpeed: '250 km/s' },

  // ─── PORSCHE ───
  'porsche|911-cabriolet': { price2024: 11000000, price2020: 7500000, price2015: 4500000, length: 4519, width: 1852, height: 1297, wheelbase: 2450, weight: 1550, trunk: 132, topSpeed: '291 km/s' },
  'porsche|911-carrera':   { price2024: 10500000, price2020: 7200000, price2015: 4200000, length: 4519, width: 1852, height: 1300, wheelbase: 2450, weight: 1480, trunk: 132, topSpeed: '293 km/s' },
  'porsche|macan-electric': { price2024: 6000000, length: 4784, width: 1938, height: 1622, wheelbase: 2893, weight: 2295, trunk: 540, topSpeed: '260 km/s' },
  'porsche|taycan-sport-turismo': { price2024: 8000000, length: 4963, width: 1966, height: 1395, wheelbase: 2900, weight: 2195, trunk: 446, topSpeed: '250 km/s' },

  // ─── PROTON ───
  'proton|persona':   { price2024: 600000, length: 4386, width: 1689, height: 1524, wheelbase: 2555, weight: 1045, trunk: 508, topSpeed: '175 km/s' },
  'proton|x90':       { price2024: 1400000, length: 4771, width: 1870, height: 1746, wheelbase: 2815, weight: 1700, trunk: 543, topSpeed: '185 km/s' },

  // ─── RAM ───
  'ram|3500':         { price2024: 4500000, price2020: 3000000, length: 5867, width: 2030, height: 1981, wheelbase: 3569, weight: 3200, trunk: null, topSpeed: '175 km/s' },

  // ─── RENAULT ───
  'renault|5-e-tech': { price2024: 1400000, length: 3920, width: 1774, height: 1500, wheelbase: 2540, weight: 1400, trunk: 277, topSpeed: '150 km/s' },
  'renault|arkana':   { price2024: 1500000, price2020: 1000000, length: 4568, width: 1821, height: 1576, wheelbase: 2720, weight: 1380, trunk: 513, topSpeed: '200 km/s' },
  'renault|clio-grandtour': { price2024: 1050000, price2020: 750000, price2015: 420000, length: 4256, width: 1798, height: 1440, wheelbase: 2583, weight: 1200, trunk: 443, topSpeed: '198 km/s' },
  'renault|kangoo-e-tech': { price2024: 1800000, length: 4486, width: 1919, height: 1838, wheelbase: 2716, weight: 1920, trunk: 850, topSpeed: '130 km/s' },
  'renault|laguna':   { price2024: 1200000, price2020: 800000, price2015: 450000, length: 4695, width: 1830, height: 1462, wheelbase: 2756, weight: 1450, trunk: 450, topSpeed: '215 km/s' },
  'renault|megane-grandtour': { price2024: 1400000, price2020: 900000, price2015: 520000, length: 4635, width: 1814, height: 1447, wheelbase: 2669, weight: 1350, trunk: 521, topSpeed: '210 km/s' },
  'renault|scenic-e-tech': { price2024: 2200000, length: 4470, width: 1866, height: 1571, wheelbase: 2785, weight: 1860, trunk: 545, topSpeed: '170 km/s' },
  'renault|symbioz':  { price2024: 1650000, length: 4413, width: 1797, height: 1576, wheelbase: 2639, weight: 1360, trunk: 492, topSpeed: '190 km/s' },

  // ─── RIVIAN ───
  'rivian|r2':        { price2024: 3000000, length: 4520, width: 1990, height: 1710, wheelbase: 2830, weight: 2100, trunk: 550, topSpeed: '200 km/s' },
  'rivian|r3':        { price2024: 2500000, length: 4300, width: 1920, height: 1640, wheelbase: 2700, weight: 1950, trunk: 480, topSpeed: '190 km/s' },

  // ─── ROVER ───
  'rover|416':        { price2024: 200000, price2015: 100000, length: 4382, width: 1695, height: 1395, wheelbase: 2545, weight: 1100, trunk: 460, topSpeed: '190 km/s' },

  // ─── SAAB ───
  'saab|9-3-sportcombi':  { price2024: 600000, price2015: 350000, length: 4655, width: 1762, height: 1467, wheelbase: 2675, weight: 1460, trunk: 425, topSpeed: '220 km/s' },
  'saab|9-5-sportcombi':  { price2024: 700000, price2015: 400000, length: 4880, width: 1849, height: 1500, wheelbase: 2837, weight: 1680, trunk: 527, topSpeed: '230 km/s' },

  // ─── SKODA ───
  'skoda|elroq':      { price2024: 1800000, length: 4488, width: 1884, height: 1625, wheelbase: 2765, weight: 1920, trunk: 490, topSpeed: '180 km/s' },
  'skoda|enyaq-coupe-iv': { price2024: 2400000, length: 4653, width: 1879, height: 1617, wheelbase: 2770, weight: 2050, trunk: 570, topSpeed: '180 km/s' },
  'skoda|enyaq-iv':   { price2024: 2200000, length: 4649, width: 1879, height: 1616, wheelbase: 2770, weight: 2010, trunk: 585, topSpeed: '180 km/s' },
  'skoda|epiq':       { price2024: 1300000, length: 4100, width: 1800, height: 1560, wheelbase: 2600, weight: 1600, trunk: 410, topSpeed: '170 km/s' },

  // ─── SMART ───
  'smart|fortwo-cabrio': { price2024: 750000, price2020: 500000, length: 2695, width: 1663, height: 1555, wheelbase: 1873, weight: 940, trunk: 260, topSpeed: '155 km/s' },
  'smart|smart-1':    { price2024: 1800000, length: 4270, width: 1844, height: 1636, wheelbase: 2750, weight: 1820, trunk: 323, topSpeed: '180 km/s' },
  'smart|smart-3':    { price2024: 1600000, length: 4400, width: 1844, height: 1556, wheelbase: 2785, weight: 1790, trunk: 370, topSpeed: '180 km/s' },

  // ─── SSANGYONG ───
  'ssangyong|actyon':  { price2024: 900000, price2020: 600000, price2015: 350000, length: 4410, width: 1810, height: 1695, wheelbase: 2640, weight: 1540, trunk: 486, topSpeed: '180 km/s' },
  'ssangyong|kyron':   { price2024: 700000, price2020: 500000, price2015: 300000, length: 4660, width: 1880, height: 1755, wheelbase: 2740, weight: 1830, trunk: 670, topSpeed: '175 km/s' },
  'ssangyong|rodius':  { price2024: 900000, price2020: 600000, price2015: 350000, length: 5130, width: 1915, height: 1850, wheelbase: 3000, weight: 2140, trunk: 875, topSpeed: '180 km/s' },

  // ─── SUZUKI ───
  'suzuki|alto':      { price2024: 450000, price2020: 280000, price2015: 180000, length: 3395, width: 1475, height: 1470, wheelbase: 2360, weight: 650, trunk: 177, topSpeed: '150 km/s' },
  'suzuki|ciaz':      { price2024: 700000, price2020: 450000, length: 4490, width: 1730, height: 1475, wheelbase: 2650, weight: 1005, trunk: 510, topSpeed: '190 km/s' },

  // ─── TATA ───
  'tata|altroz':      { price2024: 700000, length: 3990, width: 1755, height: 1523, wheelbase: 2501, weight: 1035, trunk: 345, topSpeed: '180 km/s' },
  'tata|tiago':       { price2024: 450000, length: 3765, width: 1677, height: 1535, wheelbase: 2400, weight: 970, trunk: 242, topSpeed: '165 km/s' },
  'tata|tigor':       { price2024: 550000, length: 3993, width: 1677, height: 1532, wheelbase: 2450, weight: 1010, trunk: 419, topSpeed: '170 km/s' },

  // ─── TESLA ───
  'tesla|roadster':   { price2024: 12000000, length: 4350, width: 1975, height: 1140, wheelbase: 2600, weight: 1900, trunk: 200, topSpeed: '400 km/s' },

  // ─── TOGG ───
  'togg|t10s':        { price2024: 1650000, length: 4760, width: 1900, height: 1508, wheelbase: 2830, weight: 1920, trunk: 480, topSpeed: '200 km/s' },

  // ─── TOYOTA ───
  'toyota|century':   { price2024: 10000000, length: 5335, width: 2010, height: 1505, wheelbase: 3090, weight: 2390, trunk: 560, topSpeed: '210 km/s' },
  'toyota|crown':     { price2024: 3200000, length: 4930, width: 1840, height: 1540, wheelbase: 2850, weight: 1770, trunk: 450, topSpeed: '200 km/s' },
  'toyota|gr86':      { price2024: 1800000, length: 4265, width: 1775, height: 1310, wheelbase: 2575, weight: 1270, trunk: 240, topSpeed: '230 km/s' },
  'toyota|mirai':     { price2024: 3000000, length: 4975, width: 1885, height: 1470, wheelbase: 2920, weight: 1960, trunk: 321, topSpeed: '175 km/s' },
  'toyota|proace-city-verso': { price2024: 1400000, price2020: 950000, length: 4403, width: 1848, height: 1841, wheelbase: 2785, weight: 1475, trunk: 775, topSpeed: '175 km/s' },
  'toyota|proace-verso':      { price2024: 2200000, price2020: 1500000, length: 5309, width: 1920, height: 1990, wheelbase: 3275, weight: 1935, trunk: 1500, topSpeed: '175 km/s' },

  // ─── VOLKSWAGEN ───
  'volkswagen|arteon-shooting-brake': { price2024: 2600000, price2020: 1700000, length: 4866, width: 1871, height: 1469, wheelbase: 2837, weight: 1600, trunk: 565, topSpeed: '250 km/s' },
  'volkswagen|t-roc-cabriolet':       { price2024: 2000000, price2020: 1300000, length: 4268, width: 1819, height: 1522, wheelbase: 2630, weight: 1530, trunk: 280, topSpeed: '205 km/s' },
  'volkswagen|tiguan-allspace':       { price2024: 2400000, price2020: 1600000, length: 4701, width: 1839, height: 1674, wheelbase: 2787, weight: 1670, trunk: 700, topSpeed: '210 km/s' },
  'volkswagen|touran':                { price2024: 1800000, price2020: 1200000, price2015: 650000, length: 4527, width: 1829, height: 1674, wheelbase: 2791, weight: 1560, trunk: 834, topSpeed: '205 km/s' },

  // ─── VOLVO ───
  'volvo|c40-recharge': { price2024: 2800000, length: 4440, width: 1873, height: 1591, wheelbase: 2702, weight: 2080, trunk: 413, topSpeed: '180 km/s' },
  'volvo|em90':       { price2024: 4500000, length: 5206, width: 2024, height: 1859, wheelbase: 3205, weight: 2710, trunk: 650, topSpeed: '180 km/s' },

  // ─── WEY ───
  'wey|latte':        { price2024: 1600000, length: 4668, width: 1890, height: 1730, wheelbase: 2745, weight: 1770, trunk: 490, topSpeed: '185 km/s' },
  'wey|mocha':        { price2024: 2000000, length: 4875, width: 1960, height: 1692, wheelbase: 2915, weight: 2090, trunk: 525, topSpeed: '200 km/s' },

  // ─── DB Slug Alias'ları (Part3'teki slug farklılıkları) ───
  'mercedes-benz|cla': { price2024: 2200000, price2020: 1400000, length: 4688, width: 1830, height: 1439, wheelbase: 2729, weight: 1470, trunk: 460, topSpeed: '240 km/s' },
  'mercedes-benz|gla': { price2024: 2200000, price2020: 1400000, length: 4410, width: 1834, height: 1611, wheelbase: 2729, weight: 1485, trunk: 435, topSpeed: '220 km/s' },
  'mercedes-benz|glc': { price2024: 3200000, price2020: 2000000, price2015: 1100000, length: 4716, width: 1890, height: 1639, wheelbase: 2888, weight: 1790, trunk: 600, topSpeed: '237 km/s' },
  'mercedes-benz|gle': { price2024: 5000000, price2020: 3200000, price2015: 1700000, length: 4924, width: 2020, height: 1797, wheelbase: 2995, weight: 2170, trunk: 630, topSpeed: '240 km/s' },
  'polestar|polestar-2': { price2024: 2500000, price2020: 1800000, length: 4606, width: 1859, height: 1482, wheelbase: 2735, weight: 1935, trunk: 405, topSpeed: '205 km/s' },
  'renault|taliant':  { price2024: 850000, price2020: 600000, length: 4213, width: 1734, height: 1466, wheelbase: 2604, weight: 1100, trunk: 510, topSpeed: '185 km/s' },
};

module.exports = { VERIFIED_DATA_PART4 };
