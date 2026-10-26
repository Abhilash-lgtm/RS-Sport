import React from 'react';
import { Sparkles, Calendar, Users, Trophy, CheckCircle2, ArrowRight, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/sportsData';
import { WhatsAppIcon } from './SocialIcons';

interface SchoolProgramsSectionProps {
  onOpenDemoModal: () => void;
}

export const SchoolProgramsSection: React.FC<SchoolProgramsSectionProps> = ({ onOpenDemoModal }) => {
  const services = [
    {
      id: 'kids-classes',
      title: "Kids' Sports Classes",
      subtitle: 'Fun Movement & Fitness Activities',
      desc: 'Engaging, play-based sports sessions designed to build fundamental locomotor skills, active habits, and daily excitement for physical movement.',
      highlights: [
        'Joyful obstacle courses & movement games',
        'Early childhood motor literacy (Ages 3-8)',
        'Kid-safe soft training gear and props',
        'Positive encouragement & confidence building'
      ],
      image: '/school-hero-1.jpg',
      badge: 'Preschool & Primary'
    },
    {
      id: 'sports-day',
      title: 'Sports Day Planning & Management',
      subtitle: 'Planning, Organizing & Coordinating School Events',
      desc: 'End-to-end management for school annual sports days, athletic meets, march-pasts, track events, medal ceremonies, and parent-child races.',
      highlights: [
        'Complete track & field schedule orchestration',
        'Trained sports officials and timekeepers',
        'Medals, podiums & sound system coordination',
        'Stress-free execution for school administration'
      ],
      image: '/school-hero-2.jpg',
      badge: 'Turnkey Event Solution'
    },
    {
      id: 'physical-education',
      title: 'Physical Education (Structured Curriculum)',
      subtitle: 'Age-Appropriate Activities for Growing Children',
      desc: 'Turnkey PE syllabus mapped to CBSE, ICSE, and IB boards. We supply certified physical education teachers, lesson plans, and digital fitness report cards.',
      highlights: [
        'Structured weekly lesson plans & motor drills',
        '100% active participation (zero idle waiting)',
        'Standardized term-end fitness assessments',
        'Digital athletic report cards for parents'
      ],
      image: '/school-hero-3.jpg',
      badge: 'CBSE / ICSE / IB Aligned'
    },
    {
      id: 'fun-games-fitness',
      title: 'Fun Games & Fitness',
      subtitle: 'Building Teamwork, Coordination & Confidence',
      desc: 'Energizing multi-sport circuits that cultivate leadership, sportsmanship, and mental resilience through cooperative gameplay.',
      highlights: [
        'Team cooperation and communication games',
        'Agility ladders, parachute play, reaction games',
        'Healthy cardio stamina & posture correction',
        'Inclusion-first philosophy where every child shines'
      ],
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
      badge: 'All Age Groups'
    }
  ];

  return (
    <section id="schools" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Trophy className="w-4 h-4 text-red-600" />
          <span>School & Preschool Sports Programs</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Helping Children Learn, Play & Grow Through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-blue-700">
            Physical Education & Sports
          </span>
        </h2>

        {/* 4 Pillars Badge row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-extrabold text-slate-800">
          <span className="bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
            🎉 Fun
          </span>
          <span className="text-slate-300">•</span>
          <span className="bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
            ⚡ Fitness
          </span>
          <span className="text-slate-300">•</span>
          <span className="bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
            🏆 Sports
          </span>
          <span className="text-slate-300">•</span>
          <span className="bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
            💪 Confidence
          </span>
        </div>

        <p className="mt-4 text-slate-600 text-base leading-relaxed">
          We work directly with schools and preschools across Hyderabad to provide high-quality physical education, specialized coaches, and unforgettable sports events.
        </p>
      </div>

      {/* Services Grid (4 Core Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Image Header */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-100">
              <img
                src={svc.image}
                alt={svc.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {svc.badge}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold text-red-200 block uppercase tracking-wider">
                  {svc.subtitle}
                </span>
                <h3 className="text-xl font-black">{svc.title}</h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {svc.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Program Highlights:
                  </span>
                  {svc.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5 cursor-pointer group-hover:translate-x-1 transition-transform"
                >
                  <span>Request Program Demo for Your School</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partner With RA Sports Clean White Card */}
      <div className="bg-gradient-to-br from-white via-red-50/20 to-white text-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-red-100 shadow-xl relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Users className="w-3.5 h-3.5 text-red-600" />
            <span>School & Preschool Enquiries Welcome</span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">RA Sports</span>
          </h3>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Bring exciting sports programs to your school or preschool. Contact us to discuss your requirements or arrange a free live demo session on your campus.
          </p>

          <div className="inline-block p-4 rounded-2xl bg-white border border-red-200 shadow-sm">
            <p className="text-lg sm:text-xl font-black text-red-600 tracking-wide">
              “Let's Make Every Child Active!”
            </p>
          </div>

          {/* Direct CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm py-4 px-8 rounded-2xl shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Arrange Free School Demo Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/918331097617?text=Hello%20RA%20Sports!%20We%20are%20a%20School/Preschool%20and%20would%20like%20to%20arrange%20a%20sports%20program%20demo.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-4 px-7 rounded-2xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp: 83310 97617</span>
            </a>

            <a
              href={`tel:${CONTACT_INFO.rawPhone}`}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm py-4 px-6 rounded-2xl border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Us Directly</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Certified Coaches & POSH Verified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-blue-600" />
              {CONTACT_INFO.email}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
