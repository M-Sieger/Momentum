import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function ExplainPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Momentum</title>
        <link rel="icon" href="/Logo_Bundesliga.svg.png" />
      </Head>
      <div className={styles.beschreibung}>
        <h2>Klicke dich durch die Teams der Bundesliga. </h2>

        <h2> Hole dir Statistiken über deinen Lieblingsverein ein.</h2>

        <h2>
          Guck dir den nächsten Spieltag an und entscheide mit welchem Verein du
          auf den Sieg gehst !
        </h2>
        <span className={styles.legende}>
          <p>W : Gewonnen</p>
          <p>D : Unentschieden</p>
          <p>L : Verloren</p>
        </span>
      </div>
      <main className={styles.main}></main>
    </div>
  );
}
