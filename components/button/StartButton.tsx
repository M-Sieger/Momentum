import styles from "./StartButton.module.css";

function StartButton() {
  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
    <a href="#" onClick={handleClick}>
      <button className={styles.start}>
        <div className={styles.text}>Start</div>
      </button>
    </a>
  );
}
export default StartButton;
