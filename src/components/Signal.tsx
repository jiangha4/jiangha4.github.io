import { signalContent } from '../content';
import styles from './Signal.module.css';

export function Signal() {
  return (
    <section id="signal" className={styles.section} aria-labelledby="signal-heading">
      <div className={styles.inner}>
        <h2 id="signal-heading">{signalContent.heading}</h2>
        <article className={styles.jeterPanel} aria-labelledby="jeter-lead-title">
          <header className={styles.jeterHeader}>
            <h3 id="jeter-lead-title" className={styles.jeterName}>
              {signalContent.leadHeading}
            </h3>
            <p className={styles.jeterType}>{signalContent.leadType}</p>
          </header>
          {signalContent.paragraphs.map((paragraph, i) => (
            <p key={i} className={styles.body}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}
