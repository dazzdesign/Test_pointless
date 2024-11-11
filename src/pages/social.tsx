// pages/Socials.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Socials.module.css';
import homeStyles from '../styles/Home.module.css';

// Importation des images pour chaque réseau social
import kairaImage from '../img/kaira.png';
import heyImage from '../img/hey.png';
import orbImage from '../img/orb.png';
import butterflyImage from '../img/butterfly.png';
import fireflyImage from '../img/firefly.png';
import bloomersImage from '../img/bloomers.png';
import utilityImage from '../img/utility.png';

// Composant de carte pour chaque réseau social
const SocialCard = ({
    title,
    imageSrc,
    description,
    features,
    link,
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
        <ul className={styles.cardFeatures}>
            {features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className={styles.cardButton}>Visit {title}</button>
        </a>
    </div>
);

const Socials = () => {
    const [hoverStates, setHoverStates] = useState({
        kaira: false,
        hey: false,
        orb: false,
        butterfly: false,
        firefly: false,
        bloomers: false,
    });

    const handleHover = (card, isHovered) => {
        setHoverStates((prev) => ({ ...prev, [card]: isHovered }));
    };

    return (
        <div className={`${homeStyles.pageContainer} ${styles.container}`}>
            <Head>
                <title>Pointless Socials</title>
                <meta name="description" content="Discover Pointless social networks and communities." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <Image src={utilityImage} alt="Introduction" layout="responsive" width={1000} height={500} className={styles.utilityImage} />

            <main className={styles.main}>
                <section className={styles.cardContainer}>
                    <SocialCard
                        title="Kaira.network"
                        imageSrc={kairaImage}
                        description="What to do with $pointless?"
                        features={['Create / Collect Paid Posts', 'Super Follows', 'Pointless memes contests', 'Tips']}
                        link="https://kaira.network"
                        isHovered={hoverStates.kaira}
                        onMouseEnter={() => handleHover('kaira', true)}
                        onMouseLeave={() => handleHover('kaira', false)}
                    />
                    <SocialCard
                        title="Hey.xyz"
                        imageSrc={heyImage}
                        description="Share your pointless experiences!"
                        features={['Profile connections', 'Photo shares', 'Commentary']}
                        link="https://hey.xyz"
                        isHovered={hoverStates.hey}
                        onMouseEnter={() => handleHover('hey', true)}
                        onMouseLeave={() => handleHover('hey', false)}
                    />
                    <SocialCard
                        title="Orb"
                        imageSrc={orbImage}
                        description="Meet people on Lens."
                        features={['Profile matching', 'Message sending', 'Connections']}
                        link="https://orb.com"
                        isHovered={hoverStates.orb}
                        onMouseEnter={() => handleHover('orb', true)}
                        onMouseLeave={() => handleHover('orb', false)}
                    />
                    <SocialCard
                        title="Butterfly"
                        imageSrc={butterflyImage}
                        description="Find new opportunities on Lens."
                        features={['Opportunities', 'Partnerships', 'Profile discovery']}
                        link="https://buttrfly.app/explore?t=fc"
                        isHovered={hoverStates.butterfly}
                        onMouseEnter={() => handleHover('butterfly', true)}
                        onMouseLeave={() => handleHover('butterfly', false)}
                    />
                    <SocialCard
                        title="Firefly"
                        imageSrc={fireflyImage}
                        description="Collect amazing content!"
                        features={['Content discovery', 'Social interactions', 'Profile follows']}
                        link="https://firefly.com"
                        isHovered={hoverStates.firefly}
                        onMouseEnter={() => handleHover('firefly', true)}
                        onMouseLeave={() => handleHover('firefly', false)}
                    />
                    <SocialCard
                        title="Bloomers"
                        imageSrc={bloomersImage}
                        description="Explore exclusive Lens content."
                        features={['Content curation', 'Community focus', 'Profile sharing']}
                        link="https://bloomers.com"
                        isHovered={hoverStates.bloomers}
                        onMouseEnter={() => handleHover('bloomers', true)}
                        onMouseLeave={() => handleHover('bloomers', false)}
                    />
                </section>
            </main>

            <footer className={`${homeStyles.footer} ${styles.footer}`}>
                <p>&copy; 2024 Pointless Bridge</p>
            </footer>
        </div>
    );
};

export default Socials;
