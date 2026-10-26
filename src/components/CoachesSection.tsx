import React from 'react';
import { COACHES } from '../data/sportsData';
import { Award, ShieldCheck } from 'lucide-react';

export const CoachesSection: React.FC = () => {
  return (
    <section id="coaches" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <Award className="w-3.5 h-3.5" />
          <span>Olympic & National Pedigree</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Mentored by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Elite Champions</span>
        </h2>
        <p className="mt-3 text-slate-600 text-base">
          Our mentors include former Olympiad runners, NIS Patiala specialists, and licensed pediatric physical therapists who know how to inspire and nurture young talent.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {COACHES.map((coach, idx) => (
          <div
            key={idx}
            className="group bg-white border border-slate-200 hover:border-red-400 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-md shadow-slate-200/50"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Coach</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-bold text-red-300 tracking-wider">
                  {coach.experience}
                </span>
                <h4 className="text-lg font-black">{coach.name}</h4>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-blue-700 font-bold">{coach.role}</p>
                <div className="mt-3 text-xs text-slate-600 space-y-1.5 font-medium">
                  <div className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold shrink-0">Credentials:</span>
                    <span className="text-slate-800">{coach.credentials}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <span className="text-slate-400 font-bold shrink-0">Specialty:</span>
                    <span className="text-red-700 font-semibold">{coach.specialty}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between font-medium">
                <span>Child Safe Certified</span>
                <span className="text-emerald-700 font-bold">100% Pass</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
