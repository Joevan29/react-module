'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/Bab3.module.scss';
import Link from 'next/link';
import Image from 'next/image';

// --- Komponen & Data ---
const CodeBlock = ({ children }) => <pre className={styles.codeBlock}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// Data dummy untuk contoh kita
const users = [
    { id: 1, name: 'Citra Kirana', job: 'Frontend Developer', avatar: 'https://placehold.co/100x100/a78bfa/ffffff?text=C' },
    { id: 2, name: 'Doni Setiawan', job: 'Backend Developer', avatar: 'https://placehold.co/100x100/7dd3fc/ffffff?text=D' },
    { id: 3, name: 'Eka Lestari', job: 'UI/UX Designer', avatar: 'https://placehold.co/100x100/f472b6/ffffff?text=E' },
];

// Komponen kartu pengguna yang dapat digunakan kembali (reusable)
const UserCard = ({ user }) => {
    return (
        <div className={styles.userCard}>
            <Image src={user.avatar} alt={`Avatar ${user.name}`} width={80} height={80} className={styles.avatar} />
            <div className={styles.userInfo}>
                <h3>{user.name}</h3>
                <p>{user.job}</p>
            </div>
        </div>
    );
};

// --- Komponen Utama Halaman ---
export default function BabTigaPage() {
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
                    <h1>Bab 3: Menampilkan List & Props</h1>
                    <p>Merender daftar data dan memecah UI menjadi komponen yang lebih kecil.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Merender List dengan .map() --- */}
                    <section className={styles.contentSection}>
                        <h2>Merender List dengan `.map()`</h2>
                        <p>
                            Di dunia nyata, Anda akan sering bekerja dengan data dalam bentuk array. Untuk menampilkannya di React, kita menggunakan metode `.map()` dari JavaScript untuk mengubah setiap item data menjadi sebuah elemen JSX.
                        </p>
                    </section>

                    {/* --- Props & Komponen Reusable --- */}
                    <section className={styles.contentSection}>
                        <h2>Props & Komponen Reusable</h2>
                        <p>
                            Untuk menjaga kode tetap rapi, kita bisa membuat komponen terpisah untuk setiap item dalam list (misalnya, sebuah `UserCard`). Kemudian, kita mengirim data untuk setiap pengguna ke komponen tersebut melalui <Highlight>props</Highlight>.
                        </p>
                        
                        <div className={styles.ruleCard}>
                            <h3>Contoh: Menampilkan Daftar Pengguna</h3>
                            <p>Di bawah ini adalah contoh lengkap bagaimana kita mendefinisikan data, membuat komponen `UserCard`, dan menampilkannya menggunakan `.map()`.</p>
                            <div className={styles.exampleBox}>
                                <h4>Contoh Kode:</h4>
                                <CodeBlock>
{`// 1. Data kita (sebuah array of objects)
const users = [
  { id: 1, name: 'Citra Kirana', ... },
  { id: 2, name: 'Doni Setiawan', ... },
  { id: 3, name: 'Eka Lestari', ... },
];

// 2. Komponen untuk satu kartu pengguna
// Menerima 'user' sebagai prop
function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.job}</p>
    </div>
  );
}

// 3. Tampilkan list di komponen utama
function UserList() {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}`}
                                </CodeBlock>
                                <h4>Hasil Tampilan:</h4>
                                <div className={styles.renderOutput}>
                                    <div className={styles.userGrid}>
                                        {users.map(user => (
                                            <UserCard key={user.id} user={user} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>Aturan Penting: `key` Prop</h3>
                            <p>
                                Saat merender sebuah list, React perlu cara untuk mengidentifikasi setiap item secara unik. Untuk itu, kita wajib memberikan sebuah prop spesial bernama <Highlight>key</Highlight> pada elemen terluar di dalam loop `.map()`.
                            </p>
                            <p>
                                Nilai `key` harus berupa string atau angka yang unik di antara (saudara)-nya. Biasanya, kita menggunakan ID dari data, seperti <Highlight>{'<UserCard key={user.id} />'}</Highlight>. Ini sangat penting untuk performa dan menghindari bug yang tidak terduga.
                            </p>
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
                    <Link href="/bab-2-state-interaktivitas" className={styles.backButton}>&larr; Kembali ke Bab 2</Link>
                    <Link href="/bab-4-use-effect" className={styles.nextButton}>Lanjut ke Bab 4 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
