import Head from "next/head";
import styles from "../styles/splashPage.module.css";
import ButtonLink from "../components/ButtonLink/ButtonLink";

export default function SplashPage() {
  return (
    <div>
      <Head>
        <title>Startseite</title>
        <link rel="icon" href="/Logo_Bundesliga.svg.png" />
      </Head>

      <main className={styles.mainSplash}>
        <ButtonLink href="/explanation">Beschreibung</ButtonLink>
        <ButtonLink href="/nextmatch">Nächstes Spiel</ButtonLink>
        <ButtonLink href="/teams">Bundesliga Teams</ButtonLink>
      </main>
    </div>
  );
}
