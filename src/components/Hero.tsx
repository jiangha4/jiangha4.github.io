import { MatrixRain } from './MatrixRain';
import { heroContent } from '../content';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.rainWrap}>
        <MatrixRain className={styles.rain} intensity="full" />
      </div>
      <div className={styles.content}>
        <div className={styles.terminal}>
          <h1 id="hero-heading" className={styles.name}>
            {heroContent.name}
          </h1>
          <p className={styles.role}>{heroContent.role}</p>
          <p className={styles.lead}>{heroContent.leadLine}</p>
          <p className={styles.themes}>{heroContent.themesLine}</p>
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
