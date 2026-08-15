import { experienceContent } from '../content';
import { MatrixRain } from './MatrixRain';
import styles from './Experience.module.css';

export function Experience() {
  const { featuredRoles, earlierRows, educationRows } = experienceContent;

  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-heading">
      <div className={styles.rainWrap}>
        <MatrixRain className={styles.rain} intensity="faint" />
      </div>
      <div className={styles.inner}>
        <h2 id="experience-heading">experience</h2>

        <div className={styles.featured}>
          {featuredRoles.map((role) => (
            <article
              key={role.id}
              className={styles.panel}
              aria-labelledby={`experience-${role.id}-chrome`}
            >
              <header className={styles.chrome} id={`experience-${role.id}-chrome`}>
                {role.chrome}
              </header>

              {role.leadBeat && (
                <p className={styles.leadBeat}>{role.leadBeat}</p>
              )}

              {role.caseStudyLinks && (
                <p className={styles.links}>
                  {role.caseStudyLinks.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 && <span className={styles.linkSep}> · </span>}
                      <a href={link.href} className={styles.caseLink}>
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              )}

              {role.fields && (
                <dl className={styles.fields}>
                  {role.fields.map((field) => (
                    <div key={field.label} className={styles.field}>
                      <dt>{field.label}</dt>
                      <dd>{field.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>

        <ul className={styles.rows} aria-label="Earlier roles and education">
          {earlierRows.map((row) => (
            <li key={row} className={styles.row}>{row}</li>
          ))}
          {educationRows.map((row) => (
            <li key={row} className={styles.row}>{row}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
