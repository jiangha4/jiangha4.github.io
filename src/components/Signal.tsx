import { signalContent } from '../content';
import styles from './Section.module.css';

export function Signal() {
  return (
    <section id="signal" className={styles.section} aria-labelledby="signal-heading">
      <div className={styles.inner}>
        <h2 id="signal-heading">{signalContent.heading}</h2>
        <div className={styles.panel}>
          <p className={styles.body}>{signalContent.paragraph}</p>
        </div>
      </div>
    </section>
  );
}
