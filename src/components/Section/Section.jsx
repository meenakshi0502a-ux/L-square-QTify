import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({
  title = "Top Albums",
  endpoint = "https://qtify-backend.labs.crio.do/albums/top",
  type = "albums",
}) {
  const isSongs = type === "songs";

  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(endpoint);
        setItems(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error(`Failed to fetch ${title}:`, error);
      }
    };

    fetchItems();
  }, [endpoint, title]);

  useEffect(() => {
    if (!isSongs) return;

    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          "https://qtify-backend.labs.crio.do/genres"
        );

        setGenres(response.data.data ?? []);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };

    fetchGenres();
  }, [isSongs]);

  const filteredItems = isSongs
    ? selectedGenre === "all"
      ? items
      : items.filter((song) => song.genre?.key === selectedGenre)
    : items;

  const renderCard = (item) => (
    <Card
      image={item.image}
      title={item.title}
      follows={isSongs ? undefined : item.follows}
      likes={isSongs ? item.likes : undefined}
    />
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {isSongs ? (
          <Tabs
            value={selectedGenre}
            onChange={(_, newGenre) => setSelectedGenre(newGenre)}
            className={styles.tabs}
            aria-label="Filter songs by genre"
          >
            <Tab label="All" value="all" />
            {genres.map((genre) => (
              <Tab
                key={genre.key}
                label={genre.label}
                value={genre.key}
              />
            ))}
          </Tabs>
        ) : (
          <button
            type="button"
            className={styles.toggleButton}
            onClick={() => setShowCarousel((previous) => !previous)}
          >
            {showCarousel ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {isSongs ? (
        <Carousel items={filteredItems} renderItem={renderCard} />
      ) : showCarousel ? (
        <Carousel items={items} renderItem={renderCard} />
      ) : (
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.id}>{renderCard(item)}</div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;