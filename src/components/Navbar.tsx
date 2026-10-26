import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Menu, X, Phone, ArrowRight, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/sportsData';
import { YouTubeIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

interface NavbarProps {
  onOpenTrialModal: () => void;
  onNavigateToAILab: () => void;
  onOpenDemoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal, onNavigateToAILab, onOpenDemoModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('#home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Kids Programs', href: '#programs' },
    { label: 'AI Athletic Lab', href: '#ai-lab', isAI: true },
  ];

  // Auto-sync active nav item on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveNav(navLinks[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isAI?: boolean) => {
    setActiveNav(href);
    setMobileMenuOpen(false);
    if (isAI) {
      onNavigateToAILab();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-slate-200/80 shadow-xs">
      {/* Top micro-announcement banner with verified contact and social channels */}
      <div className="bg-slate-50 text-slate-700 text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="bg-red-600 text-white font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider shrink-0">
              School Enquiries
            </span>
            <span className="font-semibold text-slate-800 hidden md:inline truncate">
              Building Active Kids, Creating a Healthier Future • Fun • Fitness • Sports • Confidence
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-slate-600 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.rawPhone}`}
              className="flex items-center gap-1 font-bold text-slate-900 hover:text-red-600 transition-colors text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hidden md:flex items-center gap-1 font-medium hover:text-red-600 transition-colors"
            >
              <Mail className="w-3 h-3 text-blue-600" /> {CONTACT_INFO.email}
            </a>

            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-slate-200">
              <a
                href={CONTACT_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-red-600 transition-colors"
                title="RA Sports YouTube"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-rose-600 transition-colors"
                title="RA Sports Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition-colors"
                title="RA Sports Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-4 lg:gap-8">
          {/* Left: Brand Logo & Title */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <a
              href="#home"
              onClick={() => setActiveNav('#home')}
              className="flex items-center gap-3 group cursor-pointer select-none"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xs group-hover:border-red-500 transition-all flex items-center justify-center p-1 shrink-0">
                <img
                  src="/logo.jpg"
                  alt="RA Sports Logo - Raising Athletics"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                    RA SPORTS
                  </span>
                  <span className="text-[10px] bg-red-50 border border-red-200 text-red-700 font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    HYDERABAD
                  </span>
                </div>
                <span className="text-[10px] tracking-wider font-semibold text-slate-500 uppercase truncate">
                  Raising Athletics Sports
                </span>
              </div>
            </a>
          </div>

          {/* Center: Desktop Nav Links - Centered & Justified Pill Dock */}
          <nav className="hidden lg:flex items-center justify-center p-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-2xs backdrop-blur-xs gap-1 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.isAI)}
                  className={`px-4 py-2 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/25 scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {link.isAI && (
                    <Sparkles
                      className={`w-3.5 h-3.5 ${isActive ? 'text-amber-200 animate-pulse' : 'text-red-600'}`}
                    />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="flex-1 hidden sm:flex items-center justify-end gap-2.5 xl:gap-3">
            {onOpenDemoModal && (
              <button
                onClick={onOpenDemoModal}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 px-4 py-2.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
              >
                <span>School Demo</span>
              </button>
            )}

            <button
              onClick={onOpenTrialModal}
              className="bg-gradient-to-r from-red-600 via-rose-600 to-blue-700 hover:from-red-700 hover:to-blue-800 text-white font-extrabold text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Book Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenTrialModal}
              className="bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-bold px-3 py-2 rounded-full sm:hidden shadow-xs cursor-pointer"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.isAI)}
                  className={`px-4 py-3 rounded-2xl text-sm font-bold flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isAI && (
                      <Sparkles className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-red-600'}`} />
                    )}
                    {link.label}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white/90' : 'text-slate-400'}`} />
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-1.5">
              <div className="font-bold text-slate-900">Direct Helpline:</div>
              <a href={`tel:${CONTACT_INFO.rawPhone}`} className="text-emerald-700 font-bold block">
                📞 {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-700 block truncate">
                ✉️ {CONTACT_INFO.email}
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-blue-700 hover:from-red-700 hover:to-blue-800 text-white font-extrabold py-3 px-4 rounded-2xl text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20 cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Book 100% Free Trial Diagnostic</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
