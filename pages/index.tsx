import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Momentum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <label>
          Search{" "}
          <input
            type="text"
            placeholder="Search for Teams"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
        {search}
      </main>
    </div>
  );
}
