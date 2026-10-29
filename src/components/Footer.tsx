import React from 'react';

interface FooterProps {
  onOpenContact: () => void;
}

const FOOTER_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Programs', href: '#programs', id: 'programs' },
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Why RA Sports', href: '#why-ra-sports', id: 'why-ra-sports' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();

    if (id === 'contact') {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        const headerOffset = 90;
        const elementPosition = contactEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else {
        onOpenContact();
      }
      return;
    }

    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#06152a] text-white pt-10 pb-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo | Nav Links | Social Icons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-slate-800/60 pb-8">
          
          {/* Left: White Logo */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home', 'home')}
              className="cursor-pointer"
            >
              <img
                src="/custom/logo-white.png"
                alt="RA SPORTS - Play • Learn • Grow"
                className="h-12 sm:h-14 w-auto object-contain hover:opacity-95 transition-opacity"
              />
            </a>
          </div>

          {/* Center: Nav links in exact sequence */}
          <div className="md:col-span-6 flex flex-wrap justify-center items-center gap-5 sm:gap-7">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.id)}
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Social Icons (Instagram, Facebook, YouTube) */}
          <div className="md:col-span-3 flex justify-center md:justify-end items-center gap-3.5">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#96162e] flex items-center justify-center transition-colors text-white"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#96162e] flex items-center justify-center transition-colors text-white"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.597 0 9 1.582 9 4.615V8z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#96162e] flex items-center justify-center transition-colors text-white"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Row: Copyright | Play • Learn • Grow ♡ */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          <div className="text-xs text-slate-400 font-medium">
            © 2025 RA Sports. All rights reserved.
          </div>

          <div className="font-handwriting text-xl sm:text-2xl text-slate-200 font-bold tracking-wide select-none">
            Play • Learn • Grow ♡
          </div>

        </div>

      </div>
    </footer>
  );
};
