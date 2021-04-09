import styles from "../LoginButton/LoginButton.module.css";

function LoginButton() {
  function handleClick() {
    alert("Login is coming soon.");
  }

  return (
    <button onClick={handleClick} className={styles.login}>
      Login
    </button>
  );
}
export default LoginButton;
