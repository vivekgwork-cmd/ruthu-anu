import React, { useRef } from 'react';
import { AudioHeader } from './components/AudioHeader';
import { SpreadCover } from './components/SpreadCover';
import { SpreadCake } from './components/SpreadCake';
import { SpreadVinyl } from './components/SpreadVinyl';
import { SpreadGallery } from './components/SpreadGallery';
import { SpreadLetter } from './components/SpreadLetter';

export const App: React.FC = () => {
  const p1Ref = useRef<HTMLDivElement>(null);
  const p2Ref = useRef<HTMLDivElement>(null);
  const p3Ref = useRef<HTMLDivElement>(null);
  const p4Ref = useRef<HTMLDivElement>(null);
  const p5Ref = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#5C0A0E] py-8 sm:py-16 px-3 sm:px-6 md:px-8 flex flex-col items-center">
      {/* Background Pastel Blush Stars in Margins matching Reference */}
      <div className="fixed top-12 left-4 text-blush-300 text-6xl pointer-events-none opacity-20 select-none">★</div>
      <div className="fixed top-1/3 right-6 text-blush-300 text-7xl pointer-events-none opacity-20 select-none">★</div>
      <div className="fixed bottom-1/4 left-8 text-blush-300 text-8xl pointer-events-none opacity-15 select-none">★</div>
      <div className="fixed bottom-12 right-6 text-blush-300 text-6xl pointer-events-none opacity-20 select-none">★</div>

      {/* Audio Controller Header */}
      <AudioHeader />

      {/* Main Column of Editorial Spreads Matching Reference JPG */}
      <main className="w-full max-w-4xl flex flex-col gap-12 sm:gap-16 relative z-10">
        {/* Page 1: Cover Spread */}
        <div ref={p1Ref} id="cover">
          <SpreadCover onNext={() => scrollTo(p2Ref)} />
        </div>

        {/* Page 2: 1st Cake Obviously */}
        <div ref={p2Ref} id="cake">
          <SpreadCake
            onBack={() => scrollTo(p1Ref)}
            onNext={() => scrollTo(p3Ref)}
          />
        </div>

        {/* Page 3: Vinyl Records (Click to reveal secret messages) */}
        <div ref={p3Ref} id="vinyl">
          <SpreadVinyl
            onBack={() => scrollTo(p2Ref)}
            onNext={() => scrollTo(p4Ref)}
          />
        </div>

        {/* Page 4: Photo Gallery with Red Borders & Captions */}
        <div ref={p4Ref} id="gallery">
          <SpreadGallery
            onBack={() => scrollTo(p3Ref)}
            onNext={() => scrollTo(p5Ref)}
          />
        </div>

        {/* Page 5: The Last Letter */}
        <div ref={p5Ref} id="letter">
          <SpreadLetter
            onBack={() => scrollTo(p4Ref)}
            onReplay={() => scrollTo(p1Ref)}
          />
        </div>
      </main>

      {/* Discreet Footer Note */}
      <footer className="mt-14 text-center text-blush-200/70 font-sans text-xs tracking-wider">
        made with all my love for ruru • october 2026
      </footer>
    </div>
  );
};

export default App;
