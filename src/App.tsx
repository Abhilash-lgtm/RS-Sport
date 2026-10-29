import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GallerySection } from './components/GallerySection';
import { PreFooter } from './components/PreFooter';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { GalleryModal } from './components/GalleryModal';

export const App: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>();
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryPhotoIndex, setGalleryPhotoIndex] = useState(0);

  const handleOpenContact = (programName?: string) => {
    setSelectedProgram(programName);
    setContactModalOpen(true);
  };

  const handleOpenPhotoIndex = (index: number) => {
    setGalleryPhotoIndex(index);
    setGalleryModalOpen(true);
  };

  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      const headerOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f264a] flex flex-col font-sans selection:bg-[#96162e] selection:text-white">
      {/* 1. Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-1">
        {/* 2. Hero Section: Healthy Kids, Stronger Tomorrow */}
        <Hero onExplorePrograms={scrollToPrograms} />

        {/* 3. OUR PROGRAMS: Sports for Every Child */}
        <ProgramsSection onSelectProgram={(prog) => handleOpenContact(prog)} />

        {/* 4. ABOUT RA SPORTS: Nurturing Young Athletes */}
        <AboutSection />

        {/* 5. WHY CHOOSE RA SPORTS: More Than Just Sports */}
        <WhyChooseSection />

        {/* 6. Our Gallery Strip */}
        <GallerySection
          onOpenGalleryModal={() => setGalleryModalOpen(true)}
          onOpenPhotoByIndex={handleOpenPhotoIndex}
        />

        {/* 7. Let's Get Started! Pre-Footer Banner */}
        <PreFooter onOpenContact={() => handleOpenContact()} />
      </main>

      {/* 8. Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Contact / Enrollment Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultProgram={selectedProgram}
      />

      {/* Interactive Gallery Lightbox Modal */}
      <GalleryModal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        currentIndex={galleryPhotoIndex}
        setCurrentIndex={setGalleryPhotoIndex}
      />
    </div>
  );
};

export default App;
