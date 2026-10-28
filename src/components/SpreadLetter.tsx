import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, RotateCcw } from 'lucide-react';
import { sound } from '../utils/audio';

interface Props {
  onBack: () => void;
  onReplay: () => void;
}

export const SpreadLetter: React.FC<Props> = ({ onBack, onReplay }) => {
  const [sent, setSent] = useState(false);
  const [loveCount, setLoveCount] = useState(28);

  const handleSendLove = () => {
    setSent(true);
    setLoveCount((prev) => prev + 1);
    sound.playCandleBlow();

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.75 },
      colors: ['#7A0C13', '#E29DA6', '#ECC4C8', '#FFFFFF'],
    });

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto bg-white rounded-none sm:rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 sm:p-10 md:p-14 border border-[#7A0C13]/10 relative overflow-hidden">
      {/* Decorative Stars matching reference */}
      <div className="absolute top-6 left-6 text-blush-200 text-6xl select-none pointer-events-none opacity-50">★</div>
      <div className="absolute top-6 right-6 text-blush-200 text-6xl select-none pointer-events-none opacity-50">★</div>
      <div className="absolute bottom-10 right-8 text-blush-200 text-7xl select-none pointer-events-none opacity-50">★</div>

      {/* Top Header Row matching Reference */}
      <div className="flex items-center justify-between border-b border-stone-200/60 pb-4 mb-8 text-xs font-sans text-stone-500">
        <span>true love</span>
        <span className="font-editorial text-sm sm:text-base text-[#7A0C13] tracking-wide">
          the last letter [ forever ]
        </span>
        <span>october 28</span>
      </div>

      {/* Ribbon Flourish Title Matching Middle Slide in Reference Image */}
      <div className="text-center my-6">
        <div className="inline-block relative">
          <div className="flex items-center justify-center gap-1">
            <span className="font-flourish text-5xl sm:text-7xl text-[#7A0C13] leading-none select-none">
              R
            </span>
            <div className="text-left">
              <span className="font-editorial italic text-xl sm:text-3xl text-stone-800 leading-tight block">
                uRu, i’m so in love
              </span>
              <span className="font-editorial text-xs sm:text-sm text-[#7A0C13] uppercase tracking-widest font-semibold block">
                with [ YOU ]
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* The Letter Body in Fine Editorial Serif matching the reference */}
      <div className="max-w-2xl mx-auto my-8 p-6 sm:p-10 border border-[#7A0C13]/20 bg-stone-50/50 shadow-sm relative">
        <span className="red-tag absolute -top-3 left-6">
          dear ruru
        </span>

        <div className="space-y-6 text-stone-800 font-editorial text-base sm:text-xl leading-relaxed">
          <p className="italic text-[#7A0C13] font-semibold text-lg sm:text-2xl">
            Dear RuRu,
          </p>

          <p className="italic text-stone-700">
            I was going to write something short and cute, but honestly there's too much I actually want to say — starting with how you make even boring days feel worth showing up for…
          </p>

          <p className="italic text-stone-700">
            The way I melt and turn into a kid when you shower your love on me. I can’t believe I was the one who doesn’t wanted to get married but look at me now, can’t stay away from you and can’t wait to get married to you
          </p>

          <div className="pt-4 space-y-1">
            <p className="font-editorial text-lg sm:text-xl text-[#7A0C13] italic font-semibold">
              Love you Ruru
            </p>
            <p className="font-cormorant text-sm sm:text-base italic text-stone-600">
              All my love,
            </p>
          </div>

          {/* Signature matching the authentic calligraphy */}
          <div className="pt-2 flex items-center gap-3">
            <span className="font-flourish text-4xl sm:text-6xl text-[#7A0C13] select-none">
              — Anarghya
            </span>
            <span className="text-3xl sm:text-4xl filter drop-shadow select-none">
              🎂
            </span>
          </div>
        </div>

        {/* Action Button inside letter */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-cormorant italic text-xs text-stone-500">
            sealed with a lifetime of love
          </span>

          <button
            onClick={handleSendLove}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#7A0C13] text-white font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#60080E] transition-all shadow-md active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 fill-white text-white" />
            <span>[ send love back ({loveCount}) ]</span>
          </button>
        </div>
      </div>

      {/* Feedback alert */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center my-4 font-cormorant italic text-[#7A0C13] text-sm"
          >
            Your kiss & love have been sent to Anarghya! ❤️
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Pagination matching Reference */}
      <div className="pt-6 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500 font-sans">
        <button onClick={onBack} className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider">
          ← back
        </button>
        <span>page 5 of 5</span>
        <button onClick={onReplay} className="text-[#7A0C13] hover:underline font-medium uppercase tracking-wider flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> replay
        </button>
      </div>
    </section>
  );
};

