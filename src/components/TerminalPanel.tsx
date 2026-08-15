import type { WorkPanel } from '../content';
import { DecodeLine } from '../hooks/useSectionDecode';
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
          <DecodeLine as="h3" id={`work-${panel.id}-title`} className={styles.name}>
            {panel.name}
          </DecodeLine>
          <DecodeLine as="p" className={styles.type}>
            {panel.type}
          </DecodeLine>
        </div>
      </header>
      <dl className={styles.fields}>
        <div className={styles.field}>
          <DecodeLine as="dt">problem</DecodeLine>
          <DecodeLine as="dd">{panel.problem}</DecodeLine>
        </div>
        <div className={styles.field}>
          <DecodeLine as="dt">built</DecodeLine>
          <DecodeLine as="dd">{panel.built}</DecodeLine>
        </div>
        <div className={styles.field}>
          <DecodeLine as="dt">outcome</DecodeLine>
          <DecodeLine as="dd">{panel.outcome}</DecodeLine>
        </div>
      </dl>
    </article>
  );
}
