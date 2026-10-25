import styles from "./LeftNavigationButton.module.css";

function LeftNavigationButton({ swiper, visible }) {
  if (!swiper || !visible) {
    return null;
  }

  return (
    <button
      type="button"
      className={styles.button}
      aria-label="Previous albums"
      onClick={() => swiper.slidePrev()}
    >
      <span aria-hidden="true">‹</span>
    </button>
  );
}

export default LeftNavigationButton;