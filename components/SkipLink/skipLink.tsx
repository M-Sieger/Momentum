import { ReactNode } from "react";
import styles from "./skipLink.module.css";

export type SkipLinkProps = {
  href: string;
  children: ReactNode;
};

function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}
export default SkipLink;
