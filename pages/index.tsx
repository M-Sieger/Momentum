import Head from "next/head";
import router from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function SplashPage() {
  useEffect(() => {
    setTimeout(() => router.push("/splashPage"), 3000);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Momentum</title>
        <link rel="icon" href="/Logo_Bundesliga.svg.png" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
