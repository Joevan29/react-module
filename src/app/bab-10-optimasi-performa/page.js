'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback, memo } from 'react';
import styles from '@/styles/Bab10.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children }) => <pre className={styles.codeBlock}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// --- Contoh Interaktif: Optimasi Performa ---

// Child component yang sengaja dibuat "berat"
// Kita bungkus dengan memo agar tidak re-render jika props tidak berubah
const HeavyComponent = memo(({ onButtonClick }) => {
    console.log("HeavyComponent di-render ulang!"); // Ini akan muncul di console browser

    // Simulasi komponen yang berat
    let startTime = performance.now();
    while (performance.now() - startTime < 100) {
        // Sengaja memperlambat render
    }

    return (
        <div className={styles.heavyComponent}>
            <p>Ini adalah komponen berat yang seharusnya tidak sering di-render ulang.</p>
            <button onClick={onButtonClick}>Tombol di Komponen Berat</button>
        </div>
    );
});
HeavyComponent.displayName = 'HeavyComponent'; // Untuk debugging


const OptimizationExample = () => {
    const [time, setTime] = useState(0);
    const [renderLog, setRenderLog] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Ganti console.log dengan state untuk menampilkannya di UI
    const logRender = (message) => {
        setRenderLog(prevLog => [...prevLog.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    // Versi TANPA useCallback
    const handleButtonClickUnoptimized = () => {
        logRender("Tombol (tanpa useCallback) diklik!");
    };

    // Versi DENGAN useCallback
    const handleButtonClickOptimized = useCallback(() => {
        logRender("Tombol (DENGAN useCallback) diklik!");
    }, []); // Array dependensi kosong, fungsi ini tidak akan pernah dibuat ulang

    return (
        <div className={styles.optimizationExample}>
            <div className={styles.timer}>
                Waktu berjalan: <strong>{time}</strong> detik. (State ini berubah setiap detik, memicu re-render)
            </div>
            
            <div className={styles.comparisonGrid}>
                {/* Versi Tidak Teroptimasi */}
                <div className={styles.case}>
                    <h4>Tanpa Optimasi</h4>
                    <p>Fungsi `onClick` dibuat ulang setiap detik, menyebabkan komponen berat ikut re-render.</p>
                    <HeavyComponent onButtonClick={handleButtonClickUnoptimized} />
                </div>

                {/* Versi Teroptimasi */}
                <div className={styles.case}>
                    <h4>Dengan `useCallback`</h4>
                    <p>Fungsi `onClick` di-memoize, sehingga komponen berat tidak re-render saat waktu berubah.</p>
                    <HeavyComponent onButtonClick={handleButtonClickOptimized} />
                </div>
            </div>
            <div className={styles.logBox}>
                <h4>Log Render (Buka Console Browser):</h4>
                {renderLog.map((log, i) => <p key={i}>{log}</p>)}
            </div>
        </div>
    );
};


// --- Komponen Utama Halaman ---
export default function BabSepuluhPage() {
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
                    <h1>Bab 10: Optimasi Performa</h1>
                    <p>Mencegah render yang tidak perlu dengan `memo`, `useCallback`, dan `useMemo`.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    <section className={styles.contentSection}>
                        <h2>Masalah: Render yang Tidak Perlu</h2>
                        <p>
                            Setiap kali *state* atau *props* sebuah komponen berubah, komponen tersebut dan semua anaknya akan di-render ulang. Terkadang, komponen anak di-render ulang meskipun *props*-nya tidak berubah sama sekali. Pada aplikasi yang kompleks, ini bisa menyebabkan masalah performa.
                        </p>
                    </section>

                    <section className={styles.contentSection}>
                        <h2>Solusi Optimasi</h2>
                        <div className={styles.ruleCard}>
                            <h3>1. `React.memo`</h3>
                            <p>
                                `memo` adalah *Higher-Order Component* (HOC) yang membungkus komponen Anda. Ia akan mencegah komponen tersebut di-render ulang jika *props*-nya tidak berubah dari render sebelumnya.
                            </p>
                            <CodeBlock>{`const MyComponent = memo(function MyComponent(props) {
  /* ... */
});`}</CodeBlock>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>2. `useCallback`</h3>
                            <p>
                                Masalahnya, jika Anda memberikan sebuah fungsi sebagai *prop* ke komponen yang dibungkus `memo`, fungsi tersebut akan dibuat ulang setiap kali komponen induk di-render. Ini membuat `memo` tidak berguna. <Highlight>useCallback</Highlight> mengingat (memoize) fungsi Anda sehingga ia tidak dibuat ulang kecuali dependensinya berubah.
                            </p>
                            <CodeBlock>{`const handleClick = useCallback(() => {
  // ...
}, [dependencies]);`}</CodeBlock>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>Contoh Interaktif</h3>
                            <p>Di bawah ini, state Waktu berjalan diperbarui setiap detik, menyebabkan komponen induk re-render. Buka console browser Anda dan perhatikan log render dari HeavyComponent.</p>
                            <div className={styles.renderOutput}>
                                <OptimizationExample />
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
                    <Link href="/bab-9-state-management" className={styles.backButton}>&larr; Kembali ke Bab 9</Link>
                    <Link href="/bab-11-testing-komponen" className={styles.nextButton}>Lanjut ke Bab 11 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
