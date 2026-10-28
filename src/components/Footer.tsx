import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-white/5 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center gap-3">
        <span className="font-syne text-[10px] tracking-[0.3em] uppercase text-champagne-500 font-semibold">
          RuRu & Anarghya • 2026
        </span>
        <p className="font-cormorant italic text-stone-400 text-sm">
          A bespoke birthday journey created with endless love.
        </p>
        <div className="h-4 w-px bg-champagne-500/20 my-1" />
        <span className="font-syne text-[9px] uppercase tracking-[0.3em] text-stone-400">
          Chapter 28 • Forever
        </span>
      </div>
    </footer>
  );
};
