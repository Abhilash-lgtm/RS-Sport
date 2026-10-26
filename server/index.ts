import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { trialsRouter } from './routes/trials.js';
import { schoolDemosRouter } from './routes/schoolDemos.js';
import { coachRouter } from './routes/coach.js';
import { assessmentsRouter } from './routes/assessments.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// API Health Check
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'RA Sports Full-Stack API Server',
    uptime: `${Math.floor(process.uptime())}s`,
    timestamp: new Date().toISOString()
  });
});

// Mount API routes
app.use('/api/trials', trialsRouter);
app.use('/api/school-demos', schoolDemosRouter);
app.use('/api/coach', coachRouter);
app.use('/api/assessments', assessmentsRouter);

// Serve static frontend in production if dist exists
const distPath = path.resolve(__dirname, '..', 'dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send('RA Sports API Server is running. In development, visit the Vite live server (default: http://localhost:5173).');
    }
  });
});

app.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`🚀 RA Sports Backend API running at: http://localhost:${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📋 Trial Bookings: http://localhost:${PORT}/api/trials`);
  console.log(`🏫 School Inquiries: http://localhost:${PORT}/api/school-demos`);
  console.log(`==================================================\n`);
});
