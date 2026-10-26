import { Router, Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '..', 'data', 'school-demos.json');

export const schoolDemosRouter = Router();

interface SchoolDemoRecord {
  id: string;
  schoolName: string;
  contactPerson: string;
  role: string;
  phone: string;
  email: string;
  institutionType: string;
  selectedService: string;
  locationArea: string;
  preferredDate: string;
  status: string;
  createdAt: string;
}

function readDemos(): SchoolDemoRecord[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading school demos file:', err);
    return [];
  }
}

function writeDemos(demos: SchoolDemoRecord[]): boolean {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(demos, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing school demos file:', err);
    return false;
  }
}

// GET all school demo requests
schoolDemosRouter.get('/', (_req: Request, res: Response) => {
  const demos = readDemos();
  res.json({
    success: true,
    count: demos.length,
    data: demos
  });
});

// POST new school demo request
schoolDemosRouter.post('/', (req: Request, res: Response): void => {
  const {
    schoolName,
    contactPerson,
    role,
    phone,
    email,
    institutionType,
    selectedService,
    locationArea,
    preferredDate
  } = req.body;

  if (!schoolName || !phone) {
    res.status(400).json({
      success: false,
      message: 'School name and phone number are required.'
    });
    return;
  }

  const demoId = `RA-DEMO-${Math.floor(1000 + Math.random() * 9000)}`;
  const newDemo: SchoolDemoRecord = {
    id: demoId,
    schoolName: (schoolName || '').trim(),
    contactPerson: (contactPerson || '').trim(),
    role: role || 'Principal / Director',
    phone: (phone || '').trim(),
    email: (email || '').trim(),
    institutionType: institutionType || 'K-12 School (Grades 1-12)',
    selectedService: selectedService || 'Physical Education Curriculum',
    locationArea: (locationArea || '').trim(),
    preferredDate: preferredDate || '',
    status: 'Pending Review',
    createdAt: new Date().toISOString()
  };

  const demos = readDemos();
  demos.unshift(newDemo);
  writeDemos(demos);

  res.status(201).json({
    success: true,
    message: 'School demonstration request received!',
    demoId: newDemo.id,
    data: newDemo
  });
});
