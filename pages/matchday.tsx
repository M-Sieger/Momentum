import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import Matchday from "../components/Matchday/Matchday";
import styles from "../styles/matchday.module.css";
export default function MatchDay() {
  return (
    <div className={styles.matchdayContainer}>
      <Head>
        <title>Spieltag</title>
        <link rel="icon" href="/Logo_Bundesliga.svg.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.matchday}>
        <Matchday href="#">
          <img
            className={styles.bvbmatch}
            src="https://www.thesportsdb.com/images/media/team/badge/whja8n1580141802.png"
          />{" "}
          vs{" "}
          <img
            className={styles.schalkematch}
            src="https://www.thesportsdb.com/images/media/team/badge/qqutyp1473453400.png"
          />
        </Matchday>
        <Matchday href="#">
          <img
            className={styles.bvbmatch}
            src="https://www.thesportsdb.com/images/media/team/badge/whja8n1580141802.png"
          />{" "}
          vs{" "}
          <img
            className={styles.schalkematch}
            src="https://www.thesportsdb.com/images/media/team/badge/qqutyp1473453400.png"
          />
        </Matchday>
        <Matchday href="#">
          <img
            className={styles.bvbmatch}
            src="https://www.thesportsdb.com/images/media/team/badge/whja8n1580141802.png"
          />{" "}
          vs{" "}
          <img
            className={styles.schalkematch}
            src="https://www.thesportsdb.com/images/media/team/badge/qqutyp1473453400.png"
          />
        </Matchday>
      </main>
    </div>
  );
}
