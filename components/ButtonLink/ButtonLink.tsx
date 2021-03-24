import { ReactNode } from "react";
import styles from "./ButtonLink.module.css";

export type ButtonLinkProps = {
  href: string;
  children: ReactNode;
};

function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}
export default ButtonLink;
