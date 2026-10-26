import React, { useState } from 'react';
import { AIAthleteAssessment } from './AIAthleteAssessment';
import { AIVisionPoseAnalyzer } from './AIVisionPoseAnalyzer';
import { AICoachAssistant } from './AICoachAssistant';
import { Sparkles, BrainCircuit, Eye, Bot } from 'lucide-react';

interface AIModuleContainerProps {
  onBookTrialWithAthlete?: (name: string, age: number, sport: string) => void;
  onOpenTrialModal?: () => void;
  onNavigateToSchedule?: () => void;
}

export const AIModuleContainer: React.FC<AIModuleContainerProps> = ({
  onBookTrialWithAthlete,
  onOpenTrialModal,
  onNavigateToSchedule
}) => {
  const [activeTab, setActiveTab] = useState<'assessment' | 'vision' | 'coach'>('assessment');

  return (
    <section id="ai-lab" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <BrainCircuit className="w-4 h-4 text-blue-600 animate-pulse" />
          <span>Next-Gen Sports Technology</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          RA Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">AI Athletic Lab</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          We combine Olympic pediatric physiology with real-time artificial intelligence to unlock every young athlete’s kinetic potential safely.
        </p>

        {/* Clean Pill Dock Tab selector */}
        <div className="mt-6 sm:mt-8 inline-flex p-1.5 bg-slate-100/90 rounded-2xl sm:rounded-full border border-slate-200/80 shadow-2xs backdrop-blur-xs gap-1 flex-wrap justify-center">
          <button
            onClick={() => setActiveTab('assessment')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer select-none ${
              activeTab === 'assessment'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25 scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'assessment' ? 'text-amber-200' : 'text-blue-600'}`} />
            <span>AI Assessment & Plan</span>
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer select-none ${
              activeTab === 'vision'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25 scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
            }`}
          >
            <Eye className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'vision' ? 'text-white' : 'text-emerald-600'}`} />
            <span>AI Pose & Form Vision</span>
          </button>

          <button
            onClick={() => setActiveTab('coach')}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer select-none ${
              activeTab === 'coach'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25 scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
            }`}
          >
            <Bot className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeTab === 'coach' ? 'text-white' : 'text-blue-600'}`} />
            <span>Coach RA (24/7 AI)</span>
          </button>
        </div>
      </div>

      {/* Render Active AI Module */}
      {activeTab === 'assessment' && (
        <AIAthleteAssessment onBookTrialWithAthlete={onBookTrialWithAthlete} />
      )}
      {activeTab === 'vision' && <AIVisionPoseAnalyzer />}
      {activeTab === 'coach' && (
        <AICoachAssistant
          onOpenTrialModal={onOpenTrialModal}
          onNavigateToSchedule={onNavigateToSchedule}
        />
      )}
    </section>
  );
};
