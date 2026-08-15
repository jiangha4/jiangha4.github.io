import { useEffect, useRef } from 'react';
import { useIsSmallScreen, usePrefersReducedMotion, useSaveData } from '../hooks/useMediaPreferences';
import { randomGlyphs } from '../hooks/useSectionDecode';
import styles from './MatrixRain.module.css';

const RAIN_RGB = '61, 204, 122';
const DROP_STEP = 0.2;
const FADE_ALPHA = 0.025;
const FIELD_CELL_ALPHA = 0.1;
const FIELD_CELL_FILL = 0.2;

export function MatrixRain() {
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
    let rows = 0;
    let drops: number[] = [];
    let fontSize = 14;
    let paused = false;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      fontSize = isSmall ? 12 : 14;
      columns = Math.floor(canvas.width / fontSize);
      rows = Math.ceil(canvas.height / fontSize);
      drops = Array.from({ length: columns }, () => Math.random() * rows);
    };

    const drawSparseGlyphField = () => {
      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;
      for (let col = 0; col < columns; col++) {
        for (let row = 0; row < rows; row++) {
          if (Math.random() < FIELD_CELL_FILL) {
            const ch = randomGlyphs(1);
            ctx.fillStyle = `rgba(${RAIN_RGB}, ${FIELD_CELL_ALPHA})`;
            ctx.fillText(ch, col * fontSize, row * fontSize + fontSize);
          }
        }
      }
    };

    const drawStaticField = () => {
      ctx.fillStyle = '#050805';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawSparseGlyphField();
    };

    const drawRain = () => {
      ctx.fillStyle = `rgba(5, 8, 5, ${FADE_ALPHA})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawSparseGlyphField();

      ctx.font = `${fontSize}px "IBM Plex Mono", monospace`;

      const baseAlpha = 0.32;
      const dropStep = saveData ? DROP_STEP * 0.5 : DROP_STEP;

      for (let i = 0; i < drops.length; i++) {
        const ch = randomGlyphs(1);
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = `rgba(${RAIN_RGB}, ${baseAlpha * (0.4 + Math.random() * 0.6)})`;
        ctx.fillText(ch, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * rows;
        }
        drops[i] += dropStep;
      }
    };

    const shouldAnimate = !reducedMotion;

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
    if (reducedMotion) {
      drawStaticField();
    } else {
      drawRain();
      animationId = window.requestAnimationFrame(loop);
    }

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [reducedMotion, saveData, isSmall]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
    />
  );
}
