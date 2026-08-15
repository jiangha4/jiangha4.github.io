import { stackItems } from '../content';
import { usePrefersReducedMotion } from '../hooks/useMediaPreferences';
import styles from './Stack.module.css';

export function Stack() {
  const reducedMotion = usePrefersReducedMotion();
  const tickerText = stackItems.join('  ·  ');

  return (
    <section id="stack" className={styles.stack} aria-labelledby="stack-heading">
      <div className={styles.inner}>
        <h2 id="stack-heading">stack</h2>
        <div className={styles.tickerWrap} aria-hidden={reducedMotion}>
          {!reducedMotion && (
            <div className={styles.ticker}>
              <div className={styles.track}>
                <span>{tickerText}</span>
                <span>{tickerText}</span>
              </div>
            </div>
          )}
        </div>
        <ul className={styles.staticList}>
          {stackItems.map((item) => (
            <li key={item} className={styles.chip}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
