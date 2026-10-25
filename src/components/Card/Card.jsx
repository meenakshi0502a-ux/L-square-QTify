import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ image, follows, likes, title }) {
  const isSong = likes !== undefined;
  const count = isSong ? likes : follows;
  const label = isSong ? "Likes" : "Follows";

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={`${title} cover`}
          className={styles.albumImage}
        />
      </div>

      <div className={styles.details}>
        <Chip
          label={`${Number(count ?? 0).toLocaleString()} ${label}`}
          size="small"
          className={styles.chip}
        />

        <p className={styles.title}>{title}</p>
      </div>
    </article>
  );
}

export default Card;