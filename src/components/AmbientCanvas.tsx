import React, { useEffect, useRef } from 'react';

interface Mote {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  osc: number;
  oscSpeed: number;
}

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const count = Math.min(Math.floor((width * height) / 18000), 45);
    const motes: Mote[] = [];

    for (let i = 0; i < count; i++) {
      const baseAlpha = Math.random() * 0.4 + 0.15;
      motes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.1, // gently rising like warm embers
        alpha: baseAlpha,
        baseAlpha,
        osc: Math.random() * Math.PI * 2,
        oscSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const loop = () => {
      ctx.clearRect(0, 0, width, height);

      motes.forEach((m) => {
        m.x += m.vx;
        m.y += m.vy;
        m.osc += m.oscSpeed;
        m.alpha = m.baseAlpha + Math.sin(m.osc) * 0.15;

        if (m.y < -20) {
          m.y = height + 20;
          m.x = Math.random() * width;
        }
        if (m.x < -20) m.x = width + 20;
        if (m.x > width + 20) m.x = -20;

        ctx.save();
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(215, 185, 120, ${Math.max(0, m.alpha)})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(200, 162, 81, 0.4)';
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
};

