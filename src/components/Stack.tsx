import { stackContent, stackItems } from '../content';
import styles from './Stack.module.css';

export function Stack() {
  return (
    <section id="stack" className={styles.stack} aria-labelledby="stack-heading">
      <div className={styles.inner}>
        <h2 id="stack-heading">stack</h2>
        <details className={styles.fold}>
          <summary className={styles.summary}>{stackContent.foldLabel}</summary>
          <ul className={styles.list}>
            {stackItems.map((item) => (
              <li key={item} className={styles.item}>{item}</li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
