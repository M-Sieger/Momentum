import type { Team } from "../../utils/TeamTypes";
import styles from "../TeamList/teamList.module.css";

export type TeamListProps = {
  teams: Team[];
};

const TeamList = ({ teams }: TeamListProps) => {
  return (
    <>
      <div>
        {teams.map((team) => (
          <div className={styles.listContainer} key={team.id}>
            <img src={team.strTeamBadge} alt={team.strTeam} />
            <p className={styles.teamName}>{team.strTeam}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamList;
