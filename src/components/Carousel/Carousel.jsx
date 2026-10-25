import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import LeftNavigationButton from "../LeftNavigationButton/LeftNavigationButton";
import RightNavigationButton from "../RightNavigationButton/RightNavigationButton";

import styles from "./Carousel.module.css";

function Carousel({ items = [], renderItem }) {
  const [swiper, setSwiper] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigation = (instance) => {
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  };

  return (
    <div className={styles.carousel}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        className={styles.swiper}
        onSwiper={(instance) => {
          setSwiper(instance);
          updateNavigation(instance);
        }}
        onSlideChange={updateNavigation}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        onUpdate={updateNavigation}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={item.id ?? index}
            className={styles.slide}
          >
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>

      <LeftNavigationButton
        swiper={swiper}
        visible={!isBeginning}
      />

      <RightNavigationButton
        swiper={swiper}
        visible={!isEnd}
      />
    </div>
  );
}

export default Carousel;