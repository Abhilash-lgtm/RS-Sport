import { Router, Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, '..', 'data', 'bookings.json');

export const trialsRouter = Router();

interface BookingRecord {
  id: string;
  athlete: string;
  parentName: string;
  age: number;
  phone: string;
  hub: string;
  sport: string;
  slot: string;
  status: string;
  createdAt: string;
}

function readBookings(): BookingRecord[] {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading bookings file:', err);
    return [];
  }
}

function writeBookings(bookings: BookingRecord[]): boolean {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(bookings, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing bookings file:', err);
    return false;
  }
}

// GET all bookings
trialsRouter.get('/', (_req: Request, res: Response) => {
  const bookings = readBookings();
  res.json({
    success: true,
    count: bookings.length,
    data: bookings
  });
});

// POST new trial booking
trialsRouter.post('/', (req: Request, res: Response): void => {
  const { parentName, childName, childAge, phone, selectedHub, selectedSport, preferredSlot } = req.body;

  if (!childName || !phone) {
    res.status(400).json({
      success: false,
      message: 'Child name and phone number are required.'
    });
    return;
  }

  const passId = `RA-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
  const newBooking: BookingRecord = {
    id: passId,
    athlete: childName.trim(),
    parentName: (parentName || '').trim(),
    age: Number(childAge) || 8,
    phone: (phone || '').trim(),
    hub: selectedHub || 'Main Academy Hub',
    sport: selectedSport || 'Athletics & Sprint Mechanics',
    slot: preferredSlot || 'Upcoming Saturday 07:30 AM',
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  };

  const bookings = readBookings();
  bookings.unshift(newBooking);
  writeBookings(bookings);

  res.status(201).json({
    success: true,
    message: 'Trial booking successfully confirmed!',
    bookingPass: {
      id: newBooking.id,
      athlete: newBooking.athlete,
      hub: newBooking.hub,
      sport: newBooking.sport,
      slot: newBooking.slot,
      status: newBooking.status,
      createdAt: newBooking.createdAt
    }
  });
});
