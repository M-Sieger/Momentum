import useSWR from "swr";
import { useRouter } from "next/router";
import styles from "../../styles/home.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

const TeamDeatilsPage = () => {
  const router = useRouter();
  const { strTeam } = router.query;
  const { data: team, error } = useSWR(`/api/teams/${strTeam}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!team)
    return (
      <div className={styles.container}>
        <p>Lädt</p>
      </div>
    );
  return <div>{/* <TeamDetails teams={team} /> */}</div>;
};

export default TeamDeatilsPage;
