// pages/Memes.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Memes.module.css'; // Nouveau fichier de styles pour la page memes
import homeStyles from '../styles/Home.module.css';

// Importation des images des memes
import kairaImage from '../img/memes1.jpg';
import heyImage from '../img/memes2.jpg';
import orbImage from '../img/memes3.jpg';

import utilityImage from '../img/titlemuseum.png';

// Définir les types des props pour MemeCard
interface MemeCardProps {
    title: string;
    imageSrc: string;
    description: string;
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

// Composant de carte pour chaque meme
const MemeCard: React.FC<MemeCardProps> = ({
    title,
    imageSrc,
    description,
    isHovered,
    onMouseEnter,
    onMouseLeave,
}) => (
    <div
        className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <h1 className={styles.cardTitle}>{title}</h1>
        <Image src={imageSrc} alt={title} className={styles.cardImage} />
        <p className={styles.cardDescription}>{description}</p>
    </div>
);

const Memes = () => {
    const [hoverStates, setHoverStates] = useState({
        kaira: false,
        hey: false,
        orb: false,
    });

    const handleHover = (card: string, isHovered: boolean) => {
        setHoverStates((prev) => ({ ...prev, [card]: isHovered }));
    };

    return (
        <div className={`${homeStyles.pageContainer} ${styles.container}`}>
            <Head>
                <title>Pointless Memes</title>
                <meta name="description" content="Discover hilarious memes on Pointless platform." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <Image src={utilityImage} alt="Introduction" layout="responsive" width={1000} height={500} className={styles.utilityImage} />

            <main className={styles.main}>
                <p className={styles.description}>
                    Enjoy a collection of the funniest memes curated just for you.
                </p>
                <section className={styles.cardContainer}>
                    <MemeCard
                        title="Kaira Meme"
                        imageSrc={kairaImage}
                        description="A funny Kaira meme."
                        isHovered={hoverStates.kaira}
                        onMouseEnter={() => handleHover('kaira', true)}
                        onMouseLeave={() => handleHover('kaira', false)}
                    />
                    <MemeCard
                        title="Hey Meme"
                        imageSrc={heyImage}
                        description="A hilarious 'Hey' meme."
                        isHovered={hoverStates.hey}
                        onMouseEnter={() => handleHover('hey', true)}
                        onMouseLeave={() => handleHover('hey', false)}
                    />
                    <MemeCard
                        title="Orb Meme"
                        imageSrc={orbImage}
                        description="An amusing Orb meme."
                        isHovered={hoverStates.orb}
                        onMouseEnter={() => handleHover('orb', true)}
                        onMouseLeave={() => handleHover('orb', false)}
                    />
                </section>
            </main>

            <footer className={`${homeStyles.footer} ${styles.footer}`}>
                <p>&copy; 2024 Pointless Bridge</p>
            </footer>
        </div>
    );
};

export default Memes;
