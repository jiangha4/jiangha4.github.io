import { caseStudyPanels, reservedWorkPanel } from '../content';
import { MatrixRain } from './MatrixRain';
import { ReservedPanel } from './ReservedPanel';
import { TerminalPanel } from './TerminalPanel';
import styles from './Work.module.css';

export function Work() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-heading">
      <div className={styles.rainWrap}>
        <MatrixRain className={styles.rain} intensity="faint" />
      </div>
      <div className={styles.inner}>
        <h2 id="work-heading">case studies</h2>
        <p className={styles.intro}>
          Deep dives on lakehouse migration and AI coding spend analytics. Jeter platform scope lives in signal.
        </p>
        <div className={styles.grid}>
          {caseStudyPanels.map((panel, i) => (
            <TerminalPanel key={panel.id} panel={panel} index={i} />
          ))}
          <ReservedPanel panel={reservedWorkPanel} index={caseStudyPanels.length} />
        </div>
      </div>
    </section>
  );
}
