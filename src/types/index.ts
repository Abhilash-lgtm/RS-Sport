export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  targetAge: [number, number];
  badge: string;
  category: 'Grassroots' | 'Multi-Sport' | 'Specialization' | 'Elite' | 'School PE';
  description: string;
  highlights: string[];
  sportsCovered: string[];
  schedule: string;
  duration: string;
  intensity: 'Low-Medium' | 'Medium' | 'High' | 'Elite';
  image: string;
  popular?: boolean;
}

export interface AcademyHub {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  features: string[];
  sportsAvailable: string[];
  headCoach: string;
  activeAthletes: number;
}

export interface BatchSlot {
  id: string;
  hubId: string;
  hubName: string;
  sport: string;
  ageCategory: string;
  days: string;
  time: string;
  coach: string;
  slotsRemaining: number;
  totalSlots: number;
}

export interface Coach {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  specialty: string;
  image: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  childAge: number;
  sport: string;
  school: string;
  rating: number;
  text: string;
  improvementStat: string;
  metric: string;
}

export interface AthleteInput {
  name: string;
  age: number;
  gender: 'boy' | 'girl' | 'other';
  heightCm: number;
  weightKg: number;
  primarySport: string;
  activityLevel: 'Beginner (0-1 days/wk)' | 'Moderate (2-3 days/wk)' | 'Athletic (4+ days/wk)';
  primaryGoal: 'Speed & Sprint' | 'Multi-Sport Agility' | 'Stamina & Endurance' | 'Posture & Strength' | 'Game IQ & Competition';
  experienceYears: number;
}

export interface AIAthleticReport {
  athleteName: string;
  calculatedAge: number;
  bmi: number;
  growthCategory: string;
  overallScore: number;
  radarScores: {
    speed: number;
    agility: number;
    endurance: number;
    power: number;
    mobility: number;
    coordination: number;
  };
  recommendedPathway: string;
  recommendedProgram: string;
  strengths: string[];
  focusAreas: string[];
  weeklyRoutine: {
    day: string;
    focus: string;
    drills: { name: string; sets: string; description: string }[];
  }[];
  nutritionTips: string[];
  safetyNotes: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'coach';
  text: string;
  timestamp: string;
  actionButton?: {
    label: string;
    action: string;
  };
}
