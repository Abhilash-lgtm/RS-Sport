import React from 'react';
import { ShieldCheck, Star, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Kids sitting together photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-slate-50">
              <img
                src="/custom/about_kids_hd.jpg"
                alt="RA Sports Young Athletes"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Center Column: Text & 3 Badges */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="text-[#96162e] font-bold tracking-widest text-xs sm:text-sm uppercase">
              ABOUT RA SPORTS
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0f264a] leading-tight">
              Nurturing Young Athletes
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong className="text-[#0f264a] font-bold">RA Sports</strong> is a dedicated children's sports coaching platform focused on building healthy, confident and active kids. We provide fun-filled, age-appropriate sports training under expert guidance, with a strong focus on physical fitness, teamwork and discipline.
            </p>

            {/* 3 Badges */}
            <div className="pt-2 grid grid-cols-3 gap-2 sm:gap-4">
              
              {/* Badge 1: Safe & Supportive Environment */}
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-red-50 text-[#96162e] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0f264a] leading-tight">
                  Safe & Supportive Environment
                </span>
              </div>

              {/* Badge 2: Experienced Coaches */}
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0f264a] leading-tight">
                  Experienced Coaches
                </span>
              </div>

              {/* Badge 3: Holistic Development */}
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-rose-50 text-[#96162e] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 stroke-[2]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0f264a] leading-tight">
                  Holistic Development
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Large RA SPORTS logo */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end">
            <div className="p-4 flex flex-col items-center">
              <img
                src="/custom/logo-hires.png"
                alt="RA SPORTS - Play • Learn • Grow"
                className="w-48 sm:w-56 lg:w-60 h-auto object-contain select-none"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
