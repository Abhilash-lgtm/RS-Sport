import React from 'react';
import { Brain, Users, Smile, Heart } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const points = [
    {
      title: 'Builds Physical Fitness',
      icon: (
        <svg className="w-7 h-7 text-[#96162e] fill-current" viewBox="0 0 24 24">
          <circle cx="13.5" cy="4" r="2.2" />
          <path d="M19 8.5l-4.2 1.3-1.8-2.6C12.6 6.5 11.7 6 10.7 6H9c-.6 0-1 .4-1 1s.4 1 1 1h1.4l1.3 1.9-2.7 2.1-3.2-.8c-.5-.1-1.1.2-1.2.7-.1.5.2 1.1.7 1.2l3.8 1c.4.1.8 0 1.2-.2l3-2.3 1 2.3-2.5 3.3c-.3.4-.3 1 0 1.4.2.3.6.4 1 .4.2 0 .4 0 .5-.2l3-4c.3-.4.3-.9.1-1.4l-1.3-3 2.5-.8 1.8 2.4c.3.4.9.5 1.3.2.4-.3.5-.9.2-1.3L19 8.5z" />
        </svg>
      ),
    },
    {
      title: 'Improves Focus & Discipline',
      icon: <Brain className="w-7 h-7 text-[#96162e] stroke-[1.8]" />,
    },
    {
      title: 'Encourages Teamwork',
      icon: <Users className="w-7 h-7 text-[#96162e] stroke-[1.8]" />,
    },
    {
      title: 'Boosts Confidence',
      icon: <Smile className="w-7 h-7 text-[#96162e] stroke-[1.8]" />,
    },
    {
      title: 'Creates Lifelong Healthy Habits',
      icon: <Heart className="w-7 h-7 text-[#96162e] stroke-[1.8]" />,
    },
  ];

  return (
    <section id="why-ra-sports" className="py-12 sm:py-16 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-8">
          <div className="text-[#96162e] font-bold tracking-widest text-xs sm:text-sm uppercase mb-1">
            WHY CHOOSE RA SPORTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0f264a]">
            More Than Just Sports
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 5 Icons in Horizontal Row */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-3 text-center">
              {points.map((pt, idx) => (
                <div key={idx} className="flex flex-col items-center p-2 group">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-rose-50/60 mb-2.5 group-hover:scale-110 transition-transform duration-200">
                    {pt.icon}
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#0f264a] leading-tight max-w-[120px]">
                    {pt.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Light blue cloud speech bubble with handwritten quote */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative p-6 sm:p-7 rounded-3xl bg-[#eaf4fe] border border-sky-100 shadow-sm max-w-sm rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="font-handwriting text-2xl sm:text-[28px] font-bold text-[#1e4a7a] leading-tight select-none">
                "Healthy Active Children Build a Brighter Future"
              </p>
              <div className="font-handwriting text-2xl text-[#1e4a7a] font-bold text-right mt-1">
                ♡
              </div>
              
              {/* Subtle underline stroke */}
              <div className="w-20 h-1 bg-[#2563eb]/30 rounded-full mt-2 ml-auto" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
