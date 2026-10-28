import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/audio';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

interface Track {
  id: number;
  label: string;
  coverImage: string;
  subtitle: string;
  quote: string;
  note: string;
}

const BASE = import.meta.env.BASE_URL;

const tracks: Track[] = [
  {
    id: 1,
    label: 'Track 01',
    coverImage: `${BASE}images/photo-1.jpg`,
    subtitle: 'Ordinary Magic',
    quote: '“You make ordinary days feel like they\'re worth showing up for”',
    note: 'Just having you next to me turns the simplest day into something I look forward to.',
  },
  {
    id: 2,
    label: 'Track 02',
    coverImage: `${BASE}images/photo-2.jpg`,
    subtitle: 'Your Memory',
    quote: '“You remember the little things I mention once in passing”',
    note: 'The way you remember tiny details I whispered weeks ago shows how deeply you care.',
  },
  {
    id: 3,
    label: 'Track 03',
    coverImage: `${BASE}images/photo-3.jpg`,
    subtitle: 'My Anchor',
    quote: '“You\'re the calm I didn\'t know I needed until I had it”',
    note: 'When everything is chaotic, your voice and your hug slow down the whole world.',
  },
  {
    id: 4,
    label: 'Track 04',
    coverImage: `${BASE}images/photo-4.jpg`,
    subtitle: 'New Eyes',
    quote: '“Love how I see the world in different perspective when u are with me”',
    note: 'You expand my universe, teach me patience, and show me the beauty in everything.',
  },
];

export const SpreadVinyl: React.FC<Props> = ({ onBack, onNext }) => {
  const [activeTrack, setActiveTrack] = useState<number>(1);

  const handleSelect = (id: number) => {
    setActiveTrack(id);
    sound.playChime();
  };

  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-none sm:rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-10 md:p-12 border border-[#7A0C13]/10 relative overflow-hidden">
      {/* Decorative Blush Pink Stars Matching Reference */}
      <div className="absolute top-4 left-6 text-blush-200 text-6xl select-none pointer-events-none opacity-50">★</div>
      <div className="absolute bottom-6 right-6 text-blush-200 text-7xl select-none pointer-events-none opacity-50">★</div>

      {/* Top Header Row matching Reference */}
      <div className="flex items-center justify-between border-b border-stone-200/60 pb-4 mb-8 text-xs font-sans text-stone-500">
        <span>true love</span>
        <span className="font-editorial text-sm sm:text-base text-[#7A0C13] tracking-wide">
          songs & truths that remind me of you
        </span>
        <span>chapter 28</span>
      </div>

      {/* Ribbon Title Matching Reference (e.g. "You remind me of the color Blue") */}
      <div className="text-center mb-8">
        <p className="font-editorial text-base sm:text-xl text-stone-700">
          You remind me of
        </p>
        <div className="inline-flex items-center gap-1">
          <span className="font-cormorant italic text-stone-600 text-lg sm:text-2xl">
            everything
          </span>
          <span className="font-flourish text-4xl sm:text-6xl text-[#7A0C13] -ml-1">
            Good
          </span>
        </div>
        <p className="font-sans text-[11px] text-stone-400 uppercase tracking-widest mt-1">
          tap any record sleeve to pull out the secret vinyl
        </p>
      </div>

      {/* Vinyl Record Grid Matching Reference Image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {tracks.map((track) => {
          const isSelected = activeTrack === track.id;

          return (
            <div
              key={track.id}
              onClick={() => handleSelect(track.id)}
              className="cursor-pointer group flex flex-col items-center"
            >
              {/* Sleeve + Sliding Vinyl Container */}
              <div className="relative w-40 h-32 flex items-center mb-4">
                {/* Vinyl Record Disc (slides out when selected/hovered) */}
                <motion.div
                  animate={{
                    x: isSelected ? 42 : 10,
                    rotate: isSelected ? 360 : 0,
                  }}
                  transition={{
                    x: { duration: 0.5, ease: 'easeOut' },
                    rotate: { duration: isSelected ? 8 : 0.5, repeat: isSelected ? Infinity : 0, ease: 'linear' },
                  }}
                  className="vinyl-disc absolute left-0 w-28 h-28 rounded-full z-0 flex items-center justify-center shadow-lg"
                >
                  {/* Center Sticker */}
                  <div className="w-10 h-10 rounded-full bg-[#7A0C13] border border-white/40 flex items-center justify-center text-[7px] font-sans text-white uppercase font-bold tracking-tight text-center">
                    RURU
                  </div>
                </motion.div>

                {/* Album Cover Sleeve (Front) */}
                <div className="relative z-10 w-28 h-28 bg-white border border-[#7A0C13] shadow-md overflow-hidden flex flex-col justify-between p-1 bg-stone-100">
                  <img
                    src={track.coverImage}
                    alt={track.subtitle}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <span className="red-tag absolute bottom-1 left-1 text-[8px]">
                    {track.label}
                  </span>
                </div>
              </div>

              {/* Caption & Quote Below Matching Reference Format */}
              <div className="text-center px-1 max-w-[170px]">
                <p className="font-editorial text-xs font-semibold text-[#7A0C13] tracking-wide mb-1">
                  {track.subtitle}
                </p>
                <p className="font-cormorant italic text-xs sm:text-sm text-stone-700 leading-snug">
                  {track.quote}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Active Track Note matching bottom quotes in reference */}
      <div className="mt-8 pt-6 border-t border-stone-200/60 text-center max-w-lg mx-auto">
        <span className="font-flourish text-3xl text-[#7A0C13] mr-1 select-none">“</span>
        <blockquote className="font-editorial italic text-base sm:text-lg text-[#7A0C13] inline leading-relaxed">
          {tracks.find((t) => t.id === activeTrack)?.quote.replace(/[“”]/g, '')}
        </blockquote>
        <span className="font-flourish text-3xl text-[#7A0C13] ml-1 select-none">”</span>

        <p className="font-cormorant text-xs sm:text-sm text-stone-500 italic mt-2">
          {tracks.find((t) => t.id === activeTrack)?.note}
        </p>
      </div>

      {/* Bottom Pagination matching Reference */}
      <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500 font-sans">
        <button onClick={onBack} className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider">
          ← back
        </button>
        <span>page 3 of 5</span>
        <button onClick={onNext} className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider">
          next →
        </button>
      </div>
    </section>
  );
};

