import { Team } from "../../utils/TeamTypes";

export type TeamDetailsProps = {
  teams: Team;
};

const TeamDetails = ({ teams }: TeamDetailsProps) => {
  return (
    <div>
      <img src={teams.strTeamBadge} alt={"#"} />
    </div>
  );
};
export default TeamDetails;
