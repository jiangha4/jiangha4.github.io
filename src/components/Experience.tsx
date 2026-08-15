import { useRef } from 'react';
import { experienceContent, type ExperienceEntry } from '../content';
import { DecodeLine, SectionDecode } from '../hooks/useSectionDecode';
import styles from './Experience.module.css';

function ExperienceEntryContent({ entry }: { entry: ExperienceEntry }) {
  if (entry.kind === 'nike-iii') {
    return (
      <div className={styles.entryContent} aria-labelledby={`experience-${entry.id}-title`}>
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
      </div>
    );
  }

  if (entry.kind === 'nike-ii') {
    return (
      <div className={styles.entryContentHeavy} aria-labelledby={`experience-${entry.id}-title`}>
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
      </div>
    );
  }

  return (
    <p className={styles.lineEntry}>
      <DecodeLine as="span">{entry.line}</DecodeLine>
    </p>
  );
}

function RailNode({ entry }: { entry: ExperienceEntry }) {
  const isHeavy = entry.kind === 'nike-ii' && entry.heavy;
  const isFilled = entry.node === 'filled';

  return (
    <div
      className={[
        styles.node,
        isFilled ? styles.nodeFilled : styles.nodeHollow,
        isHeavy ? styles.nodeHeavy : '',
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { entries, educationRows } = experienceContent;

  return (
    <SectionDecode sectionRef={sectionRef}>
      <section id="experience" ref={sectionRef} className={styles.experience} aria-labelledby="experience-heading">
        <div className={styles.inner}>
          <DecodeLine as="h2" id="experience-heading" className={styles.heading}>
            experience
          </DecodeLine>

          <div className={styles.timelineWrap}>
            <div className={styles.timelineRows} aria-label="Career timeline 2025 to 2016">
              <div className={styles.railLine} aria-hidden="true" />
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className={`${styles.timelineRow} ${entry.kind === 'nike-ii' ? styles.timelineRowHeavy : ''}`}
                >
                  <div className={styles.railCell}>
                    <RailNode entry={entry} />
                    <span className={styles.railYear}>{entry.yearMark}</span>
                  </div>
                  <div className={styles.rowBody}>
                    <ExperienceEntryContent entry={entry} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.educationBelow}>
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
      </section>
    </SectionDecode>
  );
}
