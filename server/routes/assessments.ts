import { Router, Request, Response } from 'express';

export const assessmentsRouter = Router();

assessmentsRouter.post('/evaluate', (req: Request, res: Response): void => {
  const {
    name = 'Young Athlete',
    age = 8,
    gender = 'boy',
    heightCm = 130,
    weightKg = 28,
    primarySport = 'Athletics & Sprint Mechanics',
    activityLevel = 'Moderate (2-3 days/wk)',
    primaryGoal = 'Speed & Sprint',
    experienceYears = 1
  } = req.body;

  const heightM = heightCm / 100;
  const bmi = Number((weightKg / (heightM * heightM)).toFixed(1));

  let growthCategory = 'Ideal Athletic Conditioning';
  if (bmi < 14) growthCategory = 'Lean (Focus on Caloric Density & Core Stability)';
  else if (bmi > 21) growthCategory = 'Sturdy (Focus on Low-Impact Conditioning & Agility)';

  // Calculate radar scores based on inputs
  const speed = Math.min(96, Math.max(55, Math.round(70 + (age * 1.5) + (primaryGoal.includes('Speed') ? 10 : 0))));
  const agility = Math.min(95, Math.max(50, Math.round(68 + (age * 1.2) + (activityLevel.includes('4+') ? 12 : 5))));
  const endurance = Math.min(94, Math.max(48, Math.round(65 + (experienceYears * 4) + (activityLevel.includes('4+') ? 10 : 4))));
  const power = Math.min(92, Math.max(52, Math.round(62 + (age * 1.4))));
  const mobility = Math.min(98, Math.max(60, Math.round(85 - (age * 0.8))));
  const coordination = Math.min(95, Math.max(58, Math.round(72 + (experienceYears * 3))));

  const overallScore = Math.round((speed + agility + endurance + power + mobility + coordination) / 6);

  res.json({
    success: true,
    data: {
      athleteName: name,
      calculatedAge: age,
      gender,
      bmi,
      growthCategory,
      overallScore,
      radarScores: {
        speed,
        agility,
        endurance,
        power,
        mobility,
        coordination
      },
      recommendedPathway: age <= 8 ? 'Fundamental Movement Skills (FMS Foundation)' : 'Track & Sprint Performance Academy',
      recommendedProgram: `${primarySport} Development Pathway`,
      evaluatedAt: new Date().toISOString()
    }
  });
});
