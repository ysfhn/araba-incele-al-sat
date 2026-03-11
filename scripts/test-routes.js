// Self-contained route test — starts server internally, tests, then exits
const http = require('http');
const path = require('path');
const { fork } = require('child_process');

// Kill any existing server on port 3000
try { require('child_process').execSync('lsof -ti:3000 | xargs kill -9 2>/dev/null', { stdio: 'ignore' }); } catch (e) {}

const serverPath = path.join(__dirname, '..', 'src', 'app.js');
const server = fork(serverPath, [], { silent: true, env: { ...process.env, NODE_ENV: 'development' } });

function testRoute(urlPath) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3000${urlPath}`, { timeout: 5000 }, (res) => {
      res.resume();
      resolve({ path: urlPath, code: res.statusCode });
    });
    req.on('error', (e) => resolve({ path: urlPath, code: 'ERR', error: e.message }));
    req.on('timeout', () => { req.destroy(); resolve({ path: urlPath, code: 'TIMEOUT' }); });
  });
}

function testLogin() {
  return new Promise((resolve) => {
    const postData = 'email=admin@arabaincele.com&password=123456';
    const req = http.request({
      hostname: 'localhost', port: 3000, path: '/auth/giris', method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(postData) }
    }, (res) => {
      res.resume();
      resolve({ path: 'POST /auth/giris', code: res.statusCode });
    });
    req.on('error', (e) => resolve({ path: 'POST /auth/giris', code: 'ERR', error: e.message }));
    req.write(postData);
    req.end();
  });
}

// Wait for server to start, then run tests
setTimeout(async () => {
  const paths = [
    '/', '/nasil-calisir', '/giris', '/ilan', '/forum',
    '/servis', '/arac-secim',
    '/ilan/toyota-corolla-2024-hybrid-dream',
    '/arac/toyota/corolla',
    '/servis/master-bosch',
    '/forum/konu/500k-1m-en-iyi-arac',
    '/api/brands',
    '/api/models/toyota',
  ];

  let pass = 0, fail = 0;
  for (const p of paths) {
    const r = await testRoute(p);
    if (r.code === 200) { console.log(`✅ ${r.code} ${r.path}`); pass++; }
    else { console.log(`❌ ${r.code} ${r.path} ${r.error || ''}`); fail++; }
  }

  // Login: 302 redirect = success
  const login = await testLogin();
  if (login.code === 302) { console.log(`✅ 302 ${login.path} (redirect=success)`); pass++; }
  else { console.log(`❌ ${login.code} ${login.path}`); fail++; }

  console.log(`\n📊 Results: ${pass} passed, ${fail} failed out of ${pass + fail}`);

  server.kill();
  process.exit(fail > 0 ? 1 : 0);
}, 3000);

server.on('exit', () => {});
