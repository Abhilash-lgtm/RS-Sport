import React, { useState } from 'react';
import {
  Trophy,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Activity,
  Heart,
  Users,
  Compass,
  Star,
  Zap,
  Smile,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface KidsProgram {
  id: string;
  name: string;
  category: 'Team Sports' | 'Track & Field' | 'Movement & Gymnastics';
  ageRange: string;
  badge: string;
  badgeColor?: string;
  tagline: string;
  whatChildrenLearn: string;
  keySkills: string[];
  image: string;
  popular?: boolean;
  isNew?: boolean;
}

const KIDS_PROGRAMS: KidsProgram[] = [
  {
    id: 'football',
    name: 'Football',
    category: 'Team Sports',
    ageRange: 'Ages 5 – 14',
    badge: 'Popular Team Sport',
    tagline: 'Ball control, passing, dribbling, movement & teamwork',
    whatChildrenLearn: 'Ball control, passing, dribbling, movement, teamwork and game awareness.',
    keySkills: ['Ball Control', 'Passing', 'Dribbling', 'Movement Agility', 'Teamwork', 'Game Awareness'],
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'athletics',
    name: 'Athletics',
    category: 'Track & Field',
    ageRange: 'Ages 4 – 17',
    badge: 'Core Foundation',
    tagline: 'Running, jumping, agility, balance, speed & endurance',
    whatChildrenLearn: 'Running, jumping, agility, balance, coordination, speed and endurance.',
    keySkills: ['Sprint Mechanics', 'Long Jump', 'Agility Ladders', 'Dynamic Balance', 'Speed & Endurance', 'Cadence Rhythm'],
    image: '/school-hero-1.jpg',
    popular: true
  },
  {
    id: 'basketball',
    name: 'Basketball',
    category: 'Team Sports',
    ageRange: 'Ages 6 – 16',
    badge: 'Fast-Paced Action',
    tagline: 'Dribbling, passing, shooting, footwork & team play',
    whatChildrenLearn: 'Dribbling, passing, shooting, footwork, coordination and team play.',
    keySkills: ['Dribbling', 'Passing Technique', 'Shooting Basics', 'Defensive Footwork', 'Hand-Eye Coordination', 'Team Play'],
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cricket',
    name: 'Cricket',
    category: 'Team Sports',
    ageRange: 'Ages 5 – 15',
    badge: 'Dedicated Program',
    tagline: 'Batting basics, bowling, catching, throwing & fielding',
    whatChildrenLearn: 'Batting basics, bowling, catching, throwing, fielding and understanding the game.',
    keySkills: ['Grip & Stance', 'Batting Basics', 'Bowling Action', 'Catching & Throwing', 'Fielding Agility', 'Fair Play'],
    image: 'https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gymnastics',
    name: 'Gymnastics',
    category: 'Movement & Gymnastics',
    ageRange: 'Ages 3 – 10',
    badge: 'NEW PROGRAM',
    isNew: true,
    tagline: 'Building strength, flexibility, balance & confidence through movement',
    whatChildrenLearn: 'Build strength, flexibility, balance and confidence through fun, age-appropriate movement activities.',
    keySkills: ['Balance & Body Awareness', 'Flexibility & Mobility', 'Strength & Coordination', 'Basic Jumps & Landings', 'Obstacle Courses'],
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fun-fitness',
    name: 'Fun Fitness & Movement',
    category: 'Movement & Gymnastics',
    ageRange: 'Ages 3 – 8',
    badge: 'Early Years Favourite',
    tagline: 'Age-appropriate games, mobility, balance & active play',
    whatChildrenLearn: 'Age-appropriate games, mobility, balance, basic fitness and active play.',
    keySkills: ['Movement Games', 'Joint Mobility', 'Dynamic Balance', 'Active Play', 'Postural Alignment', 'Confidence'],
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sports-skill',
    name: 'Sports Skill Development',
    category: 'Movement & Gymnastics',
    ageRange: 'Ages 4 – 12',
    badge: 'Multi-Sport Literacy',
    tagline: 'Foundational movement skills that support confidence across sports',
    whatChildrenLearn: 'Foundational movement skills that support confidence across multiple sports.',
    keySkills: ['Hand-Eye Coordination', 'Multi-Sport Agility', 'Spatial Reasoning', 'Reaction Speed', 'Sportsmanship'],
    image: '/school-hero-3.jpg'
  }
];

const AGE_GROUPS = [
  {
    range: '3–5 years',
    title: 'Early Explorers (Preschool)',
    focus: 'Movement, balance, coordination, fun games and confidence',
    highlights: ['Locomotor literacy', 'Body awareness & balance', 'Joyful group play', 'Listening & spatial safety']
  },
  {
    range: '5–7 years',
    title: 'Junior Sports Foundation',
    focus: 'Basic sports skills, teamwork and simple challenges',
    highlights: ['Ball handling & throwing', 'Agility ladder basics', 'Cooperative team tasks', 'Rule comprehension']
  },
  {
    range: '7–10 years',
    title: 'Multi-Sport Development',
    focus: 'Sport-specific skills, fitness, technique and game understanding',
    highlights: ['Sprint mechanics & cuts', 'Sport-specific fundamentals', 'Cardio endurance', 'Strategic gameplay']
  },
  {
    range: '10+ years',
    title: 'Youth Athletics & Performance',
    focus: 'Skill progression, performance habits and advanced fundamentals',
    highlights: ['Positional mastery', 'Speed-power conditioning', 'Neuromuscular stability', 'Leadership & mindset']
  }
];

const SESSION_FLOW = [
  { step: '1', title: 'Welcome & Warm-Up', desc: 'Joint mobility, pulse raiser & greeting ritual to build positive readiness.' },
  { step: '2', title: 'Movement Game', desc: 'Dynamic play-based game reinforcing coordination, balance, and spatial agility.' },
  { step: '3', title: 'Skill Activity', desc: 'Focused sport technique practice (kicking, batting, jumping, or dribbling).' },
  { step: '4', title: 'Team Challenge', desc: 'Cooperative mini-game or friendly relay applying the newly learned skill.' },
  { step: '5', title: 'Cool-Down & Positive Feedback', desc: 'Stretching, breathing, high-fives, and recognizing effort & sportsmanship.' }
];

interface ProgramsSectionProps {
  onBookTrialForProgram: (programTitle: string) => void;
  onNavigateToAILab: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onBookTrialForProgram,
  onNavigateToAILab
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedGymnastics, setSelectedGymnastics] = useState(false);

  const filterTabs = [
    'All',
    'Team Sports',
    'Track & Field',
    'Movement & Gymnastics',
    'Age Groups & Structure'
  ];

  const filteredPrograms = activeFilter === 'All' || activeFilter === 'Age Groups & Structure'
    ? KIDS_PROGRAMS
    : KIDS_PROGRAMS.filter(p => p.category === activeFilter);

  return (
    <section id="programs" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Trophy className="w-3.5 h-3.5 text-blue-600" />
          <span>Kids Sports Programs</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Our Sports Programs for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
            Growing Champions
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Scientifically designed athletic development programs for children ages 3 to 17. Every session is planned around physical growth milestones to build speed, coordination, healthy habits, and lifelong confidence.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20 scale-[1.03]'
                  : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              {tab === 'All' ? 'All 7 Sports Programs' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* When "Age Groups & Structure" tab is clicked, show Age Groups & 5-Step Flow first */}
      {activeFilter === 'Age Groups & Structure' && (
        <div className="mb-16 space-y-12 animate-fadeIn">
          {/* Age Groups Table / Cards */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-black uppercase text-blue-700 tracking-wider">
                Age Groups & Developmental Focus
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Progression Tailored to Your Child's Stage
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Structured LTAD (Long-Term Athlete Development) milestones ensure age-appropriate motor literacy, neuromuscular coordination, and injury-free athletic progress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {AGE_GROUPS.map((ag, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block bg-blue-600 text-white text-xs font-black px-2.5 py-0.5 rounded-lg mb-2">
                      {ag.range}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5">{ag.title}</h4>
                    <p className="text-xs text-slate-700 font-semibold mb-3 leading-snug">
                      {ag.focus}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 space-y-1">
                    {ag.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Step Session Flow */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-black uppercase text-blue-700 tracking-wider">
                Session Structure
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Our Proven 5-Step Training Methodology
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Every session is structured to ensure maximum engagement, active fun, progressive skill building, and positive coaching feedback.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {SESSION_FLOW.map((s) => (
                <div
                  key={s.step}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center mb-3 shadow-2xs">
                      {s.step}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {s.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Program Visual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPrograms.map((prog) => {
          const isGymnastics = prog.id === 'gymnastics';

          return (
            <div
              key={prog.id}
              className={`group bg-white rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col overflow-hidden relative ${
                isGymnastics
                  ? 'border-purple-200 shadow-purple-500/5'
                  : 'border-slate-200/90 shadow-sm'
              }`}
            >
              {/* Card Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={prog.image}
                  alt={prog.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                {/* Badges Top */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-xs ${
                    isGymnastics
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/95 text-slate-900 border border-slate-200'
                  }`}>
                    {isGymnastics && <Sparkles className="w-3 h-3 text-amber-300" />}
                    {prog.badge}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5">
                  <span className="bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    {prog.ageRange}
                  </span>
                </div>

                {/* Title & Tagline in Image */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="text-2xl font-black tracking-tight">{prog.name}</h3>
                  <p className="text-xs text-slate-200 font-medium line-clamp-1 mt-0.5">
                    {prog.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* What Children Learn */}
                  <div className="mb-4">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                      What Children Learn
                    </span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      {prog.whatChildrenLearn}
                    </p>
                  </div>

                  {/* Key Skills Tags */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                      Key Skills Covered
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.keySkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onBookTrialForProgram(prog.name)}
                    className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isGymnastics
                        ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm shadow-purple-600/20'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20'
                    }`}
                  >
                    <span>{isGymnastics ? 'Discover Gymnastics →' : `Enrol in ${prog.name}`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onNavigateToAILab}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
                    title="Check AI Biometric Readiness"
                  >
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Multi-Sport Diagnostics Callout */}
      <div className="mt-14 bg-gradient-to-br from-blue-50/40 via-white to-slate-50/60 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-xs font-bold text-blue-700 uppercase tracking-wider border border-blue-200">
            <Star className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
            <span>Football • Athletics • Basketball • Cricket • Gymnastics</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Unsure which sport matches your child best?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal">
            Book a complimentary 60-minute diagnostic session. Our certified NIS and pediatric coaches assess natural movement literacy, coordination, and sport preferences!
          </p>
        </div>

        <button
          onClick={() => onBookTrialForProgram('Multi-Sport Diagnostic')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3.5 px-7 rounded-2xl shadow-sm shadow-blue-600/20 transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
        >
          Book Free Diagnostic Trial →
        </button>
      </div>
    </section>
  );
};
