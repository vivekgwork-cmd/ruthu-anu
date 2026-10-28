import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TapHeart {
  id: number;
  x: number;
  y: number;
  symbol: string;
  size: number;
  color: string;
  angle: number;
}

const symbols = ['❤️', '✨', '💖', '🥂', '💕', '🎂', '🌟'];
const colors = ['#FF4D6D', '#FF758F', '#F7D070', '#E85D75', '#F5EBE0'];

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<TapHeart[]>([]);

  useEffect(() => {
    let idCounter = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      // Don't trigger if clicking interactive buttons or inputs
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('input')) {
        return;
      }

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const newHearts: TapHeart[] = Array.from({ length: 3 }).map((_, i) => ({
        id: idCounter++,
        x: clientX + (Math.random() - 0.5) * 30,
        y: clientY + (Math.random() - 0.5) * 30,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.floor(Math.random() * 12) + 16,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: (Math.random() - 0.5) * 60,
      }));

      setHearts((prev) => [...prev.slice(-25), ...newHearts]);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{
              opacity: 1,
              scale: 0.3,
              x: h.x,
              y: h.y,
              rotate: h.angle,
            }}
            animate={{
              opacity: 0,
              scale: 1.4,
              y: h.y - 85,
              x: h.x + (Math.random() - 0.5) * 40,
              rotate: h.angle + (Math.random() - 0.5) * 45,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              fontSize: `${h.size}px`,
              textShadow: '0 0 10px rgba(247, 208, 112, 0.4)',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {h.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

