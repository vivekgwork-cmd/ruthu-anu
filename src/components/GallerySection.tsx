import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { sound } from '../utils/audio';

interface PhotoItem {
  id: number;
  src: string;
  tag: string;
  title: string;
  caption: string;
  aspect: string;
}

const photoData: PhotoItem[] = [
  {
    id: 1,
    src: '/images/photo-1.jpg',
    tag: 'PORTRAIT 01',
    title: 'The Favorite Laugh',
    caption: 'Every quiet moment with you feels like home. My favorite smile in the whole universe.',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    src: '/images/photo-2.jpg',
    tag: 'JOURNEY 02',
    title: 'Side By Side',
    caption: 'Hand in hand across every street and every journey. With you, everything feels right.',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 3,
    src: '/images/photo-3.jpg',
    tag: 'TENDERNESS 03',
    title: 'Safe With You',
    caption: 'The way I melt and turn into a kid when you shower your love on me. You are my safe place.',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 4,
    src: '/images/photo-4.jpg',
    tag: 'ARCHIVE 04',
    title: 'Unfiltered Joy',
    caption: 'All the laughs, the silly conversations, and the thousand little reasons I fall deeper.',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 5,
    src: '/images/photo-5.jpg',
    tag: 'FOREVER 05',
    title: 'Counting Down',
    caption: 'From "I never wanted to get married" to counting down every single second until I am your wife.',
    aspect: 'aspect-[3/4]',
  },
];

export const GallerySection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
    sound.playSparkle();
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const next = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % photoData.length);
      sound.playSparkle();
    }
  };

  const prev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + photoData.length) % photoData.length);
      sound.playSparkle();
    }
  };

  return (
    <section id="gallery-section" className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] bg-champagne-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-champagne-400 font-semibold block mb-3">
            Act III • The Visual Chronicle
          </span>
          <h2 className="font-italiana text-4xl sm:text-6xl text-stone-100 mb-4">
            Frames of <span className="font-editorial italic text-champagne-300">Us</span>
          </h2>
          <p className="font-cormorant italic text-lg sm:text-xl text-stone-400 max-w-md mx-auto">
            Memories etched into our story. Tap any photograph for high-resolution view.
          </p>
        </motion.div>

        {/* High-Fashion Editorial Staggered Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 w-full items-start">
          {photoData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer flex flex-col"
            >
              {/* Image Frame with Matte Border */}
              <div className="relative w-full overflow-hidden rounded-xl bg-noir-800 border border-white/10 group-hover:border-champagne-500/40 transition-all duration-500 shadow-2xl">
                <div className={`relative ${item.aspect} w-full overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-[105%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Hover view indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] bg-black/25">
                    <div className="p-3 rounded-full bg-noir-900/80 border border-champagne-500/50 text-champagne-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Metadata Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-noir-950/85 backdrop-blur-md border border-white/10 text-[9px] font-syne font-semibold tracking-[0.25em] text-champagne-400">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Minimalist Editorial Typography Below Image */}
              <div className="pt-4 px-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-editorial text-lg text-stone-100 italic">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-syne tracking-widest text-champagne-500">
                    2026
                  </span>
                </div>
                <p className="font-cormorant text-stone-400 text-sm italic leading-relaxed">
                  “{item.caption}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl"
          >
            {/* Top Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-noir-850 border border-white/10 text-stone-300 hover:text-champagne-400 hover:border-champagne-400 transition-colors z-50"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-noir-850/80 border border-white/10 text-stone-300 hover:text-champagne-400 hover:border-champagne-400 transition-colors z-50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-noir-850/80 border border-white/10 text-stone-300 hover:text-champagne-400 hover:border-champagne-400 transition-colors z-50"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center overflow-hidden"
            >
              <div className="relative max-h-[65vh] w-auto overflow-hidden rounded-xl border border-champagne-500/30 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                <img
                  src={photoData[selectedIdx].src}
                  alt={photoData[selectedIdx].title}
                  className="max-h-[65vh] w-auto object-contain bg-black"
                />
              </div>

              {/* Caption Card */}
              <div className="w-full text-center mt-6 px-4">
                <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-champagne-400 font-semibold block mb-2">
                  {photoData[selectedIdx].tag}
                </span>
                <p className="font-editorial italic text-xl sm:text-2xl text-stone-100 mb-2">
                  “{photoData[selectedIdx].caption}”
                </p>
                <p className="font-script text-2xl text-champagne-300">
                  Always by your side
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
