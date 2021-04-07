import Head from "next/head";
import styles from "../styles/splashPage.module.css";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import Header from "../components/Header/Header";

export default function SplashPage() {
  return (
    <div>
      <Head>
        <title>Startseite</title>
        <link rel="icon" href="/Logo_Bundesliga.svg.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main className={styles.mainSplash}>
        <ButtonLink href="/teams">Bundesliga Teams</ButtonLink>
        <ButtonLink href="#">Spieltag</ButtonLink>
        <ButtonLink href="#">Beschreibung</ButtonLink>
      </main>
    </div>
  );
}
