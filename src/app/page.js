'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import styles from '@/styles/HomePage.module.scss';

// --- Data untuk Modul ---
const chaptersBeginner = [
    { id: 1, title: "Pengenalan JSX", description: "Sintaks dasar yang menggabungkan HTML dan JavaScript.", href: "/bab-1-pengenalan-jsx", icon: "✨" },
    { id: 2, title: "State & Interaktivitas", description: "Membuat komponen dinamis dengan Hook `useState`.", href: "/bab-2-state-interaktivitas", icon: "🖱️" },
    { id: 3, title: "Menampilkan List & Props", description: "Merender daftar data dan mengirim data antar komponen.", href: "/bab-3-list-props", icon: "📚" },
    { id: 4, title: "Effect Hook: useEffect", description: "Mengelola 'side effects' seperti fetching data.", href: "/bab-4-use-effect", icon: "⚙️" },
    { id: 5, title: "Context API", description: "Berbagi state tanpa 'props drilling' yang dalam.", href: "/bab-5-context-api", icon: "🔗" },
    { id: 6, title: "Custom Hooks", description: "Membungkus logika untuk digunakan kembali.", href: "/bab-6-custom-hooks", icon: "🎣" },
];

const chaptersIntermediate = [
    { id: 7, title: "React Router", description: "Menangani navigasi sisi klien untuk SPA.", href: "/bab-7-react-router", icon: "🗺️" },
    { id: 8, title: "Bekerja dengan Form", description: "Mengelola input pengguna dan validasi.", href: "/bab-8-bekerja-dengan-form", icon: "📝" },
    { id: 9, title: "State Management", description: "Pengenalan Zustand atau Redux Toolkit.", href: "/bab-9-state-management", icon: "🧠" },
];

const chaptersAdvanced = [
    { id: 10, title: "Optimasi Performa", description: "Menggunakan useMemo dan useCallback.", href: "/bab-10-optimasi-performa", icon: "⚡" },
    { id: 11, title: "Testing Komponen", description: "Pengenalan Jest & React Testing Library.", href: "/bab-11-testing-komponen", icon: "🧪" },
    { id: 12, title: "TypeScript di React", description: "Menambahkan type safety ke proyek Anda.", href: "/bab-12-typescript-di-react", icon: "🔷" },
];

const benefits = [
    { icon: "🎓", title: "Kurikulum Terstruktur", description: "Materi disusun secara sistematis dari dasar hingga mahir." },
    { icon: "💻", title: "Contoh Praktis", description: "Setiap konsep disertai dengan contoh kode yang relevan." },
    { icon: "🚀", title: "Proyek Modern", description: "Belajar dengan membangun aplikasi menggunakan teknologi terkini." },
];


// --- Komponen-komponen Kecil ---
const AnimatedBlob = () => (
    <div className={styles.auroraContainer} aria-hidden="true">
        <div className={`${styles.aurora} ${styles.aurora1}`} />
        <div className={`${styles.aurora} ${styles.aurora2}`} />
    </div>
);

