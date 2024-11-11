import Head from 'next/head';
import styles from '../styles/Home.module.css'; 
import Navbar from '../components/Navbar'; 
import React, { useEffect, useState } from 'react'; // Importez useEffect et useState
import storyImage from '../img/story.png'; // Assurez-vous que le chemin de l'image est correct
import Image from 'next/image';
const History = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0); // État pour stocker la largeur de la fenêtre

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const paragraphStyle = {
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    transition: 'background 0.3s ease-in-out',     boxShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    background: 'linear-gradient(to bottom right, #2c3930, #C3E5CD)',
    color: '#ffffff',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    target.style.background = 'linear-gradient(to bottom right, #FCE38A, #F38181)';
    target.style.color = '#000000'; 
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    target.style.background = 'linear-gradient(to bottom right, #2c3930, #C3E5CD)';
    target.style.color = '#ffffff'; 
  };

  const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.style.background = 'linear-gradient(to bottom right, #F38181, #FCE38A)';
    e.currentTarget.style.color = '#000000'; 
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.style.background = 'linear-gradient(to bottom right, #2c3930, #C3E5CD)';
    e.currentTarget.style.color = '#ffffff'; 
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Our History</title>
        <meta name="description" content="Learn more about the history of Pointless." />
      </Head>

      <Navbar />

      <main className={styles.main}>
<Image
  src={storyImage}
  alt="Introduction"
  layout="responsive" 
  width={500} 
  height={300} 
  style={{ marginTop: windowWidth < 769 ? '17%' : '4%' }}
/>
        <div className={styles.articleContent}>
          <div
            style={paragraphStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              Pointless started as a joke from @SydneyBro reacting to Lens teaser about a potential points program, but it became the foundation of the garden meme culture as the 1st Lens ecosystem native memecoin by rewarding all profile holders on December 15th 2023.
            </p>
          </div>
          <div
            style={paragraphStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              We could say the initial distribution was somehow chaotic but also the fairest we’ve seen in a long time with not less than 73.75% of the total supply airdropped to 125,089 addresses.
            </p>
          </div>
          <div
            style={paragraphStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              Community quickly emerged from this moment, with various initiatives such as rebranding discussions, social media setup, liquidity provision, partybid memberships & staking dapp a few days after the launch.
            </p>
          </div>
          <div
            style={paragraphStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              Despite one of the top holders draining the pool by trying to sell his airdrop (which massively impacted the pointless price), the community remained engaged with other initiatives early 2024, such as branding updates around the garden theme, integrations in open actions (paid collects, tips, super follow), pointless website, security improvements (multisig setup), tokenomics rework & discord implementation.
            </p>
          </div>
          <div
            style={paragraphStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              Mid March, the website was released & the discord opened to welcome the community and discuss the next steps to grow pointless. Don’t forget to join & grab your roles giving access to hidden channels!
            </p>
          </div>
          <div
            style={paragraphStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>
              More things are cooking for pointless, stay tuned for further announcements!
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <a href="https://app.t2.world/article/clssqalm04365021zmcmovy2s5j" target="_blank" rel="noopener noreferrer">
            <button
              style={{
                padding: '10px 20px',
                background: 'linear-gradient(to bottom right, #2c3930, #C3E5CD)',
                color: '#ffffff',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s, transform 0.3s',
                marginBottom: '10px',
              }}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              Read the full story
            </button>
          </a>
          <a href="https://app.t2.world/article/cltl3xefq131102520mcnny9lw1j" target="_blank" rel="noopener noreferrer">
            <button
              style={{
                padding: '10px 20px',
                background: 'linear-gradient(to bottom right, #2c3930, #C3E5CD)',
                color: '#ffffff',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
            >
              Read about Heroes article
            </button>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Pointless Bridge</p>
      </footer>
    </div>
  );
};

export default History;
