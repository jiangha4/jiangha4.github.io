import { reservedWorkPanel } from '../content';
import styles from './ReservedPanel.module.css';

type ReservedPanelData = typeof reservedWorkPanel;

interface ReservedPanelProps {
  panel: ReservedPanelData;
  index: number;
}

export function ReservedPanel({ panel, index }: ReservedPanelProps) {
  return (
    <article
      className={styles.panel}
      aria-labelledby={`work-${panel.id}-title`}
      aria-describedby={`work-${panel.id}-note`}
    >
      <header className={styles.header}>
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <p className={styles.chrome}>{panel.chrome}</p>
          <h3 id={`work-${panel.id}-title`} className={styles.label}>
            {panel.label}
          </h3>
        </div>
      </header>
      <p id={`work-${panel.id}-note`} className={styles.note}>
        {panel.note}
      </p>
    </article>
  );
}
