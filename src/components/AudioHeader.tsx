import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { sound } from '../utils/audio';

export const AudioHeader: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    sound.toggleAmbient((active) => {
      setIsPlaying(active);
    });
    sound.playSparkle();
  };

  return (
    <header className="fixed top-3 right-4 sm:top-5 sm:right-6 z-50">
      <button
        onClick={toggle}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#7A0C13] border border-[#7A0C13]/30 shadow-md hover:bg-[#7A0C13] hover:text-white transition-all text-[11px] font-sans tracking-wide"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-medium">music: on</span>
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5" />
            <span className="text-stone-600 hover:text-white">play songs for ruru</span>
          </>
        )}
      </button>
    </header>
  );
};

