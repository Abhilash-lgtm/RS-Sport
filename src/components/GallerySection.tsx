import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';

interface GallerySectionProps {
  onOpenGalleryModal: () => void;
  onOpenPhotoByIndex: (index: number) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenGalleryModal,
  onOpenPhotoByIndex,
}) => {
  const photos = [
    { src: '/custom/gallery_1_hd.jpg', alt: 'Kids running on track with cones' },
    { src: '/custom/gallery_2_hd.jpg', alt: 'Girl smiling with badminton racket' },
    { src: '/custom/gallery_3_hd.jpg', alt: 'Boys in RA Sports shirts' },
    { src: '/custom/gallery_4_hd.jpg', alt: 'Girl doing yoga pose' },
    { src: '/custom/gallery_5_hd.jpg', alt: 'Kids playing basketball' },
  ];

  return (
    <section id="gallery" className="py-8 bg-white scroll-mt-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        
        {/* Full width row container with rounded corners and overflow hidden */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          
          {/* 5 Photos */}
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => onOpenPhotoByIndex(index)}
              className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-48 overflow-hidden bg-slate-100 cursor-pointer group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs transition-opacity">
                  View
                </span>
              </div>
            </div>
          ))}

          {/* 6th Item: Crimson Box for Our Gallery */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 bg-[#88132b] text-white p-5 sm:p-6 flex flex-col justify-between items-start">
            <div className="space-y-2">
              <Camera className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] text-white/90" />
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                  Our Gallery
                </h3>
                <p className="text-xs sm:text-[13px] text-rose-100/90 font-medium leading-snug mt-1">
                  Moments of fun, fitness and growth!
                </p>
              </div>
            </div>

            <div className="pt-4 w-full">
              <button
                onClick={onOpenGalleryModal}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#88132b] px-4 py-2 rounded-full font-bold text-xs sm:text-[13px] inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
              >
                <span>View Photos</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
