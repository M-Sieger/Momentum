import styles from "../styles/Home.module.css";
import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import LogInButton from "../components/LoginButton/LoginButton";
import SignUpButton from "../components/SignupButton/signUpButton";
import SkipLink from "../components/SkipLink/skipLink";

export default function SplashPage() {
  return (
    <div>
      <Head>
        <title>Startseite</title>
        <link rel="icon" href="/Logo_Bundesliga.svg.png" />
      </Head>

      <main className={styles.container}>
        <LogInButton />
        <SignUpButton />
        <div>
          <span className={styles.noselect}>
            <SkipLink href="/splashPage">Skip</SkipLink>
          </span>
        </div>
      </main>
    </div>
  );
}
