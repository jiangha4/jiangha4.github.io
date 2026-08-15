import { useCallback, useEffect, useState } from 'react';
import { heroContent } from '../content';
import { usePrefersReducedMotion } from '../hooks/useMediaPreferences';
import styles from './BootSequence.module.css';

interface BootSequenceProps {
  onComplete?: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const allLines = heroContent.bootLines;
  const currentLine = allLines[lineIndex] ?? '';
  const isDone = skipped || lineIndex >= allLines.length;

  const skip = useCallback(() => {
    if (!isDone) {
      setSkipped(true);
      setCompletedLines(allLines);
      onComplete?.();
    }
  }, [allLines, isDone, onComplete]);

  useEffect(() => {
    if (reducedMotion) {
      setSkipped(true);
      setCompletedLines(allLines);
      onComplete?.();
      return;
    }

    if (skipped || lineIndex >= allLines.length) {
      onComplete?.();
      return;
    }

    const timeout = window.setTimeout(() => {
      if (charIndex < currentLine.length) {
        setCharIndex((c) => c + 1);
      } else {
        setCompletedLines((prev) => [...prev, currentLine]);
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }
    }, charIndex === 0 && lineIndex > 0 ? 120 : 28);

    return () => window.clearTimeout(timeout);
  }, [
    reducedMotion,
    skipped,
    lineIndex,
    charIndex,
    currentLine,
    allLines,
    onComplete,
  ]);

  const displayLines = skipped
    ? allLines
    : [...completedLines, currentLine.slice(0, charIndex)];

  return (
    <div
      className={styles.boot}
      onClick={skip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') skip();
      }}
      role="group"
      aria-label="Boot sequence"
      tabIndex={0}
    >
      {displayLines.map((line, i) => (
        <div key={i} className={styles.line}>
          {line}
          {!isDone && i === displayLines.length - 1 && (
            <span className={styles.cursor} aria-hidden="true">▌</span>
          )}
        </div>
      ))}
      {!isDone && (
        <span className={styles.hint}>click to skip</span>
      )}
    </div>
  );
}
