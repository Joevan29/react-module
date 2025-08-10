'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Bab12.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children, lang = 'jsx' }) => <pre className={`${styles.codeBlock} lang-${lang}`}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// --- Komponen Utama Halaman ---
export default function BabDuaBelasPage() {
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
                    <h1>Bab 12: TypeScript di React</h1>
                    <p>Menambahkan *type safety* untuk kode yang lebih kuat dan mudah dikelola.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Apa itu TypeScript? --- */}
                    <section className={styles.contentSection}>
                        <h2>Apa itu TypeScript?</h2>
                        <p>
                            TypeScript adalah *superset* dari JavaScript yang menambahkan sistem tipe statis. Anggap saja ini adalah JavaScript dengan pengaman tambahan. Sebelum kode Anda dijalankan, TypeScript akan memeriksa apakah Anda menggunakan tipe data yang benar, sehingga banyak *bug* dapat ditemukan pada tahap pengembangan, bukan saat aplikasi sudah berjalan.
                        </p>
                        <p>
                            Menggunakan TypeScript di React membantu kita mendefinisikan dengan jelas tipe data apa yang diharapkan oleh *props* dan *state* sebuah komponen.
                        </p>
                    </section>

                    {/* --- Manfaat Utama --- */}
                    <section className={styles.contentSection}>
                        <h2>Manfaat Utama</h2>
                        <div className={styles.benefitGrid}>
                            <div className={styles.benefitCard}>
                                <h3>🔍 Menemukan Bug Lebih Awal</h3>
                                <p>TypeScript akan memberitahu Anda jika Anda salah mengirim tipe prop, misalnya mengirim angka padahal yang diharapkan adalah string.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <h3>💡 Autocomplete Lebih Baik</h3>
                                <p>Editor kode Anda (seperti VS Code) akan tahu persis properti apa saja yang tersedia di sebuah objek, memberikan saran yang lebih cerdas.</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <h3>📖 Kode Lebih Mudah Dibaca</h3>
                                <p>Dengan melihat definisi tipe, pengembang lain (atau Anda di masa depan) bisa langsung mengerti data seperti apa yang digunakan oleh sebuah komponen.</p>
                            </div>
                        </div>
                    </section>
                    
                    {/* --- Contoh Konversi Komponen --- */}
                    <section className={styles.contentSection}>
                        <h2>Contoh: Menambahkan Tipe pada Komponen</h2>
                        <p>
                            Mari kita lihat bagaimana kita bisa mengubah komponen `UserCard` dari Bab 3 menjadi komponen TypeScript.
                        </p>
                        
                        <div className={styles.ruleCard}>
                            <h3>1. Versi JavaScript (Sebelumnya)</h3>
                            <p>Tanpa TypeScript, kita tidak tahu pasti tipe data apa yang ada di dalam `user` kecuali kita melihat datanya langsung.</p>
                            <CodeBlock>
{`function UserCard({ user }) {
  return (
    <div>
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.job}</p>
    </div>
  );
}`}
                            </CodeBlock>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>2. Versi TypeScript (`.tsx`)</h3>
                            <p>
                                Dengan TypeScript, kita membuat sebuah `interface` atau `type` untuk mendefinisikan bentuk dari prop `user`. Jika kita mencoba mengirim prop yang tidak sesuai, TypeScript akan memberikan error.
                            </p>
                            <CodeBlock lang="tsx">
{`// 1. Definisikan "bentuk" data untuk props
interface User {
  id: number;
  name: string;
  job: string;
  avatar: string;
}

interface UserCardProps {
  user: User;
}

// 2. Gunakan tipe tersebut pada komponen
// File ini sekarang akan berekstensi .tsx
function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.job}</p>
    </div>
  );
}`}
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
                    <Link href="/bab-11-testing-komponen" className={styles.backButton}>&larr; Kembali ke Bab 11</Link>
                    <Link href="/" className={styles.nextButton}>Selesai! Kembali ke Home &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
