import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Tokenomics.module.css'; // Vérifiez que le chemin est correct
import Navbar from '../components/Navbar'; // Importer le composant Navbar
import Image from 'next/image'; // Importer le composant Image de Next.js
import tokenImage from '../img/graph.png'; // Vérifiez que le chemin de l'image est correct
import titleImage from '../img/title.png'; // Vérifiez que le chemin de l'image est correct
import breakdownImage from '../img/breakdown.png'; // Vérifiez que le chemin de l'image est correct

const Tokenomics = () => {
    const [tokenSupply, setTokenSupply] = useState<number | null>(null);
    const [burnAmount, setBurnAmount] = useState<number | null>(null);
    const [holders, setHolders] = useState<number | null>(null);
    const [price, setPrice] = useState<number | null>(null);

    const formatTokenSupply = (supply: number | null) => {
        return supply !== null ? (supply / (10 ** 18)).toLocaleString('en-US') : 'Loading...';
    };

    const formatPrice = (price: number | null) => {
        if (price === null || price === undefined || price <= 0) {
            return '$0.0000000740'; // Prix par défaut si price est indéfini ou <= 0
        }
        const floatPrice = parseFloat(price.toString());
        return `$${floatPrice.toLocaleString('en-US', { maximumFractionDigits: 10, minimumFractionDigits: 10 })}`; 
    };

    useEffect(() => {
        const api_key = 'TZMJ5CS4KMDMA3S2ANPSWM2KV257UBYEYV'; // Remplacez par votre clé API réelle
        const contract_address = '0x9B8cc6320F22325759B7D2CA5CD27347bB4eCD86';

        const fetchData = async () => {
            try {
                const supplyResponse = await fetch(`https://api.polygonscan.com/api?module=stats&action=tokensupply&contractaddress=${contract_address}&apikey=${api_key}`);
                const supplyData = await supplyResponse.json();
                if (supplyData.status === '1') {
                    setTokenSupply(parseInt(supplyData.result, 10)); // Convertir la chaîne en nombre
                } else {
                    console.error('Erreur lors de la récupération de l\'offre de jetons :', supplyData.message);
                    setTokenSupply(0); // Définir une valeur par défaut
                }

                const burnResponse = await fetch(`https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=${contract_address}&address=0x000000000000000000000000000000000000dEaD&tag=latest&apikey=${api_key}`);
                const burnData = await burnResponse.json();
                if (burnData.status === '1') {
                    setBurnAmount(parseInt(burnData.result, 10)); // Convertir la chaîne en nombre
                } else {
                    console.error('Erreur lors de la récupération du montant brûlé :', burnData.message);
                    setBurnAmount(0); // Définir une valeur par défaut
                }

                const holdersResponse = await fetch(`https://api.chainbase.online/v1/token/holders?chain_id=137&contract_address=${contract_address}&page=1&limit=1`, {
                    headers: { "accept": "application/json", "x-api-key": '2dsjNimIMCdf5q0XqkYmIdRBe5o' }
                });
                const holdersData = await holdersResponse.json();
                setHolders(holdersData.count ? holdersData.count : 0);

                // Récupération du prix
                const priceResponse = await fetch(`https://deep-index.moralis.io/api/v2.2/erc20/${contract_address}/price?chain=polygon&exchange=uniswapv3`, {
                    headers: { "accept": "application/json", "X-API-Key": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }
                });
                const priceData = await priceResponse.json();
                setPrice(priceData.usdPrice ? parseFloat(priceData.usdPrice) : 0); // Définir à 0 si priceData.usdPrice est indéfini
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();
    }, []);

    const handlePolygonScanButtonClick = () => {
        window.open('https://polygonscan.com/token/0x9b8cc6320f22325759b7d2ca5cd27347bb4ecd86#balances', '_blank');
    };

    const handleDexScreenerButtonClick = () => {
        window.open('https://dexscreener.com/polygon/0xbca71dcdb10fc273be867243a0c8addfb49e0418', '_blank');
    };

    const cardsData = [
        { title: 'Airdrop 🪂', content: 'Airdrop to all Lens profile holders on December 15th 2023 (125,089 recipients)', details: 'https://hey.xyz/posts/0x01dd85-0x0119' },
        { title: 'Treasury 💰', content: 'Treasury to cover expenses for which the breakdown can be found below' },
        { title: 'Team 👨‍💻', content: 'Sydney_Bro’s team allocation' },
        { title: 'PartyBid 🎁', content: 'PartyBid early contributors allocations (1B $pointless)' }
    ];

    const cardColors = [
        'linear-gradient(to bottom right, #2D422D, #162116)',
        'linear-gradient(to bottom right, #536C5B, #2E4A3A)',
        'linear-gradient(to bottom right, #354D3D, #1E3427)',
        'linear-gradient(to bottom right, #2D422D, #162116)'
    ];

    return (
        <div className={styles.container}>
            <Head>
                <title>Tokenomics</title>
                <meta name="description" content="Discover the tokenomics behind Pointless Bridge." />
            </Head>

            <Navbar />
            <div className={styles.tokenOverviewContainer}>
                <table className={styles.tokenOverviewTable}>
                    <thead>
                        <tr>
                            <th>Initial Supply</th>
                            <th>Burn</th>
                            <th>Total Supply</th>
                            <th>Holders</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{formatTokenSupply(tokenSupply)}</td>
                            <td>{formatTokenSupply(burnAmount)}</td>
                            <td>{formatTokenSupply((tokenSupply && burnAmount) ? (tokenSupply - burnAmount) : 0)}</td>
                            <td>{holders !== null ? holders.toLocaleString('en-US') : 'Loading...'}</td>
                            <td>{formatPrice(price)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <main className={styles.main}>
                <div className={styles.imageContainer}>
                    <Image src={titleImage} alt="Token Title Image" className={styles.titleImage} width={500} height={300} />
                    <Image src={tokenImage} alt="Graph Image" className={styles.graphImage} width={500} height={300} style={{ marginTop: '20px' }} />
                </div>

                <div className={styles.buttonContainer}>
                    <button onClick={handlePolygonScanButtonClick}>Polygonscan</button>
                    <button onClick={handleDexScreenerButtonClick}>DexScreener</button>
                </div>

                <div className={styles.cardsContainer}>
                    {cardsData.map((card, index) => (
                        <div key={index} className={styles.card} style={{ background: cardColors[index] }}>
                            <h3>{card.title}</h3>
                            <p>{card.content}</p>
                            {card.details && (
                                <button>
                                    <a href={card.details} target="_blank" rel="noopener noreferrer">Details</a>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.breakdownContainer}>
                    <Image src={breakdownImage} alt="Breakdown Image" className={styles.breakdownImage} width={500} height={300} />
                    <ul className={styles.breakdownList}>
                        <li>10% Community Rewards</li>
                        <li>4% Future Uses</li>
                        <li>3% Liquidity</li>
                        <li>2.2% Community Bounties (incl. 0.6% spent for early ones)</li>
                        <li>1.5% Team Vesting</li>
                    </ul>
                </div>
            </main>

            <footer className={`${styles.footer}`}>
                <p>&copy; 2024 Pointless Bridge</p>
            </footer>
        </div>
    );
};

export default Tokenomics;
