/**
 * Araç Varyant Veritabanı – Parça 4/4
 * Renault → Volvo + index birleştirici
 */

const VARIANTS_PART4 = {

  // ══════════════════════════════════════
  // RENAULT
  // ══════════════════════════════════════
  'renault': {
    'clio': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Joy','Zen','Intens','RS Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 100 HP', hp: 100, cc: 999, packages: ['Zen','Intens','RS Line','Techno'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 SCe 65 HP', hp: 65, cc: 999, packages: ['Joy'] },
      { fuel: 'lpg', transmission: 'otomatik', engine: '1.0 TCe LPG 100 HP', hp: 100, cc: 999, packages: ['Zen','Intens'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tech Hybrid 145 HP', hp: 145, cc: 1598, packages: ['Intens','RS Line','Techno','Esprit Alpine'] },
    ]},
    'captur': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Joy','Zen','Intens'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 140 HP', hp: 140, cc: 1332, packages: ['Intens','RS Line','Techno'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tech Hybrid 145 HP', hp: 145, cc: 1598, packages: ['Intens','Techno','Esprit Alpine'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tech PHEV 160 HP', hp: 160, cc: 1598, packages: ['RS Line','Techno'] },
      { fuel: 'lpg', transmission: 'otomatik', engine: '1.0 TCe LPG 100 HP', hp: 100, cc: 999, packages: ['Zen','Intens'] },
    ]},
    'megane': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 140 HP', hp: 140, cc: 1332, packages: ['Zen','Intens','RS Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 160 HP', hp: 160, cc: 1332, packages: ['RS Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Blue dCi 115 HP', hp: 115, cc: 1461, packages: ['Joy','Zen','Intens'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tech PHEV 160 HP', hp: 160, cc: 1598, packages: ['Intens','RS Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Megane E-Tech Elektrik 220 HP', hp: 220, cc: 0, packages: ['Equilibre','Techno','Iconic'] },
    ]},
    'taliant': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TCe 90 HP', hp: 90, cc: 999, packages: ['Joy','Zen','Intens'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 SCe 65 HP', hp: 65, cc: 999, packages: ['Joy'] },
      { fuel: 'lpg', transmission: 'otomatik', engine: '1.0 TCe LPG 100 HP', hp: 100, cc: 999, packages: ['Joy','Zen','Intens'] },
    ]},
    'kadjar': { years: [2015,2016,2017,2018,2019,2020,2021,2022], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 140 HP', hp: 140, cc: 1332, packages: ['Joy','Zen','Icon'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 160 HP', hp: 160, cc: 1332, packages: ['Icon'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Blue dCi 115 HP', hp: 115, cc: 1461, packages: ['Joy','Zen'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.7 Blue dCi 150 HP', hp: 150, cc: 1749, packages: ['Zen','Icon'] },
    ]},
    'austral': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 TCe 130 HP', hp: 130, cc: 1199, packages: ['Equilibre','Techno','Iconic','Esprit Alpine'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.2 E-Tech Hybrid 200 HP', hp: 200, cc: 1199, packages: ['Techno','Iconic','Esprit Alpine'] },
    ]},
    'koleos': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 150 HP', hp: 150, cc: 1332, packages: ['Joy','Zen','Icon'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.7 Blue dCi 150 HP', hp: 150, cc: 1749, packages: ['Zen','Icon'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 Blue dCi 190 HP', hp: 190, cc: 1997, packages: ['Icon 4x4'] },
    ]},
    'espace': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.2 E-Tech Hybrid 200 HP', hp: 200, cc: 1199, packages: ['Techno','Iconic','Esprit Alpine'] },
    ]},
    'kangoo': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 Blue dCi 115 HP', hp: 115, cc: 1461, packages: ['Joy','Zen','Intens'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 Blue dCi 95 HP', hp: 95, cc: 1461, packages: ['Joy','Zen'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 TCe 130 HP', hp: 130, cc: 1332, packages: ['Joy','Zen'] },
    ]},
    'zoe': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik R110 108 HP', hp: 108, cc: 0, packages: ['Zen','Intens'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik R135 136 HP', hp: 136, cc: 0, packages: ['Intens','Techno'] },
    ]},
    'scenic': { years: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Scenic E-Tech Elektrik 220 HP', hp: 220, cc: 0, packages: ['Techno','Iconic','Esprit Alpine'] },
    ]},
    '5-e-tech': { years: [2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Renault 5 Elektrik 150 HP', hp: 150, cc: 0, packages: ['Evolution','Techno','Iconic Five'] },
    ]},
  },

  // ══════════════════════════════════════
  // SEAT / CUPRA
  // ══════════════════════════════════════
  'seat': {
    'ibiza': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 95 HP', hp: 95, cc: 999, packages: ['Reference','Style','Xcellence','FR'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Xcellence','FR'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['FR'] },
    ]},
    'leon': { years: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Reference','Style','Xcellence'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Xcellence','FR'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 190 HP', hp: 190, cc: 1984, packages: ['FR'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Xcellence','FR'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 e-Hybrid 204 HP', hp: 204, cc: 1395, packages: ['FR'] },
    ]},
    'arona': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 95 HP', hp: 95, cc: 999, packages: ['Reference','Style','Xcellence','FR'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Xcellence','FR'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['FR'] },
    ]},
    'ateca': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Reference','Style','Xcellence'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Xcellence','FR'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Xcellence','FR'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 190 HP', hp: 190, cc: 1968, packages: ['FR 4Drive'] },
    ]},
  },

  'cupra': {
    'formentor': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2','VZ'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['VZ'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 310 HP', hp: 310, cc: 1984, packages: ['VZ5'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 e-Hybrid 204 HP', hp: 204, cc: 1395, packages: ['VZ e-Hybrid'] },
    ]},
    'leon': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['V1','V2'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['VZ'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 300 HP', hp: 300, cc: 1984, packages: ['VZ'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 e-Hybrid 204 HP', hp: 204, cc: 1395, packages: ['VZ e-Hybrid'] },
    ]},
    'born': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 204 HP', hp: 204, cc: 0, packages: ['V1','V2','VZ'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 231 HP', hp: 231, cc: 0, packages: ['VZ'] },
    ]},
    'tavascan': { years: [2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 286 HP', hp: 286, cc: 0, packages: ['V','VZ'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 340 HP', hp: 340, cc: 0, packages: ['VZ'] },
    ]},
  },

  // ══════════════════════════════════════
  // SKODA
  // ══════════════════════════════════════
  'skoda': {
    'fabia': { years: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 95 HP', hp: 95, cc: 999, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','Monte Carlo'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Monte Carlo'] },
    ]},
    'scala': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 95 HP', hp: 95, cc: 999, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','Monte Carlo'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Monte Carlo'] },
    ]},
    'octavia': { years: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Style','L&K','RS'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['RS'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Style','L&K'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['L&K','RS'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 iV PHEV 204 HP', hp: 204, cc: 1395, packages: ['Style','L&K','RS'] },
    ]},
    'superb': { years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 204 HP', hp: 204, cc: 1984, packages: ['Style','L&K'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 265 HP', hp: 265, cc: 1984, packages: ['L&K','Sportline'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Active','Ambition','Style'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['Style','L&K'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 TSI iV PHEV 204 HP', hp: 204, cc: 1498, packages: ['Style','L&K','Sportline'] },
    ]},
    'kamiq': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 95 HP', hp: 95, cc: 999, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','Monte Carlo'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Monte Carlo'] },
    ]},
    'karoq': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Style','Sportline'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Style','Sportline'] },
    ]},
    'kodiaq': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Active','Ambition','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 204 HP', hp: 204, cc: 1984, packages: ['Style','L&K','RS','Sportline'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 245 HP', hp: 245, cc: 1984, packages: ['RS'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Active','Ambition','Style'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['Style','L&K','Sportline'] },
    ]},
    'enyaq': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Enyaq iV 60 179 HP', hp: 179, cc: 0, packages: ['Loft','Suite','L&K'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Enyaq iV 80 204 HP', hp: 204, cc: 0, packages: ['Suite','L&K','Sportline'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Enyaq iV 80x 265 HP', hp: 265, cc: 0, packages: ['Sportline','RS'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Enyaq RS iV 299 HP', hp: 299, cc: 0, packages: ['RS'] },
    ]},
    'elroq': { years: [2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elroq 50 170 HP', hp: 170, cc: 0, packages: ['Studio','Loft'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elroq 60 204 HP', hp: 204, cc: 0, packages: ['Loft','Suite'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elroq 85 286 HP', hp: 286, cc: 0, packages: ['Suite','L&K'] },
    ]},
  },

  // ══════════════════════════════════════
  // SUBARU
  // ══════════════════════════════════════
  'subaru': {
    'impreza': { years: [1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Boxer 150 HP', hp: 150, cc: 1995, packages: ['Comfort','Style','Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e-Boxer Hybrid 150 HP', hp: 150, cc: 1995, packages: ['Style','Premium'] },
    ]},
    'xv': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Boxer 150 HP', hp: 150, cc: 1995, packages: ['Comfort','Style','Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e-Boxer Hybrid 150 HP', hp: 150, cc: 1995, packages: ['Style','Premium'] },
    ]},
    'forester': { years: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 e-Boxer 150 HP', hp: 150, cc: 1995, packages: ['Comfort','Style','Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e-Boxer Hybrid 150 HP', hp: 150, cc: 1995, packages: ['Style','Premium','Sport'] },
    ]},
    'outback': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 169 HP', hp: 169, cc: 2498, packages: ['Active','Style','Field','Platinum'] },
    ]},
    'wrx': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 Turbo 275 HP', hp: 275, cc: 2387, packages: ['Base','Premium','GT'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '2.4 Turbo 275 HP', hp: 275, cc: 2387, packages: ['Base','Premium'] },
    ]},
    'brz': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 228 HP', hp: 228, cc: 2387, packages: ['Base','Premium'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '2.4 228 HP', hp: 228, cc: 2387, packages: ['Base','Premium'] },
    ]},
    'solterra': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 218 HP', hp: 218, cc: 0, packages: ['Comfort','Premium','Touring'] },
    ]},
  },

  // ══════════════════════════════════════
  // SUZUKI
  // ══════════════════════════════════════
  'suzuki': {
    'swift': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Hybrid 83 HP', hp: 83, cc: 1197, packages: ['GL','GL+','GLX'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Boosterjet Sport 129 HP', hp: 129, cc: 1373, packages: ['Sport'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 Hybrid 83 HP', hp: 83, cc: 1197, packages: ['GL'] },
    ]},
    'vitara': { years: [1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Boosterjet Hybrid 129 HP', hp: 129, cc: 1373, packages: ['GL','GL+','GLX'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Hybrid 115 HP', hp: 115, cc: 1462, packages: ['GL+','GLX'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Boosterjet Hybrid ALLGRIP 129 HP', hp: 129, cc: 1373, packages: ['GLX 4x4'] },
    ]},
    's-cross': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Boosterjet Hybrid 129 HP', hp: 129, cc: 1373, packages: ['GL+','GLX','GLX Select'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.4 Boosterjet Hybrid ALLGRIP 129 HP', hp: 129, cc: 1373, packages: ['GLX 4x4'] },
    ]},
    'jimny': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 ALLGRIP 102 HP', hp: 102, cc: 1462, packages: ['GL','GLX'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.5 ALLGRIP 102 HP', hp: 102, cc: 1462, packages: ['GL','GLX'] },
    ]},
    'ignis': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Hybrid 83 HP', hp: 83, cc: 1197, packages: ['GL','GL+','GLX'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 Hybrid 83 HP', hp: 83, cc: 1197, packages: ['GL'] },
    ]},
    'across': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 306 HP', hp: 306, cc: 2487, packages: ['GLX'] },
    ]},
    'swace': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.8 Hybrid 122 HP', hp: 122, cc: 1798, packages: ['GL+','GLX'] },
    ]},
  },

  // ══════════════════════════════════════
  // TESLA
  // ══════════════════════════════════════
  'tesla': {
    'model-3': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Standard Range 283 HP', hp: 283, cc: 0, packages: ['Standard Range','Standard Range Plus'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Long Range AWD 346 HP', hp: 346, cc: 0, packages: ['Long Range','Long Range AWD'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Performance AWD 460 HP', hp: 460, cc: 0, packages: ['Performance'] },
    ]},
    'model-y': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Standard Range 283 HP', hp: 283, cc: 0, packages: ['Standard Range'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Long Range AWD 346 HP', hp: 346, cc: 0, packages: ['Long Range','Long Range AWD'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Performance AWD 462 HP', hp: 462, cc: 0, packages: ['Performance'] },
    ]},
    'model-s': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Dual Motor AWD 670 HP', hp: 670, cc: 0, packages: ['Long Range','Long Range AWD'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Plaid Tri Motor 1020 HP', hp: 1020, cc: 0, packages: ['Plaid'] },
    ]},
    'model-x': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Dual Motor AWD 670 HP', hp: 670, cc: 0, packages: ['Long Range','Long Range AWD'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Plaid Tri Motor 1020 HP', hp: 1020, cc: 0, packages: ['Plaid'] },
    ]},
    'cybertruck': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Single Motor RWD 315 HP', hp: 315, cc: 0, packages: ['Single Motor'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Dual Motor AWD 600 HP', hp: 600, cc: 0, packages: ['All-Wheel Drive'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Tri Motor AWD Cyberbeast 845 HP', hp: 845, cc: 0, packages: ['Cyberbeast'] },
    ]},
  },

  // ══════════════════════════════════════
  // TOGG
  // ══════════════════════════════════════
  'togg': {
    't10x': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'RWD 200 HP', hp: 200, cc: 0, packages: ['Standart Menzil','Uzun Menzil'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AWD 400 HP', hp: 400, cc: 0, packages: ['Uzun Menzil AWD'] },
    ]},
    't10f': { years: [2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'RWD 200 HP', hp: 200, cc: 0, packages: ['Standart Menzil','Uzun Menzil'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'AWD 400 HP', hp: 400, cc: 0, packages: ['Uzun Menzil AWD'] },
    ]},
  },

  // ══════════════════════════════════════
  // TOYOTA
  // ══════════════════════════════════════
  'toyota': {
    'yaris': { years: [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 72 HP', hp: 72, cc: 998, packages: ['Life','Active','Style'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 72 HP', hp: 72, cc: 998, packages: ['Life'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Hybrid 116 HP', hp: 116, cc: 1490, packages: ['Active','Style','Premiere','GR Sport'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 Turbo GR Yaris 261 HP', hp: 261, cc: 1618, packages: ['GR Yaris'] },
    ]},
    'corolla': { years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.8 Hybrid 122 HP', hp: 122, cc: 1798, packages: ['Dream','Vision','Passion','GR Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Hybrid 196 HP', hp: 196, cc: 1987, packages: ['GR Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 125 HP', hp: 125, cc: 1496, packages: ['Dream','Vision'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.5 125 HP', hp: 125, cc: 1496, packages: ['Dream'] },
    ]},
    'camry': { years: [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 218 HP', hp: 218, cc: 2487, packages: ['Dream','Passion','Advance'] },
    ]},
    'yaris-cross': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Hybrid 116 HP', hp: 116, cc: 1490, packages: ['Active','Style','Premiere','GR Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 120 HP', hp: 120, cc: 1490, packages: ['Active','Style'] },
    ]},
    'c-hr': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.8 Hybrid 122 HP', hp: 122, cc: 1798, packages: ['Active','Style','Premiere','GR Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Hybrid 199 HP', hp: 199, cc: 1987, packages: ['Style','GR Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 PHEV 223 HP', hp: 223, cc: 1987, packages: ['GR Sport PHEV'] },
    ]},
    'rav4': { years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 218 HP', hp: 218, cc: 2487, packages: ['Dream','Passion','Advance'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid AWD-i 222 HP', hp: 222, cc: 2487, packages: ['Advance AWD'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 306 HP', hp: 306, cc: 2487, packages: ['Advance PHEV'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 175 HP', hp: 175, cc: 1987, packages: ['Dream','Passion'] },
    ]},
    'highlander': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid AWD-i 248 HP', hp: 248, cc: 2487, packages: ['Advance','Premiere'] },
    ]},
    'land-cruiser': { years: [1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.8 D-4D 204 HP', hp: 204, cc: 2755, packages: ['Active','Style','VX'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.8 D-4D Hybrid 204 HP', hp: 204, cc: 2755, packages: ['Style','VX'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 V6 415 HP', hp: 415, cc: 3444, packages: ['First Edition','GR Sport'] },
    ]},
    'hilux': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.4 D-4D 150 HP', hp: 150, cc: 2393, packages: ['Life','Active','Style','Invincible'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.8 D-4D 204 HP', hp: 204, cc: 2755, packages: ['Invincible','GR Sport'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '2.4 D-4D 150 HP', hp: 150, cc: 2393, packages: ['Life','Active'] },
    ]},
    'supra': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 258 HP', hp: 258, cc: 1998, packages: ['Pure','Fuji Speedway'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 Turbo 340 HP', hp: 340, cc: 2998, packages: ['Premium','A91 Edition'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '3.0 Turbo 340 HP', hp: 340, cc: 2998, packages: ['A91 MT'] },
    ]},
    'bz4x': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik 2WD 204 HP', hp: 204, cc: 0, packages: ['Active','Style'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Elektrik AWD 218 HP', hp: 218, cc: 0, packages: ['Style AWD'] },
    ]},
    'proace-city': { years: [2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 D-4D 130 HP', hp: 130, cc: 1499, packages: ['Life','Active','Style'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 D-4D 100 HP', hp: 100, cc: 1499, packages: ['Life','Active'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Proace City Elektrik 136 HP', hp: 136, cc: 0, packages: ['Active','Style'] },
    ]},
  },

  // ══════════════════════════════════════
  // VOLKSWAGEN
  // ══════════════════════════════════════
  'volkswagen': {
    'polo': { years: [1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 95 HP', hp: 95, cc: 999, packages: ['Life','Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI GTI 207 HP', hp: 207, cc: 1984, packages: ['GTI'] },
    ]},
    'golf': { years: [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Life','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI GTI 245 HP', hp: 245, cc: 1984, packages: ['GTI'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI R 320 HP', hp: 320, cc: 1984, packages: ['R'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Life','Style','R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 eHybrid 204 HP', hp: 204, cc: 1395, packages: ['Style','R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 GTE 245 HP', hp: 245, cc: 1395, packages: ['GTE'] },
    ]},
    'passat': { years: [1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Business','Elegance','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 272 HP', hp: 272, cc: 1984, packages: ['R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Business','Elegance','R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['Elegance','R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 GTE PHEV 218 HP', hp: 218, cc: 1395, packages: ['Elegance','R-Line'] },
    ]},
    't-cross': { years: [2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 95 HP', hp: 95, cc: 999, packages: ['Life','Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['R-Line'] },
    ]},
    't-roc': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 TSI 110 HP', hp: 110, cc: 999, packages: ['Life','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Style','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI R 300 HP', hp: 300, cc: 1984, packages: ['R'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Style','R-Line'] },
    ]},
    'tiguan': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Life','Elegance','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 190 HP', hp: 190, cc: 1984, packages: ['R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI R 320 HP', hp: 320, cc: 1984, packages: ['R'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Life','Elegance','R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['R-Line 4Motion'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 eHybrid 245 HP', hp: 245, cc: 1395, packages: ['Elegance','R-Line'] },
    ]},
    'touareg': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 TSI 340 HP', hp: 340, cc: 2995, packages: ['Elegance','Atmosphere','R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 TDI 286 HP', hp: 286, cc: 2967, packages: ['Elegance','R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 TSI eHybrid 462 HP', hp: 462, cc: 2995, packages: ['R-Line','R'] },
    ]},
    'arteon': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 150 HP', hp: 150, cc: 1498, packages: ['Elegance','R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI 280 HP', hp: 280, cc: 1984, packages: ['R-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 TSI R 320 HP', hp: 320, cc: 1984, packages: ['R'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Elegance','R-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 200 HP', hp: 200, cc: 1968, packages: ['R-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 eHybrid 218 HP', hp: 218, cc: 1395, packages: ['R-Line'] },
    ]},
    'id-3': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.3 Pro 204 HP', hp: 204, cc: 0, packages: ['Life','Style','Max'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.3 Pro S 204 HP', hp: 204, cc: 0, packages: ['Max'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.3 GTX 286 HP', hp: 286, cc: 0, packages: ['GTX'] },
    ]},
    'id-4': { years: [2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.4 Pro 204 HP', hp: 204, cc: 0, packages: ['Life','Style','Max'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.4 Pro S 204 HP', hp: 204, cc: 0, packages: ['Style','Max'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.4 GTX 299 HP', hp: 299, cc: 0, packages: ['GTX'] },
    ]},
    'id-5': { years: [2021,2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.5 Pro 204 HP', hp: 204, cc: 0, packages: ['Style','Max'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.5 GTX 299 HP', hp: 299, cc: 0, packages: ['GTX'] },
    ]},
    'id-7': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.7 Pro 286 HP', hp: 286, cc: 0, packages: ['Pro','Pro S'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.7 GTX 340 HP', hp: 340, cc: 0, packages: ['GTX'] },
    ]},
    'id-buzz': { years: [2022,2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.Buzz Pro 204 HP', hp: 204, cc: 0, packages: ['Pro','Pro S'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'ID.Buzz GTX 340 HP', hp: 340, cc: 0, packages: ['GTX'] },
    ]},
    'caddy': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 122 HP', hp: 122, cc: 1968, packages: ['Life','Style','Move'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 TSI 114 HP', hp: 114, cc: 1498, packages: ['Life','Style'] },
    ]},
    'transporter': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 150 HP', hp: 150, cc: 1968, packages: ['Kombi','Caravelle','Multivan'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 204 HP', hp: 204, cc: 1968, packages: ['Caravelle','Multivan'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.4 eHybrid 218 HP', hp: 218, cc: 1395, packages: ['Multivan eHybrid'] },
    ]},
    'amarok': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 TDI 205 HP', hp: 205, cc: 1968, packages: ['Life','Style','PanAmericana'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 TDI 241 HP', hp: 241, cc: 2967, packages: ['PanAmericana','Aventura'] },
    ]},
  },

  // ══════════════════════════════════════
  // VOLVO
  // ══════════════════════════════════════
  'volvo': {
    's60': { years: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B5 250 HP', hp: 250, cc: 1969, packages: ['Core','Plus','Ultimate'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 T8 PHEV 455 HP', hp: 455, cc: 1969, packages: ['Polestar Engineered'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T8 Recharge PHEV 390 HP', hp: 390, cc: 1969, packages: ['Plus','Ultimate'] },
    ]},
    's90': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B5 250 HP', hp: 250, cc: 1969, packages: ['Core','Plus','Ultimate'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D5 235 HP', hp: 235, cc: 1969, packages: ['Momentum','Inscription'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T8 Recharge PHEV 455 HP', hp: 455, cc: 1969, packages: ['Plus','Ultimate'] },
    ]},
    'v60': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B4 197 HP', hp: 197, cc: 1969, packages: ['Core','Plus'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B5 250 HP', hp: 250, cc: 1969, packages: ['Plus','Ultimate'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D4 190 HP', hp: 190, cc: 1969, packages: ['Core','Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T6 Recharge PHEV 350 HP', hp: 350, cc: 1969, packages: ['Plus','Ultimate'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T8 Recharge PHEV 455 HP', hp: 455, cc: 1969, packages: ['Polestar Engineered'] },
    ]},
    'v90': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B5 250 HP', hp: 250, cc: 1969, packages: ['Core','Plus','Ultimate'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D5 235 HP', hp: 235, cc: 1969, packages: ['Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T8 Recharge PHEV 455 HP', hp: 455, cc: 1969, packages: ['Plus','Ultimate'] },
    ]},
    'xc40': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B4 197 HP', hp: 197, cc: 1969, packages: ['Core','Plus','Ultimate'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B5 250 HP', hp: 250, cc: 1969, packages: ['Plus','Ultimate'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 T4 Recharge PHEV 211 HP', hp: 211, cc: 1477, packages: ['Plus','Ultimate'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Recharge Pure Electric 231 HP', hp: 231, cc: 0, packages: ['Core','Plus','Ultimate'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Recharge Twin Motor 408 HP', hp: 408, cc: 0, packages: ['Ultimate'] },
    ]},
    'xc60': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B5 250 HP', hp: 250, cc: 1969, packages: ['Core','Plus','Ultimate'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B6 300 HP', hp: 300, cc: 1969, packages: ['Plus','Ultimate'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D5 235 HP', hp: 235, cc: 1969, packages: ['Core','Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T6 Recharge PHEV 350 HP', hp: 350, cc: 1969, packages: ['Plus','Ultimate'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T8 Recharge PHEV 455 HP', hp: 455, cc: 1969, packages: ['Polestar Engineered'] },
    ]},
    'xc90': { years: [2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B5 250 HP', hp: 250, cc: 1969, packages: ['Core','Plus','Ultimate'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 B6 300 HP', hp: 300, cc: 1969, packages: ['Plus','Ultimate'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D5 235 HP', hp: 235, cc: 1969, packages: ['Core','Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T8 Recharge PHEV 455 HP', hp: 455, cc: 1969, packages: ['Plus','Ultimate'] },
    ]},
    'ex30': { years: [2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Single Motor 272 HP', hp: 272, cc: 0, packages: ['Core','Plus','Ultra'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Twin Motor 428 HP', hp: 428, cc: 0, packages: ['Ultra','Performance'] },
    ]},
    'ex90': { years: [2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Single Motor 279 HP', hp: 279, cc: 0, packages: ['Core','Plus','Ultra'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Twin Motor 408 HP', hp: 408, cc: 0, packages: ['Ultra','Performance Twin Motor'] },
    ]},
    'ec40': { years: [2023,2024,2025], variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Recharge Pure Electric 231 HP', hp: 231, cc: 0, packages: ['Core','Plus','Ultimate'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'Recharge Twin Motor 408 HP', hp: 408, cc: 0, packages: ['Ultimate'] },
    ]},
  },

};

module.exports = VARIANTS_PART4;
