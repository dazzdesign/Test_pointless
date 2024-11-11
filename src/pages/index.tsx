import Head from 'next/head';
import { useState } from 'react';
import { useApprovePointless, useBridgePointless, useTotalCustomFees } from '../hooks/useBridgePointless';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import introImage from '../img/intro.png';

export default function Home() {
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const bridgePointless = useBridgePointless(number);
  const totalCustomFees = useTotalCustomFees(); // Utilisé seulement si nécessaire
  const approvePointless = useApprovePointless(number);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await bridgePointless(Number(number));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    setLoading(true);
    try {
      await approvePointless(Number(number));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pointless Test Bridge</title>
        <meta name="description" content="Bridge your assets with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.introImage}>
        <Image
          src={introImage}
          alt="Intro Image"
          width={800}
          height={400}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <main className={styles.main}>
        <div className={styles.buttonContainer}>
          <a
            className={styles.customButton}
            href="https://polygonscan.com/token/0x9b8cc6320f22325759b7d2ca5cd27347bb4ecd86#balances"
            target="_blank"
            rel="noopener noreferrer"
          >
            PolygonScan
          </a>
          <a
            className={styles.customButton}
            href="https://dexscreener.com/polygon/0xbca71dcdb10fc273be867243a0c8addfb49e0418"
            target="_blank"
            rel="noopener noreferrer"
          >
            DexScreener
          </a>
          <a
            className={styles.customButton}
            href="https://swap.defillama.com/?chain=polygon&from=0x0000000000000000000000000000000000000000&to=0x9b8cc6320f22325759b7d2ca5cd27347bb4ecd86"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $pointless
          </a>
        </div>

        <h1 className={styles.title}>Pointless Bridge</h1>
        <p className={styles.description}>Select Polygon network in the drop-down above.</p>

        <div className={styles.form}>
          <input
            type="number"
            value={number}
            onChange={handleChange}
            placeholder="Amount to Bridge"
            className={styles.input}
          />
          <div className={styles.buttonGroup}>
            <button onClick={handleApprove} disabled={loading} className={styles.approveButton}>
              {loading ? 'Processing...' : 'Approve'}
            </button>
            <button onClick={handleSubmit} disabled={loading} className={styles.sendButton}>
              {loading ? 'Processing...' : 'Send'}
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Pointless Bridge</p>
      </footer>
    </div>
  );
}
