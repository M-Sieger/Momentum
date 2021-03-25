import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Matchday from "../Matchday/Matchday";
import styles from "../Matchday/Matchday.module.css";

export default {
  title: "Common/Matchday",
  component: Matchday,
} as Meta;

export const MatchdayLink = () => (
  <div style={{ display: "grid", gridRowGap: "0.5em" }}>
    <Matchday href="#">
      <img
        className={styles.bvbmatch}
        src="https://www.thesportsdb.com/images/media/team/badge/whja8n1580141802.png"
      />{" "}
      vs{" "}
      <img
        className={styles.schalkematch}
        src="https://www.thesportsdb.com/images/media/team/badge/qqutyp1473453400.png"
      />
    </Matchday>
    <Matchday href="#">
      <img
        className={styles.bvbmatch}
        src="https://www.thesportsdb.com/images/media/team/badge/whja8n1580141802.png"
      />{" "}
      vs{" "}
      <img
        className={styles.schalkematch}
        src="https://www.thesportsdb.com/images/media/team/badge/qqutyp1473453400.png"
      />
    </Matchday>
    <Matchday href="#">
      <img
        className={styles.bvbmatch}
        src="https://www.thesportsdb.com/images/media/team/badge/whja8n1580141802.png"
      />{" "}
      vs{" "}
      <img
        className={styles.schalkematch}
        src="https://www.thesportsdb.com/images/media/team/badge/qqutyp1473453400.png"
      />
    </Matchday>
  </div>
);
