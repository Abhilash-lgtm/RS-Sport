import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SchoolProgramsSection } from './components/SchoolProgramsSection';
import { AboutSection } from './components/AboutSection';
import { AIModuleContainer } from './components/AILab/AIModuleContainer';
import { ProgramsSection } from './components/ProgramsSection';
import { Footer } from './components/Footer';
import { TrialBookingModal } from './components/TrialBookingModal';
import { SchoolDemoModal } from './components/SchoolDemoModal';
import { SocialFloatingBar } from './components/SocialFloatingBar';

export const App: React.FC = () => {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedProgramForTrial, setSelectedProgramForTrial] = useState<string | undefined>();
  const [prefilledAthlete, setPrefilledAthlete] = useState<
    { name: string; age: number; sport: string } | undefined
  >();

  const handleOpenTrial = (programName?: string) => {
    setSelectedProgramForTrial(programName);
    setPrefilledAthlete(undefined);
    setTrialModalOpen(true);
  };

  const handleBookTrialWithAthlete = (name: string, age: number, sport: string) => {
    setPrefilledAthlete({ name, age, sport });
    setSelectedProgramForTrial(sport);
    setTrialModalOpen(true);
  };

  const scrollToAILab = () => {
    const el = document.getElementById('ai-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white flex flex-col font-sans relative">
      {/* Top Sticky Navbar with dynamic active color-change navigation */}
      <Navbar
        onOpenTrialModal={() => handleOpenTrial()}
        onNavigateToAILab={scrollToAILab}
        onOpenDemoModal={() => setDemoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenTrialModal={() => handleOpenTrial()}
          onNavigateToAILab={scrollToAILab}
        />

        {/* School & Preschool Sports Programs (Primary Front Page Focus) */}
        <SchoolProgramsSection onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* Official About Us Section */}
        <AboutSection onOpenTrialModal={() => handleOpenTrial()} />

        {/* AI Athletic Lab */}
        <AIModuleContainer
          onBookTrialWithAthlete={handleBookTrialWithAthlete}
          onOpenTrialModal={() => handleOpenTrial()}
          onNavigateToSchedule={scrollToPrograms}
        />

        {/* Core Athletic Programs */}
        <ProgramsSection
          onBookTrialForProgram={(prog) => handleOpenTrial(prog)}
          onNavigateToAILab={scrollToAILab}
        />
      </main>

      {/* Clean Modern Footer */}
      <Footer />

      {/* Floating WhatsApp and Contact Speed-Dial */}
      <SocialFloatingBar />

      {/* Free Trial Registration Modal */}
      <TrialBookingModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        prefilledProgram={selectedProgramForTrial}
        prefilledAthlete={prefilledAthlete}
      />

      {/* School Demo Session Request Modal */}
      <SchoolDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
};

export default App;
