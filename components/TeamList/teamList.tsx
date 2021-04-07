import React from "react";
import type { Team } from "../../utils/TeamTypes";
import styles from "../TeamList/teamList.module.css";
import Link from "next/link";
import Header from "../Header/Header";

export type TeamListProps = {
  teams: Team[];
};

const TeamList = ({ teams }: TeamListProps) => {
  return (
    <>
      <span className={styles.ListHeader}>
        <Header />
      </span>
      <div className={styles.teamList}>
        {teams.map((team) => (
          <Link href={`/teamDetails/${team.strTeam}`} key={team.strTeam}>
            <div className={styles.listContainer} key={team.strTeam}>
              <img
                className={styles.teamListBadge}
                src={team.strTeamBadge}
                alt={team.strTeam}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TeamList;
