import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

// In exact visual sequence from top of page to bottom:
// 1. Home -> 2. Programs -> 3. About Us -> 4. Why RA Sports -> 5. Gallery -> 6. Contact
const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Programs', href: '#programs', id: 'programs' },
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Why RA Sports', href: '#why-ra-sports', id: 'why-ra-sports' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // If a user just clicked a nav button, don't let intermediate scroll events override the clicked state
      if (isClickScrollingRef.current) return;

      // If near bottom of the page, activate the last section (Contact)
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (atBottom) {
        setActiveSection('contact');
        return;
      }

      // Check sections from bottom to top in sequence
      const scrollPosition = window.scrollY + 130;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_LINKS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    isClickScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);

    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const header = document.querySelector('header');
      const headerOffset = header ? header.offsetHeight + 10 : 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/custom/logo-hires.png"
              alt="RA SPORTS - Play • Learn • Grow"
              className="h-14 sm:h-16 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-200"
            />
          </a>

          {/* Desktop Navigation Links in strict page sequence */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative py-2 text-[15px] font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#96162e] font-bold'
                      : 'text-[#0f264a] hover:text-[#96162e]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#96162e] rounded-full animate-in fade-in duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Get in Touch button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="bg-[#88132b] hover:bg-[#720f23] text-white px-5 sm:px-6 py-2.5 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.5 11.5c-1.4 0-2.8-.2-4.1-.7-.4-.1-.8 0-1.1.3l-1.8 1.8c-2.3-1.2-4.1-3-5.3-5.3l1.8-1.8c.3-.3.4-.7.3-1.1-.5-1.3-.7-2.7-.7-4.1 0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1 0 8.3 6.7 15 15 15 .6 0 1-.4 1-1v-2.5c0-.6-.4-1-1-1z" />
              </svg>
              <span>Get in Touch</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0f264a] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`px-3 py-2 text-base font-semibold rounded-md transition-colors ${
                  activeSection === link.id
                    ? 'text-[#96162e] bg-red-50/70 font-bold'
                    : 'text-[#0f264a] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-[#88132b] hover:bg-[#720f23] text-white px-5 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.5 11.5c-1.4 0-2.8-.2-4.1-.7-.4-.1-.8 0-1.1.3l-1.8 1.8c-2.3-1.2-4.1-3-5.3-5.3l1.8-1.8c.3-.3.4-.7.3-1.1-.5-1.3-.7-2.7-.7-4.1 0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1 0 8.3 6.7 15 15 15 .6 0 1-.4 1-1v-2.5c0-.6-.4-1-1-1z" />
                </svg>
                <span>Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
