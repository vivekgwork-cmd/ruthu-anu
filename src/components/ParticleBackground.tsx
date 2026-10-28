import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  alpha: number;
  maxAlpha: number;
  color: string;
  type: 'star' | 'dust' | 'petal';
  rotation: number;
  rotationSpeed: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(247, 208, 112, ', // Champagne gold
      'rgba(232, 93, 117, ',  // Soft Rose
      'rgba(255, 182, 193, ', // Light Pink
      'rgba(253, 251, 247, ', // Pure warm light
    ];

    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const typeRoll = Math.random();
      const type: 'star' | 'dust' | 'petal' =
        typeRoll > 0.8 ? 'petal' : typeRoll > 0.4 ? 'star' : 'dust';

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: type === 'petal' ? Math.random() * 4 + 3 : Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: type === 'petal' ? Math.random() * 0.6 + 0.3 : (Math.random() - 0.5) * 0.3 - 0.1,
        alpha: Math.random() * 0.7 + 0.2,
        maxAlpha: Math.random() * 0.6 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Wrap around boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'petal') {
          // Soft falling rose petal
          ctx.beginPath();
          ctx.fillStyle = `${p.color}${p.alpha * 0.6})`;
          ctx.ellipse(0, 0, p.radius, p.radius * 1.6, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'star') {
          // Twinkling four-point star
          ctx.beginPath();
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(247, 208, 112, 0.8)';
          ctx.fill();
        } else {
          // Floating golden dust mote
          ctx.beginPath();
          ctx.fillStyle = `${p.color}${p.alpha * 0.7})`;
          ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};

