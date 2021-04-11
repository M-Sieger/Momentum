import { Team } from "../../utils/TeamTypes";
import styles from "../../styles/teamDetails.module.css";
import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";

export type TeamDetailsProps = {
  teams: Team;
};

const TeamDetails = ({ teams }: TeamDetailsProps) => {
  return (
    <>
      <div className={styles.detailsContainer}>
        <ButtonLink href="/matchday">Spieltag</ButtonLink>
        <img
          className={styles.detailBadge}
          src={teams.strTeamBadge.split("/tiny")[0]}
          alt={"#"}
        />
        <div className={styles.listDiv}>
          {" "}
          <ul className={styles.infoList}>
            <li className={styles.tabellenplatz}>
              Tabellenplatz: {teams.intRank}
            </li>
            <li className={styles.points}>Punkte: {teams.intPoints}</li>
            <li className={styles.goals}>Tore: {teams.intGoalsFor}</li>
            <li className={styles.goalsagainst}>
              Gegentore: {teams.intGoalsAgainst}
            </li>
            <li className={styles.momentum}>Momentum: {teams.strForm}</li>
          </ul>
          <br />
        </div>
        <div className={styles.spieltag}></div>
      </div>
    </>
  );
};
export default TeamDetails;
