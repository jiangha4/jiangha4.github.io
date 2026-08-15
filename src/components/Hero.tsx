import { BootSequence } from './BootSequence';
import { MatrixRain } from './MatrixRain';
import { ScrollingLogs } from './ScrollingLogs';
import { heroContent } from '../content';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.rainWrap}>
        <MatrixRain className={styles.rain} intensity="full" />
      </div>
      <div className={styles.content}>
        <ScrollingLogs />
        <div className={styles.terminal}>
          <BootSequence />
          <h1 id="hero-heading" className={styles.visuallyHidden}>
            David Jiang
          </h1>
          <p className={styles.proof}>{heroContent.proofLine}</p>
          <div className={styles.actions}>
            {heroContent.actions.map((action) => (
              <a
                key={action.target}
                href={`#${action.target}`}
                className={styles.action}
              >
                [ {action.label} ]
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
