import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState, useId, type RefObject, type ReactNode } from 'react';
import { usePrefersReducedMotion } from './useMediaPreferences';

const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
const MS_PER_GLYPH = 28;
const MAX_LINE_MS = 700;
const LINE_STAGGER_MS = 80;

export function randomGlyphs(length: number): string {
  if (length === 0) return '';
  return Array.from({ length }, () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join('');
}

interface DecodeLineController {
  setGlyphs: () => void;
  startDecode: (delayMs: number) => void;
}

interface DecodeContextValue {
  registerLine: (id: string, controller: DecodeLineController) => void;
  reduced: boolean;
}

const DecodeContext = createContext<DecodeContextValue | null>(null);

function createController(text: string, setDisplay: (value: string) => void): DecodeLineController {
  let intervalId = 0;
  let timeoutId = 0;

  const clearTimers = () => {
    window.clearInterval(intervalId);
    window.clearTimeout(timeoutId);
  };

  return {
    setGlyphs: () => {
      clearTimers();
      setDisplay(randomGlyphs(text.length));
    },
    startDecode: (delayMs: number) => {
      clearTimers();
      if (text.length === 0) {
        setDisplay(text);
        return;
      }
      const duration = Math.min(text.length * MS_PER_GLYPH, MAX_LINE_MS);
      const stepMs = duration / text.length;
      timeoutId = window.setTimeout(() => {
        let resolved = 0;
        intervalId = window.setInterval(() => {
          resolved += 1;
          if (resolved >= text.length) {
            clearTimers();
            setDisplay(text);
          } else {
            setDisplay(text.slice(0, resolved) + randomGlyphs(text.length - resolved));
          }
        }, stepMs);
      }, delayMs);
    },
  };
}

export function SectionDecode({
  sectionRef,
  children,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  children: ReactNode;
}) {
  const reduced = usePrefersReducedMotion();
  const linesRef = useRef<Map<string, DecodeLineController>>(new Map());

  const registerLine = useCallback((id: string, controller: DecodeLineController) => {
    linesRef.current.set(id, controller);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reduced) return;

    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (triggered) return;
        const entry = entries.find((item) => item.target === el);
        if (entry && entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          triggered = true;
          observer.disconnect();
          Array.from(linesRef.current.values()).forEach((line, index) => {
            line.startDecode(index * LINE_STAGGER_MS);
          });
        }
      },
      { threshold: [0, 0.2, 0.5, 1] },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionRef, reduced]);

  return (
    <DecodeContext.Provider value={{ registerLine, reduced }}>
      {children}
    </DecodeContext.Provider>
  );
}

type DecodeLineElement = 'span' | 'p' | 'h2' | 'h3' | 'dt' | 'dd' | 'li' | 'a' | 'header';

interface DecodeLineProps {
  as?: DecodeLineElement;
  className?: string;
  children: string;
  id?: string;
  href?: string;
  rel?: string;
  target?: string;
}

export function DecodeLine({
  as: Tag = 'span',
  className,
  children,
  id,
  href,
  rel,
  target,
}: DecodeLineProps) {
  const text = children;
  const lineId = useId();
  const ctx = useContext(DecodeContext);
  const reduced = ctx?.reduced ?? true;
  const [display, setDisplay] = useState(reduced ? text : randomGlyphs(text.length));

  useLayoutEffect(() => {
    if (!ctx) {
      setDisplay(text);
      return;
    }
    const controller = createController(text, setDisplay);
    ctx.registerLine(lineId, controller);
    if (!ctx.reduced) {
      controller.setGlyphs();
    } else {
      setDisplay(text);
    }
  }, [text, ctx, lineId]);

  if (Tag === 'a') {
    return (
      <a id={id} className={className} href={href} rel={rel} target={target}>
        {display}
      </a>
    );
  }

  return (
    <Tag id={id} className={className}>
      {display}
    </Tag>
  );
}
