/**
 * Araç Varyant Veritabanı – Parça 2/4
 * GAC → Land Rover
 */

const VARIANTS_PART2 = {

  // ══════════════════════════════════════
  // GAC
  // ══════════════════════════════════════
  'gac': {
    'gs3': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 163 HP', hp: 163, cc: 1498, packages: ['Comfort','Luxury'] },
    ]},
    'gs4': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 169 HP', hp: 169, cc: 1498, packages: ['Comfort','Luxury','Premium'] },
    ]},
    'gs8': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 252 HP', hp: 252, cc: 1998, packages: ['Luxury','Premium','Flagship'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Turbo Hybrid 252 HP', hp: 252, cc: 1998, packages: ['Hybrid Premium'] },
    ]},
    'emkoo': { years: [2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 177 HP', hp: 177, cc: 1498, packages: ['Comfort','Luxury'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Turbo HEV 232 HP', hp: 232, cc: 1998, packages: ['Hybrid Luxury'] },
    ]},
    'aion-s': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 177 HP', hp: 177, cc: 0, packages: ['Plus','Max'] },
    ]},
    'aion-y': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 177 HP', hp: 177, cc: 0, packages: ['Plus','Max'] },
    ]},
  },

  // ══════════════════════════════════════
  // GEELY
  // ══════════════════════════════════════
  'geely': {
    'coolray': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 177 HP', hp: 177, cc: 1477, packages: ['Comfort','Premium','Flagship'] },
    ]},
    'atlas': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 141 HP', hp: 141, cc: 2394, packages: ['Comfort','Luxury'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.8 Turbo 184 HP', hp: 184, cc: 1799, packages: ['Luxury','Flagship'] },
    ]},
    'emgrand': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 CVT 114 HP', hp: 114, cc: 1498, packages: ['Comfort','Luxury'] },
    ]},
    'monjaro': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 238 HP', hp: 238, cc: 1998, packages: ['Luxury','Flagship'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo HEV 340 HP', hp: 340, cc: 1477, packages: ['Hybrid Flagship'] },
    ]},
    'tugella': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 238 HP', hp: 238, cc: 1998, packages: ['Luxury','Flagship'] },
    ]},
  },

  // ══════════════════════════════════════
  // HONDA
  // ══════════════════════════════════════
  'honda': {
    'civic': { years: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC Turbo 182 HP', hp: 182, cc: 1498, packages: ['Elegance','Executive','Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 VTEC Turbo 126 HP', hp: 126, cc: 988, packages: ['Comfort','Elegance'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 i-VTEC 125 HP', hp: 125, cc: 1598, packages: ['Comfort','Elegance','Executive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 VTEC Turbo 320 HP', hp: 320, cc: 1996, packages: ['Type R'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 184 HP', hp: 184, cc: 1993, packages: ['Elegance','Advance','Sport'] },
    ]},
    'cr-v': { years: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC Turbo 193 HP', hp: 193, cc: 1498, packages: ['Comfort','Elegance','Executive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 i-VTEC 155 HP', hp: 155, cc: 1997, packages: ['Elegance','Executive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 i-DTEC 160 HP', hp: 160, cc: 1597, packages: ['Elegance','Executive'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 204 HP', hp: 204, cc: 1993, packages: ['Elegance','Advance','Lifestyle'] },
    ]},
    'hr-v': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC 131 HP', hp: 131, cc: 1498, packages: ['Comfort','Elegance','Executive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC Turbo 182 HP', hp: 182, cc: 1498, packages: ['Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e:HEV 131 HP', hp: 131, cc: 1498, packages: ['Elegance','Advance'] },
    ]},
    'jazz': { years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 i-VTEC 102 HP', hp: 102, cc: 1318, packages: ['Comfort','Elegance'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 i-VTEC 130 HP', hp: 130, cc: 1498, packages: ['Executive'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e:HEV 109 HP', hp: 109, cc: 1498, packages: ['Elegance','Crosstar'] },
    ]},
    'accord': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC Turbo 192 HP', hp: 192, cc: 1498, packages: ['Comfort','Elegance','Executive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 i-VTEC 155 HP', hp: 155, cc: 1997, packages: ['Comfort','Elegance'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 204 HP', hp: 204, cc: 1993, packages: ['Advance'] },
    ]},
    'zr-v': { years: [2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 184 HP', hp: 184, cc: 1993, packages: ['Elegance','Advance','Sport'] },
    ]},
    'e-ny1': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['Elegance','Advance'] },
    ]},
  },

  // ══════════════════════════════════════
  // HYUNDAI
  // ══════════════════════════════════════
  'hyundai': {
    'i10': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 67 HP', hp: 67, cc: 998, packages: ['Jump','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 AMT 67 HP', hp: 67, cc: 998, packages: ['Style','Style Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 84 HP', hp: 84, cc: 1197, packages: ['Style Plus'] },
    ]},
    'i20': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 100 HP', hp: 100, cc: 998, packages: ['Jump','Style','Style Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 100 HP', hp: 100, cc: 1368, packages: ['Style'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 84 HP', hp: 84, cc: 1197, packages: ['Jump','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Style Plus','N Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 204 HP', hp: 204, cc: 1598, packages: ['N'] },
    ]},
    'bayon': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 100 HP', hp: 100, cc: 998, packages: ['Jump','Style','Style Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 100 HP', hp: 100, cc: 1368, packages: ['Jump'] },
    ]},
    'i30': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 T-GDi 160 HP', hp: 160, cc: 1482, packages: ['Style','Style Plus','N Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Jump','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 T-GDi 280 HP', hp: 280, cc: 1998, packages: ['N','N Performance'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Style','Style Plus'] },
    ]},
    'elantra': { years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 123 HP', hp: 123, cc: 1591, packages: ['Style','Elite'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 201 HP', hp: 201, cc: 1598, packages: ['N Line'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 123 HP', hp: 123, cc: 1591, packages: ['Team'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Style','Elite'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 HEV 141 HP', hp: 141, cc: 1580, packages: ['Style','Elite','N Line'] },
    ]},
    'tucson': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 150 HP', hp: 150, cc: 1598, packages: ['Style','Elite','N Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Style','Elite'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi HEV 230 HP', hp: 230, cc: 1598, packages: ['Style','Elite','N Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi PHEV 265 HP', hp: 265, cc: 1598, packages: ['Elite','N Line'] },
    ]},
    'kona': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Style','Elite'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 198 HP', hp: 198, cc: 1598, packages: ['N Line','N'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 HEV 141 HP', hp: 141, cc: 1580, packages: ['Style','Elite','N Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 136 HP', hp: 136, cc: 0, packages: ['Style','Elite'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['Elite','N Line'] },
    ]},
    'santa-fe': { years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 T-GDi 281 HP', hp: 281, cc: 2497, packages: ['Style','Elite','Calligraphy'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 202 HP', hp: 202, cc: 2199, packages: ['Style','Elite','Calligraphy'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi HEV 230 HP', hp: 230, cc: 1598, packages: ['Elite','Calligraphy'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi PHEV 265 HP', hp: 265, cc: 1598, packages: ['Calligraphy'] },
    ]},
    'ioniq-5': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik RWD 228 HP', hp: 228, cc: 0, packages: ['Style','Elite'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 325 HP', hp: 325, cc: 0, packages: ['Elite','N Line','N'] },
    ]},
    'ioniq-6': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik RWD 228 HP', hp: 228, cc: 0, packages: ['Style','Elite'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 325 HP', hp: 325, cc: 0, packages: ['Elite','First Edition'] },
    ]},
    'staria': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 177 HP', hp: 177, cc: 2199, packages: ['Style','Elite','Premium'] },
    ]},
    'accent': { years: [1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 100 HP', hp: 100, cc: 1368, packages: ['Mode','Style','Elite'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 123 HP', hp: 123, cc: 1591, packages: ['Style','Elite'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 100 HP', hp: 100, cc: 1368, packages: ['Mode','Team'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 128 HP', hp: 128, cc: 1582, packages: ['Style','Elite'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.6 CRDi 128 HP', hp: 128, cc: 1582, packages: ['Mode','Style'] },
    ]},
  },

  // ══════════════════════════════════════
  // INFINITI
  // ══════════════════════════════════════
  'infiniti': {
    'q30': { years: [2015,2016,2017,2018,2019], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6t 156 HP', hp: 156, cc: 1595, packages: ['Pure','Luxe','Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0t 211 HP', hp: 211, cc: 1991, packages: ['Sport','Premium'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5d 109 HP', hp: 109, cc: 1461, packages: ['Pure','Luxe'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2d 170 HP', hp: 170, cc: 2143, packages: ['Luxe','Sport','Premium'] },
    ]},
    'q50': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0t 211 HP', hp: 211, cc: 1991, packages: ['Pure','Luxe','Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0t 400 HP', hp: 400, cc: 2997, packages: ['Red Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2d 170 HP', hp: 170, cc: 2143, packages: ['Pure','Luxe','Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.5 V6 Hybrid 364 HP', hp: 364, cc: 3498, packages: ['Hybrid Sport'] },
    ]},
    'qx50': { years: [2018,2019,2020,2021,2022], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 VC-Turbo 268 HP', hp: 268, cc: 1997, packages: ['Pure','Luxe','Essential','Sensory'] },
    ]},
    'qx70': { years: [2013,2014,2015,2016,2017,2018], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.7 V6 320 HP', hp: 320, cc: 3696, packages: ['GT','S','S Premium'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0d V6 238 HP', hp: 238, cc: 2993, packages: ['GT','S'] },
    ]},
  },

  // ══════════════════════════════════════
  // ISUZU
  // ══════════════════════════════════════
  'isuzu': {
    'd-max': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.9 Ddi 163 HP', hp: 163, cc: 1898, packages: ['L','LS','V-Cross'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 Ddi 190 HP', hp: 190, cc: 2999, packages: ['V-Cross','AT35 Arctic'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.9 Ddi 163 HP', hp: 163, cc: 1898, packages: ['L','LS'] },
    ]},
  },

  // ══════════════════════════════════════
  // IVECO
  // ══════════════════════════════════════
  'iveco': {
    'daily': { years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '2.3 JTD 136 HP', hp: 136, cc: 2287, packages: ['35S13','35S16','35C16'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 JTD 180 HP', hp: 180, cc: 2998, packages: ['35S18','50C18','70C18'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.3 JTD 156 HP', hp: 156, cc: 2287, packages: ['Hi-Matic 35S16'] },
    ]},
  },

  // ══════════════════════════════════════
  // JAGUAR
  // ══════════════════════════════════════
  'jaguar': {
    'xe': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1999, packages: ['Prestige','R-Dynamic S','R-Dynamic SE','R-Dynamic HSE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1999, packages: ['R-Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0d 180 HP', hp: 180, cc: 1999, packages: ['Prestige','R-Dynamic S','R-Dynamic SE'] },
    ]},
    'xf': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1999, packages: ['Prestige','R-Dynamic S','R-Dynamic SE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0d 204 HP', hp: 204, cc: 1999, packages: ['Prestige','R-Dynamic S','R-Dynamic SE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 380 HP', hp: 380, cc: 2995, packages: ['S'] },
    ]},
    'f-pace': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1999, packages: ['Prestige','R-Dynamic S','R-Dynamic SE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1999, packages: ['R-Dynamic SE','R-Dynamic HSE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 550 HP', hp: 550, cc: 5000, packages: ['SVR'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0d 204 HP', hp: 204, cc: 1999, packages: ['Prestige','R-Dynamic S','R-Dynamic SE'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 P400e PHEV 404 HP', hp: 404, cc: 1999, packages: ['R-Dynamic SE','R-Dynamic HSE'] },
    ]},
    'e-pace': { years: [2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1999, packages: ['S','SE','R-Dynamic S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1999, packages: ['R-Dynamic SE','R-Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0d 163 HP', hp: 163, cc: 1999, packages: ['S','SE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0d 204 HP', hp: 204, cc: 1999, packages: ['R-Dynamic S','R-Dynamic SE'] },
    ]},
    'i-pace': { years: [2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 400 HP', hp: 400, cc: 0, packages: ['S','SE','HSE'] },
    ]},
    'f-type': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1999, packages: ['R-Dynamic'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 450 HP', hp: 450, cc: 5000, packages: ['R-Dynamic','R'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 575 HP', hp: 575, cc: 5000, packages: ['SVR','R75'] },
    ]},
  },

  // ══════════════════════════════════════
  // JEEP
  // ══════════════════════════════════════
  'jeep': {
    'renegade': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 Turbo 150 HP', hp: 150, cc: 1332, packages: ['Longitude','Limited','S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 Turbo 180 HP', hp: 180, cc: 1332, packages: ['Limited','S','Trailhawk'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Longitude','Limited'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.3 Turbo PHEV 240 HP', hp: 240, cc: 1332, packages: ['S','Trailhawk'] },
    ]},
    'compass': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 Turbo 150 HP', hp: 150, cc: 1332, packages: ['Longitude','Limited'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 Turbo 180 HP', hp: 180, cc: 1332, packages: ['Limited','S','Trailhawk'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Longitude','Limited'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.3 Turbo PHEV 240 HP', hp: 240, cc: 1332, packages: ['S','Trailhawk'] },
    ]},
    'grand-cherokee': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 272 HP', hp: 272, cc: 1995, packages: ['Limited','Overland','Summit'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 290 HP', hp: 290, cc: 3604, packages: ['Laredo','Limited','Overland'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 357 HP', hp: 357, cc: 5654, packages: ['Overland','Summit'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 CRD 250 HP', hp: 250, cc: 2987, packages: ['Limited','Overland'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Turbo PHEV 380 HP', hp: 380, cc: 1995, packages: ['4xe Limited','4xe Overland','4xe Summit'] },
    ]},
    'wrangler': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 272 HP', hp: 272, cc: 1995, packages: ['Sport','Sahara','Rubicon'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 285 HP', hp: 285, cc: 3604, packages: ['Sport','Sahara','Rubicon'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.4 V8 HEMI 470 HP', hp: 470, cc: 6417, packages: ['Rubicon 392'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRD 200 HP', hp: 200, cc: 2143, packages: ['Sahara','Rubicon'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Turbo PHEV 380 HP', hp: 380, cc: 1995, packages: ['4xe Sahara','4xe Rubicon'] },
    ]},
    'avenger': { years: [2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 100 HP', hp: 100, cc: 1199, packages: ['Longitude','Limited'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 136 HP', hp: 136, cc: 1199, packages: ['Summit','S'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 156 HP', hp: 156, cc: 0, packages: ['Longitude','Summit','S'] },
    ]},
    'gladiator': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 285 HP', hp: 285, cc: 3604, packages: ['Sport','Overland','Rubicon'] },
    ]},
  },

  // ══════════════════════════════════════
  // KIA
  // ══════════════════════════════════════
  'kia': {
    'picanto': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 67 HP', hp: 67, cc: 998, packages: ['Cool','Concept'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 AMT 67 HP', hp: 67, cc: 998, packages: ['Concept','Prestige'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 84 HP', hp: 84, cc: 1197, packages: ['Prestige','GT-Line'] },
    ]},
    'rio': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 100 HP', hp: 100, cc: 998, packages: ['Cool','Concept','Prestige'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Prestige','GT-Line'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 84 HP', hp: 84, cc: 1197, packages: ['Cool','Concept'] },
    ]},
    'ceed': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 T-GDi 160 HP', hp: 160, cc: 1482, packages: ['Cool','Concept Plus','Prestige','GT-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Cool','Concept'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Concept','Prestige'] },
    ]},
    'cerato': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 123 HP', hp: 123, cc: 1591, packages: ['Cool','Concept','Prestige'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 204 HP', hp: 204, cc: 1598, packages: ['GT-Line'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 123 HP', hp: 123, cc: 1591, packages: ['Cool'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Concept','Prestige'] },
    ]},
    'sportage': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 150 HP', hp: 150, cc: 1598, packages: ['Cool','Concept','Prestige','GT-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Concept','Prestige','GT-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi HEV 230 HP', hp: 230, cc: 1598, packages: ['Concept','Prestige','GT-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi PHEV 265 HP', hp: 265, cc: 1598, packages: ['Prestige','GT-Line'] },
    ]},
    'sorento': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 T-GDi 281 HP', hp: 281, cc: 2497, packages: ['Concept','Prestige','GT-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 202 HP', hp: 202, cc: 2199, packages: ['Concept','Prestige','GT-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi HEV 230 HP', hp: 230, cc: 1598, packages: ['Prestige','GT-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi PHEV 265 HP', hp: 265, cc: 1598, packages: ['GT-Line'] },
    ]},
    'ev6': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik RWD 228 HP', hp: 228, cc: 0, packages: ['Air','Wind'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 325 HP', hp: 325, cc: 0, packages: ['Wind AWD','GT-Line','GT'] },
    ]},
    'ev9': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik RWD 204 HP', hp: 204, cc: 0, packages: ['Air','Wind'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 385 HP', hp: 385, cc: 0, packages: ['GT-Line','GT-Line AWD'] },
    ]},
    'stinger': { years: [2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 T-GDi 255 HP', hp: 255, cc: 1998, packages: ['GT-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.3 T-GDi 370 HP', hp: 370, cc: 3342, packages: ['GT'] },
    ]},
    'stonic': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 100 HP', hp: 100, cc: 998, packages: ['Cool','Concept','Prestige'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Prestige','GT-Line'] },
    ]},
    'niro': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 HEV 141 HP', hp: 141, cc: 1580, packages: ['Cool','Concept','Prestige'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 183 HP', hp: 183, cc: 1580, packages: ['Prestige'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['Concept','Prestige'] },
    ]},
  },

  // ══════════════════════════════════════
  // LAMBORGHINI
  // ══════════════════════════════════════
  'lamborghini': {
    'huracan': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V10 610 HP', hp: 610, cc: 5204, packages: ['LP 610-4','EVO','Tecnica'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V10 640 HP', hp: 640, cc: 5204, packages: ['STO','EVO RWD'] },
    ]},
    'urus': { years: [2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 650 HP', hp: 650, cc: 3996, packages: ['Base','S','Performante'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '4.0 V8 Hybrid 800 HP', hp: 800, cc: 3996, packages: ['SE'] },
    ]},
    'aventador': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.5 V12 700 HP', hp: 700, cc: 6498, packages: ['LP 700-4','S','SVJ','Ultimae'] },
    ]},
    'revuelto': { years: [2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '6.5 V12 Hybrid 1015 HP', hp: 1015, cc: 6498, packages: ['Base'] },
    ]},
  },

  // ══════════════════════════════════════
  // LANCIA
  // ══════════════════════════════════════
  'lancia': {
    'ypsilon': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 69 HP', hp: 69, cc: 1242, packages: ['Silver','Gold'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '0.9 TwinAir 85 HP', hp: 85, cc: 875, packages: ['Gold','Platinum'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 156 HP', hp: 156, cc: 0, packages: ['Ypsilon Elettrica (2024+)'] },
    ]},
  },

  // ══════════════════════════════════════
  // LAND ROVER
  // ══════════════════════════════════════
  'land-rover': {
    'range-rover': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 P400 400 HP', hp: 400, cc: 2997, packages: ['SE','HSE','Autobiography'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 V8 530 HP', hp: 530, cc: 4395, packages: ['SV','First Edition'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D350 350 HP', hp: 350, cc: 2997, packages: ['SE','HSE','Autobiography'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['SE','HSE'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 P440e PHEV 440 HP', hp: 440, cc: 2997, packages: ['HSE','Autobiography'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 P510e PHEV 510 HP', hp: 510, cc: 2997, packages: ['Autobiography','SV'] },
    ]},
    'range-rover-sport': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 P400 400 HP', hp: 400, cc: 2997, packages: ['Dynamic SE','Dynamic HSE','Autobiography'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 V8 530 HP', hp: 530, cc: 4395, packages: ['SV Edition One','First Edition'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D350 350 HP', hp: 350, cc: 2997, packages: ['Dynamic SE','Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['Dynamic SE'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 P460e PHEV 460 HP', hp: 460, cc: 2997, packages: ['Dynamic HSE','Autobiography'] },
    ]},
    'range-rover-velar': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 P250 250 HP', hp: 250, cc: 1999, packages: ['S','SE','Dynamic SE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 P400e PHEV 404 HP', hp: 404, cc: 1999, packages: ['Dynamic SE','Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D200 204 HP', hp: 204, cc: 1999, packages: ['S','SE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['Dynamic SE','Dynamic HSE'] },
    ]},
    'range-rover-evoque': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 P200 200 HP', hp: 200, cc: 1999, packages: ['S','SE','Dynamic SE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 P250 250 HP', hp: 250, cc: 1999, packages: ['Dynamic SE','Dynamic HSE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 P300e PHEV 309 HP', hp: 309, cc: 1999, packages: ['Dynamic SE','Dynamic HSE','Autobiography'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D200 204 HP', hp: 204, cc: 1999, packages: ['S','SE','Dynamic SE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D165 163 HP', hp: 163, cc: 1999, packages: ['S','SE'] },
    ]},
    'discovery': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 P360 360 HP', hp: 360, cc: 2997, packages: ['S','SE','HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['S','SE','HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D250 249 HP', hp: 249, cc: 2997, packages: ['S','SE'] },
    ]},
    'discovery-sport': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 P200 200 HP', hp: 200, cc: 1999, packages: ['S','SE','Dynamic SE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 P250 250 HP', hp: 250, cc: 1999, packages: ['Dynamic SE','Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D200 204 HP', hp: 204, cc: 1999, packages: ['S','SE','Dynamic SE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D165 163 HP', hp: 163, cc: 1999, packages: ['S','SE'] },
    ]},
    'defender': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 P300 300 HP', hp: 300, cc: 1999, packages: ['SE','HSE','X'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 P400 400 HP', hp: 400, cc: 2997, packages: ['HSE','X-Dynamic HSE','V8'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 525 HP', hp: 525, cc: 5000, packages: ['V8'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['SE','HSE','X-Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D250 249 HP', hp: 249, cc: 2997, packages: ['SE'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 P400e PHEV 404 HP', hp: 404, cc: 1999, packages: ['X-Dynamic HSE','X'] },
    ]},
  },

};

module.exports = VARIANTS_PART2;
