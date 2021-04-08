import { Team } from "../../utils/TeamTypes";

export type TeamDetailsProps = {
  teams: Team;
};

const TeamDetails = ({ teams }: TeamDetailsProps) => {
  return (
    <div>
      <img src={teams.strTeamBadge} alt={"#"} />




      <p>{teams.intRank}</p>
      <p>{teams.intPoints}</p>
      <p>{teams.intGoalsFor}</p>
      <p>{teams.intGoalsAgainst}</p>



    </div>
  );
};
export default TeamDetails;
