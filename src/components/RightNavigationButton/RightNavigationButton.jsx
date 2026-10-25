import styles from "./RightNavigationButton.module.css";

function RightNavigationButton({ swiper, visible }) {
  if (!swiper || !visible) {
    return null;
  }

  return (
    <button
      type="button"
      className={styles.button}
      aria-label="Next albums"
      onClick={() => swiper.slideNext()}
    >
      <span aria-hidden="true">›</span>
    </button>
  );
}

export default RightNavigationButton;