const InteractiveCard = ({ children, index, className }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const BenefitCard = ({ benefit, index }) => (
    <InteractiveCard index={index} className={styles.benefitCard}>
        <div className={styles.benefitIcon}>{benefit.icon}</div>
        <h3>{benefit.title}</h3>
        <p>{benefit.description}</p>
    </InteractiveCard>
);

const ChapterCard = ({ chapter, index }) => (
    <InteractiveCard index={index} className={styles.chapterCard}>
        <div className={styles.cardIconWrapper}><span>{chapter.icon}</span></div>
        <h3>{chapter.title}</h3>
        <p>{chapter.description}</p>
        <Link href={chapter.href} className={styles.cardLink}>
            Mulai Bab <span>&rarr;</span>
        </Link>
    </InteractiveCard>
);

const ChapterGroup = ({ title, chapters }) => (
    <div className={styles.chapterGroup}>
        <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className={styles.groupTitle}
        >
            {title}
        </motion.h3>
        <div className={styles.grid}>
            {chapters.map((chapter, index) => (
                <ChapterCard key={chapter.id} chapter={chapter} index={index} />
            ))}
        </div>
    </div>
);


// --- Komponen Utama Homepage ---
export default function HomePage() {
    const headline = "Belajar React Secara Menyeluruh";

    return (
        <div className={styles.pageWrapper}>
            {/* ===== HERO SECTION ===== */}
            <section className={`${styles.section} ${styles.hero}`}>
                <AnimatedBlob />
                <div className={styles.container}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className={styles.headline}
                    >
                        <span className={styles.gradientText}>{headline}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className={styles.subheadline}
                    >
                        Dari fundamental hingga fitur modern, modul ini adalah panduan lengkap Anda untuk menguasai ekosistem React dengan cara yang menyenangkan.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}
                    >
                        <Link href="#chapters" className={styles.ctaButton}>
                            Jelajahi Modul
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US SECTION ===== */}
            <section className={`${styles.section} ${styles.whySection}`}>
                <div className={styles.container}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                    >
                        Mengapa Memilih Modul Ini?
                    </motion.h2>
                    <div className={styles.grid}>
                        {benefits.map((benefit, index) => (
                            <BenefitCard key={index} benefit={benefit} index={index} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* ===== FEATURED SECTION (CODE EXAMPLE) ===== */}
            <section className={`${styles.section} ${styles.featured}`}>
                <div className={`${styles.container} ${styles.featuredGrid}`}>
                    <div className={styles.featuredText}>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                        >
                            Fokus Utama: Interaktivitas
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Pahami bagaimana komponen (mengingat) informasi dan merespons aksi pengguna. Ini adalah fondasi untuk membangun aplikasi web yang hidup.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
                        className={styles.codeBlock}
                    >
                        <div className={styles.windowDots}>
                            <div className={styles.dot} style={{backgroundColor: '#ff5f56'}}></div>
                            <div className={styles.dot} style={{backgroundColor: '#ffbd2e'}}></div>
                            <div className={styles.dot} style={{backgroundColor: '#27c93f'}}></div>
                        </div>
                        <pre>
                            <code>
                                <span style={{color: '#c9d1d9'}}>import</span> <span style={{color: '#b392f0'}}>{'{ useState }'}</span> <span style={{color: '#c9d1d9'}}>from</span> <span style={{color: '#a5d6ff'}}>(react)</span>;{'\n\n'}
                                <span style={{color: '#ff7b72'}}>function</span> <span style={{color: '#d2a8ff'}}>Counter</span>() {'{'}{'\n'}
                                {'  '}<span style={{color: '#79c0ff'}}>const</span> [count, setCount] = <span style={{color: '#d2a8ff'}}>useState</span>(<span style={{color: '#ffa657'}}>0</span>);{'\n\n'}
                                {'  '}<span style={{color: '#ff7b72'}}>return</span> ({'\n'}
                                {'    '}&lt;<span style={{color: '#f97583'}}>button</span> <span style={{color: '#79c0ff'}}>onClick</span>={'() => setCount(count + 1)'}&gt;{'\n'}
                                {'      '}Count: {'{count}'}{'\n'}
                                {'    '}&lt;/<span style={{color: '#f97583'}}>button</span>&gt;{'\n'}
                                {'  '});{'\n'}
                                {'}'}
                            </code>
                        </pre>
                    </motion.div>
                </div>
            </section>

            {/* ===== DAFTAR BAB SECTION ===== */}
            <section id="chapters" className={`${styles.section} ${styles.chapters}`}>
                <div className={styles.container}>
                    <ChapterGroup title="Dasar-Dasar React" chapters={chaptersBeginner} />
                    <ChapterGroup title="React Intermediate" chapters={chaptersIntermediate} />
                    <ChapterGroup title="React Advanced" chapters={chaptersAdvanced} />
                </div>
            </section>
        </div>
    );
}
