import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useReadContract } from 'wagmi';
import styles from './Navbar.module.css';
import nameDomain from '../img/nameDomain.svg';
import favicon from '../img/favicon.ico';

const Navbar = () => {
  const account = useAccount();
  const { data: userBalance } = useReadContract({
    address: "0x9B8cc6320F22325759B7D2CA5CD27347bB4eCD86",
    abi: [
      {
        "constant": true,
        "inputs": [{ "name": "_owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "payable": false,
        "type": "function"
      }
    ],
    functionName: "balanceOf",
    args: [account.address],
  });

  const formattedBalance = userBalance 
    ? (parseFloat(userBalance.toString()) / 1e18).toLocaleString('en-US', { maximumFractionDigits: 0 }) 
    : 'Loading...';

  return (
    <>
      <header className={styles.navbar}>
        <nav className={styles.nav}>
          <div className={styles.nameDomain}>
            <Image
              src={nameDomain}
              alt="Logo du site"
              width={200}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div className={styles.navLinks}>
            <Link href="/">Home</Link>

            {/* Menu déroulant pour About, sans lien cliquable */}
            <div className={styles.dropdown}>
              <span className={styles.dropdownToggle}>About</span>
              <div className={styles.dropdownContent}>
                <Link href="/tokenomics">Tokenomics</Link>
                <Link href="/history">History</Link>
              </div>
            </div>

            <Link href="/memes">Memes</Link>

            {/* Menu déroulant pour Utilities avec Social et Game */}
            <div className={styles.dropdown}>
              <span className={styles.dropdownToggle}>Utilities</span>
              <div className={styles.dropdownContent}>
                <Link href="/social">Social</Link>
                <Link href="/game">Game</Link>
              </div>
            </div>

            {/* Lien externe pour Treasury */}
            <a 
              href="https://debank.com/profile/0x810b93f0dec3a84aa3b8a210d033858fbee41204"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              Treasury
            </a>
          </div>
        </nav>
      </header>

      {/* Section pour la balance et le bouton de connexion */}
      <div className={styles.connectSection}>
        <div className={styles.balanceContainer}>
          <p className={styles.balanceText}>
            Balance: {formattedBalance} 
            <Image src={favicon} alt="Favicon" height={20} width={20} style={{ marginLeft: '5px', verticalAlign: 'middle' }} />
          </p>
        </div>
        <ConnectButton />
      </div>
    </>
  );
};

export default Navbar;
