import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, ArrowUp } from 'lucide-react';
import { sound } from '../utils/audio';

export const LetterSection: React.FC = () => {
  const [hugSent, setHugSent] = useState(false);
  const [loveCount, setLoveCount] = useState(28);

  const handleSendLove = () => {
    setHugSent(true);
    setLoveCount((prev) => prev + 1);
    sound.playCandleBlow();

    confetti({
      particleCount: 65,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#C8A251', '#F6F3EE', '#E0658A', '#D5C4A6'],
      scalar: 0.9,
    });

    setTimeout(() => {
      setHugSent(false);
    }, 4000);
  };

  const scrollToTop = () => {
    sound.playSparkle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="letter-section" className="relative min-h-screen py-28 px-6 flex flex-col items-center justify-center">
      {/* Background warm ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-champagne-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-champagne-400 font-semibold block mb-3">
            Act IV • The Epilogue
          </span>
          <h2 className="font-italiana text-4xl sm:text-6xl text-stone-100 mb-3">
            The Last <span className="font-editorial italic text-champagne-300">Letter</span>
          </h2>
          <p className="font-cormorant italic text-lg sm:text-xl text-stone-400 max-w-sm mx-auto">
            Written with every ounce of my heart for your 28th birthday.
          </p>
        </motion.div>

        {/* The Fine-Art Parchment Love Letter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full luxury-parchment rounded-3xl p-8 sm:p-14 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-champagne-500/30 overflow-hidden"
        >
          {/* Subtle Deckle Edge / Letter Header */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-stone-300/60">
            <div>
              <span className="font-syne text-[10px] uppercase tracking-[0.25em] text-stone-500 block font-semibold">
                Private & Confidential
              </span>
              <span className="font-editorial text-stone-900 text-sm font-semibold tracking-wider">
                For RuRu On His 28th Birthday
              </span>
            </div>

            <div className="w-10 h-10 rounded-full border border-champagne-600/40 bg-champagne-100 flex items-center justify-center">
              <span className="font-syne text-xs font-bold text-champagne-700">28</span>
            </div>
          </div>

          {/* Letter Body Typography */}
          <div className="space-y-6 text-[#1A1715]">
            <p className="font-italiana text-2xl sm:text-3xl text-stone-950 font-semibold">
              Dear RuRu,
            </p>

            <p className="font-cormorant text-lg sm:text-2xl leading-relaxed italic text-stone-800">
              I was going to write something short and cute, but honestly there's too much I actually want to say — starting with how you make even boring days feel worth showing up for…
            </p>

            <p className="font-cormorant text-lg sm:text-2xl leading-relaxed italic text-stone-800">
              The way I melt and turn into a kid when you shower your love on me. I can’t believe I was the one who doesn’t wanted to get married but look at me now, can’t stay away from you and can’t wait to get married to you
            </p>

            <div className="pt-4 space-y-1">
              <p className="font-italiana text-xl sm:text-2xl text-stone-900 font-semibold">
                Love you Ruru
              </p>
              <p className="font-cormorant text-base sm:text-lg italic text-stone-600">
                All my love,
              </p>
            </div>

            {/* Signature & Cake Emoji */}
            <div className="pt-4 flex items-center gap-4">
              <span className="font-script text-4xl sm:text-6xl text-crimson-700 select-none">
                — Anarghya
              </span>
              <span className="text-3xl sm:text-4xl filter drop-shadow select-none">
                🎂
              </span>
            </div>
          </div>

          {/* Bottom Interaction Bar */}
          <div className="mt-12 pt-8 border-t border-stone-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-cormorant italic text-sm text-stone-500">
              Always & Forever Yours
            </span>

            <button
              onClick={handleSendLove}
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-900 text-stone-100 font-syne text-xs uppercase tracking-[0.2em] transition-all shadow-md active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-crimson-400 text-crimson-400 group-hover:scale-125 transition-transform" />
              <span>Send Love Back ({loveCount})</span>
            </button>
          </div>
        </motion.div>

        {/* Feedback Alert */}
        <AnimatePresence>
          {hugSent && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 px-6 py-3 rounded-full editorial-glass-gold border border-champagne-500/40 text-champagne-300 font-cormorant italic text-base flex items-center gap-2 shadow-2xl"
            >
              <Heart className="w-4 h-4 fill-crimson-400 text-crimson-400" />
              <span>Your love has been sent to Anarghya's heart. ❤️</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Replay Magic Button */}
        <div className="mt-16">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-white/10 hover:border-champagne-500/40 text-stone-400 hover:text-champagne-300 transition-all font-syne text-[10px] uppercase tracking-[0.25em]"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            <span>Return to Beginning</span>
          </button>
        </div>
      </div>
    </section>
  );
};
