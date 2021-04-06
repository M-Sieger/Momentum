import type { Team } from "../../utils/TeamTypes";
import styles from "../TeamList/teamList.module.css";
import Link from "next/link";

export type TeamListProps = {
  teams: Team[];
};

const TeamList = ({ teams }: TeamListProps) => {
  return (
    <>
      <div>
        {teams.map((team) => (
          <Link href={`/teams/${team.strTeam}`} key={team.strTeam}>
            <div className={styles.listContainer} key={team.id}>
              <img src={team.strTeamBadge} alt={team.strTeam} />
              <p className={styles.teamName}>{team.strTeam}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TeamList;
