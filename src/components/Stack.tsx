import { useRef } from 'react';
import { stackContent, stackItems } from '../content';
import { DecodeLine, SectionDecode } from '../hooks/useSectionDecode';
import styles from './Stack.module.css';

export function Stack() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionDecode sectionRef={sectionRef}>
      <section id="stack" ref={sectionRef} className={styles.stack} aria-labelledby="stack-heading">
        <div className={styles.inner}>
          <DecodeLine as="h2" id="stack-heading" className={styles.heading}>
            stack
          </DecodeLine>
          <details className={styles.fold}>
            <summary className={styles.summary}>
              <DecodeLine as="span">{stackContent.foldLabel}</DecodeLine>
            </summary>
            <ul className={styles.list}>
              {stackItems.map((item) => (
                <li key={item} className={styles.item}>
                  <DecodeLine as="span">{item}</DecodeLine>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>
    </SectionDecode>
  );
}
