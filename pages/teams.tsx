import Head from "next/head";
import React from "react";
import useSWR from "swr";
import TeamList from "../components/TeamList/teamList";
import type { Team } from "../utils/TeamTypes";
import styles from "../styles/Home.module.css";
import LoadingSpinner from "../components/LoadingSpinner/loadingSpinner ";
import Header from "../components/Header/Header";

export type TeamListPageProps = { teams: Team };

export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TeamListPage() {
  const { data: teams, error } = useSWR("/api/teams", fetcher);

  if (error) return <div>failed to load</div>;
  if (!teams)
    return (
      <div className={styles.container}>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className={styles.container}>
      <Head>
        <title>Teams</title>
      </Head>

      <main>
        <TeamList teams={teams} />
      </main>
    </div>
  );
}
