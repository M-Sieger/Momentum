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

      <p>Tabellenplatz: {teams.intRank}</p>
      <p>Punkte: {teams.intPoints}</p>
      <p>Tore: {teams.intGoalsFor}</p>
      <p>Gegentore: {teams.intGoalsAgainst}</p>
      <p>Momentum: {teams.strForm}</p>
    </div>
  );
};
export default TeamDetails;
