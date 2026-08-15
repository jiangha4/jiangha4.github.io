import { useRef } from 'react';
import { experienceContent, type ExperienceEntry } from '../content';
import { DecodeLine, SectionDecode } from '../hooks/useSectionDecode';
import styles from './Experience.module.css';

function railMarkPosition(year: number, start: number, end: number): number {
  const span = end - start;
  if (span <= 0) return 0;
  return ((end - year) / span) * 100;
}

function ExperienceEntryBlock({ entry }: { entry: ExperienceEntry }) {
  if (entry.kind === 'nike-iii') {
    return (
      <article className={styles.entryBlock} aria-labelledby={`experience-${entry.id}-title`}>
        <header className={styles.entryHeader}>
          <DecodeLine as="h3" id={`experience-${entry.id}-title`} className={styles.entryTitle}>
            {entry.title}
          </DecodeLine>
          <DecodeLine as="p" className={styles.entryPeriod}>{entry.period}</DecodeLine>
        </header>
        <DecodeLine as="p" className={styles.leadBeat}>{entry.leadBeat}</DecodeLine>
        <p className={styles.links}>
          {entry.caseStudyLinks.map((link, i) => (
            <span key={link.href}>
              {i > 0 && <span className={styles.linkSep}> · </span>}
              <DecodeLine as="a" href={link.href} className={styles.caseLink}>
                {link.label}
              </DecodeLine>
            </span>
          ))}
        </p>
      </article>
    );
  }

  if (entry.kind === 'nike-ii') {
    return (
      <article className={styles.entryBlock} aria-labelledby={`experience-${entry.id}-title`}>
        <header className={styles.entryHeader}>
          <DecodeLine as="h3" id={`experience-${entry.id}-title`} className={styles.entryTitle}>
            {entry.title}
          </DecodeLine>
          <DecodeLine as="p" className={styles.entryPeriod}>{entry.period}</DecodeLine>
        </header>
        <dl className={styles.fields}>
          {entry.fields.map((field) => (
            <div key={field.label} className={styles.field}>
              <DecodeLine as="dt">{field.label}</DecodeLine>
              <DecodeLine as="dd">{field.value}</DecodeLine>
            </div>
          ))}
        </dl>
      </article>
    );
  }

  return (
    <p className={styles.lineEntry}>
      <DecodeLine as="span">{entry.line}</DecodeLine>
    </p>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { rail, entries, educationRows } = experienceContent;

  return (
    <SectionDecode sectionRef={sectionRef}>
      <section id="experience" ref={sectionRef} className={styles.experience} aria-labelledby="experience-heading">
        <div className={styles.inner}>
          <DecodeLine as="h2" id="experience-heading" className={styles.heading}>
            experience
          </DecodeLine>

          <div className={styles.timeline}>
            <aside className={styles.yearRail} aria-label="Career timeline 2016 to 2026">
              <div className={styles.railLine} aria-hidden="true" />
              {rail.marks.map((mark) => {
                const yearNum = Number.parseInt(mark.year, 10);
                const top = railMarkPosition(yearNum, rail.startYear, rail.endYear);
                return (
                  <div
                    key={mark.year}
                    className={styles.railMark}
                    style={{ top: `${top}%` }}
                  >
                    <span className={styles.railYear}>{mark.year}</span>
                    {mark.sublabel && (
                      <span className={styles.railSublabel}>{mark.sublabel}</span>
                    )}
                  </div>
                );
              })}
            </aside>

            <div className={styles.railContent}>
              {entries.map((entry) => (
                <div key={entry.id} className={styles.timelineRow}>
                  <div className={styles.rowYear} aria-hidden="true">
                    <span className={styles.rowYearValue}>{entry.yearMark}</span>
                    {entry.yearEnd && (
                      <span className={styles.rowYearEnd}>–{entry.yearEnd}</span>
                    )}
                    {'yearSublabel' in entry && entry.yearSublabel && (
                      <span className={styles.rowYearSub}>{entry.yearSublabel}</span>
                    )}
                  </div>
                  <div className={styles.rowBody}>
                    <ExperienceEntryBlock entry={entry} />
                  </div>
                </div>
              ))}

              <div className={styles.educationBlock}>
                <DecodeLine as="h3" className={styles.educationHeading}>education</DecodeLine>
                <ul className={styles.educationList}>
                  {educationRows.map((row) => (
                    <li key={row} className={styles.educationRow}>
                      <DecodeLine as="span">{row}</DecodeLine>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionDecode>
  );
}
