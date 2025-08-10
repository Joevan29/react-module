'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Bab11.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children, lang = 'jsx' }) => <pre className={`${styles.codeBlock} lang-${lang}`}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// --- Komponen Utama Halaman ---
export default function BabSebelasPage() {
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
                    <h1>Bab 11: Testing Komponen</h1>
                    <p>Memastikan komponen Anda bekerja sesuai harapan dengan Jest & React Testing Library.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Mengapa Testing Penting? --- */}
                    <section className={styles.contentSection}>
                        <h2>Mengapa Testing Penting?</h2>
                        <p>
                            Menulis tes untuk kode Anda mungkin terasa seperti pekerjaan tambahan, tetapi ini memberikan banyak keuntungan jangka panjang:
                        </p>
                        <ul>
                            <li><Highlight>Mencegah Regresi</Highlight>: Memastikan fitur yang sudah ada tidak rusak saat Anda menambahkan fitur baru.</li>
                            <li><Highlight>Meningkatkan Kepercayaan Diri</Highlight>: Anda bisa melakukan *refactoring* atau mengubah kode dengan lebih percaya diri.</li>
                            <li><Highlight>Dokumentasi Hidup</Highlight>: Tes berfungsi sebagai dokumentasi tentang bagaimana sebuah komponen seharusnya berperilaku.</li>
                        </ul>
                    </section>

                    {/* --- Alat Bantu Kita --- */}
                    <section className={styles.contentSection}>
                        <h2>Alat Bantu Kita</h2>
                        <p>
                            Ekosistem React memiliki dua alat utama untuk testing:
                        </p>
                        <div className={styles.toolGrid}>
                            <div className={styles.toolCard}>
                                <h3>Jest</h3>
                                <p>Sebuah *test runner* dari Facebook. Jest menyediakan lingkungan untuk menjalankan tes, membuat *assertions* (memastikan sesuatu benar), dan melaporkan hasilnya.</p>
                            </div>
                            <div className={styles.toolCard}>
                                <h3>React Testing Library (RTL)</h3>
                                <p>Sebuah library yang membantu merender komponen Anda dalam lingkungan tes dan berinteraksi dengannya seperti yang dilakukan pengguna (misalnya, mengklik tombol, mengetik di input).</p>
                            </div>
                        </div>
                    </section>
                    
                    {/* --- Menulis Tes Pertama --- */}
                    <section className={styles.contentSection}>
                        <h2>Menulis Tes Pertama</h2>
                        <p>
                            Mari kita lihat contoh bagaimana kita bisa menulis tes untuk komponen `Counter` sederhana dari Bab 2.
                        </p>
                        
                        <div className={styles.ruleCard}>
                            <h3>1. Komponen yang Akan Dites</h3>
                            <p>Ini adalah komponen `Counter` sederhana yang akan kita uji.</p>
                            <CodeBlock>
{`import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Jumlah: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}`}
                            </CodeBlock>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>2. Kode Tes (`Counter.test.js`)</h3>
                            <p>
                                File tes biasanya diletakkan di samping file komponen dengan ekstensi `.test.js`. React Testing Library berfokus pada pengujian dari perspektif pengguna.
                            </p>
                            <CodeBlock lang="js">
{`import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Mendeskripsikan kumpulan tes untuk komponen Counter
test('renders counter and increments on click', () => {
  // 1. Render komponen di dalam lingkungan tes
  render(<Counter />);
  
  // 2. Cari elemen di layar (seperti yang dilihat pengguna)
  const countElement = screen.getByText(/Jumlah: 0/i);
  const buttonElement = screen.getByRole('button', { name: /Tambah/i });
  
  // 3. Buat assertion (penegasan)
  // Memastikan elemen-elemen tersebut ada di dokumen
  expect(countElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  
  // 4. Simulasikan interaksi pengguna (mengklik tombol)
  fireEvent.click(buttonElement);
  
  // 5. Buat assertion baru untuk memastikan state berubah
  // Cari lagi elemen teks, sekarang harus menampilkan "Jumlah: 1"
  const updatedCountElement = screen.getByText(/Jumlah: 1/i);
  expect(updatedCountElement).toBeInTheDocument();
});`}
                            </CodeBlock>
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
                    <Link href="/bab-10-optimasi-performa" className={styles.backButton}>&larr; Kembali ke Bab 10</Link>
                    <Link href="/bab-12-typescript-di-react" className={styles.nextButton}>Lanjut ke Bab 12 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
