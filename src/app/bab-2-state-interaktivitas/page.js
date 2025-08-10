'use client';

import { motion } from 'framer-motion';
import { useState } from 'react'; // Impor useState
import styles from '@/styles/Bab2.module.scss'; // Kita akan buat file ini
import Link from 'next/link';

// Komponen untuk menampilkan blok kode dengan gaya
const CodeBlock = ({ children }) => (
    <pre className={styles.codeBlock}>
        <code>{children}</code>
    </pre>
);

// Komponen untuk menyorot teks penting
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// Contoh komponen interaktif 1: Counter
const CounterExample = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.interactiveExample}>
            <p>Jumlah klik: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Klik Saya!
            </button>
            <button onClick={() => setCount(0)} className={styles.resetButton}>
                Reset
            </button>
        </div>
    );
};

// Contoh komponen interaktif 2: Like Button
const LikeButtonExample = () => {
    const [liked, setLiked] = useState(false);

    return (
        <div className={styles.interactiveExample}>
            <button onClick={() => setLiked(!liked)} className={liked ? styles.liked : ''}>
                {liked ? '❤️ Disukai' : '🤍 Suka'}
            </button>
        </div>
    );
};


export default function BabDuaPage() {
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
                    <h1>Bab 2: State & Interaktivitas</h1>
                    <p>Menghidupkan komponen dengan data yang dapat berubah.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Apa itu State? --- */}
                    <section className={styles.contentSection}>
                        <h2>Apa itu State?</h2>
                        <p>
                            Jika <Highlight>Props</Highlight> adalah data yang (diberikan) ke sebuah komponen (bersifat read-only), maka <Highlight>State</Highlight> adalah (memori) internal komponen itu sendiri. State adalah data yang dapat berubah seiring waktu karena interaksi pengguna.
                        </p>
                        <p>
                            Setiap kali nilai state berubah, React akan secara otomatis **me-render ulang** komponen tersebut untuk menampilkan tampilan yang baru. Untuk menggunakan state, kita memerlukan sebuah *Hook* bernama <Highlight>useState</Highlight>.
                        </p>
                    </section>

                    {/* --- Menggunakan useState --- */}
                    <section className={styles.contentSection}>
                        <h2>Menggunakan `useState`</h2>
                        <p>Hook `useState` adalah cara kita mendeklarasikan sebuah (state variable) di dalam komponen fungsional.</p>
                        
                        <div className={styles.ruleCard}>
                            <h3>1. Cara Mengimpor dan Mendeklarasikan</h3>
                            <p>Pertama, impor `useState` dari React. Kemudian, panggil di dalam komponen Anda untuk membuat state.</p>
                            <CodeBlock>
{`import { useState } from 'react';

function MyComponent() {
  const [nilai, setNilai] = useState(nilaiAwal);
  // ...
}`}
                            </CodeBlock>
                            {/* PERBAIKAN: Mengganti <p> menjadi <div> */}
                            <div className={styles.explanation}>
                                `useState` mengembalikan sebuah array dengan dua elemen:
                                <ul>
                                    <li><Highlight>nilai</Highlight>: Variabel yang menyimpan nilai state saat ini.</li>
                                    <li><Highlight>setNilai</Highlight>: Fungsi yang kita gunakan untuk memperbarui nilai state.</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>2. Contoh Praktis: Tombol Counter</h3>
                            <p>Mari kita buat tombol sederhana yang akan menghitung berapa kali ia diklik.</p>
                            <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Jumlah klik: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Klik Saya!
      </button>
    </div>
  );
}`}
                                </CodeBlock>
                                <h4>Hasil Tampilan Interaktif:</h4>
                                <div className={styles.renderOutput}>
                                    <CounterExample />
                                </div>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>3. Contoh Lain: Tombol Suka (Like)</h3>
                            <p>State tidak harus berupa angka. Ia bisa berupa boolean (`true`/`false`), string, objek, atau array.</p>
                             <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️ Disukai' : '🤍 Suka'}
    </button>
  );
}`}
                                </CodeBlock>
                                <h4>Hasil Tampilan Interaktif:</h4>
                                <div className={styles.renderOutput}>
                                    <LikeButtonExample />
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
                    <Link href="/bab-1-pengenalan-jsx" className={styles.backButton}>&larr; Kembali ke Bab 1</Link>
                    <Link href="/bab-3-list-props" className={styles.nextButton}>Lanjut ke Bab 3 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
