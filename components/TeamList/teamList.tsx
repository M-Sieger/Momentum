import type { Team } from "../../utils/TeamTypes";
import styles from "../TeamList/teamList.module.css";

export type TeamListProps = {
  teams: Team[];
};

const TeamList = ({ teams }: TeamListProps) => {
  return (
    <div>
      {teams.map((team) => (
        <div className={styles.listContainer} key={team.id}>
          <img src={team.strTeamBadge} alt={""} />
          <div className={styles.teamName}></div>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
