import Head from "next/head";
import styles from "../styles/Home.module.css";
import StartButton from "../components/button/StartButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Momentum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StartButton label="your label" handleClick={handleClick} />
      </main>
    </div>
  );
}
