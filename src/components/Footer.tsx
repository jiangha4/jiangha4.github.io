import { contactContent } from '../content';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© {year} David Jiang</p>
      <a
        href={contactContent.repoUrl}
        className={styles.source}
        rel="noopener noreferrer"
        target="_blank"
      >
        source
      </a>
    </footer>
  );
}
