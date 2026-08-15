import type { WorkPanel } from '../content';
import styles from './TerminalPanel.module.css';

interface TerminalPanelProps {
  panel: WorkPanel;
  index: number;
}

export function TerminalPanel({ panel, index }: TerminalPanelProps) {
  return (
    <article id={`work-${panel.id}`} className={styles.panel} aria-labelledby={`work-${panel.id}-title`}>
      <header className={styles.header}>
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 id={`work-${panel.id}-title`} className={styles.name}>
            {panel.name}
          </h3>
          <p className={styles.type}>{panel.type}</p>
        </div>
      </header>
      <dl className={styles.fields}>
        <div className={styles.field}>
          <dt>problem</dt>
          <dd>{panel.problem}</dd>
        </div>
        <div className={styles.field}>
          <dt>built</dt>
          <dd>{panel.built}</dd>
        </div>
        <div className={styles.field}>
          <dt>outcome</dt>
          <dd>{panel.outcome}</dd>
        </div>
      </dl>
    </article>
  );
}
