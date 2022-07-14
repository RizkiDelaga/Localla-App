// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import shop from "../../assets/images/shop.jpg";
import shop1 from "../../assets/images/shop1.jpg";
import shopping from "../../assets/images/shopping.jpg";

import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      mousewheel={{
        invert: true,
      }}
      rewind={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className={`${styles["swipper"]}`}
    >
      <SwiperSlide style={{ width: "100%" }}>
        <div style={{ position: "relative" }}>
          <div className={styles["swiper-caption"]}>
            <h3>Local With International Quality</h3>
            <p>Localla offering local brand with international quality</p>
            <button className={styles["banner-btn"]}>Shopping Now</button>
          </div>
          <img className={styles["swiper-img"]} alt="" src={shop} />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ width: "100%" }}>
        <div style={{ position: "relative" }}>
          <div className={styles["swiper-caption1"]}>
            <h3>Think Globally Act Locally</h3>
            <p>Globalization must be grow up with localization</p>
            <button className={styles["banner-btn"]}>Shopping Now</button>
          </div>
          <img className={styles["swiper-img"]} alt="" src={shop1} />
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ width: "100%" }}>
        <div style={{ position: "relative" }}>
          <div className={styles["swiper-caption"]}>
            <h3>Support Your Local</h3>
            <p>Put your money where your house is</p>
            <button className={styles["banner-btn"]}>Shopping Now</button>
          </div>
          <img className={styles["swiper-img"]} alt="" src={shopping} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
