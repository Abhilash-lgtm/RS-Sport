import React from 'react';
import { Phone, Mail, MapPin, Trophy, ShieldCheck, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/sportsData';
import { YouTubeIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-0.5 border border-slate-200 overflow-hidden shadow-xs">
                <img
                  src="/logo.jpg"
                  alt="RA Sports Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="text-xl font-black text-slate-900 tracking-tight">RA SPORTS</span>
                <span className="block text-[11px] font-bold text-blue-600 tracking-wider uppercase">
                  Raising Athletics Sports
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-medium">
              <strong className="text-slate-800">STRONGER KIDS • HEALTHIER FUTURES.</strong> Premier youth athletics academy and in-school physical education organization in Hyderabad. Inspired by modern youth multi-sport models and backed by Olympic LTAD science and real-time AI biomechanics.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                POSH & POCSO Certified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-amber-500" />
                World Athletics & NIS Coaches
              </span>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-3">
              <span className="text-[11px] uppercase font-bold text-slate-400 block mb-2">
                Follow Official Channels:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={CONTACT_INFO.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-red-600 border border-slate-200 hover:border-red-200 transition-colors flex items-center gap-1.5 text-xs font-bold shadow-2xs"
                  title="Subscribe on YouTube"
                >
                  <YouTubeIcon className="w-4 h-4 text-red-600" />
                  <span>YouTube</span>
                </a>

                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-200 hover:border-rose-200 transition-colors flex items-center gap-1.5 text-xs font-bold shadow-2xs"
                  title="Follow on Instagram"
                >
                  <InstagramIcon className="w-4 h-4 text-rose-600" />
                  <span>Instagram</span>
                </a>

                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-200 transition-colors flex items-center gap-1.5 text-xs font-bold shadow-2xs"
                  title="Follow on Facebook"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Programs */}
          <div className="space-y-3">
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Athletic Programs</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#programs" className="hover:text-blue-600 transition-colors">Little Cubs (Ages 4-6)</a></li>
              <li><a href="#programs" className="hover:text-blue-600 transition-colors">Junior Explorers (Ages 7-10)</a></li>
              <li><a href="#programs" className="hover:text-blue-600 transition-colors">Youth Academy Pro (Ages 11-14)</a></li>
              <li><a href="#programs" className="hover:text-blue-600 transition-colors">Elite Sprint Squad (Ages 15-18)</a></li>
              <li><a href="#programs" className="hover:text-blue-600 transition-colors">In-School PE (The Fit Cubs)</a></li>
            </ul>
          </div>

          {/* Col 4: AI & Technology */}
          <div className="space-y-3">
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider">AI Sports Lab</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#ai-lab" className="hover:text-blue-600 transition-colors">AI Athletic Assessment</a></li>
              <li><a href="#ai-lab" className="hover:text-blue-600 transition-colors">Kinematic Pose Tracking</a></li>
              <li><a href="#ai-lab" className="hover:text-blue-600 transition-colors">Stride & Cadence Vision</a></li>
              <li><a href="#ai-lab" className="hover:text-blue-600 transition-colors">Coach RA 24/7 AI Chatbot</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">Vision & Mission</a></li>
            </ul>
          </div>

          {/* Col 5: Contact & Hyderabad Centers */}
          <div className="space-y-3">
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider">Direct Contact & Venues</h4>
            <div className="space-y-2.5 text-xs font-medium">
              <a
                href={`tel:${CONTACT_INFO.rawPhone}`}
                className="flex items-center gap-2 text-slate-800 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-bold">{CONTACT_INFO.phone}</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 hover:underline"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-slate-800 hover:text-blue-600 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>

              <div className="pt-1 space-y-1.5 text-slate-500 text-[11px]">
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Gachibowli Stadium Hub, Hyderabad</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Jubilee Hills & Madhapur, Hyderabad</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Kondapur & Kukatpally, Hyderabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RA Sports (Raising Athletics). All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-900">Child Safeguarding Code</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-900">Parent Handbook</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
