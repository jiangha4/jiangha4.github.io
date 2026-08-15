import { useRef } from 'react';
import { caseStudyPanels, reservedWorkPanel } from '../content';
import { DecodeLine, SectionDecode } from '../hooks/useSectionDecode';
import { ReservedPanel } from './ReservedPanel';
import { TerminalPanel } from './TerminalPanel';
import styles from './Work.module.css';

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionDecode sectionRef={sectionRef}>
      <section id="work" ref={sectionRef} className={styles.work} aria-labelledby="work-heading">
        <div className={styles.inner}>
          <DecodeLine as="h2" id="work-heading" className={styles.heading}>
            case studies
          </DecodeLine>
          <DecodeLine as="p" className={styles.intro}>
            Deep dives on lakehouse migration and AI coding spend analytics. Jeter platform scope lives in signal.
          </DecodeLine>
          <div className={styles.grid}>
            {caseStudyPanels.map((panel, i) => (
              <TerminalPanel key={panel.id} panel={panel} index={i} />
            ))}
            <ReservedPanel panel={reservedWorkPanel} index={caseStudyPanels.length} />
          </div>
        </div>
      </section>
    </SectionDecode>
  );
}
