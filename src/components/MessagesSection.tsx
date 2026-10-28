import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Plus, Minus } from 'lucide-react';
import { sound } from '../utils/audio';

interface Message {
  id: number;
  roman: string;
  theme: string;
  quote: string;
  depth: string;
}

const items: Message[] = [
  {
    id: 1,
    roman: 'I',
    theme: 'THE ORDINARY DAYS',
    quote: '“You make ordinary days feel like they\'re worth showing up for”',
    depth: 'You have this effortless way of turning a quiet drive, a late dinner, or even a stressful work day into something warm and grounding. Just knowing I get to see you makes every single day matter.',
  },
  {
    id: 2,
    roman: 'II',
    theme: 'THE ATTENTION',
    quote: '“You remember the little things I mention once in passing”',
    depth: 'Things I didn’t even realize I cared about — you catch them, you hold them, and you bring them back with so much tenderness. It is the gentlest proof of how deeply you love me.',
  },
  {
    id: 3,
    roman: 'III',
    theme: 'THE SANCTUARY',
    quote: '“You\'re the calm I didn\'t know I needed until I had it”',
    depth: 'My mind moves fast, but the moment you take my hand or wrap your arms around me, all the noise in the universe goes silent. You are my safe harbor.',
  },
  {
    id: 4,
    roman: 'IV',
    theme: 'THE PERSPECTIVE',
    quote: '“Love how I see the world in different perspective when u are with me”',
    depth: 'You make me laugh harder, think deeper, and look at the world with softer eyes. Walking beside you has made me a better version of myself.',
  },
];

export const MessagesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1); // first one open by default for discovery
  const [likedMap, setLikedMap] = useState<{ [key: number]: number }>({ 1: 14, 2: 21, 3: 28, 4: 19 });

  const toggleCard = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
      sound.playSparkle();
    } else {
      setActiveId(id);
      sound.playChime();
    }
  };

  const addLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    sound.playSparkle();
    setLikedMap((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <section id="messages-section" className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-crimson-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-champagne-400 font-semibold block mb-3">
            Act II • The Secret Revelations
          </span>
          <h2 className="font-italiana text-4xl sm:text-6xl text-stone-100 mb-4">
            Words From <span className="font-editorial italic text-champagne-300">My Heart</span>
          </h2>
          <p className="font-cormorant italic text-lg sm:text-xl text-stone-400 max-w-md mx-auto">
            Click any tablet to unseal the thoughts I keep closest to me.
          </p>
        </motion.div>

        {/* The 4 Architectural Slates */}
        <div className="w-full flex flex-col gap-5">
          {items.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => toggleCard(item.id)}
                className={`group relative rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden border ${
                  isOpen
                    ? 'editorial-glass-gold border-champagne-500/50 shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
                    : 'editorial-glass border-white/5 hover:border-champagne-500/30'
                }`}
              >
                <div className="p-6 sm:p-8">
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-syne font-bold text-sm tracking-wider text-champagne-500">
                        {item.roman}
                      </span>
                      <span className="font-syne text-[11px] sm:text-xs tracking-[0.25em] uppercase text-stone-300">
                        {item.theme}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-syne uppercase tracking-widest text-stone-500 group-hover:text-champagne-400 transition-colors hidden sm:inline">
                        {isOpen ? 'Close' : 'Reveal'}
                      </span>
                      <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-champagne-400 group-hover:border-champagne-500/50 transition-colors">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 sm:pt-8 space-y-4">
                          <blockquote className="font-italiana text-2xl sm:text-4xl text-stone-100 leading-tight">
                            {item.quote}
                          </blockquote>

                          <p className="font-cormorant text-base sm:text-lg text-stone-300 leading-relaxed italic border-t border-champagne-500/20 pt-4">
                            {item.depth}
                          </p>

                          <div className="flex items-center justify-between pt-3">
                            <span className="font-script text-2xl text-champagne-300">
                              For RuRu
                            </span>

                            <button
                              onClick={(e) => addLike(e, item.id)}
                              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne-500/30 bg-champagne-500/10 text-champagne-300 hover:bg-champagne-500/20 transition-all text-xs font-syne"
                            >
                              <Heart className="w-3.5 h-3.5 fill-champagne-400 text-champagne-400" />
                              <span>{likedMap[item.id] || 0}</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
