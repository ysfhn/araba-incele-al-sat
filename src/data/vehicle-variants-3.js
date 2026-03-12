/**
 * Araç Varyant Veritabanı – Parça 3/4
 * Lexus → Porsche
 */

const VARIANTS_PART3 = {

  // ══════════════════════════════════════
  // LEXUS
  // ══════════════════════════════════════
  'lexus': {
    'es': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 218 HP', hp: 218, cc: 2487, packages: ['Premium','Takumi','F Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 203 HP', hp: 203, cc: 2487, packages: ['Premium'] },
    ]},
    'is': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 223 HP', hp: 223, cc: 2494, packages: ['Premium','F Sport','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 245 HP', hp: 245, cc: 1998, packages: ['F Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 V6 311 HP', hp: 311, cc: 3456, packages: ['F Sport'] },
    ]},
    'nx': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 242 HP', hp: 242, cc: 2487, packages: ['Premium','F Sport','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 203 HP', hp: 203, cc: 2487, packages: ['Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 309 HP', hp: 309, cc: 2487, packages: ['F Sport','Takumi'] },
    ]},
    'rx': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 246 HP', hp: 246, cc: 2487, packages: ['Premium','F Sport','Takumi'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 306 HP', hp: 306, cc: 2487, packages: ['F Sport','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 Turbo 279 HP', hp: 279, cc: 2393, packages: ['F Sport'] },
    ]},
    'ux': { years: [2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Hybrid 184 HP', hp: 184, cc: 1987, packages: ['Premium','F Sport','Takumi'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'UX 300e Elektrik 204 HP', hp: 204, cc: 0, packages: ['Premium','Takumi'] },
    ]},
    'lc': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 464 HP', hp: 464, cc: 4969, packages: ['Base','Touring','Sport+'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.5 V6 Hybrid 354 HP', hp: 354, cc: 3456, packages: ['Base','Sport+'] },
    ]},
    'ls': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.5 V6 Hybrid 354 HP', hp: 354, cc: 3456, packages: ['Luxury','F Sport','Executive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 V6 Turbo 416 HP', hp: 416, cc: 3445, packages: ['F Sport'] },
    ]},
    'rz': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 313 HP', hp: 313, cc: 0, packages: ['Premium','F Sport','Takumi'] },
    ]},
    'lbx': { years: [2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Hybrid 136 HP', hp: 136, cc: 1490, packages: ['Elegant','Cool','Relax'] },
    ]},
  },

  // ══════════════════════════════════════
  // MASERATI
  // ══════════════════════════════════════
  'maserati': {
    'ghibli': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 330 HP', hp: 330, cc: 1995, packages: ['GT','Modena','Trofeo'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 350 HP', hp: 350, cc: 2979, packages: ['Base','S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.8 V8 580 HP', hp: 580, cc: 3799, packages: ['Trofeo'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 275 HP', hp: 275, cc: 2987, packages: ['Base','GranLusso','GranSport'] },
    ]},
    'levante': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 330 HP', hp: 330, cc: 1995, packages: ['GT','Modena'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 350 HP', hp: 350, cc: 2979, packages: ['Base','S','GTS'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.8 V8 580 HP', hp: 580, cc: 3799, packages: ['Trofeo'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 275 HP', hp: 275, cc: 2987, packages: ['Base','GranLusso'] },
    ]},
    'quattroporte': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 350 HP', hp: 350, cc: 2979, packages: ['Base','S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.8 V8 580 HP', hp: 580, cc: 3799, packages: ['Trofeo'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 275 HP', hp: 275, cc: 2987, packages: ['Base','GranLusso'] },
    ]},
    'mc20': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Nettuno 630 HP', hp: 630, cc: 2992, packages: ['Coupe','Cielo'] },
    ]},
    'grecale': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1995, packages: ['GT','Modena'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 530 HP', hp: 530, cc: 2992, packages: ['Trofeo'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Folgore Elektrik 557 HP', hp: 557, cc: 0, packages: ['Folgore'] },
    ]},
    'granturismo': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Nettuno 490 HP', hp: 490, cc: 2992, packages: ['Modena','Trofeo'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Folgore Elektrik 761 HP', hp: 761, cc: 0, packages: ['Folgore'] },
    ]},
  },

  // ══════════════════════════════════════
  // MAZDA
  // ══════════════════════════════════════
  'mazda': {
    '2': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 SKYACTIV-G 90 HP', hp: 90, cc: 1496, packages: ['Motion','Takumi'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e-SKYACTIV-G Hybrid 116 HP', hp: 116, cc: 1490, packages: ['Centre-Line','Exclusive-Line'] },
    ]},
    '3': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 122 HP', hp: 122, cc: 1998, packages: ['Motion','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 150 HP', hp: 150, cc: 1998, packages: ['Takumi','Takumi Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-X 186 HP', hp: 186, cc: 1998, packages: ['Takumi','Takumi Plus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.8 SKYACTIV-D 116 HP', hp: 116, cc: 1759, packages: ['Motion','Takumi'] },
    ]},
    '6': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 165 HP', hp: 165, cc: 1998, packages: ['Emotion','Motion','Power'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 SKYACTIV-G 194 HP', hp: 194, cc: 2488, packages: ['Power','Takumi Plus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 SKYACTIV-D 184 HP', hp: 184, cc: 2191, packages: ['Power','Takumi'] },
    ]},
    'cx-3': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 121 HP', hp: 121, cc: 1998, packages: ['Motion','Power'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 150 HP', hp: 150, cc: 1998, packages: ['Power','Takumi'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.8 SKYACTIV-D 116 HP', hp: 116, cc: 1759, packages: ['Motion','Power'] },
    ]},
    'cx-5': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 165 HP', hp: 165, cc: 1998, packages: ['Motion','Power','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 SKYACTIV-G 194 HP', hp: 194, cc: 2488, packages: ['Power','Takumi'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 SKYACTIV-D 184 HP', hp: 184, cc: 2191, packages: ['Power','Takumi'] },
    ]},
    'cx-30': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 122 HP', hp: 122, cc: 1998, packages: ['Motion','Power'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 150 HP', hp: 150, cc: 1998, packages: ['Power','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-X 186 HP', hp: 186, cc: 1998, packages: ['Takumi'] },
    ]},
    'cx-60': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 SKYACTIV-G 192 HP', hp: 192, cc: 2488, packages: ['Prime-Line','Exclusive-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.3 SKYACTIV-D 254 HP', hp: 254, cc: 3283, packages: ['Exclusive-Line','Takumi','Takumi Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 327 HP', hp: 327, cc: 2488, packages: ['Exclusive-Line','Takumi','Takumi Plus'] },
    ]},
    'mx-5': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.5 SKYACTIV-G 132 HP', hp: 132, cc: 1496, packages: ['Motion','Power'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '2.0 SKYACTIV-G 184 HP', hp: 184, cc: 1998, packages: ['Power','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 SKYACTIV-G 184 HP', hp: 184, cc: 1998, packages: ['Takumi'] },
    ]},
  },

  // ══════════════════════════════════════
  // MCLAREN
  // ══════════════════════════════════════
  'mclaren': {
    '720s': { years: [2017,2018,2019,2020,2021,2022], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 720 HP', hp: 720, cc: 3994, packages: ['Base','Performance','Spider'] },
    ]},
    '750s': { years: [2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 750 HP', hp: 750, cc: 3994, packages: ['Base','Spider'] },
    ]},
    'artura': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 Turbo Hybrid 680 HP', hp: 680, cc: 2993, packages: ['Base','Performance','Spider'] },
    ]},
    'gt': { years: [2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Biturbo 620 HP', hp: 620, cc: 3994, packages: ['Base','Luxe','MSO'] },
    ]},
    '570s': { years: [2015,2016,2017,2018,2019,2020,2021], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.8 V8 Biturbo 570 HP', hp: 570, cc: 3799, packages: ['Base','Spider'] },
    ]},
  },

  // ══════════════════════════════════════
  // MERCEDES-BENZ
  // ══════════════════════════════════════
  'mercedes': {
    'a-serisi': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 A 180 136 HP', hp: 136, cc: 1332, packages: ['Style','AMG Line','Edition 1'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 A 200 163 HP', hp: 163, cc: 1991, packages: ['Progressive','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 A 250 224 HP', hp: 224, cc: 1991, packages: ['AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 A 180d 116 HP', hp: 116, cc: 1461, packages: ['Style','Progressive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG A 35 306 HP', hp: 306, cc: 1991, packages: ['AMG A 35'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG A 45 S 421 HP', hp: 421, cc: 1991, packages: ['AMG A 45 S'] },
    ]},
    'c-serisi': { years: [1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 C 180 170 HP', hp: 170, cc: 1496, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 C 200 204 HP', hp: 204, cc: 1496, packages: ['Avantgarde','AMG Line','AMG Line Premium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 C 300 258 HP', hp: 258, cc: 1991, packages: ['AMG Line','AMG Line Premium Plus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 C 200d 163 HP', hp: 163, cc: 1597, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 C 220d 200 HP', hp: 200, cc: 1950, packages: ['Avantgarde','AMG Line','AMG Line Premium'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 C 300d 265 HP', hp: 265, cc: 1950, packages: ['AMG Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 C 300e PHEV 313 HP', hp: 313, cc: 1999, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG C 43 408 HP', hp: 408, cc: 1991, packages: ['AMG C 43'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG C 63 S 510 HP', hp: 510, cc: 3982, packages: ['AMG C 63 S'] },
    ]},
    'e-serisi': { years: [1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 E 200 204 HP', hp: 204, cc: 1999, packages: ['Avantgarde','AMG Line','Exclusive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 E 300 258 HP', hp: 258, cc: 1991, packages: ['AMG Line','AMG Line Premium Plus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 E 200d 163 HP', hp: 163, cc: 1950, packages: ['Avantgarde','Exclusive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 E 220d 197 HP', hp: 197, cc: 1950, packages: ['Avantgarde','AMG Line','Exclusive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 E 400d 340 HP', hp: 340, cc: 2925, packages: ['AMG Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 E 300e PHEV 313 HP', hp: 313, cc: 1999, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 AMG E 53 457 HP', hp: 457, cc: 2999, packages: ['AMG E 53'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG E 63 S 612 HP', hp: 612, cc: 3982, packages: ['AMG E 63 S'] },
    ]},
    's-serisi': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 S 450 367 HP', hp: 367, cc: 2999, packages: ['AMG Line','AMG Line Premium Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 S 500 435 HP', hp: 435, cc: 2999, packages: ['AMG Line','Exclusive','Maybach'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 S 350d 286 HP', hp: 286, cc: 2925, packages: ['AMG Line','Exclusive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 S 400d 330 HP', hp: 330, cc: 2925, packages: ['AMG Line','Exclusive'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 S 580e PHEV 510 HP', hp: 510, cc: 2999, packages: ['AMG Line','Exclusive','Maybach'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG S 63 802 HP', hp: 802, cc: 3982, packages: ['AMG S 63 E Performance'] },
    ]},
    'gla': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 GLA 200 163 HP', hp: 163, cc: 1332, packages: ['Progressive','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 GLA 250 224 HP', hp: 224, cc: 1991, packages: ['AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 GLA 200d 150 HP', hp: 150, cc: 1950, packages: ['Progressive','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG GLA 35 306 HP', hp: 306, cc: 1991, packages: ['AMG GLA 35'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG GLA 45 S 421 HP', hp: 421, cc: 1991, packages: ['AMG GLA 45 S'] },
    ]},
    'glb': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 GLB 200 163 HP', hp: 163, cc: 1332, packages: ['Progressive','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 GLB 250 224 HP', hp: 224, cc: 1991, packages: ['AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 GLB 200d 150 HP', hp: 150, cc: 1950, packages: ['Progressive','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG GLB 35 306 HP', hp: 306, cc: 1991, packages: ['AMG GLB 35'] },
    ]},
    'glc': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 GLC 200 204 HP', hp: 204, cc: 1999, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 GLC 300 258 HP', hp: 258, cc: 1999, packages: ['AMG Line','AMG Line Premium Plus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 GLC 220d 197 HP', hp: 197, cc: 1950, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 GLC 300d 269 HP', hp: 269, cc: 1950, packages: ['AMG Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 GLC 300e PHEV 313 HP', hp: 313, cc: 1999, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG GLC 43 421 HP', hp: 421, cc: 1991, packages: ['AMG GLC 43'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG GLC 63 S 510 HP', hp: 510, cc: 3982, packages: ['AMG GLC 63 S'] },
    ]},
    'gle': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 GLE 300 272 HP', hp: 272, cc: 1999, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 GLE 450 367 HP', hp: 367, cc: 2999, packages: ['AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 GLE 300d 272 HP', hp: 272, cc: 1950, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 GLE 400d 330 HP', hp: 330, cc: 2925, packages: ['AMG Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 GLE 350de PHEV 320 HP', hp: 320, cc: 1950, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG GLE 63 S 612 HP', hp: 612, cc: 3982, packages: ['AMG GLE 63 S'] },
    ]},
    'gls': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 GLS 450 367 HP', hp: 367, cc: 2999, packages: ['AMG Line','Maybach'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 GLS 400d 330 HP', hp: 330, cc: 2925, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 GLS 580 489 HP', hp: 489, cc: 3982, packages: ['AMG Line','Maybach'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG GLS 63 612 HP', hp: 612, cc: 3982, packages: ['AMG GLS 63'] },
    ]},
    'g-serisi': { years: [1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 G 450 367 HP', hp: 367, cc: 2999, packages: ['AMG Line','Stronger Than Time'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 G 500 422 HP', hp: 422, cc: 3982, packages: ['AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 G 400d 330 HP', hp: 330, cc: 2925, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG G 63 585 HP', hp: 585, cc: 3982, packages: ['AMG G 63'] },
    ]},
    'cla': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 CLA 180 136 HP', hp: 136, cc: 1332, packages: ['Style','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 CLA 200 163 HP', hp: 163, cc: 1991, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 CLA 250 224 HP', hp: 224, cc: 1991, packages: ['AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 CLA 200d 150 HP', hp: 150, cc: 1950, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG CLA 35 306 HP', hp: 306, cc: 1991, packages: ['AMG CLA 35'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 AMG CLA 45 S 421 HP', hp: 421, cc: 1991, packages: ['AMG CLA 45 S'] },
    ]},
    'eqa': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQA 250 190 HP', hp: 190, cc: 0, packages: ['Progressive','AMG Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQA 250+ 190 HP', hp: 190, cc: 0, packages: ['AMG Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQA 300 4MATIC 228 HP', hp: 228, cc: 0, packages: ['AMG Line'] },
    ]},
    'eqb': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQB 250 190 HP', hp: 190, cc: 0, packages: ['Progressive','AMG Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQB 300 4MATIC 228 HP', hp: 228, cc: 0, packages: ['AMG Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQB 350 4MATIC 292 HP', hp: 292, cc: 0, packages: ['AMG Line'] },
    ]},
    'eqc': { years: [2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQC 400 4MATIC 408 HP', hp: 408, cc: 0, packages: ['AMG Line','Edition 1886'] },
    ]},
    'eqe': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQE 300 245 HP', hp: 245, cc: 0, packages: ['AMG Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQE 350+ 292 HP', hp: 292, cc: 0, packages: ['AMG Line','AMG Line Premium Plus'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AMG EQE 43 476 HP', hp: 476, cc: 0, packages: ['AMG EQE 43'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AMG EQE 53 687 HP', hp: 687, cc: 0, packages: ['AMG EQE 53'] },
    ]},
    'eqs': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQS 450+ 333 HP', hp: 333, cc: 0, packages: ['AMG Line','Exclusive'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQS 580 4MATIC 523 HP', hp: 523, cc: 0, packages: ['AMG Line','Exclusive'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AMG EQS 53 761 HP', hp: 761, cc: 0, packages: ['AMG EQS 53'] },
    ]},
    'amg-gt': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG GT 476 HP', hp: 476, cc: 3982, packages: ['AMG GT','AMG GT S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG GT 585 HP', hp: 585, cc: 3982, packages: ['AMG GT R','AMG GT C'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 AMG GT 63 S 639 HP', hp: 639, cc: 3982, packages: ['AMG GT 63 S 4-Door'] },
    ]},
    'v-serisi': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 V 220d 163 HP', hp: 163, cc: 1950, packages: ['Style','Avantgarde','Exclusive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 V 250d 190 HP', hp: 190, cc: 1950, packages: ['Avantgarde','Exclusive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 V 300d 239 HP', hp: 239, cc: 1950, packages: ['Exclusive','AMG Line'] },
    ]},
    'vito': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 110 CDI 102 HP', hp: 102, cc: 1950, packages: ['Base','Pro','Select'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 114 CDI 136 HP', hp: 136, cc: 1950, packages: ['Pro','Select'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 116 CDI 163 HP', hp: 163, cc: 1950, packages: ['Select','Tourer'] },
    ]},
  },

  // ══════════════════════════════════════
  // MINI
  // ══════════════════════════════════════
  'mini': {
    'cooper': { years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 136 HP', hp: 136, cc: 1499, packages: ['Classic','Essential','Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Cooper S 192 HP', hp: 192, cc: 1998, packages: ['Classic','Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 JCW 231 HP', hp: 231, cc: 1998, packages: ['JCW'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Cooper SE Elektrik 184 HP', hp: 184, cc: 0, packages: ['Classic','Yours'] },
    ]},
    'countryman': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Cooper 136 HP', hp: 136, cc: 1499, packages: ['Classic','Essential'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Cooper S 178 HP', hp: 178, cc: 1998, packages: ['Essential','Yours'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 Cooper SD 190 HP', hp: 190, cc: 1995, packages: ['Essential'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Cooper SE PHEV 220 HP', hp: 220, cc: 1499, packages: ['Classic','Yours'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['E','SE'] },
    ]},
    'clubman': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Cooper 136 HP', hp: 136, cc: 1499, packages: ['Classic','Essential'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Cooper S 192 HP', hp: 192, cc: 1998, packages: ['Essential','Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 JCW 306 HP', hp: 306, cc: 1998, packages: ['JCW'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 Cooper D 150 HP', hp: 150, cc: 1995, packages: ['Classic'] },
    ]},
  },

  // ══════════════════════════════════════
  // MITSUBISHI
  // ══════════════════════════════════════
  'mitsubishi': {
    'asx': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 Turbo 140 HP', hp: 140, cc: 1332, packages: ['Inform','Invite','Instyle'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 117 HP', hp: 117, cc: 1590, packages: ['Inform','Invite'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 HEV 143 HP', hp: 143, cc: 1598, packages: ['Instyle','Intense'] },
    ]},
    'eclipse-cross': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 163 HP', hp: 163, cc: 1499, packages: ['Inform','Invite','Instyle'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.4 PHEV 188 HP', hp: 188, cc: 2360, packages: ['Instyle','Instyle Select'] },
    ]},
    'outlander': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 181 HP', hp: 181, cc: 2488, packages: ['Inform','Invite','Instyle'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.4 PHEV 224 HP', hp: 224, cc: 2360, packages: ['Instyle','Instyle Select'] },
    ]},
    'l200': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 DI-D 150 HP', hp: 150, cc: 2268, packages: ['Inform','Invite','Instyle'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '2.2 DI-D 150 HP', hp: 150, cc: 2268, packages: ['Inform','Invite'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.4 DI-D 181 HP', hp: 181, cc: 2442, packages: ['Instyle','Instyle Select'] },
    ]},
    'space-star': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 MIVEC 80 HP', hp: 80, cc: 1193, packages: ['Inform','Invite'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 MIVEC 71 HP', hp: 71, cc: 1193, packages: ['Inform'] },
    ]},
  },

  // ══════════════════════════════════════
  // MG
  // ══════════════════════════════════════
  'mg': {
    'zs': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 Turbo 111 HP', hp: 111, cc: 999, packages: ['Excite','Exclusive'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ZS EV Elektrik 177 HP', hp: 177, cc: 0, packages: ['Excite','Exclusive','Trophy'] },
    ]},
    'hs': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 162 HP', hp: 162, cc: 1490, packages: ['Excite','Exclusive'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo PHEV 258 HP', hp: 258, cc: 1490, packages: ['Exclusive','Trophy'] },
    ]},
    'mg4': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 170 HP', hp: 170, cc: 0, packages: ['SE','SE Long Range'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['Trophy','Trophy Extended'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik XPOWER 435 HP', hp: 435, cc: 0, packages: ['XPOWER'] },
    ]},
    'mg5': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 156 HP', hp: 156, cc: 0, packages: ['Excite','Exclusive','Trophy'] },
    ]},
    'marvel-r': { years: [2021,2022,2023,2024], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 180 HP', hp: 180, cc: 0, packages: ['Comfort','Luxury','Performance'] },
    ]},
  },

  // ══════════════════════════════════════
  // NISSAN
  // ══════════════════════════════════════
  'nissan': {
    'micra': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 IG-T 92 HP', hp: 92, cc: 999, packages: ['Visia+','Acenta','N-Design'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 IG-T 92 HP', hp: 92, cc: 999, packages: ['Visia','Acenta'] },
    ]},
    'qashqai': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 DIG-T 158 HP', hp: 158, cc: 1332, packages: ['Acenta','N-Connecta','Tekna','Tekna+'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 e-POWER 190 HP', hp: 190, cc: 1498, packages: ['Acenta','N-Connecta','Tekna','Tekna+'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 dCi 115 HP', hp: 115, cc: 1461, packages: ['Acenta','Tekna'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 dCi 115 HP', hp: 115, cc: 1461, packages: ['Visia+','Acenta'] },
    ]},
    'x-trail': { years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 e-POWER 204 HP', hp: 204, cc: 1498, packages: ['N-Connecta','Tekna','Tekna+'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VC-T 163 HP', hp: 163, cc: 1498, packages: ['Acenta','N-Connecta'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.7 dCi 150 HP', hp: 150, cc: 1749, packages: ['N-Connecta','Tekna'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 dCi 177 HP', hp: 177, cc: 1997, packages: ['Tekna'] },
    ]},
    'juke': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 DIG-T 114 HP', hp: 114, cc: 999, packages: ['Visia','Acenta','N-Connecta','Tekna'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 DIG-T 114 HP', hp: 114, cc: 999, packages: ['Visia','Acenta'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Hybrid 143 HP', hp: 143, cc: 1598, packages: ['N-Connecta','Tekna','Tekna+'] },
    ]},
    'leaf': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 150 HP', hp: 150, cc: 0, packages: ['Acenta','N-Connecta','Tekna'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik e+ 217 HP', hp: 217, cc: 0, packages: ['Tekna'] },
    ]},
    'ariya': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 2WD 218 HP', hp: 218, cc: 0, packages: ['Advance','Evolve','Evolve+'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik e-4ORCE 306 HP', hp: 306, cc: 0, packages: ['Evolve+','e-4ORCE Performance'] },
    ]},
    'navara': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.3 dCi 190 HP', hp: 190, cc: 2298, packages: ['Visia','Acenta','N-Connecta','Tekna'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '2.3 dCi 163 HP', hp: 163, cc: 2298, packages: ['Visia','Acenta'] },
    ]},
    'gt-r': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.8 V6 Biturbo 570 HP', hp: 570, cc: 3799, packages: ['Premium','Track','Nismo'] },
    ]},
  },

  // ══════════════════════════════════════
  // OPEL
  // ══════════════════════════════════════
  'opel': {
    'corsa': { years: [1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 100 HP', hp: 100, cc: 1199, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['GS Line','GS'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 75 HP', hp: 75, cc: 1199, packages: ['Edition'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 CDTi 102 HP', hp: 102, cc: 1499, packages: ['Edition','Elegance'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Corsa-e Elektrik 136 HP', hp: 136, cc: 0, packages: ['Edition','Elegance','GS Line'] },
    ]},
    'astra': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 Turbo 180 HP', hp: 180, cc: 1598, packages: ['GS Line','GS'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 CDTi 130 HP', hp: 130, cc: 1499, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 180 HP', hp: 180, cc: 1598, packages: ['GS Line','GS'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Astra-e Elektrik 156 HP', hp: 156, cc: 0, packages: ['Edition','Elegance','GS Line'] },
    ]},
    'mokka': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 Turbo 100 HP', hp: 100, cc: 1199, packages: ['Edition'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 CDTi 110 HP', hp: 110, cc: 1499, packages: ['Edition','Elegance'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Mokka-e Elektrik 136 HP', hp: 136, cc: 0, packages: ['Edition','Elegance','GS Line'] },
    ]},
    'grandland': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 Turbo 180 HP', hp: 180, cc: 1598, packages: ['GS Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 CDTi 130 HP', hp: 130, cc: 1499, packages: ['Edition','Elegance'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 225 HP', hp: 225, cc: 1598, packages: ['GS Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 300 HP', hp: 300, cc: 1598, packages: ['GS Line 4x4'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Grandland Elektrik 213 HP', hp: 213, cc: 0, packages: ['GS'] },
    ]},
    'crossland': { years: [2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 Turbo 110 HP', hp: 110, cc: 1199, packages: ['Edition','Elegance'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 CDTi 110 HP', hp: 110, cc: 1499, packages: ['Edition','Elegance'] },
    ]},
    'insignia': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 165 HP', hp: 165, cc: 1490, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1998, packages: ['GS Line','GSi'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CDTi 136 HP', hp: 136, cc: 1598, packages: ['Edition','Elegance'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 CDTi 170 HP', hp: 170, cc: 1956, packages: ['Elegance','GS Line'] },
    ]},
    'combo': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 CDTi 130 HP', hp: 130, cc: 1499, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 CDTi 102 HP', hp: 102, cc: 1499, packages: ['Edition','Elegance'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Edition','Elegance'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Combo-e Elektrik 136 HP', hp: 136, cc: 0, packages: ['Edition','Elegance'] },
    ]},
  },

  // ══════════════════════════════════════
  // PEUGEOT
  // ══════════════════════════════════════
  'peugeot': {
    '208': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 100 HP', hp: 100, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Allure','GT','GT Pack'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 PureTech 75 HP', hp: 75, cc: 1199, packages: ['Active'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 BlueHDi 100 HP', hp: 100, cc: 1499, packages: ['Active','Allure'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-208 Elektrik 136 HP', hp: 136, cc: 0, packages: ['Active','Allure','GT','GT Pack'] },
    ]},
    '2008': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 155 HP', hp: 155, cc: 1199, packages: ['GT','GT Pack'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Allure','GT'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-2008 Elektrik 136 HP', hp: 136, cc: 0, packages: ['Active','Allure','GT'] },
    ]},
    '308': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 225 HP', hp: 225, cc: 1598, packages: ['GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure','GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 225 HP', hp: 225, cc: 1598, packages: ['GT'] },
    ]},
    '408': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Allure','GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 225 HP', hp: 225, cc: 1598, packages: ['GT','GT Pack'] },
    ]},
    '3008': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 180 HP', hp: 180, cc: 1598, packages: ['GT','GT Pack'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure','GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 BlueHDi 180 HP', hp: 180, cc: 1997, packages: ['GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 225 HP', hp: 225, cc: 1598, packages: ['GT','GT Pack'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 300 HP', hp: 300, cc: 1598, packages: ['GT 4x4'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'E-3008 Elektrik 213 HP', hp: 213, cc: 0, packages: ['Allure','GT'] },
    ]},
    '5008': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 180 HP', hp: 180, cc: 1598, packages: ['GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure','GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 BlueHDi 180 HP', hp: 180, cc: 1997, packages: ['GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PHEV 225 HP', hp: 225, cc: 1598, packages: ['GT'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'E-5008 Elektrik 213 HP', hp: 213, cc: 0, packages: ['Allure','GT'] },
    ]},
    'rifter': { years: [2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure','GT'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 BlueHDi 100 HP', hp: 100, cc: 1499, packages: ['Active'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Active','Allure'] },
    ]},
    'partner': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Premium'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 BlueHDi 100 HP', hp: 100, cc: 1499, packages: ['Active'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-Partner Elektrik 136 HP', hp: 136, cc: 0, packages: ['Active','Premium'] },
    ]},
  },

  // ══════════════════════════════════════
  // PORSCHE
  // ══════════════════════════════════════
  'porsche': {
    '911': { years: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Carrera 385 HP', hp: 385, cc: 2981, packages: ['Carrera','Carrera 4'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Carrera S 450 HP', hp: 450, cc: 2981, packages: ['Carrera S','Carrera 4S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 580 HP', hp: 580, cc: 3745, packages: ['Turbo'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.7 Turbo S 650 HP', hp: 650, cc: 3745, packages: ['Turbo S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 GT3 510 HP', hp: 510, cc: 3996, packages: ['GT3','GT3 RS'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '4.0 GT3 510 HP', hp: 510, cc: 3996, packages: ['GT3'] },
    ]},
    'cayenne': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 340 HP', hp: 340, cc: 2995, packages: ['Cayenne','Cayenne Coupe'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 550 HP', hp: 550, cc: 3996, packages: ['Cayenne GTS'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Turbo GT 640 HP', hp: 640, cc: 3996, packages: ['Turbo GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 E-Hybrid 470 HP', hp: 470, cc: 2995, packages: ['E-Hybrid','E-Hybrid Coupe'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '4.0 V8 Turbo S E-Hybrid 680 HP', hp: 680, cc: 3996, packages: ['Turbo S E-Hybrid'] },
    ]},
    'macan': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 265 HP', hp: 265, cc: 1984, packages: ['Macan','Macan T'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 380 HP', hp: 380, cc: 2894, packages: ['Macan S','Macan GTS'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 Turbo 440 HP', hp: 440, cc: 2894, packages: ['Macan Turbo'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Macan Elektrik 408 HP', hp: 408, cc: 0, packages: ['Macan Electric','Macan 4 Electric'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Macan Turbo Elektrik 639 HP', hp: 639, cc: 0, packages: ['Macan Turbo Electric'] },
    ]},
    'panamera': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 330 HP', hp: 330, cc: 2894, packages: ['Panamera'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 440 HP', hp: 440, cc: 2894, packages: ['Panamera GTS'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 630 HP', hp: 630, cc: 3996, packages: ['Turbo S'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.9 V6 E-Hybrid 462 HP', hp: 462, cc: 2894, packages: ['4 E-Hybrid'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '4.0 V8 Turbo S E-Hybrid 700 HP', hp: 700, cc: 3996, packages: ['Turbo S E-Hybrid'] },
    ]},
    'taycan': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Taycan 408 HP', hp: 408, cc: 0, packages: ['Base','4S'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Taycan 4S 530 HP', hp: 530, cc: 0, packages: ['4S'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Taycan Turbo 680 HP', hp: 680, cc: 0, packages: ['Turbo'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Taycan Turbo S 761 HP', hp: 761, cc: 0, packages: ['Turbo S'] },
    ]},
    '718-cayman': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 300 HP', hp: 300, cc: 1988, packages: ['Cayman','Cayman T'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 350 HP', hp: 350, cc: 2497, packages: ['Cayman S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 420 HP', hp: 420, cc: 3995, packages: ['Cayman GTS 4.0','Cayman GT4'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '4.0 420 HP', hp: 420, cc: 3995, packages: ['Cayman GT4'] },
    ]},
    '718-boxster': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 300 HP', hp: 300, cc: 1988, packages: ['Boxster','Boxster T'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 350 HP', hp: 350, cc: 2497, packages: ['Boxster S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 400 HP', hp: 400, cc: 3995, packages: ['Boxster GTS 4.0','Spyder'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '4.0 420 HP', hp: 420, cc: 3995, packages: ['Spyder'] },
    ]},
  },

};

module.exports = VARIANTS_PART3;
