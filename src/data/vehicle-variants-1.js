/**
 * Araç Varyant Veritabanı – Parça 1/4
 * Alfa Romeo → Ford
 * 
 * Her model için: üretim yılları, yakıt tipleri, şanzıman, motor seçenekleri, paketler
 * Sahibinden.com referanslı gerçek piyasa verileri
 */

const VARIANTS_PART1 = {

  // ══════════════════════════════════════
  // ALFA ROMEO
  // ══════════════════════════════════════
  'alfa-romeo': {
    'giulia': {
      years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1995, packages: ['Super','Ti','Veloce'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 280 HP', hp: 280, cc: 1995, packages: ['Veloce','Quadrifoglio'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 JTD 160 HP', hp: 160, cc: 2143, packages: ['Super','Ti'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 JTD 190 HP', hp: 190, cc: 2143, packages: ['Super','Ti','Veloce'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 510 HP', hp: 510, cc: 2891, packages: ['Quadrifoglio'] },
      ]
    },
    'giulietta': {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Turbo 120 HP', hp: 120, cc: 1368, packages: ['Distinctive','Super','Sprint'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 170 HP', hp: 170, cc: 1368, packages: ['Distinctive','Super','Veloce'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '1.6 JTD 120 HP', hp: 120, cc: 1598, packages: ['Distinctive','Super'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 JTD 170 HP', hp: 170, cc: 1956, packages: ['Distinctive','Super','Veloce'] },
      ]
    },
    'stelvio': {
      years: [2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1995, packages: ['Super','Ti','Sprint'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 280 HP', hp: 280, cc: 1995, packages: ['Veloce','Ti'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 JTD 190 HP', hp: 190, cc: 2143, packages: ['Super','Ti','Veloce'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 JTD 210 HP', hp: 210, cc: 2143, packages: ['Veloce','Ti'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 510 HP', hp: 510, cc: 2891, packages: ['Quadrifoglio'] },
      ]
    },
    'tonale': {
      years: [2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 130 HP', hp: 130, cc: 1469, packages: ['Super','Ti','Sprint'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo Hybrid 160 HP', hp: 160, cc: 1469, packages: ['Super','Ti','Veloce','Speciale'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '1.3 PHEV 280 HP', hp: 280, cc: 1332, packages: ['Veloce','Speciale'] },
      ]
    },
    'mito': {
      years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '1.4 78 HP', hp: 78, cc: 1368, packages: ['Distinctive','Progression'] },
        { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Turbo 135 HP', hp: 135, cc: 1368, packages: ['Distinctive','Super','QV Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 170 HP', hp: 170, cc: 1368, packages: ['Veloce','QV'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '1.3 JTD 95 HP', hp: 95, cc: 1248, packages: ['Distinctive','Super'] },
      ]
    },
    '159': {
      years: [2005,2006,2007,2008,2009,2010,2011],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '1.8 MPI 140 HP', hp: 140, cc: 1796, packages: ['Distinctive','Progression'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.2 JTS 185 HP', hp: 185, cc: 2198, packages: ['Distinctive','Exclusive'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.2 JTS V6 260 HP', hp: 260, cc: 3195, packages: ['Exclusive','Ti'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '1.9 JTD 150 HP', hp: 150, cc: 1910, packages: ['Distinctive','Progression'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.4 JTD 200 HP', hp: 200, cc: 2387, packages: ['Distinctive','Exclusive','Ti'] },
      ]
    },
    '156': {
      years: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '1.6 TS 120 HP', hp: 120, cc: 1598, packages: ['Distinctive','Progression'] },
        { fuel: 'benzin', transmission: 'manuel', engine: '2.0 TS 155 HP', hp: 155, cc: 1970, packages: ['Distinctive','Exclusive'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '1.9 JTD 115 HP', hp: 115, cc: 1910, packages: ['Distinctive','Progression'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '2.4 JTD 175 HP', hp: 175, cc: 2387, packages: ['Distinctive','Exclusive'] },
      ]
    },
    '147': {
      years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '1.6 TS 105 HP', hp: 105, cc: 1598, packages: ['Distinctive','Progression'] },
        { fuel: 'benzin', transmission: 'manuel', engine: '2.0 TS 150 HP', hp: 150, cc: 1970, packages: ['Distinctive','Exclusive'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '1.9 JTD 115 HP', hp: 115, cc: 1910, packages: ['Distinctive','Progression'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '1.9 JTD 150 HP', hp: 150, cc: 1910, packages: ['Distinctive','Exclusive'] },
      ]
    },
    'gt': {
      years: [2003,2004,2005,2006,2007,2008,2009,2010],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '2.0 JTS 165 HP', hp: 165, cc: 1970, packages: ['Distinctive','Exclusive'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.2 V6 240 HP', hp: 240, cc: 3195, packages: ['Exclusive'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '1.9 JTD 150 HP', hp: 150, cc: 1910, packages: ['Distinctive','Exclusive'] },
      ]
    },
    'brera': {
      years: [2005,2006,2007,2008,2009,2010],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '2.2 JTS 185 HP', hp: 185, cc: 2198, packages: ['Sky Window','Exclusive'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.2 JTS V6 260 HP', hp: 260, cc: 3195, packages: ['Exclusive'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '2.4 JTD 200 HP', hp: 200, cc: 2387, packages: ['Exclusive'] },
      ]
    },
    'spider': {
      years: [2006,2007,2008,2009,2010],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '2.2 JTS 185 HP', hp: 185, cc: 2198, packages: ['Exclusive'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.2 JTS V6 260 HP', hp: 260, cc: 3195, packages: ['Exclusive'] },
      ]
    },
    '4c': {
      years: [2013,2014,2015,2016,2017,2018,2019,2020],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.75 TBi 240 HP', hp: 240, cc: 1742, packages: ['Base','Launch Edition'] },
      ]
    },
    '33-stradale': {
      years: [2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Biturbo 620 HP', hp: 620, cc: 2891, packages: ['Stradale'] },
      ]
    },
  },

  // ══════════════════════════════════════
  // ASTON MARTIN
  // ══════════════════════════════════════
  'aston-martin': {
    'db11': {
      years: [2016,2017,2018,2019,2020,2021,2022],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 510 HP', hp: 510, cc: 3982, packages: ['V8','V8 Volante'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V12 Biturbo 639 HP', hp: 639, cc: 5204, packages: ['V12','AMR'] },
      ]
    },
    'db12': {
      years: [2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 680 HP', hp: 680, cc: 3982, packages: ['Base','Volante'] },
      ]
    },
    'dbx': {
      years: [2020,2021,2022,2023],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 550 HP', hp: 550, cc: 3982, packages: ['Base','Straight-Six'] },
      ]
    },
    'dbx707': {
      years: [2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 707 HP', hp: 707, cc: 3982, packages: ['707'] },
      ]
    },
    'vantage': {
      years: [2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 510 HP', hp: 510, cc: 3982, packages: ['V8','Roadster'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 665 HP', hp: 665, cc: 3982, packages: ['V8 2024+'] },
      ]
    },
    'dbs': {
      years: [2018,2019,2020,2021,2022,2023],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V12 Biturbo 725 HP', hp: 725, cc: 5204, packages: ['Superleggera','Volante','Ultimate'] },
      ]
    },
    'rapide': {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 V12 477 HP', hp: 477, cc: 5935, packages: ['Base','S','AMR'] },
      ]
    },
    'db9': {
      years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 V12 455 HP', hp: 455, cc: 5935, packages: ['Base','Volante','GT'] },
      ]
    },
    'vanquish': {
      years: [2012,2013,2014,2015,2016,2017,2018],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 V12 576 HP', hp: 576, cc: 5935, packages: ['Base','Volante','S','Zagato'] },
      ]
    },
    'valkyrie': {
      years: [2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '6.5 V12 1160 HP', hp: 1160, cc: 6498, packages: ['Base','Spider','AMR Pro'] },
      ]
    },
  },

  // ══════════════════════════════════════
  // AUDI
  // ══════════════════════════════════════
  'audi': {
    'a1': {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      variants: [
        { fuel: 'benzin', transmission: 'manuel', engine: '1.0 TFSI 95 HP', hp: 95, cc: 999, packages: ['Base','Advanced','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TFSI 116 HP', hp: 116, cc: 999, packages: ['Advanced','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['S Line','Edition One'] },
        { fuel: 'benzin', transmission: 'manuel', engine: '1.4 TFSI 125 HP', hp: 125, cc: 1395, packages: ['Ambition','Attraction'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '1.6 TDI 116 HP', hp: 116, cc: 1598, packages: ['Base','Advanced'] },
      ]
    },
    'a3-sedan': {
      years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TFSI 116 HP', hp: 116, cc: 999, packages: ['Base','Advanced','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['Advanced','S Line','Edition One'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['S Line','Black Edition'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 TDI 116 HP', hp: 116, cc: 1598, packages: ['Base','Advanced','S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Advanced','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 310 HP', hp: 310, cc: 1984, packages: ['S3'] },
      ]
    },
    'a3-sportback': {
      years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TFSI 116 HP', hp: 116, cc: 999, packages: ['Base','Advanced'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['Advanced','S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 TDI 116 HP', hp: 116, cc: 1598, packages: ['Base','Advanced'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['S Line'] },
      ]
    },
    'a4': {
      years: [1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 TFSI 150 HP', hp: 150, cc: 1395, packages: ['Design','Sport','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Sport','S Line','Advanced'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 252 HP', hp: 252, cc: 1984, packages: ['S Line','Edition One'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Design','Sport','S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['Sport','S Line'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Design'] },
        { fuel: 'benzin', transmission: 'manuel', engine: '1.8 TFSI 170 HP', hp: 170, cc: 1798, packages: ['Ambition','Attraction'] },
      ]
    },
    'a5-sportback': {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Design','Sport','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 252 HP', hp: 252, cc: 1984, packages: ['S Line','Edition One'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['Design','Sport','S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S Line','Prestige'] },
      ]
    },
    'a5-coupe': {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['Sport','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 252 HP', hp: 252, cc: 1984, packages: ['S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['Sport','S Line'] },
      ]
    },
    'a6': {
      years: [1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 245 HP', hp: 245, cc: 1984, packages: ['Design','Sport','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['S Line','Prestige'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 204 HP', hp: 204, cc: 1968, packages: ['Design','Sport','S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S Line','Prestige'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 TFSI e 299 HP', hp: 299, cc: 1984, packages: ['S Line','Prestige'] },
      ]
    },
    'a7-sportback': {
      years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 245 HP', hp: 245, cc: 1984, packages: ['S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['S Line','Prestige'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S Line','Prestige'] },
      ]
    },
    'a8': {
      years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['Long','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 460 HP', hp: 460, cc: 3996, packages: ['S8','Long'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['Base','Long'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '4.2 TDI 385 HP', hp: 385, cc: 4134, packages: ['Long'] },
      ]
    },
    'q2': {
      years: [2016,2017,2018,2019,2020,2021,2022,2023,2024],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TFSI 116 HP', hp: 116, cc: 999, packages: ['Base','Advanced','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['Advanced','S Line','Edition One'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 TDI 116 HP', hp: 116, cc: 1598, packages: ['Base','Advanced'] },
      ]
    },
    'q3': {
      years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TFSI 150 HP', hp: 150, cc: 1498, packages: ['Advanced','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 190 HP', hp: 190, cc: 1984, packages: ['S Line','Edition One'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Advanced','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 245 HP', hp: 245, cc: 1984, packages: ['RS Q3'] },
      ]
    },
    'q5': {
      years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 204 HP', hp: 204, cc: 1984, packages: ['Advanced','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 265 HP', hp: 265, cc: 1984, packages: ['S Line','Edition One'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 204 HP', hp: 204, cc: 1968, packages: ['Advanced','S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S Line'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 TFSI e 367 HP', hp: 367, cc: 1984, packages: ['S Line','Sportback'] },
      ]
    },
    'q7': {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 252 HP', hp: 252, cc: 1984, packages: ['S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['S Line','Prestige'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 231 HP', hp: 231, cc: 2967, packages: ['S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S Line','Prestige'] },
      ]
    },
    'q8': {
      years: [2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TFSI 340 HP', hp: 340, cc: 2995, packages: ['S Line','Prestige'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI 286 HP', hp: 286, cc: 2967, packages: ['S Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '4.0 TDI 435 HP', hp: 435, cc: 3996, packages: ['SQ8'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 600 HP', hp: 600, cc: 3996, packages: ['RS Q8'] },
      ]
    },
    'e-tron-gt': {
      years: [2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 476 HP', hp: 476, cc: 0, packages: ['Base','S Line'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 598 HP', hp: 598, cc: 0, packages: ['RS'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 646 HP', hp: 646, cc: 0, packages: ['RS Performance'] },
      ]
    },
    'q4-e-tron': {
      years: [2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 170 HP', hp: 170, cc: 0, packages: ['Base','Advanced'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['Advanced','S Line'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 299 HP', hp: 299, cc: 0, packages: ['S Line','Edition One'] },
      ]
    },
    'q8-e-tron': {
      years: [2023,2024,2025],
      variants: [
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 340 HP', hp: 340, cc: 0, packages: ['Advanced','S Line'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 408 HP', hp: 408, cc: 0, packages: ['S Line','SQ8 e-tron'] },
      ]
    },
    'tt-coupe': {
      years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 197 HP', hp: 197, cc: 1984, packages: ['Base','S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TFSI 245 HP', hp: 245, cc: 1984, packages: ['S Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 TFSI 400 HP', hp: 400, cc: 2480, packages: ['TT RS'] },
      ]
    },
    'r8': {
      years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V10 570 HP', hp: 570, cc: 5204, packages: ['Performance','GT'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V10 620 HP', hp: 620, cc: 5204, packages: ['GT RWD'] },
      ]
    },
    'rs3': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 TFSI 400 HP', hp: 400, cc: 2480, packages: ['Base','Performance Edition'] },
    ]},
    'rs6-avant': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 600 HP', hp: 600, cc: 3996, packages: ['Base','Performance'] },
    ]},
    'rs7': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 TFSI 600 HP', hp: 600, cc: 3996, packages: ['Base','Performance'] },
    ]},
  },

  // ══════════════════════════════════════
  // BENTLEY
  // ══════════════════════════════════════
  'bentley': {
    'continental-gt': {
      years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3996, packages: ['V8','V8 S','Mulliner'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 W12 635 HP', hp: 635, cc: 5998, packages: ['W12','Speed','Mulliner'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '2.9 V6 Hybrid 782 HP', hp: 782, cc: 2894, packages: ['GTC Speed (2025+)'] },
      ]
    },
    'flying-spur': {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3996, packages: ['V8','Mulliner'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 W12 635 HP', hp: 635, cc: 5998, packages: ['W12','Speed'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '2.9 V6 Hybrid 782 HP', hp: 782, cc: 2894, packages: ['Hybrid (2025+)'] },
      ]
    },
    'bentayga': {
      years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3996, packages: ['V8','S','Mulliner'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '6.0 W12 635 HP', hp: 635, cc: 5998, packages: ['W12','Speed'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 Hybrid 462 HP', hp: 462, cc: 2995, packages: ['Hybrid','Azure Hybrid'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '4.0 V8 Diesel 435 HP', hp: 435, cc: 3996, packages: ['Diesel (2017-2020)'] },
      ]
    },
  },

  // ══════════════════════════════════════
  // BMW
  // ══════════════════════════════════════
  'bmw': {
    '1-serisi': {
      years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 116i 109 HP', hp: 109, cc: 1499, packages: ['First Edition','Advantage','Sport Line','M Sport'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 118i 140 HP', hp: 140, cc: 1499, packages: ['Sport Line','M Sport','xLine'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 120i 178 HP', hp: 178, cc: 1998, packages: ['M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 116d 116 HP', hp: 116, cc: 1496, packages: ['Advantage','Sport Line'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 118d 150 HP', hp: 150, cc: 1995, packages: ['Sport Line','M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 120d 190 HP', hp: 190, cc: 1995, packages: ['M Sport','xLine'] },
        { fuel: 'benzin', transmission: 'manuel', engine: '1.6 116i 136 HP', hp: 136, cc: 1598, packages: ['Advantage'] },
      ]
    },
    '3-serisi': {
      years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 316i 136 HP', hp: 136, cc: 1598, packages: ['Advantage','Comfort'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 318i 156 HP', hp: 156, cc: 1998, packages: ['First Edition','Sport Line','Luxury Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 320i 184 HP', hp: 184, cc: 1998, packages: ['Sport Line','M Sport','Luxury Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 320i 190 HP', hp: 190, cc: 1998, packages: ['M Sport','Edition Sport Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 330i 258 HP', hp: 258, cc: 1998, packages: ['M Sport','M Sport Pro'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 316d 116 HP', hp: 116, cc: 1995, packages: ['Advantage','Comfort'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 318d 150 HP', hp: 150, cc: 1995, packages: ['Sport Line','M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 320d 190 HP', hp: 190, cc: 1995, packages: ['M Sport','Luxury Line'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 330e PHEV 292 HP', hp: 292, cc: 1998, packages: ['M Sport'] },
        { fuel: 'benzin', transmission: 'manuel', engine: '1.6 316i 116 HP', hp: 116, cc: 1598, packages: ['Comfort'] },
        { fuel: 'dizel', transmission: 'manuel', engine: '2.0 316d 116 HP', hp: 116, cc: 1995, packages: ['Comfort'] },
      ]
    },
    '5-serisi': {
      years: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 520i 184 HP', hp: 184, cc: 1998, packages: ['Comfort','Sport Line','Luxury Line','M Sport'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 530i 252 HP', hp: 252, cc: 1998, packages: ['M Sport','M Sport Pro'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 540i 340 HP', hp: 340, cc: 2998, packages: ['M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 520d 190 HP', hp: 190, cc: 1995, packages: ['Comfort','Sport Line','Luxury Line','M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 530d 286 HP', hp: 286, cc: 2993, packages: ['M Sport'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 530e PHEV 292 HP', hp: 292, cc: 1998, packages: ['M Sport'] },
      ]
    },
    '7-serisi': {
      years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 740i 380 HP', hp: 380, cc: 2998, packages: ['Excellence','M Sport'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 M760e 571 HP', hp: 571, cc: 4395, packages: ['M Sport','Excellence'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 730d 286 HP', hp: 286, cc: 2993, packages: ['Excellence'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 740d 340 HP', hp: 340, cc: 2993, packages: ['M Sport'] },
      ]
    },
    'x1': {
      years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 sDrive18i 136 HP', hp: 136, cc: 1499, packages: ['xLine','M Sport'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 sDrive20i 170 HP', hp: 170, cc: 1998, packages: ['xLine','M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 sDrive18d 150 HP', hp: 150, cc: 1995, packages: ['xLine','M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 xDrive20d 190 HP', hp: 190, cc: 1995, packages: ['xLine','M Sport'] },
      ]
    },
    'x3': {
      years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 sDrive20i 184 HP', hp: 184, cc: 1998, packages: ['xLine','M Sport','Luxury Line'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 xDrive30i 245 HP', hp: 245, cc: 1998, packages: ['M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 sDrive20d 190 HP', hp: 190, cc: 1995, packages: ['xLine','M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 xDrive20d 190 HP', hp: 190, cc: 1995, packages: ['M Sport'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 xDrive30e PHEV 292 HP', hp: 292, cc: 1998, packages: ['M Sport'] },
      ]
    },
    'x5': {
      years: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 xDrive40i 340 HP', hp: 340, cc: 2998, packages: ['xLine','M Sport','M Sport Pro'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 xDrive25d 231 HP', hp: 231, cc: 1995, packages: ['xLine','M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 xDrive30d 286 HP', hp: 286, cc: 2993, packages: ['M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 M50d 400 HP', hp: 400, cc: 2993, packages: ['M Sport'] },
        { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 xDrive45e PHEV 394 HP', hp: 394, cc: 2998, packages: ['M Sport'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 M Competition 625 HP', hp: 625, cc: 4395, packages: ['X5 M Competition'] },
      ]
    },
    'x7': {
      years: [2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 xDrive40i 340 HP', hp: 340, cc: 2998, packages: ['xLine','M Sport','M Sport Pro'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 xDrive30d 286 HP', hp: 286, cc: 2993, packages: ['xLine','M Sport'] },
        { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 M50d 400 HP', hp: 400, cc: 2993, packages: ['M Sport'] },
      ]
    },
    'i4': {
      years: [2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'eDrive40 340 HP', hp: 340, cc: 0, packages: ['M Sport'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'M50 544 HP', hp: 544, cc: 0, packages: ['M50'] },
      ]
    },
    'ix': {
      years: [2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'xDrive40 326 HP', hp: 326, cc: 0, packages: ['Sport','M Sport'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'xDrive50 523 HP', hp: 523, cc: 0, packages: ['M Sport'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'M60 619 HP', hp: 619, cc: 0, packages: ['M60'] },
      ]
    },
    'i7': {
      years: [2022,2023,2024,2025],
      variants: [
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'xDrive60 544 HP', hp: 544, cc: 0, packages: ['Excellence','M Sport'] },
        { fuel: 'elektrik', transmission: 'otomatik', engine: 'M70 660 HP', hp: 660, cc: 0, packages: ['M70'] },
      ]
    },
    'z4': {
      years: [2002,2003,2004,2005,2006,2007,2008,2009,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 sDrive20i 197 HP', hp: 197, cc: 1998, packages: ['Sport Line','M Sport'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 M40i 340 HP', hp: 340, cc: 2998, packages: ['M Sport'] },
      ]
    },
    'm3': {
      years: [2000,2001,2002,2003,2004,2005,2006,2007,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 M TwinPower 480 HP', hp: 480, cc: 2993, packages: ['Base','Competition'] },
        { fuel: 'benzin', transmission: 'manuel', engine: '3.0 M TwinPower 480 HP', hp: 480, cc: 2993, packages: ['Base'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 M Competition xDrive 510 HP', hp: 510, cc: 2993, packages: ['Competition xDrive'] },
      ]
    },
    'm4': {
      years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 M TwinPower 480 HP', hp: 480, cc: 2993, packages: ['Base','Competition'] },
        { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 M Competition xDrive 510 HP', hp: 510, cc: 2993, packages: ['Competition xDrive'] },
      ]
    },
    'm5': {
      years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      variants: [
        { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 M TwinPower 600 HP', hp: 600, cc: 4395, packages: ['Base','Competition','CS'] },
      ]
    },
  },

  // ══════════════════════════════════════
  // BYD
  // ══════════════════════════════════════
  'byd': {
    'atto-3': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['Comfort','Design'] },
    ]},
    'dolphin': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 95 HP', hp: 95, cc: 0, packages: ['Active'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 177 HP', hp: 177, cc: 0, packages: ['Boost'] },
    ]},
    'han': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 517 HP', hp: 517, cc: 0, packages: ['EV'] },
    ]},
    'seal': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 313 HP', hp: 313, cc: 0, packages: ['Dynamic','Premium'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 530 HP', hp: 530, cc: 0, packages: ['Excellence AWD'] },
    ]},
    'tang': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 517 HP', hp: 517, cc: 0, packages: ['EV'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'DM-i Hybrid 265 HP', hp: 265, cc: 1499, packages: ['DM-i'] },
    ]},
    'song-plus': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['EV Champion'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'DM-i Hybrid 197 HP', hp: 197, cc: 1499, packages: ['DM-i Champion'] },
    ]},
    'seal-u': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['EV Comfort','EV Design'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'DM-i Hybrid 197 HP', hp: 197, cc: 1499, packages: ['DM-i Comfort','DM-i Design'] },
    ]},
    'yuan-plus': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['Comfort','Design'] },
    ]},
  },

  // ══════════════════════════════════════
  // CADILLAC
  // ══════════════════════════════════════
  'cadillac': {
    'escalade': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 420 HP', hp: 420, cc: 6162, packages: ['Premium Luxury','Sport','Platinum'] },
    ]},
    'ct5': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 237 HP', hp: 237, cc: 1998, packages: ['Luxury','Sport','Premium Luxury'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Twin Turbo 360 HP', hp: 360, cc: 2956, packages: ['CT5-V'] },
    ]},
    'xt4': { years: [2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 237 HP', hp: 237, cc: 1998, packages: ['Luxury','Sport','Premium Luxury'] },
    ]},
    'xt5': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 237 HP', hp: 237, cc: 1998, packages: ['Luxury','Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 310 HP', hp: 310, cc: 3564, packages: ['Premium Luxury','Platinum'] },
    ]},
    'lyriq': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 340 HP', hp: 340, cc: 0, packages: ['Tech','Sport'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 500 HP', hp: 500, cc: 0, packages: ['Sport AWD'] },
    ]},
  },

  // ══════════════════════════════════════
  // CHANGAN
  // ══════════════════════════════════════
  'changan': {
    'alsvin': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 99 HP', hp: 99, cc: 1399, packages: ['Comfort','Elite'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 CVT 99 HP', hp: 99, cc: 1399, packages: ['Comfort DCT','Elite DCT'] },
    ]},
    'cs35-plus': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 160 HP', hp: 160, cc: 1399, packages: ['Comfort','Luxury'] },
    ]},
    'cs55-plus': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 188 HP', hp: 188, cc: 1498, packages: ['Comfort','Luxury','Premium'] },
    ]},
    'cs75-plus': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 188 HP', hp: 188, cc: 1498, packages: ['Comfort','Luxury'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 233 HP', hp: 233, cc: 1998, packages: ['Premium','Flagship'] },
    ]},
    'uni-t': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 188 HP', hp: 188, cc: 1498, packages: ['Comfort','Luxury'] },
    ]},
    'uni-k': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 233 HP', hp: 233, cc: 1998, packages: ['Comfort','Luxury','Premium'] },
    ]},
    'uni-v': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 188 HP', hp: 188, cc: 1498, packages: ['Comfort','Sport'] },
    ]},
    'eado-plus': { years: [2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 160 HP', hp: 160, cc: 1399, packages: ['Comfort','Luxury'] },
    ]},
  },

  // ══════════════════════════════════════
  // CHERY
  // ══════════════════════════════════════
  'chery': {
    'tiggo-4-pro': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 147 HP', hp: 147, cc: 1498, packages: ['Active','Comfort','Luxury'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.5 113 HP', hp: 113, cc: 1498, packages: ['Active'] },
    ]},
    'tiggo-7-pro': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 147 HP', hp: 147, cc: 1498, packages: ['Comfort','Luxury','Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo Hybrid 197 HP', hp: 197, cc: 1498, packages: ['Hybrid Luxury','Hybrid Premium'] },
    ]},
    'tiggo-8-pro': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 Turbo 197 HP', hp: 197, cc: 1598, packages: ['Luxury','Premium','Flagship'] },
    ]},
    'arrizo-6': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 147 HP', hp: 147, cc: 1498, packages: ['Comfort','Luxury'] },
    ]},
    'exeed-txl': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 Turbo 197 HP', hp: 197, cc: 1598, packages: ['Luxury','Premium','Flagship'] },
    ]},
  },

  // ══════════════════════════════════════
  // CHEVROLET
  // ══════════════════════════════════════
  'chevrolet': {
    'aveo': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 84 HP', hp: 84, cc: 1229, packages: ['LS','LT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 100 HP', hp: 100, cc: 1399, packages: ['LT','LTZ'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 100 HP', hp: 100, cc: 1399, packages: ['LS','LT'] },
    ]},
    'cruze': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 140 HP', hp: 140, cc: 1399, packages: ['LT','LTZ','Premier'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 124 HP', hp: 124, cc: 1598, packages: ['LS','LT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 136 HP', hp: 136, cc: 1598, packages: ['LT','LTZ'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.6 136 HP', hp: 136, cc: 1598, packages: ['LS','LT'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 124 HP', hp: 124, cc: 1598, packages: ['LS','LT'] },
    ]},
    'captiva': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 CDTi 150 HP', hp: 150, cc: 1991, packages: ['LS','LT','LTZ'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 167 HP', hp: 167, cc: 2384, packages: ['LS','LT'] },
    ]},
    'trax': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Turbo 140 HP', hp: 140, cc: 1399, packages: ['LT','LTZ'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 137 HP', hp: 137, cc: 1199, packages: ['LS','LT','RS'] },
    ]},
    'spark': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 68 HP', hp: 68, cc: 995, packages: ['LS','LT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 81 HP', hp: 81, cc: 1206, packages: ['LT','LTZ'] },
    ]},
    'camaro': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 275 HP', hp: 275, cc: 1998, packages: ['LT','RS'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 455 HP', hp: 455, cc: 6162, packages: ['SS','ZL1'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '6.2 V8 455 HP', hp: 455, cc: 6162, packages: ['SS'] },
    ]},
    'corvette': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 495 HP', hp: 495, cc: 6162, packages: ['Stingray','Z06'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.5 V8 670 HP', hp: 670, cc: 5483, packages: ['Z06 (C8)'] },
    ]},
  },

  // ══════════════════════════════════════
  // CHRYSLER
  // ══════════════════════════════════════
  'chrysler': {
    '300c': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 296 HP', hp: 296, cc: 3604, packages: ['Touring','Limited','S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 363 HP', hp: 363, cc: 5654, packages: ['C','SRT8'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 CRD V6 218 HP', hp: 218, cc: 2987, packages: ['Touring','Limited'] },
    ]},
  },

  // ══════════════════════════════════════
  // CITROËN
  // ══════════════════════════════════════
  'citroen': {
    'c3': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 PureTech 83 HP', hp: 83, cc: 1199, packages: ['Feel','Shine','C-Series'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 110 HP', hp: 110, cc: 1199, packages: ['Feel','Shine','Shine Pack'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 BlueHDi 100 HP', hp: 100, cc: 1499, packages: ['Feel','Shine'] },
    ]},
    'c3-aircross': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Feel','Shine','Shine Pack'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 PureTech 110 HP', hp: 110, cc: 1199, packages: ['Feel','Shine'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 BlueHDi 120 HP', hp: 120, cc: 1499, packages: ['Feel','Shine'] },
    ]},
    'c4': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Feel','Shine','Shine Pack'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 155 HP', hp: 155, cc: 1199, packages: ['Shine Pack'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Feel','Shine'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ë-C4 Elektrik 136 HP', hp: 136, cc: 0, packages: ['Feel','Shine','Shine Pack'] },
    ]},
    'c5-aircross': { years: [2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 180 HP', hp: 180, cc: 1598, packages: ['Feel','Shine','Shine Pack'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Feel','Shine'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Feel'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 225 HP', hp: 225, cc: 1598, packages: ['Shine','Shine Pack'] },
    ]},
    'berlingo': { years: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Feel','Shine','XL'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Shine','XL'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Feel','Shine'] },
    ]},
  },

  // ══════════════════════════════════════
  // CUPRA
  // ══════════════════════════════════════
  'cupra': {
    'formentor': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['VZ','VZ5'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 310 HP', hp: 310, cc: 1984, packages: ['VZ'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 e-Hybrid 204 HP', hp: 204, cc: 1395, packages: ['V2 e-Hybrid'] },
    ]},
    'leon': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['VZ'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 300 HP', hp: 300, cc: 1984, packages: ['VZ'] },
    ]},
    'born': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['V1','V2'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 231 HP', hp: 231, cc: 0, packages: ['V2','VZ'] },
    ]},
    'ateca': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 300 HP', hp: 300, cc: 1984, packages: ['VZ'] },
    ]},
  },

  // ══════════════════════════════════════
  // DACIA
  // ══════════════════════════════════════
  'dacia': {
    'sandero': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 SCe 65 HP', hp: 65, cc: 999, packages: ['Essential','Expression'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Expression','Extreme'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 110 HP', hp: 110, cc: 999, packages: ['Stepway Expression','Stepway Extreme'] },
      { fuel: 'lpg', transmission: 'manuel', engine: '1.0 TCe ECO-G 100 HP', hp: 100, cc: 999, packages: ['Expression','Extreme'] },
    ]},
    'duster': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 130 HP', hp: 130, cc: 1332, packages: ['Expression','Extreme','Journey'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Essential','Expression'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 dCi 115 HP', hp: 115, cc: 1461, packages: ['Expression','Extreme'] },
      { fuel: 'lpg', transmission: 'manuel', engine: '1.0 TCe ECO-G 100 HP', hp: 100, cc: 999, packages: ['Expression','Extreme'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Hybrid 140 HP', hp: 140, cc: 1598, packages: ['Expression','Extreme','Journey'] },
    ]},
    'jogger': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 TCe 110 HP', hp: 110, cc: 999, packages: ['Essential','Expression','Extreme'] },
      { fuel: 'lpg', transmission: 'manuel', engine: '1.0 TCe ECO-G 100 HP', hp: 100, cc: 999, packages: ['Expression','Extreme'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Hybrid 140 HP', hp: 140, cc: 1598, packages: ['Expression','Extreme'] },
    ]},
    'spring': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 45 HP', hp: 45, cc: 0, packages: ['Essential','Expression','Extreme'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 65 HP', hp: 65, cc: 0, packages: ['Expression','Extreme'] },
    ]},
    'logan': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 SCe 75 HP', hp: 75, cc: 999, packages: ['Ambiance','Laureate'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '0.9 TCe 90 HP', hp: 90, cc: 898, packages: ['Laureate','Stepway'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 dCi 90 HP', hp: 90, cc: 1461, packages: ['Ambiance','Laureate'] },
      { fuel: 'lpg', transmission: 'manuel', engine: '1.6 MPI 85 HP', hp: 85, cc: 1598, packages: ['Ambiance'] },
    ]},
  },

  // ══════════════════════════════════════
  // DODGE
  // ══════════════════════════════════════
  'dodge': {
    'challenger': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 305 HP', hp: 305, cc: 3604, packages: ['SXT','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 375 HP', hp: 375, cc: 5654, packages: ['R/T','R/T Scat Pack'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 Supercharged 717 HP', hp: 717, cc: 6166, packages: ['SRT Hellcat'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '6.4 V8 HEMI 485 HP', hp: 485, cc: 6417, packages: ['Scat Pack','Scat Pack Widebody'] },
    ]},
    'charger': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 300 HP', hp: 300, cc: 3604, packages: ['SXT','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 370 HP', hp: 370, cc: 5654, packages: ['R/T'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 Supercharged 717 HP', hp: 717, cc: 6166, packages: ['SRT Hellcat'] },
    ]},
    'durango': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 293 HP', hp: 293, cc: 3604, packages: ['SXT','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 360 HP', hp: 360, cc: 5654, packages: ['R/T','Citadel'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.4 V8 HEMI 475 HP', hp: 475, cc: 6417, packages: ['SRT'] },
    ]},
    'ram-1500': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 395 HP', hp: 395, cc: 5654, packages: ['Big Horn','Laramie','Limited','TRX'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 EcoDiesel 260 HP', hp: 260, cc: 2987, packages: ['Laramie','Limited'] },
    ]},
  },

  // ══════════════════════════════════════
  // DS
  // ══════════════════════════════════════
  'ds': {
    'ds3-crossback': { years: [2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['So Chic','Grand Chic','Performance Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 155 HP', hp: 155, cc: 1199, packages: ['Performance Line+'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['So Chic','Grand Chic'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'E-Tense Elektrik 136 HP', hp: 136, cc: 0, packages: ['So Chic','Grand Chic','Performance Line'] },
    ]},
    'ds4': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Bastille+','Performance Line+','Rivoli+'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 225 HP', hp: 225, cc: 1598, packages: ['Performance Line+','Rivoli+'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Bastille+','Performance Line+'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tense PHEV 225 HP', hp: 225, cc: 1598, packages: ['Performance Line+','Rivoli+'] },
    ]},
    'ds7': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 225 HP', hp: 225, cc: 1598, packages: ['Performance Line','Rivoli','Opera'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['So Chic','Performance Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 BlueHDi 180 HP', hp: 180, cc: 1997, packages: ['Performance Line','Rivoli'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tense PHEV 300 HP', hp: 300, cc: 1598, packages: ['Performance Line','Rivoli','Opera'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tense 4x4 PHEV 360 HP', hp: 360, cc: 1598, packages: ['Opera'] },
    ]},
  },

  // ══════════════════════════════════════
  // DAEWOO
  // ══════════════════════════════════════
  'daewoo': {
    'lanos': { years: [1997,1998,1999,2000,2001,2002,2003,2004], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.5 86 HP', hp: 86, cc: 1498, packages: ['S','SE','SX'] },
    ]},
    'nubira': { years: [1997,1998,1999,2000,2001,2002,2003,2004], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 106 HP', hp: 106, cc: 1598, packages: ['SE','SX','CDX'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 133 HP', hp: 133, cc: 1998, packages: ['CDX'] },
    ]},
    'matiz': { years: [1998,1999,2000,2001,2002,2003,2004,2005], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '0.8 52 HP', hp: 52, cc: 796, packages: ['S','SE','SX'] },
    ]},
    'lacetti': { years: [2003,2004,2005,2006,2007,2008], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 95 HP', hp: 95, cc: 1399, packages: ['SE','SX'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 109 HP', hp: 109, cc: 1598, packages: ['SX','CDX'] },
    ]},
  },

  // ══════════════════════════════════════
  // DFSK
  // ══════════════════════════════════════
  'dfsk': {
    'glory-580': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 150 HP', hp: 150, cc: 1498, packages: ['Comfort','Luxury'] },
    ]},
    'glory-560': { years: [2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 150 HP', hp: 150, cc: 1498, packages: ['Comfort','Luxury'] },
    ]},
  },

  // ══════════════════════════════════════
  // FERRARI
  // ══════════════════════════════════════
  'ferrari': {
    'roma': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Biturbo 620 HP', hp: 620, cc: 3855, packages: ['Base','Spider'] },
    ]},
    'sf90-stradale': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '4.0 V8 Hybrid 1000 HP', hp: 1000, cc: 3990, packages: ['Stradale','Spider','XX'] },
    ]},
    '296-gtb': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 Hybrid 830 HP', hp: 830, cc: 2992, packages: ['GTB','GTS'] },
    ]},
    'f8-tributo': { years: [2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Biturbo 720 HP', hp: 720, cc: 3902, packages: ['Tributo','Spider'] },
    ]},
    '812': { years: [2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.5 V12 800 HP', hp: 800, cc: 6496, packages: ['Superfast','GTS','Competizione'] },
    ]},
    'portofino': { years: [2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Biturbo 620 HP', hp: 620, cc: 3855, packages: ['Base','M'] },
    ]},
    'purosangue': { years: [2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.5 V12 725 HP', hp: 725, cc: 6496, packages: ['Base'] },
    ]},
  },

  // ══════════════════════════════════════
  // FIAT
  // ══════════════════════════════════════
  'fiat': {
    'egea': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Fire 95 HP', hp: 95, cc: 1368, packages: ['Easy','Lounge','Urban','Cross'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 FireFly 100 HP', hp: 100, cc: 999, packages: ['Urban Plus','Cross Plus','Lounge Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 FireFly 150 HP', hp: 150, cc: 1332, packages: ['Cross Plus'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Easy','Lounge','Urban','Cross'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Lounge Plus','Cross Plus'] },
      { fuel: 'lpg', transmission: 'manuel', engine: '1.4 Fire LPG 95 HP', hp: 95, cc: 1368, packages: ['Easy','Urban'] },
    ]},
    '500': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 69 HP', hp: 69, cc: 1242, packages: ['Pop','Lounge','Star','Rockstar'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '0.9 TwinAir 85 HP', hp: 85, cc: 875, packages: ['Lounge','Star'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 Hybrid 70 HP', hp: 70, cc: 999, packages: ['Pop','Dolcevita','Sport'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: '500e Elektrik 118 HP', hp: 118, cc: 0, packages: ['Action','Passion','Icon','La Prima'] },
    ]},
    '500x': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 FireFly 150 HP', hp: 150, cc: 1332, packages: ['City Cross','Cross','Sport'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 E-torQ 110 HP', hp: 110, cc: 1598, packages: ['Pop Star','Cross'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Cross','Sport'] },
    ]},
    'doblo': { years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Safeline','Premio','Trek','Cross'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 120 HP', hp: 120, cc: 1598, packages: ['Premio','Trek'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Fire 95 HP', hp: 95, cc: 1368, packages: ['Safeline','Easy'] },
    ]},
    'panda': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 69 HP', hp: 69, cc: 1242, packages: ['Pop','Lounge','City Cross'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '0.9 TwinAir 85 HP', hp: 85, cc: 875, packages: ['Lounge','Cross'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 Hybrid 70 HP', hp: 70, cc: 999, packages: ['Sport','City Life'] },
    ]},
    'linea': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Fire 77 HP', hp: 77, cc: 1368, packages: ['Active','Actual','Dynamic'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 T-Jet 120 HP', hp: 120, cc: 1368, packages: ['Dynamic','Emotion'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Active','Dynamic'] },
    ]},
    'punto': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 69 HP', hp: 69, cc: 1242, packages: ['Pop','Easy','Lounge'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 77 HP', hp: 77, cc: 1368, packages: ['Easy','Lounge'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 75 HP', hp: 75, cc: 1248, packages: ['Pop','Easy','Lounge'] },
    ]},
    'tipo': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 FireFly 100 HP', hp: 100, cc: 999, packages: ['City Life','Cross'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Fire 95 HP', hp: 95, cc: 1368, packages: ['Pop','Easy','Lounge'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Easy','Lounge','Cross'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Lounge','Cross'] },
    ]},
  },

  // ══════════════════════════════════════
  // FORD
  // ══════════════════════════════════════
  'ford': {
    'focus': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 EcoBoost 100 HP', hp: 100, cc: 999, packages: ['Trend','Titanium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost 125 HP', hp: 125, cc: 999, packages: ['Trend','Titanium','ST-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 182 HP', hp: 182, cc: 1498, packages: ['ST-Line','ST-Line X'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.3 EcoBoost 280 HP', hp: 280, cc: 2261, packages: ['ST'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 EcoBlue 120 HP', hp: 120, cc: 1499, packages: ['Trend','Titanium','ST-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 EcoBlue 120 HP', hp: 120, cc: 1499, packages: ['Titanium','ST-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 EcoBlue 150 HP', hp: 150, cc: 1997, packages: ['ST-Line','ST-Line X'] },
      { fuel: 'lpg', transmission: 'manuel', engine: '1.6 Ti-VCT LPG 125 HP', hp: 125, cc: 1596, packages: ['Trend','Titanium'] },
    ]},
    'fiesta': { years: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 EcoBoost 100 HP', hp: 100, cc: 999, packages: ['Trend','Titanium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost 125 HP', hp: 125, cc: 999, packages: ['Titanium','ST-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 200 HP', hp: 200, cc: 1498, packages: ['ST'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 TDCi 85 HP', hp: 85, cc: 1499, packages: ['Trend','Titanium'] },
    ]},
    'kuga': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 150 HP', hp: 150, cc: 1498, packages: ['Titanium','ST-Line','ST-Line X'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 EcoBlue 120 HP', hp: 120, cc: 1499, packages: ['Titanium','ST-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 EcoBlue 190 HP', hp: 190, cc: 1997, packages: ['ST-Line','ST-Line X','Vignale'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 225 HP', hp: 225, cc: 2488, packages: ['ST-Line','ST-Line X','Vignale'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 FHEV 190 HP', hp: 190, cc: 2488, packages: ['Titanium','ST-Line'] },
    ]},
    'puma': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost Hybrid 125 HP', hp: 125, cc: 999, packages: ['Titanium','ST-Line','ST-Line X'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost Hybrid 155 HP', hp: 155, cc: 999, packages: ['ST-Line','ST-Line X','Vignale'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 200 HP', hp: 200, cc: 1498, packages: ['ST'] },
    ]},
    'ranger': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 EcoBlue 170 HP', hp: 170, cc: 1996, packages: ['XL','XLT','Wildtrak'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 EcoBlue Bi-Turbo 213 HP', hp: 213, cc: 1996, packages: ['Wildtrak','Raptor'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 TDCi 250 HP', hp: 250, cc: 2996, packages: ['Raptor'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '2.0 EcoBlue 170 HP', hp: 170, cc: 1996, packages: ['XL','XLT'] },
    ]},
    'mustang': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.3 EcoBoost 310 HP', hp: 310, cc: 2261, packages: ['Base','Premium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 450 HP', hp: 450, cc: 4951, packages: ['GT','GT Premium','Dark Horse'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '5.0 V8 450 HP', hp: 450, cc: 4951, packages: ['GT','Dark Horse'] },
    ]},
    'explorer': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 PHEV 457 HP', hp: 457, cc: 2956, packages: ['ST-Line','Platinum'] },
    ]},
    'transit-courier': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 TDCi 100 HP', hp: 100, cc: 1499, packages: ['Trend','Limited'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 EcoBoost 100 HP', hp: 100, cc: 999, packages: ['Trend','Limited'] },
    ]},
    'tourneo-courier': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 TDCi 100 HP', hp: 100, cc: 1499, packages: ['Trend','Titanium','Titanium Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost 125 HP', hp: 125, cc: 999, packages: ['Titanium','Titanium Plus'] },
    ]},
    'tourneo-connect': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 EcoBlue 120 HP', hp: 120, cc: 1499, packages: ['Trend','Titanium'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 EcoBlue 100 HP', hp: 100, cc: 1499, packages: ['Trend','Titanium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 114 HP', hp: 114, cc: 1498, packages: ['Titanium'] },
    ]},
  },
};

module.exports = VARIANTS_PART1;
