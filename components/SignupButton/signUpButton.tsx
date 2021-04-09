import styles from "../SignupButton/signUpButton.module.css";

function SignUpButton() {
  function handleClick() {
    alert("SignUp is available in a later version of the app.");
  }

  return (
    <button onClick={handleClick} className={styles.signUp}>
      SignUp
    </button>
  );
}
export default SignUpButton;
