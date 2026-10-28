import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  onNext: () => void;
}

const BASE = import.meta.env.BASE_URL;

export const SpreadCover: React.FC<Props> = ({ onNext }) => {
  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-none sm:rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-10 md:p-12 border border-[#7A0C13]/10 relative overflow-hidden">
      {/* Top Header Row Matching Reference */}
      <div className="flex items-start justify-between border-b border-stone-200/60 pb-6 mb-8">
        <span className="font-editorial text-sm sm:text-base text-stone-600 tracking-wider">
          10
        </span>

        {/* Center Title with Sweeping Script and Brackets */}
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-1">
            <span className="font-flourish text-5xl sm:text-7xl text-[#7A0C13] -mr-1 leading-none select-none">
              I
            </span>
            <div className="text-left">
              <span className="block font-cormorant italic text-sm sm:text-lg text-stone-700 leading-tight">
                t’s officially your day
              </span>
              <span className="block font-editorial text-xs sm:text-sm text-[#7A0C13] uppercase tracking-widest font-semibold">
                Happy Birthday [ RURU ]
              </span>
            </div>
          </div>

          <p className="font-cormorant italic text-sm sm:text-base text-stone-500 mt-2">
            “somehow you are <span className="text-[#7A0C13] font-semibold">28</span> already”
          </p>
        </div>

        <span className="font-editorial text-sm sm:text-base text-stone-600 tracking-wider">
          28
        </span>
      </div>

      {/* Trio Photo Spread Matching Reference */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8 items-center">
        {/* Photo 1 */}
        <div className="relative group">
          <div className="photo-border-red overflow-hidden aspect-[3/4] bg-stone-100 shadow-md">
            <img
              src={`${BASE}images/photo-1.jpg`}
              alt="RuRu and Anarghya"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <span className="red-tag absolute top-3 left-3 shadow">
            alex's gallery's
          </span>
        </div>

        {/* Photo 2 (Center Hero) */}
        <div className="relative group">
          <div className="photo-border-red overflow-hidden aspect-[3/4] bg-stone-100 shadow-lg">
            <img
              src={`${BASE}images/photo-2.jpg`}
              alt="RuRu and Anarghya"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <span className="red-tag absolute bottom-4 right-3 shadow">
            my pretty boy
          </span>
        </div>

        {/* Photo 3 */}
        <div className="relative group">
          <div className="photo-border-red overflow-hidden aspect-[3/4] bg-stone-100 shadow-md">
            <img
              src={`${BASE}images/photo-3.jpg`}
              alt="RuRu and Anarghya"
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <span className="red-tag absolute top-3 right-3 shadow">
            chapter 28
          </span>
        </div>
      </div>

      {/* Bottom Subtitle & Navigation Matching Reference */}
      <div className="pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-sans gap-3">
        <span>page 1 of 5</span>
        <span className="font-cormorant italic text-sm text-[#7A0C13]">
          made with love by anarghya
        </span>
        <button
          onClick={onNext}
          className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider"
        >
          next →
        </button>
      </div>
    </section>
  );
};

