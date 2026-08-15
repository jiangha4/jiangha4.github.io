import { useRef } from 'react';
import { signalContent } from '../content';
import { DecodeLine, SectionDecode } from '../hooks/useSectionDecode';
import styles from './Signal.module.css';

export function Signal() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionDecode sectionRef={sectionRef}>
      <section id="signal" ref={sectionRef} className={styles.section} aria-labelledby="signal-heading">
        <div className={styles.inner}>
          <DecodeLine as="h2" id="signal-heading" className={styles.heading}>
            {signalContent.heading}
          </DecodeLine>
          <article className={styles.jeterPanel} aria-labelledby="jeter-lead-title">
            <header className={styles.jeterHeader}>
              <DecodeLine as="h3" id="jeter-lead-title" className={styles.jeterName}>
                {signalContent.leadHeading}
              </DecodeLine>
              <DecodeLine as="p" className={styles.jeterType}>
                {signalContent.leadType}
              </DecodeLine>
            </header>
            {signalContent.paragraphs.map((paragraph, i) => (
              <DecodeLine key={i} as="p" className={styles.body}>
                {paragraph}
              </DecodeLine>
            ))}
          </article>
        </div>
      </section>
    </SectionDecode>
  );
}
