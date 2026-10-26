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
    <section id="ai-lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <BrainCircuit className="w-4 h-4 text-red-600 animate-pulse" />
          <span>Next-Gen Sports Technology</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          RA Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-blue-700">AI Athletic Lab</span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg">
          We combine Olympic pediatric physiology with real-time artificial intelligence to unlock every young athlete’s kinetic potential safely.
        </p>

        {/* Clean White Tab selector */}
        <div className="mt-8 inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setActiveTab('assessment')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'assessment'
                ? 'bg-white text-slate-900 shadow-md border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-red-600" />
            <span>AI Assessment & Plan</span>
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'vision'
                ? 'bg-white text-slate-900 shadow-md border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Eye className="w-4 h-4 text-emerald-600" />
            <span>AI Pose & Form Vision</span>
          </button>

          <button
            onClick={() => setActiveTab('coach')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'coach'
                ? 'bg-white text-slate-900 shadow-md border border-slate-200/80'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bot className="w-4 h-4 text-blue-600" />
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
