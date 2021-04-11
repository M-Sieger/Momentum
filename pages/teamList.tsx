import Head from "next/head";
import React from "react";
import useSWR from "swr";
import TeamList from "../components/TeamList/teamList";
import type { Team } from "../utils/TeamTypes";
import styles from "../styles/Home.module.css";

export type TeamListPageProps = { teams: Team[] };

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TeamListPage() {
  const { data, error } = useSWR("/api/teams", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div className={styles.container}>loading</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Momentum</title>
      </Head>
      <main>
        <TeamList teams={data} />
      </main>
    </div>
  );
}
