import { useRef } from 'react';
import { experienceContent } from '../content';
import { DecodeLine, SectionDecode } from '../hooks/useSectionDecode';
import styles from './Experience.module.css';

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { featuredRoles, earlierRows, educationRows } = experienceContent;

  return (
    <SectionDecode sectionRef={sectionRef}>
      <section id="experience" ref={sectionRef} className={styles.experience} aria-labelledby="experience-heading">
        <div className={styles.inner}>
          <DecodeLine as="h2" id="experience-heading" className={styles.heading}>
            experience
          </DecodeLine>

          <div className={styles.featured}>
            {featuredRoles.map((role) => (
              <article
                key={role.id}
                className={styles.panel}
                aria-labelledby={`experience-${role.id}-chrome`}
              >
                <DecodeLine
                  as="header"
                  id={`experience-${role.id}-chrome`}
                  className={styles.chrome}
                >
                  {role.chrome}
                </DecodeLine>

                {role.leadBeat && (
                  <DecodeLine as="p" className={styles.leadBeat}>
                    {role.leadBeat}
                  </DecodeLine>
                )}

                {role.caseStudyLinks && (
                  <p className={styles.links}>
                    {role.caseStudyLinks.map((link, i) => (
                      <span key={link.href}>
                        {i > 0 && <span className={styles.linkSep}> · </span>}
                        <DecodeLine
                          as="a"
                          href={link.href}
                          className={styles.caseLink}
                        >
                          {link.label}
                        </DecodeLine>
                      </span>
                    ))}
                  </p>
                )}

                {role.fields && (
                  <dl className={styles.fields}>
                    {role.fields.map((field) => (
                      <div key={field.label} className={styles.field}>
                        <DecodeLine as="dt">{field.label}</DecodeLine>
                        <DecodeLine as="dd">{field.value}</DecodeLine>
                      </div>
                    ))}
                  </dl>
                )}
              </article>
            ))}
          </div>

          <ul className={styles.rows} aria-label="Earlier roles and education">
            {earlierRows.map((row) => (
              <li key={row} className={styles.row}>
                <DecodeLine as="span">{row}</DecodeLine>
              </li>
            ))}
            {educationRows.map((row) => (
              <li key={row} className={styles.row}>
                <DecodeLine as="span">{row}</DecodeLine>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SectionDecode>
  );
}
