import React from 'react';

interface ProgramsSectionProps {
  onSelectProgram?: (sportName: string) => void;
}

interface ProgramItem {
  name: string;
  image: string;
  badgeBg: 'crimson' | 'navy';
  subtext: string;
  icon: React.ReactNode;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const programs: ProgramItem[] = [
    {
      name: 'Athletics',
      image: '/custom/program_athletics_hd.jpg',
      badgeBg: 'crimson',
      subtext: 'Speed • Stamina • Confidence',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <circle cx="13.5" cy="4" r="2.2" />
          <path d="M19 8.5l-4.2 1.3-1.8-2.6C12.6 6.5 11.7 6 10.7 6H9c-.6 0-1 .4-1 1s.4 1 1 1h1.4l1.3 1.9-2.7 2.1-3.2-.8c-.5-.1-1.1.2-1.2.7-.1.5.2 1.1.7 1.2l3.8 1c.4.1.8 0 1.2-.2l3-2.3 1 2.3-2.5 3.3c-.3.4-.3 1 0 1.4.2.3.6.4 1 .4.2 0 .4 0 .5-.2l3-4c.3-.4.3-.9.1-1.4l-1.3-3 2.5-.8 1.8 2.4c.3.4.9.5 1.3.2.4-.3.5-.9.2-1.3L19 8.5z" />
        </svg>
      ),
    },
    {
      name: 'Badminton',
      image: '/custom/program_badminton_hd.jpg',
      badgeBg: 'navy',
      subtext: 'Agility • Focus • Fun',
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
          <circle cx="15.5" cy="8.5" r="5.5" />
          <line x1="11.5" y1="12.5" x2="4" y2="20" />
          <line x1="3" y1="19" x2="5" y2="21" />
          <path d="M13 6l5 5M12 9l3 3M15 4l3 3" />
        </svg>
      ),
    },
    {
      name: 'Yoga',
      image: '/custom/program_yoga_hd.jpg',
      badgeBg: 'crimson',
      subtext: 'Balance • Calm • Flexibility',
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
          <circle cx="12" cy="6" r="2.5" />
          <path d="M6 20c0-3 3-5 6-5s6 2 6 5" />
          <path d="M12 11v4" />
          <path d="M7 14l5-3 5 3" />
        </svg>
      ),
    },
    {
      name: 'Basketball',
      image: '/custom/program_basketball_hd.jpg',
      badgeBg: 'navy',
      subtext: 'Coordination • Teamwork • Skills',
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <path d="M5.6 5.6c4 3 4 9.8 0 12.8M18.4 5.6c-4 3-4 9.8 0 12.8" />
        </svg>
      ),
    },
    {
      name: 'Football',
      image: '/custom/program_football_hd.jpg',
      badgeBg: 'crimson',
      subtext: 'Discipline • Fitness • Team Spirit',
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <polygon points="12,8 14.5,10 13.5,13 10.5,13 9.5,10" fill="currentColor" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="14.5" y1="10" x2="19" y2="8.5" />
          <line x1="13.5" y1="13" x2="17" y2="17" />
          <line x1="10.5" y1="13" x2="7" y2="17" />
          <line x1="9.5" y1="10" x2="5" y2="8.5" />
        </svg>
      ),
    },
    {
      name: 'Gymnastics',
      image: '/custom/program_gymnastics_hd.jpg',
      badgeBg: 'navy',
      subtext: 'Strength • Flexibility • Balance',
      icon: (
        <svg className="w-4 h-4 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="2" />
          <path d="M4 11l4 2 4-3 4 3 4-2" />
          <path d="M12 10v6l-4 4M12 16l4 4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="programs" className="py-12 sm:py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="text-[#96162e] font-bold tracking-widest text-xs sm:text-sm uppercase mb-1">
            OUR PROGRAMS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#0f264a] leading-tight">
            Sports for Every Child
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal mt-2 max-w-xl mx-auto">
            Fun, safe and structured sports programs for preschool and school children.
          </p>
        </div>

        {/* 6 Programs Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-4.5">
          {programs.map((prog) => {
            const isCrimson = prog.badgeBg === 'crimson';
            return (
              <div
                key={prog.name}
                onClick={() => onSelectProgram && onSelectProgram(prog.name)}
                className="group flex flex-col items-center bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-center p-2 pb-3.5"
              >
                {/* Photo container */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-2.5">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Badge Pill */}
                <div
                  className={`w-full py-1.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-white font-bold text-xs sm:text-[13px] shadow-2xs ${
                    isCrimson ? 'bg-[#96162e]' : 'bg-[#0f264a]'
                  }`}
                >
                  <span className="flex-shrink-0">{prog.icon}</span>
                  <span className="truncate">{prog.name}</span>
                </div>

                {/* Subtext with bullets */}
                <p className="text-[11px] sm:text-[11.5px] font-medium text-slate-500 mt-2 leading-tight tracking-tight px-1">
                  {prog.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
