import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

const ELEMENT_COLORS = [
  '#BBEDFF', // Salt (Cyan/Ice Blue)
  '#FB807B', // Mercury (Coral/Cinnabar Red)
  '#F2E3A5', // Sulfur (Pale Gold)
];

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate ~28 alchemical sublimation particles
    const particleCount = Math.min(28, Math.floor(width / 35));
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const color = ELEMENT_COLORS[Math.floor(Math.random() * ELEMENT_COLORS.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.2 + Math.random() * 1.8,
        color,
        speedY: 0.15 + Math.random() * 0.35,
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: 0.1 + Math.random() * 0.3,
        maxOpacity: 0.25 + Math.random() * 0.3,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += Math.sin(p.pulsePhase) * 0.3 + p.speedX;
        p.pulsePhase += p.pulseSpeed;

        // Reset if went off top
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Fade near boundaries
        const boundaryFade = Math.min(1, Math.min(p.y / (height * 0.2), (height - p.y) / (height * 0.2)));
        const currentOpacity = Math.max(0, Math.min(p.maxOpacity, p.opacity * (0.8 + Math.sin(p.pulsePhase) * 0.3) * boundaryFade));

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]" 
      aria-hidden="true" 
    />
  );
}
