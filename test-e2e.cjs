const http = require('http');

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, headers: res.headers, data });
      });
    });
    req.on('error', reject);
    if (body) {
      req.write(typeof body === 'string' ? body : JSON.stringify(body));
    }
    req.end();
  });
}

async function runTests() {
  console.log('--- STARTING COMPREHENSIVE END-TO-END TESTS ---');
  let passed = 0;
  let total = 0;

  async function test(name, fn) {
    total++;
    try {
      await fn();
      console.log(`[PASS] ${name}`);
      passed++;
    } catch (err) {
      console.error(`[FAIL] ${name}:`, err.message);
    }
  }

  // 1. Frontend Vite Dev Server
  await test('Frontend HTML serving (http://localhost:5173)', async () => {
    const res = await request({ hostname: 'localhost', port: 5173, path: '/', method: 'GET' });
    if (res.statusCode !== 200 || !res.data.includes('<div id="root"></div>')) {
      throw new Error('Frontend did not return valid index.html: ' + res.statusCode);
    }
  });

  // 2. Vite Proxy to Backend
  await test('Vite Proxy forwarding /api/health to backend', async () => {
    const res = await request({ hostname: 'localhost', port: 5173, path: '/api/health', method: 'GET' });
    const json = JSON.parse(res.data);
    if (res.statusCode !== 200 || json.status !== 'ok') {
      throw new Error('Vite proxy failed: ' + res.data);
    }
  });

  // 3. Backend Direct Healthcheck
  await test('Backend Healthcheck (http://localhost:5000/api/health)', async () => {
    const res = await request({ hostname: 'localhost', port: 5000, path: '/api/health', method: 'GET' });
    const json = JSON.parse(res.data);
    if (res.statusCode !== 200 || json.status !== 'ok') {
      throw new Error('Health check invalid');
    }
  });

  // 4. Trial Bookings GET
  await test('GET /api/trials', async () => {
    const res = await request({ hostname: 'localhost', port: 5000, path: '/api/trials', method: 'GET' });
    const json = JSON.parse(res.data);
    if (res.statusCode !== 200 || !Array.isArray(json.data)) {
      throw new Error('Trials GET failed');
    }
  });

  // 5. Trial Bookings POST
  await test('POST /api/trials', async () => {
    const payload = {
      parentName: 'Test Parent',
      childName: 'Test Athlete',
      childAge: 10,
      phone: '+91 99999 88888',
      selectedHub: 'Koramangala Athletic Hub',
      selectedSport: 'Athletics & Sprint Mechanics',
      preferredSlot: 'Upcoming Saturday 07:30 AM'
    };
    const res = await request({
      hostname: 'localhost',
      port: 5000,
      path: '/api/trials',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, payload);
    const json = JSON.parse(res.data);
    if (res.statusCode !== 201 || !json.bookingPass?.id) {
      throw new Error('Trial POST failed: ' + res.data);
    }
  });

  // 6. School Demos GET
  await test('GET /api/school-demos', async () => {
    const res = await request({ hostname: 'localhost', port: 5000, path: '/api/school-demos', method: 'GET' });
    const json = JSON.parse(res.data);
    if (res.statusCode !== 200 || !Array.isArray(json.data)) {
      throw new Error('School demos GET failed');
    }
  });

  // 7. School Demos POST
  await test('POST /api/school-demos', async () => {
    const payload = {
      schoolName: 'Greenwood High International',
      contactPerson: 'Head of Sports',
      role: 'Sports Director',
      phone: '+91 91234 56789',
      email: 'sports@greenwood.edu',
      institutionType: 'K-12 School (Grades 1-12)',
      selectedService: 'Physical Education Curriculum',
      locationArea: 'Sarjapur Road',
      preferredDate: '2026-11-15'
    };
    const res = await request({
      hostname: 'localhost',
      port: 5000,
      path: '/api/school-demos',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, payload);
    const json = JSON.parse(res.data);
    if (res.statusCode !== 201 || !json.demoId) {
      throw new Error('School Demo POST failed: ' + res.data);
    }
  });

  // 8. AI Coach Assistant Chat POST
  await test('POST /api/coach/chat', async () => {
    const payload = { message: 'What is the best pre-training snack for a 9-year-old?' };
    const res = await request({
      hostname: 'localhost',
      port: 5000,
      path: '/api/coach/chat',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, payload);
    const json = JSON.parse(res.data);
    if (res.statusCode !== 200 || !json.reply || !json.reply.includes('banana')) {
      throw new Error('AI Coach response invalid: ' + res.data);
    }
  });

  // 9. Athletic Assessment POST
  await test('POST /api/assessments/evaluate', async () => {
    const payload = {
      name: 'Rohan Verma',
      age: 11,
      gender: 'boy',
      heightCm: 142,
      weightKg: 34,
      primarySport: 'Athletics & Sprint Mechanics',
      activityLevel: 'Athletic (4+ days/wk)',
      primaryGoal: 'Speed & Sprint',
      experienceYears: 2
    };
    const res = await request({
      hostname: 'localhost',
      port: 5000,
      path: '/api/assessments/evaluate',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, payload);
    const json = JSON.parse(res.data);
    if (res.statusCode !== 200 || !json.data?.radarScores || json.data.overallScore < 50) {
      throw new Error('Assessment evaluation failed: ' + res.data);
    }
  });

  console.log(`\n================================`);
  console.log(`TEST RESULTS: ${passed}/${total} PASSED`);
  console.log(`================================`);
  if (passed !== total) process.exit(1);
}

runTests();
