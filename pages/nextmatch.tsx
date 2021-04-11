import Head from "next/head";
import React from "react";

import Matchday from "../components/Matchday/Matchday";
import styles from "../styles/matchday.module.css";
export default function MatchDay() {
  return (
    <div className={styles.matchdayContainer}>
      <Head>
        <title>Nächstes Spiel</title>
        <link rel="icon" href="/Logo_Bundesliga.svg.png" />
      </Head>

      <main className={styles.matchday}>
        <h2 className={styles.nextmatch}>
          Die nächste Begegnung: Dortmund - Schalke
        </h2>

        <Matchday href="#">
          <img
            className={styles.bvbmatch}
            src="https://www.thesportsdb.com/images/media/team/badge/whja8n1580141802.png"
          />
          <br />

          <img
            className={styles.schalkematch}
            src="https://www.thesportsdb.com/images/media/team/badge/qqutyp1473453400.png"
          />
        </Matchday>
      </main>
    </div>
  );
}
