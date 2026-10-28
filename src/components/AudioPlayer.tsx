import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';
import { sound } from '../utils/audio';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggle = () => {
    sound.toggleMusic((playing) => {
      setIsPlaying(playing);
    });
    sound.playSparkle();
  };

  return (
    <div className="fixed top-5 right-5 z-40 flex items-center gap-3">
      {/* Tooltip hint on hover */}
      {showTooltip && (
        <div className="hidden sm:block text-xs font-serif italic text-luxury-gold tracking-wide px-3 py-1.5 rounded-full bg-luxury-card/90 border border-luxury-gold/30 shadow-lg backdrop-blur-md animate-fade-in">
          {isPlaying ? 'Playing romantic ambient melody ✨' : 'Click for ambient romance sound 🎵'}
        </div>
      )}

      <button
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl ${
          isPlaying
            ? 'bg-luxury-gold/20 border-luxury-gold text-luxury-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
            : 'bg-luxury-charcoal/80 border-white/10 text-stone-300 hover:border-luxury-gold/50 hover:text-luxury-gold'
        }`}
        aria-label="Toggle ambient music"
      >
        {isPlaying ? (
          <>
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-4 h-4 text-luxury-gold animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-luxury-gold"></span>
              </span>
            </div>
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-full bg-luxury-gold rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
              <span className="w-0.5 h-2 bg-luxury-gold rounded-full animate-[pulse_1.2s_ease-in-out_infinite]" />
              <span className="w-0.5 h-3.5 bg-luxury-gold rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
            </div>
            <span className="text-xs font-serif font-medium tracking-wider uppercase">Melody</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-stone-400 group-hover:text-luxury-gold transition-colors" />
            <Music className="w-3.5 h-3.5 text-stone-400 group-hover:text-luxury-gold transition-colors" />
            <span className="text-xs font-serif tracking-wider uppercase hidden sm:inline">Play Sound</span>
          </>
        )}
      </button>
    </div>
  );
};

