'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Bab1.module.scss';
import Link from 'next/link';

// Komponen untuk menampilkan blok kode dengan gaya
const CodeBlock = ({ children }) => (
    <pre className={styles.codeBlock}>
        <code>{children}</code>
    </pre>
);

// Komponen untuk menyorot teks penting
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

export default function BabSatuPage() {
    const userName = "Budi";
    const userProfilePic = "https://placehold.co/100x100/818cf8/ffffff?text=B";

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
                    <h1>Bab 1: Pengenalan JSX</h1>
                    <p>Memahami fondasi penulisan komponen di React.</p>
                </motion.header>

                {/* --- KONTEN PEMBELAJARAN --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Apa itu JSX? --- */}
                    <section className={styles.contentSection}>
                        <h2>Apa itu JSX?</h2>
                        <p>
                            JSX (JavaScript XML) adalah ekstensi sintaks untuk JavaScript yang memungkinkan Anda menulis struktur mirip HTML langsung di dalam kode JavaScript. Anggap saja ini adalah cara untuk (mencampur) logika dan tampilan dalam satu file dengan cara yang elegan.
                        </p>
                        <p>
                            Daripada memisahkan file HTML dan JavaScript, React menyatukannya dalam unit yang disebut <Highlight>komponen</Highlight>. JSX membantu kita mendefinisikan seperti apa tampilan komponen tersebut.
                        </p>
                    </section>

                    {/* --- Aturan Dasar JSX --- */}
                    <section className={styles.contentSection}>
                        <h2>Aturan Dasar JSX</h2>
                        <p>Meskipun terlihat seperti HTML, ada beberapa aturan penting:</p>
                        
                        <div className={styles.ruleCard}>
                            <h3>1. Menggabungkan JavaScript dengan Kurung Kurawal {'{}'}</h3>
                            <p>Anda bisa memasukkan variabel atau ekspresi JavaScript apa pun di dalam JSX dengan membungkusnya dalam <Highlight>{'{ }'}</Highlight>.</p>
                            <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`const userName = "Budi";

return <h1>Halo, {userName}!</h1>;`}
                                </CodeBlock>
                                <h4>Hasil Tampilan:</h4>
                                <div className={styles.renderOutput}>
                                    <h1>Halo, {userName}!</h1>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>2. Atribut Mirip HTML</h3>
                            <p>Atribut di JSX ditulis menggunakan <Highlight>camelCase</Highlight>. Contohnya, atribut `class` di HTML menjadi <Highlight>className</Highlight> di JSX, dan `onclick` menjadi <Highlight>onClick</Highlight>.</p>
                             <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`<div className="profile">
    <img 
        src={"https://placehold.co/100x100/818cf8/ffffff?text=B"}
        alt="Foto Profil"
    />
</div>`}
                                </CodeBlock>
                                <h4>Hasil Tampilan:</h4>
                                <div className={`${styles.renderOutput} ${styles.profile}`}>
                                    <img src={userProfilePic} alt="Foto Profil" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>3. Wajib Mengembalikan Satu Elemen Induk</h3>
                            <p>Setiap komponen harus mengembalikan satu elemen (pembungkus) (root element). Jika Anda memiliki beberapa elemen, bungkus semuanya dalam satu `div` atau sebuah Fragment <Highlight>{'<>...</>'}</Highlight>.</p>
                             <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`// Benar 👍
return (
    <>
        <h1>Judul</h1>
        <p>Paragraf.</p>
    </>
);

// Salah 👎
return (
    <h1>Judul</h1>
    <p>Paragraf.</p>
);`}
                                </CodeBlock>
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
                    <Link href="/" className={styles.backButton}>&larr; Kembali ke Home</Link>
                    <Link href="/bab-2-state-interaktivitas" className={styles.nextButton}>Lanjut ke Bab 2 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
