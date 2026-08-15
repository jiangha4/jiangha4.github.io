import { useEffect, useRef } from 'react';
import { useIsSmallScreen, usePrefersReducedMotion, useSaveData } from '../hooks/useMediaPreferences';

const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
const RAIN_RGB = '61, 220, 132';

interface MatrixRainProps {
  className?: string;
  intensity?: 'full' | 'faint';
}

export function MatrixRain({ className, intensity = 'full' }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const saveData = useSaveData();
  const isSmall = useIsSmallScreen();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let columns = 0;
    let drops: number[] = [];
    let fontSize = 14;
    let paused = false;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      fontSize = isSmall ? 12 : intensity === 'faint' ? 12 : 14;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * -50);
    };

    const drawStaticField = () => {
      ctx.fillStyle = '#050805';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;
      const alpha = intensity === 'faint' ? 0.06 : 0.12;
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < canvas.height / fontSize; y++) {
          if (Math.random() > 0.7) {
            const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            ctx.fillStyle = `rgba(${RAIN_RGB}, ${alpha})`;
            ctx.fillText(ch, x * fontSize, y * fontSize);
          }
        }
      }
    };

    const drawRain = () => {
      ctx.fillStyle = 'rgba(5, 8, 5, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;

      const baseAlpha = intensity === 'faint' ? 0.18 : 0.38;
      const throttle = saveData || isSmall;

      for (let i = 0; i < drops.length; i++) {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = `rgba(${RAIN_RGB}, ${baseAlpha * (0.4 + Math.random() * 0.6)})`;
        ctx.fillText(ch, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += throttle ? 0.5 : 1;
      }
    };

    const shouldAnimate = !reducedMotion && !(saveData && intensity === 'full');

    const loop = () => {
      if (!paused && document.visibilityState === 'visible' && shouldAnimate) {
        drawRain();
      }
      animationId = window.requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      paused = document.visibilityState === 'hidden';
    };

    resize();
    if (reducedMotion || (saveData && intensity === 'full')) {
      drawStaticField();
    } else {
      drawRain();
      animationId = window.requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.cancelAnimationFrame(animationId);
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reducedMotion, saveData, isSmall, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
