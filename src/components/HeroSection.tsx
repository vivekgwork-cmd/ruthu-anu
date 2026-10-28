import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeroProps {
  onScrollNext: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onScrollNext }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between px-6 pt-24 pb-12 text-center overflow-hidden">
      {/* Subtle Warm Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[700px] h-[380px] sm:h-[700px] bg-gradient-to-b from-champagne-500/10 via-crimson-800/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Top Monogram Seal */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 pt-4"
      >
        <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-champagne-500/40" />
        <span className="font-syne text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-champagne-400 uppercase">
          Anarghya For RuRu • Chapter 28
        </span>
        <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-champagne-500/40" />
      </motion.div>

      {/* Main Center Typographic Stage */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center my-auto py-10">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <span className="font-editorial italic text-lg sm:text-2xl md:text-3xl text-stone-300 font-normal tracking-wide">
            It’s officially your day...
          </span>
        </motion.div>

        {/* Grand Headline: HAPPY BIRTHDAY RURU */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-italiana text-5xl sm:text-8xl md:text-9xl text-stone-100 tracking-tight leading-none"
          >
            HAPPY BIRTHDAY
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
          >
            <span className="font-syne font-extrabold text-6xl sm:text-9xl md:text-[11rem] tracking-tight bg-gradient-to-b from-champagne-200 via-champagne-400 to-champagne-600 bg-clip-text text-transparent gold-glow">
              RURU
            </span>
          </motion.div>
        </div>

        {/* Subtitle: "Somehow you are 28 already" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-10"
        >
          <span className="font-cormorant italic text-2xl sm:text-4xl text-stone-300">
            Somehow you are
          </span>
          <div className="px-4 py-1 rounded-full border border-champagne-500/30 bg-champagne-500/10 backdrop-blur-md">
            <span className="font-syne font-bold text-lg sm:text-2xl text-champagne-300 tracking-wider">
              28
            </span>
          </div>
          <span className="font-cormorant italic text-2xl sm:text-4xl text-stone-300">
            already.
          </span>
        </motion.div>

        {/* Minimalist Editorial Exploration Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => {
              sound.playSparkle();
              onScrollNext();
            }}
            className="group relative px-8 py-3.5 rounded-full border border-champagne-500/30 bg-noir-850/80 hover:bg-champagne-500/10 hover:border-champagne-400 text-champagne-200 transition-all duration-500 backdrop-blur-md"
          >
            <span className="relative z-10 flex items-center gap-3 font-syne text-xs uppercase tracking-[0.25em] font-medium">
              <span>Unfold The Celebration</span>
              <Sparkles className="w-3.5 h-3.5 text-champagne-400 group-hover:rotate-45 transition-transform duration-500" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={onScrollNext}
        className="flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
      >
        <span className="font-syne text-[9px] uppercase tracking-[0.3em] text-stone-400">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 text-champagne-400" />
      </motion.div>
    </section>
  );
};
