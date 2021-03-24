import styles from "../Header/Header.module.css";

export type NavbarProps = {
  imageSrc: string;
};

function Header() {
  return <div className={styles.header}>Momentum</div>;
}
export default Header;
