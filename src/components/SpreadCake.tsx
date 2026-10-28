import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

interface Props {
  onBack: () => void;
  onNext: () => void;
}

export const SpreadCake: React.FC<Props> = ({ onBack, onNext }) => {
  const [lit, setLit] = useState(true);
  const [sliced, setSliced] = useState(false);

  const handleBlow = () => {
    if (!lit) return;
    setLit(false);
    sound.playCandleBlow();

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#7A0C13', '#E29DA6', '#ECC4C8', '#380407', '#FFFFFF'],
    });
  };

  const handleCut = () => {
    setSliced(true);
    sound.playChime();
    confetti({
      particleCount: 50,
      spread: 70,
      colors: ['#7A0C13', '#E29DA6'],
    });
  };

  const handleRelight = () => {
    setLit(true);
    setSliced(false);
    sound.playSparkle();
  };

  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-none sm:rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-10 md:p-12 border border-[#7A0C13]/10 relative overflow-hidden">
      {/* Decorative Pastel Stars matching reference */}
      <div className="absolute top-6 left-6 text-blush-200 text-5xl select-none pointer-events-none opacity-60">★</div>
      <div className="absolute top-6 right-6 text-blush-200 text-5xl select-none pointer-events-none opacity-60">★</div>
      <div className="absolute bottom-12 right-8 text-blush-200 text-6xl select-none pointer-events-none opacity-60">★</div>

      {/* Top Header Row matching Reference */}
      <div className="flex items-center justify-between border-b border-stone-200/60 pb-4 mb-8 text-xs font-sans text-stone-500">
        <span>tradition</span>
        <span className="font-editorial text-sm sm:text-base text-[#7A0C13] tracking-wide">
          1st cake obviously
        </span>
        <span>october 28</span>
      </div>

      {/* Centerpiece Typographic Ribbon */}
      <div className="text-center my-6">
        <div className="inline-flex items-center justify-center gap-2">
          <span className="font-flourish text-4xl sm:text-6xl text-[#7A0C13] select-none">
            Make
          </span>
          <span className="font-cormorant italic text-xl sm:text-3xl text-stone-700">
            a wish for your 28th
          </span>
        </div>
        <p className="font-cormorant text-xs sm:text-sm text-stone-500 italic mt-1">
          {lit ? 'blow out your candles to seal the year' : 'wish sent to the stars. time to cut the first slice.'}
        </p>
      </div>

      {/* Editorial Cake Box & Candle Stage */}
      <div className="flex flex-col items-center justify-center my-8">
        <div className="relative p-6 sm:p-8 photo-border-red bg-stone-50 max-w-xs sm:max-w-sm w-full flex flex-col items-center justify-center shadow-inner">
          <span className="red-tag absolute -top-3 left-4">
            birthday ritual
          </span>

          {/* Candle Flame / Smoke */}
          <div className="relative flex items-end justify-center gap-6 mb-2">
            {/* Candle 2 */}
            <div className="flex flex-col items-center">
              <div className="h-8 flex items-center justify-center">
                {lit ? (
                  <motion.div
                    animate={{ scale: [1, 1.1, 0.95, 1], rotate: [-1, 1, -1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    onClick={handleBlow}
                    className="cursor-pointer"
                    title="Tap to blow out"
                  >
                    <div className="w-3 h-5 rounded-[50%_50%_30%_30%] bg-gradient-to-t from-orange-500 via-amber-300 to-white shadow-[0_0_12px_#FF8C00]" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0.8, y: 0 }}
                    animate={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-stone-400"
                  />
                )}
              </div>
              <div className="w-0.5 h-2 bg-stone-600" />
              <div className="w-4 h-9 bg-[#7A0C13] text-white flex items-center justify-center font-editorial text-xs font-bold shadow-sm">
                2
              </div>
            </div>

            {/* Candle 8 */}
            <div className="flex flex-col items-center">
              <div className="h-8 flex items-center justify-center">
                {lit ? (
                  <motion.div
                    animate={{ scale: [1, 0.95, 1.08, 1], rotate: [1, -1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.7 }}
                    onClick={handleBlow}
                    className="cursor-pointer"
                    title="Tap to blow out"
                  >
                    <div className="w-3 h-5 rounded-[50%_50%_30%_30%] bg-gradient-to-t from-orange-500 via-amber-300 to-white shadow-[0_0_12px_#FF8C00]" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0.8, y: 0 }}
                    animate={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-stone-400"
                  />
                )}
              </div>
              <div className="w-0.5 h-2 bg-stone-600" />
              <div className="w-4 h-9 bg-[#7A0C13] text-white flex items-center justify-center font-editorial text-xs font-bold shadow-sm">
                8
              </div>
            </div>
          </div>

          {/* Minimalist Cake Body */}
          <div className="w-44 h-20 bg-white border border-[#7A0C13] flex flex-col justify-between p-2 shadow-sm">
            <div className="flex justify-between items-center text-[10px] text-[#7A0C13] font-editorial tracking-widest px-1">
              <span>✦</span>
              <span>RURU • 28</span>
              <span>✦</span>
            </div>
            <div className="text-center font-cormorant italic text-xs text-stone-600">
              {sliced ? 'first slice served 🍰' : 'red velvet & cream'}
            </div>
            <div className="h-1 w-full bg-[#7A0C13]/20" />
          </div>

          <div className="w-52 h-1 bg-[#7A0C13] mt-0.5" />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 mt-6">
          {lit ? (
            <button
              onClick={handleBlow}
              className="px-6 py-2 bg-[#7A0C13] text-white font-sans text-xs uppercase tracking-widest font-medium hover:bg-[#63090F] transition-all shadow"
            >
              [ blow out candles ]
            </button>
          ) : (
            <>
              {!sliced && (
                <button
                  onClick={handleCut}
                  className="px-6 py-2 bg-[#7A0C13] text-white font-sans text-xs uppercase tracking-widest font-medium hover:bg-[#63090F] transition-all shadow"
                >
                  [ cut the 1st slice 🍰 ]
                </button>
              )}
              <button
                onClick={handleRelight}
                className="px-4 py-2 border border-[#7A0C13] text-[#7A0C13] font-sans text-xs uppercase tracking-widest hover:bg-[#7A0C13]/5 transition-all"
              >
                relight
              </button>
            </>
          )}
        </div>

        {/* Revealed Slice Note */}
        <AnimatePresence>
          {sliced && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 border border-[#7A0C13]/30 bg-blush-50 max-w-sm text-center"
            >
              <p className="font-editorial text-xs text-[#7A0C13] uppercase tracking-wider font-semibold mb-1">
                For My RuRu
              </p>
              <p className="font-cormorant italic text-sm text-stone-700 leading-relaxed">
                “Here is your first sweet bite of 28. May this year be as wonderful, kind, and precious as you are to me.”
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Pagination matching Reference */}
      <div className="pt-6 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500 font-sans">
        <button onClick={onBack} className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider">
          ← back
        </button>
        <span>page 2 of 5</span>
        <button onClick={onNext} className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider">
          next →
        </button>
      </div>
    </section>
  );
};

