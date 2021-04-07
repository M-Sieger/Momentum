import styles from "./Logo.module.css";

export type LogoProps = {
  src: string;
};

function Logo({ src, ...props }: LogoProps) {
  return <img src={`${src}`} className={`${styles.logo}`} {...props}></img>;
}

export default Logo;
