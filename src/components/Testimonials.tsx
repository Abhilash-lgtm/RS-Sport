import React, { useState } from 'react';
import { TESTIMONIALS, FAQ_DATA } from '../data/sportsData';
import { Star, Quote, ChevronDown, ChevronUp, Heart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const partnerSchools = [
    'Oakridge International School, Hyderabad',
    'Chirec International School, Hyderabad',
    'Hyderabad Public School (HPS)',
    'Delhi Public School, Hyderabad',
    'Silver Oaks International School',
    'Glendale Academy International'
  ];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Testimonials Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <Heart className="w-3.5 h-3.5" />
          <span>Real Families • Real Transformations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Parents & Athletes</span>
        </h2>
        <p className="mt-3 text-slate-600 text-base">
          Read how RA Sports has helped thousands of boys and girls build high stamina, correct posture, decrease screen addiction, and earn tournament podiums.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-slate-200 p-8 rounded-3xl flex flex-col justify-between hover:border-slate-300 transition-all shadow-md shadow-slate-200/50 relative"
          >
            <Quote className="w-10 h-10 text-slate-100 absolute top-6 right-6 pointer-events-none" />

            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                "{t.text}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
              {/* Stat highlight */}
              <div className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                <span className="text-slate-600 font-semibold">{t.metric}</span>
                <span className="text-emerald-700 font-bold font-mono">{t.improvementStat}</span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900">{t.parentName}</h4>
                <p className="text-xs text-red-600 font-medium">Parents of {t.childName}</p>
                <p className="text-[11px] text-slate-400">{t.school}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* School Partnerships Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-20 text-center shadow-sm">
        <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
          Trusted Institutional PE Curriculum Partner to Premier Schools
        </span>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {partnerSchools.map((school, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 font-semibold shadow-2xs"
            >
              🏫 {school}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Everything you need to know about joining RA Sports and attending your free trial.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-colors shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-red-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
