import { useRef } from 'react';
import { contactContent } from '../content';
import { DecodeLine, SectionDecode } from '../hooks/useSectionDecode';
import styles from './Contact.module.css';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SectionDecode sectionRef={sectionRef}>
      <section id="contact" ref={sectionRef} className={styles.contact} aria-labelledby="contact-heading">
        <div className={styles.inner}>
          <DecodeLine as="h2" id="contact-heading" className={styles.heading}>
            contact
          </DecodeLine>
          <div className={styles.panel}>
            <ul className={styles.list}>
              <li>
                <DecodeLine as="span" className={styles.label}>email</DecodeLine>
                <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
              </li>
              <li>
                <DecodeLine as="span" className={styles.label}>linkedin</DecodeLine>
                <a href={contactContent.linkedin} rel="noopener noreferrer" target="_blank">
                  david-jiang-48773b96
                </a>
              </li>
              <li>
                <DecodeLine as="span" className={styles.label}>github</DecodeLine>
                <a href={contactContent.github} rel="noopener noreferrer" target="_blank">
                  jiangha4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SectionDecode>
  );
}
