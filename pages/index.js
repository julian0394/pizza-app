import Head from 'next/head';
import styles from '../styles/Home.module.css';


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best NY pizza!</title>
        <meta name="description" content="The original flavor of New York pizza style!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      homepage
    </div> 
  )
}

export default Home;
