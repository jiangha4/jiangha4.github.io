import { contactContent } from '../content';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <h2 id="contact-heading">contact</h2>
        <div className={styles.panel}>
          <ul className={styles.list}>
            <li>
              <span className={styles.label}>email</span>
              <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
            </li>
            <li>
              <span className={styles.label}>linkedin</span>
              <a href={contactContent.linkedin} rel="noopener noreferrer" target="_blank">
                david-jiang-48773b96
              </a>
            </li>
            <li>
              <span className={styles.label}>github</span>
              <a href={contactContent.github} rel="noopener noreferrer" target="_blank">
                jiangha4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
