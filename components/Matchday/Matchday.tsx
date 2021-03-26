import { ReactNode } from "react";
import styles from "../Matchday/Matchday.module.css";

export type MatchdayProps = {
  href: string;
  children: ReactNode;
};

function Matchday({ href, children }: MatchdayProps) {
  return (
    <a className={styles.matchday} href={href}>
      {children}
    </a>
  );
}
export default Matchday;
