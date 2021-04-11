import { Team } from "../../utils/TeamTypes";
import styles from "../../styles/teamDetails.module.css";

export type TeamDetailsProps = {
  teams: Team;
};

const TeamDetails = ({ teams }: TeamDetailsProps) => {
  return (
    <div className={styles.detailsContainer}>
      <img
        className={styles.detailBadge}
        src={teams.strTeamBadge.split("/tiny")[0]}
        alt={"#"}
      />
      <ul>
        <li>Tabellenplatz: {teams.intRank}</li>
        <li>Punkte: {teams.intPoints}</li>
        <li>Tore: {teams.intGoalsFor}</li>
        <li>Gegentore: {teams.intGoalsAgainst}</li>
        <li>Momentum: {teams.strForm}</li>
      </ul>
    </div>
  );
};
export default TeamDetails;
