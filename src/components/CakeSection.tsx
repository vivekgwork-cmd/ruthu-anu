import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Flame } from 'lucide-react';
import { sound } from '../utils/audio';

export const CakeSection: React.FC = () => {
  const [isLit, setIsLit] = useState(true);
  const [sliceCut, setSliceCut] = useState(false);

  const triggerCelebration = () => {
    // Subtle luxury champagne and gold confetti
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#C8A251', '#F6F3EE', '#E0658A', '#EFE9DE'],
      disableForReducedMotion: true,
      scalar: 0.9,
    });
  };

  const handleBlow = () => {
    if (!isLit) return;
    setIsLit(false);
    sound.playCandleBlow();
    triggerCelebration();
  };

  const handleSlice = () => {
    setSliceCut(true);
    sound.playChime();
    triggerCelebration();
  };

  const handleRelight = () => {
    setIsLit(true);
    setSliceCut(false);
    sound.playSparkle();
  };

  return (
    <section id="cake-section" className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center">
      {/* Background warm candlelight pool */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
          isLit ? 'bg-amber-500/15' : 'bg-noir-700/10'
        }`}
      />

      <div className="relative z-10 max-w-2xl mx-auto w-full flex flex-col items-center text-center">
        {/* Section Roman Numerals Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-champagne-400 font-semibold">
            Act I • The Birthday Ritual
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-italiana text-4xl sm:text-6xl text-stone-100 mb-4"
        >
          1st Cake, <span className="font-editorial italic text-champagne-300">Obviously</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant italic text-lg sm:text-xl text-stone-300 max-w-md mb-12"
        >
          {isLit
            ? 'Close your eyes, make the secret wish of your 28th year, and extinguish the flames.'
            : 'Your wish is woven into the universe. Now take that first bite.'}
        </motion.p>

        {/* Sculptural Minimalist Cake Installation */}
        <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex flex-col items-center justify-end my-6">
          {/* Candle Flames & Wicks */}
          <div className="absolute top-12 flex items-end justify-center gap-12 sm:gap-14 z-20">
            {/* Candle 2 */}
            <div className="flex flex-col items-center">
              <div className="h-10 flex items-center justify-center">
                {isLit ? (
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 0.96, 1.04, 1],
                      rotate: [-1, 1, -2, 1, -1],
                    }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    onClick={handleBlow}
                    className="cursor-pointer"
                    title="Tap to blow out"
                  >
                    <div className="w-3.5 h-6 rounded-[50%_50%_30%_30%] bg-gradient-to-t from-amber-500 via-yellow-200 to-white shadow-[0_0_20px_#FFA500]" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0.8, y: 0 }}
                    animate={{ opacity: 0, y: -25, scale: 1.8 }}
                    transition={{ duration: 1.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-stone-400"
                  />
                )}
              </div>
              <div className="w-0.5 h-2.5 bg-stone-600" />
              <div className="w-4 h-12 rounded-t-sm bg-gradient-to-b from-champagne-300 via-champagne-500 to-champagne-700 shadow-md flex items-center justify-center border-t border-champagne-200">
                <span className="font-syne text-[11px] font-bold text-noir-950">2</span>
              </div>
            </div>

            {/* Candle 8 */}
            <div className="flex flex-col items-center">
              <div className="h-10 flex items-center justify-center">
                {isLit ? (
                  <motion.div
                    animate={{
                      scale: [1, 0.95, 1.06, 0.98, 1],
                      rotate: [1, -1, 1.5, -1, 1],
                    }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    onClick={handleBlow}
                    className="cursor-pointer"
                    title="Tap to blow out"
                  >
                    <div className="w-3.5 h-6 rounded-[50%_50%_30%_30%] bg-gradient-to-t from-amber-500 via-yellow-200 to-white shadow-[0_0_20px_#FFA500]" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0.8, y: 0 }}
                    animate={{ opacity: 0, y: -25, scale: 1.8 }}
                    transition={{ duration: 1.5 }}
                    className="w-1.5 h-1.5 rounded-full bg-stone-400"
                  />
                )}
              </div>
              <div className="w-0.5 h-2.5 bg-stone-600" />
              <div className="w-4 h-12 rounded-t-sm bg-gradient-to-b from-champagne-300 via-champagne-500 to-champagne-700 shadow-md flex items-center justify-center border-t border-champagne-200">
                <span className="font-syne text-[11px] font-bold text-noir-950">8</span>
              </div>
            </div>
          </div>

          {/* Minimalist Tier 1 (Cylinder) */}
          <div className="relative w-48 sm:w-56 h-28 rounded-2xl bg-gradient-to-b from-noir-800 via-noir-850 to-noir-900 border border-champagne-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between p-3 z-10">
            {/* Gold Leaf Dusting */}
            <div className="flex justify-between items-center px-2 pt-1 opacity-70">
              <span className="text-[10px] font-syne uppercase tracking-[0.25em] text-champagne-400">RURU</span>
              <span className="text-champagne-400 text-xs">✦</span>
              <span className="text-[10px] font-syne uppercase tracking-[0.25em] text-champagne-400">XXVIII</span>
            </div>

            <div className="w-full flex items-center justify-center py-2">
              <span className="font-cormorant italic text-sm text-stone-300">
                {sliceCut ? '1st Slice Served ✨' : 'Pure Decadence'}
              </span>
            </div>

            <div className="w-full h-1 bg-gradient-to-r from-transparent via-champagne-500/50 to-transparent" />
          </div>

          {/* Pedestal Stand */}
          <div className="w-56 sm:w-64 h-3 bg-gradient-to-r from-stone-800 via-champagne-600 to-stone-800 rounded-full shadow-xl mt-1 border-t border-champagne-400/40" />
          <div className="w-20 h-5 bg-gradient-to-b from-stone-800 to-stone-900" />
          <div className="w-36 h-2 bg-stone-800 rounded-full shadow-lg" />
        </div>

        {/* Interactive Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {isLit ? (
            <button
              onClick={handleBlow}
              className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 font-syne text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(200,162,81,0.35)]"
            >
              <Flame className="w-4 h-4 fill-noir-950 text-noir-950" />
              <span>Blow The Candles</span>
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {!sliceCut && (
                <button
                  onClick={handleSlice}
                  className="flex items-center gap-2 px-7 py-3 rounded-full bg-champagne-500 hover:bg-champagne-400 text-noir-950 font-syne text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_0_25px_rgba(200,162,81,0.3)]"
                >
                  <span>Cut The 1st Slice 🍰</span>
                </button>
              )}

              <button
                onClick={handleRelight}
                className="flex items-center gap-2 px-5 py-3 rounded-full editorial-glass text-stone-300 hover:text-champagne-300 text-xs font-syne uppercase tracking-[0.2em] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Make Another Wish</span>
              </button>
            </div>
          )}
        </div>

        {/* Slice Cut Revealed Note */}
        <AnimatePresence>
          {sliceCut && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 p-6 rounded-2xl editorial-glass-gold max-w-md w-full"
            >
              <p className="font-editorial italic text-xl text-champagne-200 mb-2">
                Reserved For You
              </p>
              <p className="font-cormorant text-base text-stone-300 leading-relaxed italic">
                “Here is your first sweet bite of 28. May this year be as generous, peaceful, and rare as the way you love me.”
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
