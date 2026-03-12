/**
 * Araç Varyant Veritabanı – Parça 4/4
 * Renault → Wey (Marka sırasıyla)
 */
const VARIANTS_PART4 = {
  'renault': {
    'clio': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Joy','Touch','Icon'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 100 HP', hp: 100, cc: 999, packages: ['Touch','Icon','Techno'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 130 HP', hp: 130, cc: 1332, packages: ['RS Line','Techno'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tech Hybrid 145 HP', hp: 145, cc: 1598, packages: ['Techno','Esprit Alpine'] },
      { fuel: 'lpg', transmission: 'otomatik', engine: '1.0 TCe LPG 100 HP', hp: 100, cc: 999, packages: ['Touch','Icon'] },
    ]},
    'megane-sedan': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 140 HP', hp: 140, cc: 1332, packages: ['Touch','Icon','Techno'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 160 HP', hp: 160, cc: 1332, packages: ['RS Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Blue dCi 115 HP', hp: 115, cc: 1461, packages: ['Touch','Icon','Techno'] },
    ]},
    'megane-hatchback': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 140 HP', hp: 140, cc: 1332, packages: ['Touch','Icon'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Blue dCi 115 HP', hp: 115, cc: 1461, packages: ['Touch','Icon','Techno'] },
    ]},
    'megane-e-tech': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 130 HP', hp: 130, cc: 0, packages: ['Equilibre','Techno'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 220 HP', hp: 220, cc: 0, packages: ['Techno','Iconic','Esprit Alpine'] },
    ]},
    'taliant': { years: [2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 SCe 65 HP', hp: 65, cc: 999, packages: ['Joy','Touch'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Touch','Icon'] },
      { fuel: 'lpg', transmission: 'otomatik', engine: '1.0 TCe LPG 90 HP', hp: 90, cc: 999, packages: ['Touch','Icon'] },
    ]},
    'captur': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Touch','Icon'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 140 HP', hp: 140, cc: 1332, packages: ['Icon','Techno'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tech PHEV 160 HP', hp: 160, cc: 1598, packages: ['Techno','Esprit Alpine'] },
      { fuel: 'lpg', transmission: 'otomatik', engine: '1.0 TCe LPG 100 HP', hp: 100, cc: 999, packages: ['Touch','Icon'] },
    ]},
    'kadjar': { years: [2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 140 HP', hp: 140, cc: 1332, packages: ['Touch','Icon'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 160 HP', hp: 160, cc: 1332, packages: ['Icon','Techno'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Blue dCi 115 HP', hp: 115, cc: 1461, packages: ['Touch','Icon'] },
    ]},
    'austral': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 TCe MHEV 130 HP', hp: 130, cc: 1199, packages: ['Equilibre','Techno'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe MHEV 160 HP', hp: 160, cc: 1332, packages: ['Techno','Iconic','Esprit Alpine'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.2 E-Tech Full Hybrid 200 HP', hp: 200, cc: 1199, packages: ['Techno','Iconic','Esprit Alpine'] },
    ]},
    'koleos': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 160 HP', hp: 160, cc: 1332, packages: ['Touch','Icon','Techno'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 Blue dCi 190 HP', hp: 190, cc: 1997, packages: ['Icon','Techno'] },
    ]},
    'rafale': { years: [2024,2025], bodyType: 'suv', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.2 E-Tech Full Hybrid 200 HP', hp: 200, cc: 1199, packages: ['Techno','Esprit Alpine'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.2 E-Tech PHEV 300 HP', hp: 300, cc: 1199, packages: ['Esprit Alpine'] },
    ]},
    'scenic': { years: [2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 170 HP', hp: 170, cc: 0, packages: ['Equilibre','Techno'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 220 HP Long Range', hp: 220, cc: 0, packages: ['Techno','Iconic','Esprit Alpine'] },
    ]},
    'kangoo': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'minivan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 TCe 100 HP', hp: 100, cc: 999, packages: ['Joy','Touch'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Blue dCi 115 HP', hp: 115, cc: 1461, packages: ['Touch','Icon'] },
    ]},
    'zoe': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 136 HP', hp: 136, cc: 0, packages: ['Life','Intens','Riviera'] },
    ]},
    'twingo': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 SCe 65 HP', hp: 65, cc: 999, packages: ['Life','Zen'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Twingo E-Tech 82 HP', hp: 82, cc: 0, packages: ['Zen','Intens'] },
    ]},
    '5-e-tech': { years: [2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 150 HP', hp: 150, cc: 0, packages: ['Five','Techno','Iconic'] },
    ]},
  },
  'rivian': {
    'r1t': { years: [2022,2023,2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Dual Motor 600 HP', hp: 600, cc: 0, packages: ['Adventure','Launch Edition'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Quad Motor 835 HP', hp: 835, cc: 0, packages: ['Performance'] },
    ]},
    'r1s': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Dual Motor 600 HP', hp: 600, cc: 0, packages: ['Adventure','Launch Edition'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Quad Motor 835 HP', hp: 835, cc: 0, packages: ['Performance'] },
    ]},
    'r2': { years: [2026], bodyType: 'suv', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 300 HP', hp: 300, cc: 0, packages: ['Standard'] }]},
  },
  'rolls-royce': {
    'phantom': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.75 V12 571 HP', hp: 571, cc: 6749, packages: ['Standard','Extended'] },
    ]},
    'ghost': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.75 V12 571 HP', hp: 571, cc: 6749, packages: ['Standard','Extended','Black Badge'] },
    ]},
    'spectre': { years: [2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 584 HP', hp: 584, cc: 0, packages: ['Standard'] },
    ]},
    'cullinan': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.75 V12 571 HP', hp: 571, cc: 6749, packages: ['Standard','Black Badge'] },
    ]},
    'wraith': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.6 V12 632 HP', hp: 632, cc: 6592, packages: ['Standard','Black Badge'] },
    ]},
    'dawn': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.6 V12 571 HP', hp: 571, cc: 6592, packages: ['Standard','Black Badge'] },
    ]},
  },
  'rover': {
    '75': { years: [1999,2000,2001,2002,2003,2004,2005], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.5 V6 177 HP', hp: 177, cc: 2497, packages: ['Classic','Connoisseur'] }]},
    '25': { years: [1999,2000,2001,2002,2003,2004,2005], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.4 103 HP', hp: 103, cc: 1396, packages: ['Classic','Sprint'] }]},
    '45': { years: [2000,2001,2002,2003,2004,2005], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.8 117 HP', hp: 117, cc: 1796, packages: ['Classic','Connoisseur'] }]},
    'streetwise': { years: [2003,2004,2005], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.4 103 HP', hp: 103, cc: 1396, packages: ['S','SE'] }]},
  },
  'saab': {
    '9-3': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 175 HP', hp: 175, cc: 1998, packages: ['Linear','Vector','Aero'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.9 TTiD 180 HP', hp: 180, cc: 1910, packages: ['Vector','Aero'] },
    ]},
    '9-5': { years: [2006,2007,2008,2009,2010,2011,2012], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 220 HP', hp: 220, cc: 1998, packages: ['Vector','Aero'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.8 V6 Turbo 300 HP', hp: 300, cc: 2792, packages: ['Aero XWD'] },
    ]},
  },
  'seat': {
    'ibiza': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 MPI 80 HP', hp: 80, cc: 999, packages: ['Reference','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','FR','Xcellence'] },
    ]},
    'leon': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','FR'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['FR','Xcellence'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['FR','Xcellence'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 TSI e-Hybrid 204 HP', hp: 204, cc: 1395, packages: ['FR','Xcellence'] },
    ]},
    'arona': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','FR','Xcellence'] },
    ]},
    'ateca': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','FR'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['FR','Xcellence'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['FR','Xcellence'] },
    ]},
    'tarraco': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Style','FR'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['FR','Xcellence'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['FR','Xcellence'] },
    ]},
  },
  'skoda': {
    'fabia': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 MPI 80 HP', hp: 80, cc: 999, packages: ['Active','Ambition'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Ambition','Style','Monte Carlo'] },
    ]},
    'octavia': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Active','Ambition'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['RS'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Ambition','Style','L&K'] },
    ]},
    'superb': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 204 HP', hp: 204, cc: 1984, packages: ['Style','L&K'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Ambition','Style'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['Style','L&K'] },
    ]},
    'kamiq': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Style','Monte Carlo'] },
    ]},
    'karoq': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Active','Ambition'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Ambition','Style','Sportline'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Ambition','Style'] },
    ]},
    'kodiaq': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 204 HP', hp: 204, cc: 1984, packages: ['Style','L&K','RS'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Ambition','Style'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['Style','L&K'] },
    ]},
    'scala': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Style','Monte Carlo'] },
    ]},
    'enyaq': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Enyaq iV 60 179 HP', hp: 179, cc: 0, packages: ['Active','Ambition'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Enyaq iV 80 204 HP', hp: 204, cc: 0, packages: ['Ambition','Style','L&K'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Enyaq RS iV 299 HP', hp: 299, cc: 0, packages: ['RS'] },
    ]},
    'elroq': { years: [2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elroq 50 170 HP', hp: 170, cc: 0, packages: ['Active','Ambition'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elroq 85 286 HP', hp: 286, cc: 0, packages: ['Style','L&K','RS'] },
    ]},
  },
  'smart': {
    'fortwo': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 71 HP', hp: 71, cc: 999, packages: ['Pure','Passion','Brabus'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQ 82 HP', hp: 82, cc: 0, packages: ['EQ'] },
    ]},
    'forfour': { years: [2014,2015,2016,2017,2018,2019], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 71 HP', hp: 71, cc: 999, packages: ['Pure','Passion'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EQ 82 HP', hp: 82, cc: 0, packages: ['EQ'] },
    ]},
    'hash-1': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 272 HP', hp: 272, cc: 0, packages: ['Pro+','Premium','Brabus'] },
    ]},
    'hash-3': { years: [2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 272 HP', hp: 272, cc: 0, packages: ['Pro+','Premium'] },
    ]},
  },
  'ssangyong': {
    'tivoli': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 163 HP', hp: 163, cc: 1497, packages: ['Crystal','Sapphire','Diamond'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 e-XDi 136 HP', hp: 136, cc: 1597, packages: ['Crystal','Sapphire'] },
    ]},
    'korando': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 163 HP', hp: 163, cc: 1497, packages: ['Crystal','Sapphire','Diamond'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 e-XDi 136 HP', hp: 136, cc: 1597, packages: ['Crystal','Sapphire','Diamond'] },
    ]},
    'korando-e-motion': { years: [2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 190 HP', hp: 190, cc: 0, packages: ['Sapphire EV','Diamond EV'] },
    ]},
    'rexton': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 e-XDi 202 HP', hp: 202, cc: 2157, packages: ['Sapphire','Diamond','Platinum'] },
    ]},
    'musso': { years: [2018,2019,2020,2021,2022,2023,2024], bodyType: 'pickup', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 e-XDi 202 HP', hp: 202, cc: 2157, packages: ['Crystal','Sapphire','Diamond'] },
    ]},
    'torres': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 174 HP', hp: 174, cc: 1497, packages: ['Crystal','Sapphire','Diamond'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Torres EVX 207 HP', hp: 207, cc: 0, packages: ['Sapphire EVX','Diamond EVX'] },
    ]},
  },
  'subaru': {
    'impreza': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Boxer 150 HP', hp: 150, cc: 1995, packages: ['Comfort','Style'] },
    ]},
    'xv': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Boxer 150 HP', hp: 150, cc: 1995, packages: ['Comfort','Style','Premium'] },
    ]},
    'forester': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Boxer 150 HP', hp: 150, cc: 1995, packages: ['Comfort','Style','Premium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 184 HP', hp: 184, cc: 2498, packages: ['Premium','Sport'] },
    ]},
    'outback': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 175 HP', hp: 175, cc: 2498, packages: ['Comfort','Style','Premium','Field'] },
    ]},
    'brz': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '2.4 Boxer 234 HP', hp: 234, cc: 2387, packages: ['Premium','Limited'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 Boxer 234 HP', hp: 234, cc: 2387, packages: ['Premium','Limited'] },
    ]},
    'wrx': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 Turbo 275 HP', hp: 275, cc: 2387, packages: ['Base','Premium','GT'] },
    ]},
    'solterra': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 218 HP', hp: 218, cc: 0, packages: ['Comfort','Premium'] },
    ]},
  },
  'suzuki': {
    'swift': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Hybrid 83 HP', hp: 83, cc: 1197, packages: ['GL','GLX','Sport'] },
    ]},
    'vitara': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Boosterjet Hybrid 129 HP', hp: 129, cc: 1373, packages: ['GL','GLX','GLX Panoramic'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Hybrid 115 HP', hp: 115, cc: 1462, packages: ['GL','GLX'] },
    ]},
    's-cross': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Boosterjet Hybrid 129 HP', hp: 129, cc: 1373, packages: ['GL','GLX','GLX Panoramic'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Hybrid 115 HP', hp: 115, cc: 1462, packages: ['GL','GLX'] },
    ]},
    'jimny': { years: [1998,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 102 HP', hp: 102, cc: 1462, packages: ['GL','GLX'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.5 102 HP', hp: 102, cc: 1462, packages: ['GL','GLX'] },
    ]},
    'ignis': { years: [2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Hybrid 83 HP', hp: 83, cc: 1197, packages: ['GL','GLX'] },
    ]},
    'baleno': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 Boosterjet 112 HP', hp: 112, cc: 998, packages: ['GL','GLX'] },
    ]},
    'across': { years: [2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 306 HP', hp: 306, cc: 2487, packages: ['GLX'] },
    ]},
  },
  'tata': {
    'nexon': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 120 HP', hp: 120, cc: 1199, packages: ['Smart','Creative','Fearless'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Nexon EV 143 HP', hp: 143, cc: 0, packages: ['Creative EV','Fearless EV'] },
    ]},
    'harrier': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 Kryotec 170 HP', hp: 170, cc: 1956, packages: ['Smart','Pure','Fearless'] },
    ]},
    'punch': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 86 HP', hp: 86, cc: 1199, packages: ['Pure','Adventure','Creative'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Punch EV 122 HP', hp: 122, cc: 0, packages: ['Adventure EV','Creative EV'] },
    ]},
    'curvv': { years: [2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 125 HP', hp: 125, cc: 1199, packages: ['Smart','Creative'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Curvv EV 167 HP', hp: 167, cc: 0, packages: ['Creative EV','Accomplished EV'] },
    ]},
  },
  'tesla': {
    'model-3': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 283 HP', hp: 283, cc: 0, packages: ['Standard Range','Long Range'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 366 HP', hp: 366, cc: 0, packages: ['Long Range AWD'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 510 HP', hp: 510, cc: 0, packages: ['Performance'] },
    ]},
    'model-y': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 299 HP', hp: 299, cc: 0, packages: ['Standard Range','Long Range'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 384 HP', hp: 384, cc: 0, packages: ['Long Range AWD'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 534 HP', hp: 534, cc: 0, packages: ['Performance'] },
    ]},
    'model-s': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 670 HP', hp: 670, cc: 0, packages: ['Model S'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 1020 HP', hp: 1020, cc: 0, packages: ['Plaid'] },
    ]},
    'model-x': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 670 HP', hp: 670, cc: 0, packages: ['Model X'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 1020 HP', hp: 1020, cc: 0, packages: ['Plaid'] },
    ]},
    'cybertruck': { years: [2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 600 HP', hp: 600, cc: 0, packages: ['AWD'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV Tri Motor 845 HP', hp: 845, cc: 0, packages: ['Cyberbeast'] },
    ]},
  },
  'togg': {
    't10x': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 200 HP', hp: 200, cc: 0, packages: ['Core','Advance'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 400 HP', hp: 400, cc: 0, packages: ['Advance AWD'] },
    ]},
    't10f': { years: [2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 200 HP', hp: 200, cc: 0, packages: ['Core','Advance'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 400 HP', hp: 400, cc: 0, packages: ['Advance AWD'] },
    ]},
  },
  'toyota': {
    'corolla-sedan': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 Valvematic 132 HP', hp: 132, cc: 1598, packages: ['Vision','Dream','Passion'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Dynamic Force 170 HP', hp: 170, cc: 1987, packages: ['Dream','Passion'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.8 Hybrid 122 HP', hp: 122, cc: 1798, packages: ['Vision','Dream','Passion'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Hybrid 196 HP', hp: 196, cc: 1987, packages: ['Dream','Passion','GR Sport'] },
    ]},
    'corolla-hatchback': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Dynamic Force 170 HP', hp: 170, cc: 1987, packages: ['Dream','Passion'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.8 Hybrid 122 HP', hp: 122, cc: 1798, packages: ['Vision','Dream'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Hybrid 196 HP', hp: 196, cc: 1987, packages: ['GR Sport'] },
    ]},
    'corolla-cross': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Dynamic Force 170 HP', hp: 170, cc: 1987, packages: ['Vision','Dream'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Hybrid 197 HP', hp: 197, cc: 1987, packages: ['Dream','Passion'] },
    ]},
    'camry': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 Dynamic Force 218 HP', hp: 218, cc: 2487, packages: ['Passion','Advance'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 225 HP', hp: 225, cc: 2487, packages: ['Advance','GR Sport'] },
    ]},
    'yaris': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Hybrid 116 HP', hp: 116, cc: 1490, packages: ['Vision','Dream'] },
    ]},
    'yaris-cross': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Hybrid 116 HP', hp: 116, cc: 1490, packages: ['Vision','Dream','Passion'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Hybrid AWD 130 HP', hp: 130, cc: 1490, packages: ['Dream','Passion','GR Sport'] },
    ]},
    'c-hr': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.8 Hybrid 122 HP', hp: 122, cc: 1798, packages: ['Vision','Dream'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Hybrid 197 HP', hp: 197, cc: 1987, packages: ['Dream','Passion','GR Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 PHEV 223 HP', hp: 223, cc: 1987, packages: ['Passion PHEV'] },
    ]},
    'rav4': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Dynamic Force 175 HP', hp: 175, cc: 1987, packages: ['Vision','Dream'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 222 HP', hp: 222, cc: 2487, packages: ['Dream','Passion','Adventure'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 306 HP', hp: 306, cc: 2487, packages: ['Passion PHEV'] },
    ]},
    'land-cruiser': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.8 D-4D 204 HP', hp: 204, cc: 2755, packages: ['Style','Invincible'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.3 D-4D V6 309 HP', hp: 309, cc: 3346, packages: ['First Edition'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.4 Turbo HEV 326 HP', hp: 326, cc: 2393, packages: ['Style','First Edition'] },
    ]},
    'gr86': { years: [2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '2.4 Boxer 234 HP', hp: 234, cc: 2387, packages: ['GR86'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 Boxer 234 HP', hp: 234, cc: 2387, packages: ['GR86'] },
    ]},
    'supra': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 258 HP', hp: 258, cc: 1998, packages: ['GR Supra 2.0'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 387 HP', hp: 387, cc: 2998, packages: ['GR Supra 3.0'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '3.0 Turbo 387 HP', hp: 387, cc: 2998, packages: ['GR Supra MT'] },
    ]},
    'hilux': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.4 D-4D 150 HP', hp: 150, cc: 2393, packages: ['Active','Invincible'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.8 D-4D 204 HP', hp: 204, cc: 2755, packages: ['Invincible','GR Sport'] },
    ]},
    'proace-city': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['City','City Verso'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['City','City Verso'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 136 HP', hp: 136, cc: 0, packages: ['City Electric','City Verso Electric'] },
    ]},
    'bz4x': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 2WD 204 HP', hp: 204, cc: 0, packages: ['Dream','Passion'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 218 HP', hp: 218, cc: 0, packages: ['Passion AWD'] },
    ]},
  },
  'volkswagen': {
    'golf': { years: [2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Impression','Life'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Life','Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI GTI 245 HP', hp: 245, cc: 1984, packages: ['GTI'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI R 320 HP', hp: 320, cc: 1984, packages: ['R'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Life','Style','R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 TSI eHybrid 204 HP', hp: 204, cc: 1395, packages: ['GTE'] },
    ]},
    'passat': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Impression','Business','Elegance','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 272 HP', hp: 272, cc: 1984, packages: ['R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Business','Elegance'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['Elegance','R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 TSI eHybrid 218 HP', hp: 218, cc: 1395, packages: ['GTE'] },
    ]},
    'polo': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 95 HP', hp: 95, cc: 999, packages: ['Impression','Life'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Life','Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI GTI 207 HP', hp: 207, cc: 1984, packages: ['GTI'] },
    ]},
    't-cross': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Life','Style','R-Line'] },
    ]},
    'taigo': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Life','Style','R-Line'] },
    ]},
    't-roc': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Life','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI R 300 HP', hp: 300, cc: 1984, packages: ['R'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Style','R-Line'] },
    ]},
    'tiguan': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Life','Elegance','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 204 HP', hp: 204, cc: 1984, packages: ['R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Life','Elegance','R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 TSI eHybrid 245 HP', hp: 245, cc: 1395, packages: ['R-Line','R'] },
    ]},
    'touareg': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 TSI V6 340 HP', hp: 340, cc: 2995, packages: ['Atmosphere','Elegance','R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI V6 286 HP', hp: 286, cc: 2967, packages: ['Atmosphere','Elegance','R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 TSI V6 eHybrid 462 HP', hp: 462, cc: 2995, packages: ['R-Line','R'] },
    ]},
    'id-3': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.3 Pro 204 HP', hp: 204, cc: 0, packages: ['Life','Style'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.3 Pro S 204 HP', hp: 204, cc: 0, packages: ['Style','Max'] },
    ]},
    'id-4': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.4 Pro 204 HP', hp: 204, cc: 0, packages: ['Life','Style'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.4 GTX 299 HP', hp: 299, cc: 0, packages: ['Max'] },
    ]},
    'id-5': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.5 Pro 204 HP', hp: 204, cc: 0, packages: ['Style'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.5 GTX 299 HP', hp: 299, cc: 0, packages: ['Max'] },
    ]},
    'id-7': { years: [2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.7 Pro 286 HP', hp: 286, cc: 0, packages: ['Pro','Pro S'] },
    ]},
    'id-buzz': { years: [2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.Buzz Pro 204 HP', hp: 204, cc: 0, packages: ['Pro'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.Buzz GTX 340 HP', hp: 340, cc: 0, packages: ['GTX'] },
    ]},
    'arteon': { years: [2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 190 HP', hp: 190, cc: 1984, packages: ['Elegance','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 280 HP', hp: 280, cc: 1984, packages: ['R'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['Elegance','R-Line'] },
    ]},
    'amarok': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 170 HP', hp: 170, cc: 1968, packages: ['Life','Style'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 TDI V6 250 HP', hp: 250, cc: 2967, packages: ['Style','PanAmericana','Aventura'] },
    ]},
    'caddy': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 114 HP', hp: 114, cc: 1498, packages: ['Caddy','Life','Style'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 122 HP', hp: 122, cc: 1968, packages: ['Life','Style'] },
    ]},
    'transporter': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'van', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Transporter','Caravelle','Multivan'] },
    ]},
    'crafter': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'van', variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '2.0 TDI 140 HP', hp: 140, cc: 1968, packages: ['Crafter'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 177 HP', hp: 177, cc: 1968, packages: ['Crafter','Grand California'] },
    ]},
  },
  'volvo': {
    'xc40': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B3 163 HP', hp: 163, cc: 1477, packages: ['Core','Plus','Ultra'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B4 197 HP', hp: 197, cc: 1969, packages: ['Plus','Ultra'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T4 Recharge 211 HP', hp: 211, cc: 1477, packages: ['Plus','Ultra'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T5 Recharge 263 HP', hp: 263, cc: 1477, packages: ['Ultra'] },
    ]},
    'xc60': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B4 197 HP', hp: 197, cc: 1969, packages: ['Core','Plus','Ultra'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B5 250 HP', hp: 250, cc: 1969, packages: ['Plus','Ultra'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'B4 D 197 HP', hp: 197, cc: 1969, packages: ['Core','Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T6 Recharge 350 HP', hp: 350, cc: 1969, packages: ['Plus','Ultra'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T8 Recharge 455 HP', hp: 455, cc: 1969, packages: ['Ultra','Polestar Engineered'] },
    ]},
    'xc90': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B5 250 HP', hp: 250, cc: 1969, packages: ['Core','Plus','Ultra'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'B5 D 235 HP', hp: 235, cc: 1969, packages: ['Core','Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T8 Recharge 455 HP', hp: 455, cc: 1969, packages: ['Plus','Ultra'] },
    ]},
    'c40-recharge': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Single Motor 238 HP', hp: 238, cc: 0, packages: ['Core','Plus','Ultra'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Twin Motor 408 HP', hp: 408, cc: 0, packages: ['Ultra'] },
    ]},
    'ex30': { years: [2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Single Motor 272 HP', hp: 272, cc: 0, packages: ['Core','Plus','Ultra'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Twin Motor 428 HP', hp: 428, cc: 0, packages: ['Ultra','Performance'] },
    ]},
    'ex40': { years: [2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Single Motor 238 HP', hp: 238, cc: 0, packages: ['Core','Plus','Ultra'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Twin Motor 408 HP', hp: 408, cc: 0, packages: ['Ultra'] },
    ]},
    'ex90': { years: [2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Twin Motor 408 HP', hp: 408, cc: 0, packages: ['Plus','Ultra'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Twin Motor Performance 517 HP', hp: 517, cc: 0, packages: ['Ultra'] },
    ]},
    's60': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B4 197 HP', hp: 197, cc: 1969, packages: ['Core','Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B5 250 HP', hp: 250, cc: 1969, packages: ['Plus','Ultra'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T8 Recharge 455 HP', hp: 455, cc: 1969, packages: ['Plus','Ultra','Polestar Engineered'] },
    ]},
    's90': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B5 250 HP', hp: 250, cc: 1969, packages: ['Core','Plus','Ultra'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'B5 D 235 HP', hp: 235, cc: 1969, packages: ['Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T8 Recharge 455 HP', hp: 455, cc: 1969, packages: ['Ultra'] },
    ]},
    'v60': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B4 197 HP', hp: 197, cc: 1969, packages: ['Core','Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B5 250 HP', hp: 250, cc: 1969, packages: ['Plus','Ultra'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T6 Recharge 350 HP', hp: 350, cc: 1969, packages: ['Plus','Ultra'] },
    ]},
    'v90': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: 'B5 250 HP', hp: 250, cc: 1969, packages: ['Plus','Ultra'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: 'B4 D 197 HP', hp: 197, cc: 1969, packages: ['Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'T8 Recharge 455 HP', hp: 455, cc: 1969, packages: ['Ultra'] },
    ]},
  },
  'wey': {
    'coffee-01': { years: [2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Turbo PHEV 476 HP', hp: 476, cc: 1998, packages: ['Standard','Luxury'] }]},
    'coffee-02': { years: [2022,2023,2024], bodyType: 'crossover', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo PHEV 350 HP', hp: 350, cc: 1498, packages: ['Standard','Luxury'] }]},
  },
  // Extra brands that may have been added since part 1:
  'iveco': {
    'daily': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'van', variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '2.3 136 HP', hp: 136, cc: 2287, packages: ['Van','Minibus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 180 HP', hp: 180, cc: 2998, packages: ['Van','Minibus'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'eDaily EV 122 HP', hp: 122, cc: 0, packages: ['Electric Van'] },
    ]},
  },
  'lancia': {
    'ypsilon': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 Hybrid 70 HP', hp: 70, cc: 999, packages: ['Silver','Gold'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 156 HP', hp: 156, cc: 0, packages: ['Gold EV','Cassina'] },
    ]},
  },
};
module.exports = VARIANTS_PART4;
