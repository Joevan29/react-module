'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '@/styles/Bab6.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children }) => <pre className={styles.codeBlock}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// --- Custom Hook Example: useToggle ---
// 1. Inilah Custom Hook kita!
// Logika untuk beralih antara true/false diekstrak ke sini.
const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const toggle = () => setValue(prevValue => !prevValue);
    return [value, toggle];
};

// --- Contoh Interaktif ---
const ToggleExample = () => {
    // 2. Gunakan Custom Hook di dalam komponen
    const [isToggled, toggle] = useToggle(false);
    const [isHappy, toggleMood] = useToggle(true);

    return (
        <div className={styles.interactiveGrid}>
            <div className={styles.interactiveExample}>
                <p>Status: {isToggled ? "ON" : "OFF"}</p>
                <button onClick={toggle}>
                    Toggle Status
                </button>
            </div>
            <div className={styles.interactiveExample}>
                <p>Mood: {isHappy ? "😊 Senang" : "😢 Sedih"}</p>
                <button onClick={toggleMood}>
                    Ubah Mood
                </button>
            </div>
        </div>
    );
};


// --- Komponen Utama Halaman ---
export default function BabEnamPage() {
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
                    <h1>Bab 6: Custom Hooks</h1>
                    <p>Membangun logika yang dapat digunakan kembali di banyak komponen.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Apa itu Custom Hook? --- */}
                    <section className={styles.contentSection}>
                        <h2>Apa itu Custom Hook?</h2>
                        <p>
                            Custom Hook adalah sebuah **fungsi JavaScript** yang namanya diawali dengan kata <Highlight>use</Highlight> dan dapat memanggil Hook lain di dalamnya (seperti `useState` atau `useEffect`). Ini bukan fitur bawaan React, melainkan sebuah konvensi yang memungkinkan kita berbagi logika stateful.
                        </p>
                        <p>
                            Tujuan utamanya adalah untuk menghindari duplikasi kode. Jika Anda menemukan diri Anda menulis logika yang sama (misalnya, mengambil data, mengelola status toggle) di beberapa komponen, itu adalah kandidat yang sempurna untuk diekstrak menjadi Custom Hook.
                        </p>
                    </section>

                    {/* --- Membuat Custom Hook Pertama --- */}
                    <section className={styles.contentSection}>
                        <h2>Membuat Custom Hook Pertama: `useToggle`</h2>
                        <p>Mari kita buat hook sederhana untuk mengelola nilai boolean (true/false) yang bisa di-toggle.</p>
                        
                        <div className={styles.ruleCard}>
                            <h3>1. Ekstrak Logika ke Sebuah Fungsi</h3>
                            <p>Buat fungsi yang diawali dengan `use`. Di dalamnya, gunakan `useState` seperti biasa dan kembalikan nilai serta fungsi pengubahnya.</p>
                            <CodeBlock>
{`import { useState } from 'react';

// Nama fungsi harus diawali dengan "use"
const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    // Fungsi untuk membalik nilai boolean
    const toggle = () => setValue(prevValue => !prevValue);

    // Kembalikan nilai dan fungsi toggle dalam sebuah array
    return [value, toggle];
};`}
                            </CodeBlock>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>2. Gunakan di Komponen Anda</h3>
                            <p>Sekarang, Anda bisa menggunakan `useToggle` di komponen mana pun seolah-olah itu adalah hook bawaan React.</p>
                            <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`function ToggleExample() {
  // Gunakan hook untuk dua state yang berbeda
  const [isToggled, toggle] = useToggle(false);
  const [isHappy, toggleMood] = useToggle(true);

  return (
    <>
      <p>Status: {isToggled ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle Status</button>

      <p>Mood: {isHappy ? "😊" : "😢"}</p>
      <button onClick={toggleMood}>Ubah Mood</button>
    </>
  );
}`}
                                </CodeBlock>
                                <h4>Hasil Tampilan Interaktif:</h4>
                                <div className={styles.renderOutput}>
                                    <ToggleExample />
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
                    <Link href="/bab-5-context-api" className={styles.backButton}>&larr; Kembali ke Bab 5</Link>
                    <Link href="/bab-7-react-router" className={styles.nextButton}>Lanjut ke Bab 7 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
