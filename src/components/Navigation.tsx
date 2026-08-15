import { useEffect, useState } from 'react';
import { navItems } from '../content';
import styles from './Navigation.module.css';

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Primary">
        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={styles.menuIcon} aria-hidden="true" />
          <span className={styles.menuLabel}>{menuOpen ? 'close' : 'menu'}</span>
        </button>
        <ul
          id="site-nav-links"
          className={`${styles.links} ${menuOpen ? styles.open : ''}`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={styles.link} onClick={handleNavClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
