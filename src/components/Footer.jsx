import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerColumn}>
          <h4>Dasar</h4>
          <ul>
            <li><Link href="/bab-1-pengenalan-jsx">Bab 1: JSX</Link></li>
            <li><Link href="/bab-2-state-interaktivitas">Bab 2: State</Link></li>
            <li><Link href="/bab-3-list-props">Bab 3: List & Props</Link></li>
            <li><Link href="/bab-4-use-effect">Bab 4: Effect Hook</Link></li>
            <li><Link href="/bab-5-context-api">Bab 5: Context API</Link></li>
            <li><Link href="/bab-6-custom-hooks">Bab 6: Custom Hooks</Link></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Intermediate</h4>
          <ul>
            <li><Link href="#">Bab 7: React Router</Link></li>
            <li><Link href="#">Bab 8: Form</Link></li>
            <li><Link href="#">Bab 9: State Management</Link></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Advanced</h4>
          <ul>
            <li><Link href="#">Bab 10: Optimasi</Link></li>
            <li><Link href="#">Bab 11: Testing</Link></li>
            <li><Link href="#">Bab 12: TypeScript</Link></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Sosial Media</h4>
          <div className={styles.socials}>
            <a href="https://github.com/Joevan29" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialIcon}>
              <GitHubIcon />
            </a>
            <a href="https://www.instagram.com/jvnprmnachmd" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}>
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear} ReactModule. Dibuat dengan Gabut dan Next.js.</p>
      </div>
    </footer>
  );
}
