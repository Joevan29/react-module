'use client';

import { motion } from 'framer-motion';
import { useState, useContext, createContext } from 'react'; // Impor hook yang relevan
import styles from '@/styles/Bab5.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children }) => <pre className={styles.codeBlock}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// --- Contoh Interaktif: Theme Switcher dengan Context ---

// 1. Buat Context
const ThemeContext = createContext();

// Komponen Pembungkus (Provider)
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${styles.themeWrapper} ${styles[theme]}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// Komponen yang menggunakan context
const Toolbar = () => {
    return (
        <div className={styles.toolbar}>
            <ThemedButton />
        </div>
    );
};

const ThemedButton = () => {
    // 3. Gunakan context dengan hook useContext
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={styles.themeButton}>
            Ganti ke Mode {theme === 'light' ? 'Gelap' : 'Terang'}
        </button>
    );
};

const ContextExample = () => {
    // 2. Bungkus komponen dengan Provider
    return (
        <ThemeProvider>
            <p className={styles.infoText}>Komponen di bawah ini berada di dalam Provider.</p>
            <Toolbar />
        </ThemeProvider>
    );
};

// --- Komponen Utama Halaman ---
export default function BabLimaPage() {
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
                    <h1>Bab 5: Context API</h1>
                    <p>Berbagi state secara efisien tanpa (props drilling).</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Masalah "Props Drilling" --- */}
                    <section className={styles.contentSection}>
                        <h2>Masalah: (Props Drilling)</h2>
                        <p>
                            Bayangkan Anda memiliki state di komponen paling atas, tetapi komponen yang membutuhkannya berada 5 level di bawahnya. Anda harus mengoper *prop* tersebut melalui 4 komponen perantara yang sebenarnya tidak membutuhkannya. Proses ini disebut <Highlight>props drilling</Highlight> dan bisa membuat kode menjadi rumit dan sulit dikelola.
                        </p>
                    </section>

                    {/* --- Solusi: Context API --- */}
                    <section className={styles.contentSection}>
                        <h2>Solusi: Context API</h2>
                        <p>
                            Context menyediakan cara untuk (menyiarkan) data ke semua komponen di bawahnya, tanpa harus mengopernya secara eksplisit. Ini sangat berguna untuk data (global) seperti tema (gelap/terang), informasi pengguna yang login, atau bahasa.
                        </p>
                        
                        <div className={styles.ruleCard}>
                            <h3>3 Langkah Menggunakan Context</h3>
                            <div className={styles.step}>
                                <h4>1. Buat Context (`createContext`)</h4>
                                <p>Buat sebuah (wadah) untuk data Anda di luar komponen.</p>
                                <CodeBlock>{`const MyContext = createContext();`}</CodeBlock>
                            </div>
                            <div className={styles.step}>
                                <h4>2. Sediakan Context (`Provider`)</h4>
                                <p>Bungkus komponen induk dengan `MyContext.Provider` dan berikan data yang ingin dibagikan melalui prop `value`.</p>
                                <CodeBlock>{`<MyContext.Provider value={/* data Anda */}>
  <App />
</MyContext.Provider>`}</CodeBlock>
                            </div>
                            <div className={styles.step}>
                                <h4>3. Gunakan Context (`useContext`)</h4>
                                <p>Di komponen anak mana pun (tidak peduli seberapa dalam), panggil hook `useContext` untuk mengakses data tersebut.</p>
                                <CodeBlock>{`const data = useContext(MyContext);`}</CodeBlock>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>Contoh: Pengalih Tema (Theme Switcher)</h3>
                            <p>Mari kita buat pengalih tema sederhana. Perhatikan bagaimana `ThemedButton` bisa mengakses `theme` dan `toggleTheme` tanpa menerima props dari `Toolbar`.</p>
                            <div className={styles.exampleBox}>
                                <h4>Hasil Tampilan Interaktif:</h4>
                                <div className={styles.renderOutput}>
                                    <ContextExample />
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
                    <Link href="/bab-4-use-effect" className={styles.backButton}>&larr; Kembali ke Bab 4</Link>
                    <Link href="/bab-6-custom-hooks" className={styles.nextButton}>Lanjut ke Bab 6 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
