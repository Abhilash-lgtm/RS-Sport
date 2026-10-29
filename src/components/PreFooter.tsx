import React from 'react';
import { Send, Phone, MapPin } from 'lucide-react';

interface PreFooterProps {
  onOpenContact: () => void;
}

export const PreFooter: React.FC<PreFooterProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="bg-[#0b1e3b] text-white py-6 sm:py-7 border-t border-slate-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Paper airplane icon + Call to action text */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <Send className="w-6 h-6 text-sky-400 rotate-[-20deg]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                Let's Get Started!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                Give your child the gift of sports. Enroll today and be a part of the RA Sports family.
              </p>
            </div>
          </div>

          {/* Right side: Contact Us Button + Location Pin */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            
            {/* Crimson Contact Us Button */}
            <button
              onClick={onOpenContact}
              className="bg-[#96162e] hover:bg-[#7e1226] text-white px-6 sm:px-7 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-white/20 stroke-[2.2]" />
              <span>Contact Us</span>
            </button>

            {/* Location */}
            <div className="flex items-center gap-2 text-left">
              <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <div className="text-xs sm:text-sm font-bold leading-tight">
                <div>Hyderabad</div>
                <div className="text-slate-300 font-normal">& Nearby Areas</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
