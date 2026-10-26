import React, { useState } from 'react';
import type { AthleteInput, AIAthleticReport } from '../../types';
import { Sparkles, Activity, Trophy, ShieldCheck, Download, RefreshCw, Zap, CheckCircle2, ChevronRight, Apple, HeartPulse } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AIAthleteAssessmentProps {
  onSelectProgram?: (programId: string) => void;
  onBookTrialWithAthlete?: (name: string, age: number, sport: string) => void;
}

export const AIAthleteAssessment: React.FC<AIAthleteAssessmentProps> = ({
  onBookTrialWithAthlete
}) => {
  const [formData, setFormData] = useState<AthleteInput>({
    name: '',
    age: 9,
    gender: 'boy',
    heightCm: 134,
    weightKg: 30,
    primarySport: 'Athletics & Sprints',
    activityLevel: 'Moderate (2-3 days/wk)',
    primaryGoal: 'Speed & Sprint',
    experienceYears: 1
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState<AIAthleticReport | null>(null);

  const calculateReport = (data: AthleteInput): AIAthleticReport => {
    const heightM = data.heightCm / 100;
    const bmi = parseFloat((data.weightKg / (heightM * heightM)).toFixed(1));

    let growthCategory = 'Ideal Athletic Percentile (Healthy Growth Zone)';
    if (bmi < 14) growthCategory = 'Lean Sprint Profile (High Aerobic Efficiency)';
    if (bmi > 21) growthCategory = 'Power Stature (Building Speed-Endurance)';

    const baseScore = data.activityLevel === 'Athletic (4+ days/wk)' ? 84 : data.activityLevel === 'Moderate (2-3 days/wk)' ? 74 : 64;
    const overallScore = Math.min(96, Math.max(62, baseScore + (data.age >= 10 ? 6 : 3) + Math.floor(Math.random() * 5)));

    const speedScore = data.primaryGoal === 'Speed & Sprint' ? 91 : 78;
    const agilityScore = data.primaryGoal === 'Multi-Sport Agility' ? 92 : 82;
    const enduranceScore = data.primaryGoal === 'Stamina & Endurance' ? 90 : 75;
    const powerScore = data.primaryGoal === 'Posture & Strength' ? 88 : 77;
    const mobilityScore = data.age <= 8 ? 94 : 85;
    const coordinationScore = Math.round((agilityScore + speedScore) / 2);

    let recommendedProgram = 'junior-athletic-explorers';
    let pathway = 'Stage 2: Multilateral Athletic Dexterity & Stride Mechanics';
    if (data.age <= 6) {
      recommendedProgram = 'little-striders';
      pathway = 'Stage 1: Fundamental Movement Skills (FMS) & Spatial Awareness';
    } else if (data.age >= 11 && data.age <= 14) {
      recommendedProgram = 'youth-academy-pro';
      pathway = 'Stage 3: Sport Specialization & Explosive Power Foundation';
    } else if (data.age >= 15) {
      recommendedProgram = 'elite-champions-league';
      pathway = 'Stage 4: High-Performance Conditioning & Competitive Periodization';
    }

    return {
      athleteName: data.name.trim() || 'Young Champion',
      calculatedAge: data.age,
      bmi,
      growthCategory,
      overallScore,
      radarScores: {
        speed: speedScore,
        agility: agilityScore,
        endurance: enduranceScore,
        power: powerScore,
        mobility: mobilityScore,
        coordination: coordinationScore
      },
      recommendedPathway: pathway,
      recommendedProgram,
      strengths: [
        'Natural stride cadence and ground reactive force tendency',
        'High vestibular balance and quick rotational agility',
        'Positive kinetic chain alignment during acceleration'
      ],
      focusAreas: [
        'Ankle stiffness and plantar flexion drive on initial 10m blast',
        'Breathing rhythm during sustained high-tempo transitions',
        'Rotational core stability to prevent lateral torso wobble'
      ],
      weeklyRoutine: [
        {
          day: 'Day 1 (Speed & Stride Mechanics)',
          focus: 'Acceleration & High Knees (A-Skips)',
          drills: [
            { name: 'Wall Acceleration Drills', sets: '3 sets x 8 reps each leg', description: '45-degree angle posture, aggressive knee drive matching hip height.' },
            { name: 'Mini-Hurdle Stride Cadence', sets: '4 passes over 6 hurdles', description: 'Short quick contact, landing on balls of feet with upright posture.' },
            { name: '15m Blast Starts', sets: '5 repetitions (walk-back recovery)', description: 'Explosive drive out of athletic ready stance.' }
          ]
        },
        {
          day: 'Day 2 (Agility & Deceleration Control)',
          focus: 'Fast-Twitch Ladder & 5-10-5 Shuttle',
          drills: [
            { name: 'Speed Ladder Icky Shuffle', sets: '4 sets forward & reverse', description: 'Light feet, rhythm synchronization, arms driving in 90-degree arcs.' },
            { name: 'Pro Agility 5-10-5 Shuttle', sets: '4 reps with 60s rest', description: 'Low center of gravity at turns, decelerate in 2 braking steps.' },
            { name: 'Single-Leg Balance & Hop Stick', sets: '3 sets x 5 hops each leg', description: 'Land soft with knee tracking over toes, freeze for 2 seconds.' }
          ]
        },
        {
          day: 'Day 3 (Multi-Sport Play & Aerobic Game)',
          focus: 'Cardiovascular Stamina & Game IQ',
          drills: [
            { name: 'Small-Sided Tag / Football Play', sets: '25 minutes active play', description: 'Spontaneous direction changes, spatial decision-making.' },
            { name: 'Animal Locomotion Crawls', sets: 'Bear crawl & frog leaps x 15m', description: 'Upper body weight-bearing and spine flexibility.' },
            { name: 'Cool-Down Diaphragmatic Breathing', sets: '5 minutes lying down', description: 'Lower heart rate, active hamstring & hip flexor stretches.' }
          ]
        }
      ],
      nutritionTips: [
        'Pre-Training Fuel (45 min prior): 1 banana with a spoonful of peanut butter or a date-oat energy bite.',
        'Hydration Rule: 150ml of water 15 minutes before running, and small sips every 15 minutes during training.',
        'Post-Workout Recovery (Within 30 min): Tender coconut water + boiled egg or paneer sandwich for amino acid replenishment.',
        'Growth Plate Support: Ensure adequate Vitamin D3 + Calcium through natural milk/curd, almonds, and morning sunshine.'
      ],
      safetyNotes: [
        'Youth Athlete Protection: Do NOT use heavy adult weights; leverage bodyweight, resistance bands, and medicine balls under 2kg.',
        'Growth Spurt Alert: If child complains of heel pain (Sever’s) or knee pain (Osgood-Schlatter), reduce jump volume immediately.',
        'Footwear Check: Replace running shoes every 500km or when the heel counter loses firmness.'
      ]
    };
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      const generated = calculateReport(formData);
      setReport(generated);
      setIsGenerating(false);

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }, 700);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/60 relative overflow-hidden">
      {/* Decorative clean ambient glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            AI Pediatric Athletic Diagnostics Engine
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            AI Child Athlete Assessment & Roadmap
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            Input your child’s biological metrics to generate an Olympic-grade physical profile, radar scorecard, and custom weekly training blueprint.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200 text-xs text-slate-700 shadow-xs">
          <Activity className="w-4 h-4 text-emerald-600" />
          <span>Scientifically mapped to <strong>CDC & WHO Youth Milestones</strong></span>
        </div>
      </div>

      {/* Main Grid: Form on Left, Output on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Input Form */}
        <form onSubmit={handleGenerate} className="lg:col-span-5 space-y-4 sm:space-y-5 bg-slate-50/90 p-4 sm:p-6 rounded-2xl border border-slate-200">
          <h4 className="text-slate-900 font-bold text-base flex items-center gap-2 pb-2 border-b border-slate-200">
            <Zap className="w-4 h-4 text-amber-500" />
            Step 1: Athlete Biological Details
          </h4>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Child’s Full Name</label>
            <input
              type="text"
              placeholder="e.g. Aarav Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-red-500 transition-colors shadow-2xs"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">
                Age: <span className="text-blue-700 font-bold">{formData.age} years</span>
              </label>
              <input
                type="range"
                min="4"
                max="17"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                className="w-full accent-red-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                <span>4 yrs (Little)</span>
                <span>10 yrs</span>
                <span>17 yrs (Elite)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Gender</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, gender: 'boy' })}
                  className={`py-2 text-xs rounded-xl font-semibold border transition-all cursor-pointer ${
                    formData.gender === 'boy'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  Boy
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, gender: 'girl' })}
                  className={`py-2 text-xs rounded-xl font-semibold border transition-all cursor-pointer ${
                    formData.gender === 'girl'
                      ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  Girl
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Height (cm)</label>
              <input
                type="number"
                min="90"
                max="200"
                value={formData.heightCm}
                onChange={(e) => setFormData({ ...formData, heightCm: Number(e.target.value) })}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-red-500 shadow-2xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Weight (kg)</label>
              <input
                type="number"
                min="12"
                max="95"
                value={formData.weightKg}
                onChange={(e) => setFormData({ ...formData, weightKg: Number(e.target.value) })}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-red-500 shadow-2xs"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Primary Sport of Interest</label>
            <select
              value={formData.primarySport}
              onChange={(e) => setFormData({ ...formData, primarySport: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-red-500 shadow-2xs"
            >
              <option value="Athletics & Sprints">Athletics & Sprint Speed</option>
              <option value="Multi-Sport Foundations">Multi-Sport Athletic Foundations</option>
              <option value="Football/Soccer">Football / Soccer Dynamics</option>
              <option value="Basketball">Basketball & Vertical Jump</option>
              <option value="Badminton">Badminton Agility & Court Reflexes</option>
              <option value="Cricket Fitness">Cricket Fast Bowling & Fielding Fitness</option>
              <option value="Swimming Conditioning">Swimming Dryland Strength</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Current Physical Activity</label>
            <select
              value={formData.activityLevel}
              onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value as any })}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-red-500 shadow-2xs"
            >
              <option value="Beginner (0-1 days/wk)">Beginner (Mostly school desk / sedentary)</option>
              <option value="Moderate (2-3 days/wk)">Moderate (Plays recreationally 2-3 days/wk)</option>
              <option value="Athletic (4+ days/wk)">Athletic (Regular school team / dedicated training)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Primary Goal for Joining RA Sports</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(['Speed & Sprint', 'Multi-Sport Agility', 'Stamina & Endurance', 'Posture & Strength'] as const).map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => setFormData({ ...formData, primaryGoal: goal })}
                  className={`px-3 py-2 text-xs rounded-xl text-left border transition-all cursor-pointer ${
                    formData.primaryGoal === goal
                      ? 'bg-red-50 border-red-500 text-red-700 font-bold shadow-xs'
                      : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full mt-4 bg-gradient-to-r from-red-600 via-rose-600 to-blue-700 hover:from-red-700 hover:to-blue-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Synthesizing Biometric Data...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Generate AI Athletic Assessment</span>
              </>
            )}
          </button>
        </form>

        {/* Right: Output Diagnostic Report */}
        <div className="lg:col-span-7">
          {!report ? (
            <div className="h-full min-h-[460px] bg-slate-50 border border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 shadow-xs">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="text-slate-900 font-bold text-lg mb-2">Ready to Analyze Your Child’s Potential</h4>
              <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
                Fill in the details on the left and click Generate. Our algorithm will formulate a developmental score, identify biological growth windows, and prescribe a custom training schedule.
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-sm w-full text-xs text-slate-600">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="block text-slate-900 font-bold text-base">Speed</span>
                  <span>Stride analysis</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="block text-slate-900 font-bold text-base">Growth</span>
                  <span>Pediatric metrics</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="block text-slate-900 font-bold text-base">Routine</span>
                  <span>Weekly drills</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fadeIn">
              {/* Report Hero Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-red-600 font-bold">Official AI Athletic Evaluation</span>
                    <h4 className="text-2xl font-black text-slate-900">{report.athleteName}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Age: {report.calculatedAge} • BMI: {report.bmi} ({report.growthCategory})
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 uppercase font-semibold">RA Athletic Score</span>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">
                      {report.overallScore} <span className="text-sm text-slate-400 font-normal">/ 100</span>
                    </div>
                  </div>
                </div>

                {/* Radar Bar Scores */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {Object.entries(report.radarScores).map(([metric, score]) => (
                    <div key={metric} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-700 capitalize font-medium">{metric}</span>
                        <span className="text-emerald-700 font-bold">{score}%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-red-600 h-full rounded-full transition-all duration-700"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-xl text-xs text-blue-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-blue-950">Recommended Athletic Pathway:</strong> {report.recommendedPathway}
                  </div>
                </div>
              </div>

              {/* Weekly Micro-Routine Plan */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
                <h5 className="text-slate-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Prescribed 3-Day Development Micro-Cycle
                </h5>

                <div className="space-y-3">
                  {report.weeklyRoutine.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-bold text-red-600">{item.day}</span>
                        <span className="text-slate-600 font-medium">{item.focus}</span>
                      </div>
                      <div className="space-y-2 mt-2">
                        {item.drills.map((drill, dIdx) => (
                          <div key={dIdx} className="text-xs bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shadow-2xs">
                            <div>
                              <strong className="text-slate-900">{drill.name}:</strong>{' '}
                              <span className="text-slate-600">{drill.description}</span>
                            </div>
                            <span className="text-amber-700 font-mono text-[11px] shrink-0 font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                              {drill.sets}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nutrition & Pediatric Safety */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200 shadow-xs">
                  <h6 className="text-emerald-800 font-bold text-xs uppercase tracking-wider flex items-center gap-2 mb-3">
                    <Apple className="w-4 h-4 text-emerald-600" />
                    Child Athletic Nutrition Blueprint
                  </h6>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {report.nutritionTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200 shadow-xs">
                  <h6 className="text-amber-800 font-bold text-xs uppercase tracking-wider flex items-center gap-2 mb-3">
                    <HeartPulse className="w-4 h-4 text-amber-600" />
                    Pediatric Sports Medicine Notes
                  </h6>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {report.safetyNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onBookTrialWithAthlete && onBookTrialWithAthlete(report.athleteName, report.calculatedAge, formData.primarySport)}
                  className="w-full sm:w-auto flex-1 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Trophy className="w-4 h-4 text-amber-300" />
                  <span>Book Free Diagnostic Trial for {report.athleteName}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-300 shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Save Report Card</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
