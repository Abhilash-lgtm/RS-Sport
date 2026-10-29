import React from 'react';
import { ArrowRight, Brain, Users, Smile } from 'lucide-react';

interface HeroProps {
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20">
      
      {/* Light artistic cyan / sky watercolor splash accent at top left behind heading */}
      <div 
        className="absolute top-0 left-0 w-[420px] h-[340px] pointer-events-none opacity-45 -z-10"
        style={{
          background: 'radial-gradient(ellipse at 15% 25%, rgba(186, 230, 253, 0.7) 0%, rgba(224, 242, 254, 0.4) 45%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & Call to Action & 4 Pillars */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-left">
            
            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-[#0f264a] leading-[1.08]">
                Healthy Kids
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-[#96162e] leading-[1.08]">
                Stronger Tomorrow
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-slate-700 text-base sm:text-lg lg:text-xl font-medium max-w-lg leading-relaxed">
              Sports builds confidence, character and a healthier future.
            </p>

            {/* Action Button: Explore Our Programs */}
            <div className="pt-1">
              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center gap-2 bg-[#96162e] hover:bg-[#7e1226] text-white px-7 sm:px-8 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* 4 Feature Badges (Fitness, Focus, Teamwork, Happiness) */}
            <div className="pt-2 sm:pt-4">
              <div className="flex items-center gap-6 sm:gap-9 flex-wrap">
                
                {/* 1. Fitness */}
                <div className="flex flex-col items-center gap-1.5 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-slate-200/90 flex items-center justify-center text-[#0f264a] group-hover:border-[#96162e] group-hover:text-[#96162e] transition-colors shadow-2xs bg-white">
                    {/* Runner SVG Icon */}
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <circle cx="13.5" cy="4" r="2.2" />
                      <path d="M19 8.5l-4.2 1.3-1.8-2.6C12.6 6.5 11.7 6 10.7 6H9c-.6 0-1 .4-1 1s.4 1 1 1h1.4l1.3 1.9-2.7 2.1-3.2-.8c-.5-.1-1.1.2-1.2.7-.1.5.2 1.1.7 1.2l3.8 1c.4.1.8 0 1.2-.2l3-2.3 1 2.3-2.5 3.3c-.3.4-.3 1 0 1.4.2.3.6.4 1 .4.2 0 .4 0 .5-.2l3-4c.3-.4.3-.9.1-1.4l-1.3-3 2.5-.8 1.8 2.4c.3.4.9.5 1.3.2.4-.3.5-.9.2-1.3L19 8.5z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#0f264a]">Fitness</span>
                </div>

                {/* 2. Focus */}
                <div className="flex flex-col items-center gap-1.5 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-slate-200/90 flex items-center justify-center text-[#96162e] group-hover:scale-105 transition-all shadow-2xs bg-white">
                    <Brain className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#0f264a]">Focus</span>
                </div>

                {/* 3. Teamwork */}
                <div className="flex flex-col items-center gap-1.5 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-slate-200/90 flex items-center justify-center text-[#0f264a] group-hover:border-[#96162e] group-hover:text-[#96162e] transition-colors shadow-2xs bg-white">
                    <Users className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#0f264a]">Teamwork</span>
                </div>

                {/* 4. Happiness */}
                <div className="flex flex-col items-center gap-1.5 group cursor-default">
                  <div className="w-12 h-12 rounded-full border border-slate-200/90 flex items-center justify-center text-[#96162e] group-hover:scale-105 transition-all shadow-2xs bg-white">
                    <Smile className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#0f264a]">Happiness</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Hero Kids & Coach Photo with Overlay & Angle Ribbon */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              
              {/* Main Photo */}
              <img
                src="/custom/hero_kids_hd.jpg"
                alt="RA Sports children and coach"
                className="w-full h-auto object-cover select-none"
              />

              {/* Decorative Maroon Ribbon Accent on Top Right */}
              <div 
                className="absolute top-0 right-0 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, #96162e 50%)'
                }}
              />

              {/* Handwritten script overlay: "Small Steps... Big Dreams... ♡" */}
              <div className="absolute bottom-5 sm:bottom-8 right-5 sm:right-9 z-10 pointer-events-none text-right">
                <div className="font-handwriting text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-wide leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] -rotate-3 select-none">
                  Small Steps...
                  <br />
                  <span className="inline-block mt-1">Big Dreams... ♡</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
