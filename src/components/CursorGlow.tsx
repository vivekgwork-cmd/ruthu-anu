import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorGlow: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const cursorX = useSpring(-500, { damping: 28, stiffness: 220 });
  const cursorY = useSpring(-500, { damping: 28, stiffness: 220 });

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 rounded-full bg-gradient-to-r from-champagne-500/10 via-crimson-700/5 to-transparent blur-[120px]"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      aria-hidden="true"
    />
  );
};

