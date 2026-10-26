import React from 'react';
import { Target, Compass, Award, Users, Heart, Sparkles, CheckCircle2, ArrowRight, Activity, CalendarCheck, ShieldCheck, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/sportsData';

interface AboutSectionProps {
  onOpenTrialModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenTrialModal }) => {
  const pillars = [
    {
      title: 'Age-Appropriate Warm-Ups & Fitness',
      desc: 'Dynamic motor prep, pediatric flexibility, and joyful movement games engineered for developing joints.',
      icon: <Activity className="w-5 h-5 text-blue-600" />
    },
    {
      title: 'Fundamental Movement Skills (FMS)',
      desc: 'Developing vital agility, balance, coordination, galloping, hopping, and spatial navigation.',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />
    },
    {
      title: 'Pre-Primary & School PE Programs',
      desc: 'Structured physical education curricula turning daily school sessions into exciting learning adventures.',
      icon: <Users className="w-5 h-5 text-indigo-600" />
    },
    {
      title: 'Sports Day Event Management',
      desc: 'Turnkey organization of annual school sports days, track meets, march-pasts, and athletic carnivals.',
      icon: <CalendarCheck className="w-5 h-5 text-emerald-600" />
    }
  ];

  const lifeSkills = [
    'Coordination',
    'Balance & Agility',
    'Teamwork',
    'Discipline',
    'Leadership',
    'Self-Confidence'
  ];

  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Heart className="w-4 h-4 text-blue-600" />
          <span>About Us — Raising Athletics Sports</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Building Active Kids,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Creating a Healthier Future.
          </span>
        </h2>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
          At <strong className="text-slate-900">RA Sports (Raising Athletics Sports)</strong>, we believe that every child deserves the opportunity to grow through sports, physical activity, and fun learning.
        </p>
      </div>

      {/* Main Grid: Story & Vision on Left, What We Offer on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Vision, Mission & Philosophy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/50 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              Our Philosophy & Calling
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Our mission is to build a healthy, active, and confident generation by providing engaging sports and physical education programs, especially for pre-primary and school children.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              We work with schools and preschools across Hyderabad to make physical education an enjoyable and meaningful part of every child's daily learning experience.
            </p>

            {/* Life Skills Badges */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Core Life Skills Developed in Every Session:
              </span>
              <div className="flex flex-wrap gap-2">
                {lifeSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-50 text-slate-800 font-semibold px-3 py-1.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50/70 p-6 rounded-3xl border border-blue-200 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-blue-700 font-mono">
                Our Vision
              </span>
              <h4 className="text-base font-bold text-slate-900">
                To create a healthier future by inspiring every child to move, play, learn, and grow.
              </h4>
            </div>

            <div className="bg-indigo-50/70 p-6 rounded-3xl border border-indigo-200 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-indigo-700 font-mono">
                Our Mission
              </span>
              <h4 className="text-base font-bold text-slate-900">
                To make sports and physical fitness accessible, enjoyable, and beneficial for every child.
              </h4>
            </div>
          </div>
        </div>

        {/* Right Column: Key Offerings Grid */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-lg font-bold text-slate-900">
                What RA Sports Delivers
              </h3>
              <span className="text-xs text-blue-700 font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                Pre-Primary to High School
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2.5 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                    {p.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* School Partnership CTA card */}
            <div className="bg-white p-5 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
              <div>
                <h5 className="text-sm font-bold text-slate-900">Are you a School or Preschool Principal?</h5>
                <p className="text-xs text-slate-500 font-medium">
                  Partner with RA Sports for turnkey PE curricula and Sports Day event management.
                </p>
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email}?subject=School%20PE%20Partnership%20Inquiry%20-%20RA%20Sports`}
                className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-xs"
              >
                Inquire for School
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Official Tagline & Motto Card - Clean Light Design */}
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200 text-slate-900 p-6 sm:p-12 rounded-3xl shadow-sm text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-[11px] uppercase tracking-widest font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full shadow-2xs font-mono">
            OUR OFFICIAL TAGLINE
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
            “Athletics Today, A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500">
              Healthier Future
            </span>{' '}
            Tomorrow.”
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
            RA Sports — Raising Athletics Sports. Building Active Kids, Creating a Healthier Future.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenTrialModal}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm py-3.5 px-7 rounded-xl transition-all cursor-pointer shadow-sm shadow-blue-600/20 hover:shadow-md flex items-center gap-2 hover:scale-105"
            >
              <span>Book a Free Diagnostic Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${CONTACT_INFO.rawPhone}`}
              className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-all border border-slate-300 shadow-2xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Us: {CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
