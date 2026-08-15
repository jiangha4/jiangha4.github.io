import { scrollingLogs } from '../content';
import { usePrefersReducedMotion } from '../hooks/useMediaPreferences';
import styles from './ScrollingLogs.module.css';

export function ScrollingLogs() {
  const reducedMotion = usePrefersReducedMotion();
  const logs = scrollingLogs;

  if (reducedMotion) {
    return (
      <aside className={styles.static} aria-hidden="true">
        {logs.slice(0, 6).map((line) => (
          <div key={line} className={styles.staticLine}>{line}</div>
        ))}
      </aside>
    );
  }

  return (
    <aside className={styles.column} aria-hidden="true">
      <div className={styles.track}>
        {logs.map((line) => (
          <div key={line} className={styles.line}>{line}</div>
        ))}
        {logs.map((line) => (
          <div key={`dup-${line}`} className={styles.line}>{line}</div>
        ))}
      </div>
    </aside>
  );
}
