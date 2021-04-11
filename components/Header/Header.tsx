import Router from "next/router";
import styles from "../Header/Header.module.css";
export type NavbarProps = {
  imageSrc: string;
};

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {" "}
        <img
          className={styles.backArrow}
          src="/BackButton.png"
          onClick={() => Router.back()}
        />
        <p className={styles.headline}>Momentum</p>
      </div>
    </div>
  );
}
export default Header;
