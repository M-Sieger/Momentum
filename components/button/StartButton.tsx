import styles from "./StartButton.module.css";

export type StartButtonProps = {
 label: string
 handleClick: MouseEventHandler<HTMLButtonElement>
}

function StartButton({ label, handleClick }: StartButtonProps) {
  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
  }

  return (
      <button className={styles.start} onClick={handleClick}>
        <div className={styles.text}>{label}</div>
      </button>
  );
}
export default StartButton;
