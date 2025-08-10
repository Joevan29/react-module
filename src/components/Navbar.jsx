'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import styles from '@/styles/Navbar.module.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ReactModule
        </Link>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <a href="https://github.com/Joevan29" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}