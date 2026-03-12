/**
 * Araç Varyant Veritabanı – Parça 2/4
 * DS → Lexus (Marka sırasıyla)
 */
const VARIANTS_PART2 = {
  'ds': {
    'ds-3': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 PureTech 110 HP', hp: 110, cc: 1199, packages: ['Chic','So Chic'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 THP 165 HP', hp: 165, cc: 1598, packages: ['Sport Chic','Performance'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.6 BlueHDi 100 HP', hp: 100, cc: 1560, packages: ['Chic','So Chic'] },
    ]},
    'ds-3-crossback': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['So Chic','Grand Chic','Performance Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 155 HP', hp: 155, cc: 1199, packages: ['Performance Line+'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'E-Tense 136 HP', hp: 136, cc: 0, packages: ['So Chic','Grand Chic','Performance Line'] },
    ]},
    'ds-4': { years: [2011,2012,2013,2014,2015,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 PureTech 130 HP', hp: 130, cc: 1199, packages: ['Bastille','Performance Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 225 HP', hp: 225, cc: 1598, packages: ['Performance Line+','La Première'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tense 225 HP', hp: 225, cc: 1598, packages: ['Performance Line+','La Première'] },
    ]},
    'ds-5': { years: [2011,2012,2013,2014,2015,2016,2017,2018], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 THP 165 HP', hp: 165, cc: 1598, packages: ['So Chic'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 BlueHDi 180 HP', hp: 180, cc: 1997, packages: ['So Chic','Sport Chic'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: 'Hybrid4 200 HP', hp: 200, cc: 1997, packages: ['Sport Chic'] },
    ]},
    'ds-7': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 180 HP', hp: 180, cc: 1598, packages: ['So Chic','Grand Chic','Performance Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 225 HP', hp: 225, cc: 1598, packages: ['Performance Line+','La Première'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.5 BlueHDi 130 HP', hp: 130, cc: 1499, packages: ['So Chic','Performance Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tense 225 HP', hp: 225, cc: 1598, packages: ['Grand Chic','La Première'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tense 4x4 300 HP', hp: 300, cc: 1598, packages: ['Performance Line+','La Première'] },
    ]},
    'ds-9': { years: [2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 PureTech 225 HP', hp: 225, cc: 1598, packages: ['Rivoli','Performance Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tense 225 HP', hp: 225, cc: 1598, packages: ['Rivoli+','Performance Line+'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 E-Tense 360 HP', hp: 360, cc: 1598, packages: ['Performance Line+'] },
    ]},
  },
  'ferrari': {
    'f8-tributo': { years: [2019,2020,2021,2022], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Turbo 720 HP', hp: 720, cc: 3902, packages: ['Tributo'] }]},
    'f8-spider': { years: [2019,2020,2021,2022], bodyType: 'cabrio', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Turbo 720 HP', hp: 720, cc: 3902, packages: ['Spider'] }]},
    'sf90-stradale': { years: [2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '4.0 V8 PHEV 1000 HP', hp: 1000, cc: 3990, packages: ['Stradale','Assetto Fiorano'] }]},
    'sf90-spider': { years: [2021,2022,2023,2024], bodyType: 'cabrio', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '4.0 V8 PHEV 1000 HP', hp: 1000, cc: 3990, packages: ['Spider'] }]},
    '296-gtb': { years: [2022,2023,2024,2025], bodyType: 'coupe', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 PHEV 830 HP', hp: 830, cc: 2992, packages: ['GTB','Assetto Fiorano'] }]},
    '296-gts': { years: [2022,2023,2024,2025], bodyType: 'cabrio', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 PHEV 830 HP', hp: 830, cc: 2992, packages: ['GTS'] }]},
    'roma': { years: [2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Turbo 620 HP', hp: 620, cc: 3855, packages: ['Roma'] }]},
    'roma-spider': { years: [2023,2024,2025], bodyType: 'cabrio', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Turbo 620 HP', hp: 620, cc: 3855, packages: ['Roma Spider'] }]},
    '812-competizione': { years: [2021,2022,2023], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '6.5 V12 830 HP', hp: 830, cc: 6496, packages: ['Competizione','Competizione A'] }]},
    'purosangue': { years: [2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '6.5 V12 725 HP', hp: 725, cc: 6496, packages: ['Purosangue'] }]},
    '488-gtb': { years: [2015,2016,2017,2018,2019], bodyType: 'coupe', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Turbo 670 HP', hp: 670, cc: 3902, packages: ['GTB','Pista'] }]},
    '488-spider': { years: [2015,2016,2017,2018,2019], bodyType: 'cabrio', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Turbo 670 HP', hp: 670, cc: 3902, packages: ['Spider','Pista Spider'] }]},
    'portofino-m': { years: [2020,2021,2022,2023], bodyType: 'cabrio', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Turbo 620 HP', hp: 620, cc: 3855, packages: ['M'] }]},
    'laferrari': { years: [2013,2014,2015,2016,2017,2018], bodyType: 'coupe', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '6.3 V12 + KERS 963 HP', hp: 963, cc: 6262, packages: ['LaFerrari','Aperta'] }]},
    'california-t': { years: [2014,2015,2016,2017,2018], bodyType: 'cabrio', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.9 V8 Turbo 560 HP', hp: 560, cc: 3855, packages: ['California T','Handling Speciale'] }]},
  },
  'fiat': {
    'egea-sedan': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Fire 95 HP', hp: 95, cc: 1368, packages: ['Easy','Urban','Lounge'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 FireFly Turbo 100 HP', hp: 100, cc: 999, packages: ['Urban Plus','Lounge Plus'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Easy','Urban','Lounge'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Urban Plus','Lounge Plus'] },
      { fuel: 'lpg', transmission: 'manuel', engine: '1.4 Fire LPG 95 HP', hp: 95, cc: 1368, packages: ['Easy','Urban'] },
    ]},
    'egea-hatchback': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Fire 95 HP', hp: 95, cc: 1368, packages: ['Easy','Urban'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 FireFly Turbo 100 HP', hp: 100, cc: 999, packages: ['Urban Plus','Lounge Plus'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Easy','Urban'] },
    ]},
    'egea-cross': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 FireFly Turbo 100 HP', hp: 100, cc: 999, packages: ['Cross','Cross Plus'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Cross Plus'] },
    ]},
    'egea-station-wagon': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'station_wagon', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 Fire 95 HP', hp: 95, cc: 1368, packages: ['Easy','Urban'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Easy','Urban','Lounge'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Urban Plus','Lounge Plus'] },
    ]},
    '500': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.2 69 HP', hp: 69, cc: 1242, packages: ['Pop','Lounge'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '0.9 TwinAir 85 HP', hp: 85, cc: 875, packages: ['Lounge','Star'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 Hybrid 70 HP', hp: 70, cc: 999, packages: ['Cult','Connect','Star'] },
    ]},
    '500x': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 FireFly Turbo 150 HP', hp: 150, cc: 1332, packages: ['City Cross','Cross','Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 120 HP', hp: 120, cc: 1598, packages: ['City Cross','Cross'] },
    ]},
    '500l': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'minivan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 95 HP', hp: 95, cc: 1368, packages: ['Pop Star','Lounge'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Pop Star','Cross'] },
    ]},
    '500e': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 118 HP', hp: 118, cc: 0, packages: ['Action','Passion','Icon','La Prima'] },
    ]},
    'panda': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 Hybrid 70 HP', hp: 70, cc: 999, packages: ['Pop','City Life','Sport'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '0.9 TwinAir 85 HP', hp: 85, cc: 875, packages: ['Cross'] },
    ]},
    'tipo': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 95 HP', hp: 95, cc: 1368, packages: ['Easy','City Life'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 FireFly Turbo 100 HP', hp: 100, cc: 999, packages: ['City Life','Life'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Easy','City Life'] },
    ]},
    'doblo': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'minivan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 95 HP', hp: 95, cc: 1368, packages: ['Easy','Trekking'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Easy','Trekking','Premio'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 120 HP', hp: 120, cc: 1598, packages: ['Premio','Trekking'] },
    ]},
    'punto': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 77 HP', hp: 77, cc: 1368, packages: ['Active','Dynamic'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 75 HP', hp: 75, cc: 1248, packages: ['Active','Dynamic'] },
    ]},
    'linea': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 77 HP', hp: 77, cc: 1368, packages: ['Active','Dynamic'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.3 MultiJet 95 HP', hp: 95, cc: 1248, packages: ['Active','Dynamic','Emotion'] },
    ]},
    '124-spider': { years: [2016,2017,2018,2019,2020], bodyType: 'cabrio', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.4 MultiAir Turbo 140 HP', hp: 140, cc: 1368, packages: ['Classica','Lusso','Abarth'] },
    ]},
  },
  'ford': {
    'fiesta': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 EcoBoost 100 HP', hp: 100, cc: 999, packages: ['Trend','Titanium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost 125 HP', hp: 125, cc: 999, packages: ['Titanium','ST-Line'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '1.5 EcoBoost 200 HP', hp: 200, cc: 1498, packages: ['ST'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 TDCi 85 HP', hp: 85, cc: 1499, packages: ['Trend','Titanium'] },
    ]},
    'focus': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 EcoBoost 125 HP', hp: 125, cc: 999, packages: ['Trend','Titanium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost 155 HP', hp: 155, cc: 999, packages: ['Titanium','ST-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 182 HP', hp: 182, cc: 1498, packages: ['ST-Line X'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 EcoBlue 120 HP', hp: 120, cc: 1499, packages: ['Trend','Titanium'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '2.3 EcoBoost 280 HP', hp: 280, cc: 2261, packages: ['ST'] },
    ]},
    'puma': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 EcoBoost 125 HP', hp: 125, cc: 999, packages: ['Titanium','ST-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost 155 HP', hp: 155, cc: 999, packages: ['ST-Line','ST-Line X'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.0 EcoBoost MHEV 155 HP', hp: 155, cc: 999, packages: ['ST-Line X'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 200 HP', hp: 200, cc: 1498, packages: ['ST'] },
    ]},
    'kuga': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 150 HP', hp: 150, cc: 1498, packages: ['Titanium','ST-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 182 HP', hp: 182, cc: 1498, packages: ['ST-Line X','Vignale'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 EcoBlue 190 HP', hp: 190, cc: 1997, packages: ['ST-Line X','Vignale'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 FHEV 190 HP', hp: 190, cc: 2488, packages: ['Titanium','ST-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 225 HP', hp: 225, cc: 2488, packages: ['ST-Line X','Vignale'] },
    ]},
    'mustang': { years: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.3 EcoBoost 310 HP', hp: 310, cc: 2261, packages: ['Fastback','Premium'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 450 HP', hp: 450, cc: 5038, packages: ['GT','Dark Horse'] },
      { fuel: 'benzin', transmission: 'manuel', engine: '5.0 V8 450 HP', hp: 450, cc: 5038, packages: ['GT','Mach 1'] },
    ]},
    'mustang-mach-e': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 269 HP', hp: 269, cc: 0, packages: ['Standard Range','Extended Range'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 351 HP', hp: 351, cc: 0, packages: ['Extended Range AWD','GT'] },
    ]},
    'ranger': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 EcoBlue 170 HP', hp: 170, cc: 1996, packages: ['XLT','Limited'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 EcoBlue Bi-Turbo 210 HP', hp: 210, cc: 1996, packages: ['Wildtrak','Raptor'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 V6 250 HP', hp: 250, cc: 2993, packages: ['Raptor'] },
    ]},
    'explorer': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 V6 PHEV 457 HP', hp: 457, cc: 2956, packages: ['ST-Line','Platinum'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 340 HP', hp: 340, cc: 0, packages: ['Extended Range','Premium'] },
    ]},
    'mondeo': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 EcoBoost 160 HP', hp: 160, cc: 1498, packages: ['Titanium','Vignale'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 EcoBlue 190 HP', hp: 190, cc: 1997, packages: ['Titanium','ST-Line','Vignale'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 HEV 187 HP', hp: 187, cc: 1999, packages: ['Titanium','Vignale'] },
    ]},
    'ecosport': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 EcoBoost 125 HP', hp: 125, cc: 999, packages: ['Titanium','ST-Line'] },
      { fuel: 'dizel', transmission: 'manuel', engine: '1.5 TDCi 100 HP', hp: 100, cc: 1499, packages: ['Titanium'] },
    ]},
    'f-150': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'pickup', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 V6 EcoBoost 400 HP', hp: 400, cc: 3497, packages: ['Lariat','Platinum','Raptor'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 400 HP', hp: 400, cc: 5038, packages: ['XLT','Lariat'] },
    ]},
  },
  'gac': {
    'gs3': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 163 HP', hp: 163, cc: 1498, packages: ['Comfort','Luxury'] }]},
    'gs4': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 169 HP', hp: 169, cc: 1498, packages: ['Comfort','Luxury','Flagship'] }]},
    'gs5': { years: [2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 169 HP', hp: 169, cc: 1498, packages: ['Luxury','Flagship'] }]},
    'gs8': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 252 HP', hp: 252, cc: 1991, packages: ['Luxury','Flagship'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 TM HEV 240 HP', hp: 240, cc: 1991, packages: ['Flagship HEV'] },
    ]},
    'emkoo': { years: [2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 177 HP', hp: 177, cc: 1498, packages: ['Comfort','Luxury'] }]},
    'aion-s': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 184 HP', hp: 184, cc: 0, packages: ['Plus','Max'] }]},
    'aion-y': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Plus','Max'] }]},
  },
  'geely': {
    'coolray': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 177 HP', hp: 177, cc: 1477, packages: ['Comfort','Flagship'] },
    ]},
    'atlas': { years: [2018,2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 184 HP', hp: 184, cc: 1998, packages: ['Comfort','Luxury'] },
    ]},
    'emgrand': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 114 HP', hp: 114, cc: 1498, packages: ['Comfort','Flagship'] },
    ]},
    'monjaro': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 238 HP', hp: 238, cc: 1998, packages: ['Luxury','Flagship'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo PHEV 326 HP', hp: 326, cc: 1477, packages: ['Flagship PHEV'] },
    ]},
    'tugella': { years: [2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 238 HP', hp: 238, cc: 1998, packages: ['Luxury','Flagship'] },
    ]},
  },
  'genesis': {
    'g70': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 252 HP', hp: 252, cc: 1998, packages: ['Elite','Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.3 V6 Turbo 370 HP', hp: 370, cc: 3342, packages: ['Sport+'] },
    ]},
    'g80': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 Turbo 304 HP', hp: 304, cc: 2497, packages: ['Elite','Luxury','Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 Turbo 380 HP', hp: 380, cc: 3470, packages: ['Sport+'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 365 HP', hp: 365, cc: 0, packages: ['Electrified'] },
    ]},
    'g90': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 Turbo 409 HP', hp: 409, cc: 3470, packages: ['Prestige','VIP'] },
    ]},
    'gv60': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 314 HP', hp: 314, cc: 0, packages: ['Standard','Performance'] },
    ]},
    'gv70': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 Turbo 304 HP', hp: 304, cc: 2497, packages: ['Elite','Sport'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 210 HP', hp: 210, cc: 2199, packages: ['Elite','Luxury'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 435 HP', hp: 435, cc: 0, packages: ['Electrified'] },
    ]},
    'gv80': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 Turbo 304 HP', hp: 304, cc: 2497, packages: ['Luxury','Prestige'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.5 Turbo 380 HP', hp: 380, cc: 3470, packages: ['Sport+'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 210 HP', hp: 210, cc: 2199, packages: ['Luxury'] },
    ]},
  },
  'gwm': {
    'haval-jolion': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 150 HP', hp: 150, cc: 1498, packages: ['Comfort','Premium'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo HEV 190 HP', hp: 190, cc: 1498, packages: ['Premium HEV'] },
    ]},
    'haval-h6': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 211 HP', hp: 211, cc: 1998, packages: ['Luxury','Supreme'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Turbo PHEV 240 HP', hp: 240, cc: 1498, packages: ['Supreme PHEV'] },
    ]},
    'ora-03': { years: [2022,2023,2024,2025], bodyType: 'hatchback', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 171 HP', hp: 171, cc: 0, packages: ['Standard','Extended Range'] }]},
    'ora-07': { years: [2023,2024,2025], bodyType: 'sedan', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Standard','Performance'] }]},
    'tank-300': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 220 HP', hp: 220, cc: 1998, packages: ['Luxury','Supreme'] }]},
    'tank-500': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Turbo 354 HP', hp: 354, cc: 2999, packages: ['Supreme'] }]},
  },
  'honda': {
    'civic-sedan': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC Turbo 182 HP', hp: 182, cc: 1498, packages: ['Elegance','Executive'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 VTEC Turbo 126 HP', hp: 126, cc: 988, packages: ['Comfort','Elegance'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 184 HP', hp: 184, cc: 1993, packages: ['Advance','Sport'] },
    ]},
    'civic-hatchback': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC Turbo 182 HP', hp: 182, cc: 1498, packages: ['Elegance','Sport'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 184 HP', hp: 184, cc: 1993, packages: ['Advance','Sport'] },
    ]},
    'civic-type-r': { years: [2017,2018,2019,2020,2021,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '2.0 VTEC Turbo 330 HP', hp: 330, cc: 1996, packages: ['Type R'] },
    ]},
    'accord': { years: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC Turbo 192 HP', hp: 192, cc: 1498, packages: ['Elegance','Executive'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 204 HP', hp: 204, cc: 1993, packages: ['Advance'] },
    ]},
    'cr-v': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VTEC Turbo 190 HP', hp: 190, cc: 1498, packages: ['Elegance','Executive'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 184 HP', hp: 184, cc: 1993, packages: ['Advance','Lifestyle'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:PHEV 305 HP', hp: 305, cc: 1993, packages: ['Advance PHEV'] },
    ]},
    'hr-v': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e:HEV 131 HP', hp: 131, cc: 1498, packages: ['Elegance','Advance'] },
    ]},
    'zr-v': { years: [2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 e:HEV 184 HP', hp: 184, cc: 1993, packages: ['Elegance','Sport'] },
    ]},
    'jazz': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 e:HEV 109 HP', hp: 109, cc: 1498, packages: ['Comfort','Executive','Crosstar'] },
    ]},
  },
  'hyundai': {
    'i10': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 67 HP', hp: 67, cc: 998, packages: ['Pure','Style'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 67 HP', hp: 67, cc: 998, packages: ['Style','N Line'] },
    ]},
    'i20': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 T-GDi 100 HP', hp: 100, cc: 998, packages: ['Style','N Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Style','N Line'] },
    ]},
    'i20-n': { years: [2021,2022,2023,2024,2025], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.6 T-GDi 204 HP', hp: 204, cc: 1598, packages: ['N'] },
    ]},
    'tucson': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 150 HP', hp: 150, cc: 1598, packages: ['Style','Elite'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Style','Elite','Elite Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi HEV 230 HP', hp: 230, cc: 1598, packages: ['Elite','Elite Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi PHEV 265 HP', hp: 265, cc: 1598, packages: ['Elite Plus'] },
    ]},
    'santa-fe': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.5 Turbo 281 HP', hp: 281, cc: 2497, packages: ['Calligraphy'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 202 HP', hp: 202, cc: 2199, packages: ['Elite','Calligraphy'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi HEV 230 HP', hp: 230, cc: 1598, packages: ['Calligraphy HEV'] },
    ]},
    'ioniq-5': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 228 HP', hp: 228, cc: 0, packages: ['Standard','Long Range'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 325 HP', hp: 325, cc: 0, packages: ['Long Range AWD'] },
    ]},
    'ioniq-6': { years: [2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 228 HP', hp: 228, cc: 0, packages: ['Standard','Long Range'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 325 HP', hp: 325, cc: 0, packages: ['Long Range AWD'] },
    ]},
    'kona': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Style','N Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 GDi HEV 141 HP', hp: 141, cc: 1580, packages: ['Style','Elite'] },
    ]},
    'kona-electric': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 218 HP', hp: 218, cc: 0, packages: ['Standard','Long Range'] },
    ]},
    'bayon': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 100 HP', hp: 100, cc: 998, packages: ['Style','Elite'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi MHEV 100 HP', hp: 100, cc: 998, packages: ['Elite'] },
    ]},
    'elantra': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 MPI 123 HP', hp: 123, cc: 1591, packages: ['Style','Elite'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 201 HP', hp: 201, cc: 1598, packages: ['N Line'] },
    ]},
    'staria': { years: [2022,2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 177 HP', hp: 177, cc: 2199, packages: ['Style','Elite','Calligraphy'] },
    ]},
  },
  'infiniti': {
    'q30': { years: [2016,2017,2018,2019], bodyType: 'hatchback', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.6 Turbo 156 HP', hp: 156, cc: 1595, packages: ['Premium','Sport'] }]},
    'q50': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 211 HP', hp: 211, cc: 1991, packages: ['Premium','Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 V6 Turbo 400 HP', hp: 400, cc: 2997, packages: ['Red Sport 400'] },
    ]},
    'qx50': { years: [2019,2020,2021,2022,2023], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '2.0 VC-Turbo 268 HP', hp: 268, cc: 1997, packages: ['Luxe','Essential','Sensory'] }]},
    'qx60': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '3.5 V6 295 HP', hp: 295, cc: 3498, packages: ['Luxe','Sensory','Autograph'] }]},
    'qx80': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '5.6 V8 400 HP', hp: 400, cc: 5552, packages: ['Luxe','Sensory','Autograph'] }]},
  },
  'isuzu': {
    'd-max': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'pickup', variants: [
      { fuel: 'dizel', transmission: 'manuel', engine: '1.9 DDi 163 HP', hp: 163, cc: 1898, packages: ['L','LS','V-Cross'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.9 DDi 163 HP', hp: 163, cc: 1898, packages: ['LS','V-Cross','AT35'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 DDi 190 HP', hp: 190, cc: 2999, packages: ['V-Cross','AT35'] },
    ]},
    'mu-x': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.9 DDi 163 HP', hp: 163, cc: 1898, packages: ['LS','LS-T'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 DDi 190 HP', hp: 190, cc: 2999, packages: ['LS-T'] },
    ]},
  },
  'jac': {
    'js2': { years: [2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 VVT 113 HP', hp: 113, cc: 1498, packages: ['Comfort','Luxury'] }]},
    'js3': { years: [2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 150 HP', hp: 150, cc: 1498, packages: ['Comfort','Luxury'] }]},
    'js4': { years: [2021,2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 174 HP', hp: 174, cc: 1498, packages: ['Luxury','Premium'] }]},
    'js6': { years: [2022,2023,2024,2025], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'otomatik', engine: '1.5 Turbo 174 HP', hp: 174, cc: 1498, packages: ['Premium'] }]},
    'e-js1': { years: [2021,2022,2023,2024], bodyType: 'hatchback', variants: [{ fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 102 HP', hp: 102, cc: 0, packages: ['Comfort'] }]},
  },
  'jaguar': {
    'xe': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1997, packages: ['S','R-Dynamic SE','R-Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D180 180 HP', hp: 180, cc: 1999, packages: ['S','SE'] },
    ]},
    'xf': { years: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1997, packages: ['SE','R-Dynamic SE','R-Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D200 204 HP', hp: 204, cc: 1999, packages: ['SE','R-Dynamic SE'] },
    ]},
    'f-pace': { years: [2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1997, packages: ['R-Dynamic S','R-Dynamic SE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 SVR 550 HP', hp: 550, cc: 5000, packages: ['SVR'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D200 204 HP', hp: 204, cc: 1999, packages: ['S','SE'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 P400e PHEV 404 HP', hp: 404, cc: 1997, packages: ['R-Dynamic SE','R-Dynamic HSE'] },
    ]},
    'e-pace': { years: [2018,2019,2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1997, packages: ['S','SE','R-Dynamic SE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D165 163 HP', hp: 163, cc: 1999, packages: ['S','SE'] },
    ]},
    'i-pace': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 400 HP', hp: 400, cc: 0, packages: ['SE','HSE','R-Dynamic HSE'] },
    ]},
    'f-type-coupe': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1997, packages: ['R-Dynamic'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 450 HP', hp: 450, cc: 5000, packages: ['R','R-Dynamic'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 575 HP', hp: 575, cc: 5000, packages: ['SVR'] },
    ]},
  },
  'jeep': {
    'renegade': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 T4 150 HP', hp: 150, cc: 1332, packages: ['Longitude','Limited'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 T4 4xe 240 HP', hp: 240, cc: 1332, packages: ['Trailhawk','S'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Longitude','Limited'] },
    ]},
    'compass': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 T4 150 HP', hp: 150, cc: 1332, packages: ['Longitude','Limited'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.3 T4 4xe 240 HP', hp: 240, cc: 1332, packages: ['Limited','S','Trailhawk'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 MultiJet 130 HP', hp: 130, cc: 1598, packages: ['Longitude','Limited'] },
    ]},
    'grand-cherokee': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 272 HP', hp: 272, cc: 1995, packages: ['Limited','Overland','Summit'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.7 V8 HEMI 357 HP', hp: 357, cc: 5654, packages: ['Overland','Summit'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T 4xe 380 HP', hp: 380, cc: 1995, packages: ['Summit 4xe'] },
    ]},
    'wrangler': { years: [2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 272 HP', hp: 272, cc: 1995, packages: ['Sport','Sahara'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 285 HP', hp: 285, cc: 3604, packages: ['Sport','Sahara','Rubicon'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 T 4xe 380 HP', hp: 380, cc: 1995, packages: ['Sahara 4xe','Rubicon 4xe'] },
    ]},
    'avenger': { years: [2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.2 Turbo 100 HP', hp: 100, cc: 1199, packages: ['Longitude','Altitude'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 156 HP', hp: 156, cc: 0, packages: ['Longitude','Altitude','Summit'] },
    ]},
    'gladiator': { years: [2020,2021,2022,2023,2024], bodyType: 'pickup', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.6 V6 285 HP', hp: 285, cc: 3604, packages: ['Sport','Overland','Rubicon'] },
    ]},
  },
  'kia': {
    'picanto': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'manuel', engine: '1.0 67 HP', hp: 67, cc: 998, packages: ['Concept','Cool','GT-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 67 HP', hp: 67, cc: 998, packages: ['Cool','GT-Line'] },
    ]},
    'ceed': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'hatchback', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.0 T-GDi 120 HP', hp: 120, cc: 998, packages: ['Cool','Business','GT-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.5 T-GDi 160 HP', hp: 160, cc: 1482, packages: ['GT-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Business','GT-Line'] },
    ]},
    'sportage': { years: [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '1.6 T-GDi 150 HP', hp: 150, cc: 1598, packages: ['Cool','Business','GT-Line'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '1.6 CRDi 136 HP', hp: 136, cc: 1598, packages: ['Cool','Business','GT-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi HEV 230 HP', hp: 230, cc: 1598, packages: ['GT-Line','GT-Line Plus'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi PHEV 265 HP', hp: 265, cc: 1598, packages: ['GT-Line Plus'] },
    ]},
    'sorento': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 202 HP', hp: 202, cc: 2199, packages: ['Business','GT-Line'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 T-GDi HEV 230 HP', hp: 230, cc: 1598, packages: ['Business','GT-Line'] },
    ]},
    'ev6': { years: [2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV RWD 229 HP', hp: 229, cc: 0, packages: ['Standard','Long Range'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 325 HP', hp: 325, cc: 0, packages: ['Long Range AWD','GT'] },
    ]},
    'ev9': { years: [2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 384 HP', hp: 384, cc: 0, packages: ['Earth','GT-Line'] },
    ]},
    'stinger': { years: [2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 245 HP', hp: 245, cc: 1998, packages: ['GT-Line'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.3 V6 Turbo 370 HP', hp: 370, cc: 3342, packages: ['GT'] },
    ]},
    'niro': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 GDi HEV 141 HP', hp: 141, cc: 1580, packages: ['Cool','Business'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.6 GDi PHEV 183 HP', hp: 183, cc: 1580, packages: ['Business','GT-Line'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Cool','Business','GT-Line'] },
    ]},
    'carnival': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'minivan', variants: [
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.2 CRDi 202 HP', hp: 202, cc: 2199, packages: ['Business','Prestige'] },
    ]},
  },
  'lada': {
    'vesta': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.6 106 HP', hp: 106, cc: 1596, packages: ['Classic','Comfort','Luxe'] }]},
    'granta': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'sedan', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.6 87 HP', hp: 87, cc: 1596, packages: ['Standard','Classic','Comfort'] }]},
    'niva': { years: [1977,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'suv', variants: [{ fuel: 'benzin', transmission: 'manuel', engine: '1.7 83 HP', hp: 83, cc: 1690, packages: ['Classic','Comfort','Luxe'] }]},
  },
  'lamborghini': {
    'huracan': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V10 610 HP', hp: 610, cc: 5204, packages: ['EVO','Tecnica','STO'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.2 V10 640 HP', hp: 640, cc: 5204, packages: ['Performante','STO'] },
    ]},
    'urus': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.0 V8 Turbo 650 HP', hp: 650, cc: 3996, packages: ['S','Performante'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '4.0 V8 PHEV 800 HP', hp: 800, cc: 3996, packages: ['SE'] },
    ]},
    'revuelto': { years: [2024,2025], bodyType: 'coupe', variants: [{ fuel: 'hibrit', transmission: 'otomatik', engine: '6.5 V12 PHEV 1015 HP', hp: 1015, cc: 6498, packages: ['Revuelto'] }]},
    'aventador': { years: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '6.5 V12 770 HP', hp: 770, cc: 6498, packages: ['SVJ','Ultimae'] },
    ]},
  },
  'land-rover': {
    'defender-90': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1997, packages: ['S','SE','X'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 525 HP', hp: 525, cc: 5000, packages: ['V8'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['SE','HSE','X'] },
    ]},
    'defender-110': { years: [2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 300 HP', hp: 300, cc: 1997, packages: ['S','SE','HSE','X'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['SE','HSE','X'] },
    ]},
    'range-rover': { years: [2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 P400 400 HP', hp: 400, cc: 2996, packages: ['SE','HSE','Autobiography'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 V8 530 HP', hp: 530, cc: 4395, packages: ['Autobiography','SV'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D350 350 HP', hp: 350, cc: 2997, packages: ['SE','HSE','Autobiography'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.0 P460e PHEV 460 HP', hp: 460, cc: 2996, packages: ['Autobiography','SV'] },
    ]},
    'range-rover-sport': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 P400 400 HP', hp: 400, cc: 2996, packages: ['Dynamic SE','Dynamic HSE','Autobiography'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '4.4 V8 530 HP', hp: 530, cc: 4395, packages: ['First Edition','SV'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['SE','Dynamic SE','Dynamic HSE'] },
    ]},
    'range-rover-velar': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 250 HP', hp: 250, cc: 1997, packages: ['S','SE','R-Dynamic SE'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 P400 400 HP', hp: 400, cc: 2996, packages: ['R-Dynamic HSE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D200 204 HP', hp: 204, cc: 1999, packages: ['S','SE'] },
    ]},
    'range-rover-evoque': { years: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1997, packages: ['S','SE','R-Dynamic SE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D165 163 HP', hp: 163, cc: 1999, packages: ['S','SE'] },
    ]},
    'discovery': { years: [2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.0 P360 360 HP', hp: 360, cc: 2996, packages: ['SE','HSE','Metropolitan'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '3.0 D300 300 HP', hp: 300, cc: 2997, packages: ['SE','HSE'] },
    ]},
    'discovery-sport': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 200 HP', hp: 200, cc: 1997, packages: ['S','SE','R-Dynamic SE'] },
      { fuel: 'dizel', transmission: 'otomatik', engine: '2.0 D165 163 HP', hp: 163, cc: 1999, packages: ['S','SE'] },
    ]},
  },
  'lexus': {
    'is': { years: [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 245 HP', hp: 245, cc: 1998, packages: ['F Sport','F Sport Design'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 227 HP', hp: 227, cc: 2487, packages: ['Luxury','F Sport'] },
    ]},
    'es': { years: [2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'sedan', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 218 HP', hp: 218, cc: 2487, packages: ['Luxury','F Sport','Takumi'] },
    ]},
    'ls': { years: [2018,2019,2020,2021,2022,2023,2024], bodyType: 'sedan', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.5 V6 Hybrid 359 HP', hp: 359, cc: 3456, packages: ['Luxury','F Sport'] },
    ]},
    'ux': { years: [2019,2020,2021,2022,2023,2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.0 Hybrid 184 HP', hp: 184, cc: 1987, packages: ['Premium','F Sport'] },
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV 204 HP', hp: 204, cc: 0, packages: ['Premium'] },
    ]},
    'nx': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 244 HP', hp: 244, cc: 2487, packages: ['Luxury','F Sport','F Sport Design'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 309 HP', hp: 309, cc: 2487, packages: ['F Sport','Takumi'] },
    ]},
    'rx': { years: [2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 Hybrid 250 HP', hp: 250, cc: 2487, packages: ['Luxury','F Sport','Takumi'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '2.5 PHEV 306 HP', hp: 306, cc: 2487, packages: ['F Sport Performance'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.4 Turbo 275 HP', hp: 275, cc: 2393, packages: ['F Sport'] },
    ]},
    'lx': { years: [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '3.4 V6 Turbo 409 HP', hp: 409, cc: 3444, packages: ['Luxury','F Sport'] },
    ]},
    'rc': { years: [2014,2015,2016,2017,2018,2019,2020,2021,2022,2023], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '2.0 Turbo 245 HP', hp: 245, cc: 1998, packages: ['F Sport'] },
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 472 HP', hp: 472, cc: 4969, packages: ['RC F','RC F Track Edition'] },
    ]},
    'lc': { years: [2017,2018,2019,2020,2021,2022,2023,2024], bodyType: 'coupe', variants: [
      { fuel: 'benzin', transmission: 'otomatik', engine: '5.0 V8 464 HP', hp: 464, cc: 4969, packages: ['Luxury','Sport+'] },
      { fuel: 'hibrit', transmission: 'otomatik', engine: '3.5 V6 Hybrid 359 HP', hp: 359, cc: 3456, packages: ['Luxury'] },
    ]},
    'rz': { years: [2023,2024,2025], bodyType: 'suv', variants: [
      { fuel: 'elektrik', transmission: 'otomatik', engine: 'EV AWD 313 HP', hp: 313, cc: 0, packages: ['Premium','F Sport'] },
    ]},
    'lbx': { years: [2024,2025], bodyType: 'crossover', variants: [
      { fuel: 'hibrit', transmission: 'otomatik', engine: '1.5 Hybrid 136 HP', hp: 136, cc: 1490, packages: ['Elegant','Relax','Cool'] },
    ]},
  },
};
module.exports = VARIANTS_PART2;
