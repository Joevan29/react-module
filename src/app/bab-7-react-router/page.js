'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '@/styles/Bab7.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children }) => <pre className={styles.codeBlock}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// --- Contoh Interaktif: Simulasi React Router ---

// Halaman-halaman dummy untuk simulasi
const HomePage = () => <div><h2>Halaman Utama</h2><p>Ini adalah konten untuk halaman utama.</p></div>;
const AboutPage = () => <div><h2>Tentang Kami</h2><p>Ini adalah konten untuk halaman tentang kami.</p></div>;
const ProfilePage = () => <div><h2>Profil Pengguna</h2><p>Ini adalah konten untuk halaman profil.</p></div>;

const RouterExample = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'about':
                return <AboutPage />;
            case 'profile':
                return <ProfilePage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className={styles.routerSimulator}>
            <nav className={styles.simulatedNav}>
                <button onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? styles.active : ''}>
                    /
                </button>
                <button onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? styles.active : ''}>
                    /tentang
                </button>
                <button onClick={() => setCurrentPage('profile')} className={currentPage === 'profile' ? styles.active : ''}>
                    /profil
                </button>
            </nav>
            <div className={styles.simulatedPageContent}>
                {renderPage()}
            </div>
        </div>
    );
};


// --- Komponen Utama Halaman ---
export default function BabTujuhPage() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                {/* --- HEADER --- */}
                <motion.header 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={styles.header}
                >
                    <h1>Bab 7: React Router</h1>
                    <p>Membangun Single Page Application (SPA) dengan navigasi sisi klien.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Apa itu Client-Side Routing? --- */}
                    <section className={styles.contentSection}>
                        <h2>Apa itu Client-Side Routing?</h2>
                        <p>
                            Secara tradisional, saat Anda mengklik sebuah link, browser akan membuat permintaan baru ke server dan memuat ulang seluruh halaman. Pada <Highlight>Single Page Application (SPA)</Highlight>, navigasi ditangani di sisi klien (browser) oleh JavaScript. URL di address bar berubah dan konten halaman diperbarui tanpa perlu me-refresh halaman. Ini memberikan pengalaman pengguna yang lebih cepat dan mulus, seperti menggunakan aplikasi desktop.
                        </p>
                        <p>
                            <Highlight>React Router</Highlight> adalah library standar untuk mengimplementasikan fungsionalitas ini di React.
                        </p>
                    </section>

                    {/* --- Komponen Inti React Router --- */}
                    <section className={styles.contentSection}>
                        <h2>Komponen Inti React Router</h2>
                        <p>Ada beberapa komponen utama yang perlu Anda ketahui:</p>
                        
                        <div className={styles.ruleCard}>
                            <h3>1. `BrowserRouter`, `Routes`, dan `Route`</h3>
                            <p>Ini adalah tiga serangkai yang mengatur sistem routing Anda.</p>
                            <CodeBlock>
{`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}`}
                            </CodeBlock>
                             <div className={styles.explanation}>
                                <ul>
                                    <li><Highlight>BrowserRouter</Highlight>: Membungkus seluruh aplikasi Anda untuk mengaktifkan routing.</li>
                                    <li><Highlight>Routes</Highlight>: Membungkus semua kemungkinan rute.</li>
                                    <li><Highlight>Route</Highlight>: Mendefinisikan satu rute, menghubungkan sebuah `path` (URL) dengan `element` (komponen) yang akan ditampilkan.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>2. Komponen `Link`</h3>
                            <p>Untuk membuat tautan navigasi, jangan gunakan tag biasa karena akan menyebabkan refresh halaman. Gunakan komponen <Highlight>Link</Highlight> dari React Router.</p>
                            <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}`}
                                </CodeBlock>
                                <h4>Simulasi Interaktif:</h4>
                                <p>Klik tombol di bawah ini untuk melihat bagaimana konten berubah tanpa refresh halaman.</p>
                                <div className={styles.renderOutput}>
                                    <RouterExample />
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>

                {/* --- NAVIGASI --- */}
                <motion.footer 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className={styles.navigation}
                >
                    <Link href="/bab-6-custom-hooks" className={styles.backButton}>&larr; Kembali ke Bab 6</Link>
                    <Link href="/bab-8-bekerja-dengan-form" className={styles.nextButton}>Lanjut ke Bab 8 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
