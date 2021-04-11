import Head from "next/head";
import router from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Logo from "../components/Logo/Logo";

export default function SplashPage() {
  useEffect(() => {
    setTimeout(() => router.push("/logInPage"), 3000);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Momentum</title>
        <link rel="icon" href="/Logo_Bundesliga.svg.png" />
      </Head>

      <main className={styles.main}>
        <p className={styles.logoheadline}>Momentum</p>
        <div className={styles.logo}>
          {" "}
          <Logo src="/bundesliga-1-logo-png-transparent.png" />
        </div>
      </main>
    </div>
  );
}
