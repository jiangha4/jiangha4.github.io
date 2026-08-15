import { educationEntries, experienceEntries } from '../content';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-heading">
      <div className={styles.inner}>
        <h2 id="experience-heading">experience</h2>
        <ol className={styles.timeline}>
          {experienceEntries.map((entry) => (
            <li key={entry.id} className={styles.entry}>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.meta}>
                  <span className={styles.org}>{entry.organization}</span>
                  <time className={styles.period}>{entry.period}</time>
                </div>
                <p className={styles.role}>{entry.role}</p>
                {entry.details && (
                  <p className={styles.details}>{entry.details}</p>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.education}>
          <h3 className={styles.eduHeading}>education</h3>
          <ul className={styles.eduList}>
            {educationEntries.map((edu) => (
              <li key={edu.institution} className={styles.eduItem}>
                <span className={styles.eduDegree}>{edu.degree}</span>
                <span className={styles.eduInst}>{edu.institution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
