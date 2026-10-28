import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { sound } from '../utils/audio';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

interface PhotoItem {
  id: number;
  src: string;
  tag: string;
  caption: string;
  subtitle: string;
}

const BASE = import.meta.env.BASE_URL;

const galleryData: PhotoItem[] = [
  {
    id: 1,
    src: `${BASE}images/photo-1.jpg`,
    tag: "alex's gallery's",
    caption: '“Every quiet moment with you feels like home. My favorite laugh in the whole universe.”',
    subtitle: 'My favorite smile',
  },
  {
    id: 2,
    src: `${BASE}images/photo-2.jpg`,
    tag: 'together everywhere',
    caption: '“Hand in hand across every journey. With you, every single destination feels magical.”',
    subtitle: 'Side by side',
  },
  {
    id: 3,
    src: `${BASE}images/photo-3.jpg`,
    tag: 'my safe place',
    caption: '“The way I melt and turn into a kid when you shower your love on me. You are my safe harbor.”',
    subtitle: 'Purest comfort',
  },
  {
    id: 4,
    src: `${BASE}images/photo-4.jpg`,
    tag: 'unfiltered joy',
    caption: '“All the laughs, the silly conversations, and the thousand little reasons I fall deeper.”',
    subtitle: 'Endless laughter',
  },
  {
    id: 5,
    src: `${BASE}images/photo-5.jpg`,
    tag: 'forever mine',
    caption: '“From ‘I never wanted to get married’ to counting down every second until I am your wife.”',
    subtitle: 'My forever fiancé',
  },
];

export const SpreadGallery: React.FC<Props> = ({ onBack, onNext }) => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openPhoto = (idx: number) => {
    setLightboxIdx(idx);
    sound.playSparkle();
  };

  const closePhoto = () => {
    setLightboxIdx(null);
  };

  const next = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % galleryData.length);
      sound.playSparkle();
    }
  };

  const prev = () => {
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + galleryData.length) % galleryData.length);
      sound.playSparkle();
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-none sm:rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-10 md:p-12 border border-[#7A0C13]/10 relative overflow-hidden">
      {/* Top Header Row matching Reference */}
      <div className="flex items-center justify-between border-b border-stone-200/60 pb-4 mb-8 text-xs font-sans text-stone-500">
        <span>our story</span>
        <span className="font-editorial text-sm sm:text-base text-[#7A0C13] tracking-wide">
          ruru’s gallery [ 2026 ]
        </span>
        <span>chapter 28</span>
      </div>

      {/* Ribbon Title */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1">
          <span className="font-flourish text-4xl sm:text-6xl text-[#7A0C13]">
            Photographs
          </span>
          <span className="font-cormorant italic text-lg sm:text-2xl text-stone-700">
            of the two of us
          </span>
        </div>
        <p className="font-sans text-[11px] text-stone-400 uppercase tracking-widest mt-1">
          tap any frame to view in high resolution
        </p>
      </div>

      {/* Grid of Photos with Red Border and Red Tags matching reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
        {galleryData.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => openPhoto(idx)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative photo-border-red overflow-hidden aspect-[4/5] bg-stone-100 shadow-md">
              <img
                src={item.src}
                alt={item.subtitle}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />

              {/* Red Tag matching Reference */}
              <span className="red-tag absolute bottom-3 left-3 shadow">
                {item.tag}
              </span>

              {/* View Icon Overlay */}
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-[#7A0C13]" />
              </div>
            </div>

            {/* Caption below frame */}
            <div className="pt-3 px-1 text-center">
              <p className="font-editorial text-xs font-semibold text-[#7A0C13] tracking-wide mb-1">
                {item.subtitle}
              </p>
              <p className="font-cormorant italic text-xs text-stone-600 leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Pagination matching Reference */}
      <div className="pt-6 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500 font-sans">
        <button onClick={onBack} className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider">
          ← back
        </button>
        <span>page 4 of 5</span>
        <button onClick={onNext} className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider">
          next →
        </button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <button
              onClick={closePhoto}
              className="absolute top-6 right-6 p-2 rounded-full bg-white text-[#7A0C13] shadow z-50"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 p-2 rounded-full bg-white text-[#7A0C13] shadow z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 p-2 rounded-full bg-white text-[#7A0C13] shadow z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-lg w-full bg-white p-4 photo-border-red shadow-2xl"
            >
              <div className="aspect-[4/5] w-full overflow-hidden mb-3 bg-stone-100">
                <img
                  src={galleryData[lightboxIdx].src}
                  alt={galleryData[lightboxIdx].subtitle}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center px-2">
                <span className="red-tag mb-2">
                  {galleryData[lightboxIdx].tag}
                </span>
                <p className="font-editorial text-sm sm:text-base text-[#7A0C13] italic">
                  {galleryData[lightboxIdx].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

