import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, X, Share2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/sportsData';
import { YouTubeIcon, InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

export const SocialFloatingBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-2xl w-72 text-slate-800 animate-fadeIn space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Connect with RA Sports
              </h5>
              <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Admissions Desk Online
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Direct WhatsApp Call */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs">
              <WhatsAppIcon className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-bold block text-emerald-950">WhatsApp Us</span>
              <span className="text-[11px] text-emerald-700 font-mono font-semibold">{CONTACT_INFO.phone}</span>
            </div>
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${CONTACT_INFO.rawPhone}`}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <span className="font-bold block text-slate-900">Direct Call</span>
              <span className="text-[11px] text-slate-500 font-mono font-medium">{CONTACT_INFO.phone}</span>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-xs truncate">
              <span className="font-bold block text-slate-900">Email Admissions</span>
              <span className="text-[11px] text-slate-500 truncate block font-medium">{CONTACT_INFO.email}</span>
            </div>
          </a>

          {/* Social Profiles Grid */}
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">
              Official Social Channels:
            </span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <a
                href={CONTACT_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 flex flex-col items-center gap-1 transition-colors"
                title="Watch Drills on YouTube"
              >
                <YouTubeIcon className="w-4 h-4 text-red-600" />
                <span className="text-[10px] font-bold">YouTube</span>
              </a>

              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 flex flex-col items-center gap-1 transition-colors"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-rose-600" />
                <span className="text-[10px] font-bold">Instagram</span>
              </a>

              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 flex flex-col items-center gap-1 transition-colors"
                title="Like on Facebook"
              >
                <FacebookIcon className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-bold">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Triggers */}
      <div className="flex items-center gap-2">
        {/* WhatsApp Direct Quick Button */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-3 px-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 cursor-pointer"
          title="Chat with RA Sports on WhatsApp"
        >
          <WhatsAppIcon className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Floating Toggle Hub */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg shadow-red-600/30 transition-all hover:scale-105 cursor-pointer"
          title="Contact & Social Channels"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};
