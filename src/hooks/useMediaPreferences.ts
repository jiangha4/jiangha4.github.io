import { useEffect, useState } from 'react';

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

export function useSaveData(): boolean {
  const [saveData, setSaveData] = useState(() => {
    if (typeof navigator === 'undefined') return false;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    return conn?.saveData ?? false;
  });

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; addEventListener?: (type: string, fn: () => void) => void; removeEventListener?: (type: string, fn: () => void) => void } }).connection;
    if (!conn?.addEventListener) return;
    const handler = () => setSaveData(conn.saveData ?? false);
    conn.addEventListener('change', handler);
    return () => conn.removeEventListener?.('change', handler);
  }, []);

  return saveData;
}

export function useIsSmallScreen(): boolean {
  const [small, setSmall] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 640px)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const handler = (e: MediaQueryListEvent) => setSmall(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return small;
}
