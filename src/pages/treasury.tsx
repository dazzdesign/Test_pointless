import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';

const Treasury = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treasury</title>
        <meta name="description" content="View the treasury details." />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Treasury</h1>
        <p>Here you can find information regarding the treasury and its management.</p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Pointless Bridge</p>
      </footer>
    </div>
  );
};

export default Treasury;
