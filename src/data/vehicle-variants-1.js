/**
 * Araç Varyant Veritabanı – Parça 1/4
 * Alfa Romeo → Dodge (Marka sırasıyla)
 * bodyType: sedan | hatchback | suv | crossover | coupe | cabrio | station_wagon | minivan | pickup
 */
const VARIANTS_PART1 = {
  'alfa-romeo': {
    'giulia': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1995, packages: ['Super','Ti','Veloce'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 280 HP', hp: 280, cc: 1995, packages: ['Veloce','Quadrifoglio'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 JTD 160 HP', hp: 160, cc: 2143, packages: ['Super','Ti'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 JTD 190 HP', hp: 190, cc: 2143, packages: ['Super','Ti','Veloce'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 510 HP', hp: 510, cc: 2891, packages: ['Quadrifoglio'] },
    ]},
    'giulietta': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Turbo 120 HP', hp: 120, cc: 1368, packages: ['Distinctive','Super','Sprint'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 170 HP', hp: 170, cc: 1368, packages: ['Distinctive','Super','Veloce'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.6 JTD 120 HP', hp: 120, cc: 1598, packages: ['Distinctive','Super'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 JTD 170 HP', hp: 170, cc: 1956, packages: ['Distinctive','Super','Veloce'] },
    ]},
    'stelvio': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1995, packages: ['Super','Ti','Sprint'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 280 HP', hp: 280, cc: 1995, packages: ['Veloce','Ti'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 JTD 190 HP', hp: 190, cc: 2143, packages: ['Super','Ti','Veloce'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 510 HP', hp: 510, cc: 2891, packages: ['Quadrifoglio'] },
    ]},
    'tonale': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 130 HP', hp: 130, cc: 1469, packages: ['Super','Ti','Sprint'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo Hybrid 160 HP', hp: 160, cc: 1469, packages: ['Super','Ti','Veloce','Speciale'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.3 PHEV 280 HP', hp: 280, cc: 1332, packages: ['Veloce','Speciale'] },
    ]},
    'mito': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 78 HP', hp: 78, cc: 1368, packages: ['Distinctive','Progression'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 135 HP', hp: 135, cc: 1368, packages: ['Distinctive','Sprint','Veloce'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 JTDm 95 HP', hp: 95, cc: 1248, packages: ['Distinctive','Super'] },
    ]},
    '159': { years: [2005,2006,2007,2008,2009,2010,2011], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.8 TBi 200 HP', hp: 200, cc: 1742, packages: ['Distinctive','Ti'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.9 JTDm 150 HP', hp: 150, cc: 1910, packages: ['Distinctive','Ti'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.4 JTDm 200 HP', hp: 200, cc: 2387, packages: ['Distinctive','Ti'] },
    ]},
    '156': { years: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 TS 120 HP', hp: 120, cc: 1598, packages: ['Distinctive'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '2.0 TS 155 HP', hp: 155, cc: 1970, packages: ['Distinctive','Selespeed'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.9 JTD 115 HP', hp: 115, cc: 1910, packages: ['Distinctive'] },
    ]},
    '147': { years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 TS 120 HP', hp: 120, cc: 1598, packages: ['Distinctive','Progression'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.9 JTD 115 HP', hp: 115, cc: 1910, packages: ['Distinctive'] },
    ]},
    'gt': { years: [2003,2004,2005,2006,2007,2008,2009,2010], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 JTS 165 HP', hp: 165, cc: 1970, packages: ['Distinctive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.2 V6 240 HP', hp: 240, cc: 3179, packages: ['Distinctive'] },
    ]},
    'brera': { years: [2005,2006,2007,2008,2009,2010], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.2 JTS 185 HP', hp: 185, cc: 2198, packages: ['Sky Window'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.2 V6 260 HP', hp: 260, cc: 3195, packages: ['Q4'] },
    ]},
    'spider': { years: [2006,2007,2008,2009,2010,2011], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.2 JTS 185 HP', hp: 185, cc: 2198, packages: ['Distinctive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.2 V6 260 HP', hp: 260, cc: 3195, packages: ['Q4'] },
    ]},
    '4c': { years: [2013,2014,2015,2016,2017,2018,2019,2020], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.75 TBi 240 HP', hp: 240, cc: 1742, packages: ['Launch Edition','Competizione'] },
    ]},
    '33-stradale': { years: [2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Twin-Turbo 620 HP', hp: 620, cc: 2992, packages: ['33 Stradale'] },
    ]},
  },
  'aston-martin': {
    'db11': { years: [2016,2017,2018,2019,2020,2021,2022], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 510 HP', hp: 510, cc: 3982, packages: ['V8'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V12 639 HP', hp: 639, cc: 5204, packages: ['V12','AMR'] },
    ]},
    'db12': { years: [2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 680 HP', hp: 680, cc: 3982, packages: ['Launch Edition','Volante'] },
    ]},
    'dbx': { years: [2020,2021,2022,2023], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3982, packages: ['Standard'] },
    ]},
    'dbx707': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 707 HP', hp: 707, cc: 3982, packages: ['707'] },
    ]},
    'vantage': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 510 HP', hp: 510, cc: 3982, packages: ['Standard','Roadster'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 665 HP', hp: 665, cc: 3982, packages: ['V8 (2024+)'] },
    ]},
    'dbs': { years: [2018,2019,2020,2021,2022,2023], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V12 725 HP', hp: 725, cc: 5204, packages: ['Superleggera','Volante'] },
    ]},
    'rapide': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.9 V12 560 HP', hp: 560, cc: 5935, packages: ['S','AMR'] },
    ]},
    'db9': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.9 V12 517 HP', hp: 517, cc: 5935, packages: ['Coupé','Volante','GT'] },
    ]},
    'vanquish': { years: [2012,2013,2014,2015,2016,2017,2018], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.9 V12 573 HP', hp: 573, cc: 5935, packages: ['Standard','S','Zagato'] },
    ]},
    'valkyrie': { years: [2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '6.5 V12 Hybrid 1160 HP', hp: 1160, cc: 6496, packages: ['AMR Pro'] },
    ]},
  },
  'audi': {
    'a1': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 TFSI 95 HP', hp: 95, cc: 999, packages: ['Attraction','Design','S line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TFSI 116 HP', hp: 116, cc: 999, packages: ['Design','S line','Advanced'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['S line','Advanced'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.6 TDI 116 HP', hp: 116, cc: 1598, packages: ['Design','S line'] },
    ]},
    'a3-sedan': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['Design','S line','Advanced'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['S line','Edition'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['S line','Advanced'] },
    ]},
    'a3-sportback': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['Design','S line','Advanced'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 TDI 116 HP', hp: 116, cc: 1598, packages: ['Design','S line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 TFSI e 204 HP', hp: 204, cc: 1395, packages: ['S line','Advanced'] },
    ]},
    'a4': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 TFSI 150 HP', hp: 150, cc: 1395, packages: ['Design','S line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Design','S line','Advanced'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 252 HP', hp: 252, cc: 1984, packages: ['S line','Quattro'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Design','S line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['S line','Advanced','Quattro'] },
    ]},
    'a4-avant': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Design','S line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['S line','Quattro'] },
    ]},
    'a4-allroad': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 252 HP', hp: 252, cc: 1984, packages: ['Quattro'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['Quattro'] },
    ]},
    'a5-sportback': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Design','S line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['Design','S line'] },
    ]},
    'a5-coupe': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Design','S line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 252 HP', hp: 252, cc: 1984, packages: ['S line','Edition'] },
    ]},
    'a5-cabriolet': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Design','S line'] },
    ]},
    'a6': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Design','S line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['S line','Quattro'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 204 HP', hp: 204, cc: 1968, packages: ['Design','S line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S line','Quattro'] },
    ]},
    'a6-avant': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Design','S line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S line','Quattro'] },
    ]},
    'a6-allroad': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['Quattro'] },
    ]},
    'a7-sportback': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['S line','Quattro'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S line','Quattro'] },
    ]},
    'a8': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['Quattro'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 460 HP', hp: 460, cc: 3996, packages: ['Quattro','L'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['Quattro'] },
    ]},
    'q2': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TFSI 116 HP', hp: 116, cc: 999, packages: ['Design','S line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['Design','S line','Advanced'] },
    ]},
    'q3': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['Design','S line','Advanced'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Design','S line'] },
    ]},
    'q3-sportback': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['S line','Advanced'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['S line'] },
    ]},
    'q4-e-tron': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: '40 e-tron 204 HP', hp: 204, cc: 0, packages: ['Edition','S line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: '50 e-tron Quattro 299 HP', hp: 299, cc: 0, packages: ['S line','Edition One'] },
    ]},
    'q5': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 252 HP', hp: 252, cc: 1984, packages: ['Design','S line','Advanced'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['Design','S line'] },
    ]},
    'q5-sportback': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 265 HP', hp: 265, cc: 1984, packages: ['S line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 204 HP', hp: 204, cc: 1968, packages: ['S line'] },
    ]},
    'q7': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['S line','Quattro'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S line','Quattro'] },
    ]},
    'q8': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['S line','Quattro'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S line','Quattro'] },
    ]},
    'q8-e-tron': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: '55 e-tron Quattro 408 HP', hp: 408, cc: 0, packages: ['S line','Prestige'] },
    ]},
    'e-tron-gt': { years: [2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-tron GT 476 HP', hp: 476, cc: 0, packages: ['Standard'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'RS e-tron GT 646 HP', hp: 646, cc: 0, packages: ['RS'] },
    ]},
    'tt-coupe': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 230 HP', hp: 230, cc: 1984, packages: ['Design','S line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 TFSI 400 HP', hp: 400, cc: 2480, packages: ['RS'] },
    ]},
    'tt-roadster': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 230 HP', hp: 230, cc: 1984, packages: ['S line'] },
    ]},
    'r8': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V10 570 HP', hp: 570, cc: 5204, packages: ['Performance','Quattro'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V10 620 HP', hp: 620, cc: 5204, packages: ['Performance','GT'] },
    ]},
    'rs3': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 TFSI 400 HP', hp: 400, cc: 2480, packages: ['RS3'] },
    ]},
    'rs4-avant': { years: [2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 TFSI 450 HP', hp: 450, cc: 2894, packages: ['Quattro'] },
    ]},
    'rs5': { years: [2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 TFSI 450 HP', hp: 450, cc: 2894, packages: ['Coupé','Sportback'] },
    ]},
    'rs6-avant': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 600 HP', hp: 600, cc: 3996, packages: ['Quattro','Performance'] },
    ]},
    'rs7': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 600 HP', hp: 600, cc: 3996, packages: ['Quattro','Performance'] },
    ]},
    'rs-q8': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 600 HP', hp: 600, cc: 3996, packages: ['Quattro'] },
    ]},
    's3': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 310 HP', hp: 310, cc: 1984, packages: ['S3'] },
    ]},
    's4': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 354 HP', hp: 354, cc: 2995, packages: ['Quattro'] },
    ]},
    's5': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 354 HP', hp: 354, cc: 2995, packages: ['Coupé','Sportback'] },
    ]},
    's6': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 TFSI 450 HP', hp: 450, cc: 2894, packages: ['Quattro'] },
    ]},
    's7': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 TFSI 450 HP', hp: 450, cc: 2894, packages: ['Quattro'] },
    ]},
    's8': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 571 HP', hp: 571, cc: 3996, packages: ['Quattro'] },
    ]},
    'sq5': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 354 HP', hp: 354, cc: 2995, packages: ['Quattro'] },
    ]},
    'sq7': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 507 HP', hp: 507, cc: 3996, packages: ['Quattro'] },
    ]},
    'sq8': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 507 HP', hp: 507, cc: 3996, packages: ['Quattro'] },
    ]},
  },
  'bentley': {
    'continental-gt': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3996, packages: ['Mulliner','S','Speed'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 W12 635 HP', hp: 635, cc: 5950, packages: ['Speed','Mulliner'] },
    ]},
    'continental-gtc': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3996, packages: ['Mulliner','S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 W12 659 HP', hp: 659, cc: 5950, packages: ['Speed'] },
    ]},
    'flying-spur': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3996, packages: ['Mulliner','S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 W12 635 HP', hp: 635, cc: 5950, packages: ['Speed','Mulliner'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.9 V6 Hybrid 544 HP', hp: 544, cc: 2894, packages: ['Hybrid'] },
    ]},
    'bentayga': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3996, packages: ['S','Mulliner'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 Hybrid 449 HP', hp: 449, cc: 2995, packages: ['Hybrid'] },
    ]},
    'bacalar': { years: [2021,2022], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 W12 659 HP', hp: 659, cc: 5950, packages: ['Bacalar'] },
    ]},
    'mulliner': { years: [2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 W12 659 HP', hp: 659, cc: 5950, packages: ['Batur'] },
    ]},
  },
  'bmw': {
    '1-serisi': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '116i 109 HP', hp: 109, cc: 1499, packages: ['Joy','First Edition','M Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '118i 140 HP', hp: 140, cc: 1499, packages: ['First Edition','M Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '120i 178 HP', hp: 178, cc: 1998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '116d 116 HP', hp: 116, cc: 1496, packages: ['Joy','First Edition'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '118d 150 HP', hp: 150, cc: 1995, packages: ['M Sport','First Edition'] },
    ]},
    '2-serisi-gran-coupe': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '218i 140 HP', hp: 140, cc: 1499, packages: ['First Edition','M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '218d 150 HP', hp: 150, cc: 1995, packages: ['First Edition','M Sport'] },
    ]},
    '2-serisi-coupe': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '220i 184 HP', hp: 184, cc: 1998, packages: ['M Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'M240i xDrive 374 HP', hp: 374, cc: 2998, packages: ['M Performance'] },
    ]},
    '2-serisi-active-tourer': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '218i 136 HP', hp: 136, cc: 1499, packages: ['Luxury','M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '218d 150 HP', hp: 150, cc: 1995, packages: ['Luxury','M Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '225e xDrive 245 HP', hp: 245, cc: 1499, packages: ['M Sport'] },
    ]},
    '3-serisi': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '318i 156 HP', hp: 156, cc: 1998, packages: ['First Edition','M Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '320i 184 HP', hp: 184, cc: 1998, packages: ['First Edition','M Sport','Edition Sport Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '330i 258 HP', hp: 258, cc: 1998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '318d 150 HP', hp: 150, cc: 1995, packages: ['First Edition','M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '320d 190 HP', hp: 190, cc: 1995, packages: ['M Sport','Edition Sport Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '330e 292 HP', hp: 292, cc: 1998, packages: ['M Sport'] },
    ]},
    '3-serisi-touring': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '320i 184 HP', hp: 184, cc: 1998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '320d 190 HP', hp: 190, cc: 1995, packages: ['M Sport'] },
    ]},
    '4-serisi-gran-coupe': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '420i 184 HP', hp: 184, cc: 1998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '420d 190 HP', hp: 190, cc: 1995, packages: ['M Sport'] },
    ]},
    '4-serisi-coupe': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '420i 184 HP', hp: 184, cc: 1998, packages: ['M Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '430i 258 HP', hp: 258, cc: 1998, packages: ['M Sport','M Sport Pro'] },
    ]},
    '4-serisi-cabrio': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '420i 184 HP', hp: 184, cc: 1998, packages: ['M Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '430i 258 HP', hp: 258, cc: 1998, packages: ['M Sport'] },
    ]},
    '5-serisi': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '520i 184 HP', hp: 184, cc: 1998, packages: ['Comfort','M Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '530i 252 HP', hp: 252, cc: 1998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '520d 190 HP', hp: 190, cc: 1995, packages: ['Comfort','M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '530d 286 HP', hp: 286, cc: 2993, packages: ['M Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '530e 292 HP', hp: 292, cc: 1998, packages: ['M Sport'] },
    ]},
    '5-serisi-touring': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '520i 184 HP', hp: 184, cc: 1998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '520d 190 HP', hp: 190, cc: 1995, packages: ['M Sport'] },
    ]},
    '6-serisi-gt': { years: [2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '630i 258 HP', hp: 258, cc: 1998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '630d 286 HP', hp: 286, cc: 2993, packages: ['M Sport'] },
    ]},
    '7-serisi': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '740i 333 HP', hp: 333, cc: 2998, packages: ['Pure Excellence','M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '730d 265 HP', hp: 265, cc: 2993, packages: ['Pure Excellence'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'i7 xDrive60 544 HP', hp: 544, cc: 0, packages: ['M Sport'] },
    ]},
    '8-serisi-gran-coupe': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'M850i xDrive 530 HP', hp: 530, cc: 4395, packages: ['M Performance'] },
    ]},
    '8-serisi-coupe': { years: [2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'M850i xDrive 530 HP', hp: 530, cc: 4395, packages: ['M Performance'] },
    ]},
    '8-serisi-cabrio': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'M850i xDrive 530 HP', hp: 530, cc: 4395, packages: ['M Performance'] },
    ]},
    'x1': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '18i 136 HP', hp: 136, cc: 1499, packages: ['sDrive','xLine'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '20i 170 HP', hp: 170, cc: 1998, packages: ['xLine','M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '18d 150 HP', hp: 150, cc: 1995, packages: ['sDrive','xLine'] },
    ]},
    'x2': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '18i 136 HP', hp: 136, cc: 1499, packages: ['sDrive','M Sport X'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '18d 150 HP', hp: 150, cc: 1995, packages: ['sDrive','M Sport X'] },
    ]},
    'x3': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '20i 184 HP', hp: 184, cc: 1998, packages: ['xLine','M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '20d 190 HP', hp: 190, cc: 1995, packages: ['xLine','M Sport'] },
    ]},
    'x4': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '20i 184 HP', hp: 184, cc: 1998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '20d 190 HP', hp: 190, cc: 1995, packages: ['M Sport'] },
    ]},
    'x5': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '40i 340 HP', hp: 340, cc: 2998, packages: ['M Sport','xLine'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '25d 231 HP', hp: 231, cc: 2993, packages: ['xLine'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '30d 286 HP', hp: 286, cc: 2993, packages: ['M Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '45e 394 HP', hp: 394, cc: 2998, packages: ['M Sport'] },
    ]},
    'x6': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '40i 340 HP', hp: 340, cc: 2998, packages: ['M Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '30d 286 HP', hp: 286, cc: 2993, packages: ['M Sport'] },
    ]},
    'x7': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '40i 340 HP', hp: 340, cc: 2998, packages: ['M Sport','Pure Excellence'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '30d 286 HP', hp: 286, cc: 2993, packages: ['M Sport'] },
    ]},
    'xm': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '4.4 V8 Hybrid 653 HP', hp: 653, cc: 4395, packages: ['Label Red'] },
    ]},
    'z4': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '20i 197 HP', hp: 197, cc: 1998, packages: ['M Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'M40i 340 HP', hp: 340, cc: 2998, packages: ['M Performance'] },
    ]},
    'i3': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021], bodyType: 'hatchback', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'i3 170 HP', hp: 170, cc: 0, packages: ['Standard','s'] },
    ]},
    'i4': { years: [2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'eDrive40 340 HP', hp: 340, cc: 0, packages: ['M Sport'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'M50 544 HP', hp: 544, cc: 0, packages: ['M'] },
    ]},
    'i5': { years: [2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'eDrive40 340 HP', hp: 340, cc: 0, packages: ['M Sport'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'M60 xDrive 601 HP', hp: 601, cc: 0, packages: ['M'] },
    ]},
    'i7': { years: [2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'xDrive60 544 HP', hp: 544, cc: 0, packages: ['M Sport'] },
    ]},
    'ix': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'xDrive40 326 HP', hp: 326, cc: 0, packages: ['Sport'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'xDrive50 523 HP', hp: 523, cc: 0, packages: ['Sport','M Sport'] },
    ]},
    'ix1': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'xDrive30 313 HP', hp: 313, cc: 0, packages: ['M Sport'] },
    ]},
    'ix3': { years: [2020,2021,2022,2023], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'eDrive 286 HP', hp: 286, cc: 0, packages: ['Impressive'] },
    ]},
    'm2': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 460 HP', hp: 460, cc: 2993, packages: ['Standard'] },
    ]},
    'm3': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 480 HP', hp: 480, cc: 2993, packages: ['Standard','Competition'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 510 HP', hp: 510, cc: 2993, packages: ['Competition xDrive'] },
    ]},
    'm3-touring': { years: [2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 510 HP', hp: 510, cc: 2993, packages: ['Competition xDrive'] },
    ]},
    'm4': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 510 HP', hp: 510, cc: 2993, packages: ['Competition','CSL'] },
    ]},
    'm4-cabrio': { years: [2021,2022,2023,2024,2025], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 510 HP', hp: 510, cc: 2993, packages: ['Competition xDrive'] },
    ]},
    'm5': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 V8 Turbo 600 HP', hp: 600, cc: 4395, packages: ['Competition'] },
    ]},
    'm8': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 V8 Turbo 625 HP', hp: 625, cc: 4395, packages: ['Competition'] },
    ]},
    'x3-m': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 510 HP', hp: 510, cc: 2993, packages: ['Competition'] },
    ]},
    'x4-m': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 510 HP', hp: 510, cc: 2993, packages: ['Competition'] },
    ]},
    'x5-m': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 V8 Turbo 625 HP', hp: 625, cc: 4395, packages: ['Competition'] },
    ]},
    'x6-m': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 V8 Turbo 625 HP', hp: 625, cc: 4395, packages: ['Competition'] },
    ]},
  },
  'byd': {
    'atto-3': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Standard Range 204 HP', hp: 204, cc: 0, packages: ['Comfort','Design'] },
    ]},
    'dolphin': { years: [2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Boost 177 HP', hp: 177, cc: 0, packages: ['Comfort','Design'] },
    ]},
    'han': { years: [2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 517 HP', hp: 517, cc: 0, packages: ['Flagship'] },
    ]},
    'tang': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 517 HP', hp: 517, cc: 0, packages: ['Flagship'] },
    ]},
    'seal': { years: [2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Standard 313 HP', hp: 313, cc: 0, packages: ['Design'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AWD 530 HP', hp: 530, cc: 0, packages: ['Excellence'] },
    ]},
    'song-plus': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Design'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'DM-i 197 HP', hp: 197, cc: 1498, packages: ['Comfort'] },
    ]},
    'yuan-plus': { years: [2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Comfort','Design'] },
    ]},
    'seal-u': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Comfort'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'DM-i 197 HP', hp: 197, cc: 1498, packages: ['Design'] },
    ]},
  },
  'cadillac': {
    'ct4': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 237 HP', hp: 237, cc: 1998, packages: ['Luxury','Premium Luxury'] }]},
    'ct5': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 237 HP', hp: 237, cc: 1998, packages: ['Luxury','Premium Luxury'] }]},
    'escalade': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 420 HP', hp: 420, cc: 6162, packages: ['Premium Luxury','Sport','Platinum'] }]},
    'xt4': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 237 HP', hp: 237, cc: 1998, packages: ['Luxury','Sport'] }]},
    'xt5': { years: [2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 237 HP', hp: 237, cc: 1998, packages: ['Luxury','Premium Luxury'] }]},
    'xt6': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 237 HP', hp: 237, cc: 1998, packages: ['Luxury','Sport'] }]},
    'lyriq': { years: [2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'RWD 340 HP', hp: 340, cc: 0, packages: ['Tech','Sport'] }]},
    'cts': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 268 HP', hp: 268, cc: 1998, packages: ['Luxury','Premium'] }]},
    'ats': { years: [2013,2014,2015,2016,2017,2018,2019], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 272 HP', hp: 272, cc: 1998, packages: ['Luxury','Premium'] }]},
    'srx': { years: [2010,2011,2012,2013,2014,2015,2016], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 308 HP', hp: 308, cc: 3564, packages: ['Luxury','Premium'] }]},
  },
  'changan': {
    'alsvin': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 CVT 107 HP', hp: 107, cc: 1499, packages: ['Comfort','Luxury'] }]},
    'cs35-plus': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6 128 HP', hp: 128, cc: 1598, packages: ['Comfort','Luxury'] }]},
    'cs55-plus': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 181 HP', hp: 181, cc: 1499, packages: ['Comfort','Luxury'] }]},
    'cs75-plus': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 188 HP', hp: 188, cc: 1499, packages: ['Comfort','Luxury','Flagship'] }]},
    'uni-t': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 188 HP', hp: 188, cc: 1499, packages: ['Comfort','Flagship'] }]},
    'uni-k': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0T 233 HP', hp: 233, cc: 1998, packages: ['Luxury','Flagship'] }]},
    'uni-v': { years: [2022,2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 188 HP', hp: 188, cc: 1499, packages: ['Sport','Flagship'] }]},
    'eado-plus': { years: [2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6 128 HP', hp: 128, cc: 1598, packages: ['Comfort','Luxury'] }]},
  },
  'chery': {
    'tiggo-4-pro': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 CVT 113 HP', hp: 113, cc: 1498, packages: ['Comfort','Luxury'] }]},
    'tiggo-7-pro': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 147 HP', hp: 147, cc: 1498, packages: ['Comfort','Luxury','Flagship'] }]},
    'tiggo-8-pro': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6T 197 HP', hp: 197, cc: 1598, packages: ['Luxury','Flagship'] }]},
    'arrizo-6': { years: [2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 147 HP', hp: 147, cc: 1498, packages: ['Comfort','Luxury'] }]},
    'arrizo-8': { years: [2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6T 197 HP', hp: 197, cc: 1598, packages: ['Luxury','Flagship'] }]},
    'tiggo-2-pro': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 113 HP', hp: 113, cc: 1498, packages: ['Comfort'] }]},
    'exeed-txl': { years: [2021,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6T 197 HP', hp: 197, cc: 1598, packages: ['Luxury','Flagship'] }]},
    'exeed-lx': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6T 197 HP', hp: 197, cc: 1598, packages: ['Luxury'] }, { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5T PHEV 326 HP', hp: 326, cc: 1498, packages: ['Flagship'] }]},
    'exeed-vx': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0T 254 HP', hp: 254, cc: 1998, packages: ['Luxury','Flagship'] }]},
  },
  'chevrolet': {
    'aveo': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.2 84 HP', hp: 84, cc: 1206, packages: ['LS','LT'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 100 HP', hp: 100, cc: 1398, packages: ['LT','LTZ'] }]},
    'cruze': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 140 HP', hp: 140, cc: 1399, packages: ['LS','LT','Premier'] }, { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 136 HP', hp: 136, cc: 1598, packages: ['LT','Premier'] }]},
    'captiva': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.4 167 HP', hp: 167, cc: 2384, packages: ['LT','LTZ'] }, { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 163 HP', hp: 163, cc: 1991, packages: ['LT','LTZ'] }]},
    'trax': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 140 HP', hp: 140, cc: 1399, packages: ['LT','LTZ'] }]},
    'spark': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.0 68 HP', hp: 68, cc: 995, packages: ['LS','LT'] }]},
    'camaro': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 275 HP', hp: 275, cc: 1998, packages: ['LT','RS'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 455 HP', hp: 455, cc: 6162, packages: ['SS','ZL1'] }]},
    'corvette': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 495 HP', hp: 495, cc: 6162, packages: ['Stingray','Z06'] }]},
    'tahoe': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '5.3 V8 355 HP', hp: 355, cc: 5328, packages: ['LT','Premier'] }]},
    'equinox': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 170 HP', hp: 170, cc: 1490, packages: ['LT','Premier'] }]},
    'blazer': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 228 HP', hp: 228, cc: 1998, packages: ['LT','RS'] }]},
    'malibu': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 160 HP', hp: 160, cc: 1490, packages: ['LT','Premier'] }]},
    'suburban': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '5.3 V8 355 HP', hp: 355, cc: 5328, packages: ['LT','Premier','High Country'] }]},
    'traverse': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 255 HP', hp: 255, cc: 1998, packages: ['LT','RS','Premier'] }]},
    'colorado': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.7 Turbo 310 HP', hp: 310, cc: 2687, packages: ['LT','Z71','ZR2'] }]},
    'silverado': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '5.3 V8 355 HP', hp: 355, cc: 5328, packages: ['LT','RST','LTZ'] }]},
  },
  'chrysler': {
    '300c': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 292 HP', hp: 292, cc: 3604, packages: ['Limited','S'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 363 HP', hp: 363, cc: 5654, packages: ['S','SRT8'] }]},
    'pacifica': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 287 HP', hp: 287, cc: 3604, packages: ['Touring','Limited'] }]},
    'pt-cruiser': { years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.4 150 HP', hp: 150, cc: 2429, packages: ['Classic','Limited'] }]},
    'voyager': { years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015], bodyType: 'minivan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.4 147 HP', hp: 147, cc: 2360, packages: ['SE','LX'] }, { fuel: 'dizel', transmission: 'otomatik', engine: '2.8 CRD 150 HP', hp: 150, cc: 2776, packages: ['LX','Limited'] }]},
  },
  'citroen': {
    'c1': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.0 VTi 72 HP', hp: 72, cc: 998, packages: ['Feel','Shine'] }]},
    'c3': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.2 PureTech 83 HP', hp: 83, cc: 1199, packages: ['Feel','Shine'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 110 HP', hp: 110, cc: 1199, packages: ['Shine','Max'] }]},
    'c3-aircross': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Shine','Shine Pack'] }, { fuel: 'dizel', transmission: 'manuel', engine: '1.5 BlueHDi 100 HP', hp: 100, cc: 1499, packages: ['Feel','Shine'] }]},
    'c4': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Feel','Shine','Shine Pack'] }, { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Feel','Shine'] }]},
    'c4-x': { years: [2022,2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Feel','Shine','Shine Pack'] }]},
    'c4-cactus': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 110 HP', hp: 110, cc: 1199, packages: ['Feel','Shine'] }]},
    'c5-aircross': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 180 HP', hp: 180, cc: 1598, packages: ['Feel','Shine'] }, { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Feel','Shine'] }, { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 225 HP', hp: 225, cc: 1598, packages: ['Shine','Shine Pack'] }]},
    'c5-x': { years: [2022,2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 180 HP', hp: 180, cc: 1598, packages: ['Shine','Shine Pack'] }, { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 225 HP', hp: 225, cc: 1598, packages: ['Shine Pack'] }]},
    'c-elysee': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.2 VTi 72 HP', hp: 72, cc: 1199, packages: ['Attraction','Shine'] }, { fuel: 'dizel', transmission: 'manuel', engine: '1.6 BlueHDi 100 HP', hp: 100, cc: 1560, packages: ['Shine'] }]},
    'berlingo': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Feel','Shine'] }, { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Feel','Shine'] }]},
    'e-c4': { years: [2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'e-C4 136 HP', hp: 136, cc: 0, packages: ['Feel','Shine'] }]},
    'e-berlingo': { years: [2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'e-Berlingo 136 HP', hp: 136, cc: 0, packages: ['Feel','Shine'] }]},
    'e-c3': { years: [2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'e-C3 113 HP', hp: 113, cc: 0, packages: ['You','Max'] }]},
    'spacetourer': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'minivan', variants: [{ fuel: 'dizel', transmission: 'otomatik', engine: '2.0 BlueHDi 177 HP', hp: 177, cc: 1997, packages: ['Business','Shine'] }]},
  },
  'cupra': {
    'formentor': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2','VZ'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['VZ'] }, { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 e-Hybrid 245 HP', hp: 245, cc: 1395, packages: ['VZ'] }]},
    'born': { years: [2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: '150 kW 204 HP', hp: 204, cc: 0, packages: ['V1','V2'] }, { fuel: 'elektrik', transmission: 'otomatik', engine: '170 kW 231 HP', hp: 231, cc: 0, packages: ['V2','VZ'] }]},
    'leon': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['VZ'] }]},
    'leon-sportstourer': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'station_wagon', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['VZ'] }]},
    'ateca': { years: [2020,2021,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 300 HP', hp: 300, cc: 1984, packages: ['VZ'] }]},
    'tavascan': { years: [2024,2025], bodyType: 'suv', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'VZ 340 HP', hp: 340, cc: 0, packages: ['VZ'] }]},
    'terramar': { years: [2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2'] }, { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e-Hybrid 272 HP', hp: 272, cc: 1498, packages: ['VZ'] }]},
  },
  'dacia': {
    'sandero': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.0 SCe 65 HP', hp: 65, cc: 999, packages: ['Essential','Comfort'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Comfort','Expression'] }, { fuel: 'lpg', transmission: 'manuel', engine: '1.0 TCe ECO-G 100 HP', hp: 100, cc: 999, packages: ['Expression','Extreme'] }]},
    'sandero-stepway': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Expression','Extreme'] }, { fuel: 'lpg', transmission: 'otomatik', engine: '1.0 TCe ECO-G 100 HP', hp: 100, cc: 999, packages: ['Expression','Extreme'] }, { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Hybrid 140 HP', hp: 140, cc: 1598, packages: ['Extreme'] }]},
    'logan': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.0 SCe 73 HP', hp: 73, cc: 999, packages: ['Essential','Comfort'] }, { fuel: 'lpg', transmission: 'manuel', engine: '1.0 TCe ECO-G 100 HP', hp: 100, cc: 999, packages: ['Comfort'] }]},
    'duster': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 150 HP', hp: 150, cc: 1333, packages: ['Expression','Extreme'] }, { fuel: 'dizel', transmission: 'manuel', engine: '1.5 dCi 115 HP', hp: 115, cc: 1461, packages: ['Expression','Extreme'] }, { fuel: 'lpg', transmission: 'otomatik', engine: '1.0 TCe ECO-G 100 HP', hp: 100, cc: 999, packages: ['Expression'] }, { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Hybrid 140 HP', hp: 140, cc: 1598, packages: ['Expression','Extreme'] }]},
    'jogger': { years: [2022,2023,2024,2025], bodyType: 'minivan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.0 TCe 110 HP', hp: 110, cc: 999, packages: ['Essential','Expression','Extreme'] }, { fuel: 'lpg', transmission: 'manuel', engine: '1.0 TCe ECO-G 100 HP', hp: 100, cc: 999, packages: ['Expression','Extreme'] }, { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Hybrid 140 HP', hp: 140, cc: 1598, packages: ['Extreme'] }]},
    'spring': { years: [2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'Electric 65 HP', hp: 65, cc: 0, packages: ['Essential','Expression','Extreme'] }]},
    'lodgy': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'minivan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.6 SCe 102 HP', hp: 102, cc: 1598, packages: ['Ambiance','Laureate'] }, { fuel: 'dizel', transmission: 'manuel', engine: '1.5 dCi 90 HP', hp: 90, cc: 1461, packages: ['Ambiance','Laureate'] }]},
    'dokker': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'minivan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.6 SCe 102 HP', hp: 102, cc: 1598, packages: ['Ambiance'] }, { fuel: 'dizel', transmission: 'manuel', engine: '1.5 dCi 90 HP', hp: 90, cc: 1461, packages: ['Ambiance','Laureate'] }]},
  },
  'daewoo': {
    'lanos': { years: [1997,1998,1999,2000,2001,2002,2003,2004], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.5 86 HP', hp: 86, cc: 1498, packages: ['S','SX'] }]},
    'nubira': { years: [1997,1998,1999,2000,2001,2002,2003,2004], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6 106 HP', hp: 106, cc: 1598, packages: ['SX','CDX'] }]},
    'matiz': { years: [1998,1999,2000,2001,2002,2003,2004,2005], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '0.8 52 HP', hp: 52, cc: 796, packages: ['S','SE'] }]},
    'lacetti': { years: [2004,2005,2006,2007,2008,2009,2010], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6 109 HP', hp: 109, cc: 1598, packages: ['SX','CDX'] }]},
    'kalos': { years: [2002,2003,2004,2005,2006,2007,2008], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.2 72 HP', hp: 72, cc: 1150, packages: ['SE'] }]},
    'leganza': { years: [1997,1998,1999,2000,2001,2002], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 133 HP', hp: 133, cc: 1998, packages: ['SX','CDX'] }]},
  },
  'daihatsu': {
    'terios': { years: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 105 HP', hp: 105, cc: 1495, packages: ['SX','Top'] }]},
    'sirion': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.3 87 HP', hp: 87, cc: 1298, packages: ['Comfort','Sport'] }]},
    'cuore': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.0 58 HP', hp: 58, cc: 989, packages: ['Standart'] }]},
    'materia': { years: [2007,2008,2009,2010,2011,2012], bodyType: 'minivan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 103 HP', hp: 103, cc: 1495, packages: ['Comfort','Gold'] }]},
  },
  'dfsk': {
    'glory-580': { years: [2020,2021,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 150 HP', hp: 150, cc: 1498, packages: ['Comfort','Luxury'] }]},
    'glory-560': { years: [2019,2020,2021,2022,2023], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 150 HP', hp: 150, cc: 1498, packages: ['Comfort','Luxury'] }]},
    'eagle-580': { years: [2020,2021,2022,2023], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5T 150 HP', hp: 150, cc: 1498, packages: ['Comfort'] }]},
    '500': { years: [2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 68 HP', hp: 68, cc: 0, packages: ['Standart'] }]},
    'seres-3': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 163 HP', hp: 163, cc: 0, packages: ['Comfort','Luxury'] }]},
    'seres-5': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 255 HP', hp: 255, cc: 0, packages: ['Luxury'] }]},
  },
  'dodge': {
    'challenger': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 305 HP', hp: 305, cc: 3604, packages: ['SXT','R/T'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 375 HP', hp: 375, cc: 5654, packages: ['R/T'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 Supercharged 717 HP', hp: 717, cc: 6166, packages: ['SRT Hellcat'] }]},
    'charger': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 300 HP', hp: 300, cc: 3604, packages: ['SXT','R/T'] }, { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 370 HP', hp: 370, cc: 5654, packages: ['R/T','Daytona'] }]},
    'durango': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 295 HP', hp: 295, cc: 3604, packages: ['SXT','GT','R/T'] }]},
    'ram-1500': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'pickup', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 395 HP', hp: 395, cc: 5654, packages: ['Big Horn','Laramie','Limited'] }]},
    'nitro': { years: [2007,2008,2009,2010,2011,2012], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.7 V6 210 HP', hp: 210, cc: 3701, packages: ['SXT'] }]},
    'journey': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.4 173 HP', hp: 173, cc: 2360, packages: ['SE','SXT'] }]},
    'viper': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2013,2014,2015,2016,2017], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '8.4 V10 645 HP', hp: 645, cc: 8382, packages: ['GTS','ACR'] }]},
  },
};
module.exports = VARIANTS_PART1;
