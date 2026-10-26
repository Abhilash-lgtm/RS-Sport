import React, { useState } from 'react';
import { Sparkles, Trophy, ArrowRight, Activity, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

interface HeroProps {
  onOpenTrialModal: () => void;
  onNavigateToAILab: () => void;
  onSelectProgramFilter?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTrialModal,
  onNavigateToAILab
}) => {
  const [selectedAge, setSelectedAge] = useState<string>('7-10');
  const [selectedSport, setSelectedSport] = useState<string>('athletics');

  const getQuickRecommendation = () => {
    if (selectedAge === '3-5') {
      return {
        title: 'Early Explorers & Gymnastics (Ages 3-5)',
        focus: 'Movement, balance, coordination, fun games and confidence',
        intensity: 'Gentle Play-Based (45 min sessions)'
      };
    } else if (selectedAge === '5-7') {
      return {
        title: 'Junior Sports & Cricket Foundation (Ages 5-7)',
        focus: 'Basic sports skills, teamwork and simple challenges',
        intensity: 'Foundation Conditioning (2-3x/week)'
      };
    } else if (selectedAge === '7-10') {
      return {
        title: 'Multi-Sport Development (Football • Athletics • Basketball)',
        focus: 'Sport-specific skills, fitness, technique and game understanding',
        intensity: 'Skill & Technique Mastery'
      };
    } else {
      return {
        title: 'Youth Athletics & Performance (Ages 10+)',
        focus: 'Skill progression, performance habits and advanced fundamentals',
        intensity: 'Competition & Performance'
      };
    }
  };

  const rec = getQuickRecommendation();

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/70 scroll-mt-24">
      {/* Background ambient clean gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-50/70 via-blue-50/50 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-100 via-rose-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge with Official Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-red-700 font-bold">RAISING ATHLETICS SPORTS</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">Building Active Kids</span>
            </div>

            {/* Kinetic Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Athletics Today, A{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-blue-700">
                Healthier Future
              </span>{' '}
              Tomorrow.
            </h1>

            {/* Slogan & Value Prop */}
            <p className="text-lg sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              At <strong className="text-slate-900">RA Sports (Raising Athletics Sports)</strong>, we believe every child deserves the opportunity to grow through sports, physical activity, and fun learning.
            </p>

            {/* 4 Pillars Highlight */}
            <div className="text-xs sm:text-sm font-bold text-red-600 tracking-wide uppercase">
              Fun • Fitness • Sports • Confidence — Helping Children Learn, Play & Grow
            </div>

            {/* Key Value Checks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fundamental Movement Skills (FMS)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Pre-Primary & School PE</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Sports Day Event Management</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold text-base py-4 px-8 rounded-2xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-3 cursor-pointer group hover:scale-105"
              >
                <Trophy className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                <span>Book Free Trial Diagnostic</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onNavigateToAILab}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-base py-4 px-7 rounded-2xl border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Sparkles className="w-5 h-5 text-red-600" />
                <span>AI Athletic Lab</span>
              </button>
            </div>

            {/* Trust Counter Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">9,450+</div>
                <div className="text-xs text-slate-500 font-medium">Active Kids Inspired</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-red-600">35+</div>
                <div className="text-xs text-slate-500 font-medium">Schools & Centers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">100%</div>
                <div className="text-xs text-slate-500 font-medium">Joyful Learning</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Matcher & Athletic Visual */}
          <div className="lg:col-span-5 space-y-5">
            {/* Visual Action Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/60 p-2.5 group">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src="/school-hero-1.jpg"
                  alt="RA Sports Kids Running Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Floating live biomechanics badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-xl text-xs flex items-center gap-2 text-slate-900 shadow-sm font-semibold">
                  <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span>Velocity: <strong className="text-slate-900">6.8 m/s</strong></span>
                </div>

                <div className="absolute top-4 right-4 bg-red-600 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-md">
                  CADENCE: 184 SPM
                </div>

                {/* Bottom title in image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-300">
                    RAISING ATHLETICS SPORTS
                  </span>
                  <h4 className="text-lg font-bold">Building Active Kids, Creating a Healthier Future</h4>
                </div>
              </div>

              {/* Interactive Child Program Quick Matcher */}
              <div className="p-4 sm:p-5 bg-slate-50/90 rounded-2xl border border-slate-200 mt-2 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Instant Program Matcher
                  </span>
                  <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-mono font-bold">
                    Step 1 of 2
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Child's Age Group</label>
                    <select
                      value={selectedAge}
                      onChange={(e) => setSelectedAge(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium focus:outline-none focus:border-red-500 shadow-2xs"
                    >
                      <option value="3-5">3–5 years (Movement & Games)</option>
                      <option value="5-7">5–7 years (Basic Sports Skills)</option>
                      <option value="7-10">7–10 years (Technique & Fitness)</option>
                      <option value="10+">10+ years (Performance Habits)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">Primary Interest</label>
                    <select
                      value={selectedSport}
                      onChange={(e) => setSelectedSport(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium focus:outline-none focus:border-red-500 shadow-2xs"
                    >
                      <option value="athletics">Athletics & Sprints</option>
                      <option value="football">Football / Soccer</option>
                      <option value="cricket">Cricket for Young Learners</option>
                      <option value="basketball">Basketball Fundamentals</option>
                      <option value="gymnastics">Gymnastics & Movement</option>
                      <option value="fitness">Fun Fitness & Active Play</option>
                    </select>
                  </div>
                </div>

                {/* Instant dynamic matched program preview */}
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs">{rec.title}</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      Matched
                    </span>
                  </div>
                  <p className="text-slate-500 text-[11px]">{rec.focus}</p>
                </div>

                <button
                  type="button"
                  onClick={onOpenTrialModal}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-red-600/20"
                >
                  <span>Lock In Free Trial For This Batch</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
