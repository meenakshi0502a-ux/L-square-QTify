import styles from "./Button.module.css";

function Button({ children, buttonText = "Give Feedback" }) {
  return (
    <button type="button" className={styles.button}>
      {children ?? buttonText}
    </button>
  );
}

export default Button;