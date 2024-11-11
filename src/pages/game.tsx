import React, { useState } from 'react';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image'; // Import de StaticImageData
import Navbar from '../components/Navbar';
import styles from '../styles/Socials.module.css';
import homeStyles from '../styles/Home.module.css';

// Importation des images pour chaque jeu
import rouletteImage from '../img/roulette.gif';
import russianrouletteImage from '../img/russianroulette.png';
import diceImage from '../img/dice.png';
import coinImage from '../img/coin.gif';
import fireflyImage from '../img/coin.gif';
import utilityImage from '../img/utility.png';

// Définition des types pour les props de GameCard
interface GameCardProps {
  title: string;
  imageSrc: StaticImageData; // Utiliser StaticImageData pour les images locales avec next/image
  link: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

// Composant de carte pour chaque jeu
const GameCard: React.FC<GameCardProps> = ({
  title,
  imageSrc,
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
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className={styles.cardButton}>Play {title}</button>
    </a>
  </div>
);

const Games = () => {
  const [hoverStates, setHoverStates] = useState({
    kaira: false,
    hey: false,
    orb: false,
    butterfly: false,
    firefly: false,
  });

  const handleHover = (card: string, isHovered: boolean) => {
    setHoverStates((prev) => ({ ...prev, [card]: isHovered }));
  };

  return (
    <div className={`${homeStyles.pageContainer} ${styles.container}`}>
      <Head>
        <title>Pointless Games</title>
        <meta name="description" content="Discover and play Pointless games!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Image
        src={utilityImage}
        alt="Introduction"
        layout="responsive"
        width={1000}
        height={500}
        className={styles.utilityImage}
      />

      <main className={styles.main}>
        <section className={styles.cardContainer}>
          {/* Game Cards */}
          <GameCard
            title="Roulette"
            imageSrc={rouletteImage}
            link="https://app.betswirl.com/roulette?c=137&token=pointless"
            isHovered={hoverStates.kaira}
            onMouseEnter={() => handleHover('kaira', true)}
            onMouseLeave={() => handleHover('kaira', false)}
          />
          <GameCard
            title="Russian Roulette"
            imageSrc={russianrouletteImage}
            link="https://app.betswirl.com/russian-roulette?c=137&token=pointless&create"
            isHovered={hoverStates.hey}
            onMouseEnter={() => handleHover('hey', true)}
            onMouseLeave={() => handleHover('hey', false)}
          />
          <GameCard
            title="Dice"
            imageSrc={diceImage}
            link="https://app.betswirl.com/dice?c=137&token=pointless"
            isHovered={hoverStates.orb}
            onMouseEnter={() => handleHover('orb', true)}
            onMouseLeave={() => handleHover('orb', false)}
          />
          <GameCard
            title="Coin Toss"
            imageSrc={coinImage}
            link="https://app.betswirl.com/coin-toss?c=137&token=pointless"
            isHovered={hoverStates.butterfly}
            onMouseEnter={() => handleHover('butterfly', true)}
            onMouseLeave={() => handleHover('butterfly', false)}
          />
          <GameCard
            title="Coin flip"
            imageSrc={fireflyImage}
            link="https://app.betswirl.com/coin-flip-battle?c=137&token=pointless&create"
            isHovered={hoverStates.firefly}
            onMouseEnter={() => handleHover('firefly', true)}
            onMouseLeave={() => handleHover('firefly', false)}
          />
        </section>
      </main>

      <footer className={`${homeStyles.footer} ${styles.footer}`}>
        <p>&copy; 2024 Pointless Games</p>
      </footer>
    </div>
  );
};

export default Games;
