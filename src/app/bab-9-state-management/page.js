'use client';

import { motion } from 'framer-motion';
import { create } from 'zustand'; // Impor create dari zustand
import styles from '@/styles/Bab9.module.scss';
import Link from 'next/link';

// --- Komponen & Data ---
const CodeBlock = ({ children }) => <pre className={styles.codeBlock}><code>{children}</code></pre>;
const Highlight = ({ children }) => <span className={styles.highlight}>{children}</span>;

// --- Contoh Interaktif: State Management dengan Zustand ---

// 1. Buat "store" Anda
// Ini adalah tempat state global Anda akan hidup.
const useCartStore = create((set) => ({
  items: 0,
  addItem: () => set((state) => ({ items: state.items + 1 })),
  removeItem: () => set((state) => ({ items: state.items > 0 ? state.items - 1 : 0 })),
  resetCart: () => set({ items: 0 }),
}));

// Komponen yang menampilkan jumlah item di keranjang
const CartDisplay = () => {
    // 2. Gunakan store di dalam komponen
    const items = useCartStore((state) => state.items);

    return (
        <div className={styles.cartDisplay}>
            🛒 Item di Keranjang: <span>{items}</span>
        </div>
    );
};

// Komponen yang berisi tombol untuk memanipulasi keranjang
const CartControls = () => {
    // 2. Gunakan store untuk mengakses fungsi-fungsinya
    const { addItem, removeItem, resetCart } = useCartStore();

    return (
        <div className={styles.cartControls}>
            <button onClick={addItem}>Tambah Item</button>
            <button onClick={removeItem}>Hapus Item</button>
            <button onClick={resetCart} className={styles.resetButton}>Reset Keranjang</button>
        </div>
    );
};

const ZustandExample = () => {
    return (
        <div className={styles.zustandExample}>
            <p>Perhatikan bagaimana kedua komponen di bawah ini berbagi state tanpa props.</p>
            <CartDisplay />
            <CartControls />
        </div>
    );
};


// --- Komponen Utama Halaman ---
export default function BabSembilanPage() {
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
                    <h1>Bab 9: State Management dengan Zustand</h1>
                    <p>Mengelola state global dengan cara yang sederhana dan efisien.</p>
                </motion.header>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                >
                    {/* --- Keterbatasan useState & Context --- */}
                    <section className={styles.contentSection}>
                        <h2>Keterbatasan `useState` & `Context`</h2>
                        <p>
                            Untuk state yang sederhana, `useState` sudah cukup. Untuk berbagi state ke banyak komponen, `Context API` sangat berguna. Namun, saat aplikasi menjadi sangat besar, `Context API` dapat menyebabkan masalah performa karena semua komponen yang menggunakan context akan me-render ulang setiap kali state berubah, bahkan jika mereka tidak menggunakan bagian state yang berubah tersebut.
                        </p>
                        <p>
                            Di sinilah library <Highlight>State Management</Highlight> seperti Zustand, Redux, atau Jotai berperan. Mereka memberikan cara yang lebih teroptimasi untuk mengelola dan mengakses state global.
                        </p>
                    </section>

                    {/* --- Mengenal Zustand --- */}
                    <section className={styles.contentSection}>
                        <h2>Mengenal Zustand</h2>
                        <p>
                            Zustand adalah library manajemen state yang sangat ringan dan modern. Filosofinya adalah kesederhanaan. Anda tidak perlu membungkus aplikasi Anda dengan `Provider` seperti pada Context API.
                        </p>
                        
                        <div className={styles.ruleCard}>
                            <h3>Cara Kerja Zustand</h3>
                            <div className={styles.step}>
                                <h4>1. Buat Store</h4>
                                <p>Buat sebuah store menggunakan fungsi `create`. Store ini adalah sebuah hook yang berisi state dan fungsi untuk mengubah state tersebut.</p>
                                <CodeBlock>{`import { create } from 'zustand';

const useCartStore = create((set) => ({
  items: 0,
  addItem: () => set((state) => ({ items: state.items + 1 })),
}));`}</CodeBlock>
                            </div>
                            <div className={styles.step}>
                                <h4>2. Gunakan di Komponen Mana Saja</h4>
                                <p>Impor dan panggil hook `useCartStore` di komponen mana pun yang membutuhkan akses ke state keranjang belanja.</p>
                                <CodeBlock>{`function CartDisplay() {
  const items = useCartStore((state) => state.items);
  return <p>Item: {items}</p>;
}

function CartControls() {
    const addItem = useCartStore((state) => state.addItem);
    return <button onClick={addItem}>Tambah Item</button>
}`}</CodeBlock>
                            </div>
                        </div>

                        <div className={styles.ruleCard}>
                            <h3>Contoh: Keranjang Belanja Sederhana</h3>
                            <p>Perhatikan bagaimana `CartDisplay` dan `CartControls` dapat berkomunikasi dan berbagi state tanpa dihubungkan oleh props sama sekali.</p>
                            <div className={styles.exampleBox}>
                                <h4>Hasil Tampilan Interaktif:</h4>
                                <div className={styles.renderOutput}>
                                    <ZustandExample />
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
                    <Link href="/bab-8-bekerja-dengan-form" className={styles.backButton}>&larr; Kembali ke Bab 8</Link>
                    <Link href="/bab-10-optimasi-performa" className={styles.nextButton}>Lanjut ke Bab 10 &rarr;</Link>
                </motion.footer>
            </div>
        </div>
    );
}
