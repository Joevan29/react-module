'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'; // Impor useEffect
import styles from '@/styles/Bab4.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children }) => <pre className={styles.codeBlock}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// PERBAIKAN: Kita akan menggunakan data dummy untuk mensimulasikan API
const dummyQuotes = [
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { content: "The mind is everything. What you think you become.", author: "Buddha" },
    { content: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
];

// Contoh komponen interaktif: Fetching Data
const DataFetcher = () => {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    useEffect(() => {
        // PERBAIKAN: Mengganti fetch() dengan simulasi API
        const fetchQuote = () => {
            setLoading(true);
            setError(null);
            
            // Simulasi penundaan jaringan selama 1 detik
            setTimeout(() => {
                try {
                    // Pilih kutipan acak dari data dummy
                    const randomQuote = dummyQuotes[Math.floor(Math.random() * dummyQuotes.length)];
                    setQuote(randomQuote);
                } catch (err) {
                    setError("Gagal memuat kutipan simulasi.");
                } finally {
                    setLoading(false);
                }
            }, 1000);
        };

        fetchQuote();

    }, [fetchTrigger]); // <-- Dependency Array

    return (
        <div className={styles.interactiveExample}>
            <div className={styles.quoteBox}>
                {loading && <p>Memuat kutipan...</p>}
                {error && <p className={styles.errorText}>Error: {error}</p>}
                {quote && (
                    <>
                        <p className={styles.quoteText}>- {quote.content}</p>
                        <p className={styles.quoteAuthor}>- {quote.author}</p>
                    </>
                )}
            </div>
            <button onClick={() => setFetchTrigger(c => c + 1)} disabled={loading}>
                {loading ? 'Memuat...' : 'Dapatkan Kutipan Baru'}
            </button>
        </div>
    );
};


// --- Komponen Utama Halaman ---
export default function BabEmpatPage() {
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
                    <h1>Bab 4: Effect Hook `useEffect`</h1>
                    <p>Menjalankan (efek samping) dan berinteraksi dengan sistem di luar React.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Apa itu "Efek Samping"? --- */}
                    <section className={styles.contentSection}>
                        <h2>Apa itu Efek Samping?</h2>
                        <p>
                            Dalam React, (efek samping) (*side effect*) adalah operasi apa pun yang memengaruhi sesuatu di luar lingkup komponen itu sendiri. Contoh umumnya adalah:
                        </p>
                        <ul>
                            <li>Mengambil data dari API server.</li>
                            <li>Mengatur atau membersihkan *event listener* (misalnya, `window.addEventListener`).</li>
                            <li>Mengubah judul dokumen (`document.title`).</li>
                        </ul>
                        <p>
                            Hook <Highlight>useEffect</Highlight> memberikan kita tempat yang aman untuk menjalankan kode-kode ini tanpa mengganggu proses render.
                        </p>
                    </section>

                    {/* --- Cara Kerja useEffect --- */}
                    <section className={styles.contentSection}>
                        <h2>Cara Kerja `useEffect`</h2>
                        <p>
                            `useEffect` menerima dua argumen: sebuah fungsi (efeknya) dan sebuah array dependensi (opsional).
                        </p>
                        
                        <div className={styles.ruleCard}>
                            <h3>Sintaks Dasar</h3>
                            <CodeBlock>
{`import { useEffect } from 'react';

useEffect(() => {
  // Kode efek samping Anda di sini...
  
  return () => {
    // (Opsional) Fungsi cleanup di sini...
  };
}, [dependencies]); // <-- Array Dependensi`}
                            </CodeBlock>
                            <div className={styles.explanation}>
                                Array dependensi mengontrol **kapan** efek Anda dijalankan kembali:
                                <ul>
                                    <li><Highlight>Tidak ada array</Highlight>: Efek berjalan setelah **setiap** render. (Jarang digunakan)</li>
                                    <li><Highlight>Array kosong (`[]`)</Highlight>: Efek hanya berjalan **satu kali** setelah render pertama.</li>
                                    <li><Highlight>Array berisi nilai (`[prop, state]`)</Highlight>: Efek berjalan kembali **hanya jika** salah satu nilai di dalam array berubah.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>Contoh: Mengambil Data dari API</h3>
                            <p>Ini adalah kasus penggunaan `useEffect` yang paling umum. Kita akan mengambil kutipan acak dari API publik.</p>
                            <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`function QuoteFetcher() {
  const [quote, setQuote] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  useEffect(() => {
    // Di sini kita akan mengambil data dari API
    // atau mensimulasikannya seperti contoh di atas.
    fetch('https://api.quotable.io/random')
      .then(res => res.json())
      .then(data => setQuote(data));
  }, [fetchTrigger]);

  return (
    <div>
      {quote && <p>"{quote.content}"</p>}
      <button onClick={() => setFetchTrigger(c => c + 1)}>
        Dapatkan Kutipan Baru
      </button>
    </div>
  );
}`}
                                </CodeBlock>
                                <h4>Hasil Tampilan Interaktif:</h4>
                                <div className={styles.renderOutput}>
                                    <DataFetcher />
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
                    <Link href="/bab-3-list-props" className={styles.backButton}>&larr; Kembali ke Bab 3</Link>
                    <Link href="/bab-5-context-api" className={styles.nextButton}>Lanjut ke Bab 5 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
