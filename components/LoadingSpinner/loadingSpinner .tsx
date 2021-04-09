import styles from "./loadingSpinner.module.css";
import MoonLoader from "react-spinners/MoonLoader";

function LoadingSpinner() {
  return (
    <div className={styles.wrapper}>
      <MoonLoader color="#48909b" size={50} />
    </div>
  );
}
export default LoadingSpinner;
