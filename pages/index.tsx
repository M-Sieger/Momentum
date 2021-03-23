import Head from "next/head";
import styles from "../styles/Home.module.css";
import ButtonLink from "../components/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Momentum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ButtonLink label="your label" handleClick={""} />

        <ButtonLink />
      </main>
    </div>
  );
}
