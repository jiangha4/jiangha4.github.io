import { workPanels } from '../content';
import { MatrixRain } from './MatrixRain';
import { TerminalPanel } from './TerminalPanel';
import styles from './Work.module.css';

export function Work() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-heading">
      <div className={styles.rainWrap}>
        <MatrixRain className={styles.rain} intensity="faint" />
      </div>
      <div className={styles.inner}>
        <h2 id="work-heading">selected work</h2>
        <div className={styles.grid}>
          {workPanels.map((panel, i) => (
            <TerminalPanel key={panel.id} panel={panel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
