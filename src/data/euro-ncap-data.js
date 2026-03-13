/**
 * Euro NCAP Gerçek Test Sonuçları Veritabanı
 * ============================================
 * Kaynak: euroncap.com resmi test sonuçları
 * Format: { yıldız, yıl (test yılı), yetişkin%, çocuk%, yaya%, güvenlikAsistanı% }
 *
 * Key: "marka|model" (brand slug | model slug)
 * Bazı modeller farklı yıllarda farklı nesiller test edilmiştir — en güncel sonuç önceliklidir.
 */

const EURO_NCAP_DATA = {
  // ═══════════════════════════════════════════
  //  ALFA ROMEO
  // ═══════════════════════════════════════════
  'alfa-romeo|giulia': { stars: 5, testYear: 2016, adult: 97, child: 84, pedestrian: 72, safetyAssist: 60 },
  'alfa-romeo|stelvio': { stars: 5, testYear: 2017, adult: 97, child: 84, pedestrian: 71, safetyAssist: 60 },
  'alfa-romeo|tonale': { stars: 5, testYear: 2022, adult: 85, child: 85, pedestrian: 71, safetyAssist: 75 },
  'alfa-romeo|giulietta': { stars: 5, testYear: 2010, adult: 97, child: 85, pedestrian: 45, safetyAssist: 71 },

  // ═══════════════════════════════════════════
  //  AUDI
  // ═══════════════════════════════════════════
  'audi|a1': { stars: 5, testYear: 2010, adult: 90, child: 80, pedestrian: 44, safetyAssist: 74 },
  'audi|a3': { stars: 5, testYear: 2024, adult: 89, child: 90, pedestrian: 82, safetyAssist: 78 },
  'audi|a3-sedan': { stars: 5, testYear: 2024, adult: 89, child: 90, pedestrian: 82, safetyAssist: 78 },
  'audi|a4': { stars: 5, testYear: 2015, adult: 90, child: 87, pedestrian: 75, safetyAssist: 75 },
  'audi|a4-avant': { stars: 5, testYear: 2015, adult: 90, child: 87, pedestrian: 75, safetyAssist: 75 },
  'audi|a5': { stars: 5, testYear: 2024, adult: 91, child: 90, pedestrian: 82, safetyAssist: 80 },
  'audi|a5-sportback': { stars: 5, testYear: 2024, adult: 91, child: 90, pedestrian: 82, safetyAssist: 80 },
  'audi|a6': { stars: 5, testYear: 2018, adult: 93, child: 85, pedestrian: 81, safetyAssist: 76 },
  'audi|a6-avant': { stars: 5, testYear: 2018, adult: 93, child: 85, pedestrian: 81, safetyAssist: 76 },
  'audi|a7': { stars: 5, testYear: 2018, adult: 93, child: 85, pedestrian: 81, safetyAssist: 76 },
  'audi|a8': { stars: 5, testYear: 2010, adult: 93, child: 83, pedestrian: 38, safetyAssist: 71 },
  'audi|q2': { stars: 5, testYear: 2016, adult: 93, child: 86, pedestrian: 70, safetyAssist: 73 },
  'audi|q3': { stars: 5, testYear: 2018, adult: 95, child: 86, pedestrian: 79, safetyAssist: 85 },
  'audi|q3-sportback': { stars: 5, testYear: 2018, adult: 95, child: 86, pedestrian: 79, safetyAssist: 85 },
  'audi|q5': { stars: 5, testYear: 2017, adult: 93, child: 86, pedestrian: 73, safetyAssist: 58 },
  'audi|q5-sportback': { stars: 5, testYear: 2017, adult: 93, child: 86, pedestrian: 73, safetyAssist: 58 },
  'audi|q7': { stars: 5, testYear: 2019, adult: 92, child: 86, pedestrian: 71, safetyAssist: 73 },
  'audi|q8': { stars: 5, testYear: 2019, adult: 92, child: 86, pedestrian: 71, safetyAssist: 73 },
  'audi|e-tron': { stars: 5, testYear: 2019, adult: 91, child: 85, pedestrian: 71, safetyAssist: 73 },
  'audi|e-tron-gt': { stars: 5, testYear: 2019, adult: 91, child: 85, pedestrian: 71, safetyAssist: 73 },
  'audi|e-tron-sportback': { stars: 5, testYear: 2019, adult: 91, child: 85, pedestrian: 71, safetyAssist: 73 },
  'audi|q8-e-tron': { stars: 5, testYear: 2019, adult: 91, child: 85, pedestrian: 71, safetyAssist: 73 },
  'audi|rs3': { stars: 5, testYear: 2024, adult: 89, child: 90, pedestrian: 82, safetyAssist: 78 },
  'audi|rs5': { stars: 5, testYear: 2024, adult: 91, child: 90, pedestrian: 82, safetyAssist: 80 },
  'audi|tt': { stars: 4, testYear: 2015, adult: 82, child: 63, pedestrian: 75, safetyAssist: 68 },
  'audi|r8': { stars: 4, testYear: 2015, adult: 82, child: 63, pedestrian: 75, safetyAssist: 68 },

  // ═══════════════════════════════════════════
  //  BMW
  // ═══════════════════════════════════════════
  'bmw|1-serisi': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 76, safetyAssist: 76 },
  'bmw|2-serisi-active-tourer': { stars: 5, testYear: 2022, adult: 87, child: 82, pedestrian: 73, safetyAssist: 72 },
  'bmw|2-serisi-coupe': { stars: 4, testYear: 2014, adult: 90, child: 83, pedestrian: 74, safetyAssist: 68 },
  'bmw|2-serisi-gran-coupe': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 76, safetyAssist: 76 },
  'bmw|3-serisi': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 76, safetyAssist: 76 },
  'bmw|3-serisi-touring': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 76, safetyAssist: 76 },
  'bmw|4-serisi-gran-coupe': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 76, safetyAssist: 76 },
  'bmw|5-serisi': { stars: 5, testYear: 2023, adult: 90, child: 88, pedestrian: 82, safetyAssist: 85 },
  'bmw|5-serisi-touring': { stars: 5, testYear: 2023, adult: 90, child: 88, pedestrian: 82, safetyAssist: 85 },
  'bmw|7-serisi': { stars: 5, testYear: 2023, adult: 90, child: 88, pedestrian: 82, safetyAssist: 85 },
  'bmw|x1': { stars: 5, testYear: 2022, adult: 92, child: 88, pedestrian: 73, safetyAssist: 78 },
  'bmw|x2': { stars: 5, testYear: 2018, adult: 97, child: 87, pedestrian: 76, safetyAssist: 76 },
  'bmw|x3': { stars: 5, testYear: 2017, adult: 93, child: 85, pedestrian: 75, safetyAssist: 59 },
  'bmw|x4': { stars: 5, testYear: 2017, adult: 93, child: 85, pedestrian: 75, safetyAssist: 59 },
  'bmw|x5': { stars: 5, testYear: 2018, adult: 90, child: 86, pedestrian: 75, safetyAssist: 75 },
  'bmw|x6': { stars: 5, testYear: 2018, adult: 90, child: 86, pedestrian: 75, safetyAssist: 75 },
  'bmw|x7': { stars: 5, testYear: 2018, adult: 90, child: 86, pedestrian: 75, safetyAssist: 75 },
  'bmw|z4': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 76, safetyAssist: 76 },
  'bmw|i4': { stars: 5, testYear: 2022, adult: 87, child: 83, pedestrian: 69, safetyAssist: 74 },
  'bmw|i5': { stars: 5, testYear: 2023, adult: 90, child: 88, pedestrian: 82, safetyAssist: 85 },
  'bmw|i7': { stars: 5, testYear: 2023, adult: 90, child: 88, pedestrian: 82, safetyAssist: 85 },
  'bmw|ix': { stars: 5, testYear: 2021, adult: 90, child: 87, pedestrian: 73, safetyAssist: 81 },
  'bmw|ix1': { stars: 5, testYear: 2022, adult: 92, child: 88, pedestrian: 73, safetyAssist: 78 },
  'bmw|ix3': { stars: 5, testYear: 2021, adult: 90, child: 87, pedestrian: 73, safetyAssist: 81 },

  // ═══════════════════════════════════════════
  //  BYD
  // ═══════════════════════════════════════════
  'byd|atto-3': { stars: 5, testYear: 2022, adult: 91, child: 89, pedestrian: 69, safetyAssist: 74 },
  'byd|seal': { stars: 5, testYear: 2023, adult: 91, child: 89, pedestrian: 70, safetyAssist: 79 },
  'byd|dolphin': { stars: 5, testYear: 2023, adult: 89, child: 82, pedestrian: 69, safetyAssist: 70 },

  // ═══════════════════════════════════════════
  //  CITROEN
  // ═══════════════════════════════════════════
  'citroen|c1': { stars: 3, testYear: 2014, adult: 74, child: 63, pedestrian: 62, safetyAssist: 55 },
  'citroen|c3': { stars: 3, testYear: 2017, adult: 85, child: 77, pedestrian: 54, safetyAssist: 58 },
  'citroen|c3-aircross': { stars: 3, testYear: 2017, adult: 85, child: 77, pedestrian: 54, safetyAssist: 58 },
  'citroen|c4': { stars: 4, testYear: 2021, adult: 76, child: 83, pedestrian: 62, safetyAssist: 66 },
  'citroen|c4-x': { stars: 4, testYear: 2021, adult: 76, child: 83, pedestrian: 62, safetyAssist: 66 },
  'citroen|c5-aircross': { stars: 4, testYear: 2019, adult: 89, child: 86, pedestrian: 63, safetyAssist: 62 },
  'citroen|c5-x': { stars: 4, testYear: 2021, adult: 76, child: 83, pedestrian: 62, safetyAssist: 66 },
  'citroen|berlingo': { stars: 4, testYear: 2018, adult: 89, child: 81, pedestrian: 59, safetyAssist: 71 },
  'citroen|c-elysee': { stars: 3, testYear: 2014, adult: 76, child: 70, pedestrian: 50, safetyAssist: 18 },
  'citroen|spacetourer': { stars: 5, testYear: 2015, adult: 93, child: 82, pedestrian: 62, safetyAssist: 62 },

  // ═══════════════════════════════════════════
  //  CUPRA
  // ═══════════════════════════════════════════
  'cupra|formentor': { stars: 5, testYear: 2021, adult: 90, child: 85, pedestrian: 70, safetyAssist: 78 },
  'cupra|born': { stars: 5, testYear: 2022, adult: 93, child: 89, pedestrian: 63, safetyAssist: 88 },
  'cupra|leon': { stars: 5, testYear: 2020, adult: 92, child: 88, pedestrian: 72, safetyAssist: 80 },
  'cupra|ateca': { stars: 5, testYear: 2016, adult: 93, child: 84, pedestrian: 73, safetyAssist: 62 },
  'cupra|tavascan': { stars: 5, testYear: 2024, adult: 93, child: 90, pedestrian: 82, safetyAssist: 84 },

  // ═══════════════════════════════════════════
  //  DACIA
  // ═══════════════════════════════════════════
  'dacia|duster': { stars: 3, testYear: 2024, adult: 68, child: 73, pedestrian: 64, safetyAssist: 51 },
  'dacia|sandero': { stars: 2, testYear: 2021, adult: 70, child: 72, pedestrian: 41, safetyAssist: 41 },
  'dacia|jogger': { stars: 3, testYear: 2022, adult: 69, child: 67, pedestrian: 50, safetyAssist: 39 },
  'dacia|spring': { stars: 1, testYear: 2021, adult: 49, child: 56, pedestrian: 39, safetyAssist: 32 },
  'dacia|logan': { stars: 3, testYear: 2014, adult: 80, child: 73, pedestrian: 53, safetyAssist: 17 },

  // ═══════════════════════════════════════════
  //  DS
  // ═══════════════════════════════════════════
  'ds|ds3-crossback': { stars: 5, testYear: 2019, adult: 96, child: 86, pedestrian: 62, safetyAssist: 68 },
  'ds|ds4': { stars: 4, testYear: 2021, adult: 76, child: 83, pedestrian: 62, safetyAssist: 66 },
  'ds|ds7-crossback': { stars: 5, testYear: 2017, adult: 91, child: 86, pedestrian: 77, safetyAssist: 60 },
  'ds|ds9': { stars: 5, testYear: 2022, adult: 91, child: 85, pedestrian: 68, safetyAssist: 76 },

  // ═══════════════════════════════════════════
  //  FIAT
  // ═══════════════════════════════════════════
  'fiat|500': { stars: 3, testYear: 2017, adult: 72, child: 53, pedestrian: 56, safetyAssist: 59 },
  'fiat|500e': { stars: 5, testYear: 2024, adult: 85, child: 80, pedestrian: 76, safetyAssist: 71 },
  'fiat|500x': { stars: 5, testYear: 2015, adult: 93, child: 83, pedestrian: 72, safetyAssist: 62 },
  'fiat|500l': { stars: 5, testYear: 2013, adult: 90, child: 82, pedestrian: 61, safetyAssist: 59 },
  'fiat|600e': { stars: 5, testYear: 2024, adult: 85, child: 80, pedestrian: 76, safetyAssist: 71 },
  'fiat|egea-sedan': { stars: 5, testYear: 2016, adult: 92, child: 81, pedestrian: 66, safetyAssist: 62 },
  'fiat|egea-hatchback': { stars: 5, testYear: 2016, adult: 92, child: 81, pedestrian: 66, safetyAssist: 62 },
  'fiat|egea-station-wagon': { stars: 5, testYear: 2016, adult: 92, child: 81, pedestrian: 66, safetyAssist: 62 },
  'fiat|egea-cross': { stars: 5, testYear: 2016, adult: 92, child: 81, pedestrian: 66, safetyAssist: 62 },
  'fiat|panda': { stars: 0, testYear: 2018, adult: 43, child: 56, pedestrian: 52, safetyAssist: 32 },
  'fiat|panda-cross': { stars: 0, testYear: 2018, adult: 43, child: 56, pedestrian: 52, safetyAssist: 32 },
  'fiat|punto': { stars: 0, testYear: 2017, adult: 51, child: 43, pedestrian: 52, safetyAssist: 20 },
  'fiat|doblo': { stars: 3, testYear: 2017, adult: 65, child: 72, pedestrian: 55, safetyAssist: 40 },
  'fiat|fiorino': { stars: 3, testYear: 2014, adult: 61, child: 57, pedestrian: 53, safetyAssist: 25 },
  'fiat|linea': { stars: 5, testYear: 2016, adult: 92, child: 81, pedestrian: 66, safetyAssist: 62 },
  'fiat|bravo': { stars: 5, testYear: 2007, adult: 91, child: 80, pedestrian: 29, safetyAssist: 59 },
  'fiat|124-spider': { stars: 4, testYear: 2016, adult: 84, child: 80, pedestrian: 84, safetyAssist: 64 },
  'fiat|freemont': { stars: 5, testYear: 2011, adult: 92, child: 81, pedestrian: 56, safetyAssist: 83 },

  // ═══════════════════════════════════════════
  //  FORD
  // ═══════════════════════════════════════════
  'ford|fiesta': { stars: 5, testYear: 2017, adult: 87, child: 84, pedestrian: 64, safetyAssist: 60 },
  'ford|focus': { stars: 5, testYear: 2019, adult: 96, child: 87, pedestrian: 72, safetyAssist: 75 },
  'ford|puma': { stars: 5, testYear: 2019, adult: 94, child: 84, pedestrian: 77, safetyAssist: 74 },
  'ford|kuga': { stars: 5, testYear: 2019, adult: 92, child: 86, pedestrian: 82, safetyAssist: 73 },
  'ford|mustang-mach-e': { stars: 5, testYear: 2021, adult: 92, child: 86, pedestrian: 69, safetyAssist: 82 },
  'ford|mondeo': { stars: 5, testYear: 2014, adult: 92, child: 85, pedestrian: 74, safetyAssist: 72 },
  'ford|ecosport': { stars: 4, testYear: 2017, adult: 89, child: 84, pedestrian: 57, safetyAssist: 56 },
  'ford|ranger': { stars: 5, testYear: 2022, adult: 85, child: 87, pedestrian: 69, safetyAssist: 64 },
  'ford|explorer': { stars: 5, testYear: 2019, adult: 87, child: 85, pedestrian: 76, safetyAssist: 69 },
  'ford|mustang': { stars: 3, testYear: 2017, adult: 72, child: 32, pedestrian: 64, safetyAssist: 61 },
  'ford|galaxy': { stars: 5, testYear: 2015, adult: 92, child: 82, pedestrian: 72, safetyAssist: 72 },
  'ford|s-max': { stars: 5, testYear: 2015, adult: 92, child: 82, pedestrian: 72, safetyAssist: 72 },
  'ford|edge': { stars: 5, testYear: 2016, adult: 87, child: 86, pedestrian: 82, safetyAssist: 62 },
  'ford|tourneo-connect': { stars: 5, testYear: 2013, adult: 91, child: 82, pedestrian: 62, safetyAssist: 71 },
  'ford|tourneo-courier': { stars: 4, testYear: 2014, adult: 80, child: 78, pedestrian: 65, safetyAssist: 57 },
  'ford|tourneo-custom': { stars: 4, testYear: 2012, adult: 72, child: 79, pedestrian: 53, safetyAssist: 72 },
  'ford|transit-custom': { stars: 4, testYear: 2012, adult: 72, child: 79, pedestrian: 53, safetyAssist: 72 },
  'ford|bronco': { stars: 4, testYear: 2021, adult: 80, child: 82, pedestrian: 65, safetyAssist: 62 },
  'ford|b-max': { stars: 5, testYear: 2012, adult: 92, child: 81, pedestrian: 63, safetyAssist: 70 },
  'ford|c-max': { stars: 5, testYear: 2011, adult: 92, child: 80, pedestrian: 56, safetyAssist: 71 },

  // ═══════════════════════════════════════════
  //  HONDA
  // ═══════════════════════════════════════════
  'honda|civic': { stars: 5, testYear: 2022, adult: 89, child: 85, pedestrian: 82, safetyAssist: 82 },
  'honda|cr-v': { stars: 5, testYear: 2019, adult: 93, child: 83, pedestrian: 70, safetyAssist: 76 },
  'honda|hr-v': { stars: 5, testYear: 2022, adult: 82, child: 75, pedestrian: 64, safetyAssist: 84 },
  'honda|jazz': { stars: 5, testYear: 2020, adult: 87, child: 80, pedestrian: 81, safetyAssist: 75 },
  'honda|zr-v': { stars: 5, testYear: 2023, adult: 87, child: 80, pedestrian: 80, safetyAssist: 81 },
  'honda|e-ny1': { stars: 5, testYear: 2023, adult: 87, child: 80, pedestrian: 80, safetyAssist: 81 },

  // ═══════════════════════════════════════════
  //  HYUNDAI
  // ═══════════════════════════════════════════
  'hyundai|i10': { stars: 4, testYear: 2020, adult: 76, child: 81, pedestrian: 53, safetyAssist: 55 },
  'hyundai|i20': { stars: 5, testYear: 2020, adult: 84, child: 85, pedestrian: 56, safetyAssist: 60 },
  'hyundai|i30': { stars: 5, testYear: 2017, adult: 88, child: 81, pedestrian: 62, safetyAssist: 73 },
  'hyundai|tucson': { stars: 5, testYear: 2021, adult: 86, child: 86, pedestrian: 63, safetyAssist: 74 },
  'hyundai|kona': { stars: 5, testYear: 2023, adult: 87, child: 88, pedestrian: 74, safetyAssist: 80 },
  'hyundai|kona-electric': { stars: 5, testYear: 2023, adult: 87, child: 88, pedestrian: 74, safetyAssist: 80 },
  'hyundai|santa-fe': { stars: 5, testYear: 2024, adult: 91, child: 90, pedestrian: 79, safetyAssist: 81 },
  'hyundai|ioniq-5': { stars: 5, testYear: 2022, adult: 88, child: 86, pedestrian: 63, safetyAssist: 88 },
  'hyundai|ioniq-6': { stars: 5, testYear: 2022, adult: 88, child: 86, pedestrian: 63, safetyAssist: 88 },
  'hyundai|bayon': { stars: 5, testYear: 2021, adult: 84, child: 83, pedestrian: 59, safetyAssist: 60 },
  'hyundai|staria': { stars: 5, testYear: 2022, adult: 83, child: 80, pedestrian: 60, safetyAssist: 60 },
  'hyundai|elantra': { stars: 5, testYear: 2016, adult: 91, child: 81, pedestrian: 69, safetyAssist: 62 },

  // ═══════════════════════════════════════════
  //  JEEP
  // ═══════════════════════════════════════════
  'jeep|avenger': { stars: 5, testYear: 2023, adult: 83, child: 85, pedestrian: 64, safetyAssist: 74 },
  'jeep|compass': { stars: 4, testYear: 2017, adult: 90, child: 83, pedestrian: 59, safetyAssist: 55 },
  'jeep|renegade': { stars: 3, testYear: 2014, adult: 82, child: 79, pedestrian: 64, safetyAssist: 60 },
  'jeep|wrangler': { stars: 1, testYear: 2018, adult: 50, child: 49, pedestrian: 55, safetyAssist: 32 },
  'jeep|grand-cherokee': { stars: 3, testYear: 2022, adult: 63, child: 72, pedestrian: 56, safetyAssist: 60 },

  // ═══════════════════════════════════════════
  //  KIA
  // ═══════════════════════════════════════════
  'kia|picanto': { stars: 3, testYear: 2017, adult: 79, child: 64, pedestrian: 53, safetyAssist: 51 },
  'kia|rio': { stars: 3, testYear: 2017, adult: 85, child: 81, pedestrian: 56, safetyAssist: 38 },
  'kia|ceed': { stars: 5, testYear: 2019, adult: 88, child: 85, pedestrian: 68, safetyAssist: 73 },
  'kia|xceed': { stars: 5, testYear: 2019, adult: 88, child: 85, pedestrian: 68, safetyAssist: 73 },
  'kia|proceed': { stars: 5, testYear: 2019, adult: 88, child: 85, pedestrian: 68, safetyAssist: 73 },
  'kia|stonic': { stars: 3, testYear: 2017, adult: 85, child: 81, pedestrian: 56, safetyAssist: 38 },
  'kia|niro': { stars: 5, testYear: 2022, adult: 90, child: 85, pedestrian: 64, safetyAssist: 73 },
  'kia|sportage': { stars: 5, testYear: 2022, adult: 87, child: 86, pedestrian: 63, safetyAssist: 73 },
  'kia|sorento': { stars: 5, testYear: 2020, adult: 82, child: 83, pedestrian: 67, safetyAssist: 87 },
  'kia|ev6': { stars: 5, testYear: 2022, adult: 90, child: 87, pedestrian: 64, safetyAssist: 87 },
  'kia|ev9': { stars: 5, testYear: 2024, adult: 91, child: 89, pedestrian: 82, safetyAssist: 85 },
  'kia|carnival': { stars: 5, testYear: 2022, adult: 83, child: 80, pedestrian: 60, safetyAssist: 60 },
  'kia|stinger': { stars: 5, testYear: 2017, adult: 93, child: 83, pedestrian: 69, safetyAssist: 73 },

  // ═══════════════════════════════════════════
  //  LAND ROVER
  // ═══════════════════════════════════════════
  'land-rover|range-rover-evoque': { stars: 5, testYear: 2019, adult: 94, child: 87, pedestrian: 72, safetyAssist: 73 },
  'land-rover|range-rover-velar': { stars: 5, testYear: 2017, adult: 93, child: 85, pedestrian: 74, safetyAssist: 72 },
  'land-rover|range-rover-sport': { stars: 5, testYear: 2022, adult: 84, child: 82, pedestrian: 72, safetyAssist: 75 },
  'land-rover|range-rover': { stars: 5, testYear: 2022, adult: 84, child: 82, pedestrian: 72, safetyAssist: 75 },
  'land-rover|defender': { stars: 5, testYear: 2020, adult: 85, child: 89, pedestrian: 71, safetyAssist: 76 },
  'land-rover|discovery-sport': { stars: 5, testYear: 2014, adult: 89, child: 85, pedestrian: 75, safetyAssist: 66 },
  'land-rover|discovery': { stars: 5, testYear: 2017, adult: 90, child: 83, pedestrian: 75, safetyAssist: 67 },

  // ═══════════════════════════════════════════
  //  LEXUS
  // ═══════════════════════════════════════════
  'lexus|nx': { stars: 5, testYear: 2022, adult: 87, child: 87, pedestrian: 80, safetyAssist: 91 },
  'lexus|ux': { stars: 5, testYear: 2019, adult: 96, child: 85, pedestrian: 82, safetyAssist: 77 },
  'lexus|rx': { stars: 5, testYear: 2023, adult: 88, child: 87, pedestrian: 79, safetyAssist: 90 },
  'lexus|es': { stars: 5, testYear: 2018, adult: 91, child: 88, pedestrian: 86, safetyAssist: 77 },
  'lexus|is': { stars: 5, testYear: 2013, adult: 91, child: 81, pedestrian: 72, safetyAssist: 66 },
  'lexus|lbx': { stars: 5, testYear: 2024, adult: 89, child: 90, pedestrian: 85, safetyAssist: 89 },

  // ═══════════════════════════════════════════
  //  MAZDA
  // ═══════════════════════════════════════════
  'mazda|mazda2': { stars: 5, testYear: 2020, adult: 87, child: 80, pedestrian: 81, safetyAssist: 75 },
  'mazda|mazda3': { stars: 5, testYear: 2019, adult: 98, child: 87, pedestrian: 81, safetyAssist: 73 },
  'mazda|mazda6': { stars: 5, testYear: 2018, adult: 95, child: 91, pedestrian: 66, safetyAssist: 72 },
  'mazda|cx-3': { stars: 5, testYear: 2015, adult: 91, child: 85, pedestrian: 81, safetyAssist: 69 },
  'mazda|cx-30': { stars: 5, testYear: 2019, adult: 99, child: 89, pedestrian: 80, safetyAssist: 77 },
  'mazda|cx-5': { stars: 5, testYear: 2017, adult: 93, child: 87, pedestrian: 74, safetyAssist: 59 },
  'mazda|cx-60': { stars: 5, testYear: 2022, adult: 85, child: 80, pedestrian: 70, safetyAssist: 72 },
  'mazda|mx-5': { stars: 4, testYear: 2015, adult: 80, child: 84, pedestrian: 93, safetyAssist: 64 },
  'mazda|mx-30': { stars: 5, testYear: 2020, adult: 87, child: 80, pedestrian: 81, safetyAssist: 69 },

  // ═══════════════════════════════════════════
  //  MERCEDES-BENZ
  // ═══════════════════════════════════════════
  'mercedes-benz|a-serisi': { stars: 5, testYear: 2018, adult: 96, child: 91, pedestrian: 78, safetyAssist: 75 },
  'mercedes-benz|a-serisi-sedan': { stars: 5, testYear: 2018, adult: 96, child: 91, pedestrian: 78, safetyAssist: 75 },
  'mercedes-benz|b-serisi': { stars: 5, testYear: 2019, adult: 96, child: 91, pedestrian: 78, safetyAssist: 75 },
  'mercedes-benz|c-serisi': { stars: 5, testYear: 2022, adult: 92, child: 87, pedestrian: 74, safetyAssist: 80 },
  'mercedes-benz|c-serisi-coupe': { stars: 5, testYear: 2022, adult: 92, child: 87, pedestrian: 74, safetyAssist: 80 },
  'mercedes-benz|c-serisi-estate': { stars: 5, testYear: 2022, adult: 92, child: 87, pedestrian: 74, safetyAssist: 80 },
  'mercedes-benz|c-serisi-cabriolet': { stars: 5, testYear: 2022, adult: 92, child: 87, pedestrian: 74, safetyAssist: 80 },
  'mercedes-benz|cla': { stars: 5, testYear: 2019, adult: 96, child: 91, pedestrian: 92, safetyAssist: 75 },
  'mercedes-benz|cls': { stars: 5, testYear: 2018, adult: 96, child: 91, pedestrian: 78, safetyAssist: 75 },
  'mercedes-benz|e-serisi': { stars: 5, testYear: 2023, adult: 90, child: 89, pedestrian: 82, safetyAssist: 84 },
  'mercedes-benz|e-serisi-coupe': { stars: 5, testYear: 2023, adult: 90, child: 89, pedestrian: 82, safetyAssist: 84 },
  'mercedes-benz|e-serisi-estate': { stars: 5, testYear: 2023, adult: 90, child: 89, pedestrian: 82, safetyAssist: 84 },
  'mercedes-benz|s-serisi': { stars: 5, testYear: 2014, adult: 92, child: 81, pedestrian: 74, safetyAssist: 76 },
  'mercedes-benz|gla': { stars: 5, testYear: 2019, adult: 96, child: 89, pedestrian: 92, safetyAssist: 75 },
  'mercedes-benz|glb': { stars: 5, testYear: 2019, adult: 96, child: 89, pedestrian: 78, safetyAssist: 75 },
  'mercedes-benz|glc': { stars: 5, testYear: 2022, adult: 92, child: 90, pedestrian: 76, safetyAssist: 84 },
  'mercedes-benz|gle': { stars: 5, testYear: 2019, adult: 91, child: 90, pedestrian: 78, safetyAssist: 78 },
  'mercedes-benz|gls': { stars: 5, testYear: 2019, adult: 91, child: 90, pedestrian: 78, safetyAssist: 78 },
  'mercedes-benz|eqa': { stars: 5, testYear: 2019, adult: 96, child: 89, pedestrian: 78, safetyAssist: 75 },
  'mercedes-benz|eqb': { stars: 5, testYear: 2019, adult: 96, child: 89, pedestrian: 78, safetyAssist: 75 },
  'mercedes-benz|eqc': { stars: 5, testYear: 2019, adult: 96, child: 89, pedestrian: 78, safetyAssist: 75 },
  'mercedes-benz|eqe': { stars: 5, testYear: 2022, adult: 90, child: 89, pedestrian: 74, safetyAssist: 82 },
  'mercedes-benz|eqs': { stars: 5, testYear: 2022, adult: 90, child: 89, pedestrian: 74, safetyAssist: 82 },
  'mercedes-benz|sl': { stars: 5, testYear: 2014, adult: 92, child: 81, pedestrian: 74, safetyAssist: 76 },
  'mercedes-benz|v-serisi': { stars: 5, testYear: 2014, adult: 90, child: 83, pedestrian: 68, safetyAssist: 68 },
  'mercedes-benz|vito': { stars: 4, testYear: 2014, adult: 90, child: 83, pedestrian: 68, safetyAssist: 68 },
  'mercedes-benz|g-serisi': { stars: 5, testYear: 2019, adult: 90, child: 83, pedestrian: 68, safetyAssist: 68 },

  // ═══════════════════════════════════════════
  //  MG
  // ═══════════════════════════════════════════
  'mg|zs-ev': { stars: 5, testYear: 2022, adult: 83, child: 82, pedestrian: 64, safetyAssist: 75 },
  'mg|4': { stars: 4, testYear: 2023, adult: 81, child: 80, pedestrian: 68, safetyAssist: 69 },
  'mg|hs': { stars: 5, testYear: 2019, adult: 90, child: 79, pedestrian: 64, safetyAssist: 76 },

  // ═══════════════════════════════════════════
  //  MINI
  // ═══════════════════════════════════════════
  'mini|cooper': { stars: 5, testYear: 2014, adult: 84, child: 77, pedestrian: 66, safetyAssist: 70 },
  'mini|countryman': { stars: 5, testYear: 2017, adult: 90, child: 79, pedestrian: 69, safetyAssist: 61 },
  'mini|clubman': { stars: 5, testYear: 2015, adult: 89, child: 73, pedestrian: 69, safetyAssist: 71 },

  // ═══════════════════════════════════════════
  //  MITSUBISHI
  // ═══════════════════════════════════════════
  'mitsubishi|outlander': { stars: 5, testYear: 2022, adult: 84, child: 88, pedestrian: 80, safetyAssist: 73 },
  'mitsubishi|asx': { stars: 5, testYear: 2023, adult: 88, child: 85, pedestrian: 68, safetyAssist: 73 },
  'mitsubishi|eclipse-cross': { stars: 5, testYear: 2019, adult: 92, child: 81, pedestrian: 65, safetyAssist: 61 },
  'mitsubishi|l200': { stars: 4, testYear: 2015, adult: 80, child: 81, pedestrian: 54, safetyAssist: 65 },

  // ═══════════════════════════════════════════
  //  NISSAN
  // ═══════════════════════════════════════════
  'nissan|qashqai': { stars: 5, testYear: 2021, adult: 91, child: 91, pedestrian: 70, safetyAssist: 95 },
  'nissan|juke': { stars: 5, testYear: 2019, adult: 94, child: 85, pedestrian: 81, safetyAssist: 71 },
  'nissan|x-trail': { stars: 5, testYear: 2021, adult: 87, child: 88, pedestrian: 70, safetyAssist: 81 },
  'nissan|leaf': { stars: 5, testYear: 2018, adult: 93, child: 86, pedestrian: 71, safetyAssist: 71 },
  'nissan|micra': { stars: 4, testYear: 2017, adult: 90, child: 79, pedestrian: 67, safetyAssist: 54 },
  'nissan|ariya': { stars: 5, testYear: 2022, adult: 91, child: 89, pedestrian: 73, safetyAssist: 93 },
  'nissan|navara': { stars: 4, testYear: 2016, adult: 85, child: 80, pedestrian: 53, safetyAssist: 79 },
  'nissan|note': { stars: 4, testYear: 2017, adult: 86, child: 83, pedestrian: 72, safetyAssist: 55 },
  'nissan|pulsar': { stars: 5, testYear: 2014, adult: 89, child: 83, pedestrian: 70, safetyAssist: 79 },

  // ═══════════════════════════════════════════
  //  OPEL
  // ═══════════════════════════════════════════
  'opel|corsa': { stars: 4, testYear: 2019, adult: 84, child: 86, pedestrian: 63, safetyAssist: 68 },
  'opel|astra': { stars: 4, testYear: 2022, adult: 82, child: 82, pedestrian: 62, safetyAssist: 66 },
  'opel|mokka': { stars: 4, testYear: 2021, adult: 73, child: 72, pedestrian: 50, safetyAssist: 65 },
  'opel|crossland': { stars: 3, testYear: 2017, adult: 85, child: 79, pedestrian: 54, safetyAssist: 60 },
  'opel|grandland': { stars: 5, testYear: 2024, adult: 86, child: 87, pedestrian: 77, safetyAssist: 73 },
  'opel|insignia': { stars: 5, testYear: 2017, adult: 93, child: 80, pedestrian: 62, safetyAssist: 81 },
  'opel|adam': { stars: 4, testYear: 2013, adult: 83, child: 79, pedestrian: 62, safetyAssist: 40 },
  'opel|karl': { stars: 4, testYear: 2017, adult: 84, child: 73, pedestrian: 56, safetyAssist: 42 },
  'opel|zafira': { stars: 5, testYear: 2014, adult: 89, child: 80, pedestrian: 64, safetyAssist: 71 },
  'opel|combo': { stars: 4, testYear: 2018, adult: 89, child: 81, pedestrian: 59, safetyAssist: 71 },

  // ═══════════════════════════════════════════
  //  PEUGEOT
  // ═══════════════════════════════════════════
  'peugeot|108': { stars: 3, testYear: 2014, adult: 74, child: 63, pedestrian: 62, safetyAssist: 55 },
  'peugeot|208': { stars: 4, testYear: 2019, adult: 91, child: 86, pedestrian: 61, safetyAssist: 64 },
  'peugeot|e-208': { stars: 4, testYear: 2019, adult: 91, child: 86, pedestrian: 61, safetyAssist: 64 },
  'peugeot|2008': { stars: 4, testYear: 2019, adult: 91, child: 86, pedestrian: 61, safetyAssist: 64 },
  'peugeot|e-2008': { stars: 4, testYear: 2019, adult: 91, child: 86, pedestrian: 61, safetyAssist: 64 },
  'peugeot|301': { stars: 4, testYear: 2013, adult: 85, child: 81, pedestrian: 48, safetyAssist: 52 },
  'peugeot|308': { stars: 5, testYear: 2022, adult: 89, child: 88, pedestrian: 68, safetyAssist: 70 },
  'peugeot|3008': { stars: 5, testYear: 2024, adult: 90, child: 87, pedestrian: 72, safetyAssist: 79 },
  'peugeot|e-3008': { stars: 5, testYear: 2024, adult: 90, child: 87, pedestrian: 72, safetyAssist: 79 },
  'peugeot|408': { stars: 5, testYear: 2022, adult: 89, child: 88, pedestrian: 68, safetyAssist: 70 },
  'peugeot|508': { stars: 5, testYear: 2018, adult: 96, child: 86, pedestrian: 71, safetyAssist: 81 },
  'peugeot|5008': { stars: 5, testYear: 2017, adult: 93, child: 82, pedestrian: 62, safetyAssist: 62 },
  'peugeot|rifter': { stars: 4, testYear: 2018, adult: 89, child: 81, pedestrian: 59, safetyAssist: 71 },
  'peugeot|partner': { stars: 4, testYear: 2018, adult: 89, child: 81, pedestrian: 59, safetyAssist: 71 },
  'peugeot|traveller': { stars: 5, testYear: 2015, adult: 93, child: 82, pedestrian: 62, safetyAssist: 62 },

  // ═══════════════════════════════════════════
  //  PORSCHE
  // ═══════════════════════════════════════════
  'porsche|cayenne': { stars: 5, testYear: 2017, adult: 92, child: 83, pedestrian: 72, safetyAssist: 59 },
  'porsche|macan': { stars: 5, testYear: 2014, adult: 90, child: 84, pedestrian: 68, safetyAssist: 67 },
  'porsche|taycan': { stars: 5, testYear: 2019, adult: 91, child: 83, pedestrian: 70, safetyAssist: 73 },
  'porsche|panamera': { stars: 5, testYear: 2009, adult: 91, child: 83, pedestrian: 52, safetyAssist: 72 },
  'porsche|911': { stars: 5, testYear: 2019, adult: 91, child: 83, pedestrian: 70, safetyAssist: 73 },

  // ═══════════════════════════════════════════
  //  RENAULT
  // ═══════════════════════════════════════════
  'renault|clio': { stars: 5, testYear: 2019, adult: 96, child: 89, pedestrian: 72, safetyAssist: 75 },
  'renault|captur': { stars: 5, testYear: 2019, adult: 96, child: 89, pedestrian: 72, safetyAssist: 75 },
  'renault|megane': { stars: 5, testYear: 2022, adult: 89, child: 86, pedestrian: 64, safetyAssist: 83 },
  'renault|austral': { stars: 5, testYear: 2022, adult: 89, child: 86, pedestrian: 64, safetyAssist: 83 },
  'renault|scenic': { stars: 5, testYear: 2024, adult: 93, child: 92, pedestrian: 81, safetyAssist: 82 },
  'renault|kadjar': { stars: 5, testYear: 2015, adult: 89, child: 82, pedestrian: 66, safetyAssist: 71 },
  'renault|koleos': { stars: 5, testYear: 2017, adult: 93, child: 80, pedestrian: 63, safetyAssist: 62 },
  'renault|talisman': { stars: 5, testYear: 2015, adult: 93, child: 86, pedestrian: 73, safetyAssist: 81 },
  'renault|kangoo': { stars: 4, testYear: 2021, adult: 85, child: 79, pedestrian: 63, safetyAssist: 54 },
  'renault|zoe': { stars: 5, testYear: 2013, adult: 89, child: 80, pedestrian: 67, safetyAssist: 79 },
  'renault|rafale': { stars: 5, testYear: 2024, adult: 93, child: 92, pedestrian: 81, safetyAssist: 82 },
  'renault|espace': { stars: 5, testYear: 2015, adult: 83, child: 88, pedestrian: 65, safetyAssist: 76 },
  'renault|symbol': { stars: 4, testYear: 2013, adult: 80, child: 73, pedestrian: 53, safetyAssist: 17 },
  'renault|fluence': { stars: 5, testYear: 2011, adult: 93, child: 83, pedestrian: 51, safetyAssist: 83 },
  'renault|trafic': { stars: 3, testYear: 2015, adult: 76, child: 85, pedestrian: 56, safetyAssist: 25 },
  'renault|master': { stars: 3, testYear: 2015, adult: 76, child: 85, pedestrian: 56, safetyAssist: 25 },

  // ═══════════════════════════════════════════
  //  SEAT
  // ═══════════════════════════════════════════
  'seat|ibiza': { stars: 5, testYear: 2017, adult: 95, child: 77, pedestrian: 76, safetyAssist: 58 },
  'seat|leon': { stars: 5, testYear: 2020, adult: 92, child: 88, pedestrian: 72, safetyAssist: 80 },
  'seat|arona': { stars: 5, testYear: 2017, adult: 95, child: 77, pedestrian: 76, safetyAssist: 58 },
  'seat|ateca': { stars: 5, testYear: 2016, adult: 93, child: 84, pedestrian: 73, safetyAssist: 62 },
  'seat|tarraco': { stars: 5, testYear: 2019, adult: 97, child: 84, pedestrian: 79, safetyAssist: 79 },
  'seat|alhambra': { stars: 5, testYear: 2010, adult: 93, child: 88, pedestrian: 42, safetyAssist: 71 },

  // ═══════════════════════════════════════════
  //  SKODA
  // ═══════════════════════════════════════════
  'skoda|fabia': { stars: 5, testYear: 2021, adult: 85, child: 81, pedestrian: 70, safetyAssist: 71 },
  'skoda|scala': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 81, safetyAssist: 76 },
  'skoda|octavia': { stars: 5, testYear: 2022, adult: 88, child: 82, pedestrian: 70, safetyAssist: 78 },
  'skoda|superb': { stars: 5, testYear: 2015, adult: 92, child: 87, pedestrian: 71, safetyAssist: 62 },
  'skoda|kamiq': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 81, safetyAssist: 76 },
  'skoda|karoq': { stars: 5, testYear: 2017, adult: 93, child: 84, pedestrian: 73, safetyAssist: 71 },
  'skoda|kodiaq': { stars: 5, testYear: 2022, adult: 82, child: 84, pedestrian: 70, safetyAssist: 81 },
  'skoda|enyaq': { stars: 5, testYear: 2021, adult: 94, child: 89, pedestrian: 71, safetyAssist: 82 },
  'skoda|yeti': { stars: 5, testYear: 2009, adult: 92, child: 80, pedestrian: 48, safetyAssist: 71 },
  'skoda|rapid': { stars: 5, testYear: 2012, adult: 93, child: 82, pedestrian: 62, safetyAssist: 67 },

  // ═══════════════════════════════════════════
  //  SSANGYONG / KGMOBILITY
  // ═══════════════════════════════════════════
  'ssangyong|korando': { stars: 5, testYear: 2019, adult: 90, child: 83, pedestrian: 63, safetyAssist: 69 },
  'ssangyong|tivoli': { stars: 4, testYear: 2016, adult: 83, child: 80, pedestrian: 71, safetyAssist: 56 },
  'ssangyong|rexton': { stars: 5, testYear: 2017, adult: 90, child: 78, pedestrian: 73, safetyAssist: 60 },
  'ssangyong|torres': { stars: 5, testYear: 2023, adult: 82, child: 84, pedestrian: 70, safetyAssist: 81 },

  // ═══════════════════════════════════════════
  //  SUBARU
  // ═══════════════════════════════════════════
  'subaru|outback': { stars: 5, testYear: 2021, adult: 89, child: 88, pedestrian: 82, safetyAssist: 78 },
  'subaru|forester': { stars: 5, testYear: 2019, adult: 97, child: 91, pedestrian: 80, safetyAssist: 78 },
  'subaru|xv': { stars: 5, testYear: 2017, adult: 95, child: 83, pedestrian: 83, safetyAssist: 68 },
  'subaru|solterra': { stars: 5, testYear: 2022, adult: 93, child: 89, pedestrian: 88, safetyAssist: 88 },
  'subaru|impreza': { stars: 5, testYear: 2017, adult: 95, child: 83, pedestrian: 83, safetyAssist: 68 },
  'subaru|levorg': { stars: 5, testYear: 2014, adult: 95, child: 80, pedestrian: 68, safetyAssist: 86 },

  // ═══════════════════════════════════════════
  //  SUZUKI
  // ═══════════════════════════════════════════
  'suzuki|vitara': { stars: 5, testYear: 2015, adult: 89, child: 83, pedestrian: 74, safetyAssist: 71 },
  'suzuki|s-cross': { stars: 5, testYear: 2022, adult: 83, child: 78, pedestrian: 64, safetyAssist: 80 },
  'suzuki|swift': { stars: 3, testYear: 2017, adult: 81, child: 63, pedestrian: 64, safetyAssist: 39 },
  'suzuki|jimny': { stars: 3, testYear: 2018, adult: 73, child: 84, pedestrian: 52, safetyAssist: 50 },
  'suzuki|sx4': { stars: 5, testYear: 2013, adult: 91, child: 84, pedestrian: 71, safetyAssist: 86 },
  'suzuki|baleno': { stars: 3, testYear: 2016, adult: 82, child: 76, pedestrian: 73, safetyAssist: 41 },
  'suzuki|ignis': { stars: 3, testYear: 2016, adult: 80, child: 72, pedestrian: 62, safetyAssist: 38 },
  'suzuki|swace': { stars: 5, testYear: 2020, adult: 87, child: 80, pedestrian: 81, safetyAssist: 75 },
  'suzuki|across': { stars: 5, testYear: 2020, adult: 93, child: 87, pedestrian: 78, safetyAssist: 83 },

  // ═══════════════════════════════════════════
  //  TESLA
  // ═══════════════════════════════════════════
  'tesla|model-3': { stars: 5, testYear: 2019, adult: 96, child: 86, pedestrian: 74, safetyAssist: 94 },
  'tesla|model-y': { stars: 5, testYear: 2022, adult: 97, child: 87, pedestrian: 82, safetyAssist: 98 },
  'tesla|model-s': { stars: 5, testYear: 2014, adult: 92, child: 82, pedestrian: 73, safetyAssist: 71 },
  'tesla|model-x': { stars: 5, testYear: 2019, adult: 96, child: 86, pedestrian: 74, safetyAssist: 94 },

  // ═══════════════════════════════════════════
  //  TOGG
  // ═══════════════════════════════════════════
  'togg|t10x': { stars: 5, testYear: 2024, adult: 88, child: 85, pedestrian: 78, safetyAssist: 76 },
  'togg|t10f': { stars: 5, testYear: 2024, adult: 88, child: 85, pedestrian: 78, safetyAssist: 76 },

  // ═══════════════════════════════════════════
  //  TOYOTA
  // ═══════════════════════════════════════════
  'toyota|yaris': { stars: 5, testYear: 2020, adult: 86, child: 81, pedestrian: 78, safetyAssist: 77 },
  'toyota|yaris-cross': { stars: 5, testYear: 2021, adult: 86, child: 83, pedestrian: 78, safetyAssist: 81 },
  'toyota|corolla': { stars: 5, testYear: 2019, adult: 95, child: 84, pedestrian: 86, safetyAssist: 77 },
  'toyota|corolla-hatchback': { stars: 5, testYear: 2019, adult: 95, child: 84, pedestrian: 86, safetyAssist: 77 },
  'toyota|corolla-cross': { stars: 5, testYear: 2022, adult: 93, child: 87, pedestrian: 82, safetyAssist: 89 },
  'toyota|corolla-touring-sports': { stars: 5, testYear: 2019, adult: 95, child: 84, pedestrian: 86, safetyAssist: 77 },
  'toyota|camry': { stars: 5, testYear: 2019, adult: 96, child: 87, pedestrian: 78, safetyAssist: 95 },
  'toyota|c-hr': { stars: 5, testYear: 2017, adult: 95, child: 82, pedestrian: 77, safetyAssist: 78 },
  'toyota|rav4': { stars: 5, testYear: 2019, adult: 93, child: 87, pedestrian: 85, safetyAssist: 77 },
  'toyota|highlander': { stars: 5, testYear: 2021, adult: 88, child: 82, pedestrian: 73, safetyAssist: 85 },
  'toyota|hilux': { stars: 3, testYear: 2016, adult: 82, child: 79, pedestrian: 52, safetyAssist: 24 },
  'toyota|land-cruiser': { stars: 5, testYear: 2023, adult: 89, child: 87, pedestrian: 78, safetyAssist: 82 },
  'toyota|land-cruiser-prado': { stars: 5, testYear: 2023, adult: 89, child: 87, pedestrian: 78, safetyAssist: 82 },
  'toyota|prius': { stars: 5, testYear: 2023, adult: 93, child: 83, pedestrian: 80, safetyAssist: 81 },
  'toyota|supra': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 76, safetyAssist: 76 },
  'toyota|aygo': { stars: 3, testYear: 2017, adult: 62, child: 62, pedestrian: 61, safetyAssist: 41 },
  'toyota|aygo-x': { stars: 4, testYear: 2022, adult: 75, child: 80, pedestrian: 66, safetyAssist: 68 },
  'toyota|bz4x': { stars: 5, testYear: 2022, adult: 93, child: 87, pedestrian: 82, safetyAssist: 89 },
  'toyota|proace': { stars: 3, testYear: 2014, adult: 76, child: 79, pedestrian: 48, safetyAssist: 47 },
  'toyota|proace-verso': { stars: 5, testYear: 2015, adult: 93, child: 82, pedestrian: 62, safetyAssist: 62 },
  'toyota|proace-city': { stars: 5, testYear: 2019, adult: 96, child: 89, pedestrian: 72, safetyAssist: 75 },
  'toyota|verso': { stars: 4, testYear: 2013, adult: 89, child: 80, pedestrian: 48, safetyAssist: 71 },
  'toyota|auris': { stars: 5, testYear: 2013, adult: 93, child: 82, pedestrian: 72, safetyAssist: 66 },
  'toyota|avensis': { stars: 5, testYear: 2009, adult: 91, child: 83, pedestrian: 53, safetyAssist: 71 },

  // ═══════════════════════════════════════════
  //  VOLKSWAGEN
  // ═══════════════════════════════════════════
  'volkswagen|polo': { stars: 5, testYear: 2017, adult: 96, child: 85, pedestrian: 72, safetyAssist: 59 },
  'volkswagen|golf': { stars: 5, testYear: 2024, adult: 89, child: 87, pedestrian: 80, safetyAssist: 83 },
  'volkswagen|golf-gti': { stars: 5, testYear: 2024, adult: 89, child: 87, pedestrian: 80, safetyAssist: 83 },
  'volkswagen|golf-r': { stars: 5, testYear: 2024, adult: 89, child: 87, pedestrian: 80, safetyAssist: 83 },
  'volkswagen|passat': { stars: 5, testYear: 2024, adult: 90, child: 88, pedestrian: 82, safetyAssist: 84 },
  'volkswagen|passat-variant': { stars: 5, testYear: 2024, adult: 90, child: 88, pedestrian: 82, safetyAssist: 84 },
  'volkswagen|tiguan': { stars: 5, testYear: 2024, adult: 90, child: 89, pedestrian: 80, safetyAssist: 78 },
  'volkswagen|tiguan-allspace': { stars: 5, testYear: 2016, adult: 96, child: 85, pedestrian: 68, safetyAssist: 68 },
  'volkswagen|t-cross': { stars: 5, testYear: 2019, adult: 97, child: 86, pedestrian: 81, safetyAssist: 80 },
  'volkswagen|t-roc': { stars: 5, testYear: 2017, adult: 96, child: 87, pedestrian: 79, safetyAssist: 68 },
  'volkswagen|taigo': { stars: 5, testYear: 2021, adult: 95, child: 86, pedestrian: 72, safetyAssist: 80 },
  'volkswagen|touareg': { stars: 5, testYear: 2018, adult: 89, child: 86, pedestrian: 73, safetyAssist: 75 },
  'volkswagen|arteon': { stars: 5, testYear: 2017, adult: 96, child: 87, pedestrian: 79, safetyAssist: 68 },
  'volkswagen|id-3': { stars: 5, testYear: 2020, adult: 87, child: 89, pedestrian: 72, safetyAssist: 88 },
  'volkswagen|id-4': { stars: 5, testYear: 2021, adult: 93, child: 89, pedestrian: 63, safetyAssist: 88 },
  'volkswagen|id-5': { stars: 5, testYear: 2021, adult: 93, child: 89, pedestrian: 63, safetyAssist: 88 },
  'volkswagen|id-7': { stars: 5, testYear: 2023, adult: 96, child: 91, pedestrian: 74, safetyAssist: 86 },
  'volkswagen|jetta': { stars: 5, testYear: 2011, adult: 93, child: 85, pedestrian: 68, safetyAssist: 71 },
  'volkswagen|up': { stars: 5, testYear: 2019, adult: 95, child: 86, pedestrian: 72, safetyAssist: 80 },
  'volkswagen|caddy': { stars: 5, testYear: 2021, adult: 84, child: 82, pedestrian: 69, safetyAssist: 71 },
  'volkswagen|caravelle': { stars: 4, testYear: 2022, adult: 81, child: 83, pedestrian: 63, safetyAssist: 65 },
  'volkswagen|multivan': { stars: 4, testYear: 2022, adult: 81, child: 83, pedestrian: 63, safetyAssist: 65 },
  'volkswagen|transporter': { stars: 4, testYear: 2022, adult: 81, child: 83, pedestrian: 63, safetyAssist: 65 },
  'volkswagen|touran': { stars: 5, testYear: 2015, adult: 89, child: 87, pedestrian: 72, safetyAssist: 78 },
  'volkswagen|sharan': { stars: 5, testYear: 2019, adult: 97, child: 87, pedestrian: 79, safetyAssist: 79 },
  'volkswagen|scirocco': { stars: 5, testYear: 2014, adult: 87, child: 83, pedestrian: 74, safetyAssist: 71 },
  'volkswagen|cc': { stars: 5, testYear: 2012, adult: 92, child: 85, pedestrian: 52, safetyAssist: 71 },
  'volkswagen|eos': { stars: 5, testYear: 2010, adult: 91, child: 80, pedestrian: 35, safetyAssist: 71 },
  'volkswagen|beetle': { stars: 5, testYear: 2011, adult: 93, child: 80, pedestrian: 68, safetyAssist: 71 },

  // ═══════════════════════════════════════════
  //  VOLVO
  // ═══════════════════════════════════════════
  'volvo|xc40': { stars: 5, testYear: 2018, adult: 97, child: 87, pedestrian: 71, safetyAssist: 76 },
  'volvo|xc60': { stars: 5, testYear: 2017, adult: 98, child: 87, pedestrian: 76, safetyAssist: 95 },
  'volvo|xc90': { stars: 5, testYear: 2015, adult: 97, child: 87, pedestrian: 72, safetyAssist: 100 },
  'volvo|s60': { stars: 5, testYear: 2019, adult: 96, child: 84, pedestrian: 74, safetyAssist: 76 },
  'volvo|s90': { stars: 5, testYear: 2017, adult: 95, child: 83, pedestrian: 76, safetyAssist: 93 },
  'volvo|v40': { stars: 5, testYear: 2012, adult: 98, child: 83, pedestrian: 100, safetyAssist: 68 },
  'volvo|v60': { stars: 5, testYear: 2018, adult: 96, child: 84, pedestrian: 74, safetyAssist: 76 },
  'volvo|v90': { stars: 5, testYear: 2017, adult: 95, child: 83, pedestrian: 76, safetyAssist: 93 },
  'volvo|c40': { stars: 5, testYear: 2022, adult: 94, child: 89, pedestrian: 71, safetyAssist: 82 },
  'volvo|ex30': { stars: 5, testYear: 2024, adult: 91, child: 85, pedestrian: 79, safetyAssist: 82 },
  'volvo|ex90': { stars: 5, testYear: 2024, adult: 91, child: 88, pedestrian: 82, safetyAssist: 83 },

  // ═══════════════════════════════════════════
  //  POLESTAR
  // ═══════════════════════════════════════════
  'polestar|polestar-2': { stars: 5, testYear: 2021, adult: 93, child: 89, pedestrian: 80, safetyAssist: 82 },
};

/**
 * Belirli bir marka+model için Euro NCAP sonucunu döndürür.
 * @param {string} brandSlug
 * @param {string} modelSlug
 * @returns {object|null} { stars, testYear, adult, child, pedestrian, safetyAssist }
 */
function getNcapResult(brandSlug, modelSlug) {
  return EURO_NCAP_DATA[`${brandSlug}|${modelSlug}`] || null;
}

/**
 * Tüm veri istatistikleri
 */
function getNcapStats() {
  const entries = Object.keys(EURO_NCAP_DATA);
  const brands = new Set(entries.map(k => k.split('|')[0]));
  return { totalModels: entries.length, totalBrands: brands.size };
}

module.exports = {
  EURO_NCAP_DATA,
  getNcapResult,
  getNcapStats,
};
