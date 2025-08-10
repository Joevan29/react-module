'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '@/styles/Bab8.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children }) => <pre className={styles.codeBlock}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// --- Contoh Interaktif: Form Login Sederhana ---
const LoginFormExample = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah perilaku default
        setSubmittedData({ email, password });
    };

    return (
        <div className={styles.formSimulator}>
            <div className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email-input">Email</label>
                    <input 
                        type="email" 
                        id="email-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@contoh.com"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password-input">Password</label>
                    <input 
                        type="password" 
                        id="password-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                </div>
                <button type="button" onClick={handleSubmit} className={styles.submitButton}>Login</button>
            </div>
            {submittedData && (
                <div className={styles.submittedData}>
                    <h4>Data yang Dikirim:</h4>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Password:</strong> {submittedData.password}</p>
                </div>
            )}
        </div>
    );
};


// --- Komponen Utama Halaman ---
export default function BabDelapanPage() {
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
                    <h1>Bab 8: Bekerja dengan Form</h1>
                    <p>Mengelola input, validasi, dan submission dari pengguna.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Controlled Components --- */}
                    <section className={styles.contentSection}>
                        <h2>Konsep: Controlled Components</h2>
                        <p>
                            Di HTML biasa, elemen form seperti <code>&lt;input&gt;</code> dan <code>&lt;textarea&gt;</code> memiliki *state* internal mereka sendiri. Di React, kita menggunakan pendekatan yang disebut <Highlight>controlled components</Highlight> (komponen terkontrol).
                        </p>
                        <p>
                            Artinya, *state* React menjadi satu-satunya sumber kebenaran (*single source of truth*). Nilai dari setiap input form disimpan dalam *state* komponen, dan setiap perubahan pada input akan memperbarui *state* tersebut melalui fungsi `onChange`.
                        </p>
                    </section>

                    {/* --- Langkah-langkah Mengelola Form --- */}
                    <section className={styles.contentSection}>
                        <h2>Langkah-langkah Mengelola Form</h2>
                        
                        <div className={styles.ruleCard}>
                            <h3>1. Buat State untuk Setiap Input</h3>
                            <p>Gunakan `useState` untuk membuat satu *state variable* untuk setiap kolom input di form Anda.</p>
                            <CodeBlock>{`const [email, setEmail] = useState('');
const [password, setPassword] = useState('');`}</CodeBlock>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>2. Hubungkan State ke Input</h3>
                            <p>Gunakan prop <Highlight>value</Highlight> pada elemen input untuk menghubungkannya dengan *state*. Kemudian, gunakan prop <Highlight>onChange</Highlight> untuk memanggil fungsi *setter* dari *state* setiap kali nilainya berubah.</p>
                            <CodeBlock>{`<input 
    type="email" 
    value={email} // Nilai input dikontrol oleh state 'email'
    onChange={(e) => setEmail(e.target.value)} // Update state saat pengguna mengetik
/>`}</CodeBlock>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>3. Tangani Aksi Pengguna</h3>
                            <p>Untuk menangani aksi submit, kita bisa menambahkan *event handler* <Highlight>onClick</Highlight> pada sebuah tombol. Di dalam fungsi *handler* tersebut, kita bisa memproses data yang sudah tersimpan di dalam *state*.</p>
                             <div className={styles.exampleBox}>
                                <h4>Contoh Form Login Interaktif:</h4>
                                <div className={styles.renderOutput}>
                                    <LoginFormExample />
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
                    <Link href="/bab-7-react-router" className={styles.backButton}>&larr; Kembali ke Bab 7</Link>
                    <Link href="/bab-9-state-management" className={styles.nextButton}>Lanjut ke Bab 9 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
