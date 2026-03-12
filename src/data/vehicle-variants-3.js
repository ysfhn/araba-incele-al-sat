/**
 * Araç Varyant Veritabanı – Parça 3/4
 * Lincoln → RAM (Marka sırasıyla)
 */
const VARIANTS_PART3 = {
  'lincoln': {
    'corsair': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1998, packages: ['Standard','Reserve'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 266 HP', hp: 266, cc: 2488, packages: ['Grand Touring'] },
    ]},
    'nautilus': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1998, packages: ['Standard','Reserve'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.7 V6 Turbo 335 HP', hp: 335, cc: 2694, packages: ['Reserve','Black Label'] },
    ]},
    'aviator': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Turbo 400 HP', hp: 400, cc: 2956, packages: ['Standard','Reserve','Black Label'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 PHEV 494 HP', hp: 494, cc: 2956, packages: ['Grand Touring'] },
    ]},
    'navigator': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 V6 Turbo 450 HP', hp: 450, cc: 3497, packages: ['Standard','Reserve','Black Label'] },
    ]},
  },
  'lotus': {
    'emira': { years: [2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 V6 Supercharged 400 HP', hp: 400, cc: 3456, packages: ['First Edition'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo AMG 360 HP', hp: 360, cc: 1991, packages: ['Core','First Edition'] },
    ]},
    'eletre': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 603 HP', hp: 603, cc: 0, packages: ['Standard','S+'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 905 HP', hp: 905, cc: 0, packages: ['R'] },
    ]},
    'emeya': { years: [2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 603 HP', hp: 603, cc: 0, packages: ['Standard','S+'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 905 HP', hp: 905, cc: 0, packages: ['R'] },
    ]},
    'evija': { years: [2024,2025], bodyType: 'coupe', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 2012 HP', hp: 2012, cc: 0, packages: ['Evija'] }]},
  },
  'lucid': {
    'air': { years: [2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 480 HP', hp: 480, cc: 0, packages: ['Pure','Touring'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 620 HP', hp: 620, cc: 0, packages: ['Grand Touring'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 1050 HP', hp: 1050, cc: 0, packages: ['Sapphire'] },
    ]},
    'gravity': { years: [2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 620 HP', hp: 620, cc: 0, packages: ['Touring','Grand Touring'] },
    ]},
  },
  'maserati': {
    'ghibli': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 330 HP', hp: 330, cc: 1995, packages: ['GT','Modena'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 275 HP', hp: 275, cc: 2987, packages: ['GranLusso','GranSport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Turbo 430 HP', hp: 430, cc: 2979, packages: ['Trofeo'] },
    ]},
    'quattroporte': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Turbo 350 HP', hp: 350, cc: 2979, packages: ['GT','Modena'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.8 V8 Turbo 580 HP', hp: 580, cc: 3799, packages: ['Trofeo'] },
    ]},
    'levante': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 330 HP', hp: 330, cc: 1995, packages: ['GT','Modena'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Turbo 430 HP', hp: 430, cc: 2979, packages: ['Trofeo'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 275 HP', hp: 275, cc: 2987, packages: ['GranLusso','GranSport'] },
    ]},
    'mc20': { years: [2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Nettuno 630 HP', hp: 630, cc: 2992, packages: ['MC20','Cielo'] },
    ]},
    'granturismo': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Nettuno 490 HP', hp: 490, cc: 2992, packages: ['Modena','Trofeo'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Folgore EV 760 HP', hp: 760, cc: 0, packages: ['Folgore'] },
    ]},
    'grecale': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1995, packages: ['GT','Modena'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Nettuno 530 HP', hp: 530, cc: 2992, packages: ['Trofeo'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Folgore EV 557 HP', hp: 557, cc: 0, packages: ['Folgore'] },
    ]},
  },
  'maxus': {
    'euniq-6': { years: [2021,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Premium'] }]},
    'euniq-5': { years: [2021,2022,2023,2024], bodyType: 'minivan', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 177 HP', hp: 177, cc: 0, packages: ['Standard','Premium'] }]},
    'deliver-9': { years: [2020,2021,2022,2023,2024], bodyType: 'van', variants: [{ fuel: 'dizel', transmission: 'manuel', engine: '2.0 TDI 163 HP', hp: 163, cc: 1984, packages: ['Standard','LWB'] }]},
    't60': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'pickup', variants: [{ fuel: 'dizel', transmission: 'otomatik', engine: '2.0 Turbo 163 HP', hp: 163, cc: 1984, packages: ['Comfort','Luxury'] }]},
    'mifa-9': { years: [2023,2024,2025], bodyType: 'minivan', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 245 HP', hp: 245, cc: 0, packages: ['Luxury','Executive'] }]},
  },
  'mazda': {
    'mazda3-sedan': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Skyactiv-G 150 HP', hp: 150, cc: 1998, packages: ['Motion','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Skyactiv X 186 HP', hp: 186, cc: 1998, packages: ['Takumi Plus'] },
    ]},
    'mazda3-hatchback': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Skyactiv-G 150 HP', hp: 150, cc: 1998, packages: ['Motion','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Skyactiv X 186 HP', hp: 186, cc: 1998, packages: ['Takumi Plus'] },
    ]},
    'cx-3': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Skyactiv-G 121 HP', hp: 121, cc: 1998, packages: ['Motion','Power'] },
    ]},
    'cx-30': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Skyactiv-G 150 HP', hp: 150, cc: 1998, packages: ['Motion','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Skyactiv X 186 HP', hp: 186, cc: 1998, packages: ['Takumi Plus'] },
    ]},
    'cx-5': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Skyactiv-G 165 HP', hp: 165, cc: 1998, packages: ['Motion','Power'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 Skyactiv-G 194 HP', hp: 194, cc: 2488, packages: ['Power','Takumi','Takumi Plus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 Skyactiv-D 184 HP', hp: 184, cc: 2191, packages: ['Power','Takumi'] },
    ]},
    'cx-60': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.3 Skyactiv-D 200 HP', hp: 200, cc: 3283, packages: ['Exclusive-Line','Takumi'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.3 Skyactiv-D 254 HP', hp: 254, cc: 3283, packages: ['Takumi Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 e-Skyactiv PHEV 327 HP', hp: 327, cc: 2488, packages: ['Takumi','Takumi Plus'] },
    ]},
    'cx-80': { years: [2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.3 Skyactiv-D 254 HP', hp: 254, cc: 3283, packages: ['Exclusive-Line','Takumi','Takumi Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 e-Skyactiv PHEV 327 HP', hp: 327, cc: 2488, packages: ['Takumi','Takumi Plus'] },
    ]},
    'mx-5': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.5 Skyactiv-G 132 HP', hp: 132, cc: 1496, packages: ['Prime-Line','Exclusive-Line'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '2.0 Skyactiv-G 184 HP', hp: 184, cc: 1998, packages: ['Exclusive-Line','Homura','Kazari'] },
    ]},
    'mx-30': { years: [2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-Skyactiv EV 145 HP', hp: 145, cc: 0, packages: ['Prime-Line','Makoto'] },
    ]},
  },
  'mclaren': {
    '720s': { years: [2017,2018,2019,2020,2021,2022], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Turbo 720 HP', hp: 720, cc: 3994, packages: ['Performance','Luxury'] }]},
    'artura': { years: [2022,2023,2024,2025], bodyType: 'coupe', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 Turbo PHEV 680 HP', hp: 680, cc: 2993, packages: ['Standard','Performance','Trophy'] }]},
    '750s': { years: [2023,2024,2025], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Turbo 750 HP', hp: 750, cc: 3994, packages: ['Standard','Spider'] }]},
    'gt': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Turbo 620 HP', hp: 620, cc: 3994, packages: ['Luxe','Pioneer'] }]},
    '570s': { years: [2015,2016,2017,2018,2019,2020,2021], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.8 V8 Turbo 570 HP', hp: 570, cc: 3799, packages: ['Standard','Spider'] }]},
    'p1': { years: [2013,2014,2015], bodyType: 'coupe', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '3.8 V8 Turbo + EV 903 HP', hp: 903, cc: 3799, packages: ['P1'] }]},
  },
  'mercedes-benz': {
    'a-serisi': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'A 180 1.3 136 HP', hp: 136, cc: 1332, packages: ['Style','AMG Line','Edition'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'A 200 1.3 163 HP', hp: 163, cc: 1332, packages: ['AMG Line','Progressive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'A 180d 1.5 116 HP', hp: 116, cc: 1461, packages: ['Style','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG A 35 2.0 306 HP', hp: 306, cc: 1991, packages: ['AMG A 35'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG A 45 S 2.0 421 HP', hp: 421, cc: 1991, packages: ['AMG A 45 S'] },
    ]},
    'c-serisi-sedan': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'C 180 1.5 170 HP', hp: 170, cc: 1496, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'C 200 1.5 204 HP', hp: 204, cc: 1496, packages: ['AMG Line','Exclusive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'C 300 2.0 258 HP', hp: 258, cc: 1999, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'C 200d 2.0 163 HP', hp: 163, cc: 1993, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'C 220d 2.0 200 HP', hp: 200, cc: 1993, packages: ['AMG Line','Exclusive'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'C 300e PHEV 313 HP', hp: 313, cc: 1999, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG C 43 2.0 408 HP', hp: 408, cc: 1991, packages: ['AMG'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG C 63 S 2.0 680 HP', hp: 680, cc: 1991, packages: ['AMG'] },
    ]},
    'e-serisi-sedan': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'E 200 2.0 197 HP', hp: 197, cc: 1999, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'E 300 2.0 258 HP', hp: 258, cc: 1999, packages: ['AMG Line','Exclusive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'E 200d 2.0 197 HP', hp: 197, cc: 1993, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'E 220d 2.0 197 HP', hp: 197, cc: 1993, packages: ['AMG Line','Exclusive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'E 300d 2.0 265 HP', hp: 265, cc: 1993, packages: ['AMG Line Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'E 300e PHEV 313 HP', hp: 313, cc: 1999, packages: ['AMG Line','Exclusive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG E 53 3.0 457 HP', hp: 457, cc: 2999, packages: ['AMG'] },
    ]},
    's-serisi': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'S 450 3.0 367 HP', hp: 367, cc: 2999, packages: ['AMG Line','AMG Line Premium Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'S 500 3.0 435 HP', hp: 435, cc: 2999, packages: ['AMG Line','AMG Line Premium Plus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'S 350d 2.9 286 HP', hp: 286, cc: 2925, packages: ['AMG Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'S 580e PHEV 510 HP', hp: 510, cc: 2999, packages: ['AMG Line Premium Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG S 63 4.0 802 HP', hp: 802, cc: 3982, packages: ['AMG S 63 E Performance'] },
    ]},
    'cla': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'CLA 180 1.3 136 HP', hp: 136, cc: 1332, packages: ['Style','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'CLA 200 1.3 163 HP', hp: 163, cc: 1332, packages: ['AMG Line','Progressive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG CLA 35 2.0 306 HP', hp: 306, cc: 1991, packages: ['AMG'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG CLA 45 S 2.0 421 HP', hp: 421, cc: 1991, packages: ['AMG'] },
    ]},
    'gla': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'GLA 200 1.3 163 HP', hp: 163, cc: 1332, packages: ['Style','AMG Line','Progressive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GLA 35 2.0 306 HP', hp: 306, cc: 1991, packages: ['AMG'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'GLA 200d 2.0 150 HP', hp: 150, cc: 1950, packages: ['Style','AMG Line'] },
    ]},
    'glb': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'GLB 200 1.3 163 HP', hp: 163, cc: 1332, packages: ['Style','AMG Line','Progressive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GLB 35 2.0 306 HP', hp: 306, cc: 1991, packages: ['AMG'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'GLB 200d 2.0 150 HP', hp: 150, cc: 1950, packages: ['Style','AMG Line'] },
    ]},
    'glc': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'GLC 200 2.0 204 HP', hp: 204, cc: 1999, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'GLC 300 2.0 258 HP', hp: 258, cc: 1999, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'GLC 220d 2.0 197 HP', hp: 197, cc: 1993, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'GLC 300d 2.0 265 HP', hp: 265, cc: 1993, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'GLC 300e PHEV 313 HP', hp: 313, cc: 1999, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GLC 43 2.0 421 HP', hp: 421, cc: 1991, packages: ['AMG'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GLC 63 S 2.0 680 HP', hp: 680, cc: 1991, packages: ['AMG'] },
    ]},
    'gle': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'GLE 300d 2.0 272 HP', hp: 272, cc: 1993, packages: ['Avantgarde','AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'GLE 450 3.0 367 HP', hp: 367, cc: 2999, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'GLE 350d 2.9 272 HP', hp: 272, cc: 2925, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'GLE 350de PHEV 333 HP', hp: 333, cc: 1993, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GLE 53 3.0 457 HP', hp: 457, cc: 2999, packages: ['AMG'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GLE 63 S 4.0 612 HP', hp: 612, cc: 3982, packages: ['AMG'] },
    ]},
    'gls': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'GLS 450 3.0 367 HP', hp: 367, cc: 2999, packages: ['AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'GLS 400d 2.9 330 HP', hp: 330, cc: 2925, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GLS 63 4.0 612 HP', hp: 612, cc: 3982, packages: ['AMG'] },
    ]},
    'g-serisi': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'G 500 4.0 422 HP', hp: 422, cc: 3982, packages: ['AMG Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'G 400d 2.9 330 HP', hp: 330, cc: 2925, packages: ['AMG Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG G 63 4.0 585 HP', hp: 585, cc: 3982, packages: ['AMG G 63'] },
    ]},
    'eqe-sedan': { years: [2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQE 300 245 HP', hp: 245, cc: 0, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQE 350+ 292 HP', hp: 292, cc: 0, packages: ['AMG Line','AMG Line Premium'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AMG EQE 43 476 HP', hp: 476, cc: 0, packages: ['AMG'] },
    ]},
    'eqe-suv': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQE 350+ 292 HP', hp: 292, cc: 0, packages: ['AMG Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AMG EQE 43 476 HP', hp: 476, cc: 0, packages: ['AMG'] },
    ]},
    'eqs-sedan': { years: [2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQS 450+ 360 HP', hp: 360, cc: 0, packages: ['AMG Line','AMG Line Premium Plus'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AMG EQS 53 658 HP', hp: 658, cc: 0, packages: ['AMG'] },
    ]},
    'eqs-suv': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQS 450+ 360 HP', hp: 360, cc: 0, packages: ['AMG Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AMG EQS 53 658 HP', hp: 658, cc: 0, packages: ['AMG'] },
    ]},
    'eqa': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQA 250+ 190 HP', hp: 190, cc: 0, packages: ['AMG Line','Progressive'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQA 350 292 HP', hp: 292, cc: 0, packages: ['AMG Line Premium'] },
    ]},
    'eqb': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQB 250+ 190 HP', hp: 190, cc: 0, packages: ['AMG Line','Progressive'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQB 350 292 HP', hp: 292, cc: 0, packages: ['AMG Line Premium'] },
    ]},
    'maybach-s-serisi': { years: [2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'S 580 4.0 503 HP', hp: 503, cc: 3982, packages: ['Maybach'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'S 680 6.0 612 HP', hp: 612, cc: 5980, packages: ['Maybach'] },
    ]},
    'maybach-gls': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'GLS 600 4.0 558 HP', hp: 558, cc: 3982, packages: ['Maybach'] },
    ]},
    'amg-gt-coupe': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GT 43 2.0 421 HP', hp: 421, cc: 1991, packages: ['AMG'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GT 55 3.0 476 HP', hp: 476, cc: 2999, packages: ['AMG'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'AMG GT 63 S 4.0 639 HP', hp: 639, cc: 3982, packages: ['AMG'] },
    ]},
    'v-serisi': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: 'V 220d 2.0 163 HP', hp: 163, cc: 1950, packages: ['Style','Avantgarde'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'V 250d 2.0 190 HP', hp: 190, cc: 1950, packages: ['Avantgarde','Exclusive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'V 300d 2.0 237 HP', hp: 237, cc: 1950, packages: ['Exclusive'] },
    ]},
    'vito': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'van', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: 'Vito 110 CDI 1.7 102 HP', hp: 102, cc: 1749, packages: ['Base','Pro'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'Vito 116 CDI 2.0 163 HP', hp: 163, cc: 1950, packages: ['Pro','Select'] },
    ]},
    'sprinter': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'van', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: 'Sprinter 314 CDI 2.0 143 HP', hp: 143, cc: 1950, packages: ['Standard','Progressive'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'Sprinter 516 CDI 2.0 163 HP', hp: 163, cc: 1950, packages: ['Progressive'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'eSprinter 113 HP', hp: 113, cc: 0, packages: ['Electric'] },
    ]},
  },
  'mg': {
    'zs': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTi 106 HP', hp: 106, cc: 1498, packages: ['Comfort','Luxury'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 177 HP', hp: 177, cc: 0, packages: ['Comfort EV','Luxury EV','Trophy EV'] },
    ]},
    'hs': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 162 HP', hp: 162, cc: 1490, packages: ['Comfort','Luxury'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo PHEV 258 HP', hp: 258, cc: 1490, packages: ['Luxury PHEV'] },
    ]},
    'mg4': { years: [2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 170 HP', hp: 170, cc: 0, packages: ['SE','Trophy'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Extended 204 HP', hp: 204, cc: 0, packages: ['Trophy Long Range','XPOWER'] },
    ]},
    'mg5': { years: [2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 156 HP', hp: 156, cc: 0, packages: ['SE','Trophy Long Range'] },
    ]},
    'marvel-r': { years: [2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 288 HP', hp: 288, cc: 0, packages: ['Luxury'] },
    ]},
    'cyberster': { years: [2024,2025], bodyType: 'cabrio', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 340 HP', hp: 340, cc: 0, packages: ['Standard'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 510 HP', hp: 510, cc: 0, packages: ['GT'] },
    ]},
  },
  'mini': {
    'cooper-3-kapi': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper 1.5 136 HP', hp: 136, cc: 1499, packages: ['Classic','Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper S 2.0 178 HP', hp: 178, cc: 1998, packages: ['Yours','JCW Trim'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'JCW 2.0 231 HP', hp: 231, cc: 1998, packages: ['JCW'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Cooper SE EV 184 HP', hp: 184, cc: 0, packages: ['Classic','Yours'] },
    ]},
    'cooper-5-kapi': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper 1.5 136 HP', hp: 136, cc: 1499, packages: ['Classic','Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper S 2.0 178 HP', hp: 178, cc: 1998, packages: ['Yours'] },
    ]},
    'countryman': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper 1.5 136 HP', hp: 136, cc: 1499, packages: ['Classic','Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper S 2.0 178 HP', hp: 178, cc: 1998, packages: ['Yours','JCW Trim'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'Cooper SE PHEV 220 HP', hp: 220, cc: 1499, packages: ['Yours'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Cooper SE EV 204 HP', hp: 204, cc: 0, packages: ['Classic','Yours'] },
    ]},
    'clubman': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper 1.5 136 HP', hp: 136, cc: 1499, packages: ['Classic','Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper S 2.0 178 HP', hp: 178, cc: 1998, packages: ['Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'JCW ALL4 2.0 306 HP', hp: 306, cc: 1998, packages: ['JCW'] },
    ]},
    'cabrio': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper 1.5 136 HP', hp: 136, cc: 1499, packages: ['Classic','Yours'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'Cooper S 2.0 178 HP', hp: 178, cc: 1998, packages: ['Yours'] },
    ]},
    'aceman': { years: [2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Aceman E 184 HP', hp: 184, cc: 0, packages: ['Classic','Yours'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Aceman SE 218 HP', hp: 218, cc: 0, packages: ['Yours'] },
    ]},
  },
  'mitsubishi': {
    'eclipse-cross': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 163 HP', hp: 163, cc: 1499, packages: ['Inform','Instyle','Intense'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.4 PHEV 188 HP', hp: 188, cc: 2360, packages: ['Instyle PHEV','Intense PHEV'] },
    ]},
    'asx': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 Turbo 91 HP', hp: 91, cc: 999, packages: ['Inform','Invite'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 HEV 143 HP', hp: 143, cc: 1598, packages: ['Instyle'] },
    ]},
    'outlander': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 181 HP', hp: 181, cc: 2488, packages: ['ES','SEL','SEL Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.4 PHEV 248 HP', hp: 248, cc: 2360, packages: ['SEL PHEV','SEL Premium PHEV'] },
    ]},
    'l200': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '2.4 DI-D 150 HP', hp: 150, cc: 2442, packages: ['Inform','Invite'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.4 DI-D 181 HP', hp: 181, cc: 2442, packages: ['Instyle','Intense'] },
    ]},
    'space-star': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 71 HP', hp: 71, cc: 999, packages: ['Inform','Invite'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 80 HP', hp: 80, cc: 1193, packages: ['Invite','Spirit'] },
    ]},
    'colt': { years: [2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 Turbo 91 HP', hp: 91, cc: 999, packages: ['Inform','Invite'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 HEV 143 HP', hp: 143, cc: 1598, packages: ['Instyle'] },
    ]},
  },
  'nissan': {
    'qashqai': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 DIG-T 158 HP', hp: 158, cc: 1332, packages: ['Visia','Acenta','Tekna','Tekna+'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e-Power 190 HP', hp: 190, cc: 1497, packages: ['Acenta','Tekna','Tekna+'] },
    ]},
    'x-trail': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e-Power 204 HP', hp: 204, cc: 1497, packages: ['Acenta','Tekna','Tekna+'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e-Power e-4orce 213 HP', hp: 213, cc: 1497, packages: ['Tekna+','N-Trek'] },
    ]},
    'juke': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 DIG-T 114 HP', hp: 114, cc: 999, packages: ['Visia','Acenta','N-Connecta','Tekna'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Hybrid 143 HP', hp: 143, cc: 1598, packages: ['N-Connecta','Tekna','Tekna+'] },
    ]},
    'ariya': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 2WD 218 HP', hp: 218, cc: 0, packages: ['Advance','Evolve','Evolve+'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV e-4orce 306 HP', hp: 306, cc: 0, packages: ['Evolve+','Performance'] },
    ]},
    'leaf': { years: [2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 150 HP', hp: 150, cc: 0, packages: ['Acenta','Tekna'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV e+ 217 HP', hp: 217, cc: 0, packages: ['Tekna','Tekna+'] },
    ]},
    'micra': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 IG-T 92 HP', hp: 92, cc: 999, packages: ['Visia','Acenta','N-Sport'] },
    ]},
    'navara': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'pickup', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.3 dCi 190 HP', hp: 190, cc: 2298, packages: ['Tekna','Trek-1'] },
    ]},
    'patrol': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.6 V8 400 HP', hp: 400, cc: 5552, packages: ['Platinum','Nismo'] },
    ]},
    'gt-r': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.8 V6 Turbo 570 HP', hp: 570, cc: 3799, packages: ['Premium','Nismo'] },
    ]},
  },
  'omoda': {
    'c5': { years: [2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 147 HP', hp: 147, cc: 1498, packages: ['Comfort','Flagship'] },
    ]},
    'e5': { years: [2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Comfort','Flagship'] },
    ]},
  },
  'opel': {
    'corsa': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 100 HP', hp: 100, cc: 1199, packages: ['Edition','Elegance','GS','Ultimate'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['GS','Ultimate'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Corsa-e 136 HP', hp: 136, cc: 0, packages: ['Edition','Elegance','GS','Ultimate'] },
    ]},
    'astra': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Edition','Elegance','GS','Ultimate'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Turbo D 130 HP', hp: 130, cc: 1499, packages: ['Edition','Elegance'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Turbo PHEV 180 HP', hp: 180, cc: 1598, packages: ['GS','Ultimate'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Astra-e 156 HP', hp: 156, cc: 0, packages: ['Edition','GS'] },
    ]},
    'mokka': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Edition','Elegance','GS','Ultimate'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Turbo D 110 HP', hp: 110, cc: 1499, packages: ['Edition','Elegance'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Mokka-e 136 HP', hp: 136, cc: 0, packages: ['Edition','Elegance','GS','Ultimate'] },
    ]},
    'crossland': { years: [2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 Turbo 110 HP', hp: 110, cc: 1199, packages: ['Edition','Elegance'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Elegance','Ultimate'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 Turbo D 110 HP', hp: 110, cc: 1499, packages: ['Edition','Elegance'] },
    ]},
    'grandland': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 130 HP', hp: 130, cc: 1199, packages: ['Edition','Elegance','GS'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Turbo D 130 HP', hp: 130, cc: 1499, packages: ['Edition','Elegance','GS'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 Turbo PHEV 225 HP', hp: 225, cc: 1598, packages: ['GS','Ultimate'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Grandland Electric 213 HP', hp: 213, cc: 0, packages: ['Edition','GS'] },
    ]},
    'insignia': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 165 HP', hp: 165, cc: 1490, packages: ['Edition','Elegance','GS Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 Turbo D 170 HP', hp: 170, cc: 1956, packages: ['Elegance','GS Line','Ultimate'] },
    ]},
    'combo-life': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 Turbo 110 HP', hp: 110, cc: 1199, packages: ['Edition','Elegance'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Turbo D 130 HP', hp: 130, cc: 1499, packages: ['Edition','Elegance'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Combo-e Life 136 HP', hp: 136, cc: 0, packages: ['Edition','Elegance'] },
    ]},
  },
  'peugeot': {
    '208': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 100 HP', hp: 100, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Allure','GT'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-208 136 HP', hp: 136, cc: 0, packages: ['Active','Allure','GT'] },
    ]},
    '308': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure','GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PureTech PHEV 180 HP', hp: 180, cc: 1598, packages: ['GT','GT Pack'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-308 156 HP', hp: 156, cc: 0, packages: ['Allure','GT'] },
    ]},
    '408': { years: [2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Allure','GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PureTech PHEV 225 HP', hp: 225, cc: 1598, packages: ['GT','GT Pack'] },
    ]},
    '508': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 180 HP', hp: 180, cc: 1598, packages: ['Allure','GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Allure','GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PureTech PHEV 225 HP', hp: 225, cc: 1598, packages: ['GT','PSE'] },
    ]},
    '2008': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 100 HP', hp: 100, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Allure','GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-2008 136 HP', hp: 136, cc: 0, packages: ['Active','Allure','GT'] },
    ]},
    '3008': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure','GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PureTech PHEV 225 HP', hp: 225, cc: 1598, packages: ['GT','GT Pack'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'E-3008 210 HP', hp: 210, cc: 0, packages: ['Allure','GT'] },
    ]},
    '5008': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Active','Allure','GT'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure','GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 PureTech PHEV 225 HP', hp: 225, cc: 1598, packages: ['GT'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'E-5008 210 HP', hp: 210, cc: 0, packages: ['Allure','GT'] },
    ]},
    'rifter': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 PureTech 110 HP', hp: 110, cc: 1199, packages: ['Active','Allure'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['Active','Allure','GT'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'e-Rifter 136 HP', hp: 136, cc: 0, packages: ['Allure','GT'] },
    ]},
    'partner': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'minivan', variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '1.6 BlueHDi 100 HP', hp: 100, cc: 1560, packages: ['Active','Premium'] },
    ]},
  },
  'polestar': {
    'polestar-2': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Long Range 299 HP', hp: 299, cc: 0, packages: ['Standard','Plus'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Dual Motor 408 HP', hp: 408, cc: 0, packages: ['Plus','Performance'] },
    ]},
    'polestar-3': { years: [2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Dual Motor 490 HP', hp: 490, cc: 0, packages: ['Plus','Performance'] },
    ]},
    'polestar-4': { years: [2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Long Range 272 HP', hp: 272, cc: 0, packages: ['Standard','Plus'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Dual Motor 544 HP', hp: 544, cc: 0, packages: ['Performance'] },
    ]},
  },
  'porsche': {
    '911': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo Carrera 385 HP', hp: 385, cc: 2981, packages: ['Carrera','Carrera T'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo Carrera S 450 HP', hp: 450, cc: 2981, packages: ['Carrera S','Carrera 4S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo S 650 HP', hp: 650, cc: 3745, packages: ['Turbo S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 GT3 510 HP', hp: 510, cc: 3996, packages: ['GT3','GT3 RS'] },
    ]},
    'cayenne': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Turbo 353 HP', hp: 353, cc: 2995, packages: ['Cayenne'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Turbo 550 HP', hp: 550, cc: 3996, packages: ['Cayenne GTS'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Turbo 659 HP', hp: 659, cc: 3996, packages: ['Cayenne Turbo GT'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 E-Hybrid 470 HP', hp: 470, cc: 2995, packages: ['Cayenne E-Hybrid','Cayenne S E-Hybrid'] },
    ]},
    'macan': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 265 HP', hp: 265, cc: 1984, packages: ['Macan'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 Turbo 380 HP', hp: 380, cc: 2894, packages: ['Macan S','Macan GTS'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Macan EV 408 HP', hp: 408, cc: 0, packages: ['Macan Electric','Macan 4 Electric'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Macan Turbo EV 639 HP', hp: 639, cc: 0, packages: ['Macan Turbo Electric'] },
    ]},
    'panamera': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.9 V6 Turbo 330 HP', hp: 330, cc: 2894, packages: ['Panamera'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Turbo 630 HP', hp: 630, cc: 3996, packages: ['Panamera Turbo S'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.9 V6 E-Hybrid 462 HP', hp: 462, cc: 2894, packages: ['Panamera 4 E-Hybrid'] },
    ]},
    'taycan': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Taycan RWD 408 HP', hp: 408, cc: 0, packages: ['Taycan'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Taycan 4S 530 HP', hp: 530, cc: 0, packages: ['4S'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Taycan Turbo 680 HP', hp: 680, cc: 0, packages: ['Turbo'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Taycan Turbo S 761 HP', hp: 761, cc: 0, packages: ['Turbo S'] },
    ]},
    '718-cayman': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1988, packages: ['718 Cayman'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 Turbo 350 HP', hp: 350, cc: 2497, packages: ['718 Cayman S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 GT4 420 HP', hp: 420, cc: 3995, packages: ['718 Cayman GT4','GT4 RS'] },
    ]},
    '718-boxster': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1988, packages: ['718 Boxster'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 Turbo 350 HP', hp: 350, cc: 2497, packages: ['718 Boxster S'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 Spyder 420 HP', hp: 420, cc: 3995, packages: ['718 Spyder','Spyder RS'] },
    ]},
  },
  'proton': {
    'saga': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.3 95 HP', hp: 95, cc: 1332, packages: ['Standard','Executive','Premium'] }]},
    'x50': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 177 HP', hp: 177, cc: 1477, packages: ['Standard','Executive','Flagship'] }]},
    'x70': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.8 Turbo 184 HP', hp: 184, cc: 1799, packages: ['Standard','Executive','Premium'] }]},
    'x90': { years: [2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 177 HP', hp: 177, cc: 1477, packages: ['Standard','Flagship'] }]},
  },
  'ram': {
    '1500': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 Pentastar 305 HP', hp: 305, cc: 3604, packages: ['Big Horn','Laramie'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 395 HP', hp: 395, cc: 5654, packages: ['Laramie','Limited','TRX'] },
    ]},
    '2500': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.4 V8 HEMI 410 HP', hp: 410, cc: 6424, packages: ['Laramie','Limited'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '6.7 Cummins Turbo Diesel 370 HP', hp: 370, cc: 6690, packages: ['Laramie','Limited'] },
    ]},
    '1500-trx': { years: [2021,2022,2023], bodyType: 'pickup', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.2 V8 Supercharged 702 HP', hp: 702, cc: 6166, packages: ['TRX'] },
    ]},
    '1500-rev': { years: [2025], bodyType: 'pickup', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Dual Motor 654 HP', hp: 654, cc: 0, packages: ['Tradesman','Limited'] },
    ]},
  },
};
module.exports = VARIANTS_PART3;
