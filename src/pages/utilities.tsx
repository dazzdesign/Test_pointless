import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const Utilities = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Utilities</title>
        <meta name="description" content="Explore various utilities and tools." />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Utilities</h1>
        <p>Discover various utilities and tools that can help you in your blockchain journey.</p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Pointless Bridge</p>
      </footer>
    </div>
  );
};

export default Utilities;
