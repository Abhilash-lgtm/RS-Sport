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
  const [activeNav, setActiveNav] = useState<string>('#schools');

  const navLinks = [
    { label: 'Schools & Preschools', href: '#schools' },
    { label: 'About Us', href: '#about' },
    { label: 'Kids Programs', href: '#programs' },
    { label: 'AI Athletic Lab', href: '#ai-lab', isAI: true },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Reviews & FAQs', href: '#reviews' },
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
      <div className="bg-slate-50 text-slate-700 text-[11px] sm:text-xs py-1.5 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
              School Enquiries Welcome
            </span>
            <span className="font-semibold text-slate-800">
              Building Active Kids, Creating a Healthier Future • Fun • Fitness • Sports • Confidence
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <a
              href={`tel:${CONTACT_INFO.rawPhone}`}
              className="flex items-center gap-1 font-bold text-slate-900 hover:text-red-600 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-600" /> {CONTACT_INFO.phone}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand Title */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs group-hover:border-red-500 transition-all flex items-center justify-center p-0.5">
              <img
                src="/logo.jpg"
                alt="RA Sports Logo - Raising Athletics"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                  RA SPORTS
                </span>
                <span className="text-[10px] bg-red-50 border border-red-200 text-red-700 font-bold px-1.5 py-0.5 rounded">
                  HYDERABAD
                </span>
              </div>
              <span className="text-[10px] tracking-wider font-semibold text-slate-500 uppercase">
                Raising Athletics Sports
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Changes color on click & active state */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.isAI)}
                  className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer select-none ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/25 scale-[1.03]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/90'
                  }`}
                >
                  {link.isAI && (
                    <Sparkles
                      className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-red-600'}`}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenDemoModal && (
              <button
                onClick={onOpenDemoModal}
                className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 px-3 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer shadow-xs"
              >
                <span>School Demo</span>
              </button>
            )}

            <button
              onClick={onOpenTrialModal}
              className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-md shadow-red-600/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
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
              className="bg-red-600 text-white text-xs font-bold px-3 py-2 rounded-xl sm:hidden"
            >
              Free Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeNav === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.isAI)}
                  className={`px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isAI && (
                      <Sparkles className={`w-4 h-4 ${isActive ? 'text-white' : 'text-red-600'}`} />
                    )}
                    {link.label}
                  </span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white/80' : 'text-slate-400'}`} />
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
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
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md shadow-red-600/20"
            >
              <Trophy className="w-4 h-4" />
              <span>Book 100% Free Trial Diagnostic</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
