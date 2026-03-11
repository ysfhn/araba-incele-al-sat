/**
 * PostgreSQL Wrapper — better-sqlite3 API Uyumlu
 * 
 * Bu modül, mevcut route'lardaki senkron better-sqlite3 API'sini
 * (db.prepare(sql).get/all/run) PostgreSQL üzerinde çalışacak şekilde sağlar.
 * 
 * Route'ları async yaparak çalışır. getDb() bir PgWrapper döner.
 * Tüm prepare().get/all/run() metodları async (Promise) döner.
 */

const { Pool } = require('pg');

let pool = null;

function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL ortam değişkeni tanımlanmamış!');
    }
    pool = new Pool({
      connectionString,
      ssl: process.env.DB_SSL === 'false' ? false : { rejectUnauthorized: false },
      max: 20,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }
  return pool;
}

/**
 * SQLite placeholder (?) → PostgreSQL placeholder ($1, $2, ...)
 */
function convertPlaceholders(sql) {
  let idx = 0;
  return sql.replace(/\?/g, () => `$${++idx}`);
}

/**
 * SQLite → PG SQL uyumluluk düzeltmeleri (placeholder + syntax)
 */
function convertSql(sql) {
  let converted = convertPlaceholders(sql);

  // SQLite date fonksiyonları → PostgreSQL
  // datetime('now', ?) → NOW() + ?::interval  (parameterized interval)
  converted = converted.replace(/datetime\('now',\s*(\$\d+)\)/gi, '(NOW() + $1::interval)');
  // datetime('now', 'offset') → NOW() + INTERVAL 'offset'  (literal)
  converted = converted.replace(/datetime\('now',\s*'([^']+)'\)/gi, "(NOW() + INTERVAL '$1')");
  // date('now', ?) → (CURRENT_DATE + ?::interval)  (parameterized)
  converted = converted.replace(/date\('now',\s*(\$\d+)\)/gi, '(CURRENT_DATE + $1::interval)');
  // date('now', '+N days') → CURRENT_DATE + INTERVAL 'N days'
  converted = converted.replace(/date\('now',\s*'([+-]?\d+)\s+days?'\)/gi, (_, n) => {
    const num = parseInt(n);
    if (num >= 0) return `(CURRENT_DATE + INTERVAL '${num} days')`;
    return `(CURRENT_DATE - INTERVAL '${Math.abs(num)} days')`;
  });
  // date('now') → CURRENT_DATE
  converted = converted.replace(/date\('now'\)/gi, 'CURRENT_DATE');
  // datetime('now') → NOW()
  converted = converted.replace(/datetime\('now'\)/gi, 'NOW()');
  // date(column) → column::date (cast to date)
  converted = converted.replace(/date\((\w+)\)/gi, '$1::date');

  // DDL dönüşümleri (exec ile kullanılır)
  // INTEGER PRIMARY KEY AUTOINCREMENT → SERIAL PRIMARY KEY
  converted = converted.replace(/INTEGER\s+PRIMARY\s+KEY\s+AUTOINCREMENT/gi, 'SERIAL PRIMARY KEY');
  // DATETIME DEFAULT CURRENT_TIMESTAMP → TIMESTAMPTZ DEFAULT NOW()
  converted = converted.replace(/DATETIME\s+DEFAULT\s+CURRENT_TIMESTAMP/gi, 'TIMESTAMPTZ DEFAULT NOW()');
  converted = converted.replace(/\bDATETIME\b/gi, 'TIMESTAMPTZ');

  return converted;
}

class PreparedStatement {
  constructor(sql) {
    this.originalSql = sql;
    this.sql = convertSql(sql);
  }

  async get(...params) {
    const p = getPool();
    const flatParams = params.flat();
    const { rows } = await p.query(this.sql, flatParams);
    return rows[0] || null;
  }

  async all(...params) {
    const p = getPool();
    const flatParams = params.flat();
    const { rows } = await p.query(this.sql, flatParams);
    return rows;
  }

  async run(...params) {
    const p = getPool();
    const flatParams = params.flat();

    // INSERT için RETURNING id ekle (lastInsertRowid uyumu)
    let sql = this.sql;
    const isInsert = /^\s*INSERT\s+INTO/i.test(sql);
    if (isInsert && !/RETURNING/i.test(sql)) {
      sql = sql.replace(/;?\s*$/, ' RETURNING id');
    }

    const result = await p.query(sql, flatParams);

    return {
      changes: result.rowCount,
      lastInsertRowid: result.rows && result.rows[0] ? result.rows[0].id : null,
    };
  }
}

class PgWrapper {
  prepare(sql) {
    return new PreparedStatement(sql);
  }

  async exec(sql) {
    const p = getPool();
    // exec can run multiple statements; split by semicolons
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    for (const stmt of statements) {
      const converted = convertSql(stmt);
      await p.query(converted);
    }
  }

  pragma() {
    // No-op for PostgreSQL
  }
}

async function closePool() {
  if (pool) {
    await pool.end();
    pool = null;
  }
}

module.exports = { PgWrapper, getPool, closePool };
