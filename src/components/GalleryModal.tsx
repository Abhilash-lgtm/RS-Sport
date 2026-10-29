import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  currentIndex,
  setCurrentIndex,
}) => {
  const photos = [
    { src: '/custom/gallery_1_hd.jpg', title: 'Athletics & Agility Training', desc: 'Children developing speed and footwork with cone drills' },
    { src: '/custom/gallery_2_hd.jpg', title: 'Badminton Coaching', desc: 'Hand-eye coordination, joyful court movement, and racket skills' },
    { src: '/custom/gallery_3_hd.jpg', title: 'Team Camaraderie', desc: 'Young athletes learning sportsmanship and team values' },
    { src: '/custom/gallery_4_hd.jpg', title: 'Yoga & Flexibility', desc: 'Mindful breathing, core balance, and posture development' },
    { src: '/custom/gallery_5_hd.jpg', title: 'Basketball & Ball Skills', desc: 'Dribbling fundamentals, teamwork, and spatial awareness' },
  ];

  if (!isOpen) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const activePhoto = photos[currentIndex] || photos[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Image Display */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[70vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/10">
          <img
            src={activePhoto.src}
            alt={activePhoto.title}
            className="w-full h-full object-contain select-none"
          />

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#96162e] text-white transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-[#96162e] text-white transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Counter */}
        <div className="w-full mt-4 flex items-center justify-between text-white px-2">
          <div>
            <h4 className="font-bold text-base sm:text-lg text-white">{activePhoto.title}</h4>
            <p className="text-xs sm:text-sm text-slate-300">{activePhoto.desc}</p>
          </div>
          <div className="text-xs sm:text-sm font-semibold text-slate-400 bg-white/10 px-3 py-1 rounded-full">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="flex gap-2.5 mt-4 overflow-x-auto pb-2">
          {photos.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                currentIndex === idx ? 'border-[#96162e] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={p.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
