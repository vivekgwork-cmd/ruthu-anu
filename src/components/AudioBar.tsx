import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sound } from '../utils/audio';

export const AudioBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    sound.toggleAmbient((active) => {
      setIsPlaying(active);
    });
    sound.playSparkle();
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleSound}
        className={`group flex items-center gap-3 px-4 py-2 rounded-full border transition-all duration-500 backdrop-blur-md ${
          isPlaying
            ? 'bg-noir-850/90 border-champagne-500/40 text-champagne-300 shadow-[0_0_25px_rgba(200,162,81,0.2)]'
            : 'bg-noir-900/60 border-white/10 text-stone-400 hover:border-champagne-500/30 hover:text-champagne-200'
        }`}
        aria-label="Toggle ambient score"
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-full bg-champagne-500 rounded-full animate-[pulse_0.9s_ease-in-out_infinite]" />
              <span className="w-0.5 h-2 bg-champagne-400 rounded-full animate-[pulse_1.3s_ease-in-out_infinite]" />
              <span className="w-0.5 h-3 bg-champagne-300 rounded-full animate-[pulse_0.7s_ease-in-out_infinite]" />
            </div>
            <span className="text-[10px] font-syne font-semibold uppercase tracking-[0.25em] text-champagne-400">
              Score On
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-stone-500 group-hover:text-champagne-400 transition-colors" />
            <span className="text-[10px] font-syne font-medium uppercase tracking-[0.25em] text-stone-400 group-hover:text-champagne-300 transition-colors">
              Play Score
            </span>
          </>
        )}
      </button>
    </div>
  );
};

