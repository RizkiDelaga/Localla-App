import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import shop from "../../assets/images/shop.jpg";
import shopping from "../../assets/images/shopping.jpg";
import shop1 from "../../assets/images/shop1.jpg";
import styles from "./Banner.module.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className={styles["banner-img"]}>
        <img className="d-block w-100" src={shop} alt="First slide" />
        <Carousel.Caption
          className={styles["banner-caption"]}
          style={{ textAlign: "left" }}
        >
          <h3>Local with standart International</h3>
          <p>Localla offering local brand with international quality</p>
          <button className={styles["banner-btn"]}>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles["banner-img"]}>
        <img className="d-block w-100" src={shopping} alt="Second slide" />
        <Carousel.Caption className={styles["banner-caption"]}>
          <h3>Think Globally Act Locally</h3>
          <p>Globalization must be grow up with localization</p>
          <button className={styles["banner-btn"]}>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className={styles["banner-img"]}>
        <img className="d-block w-100" src={shop1} alt="Third slide" />
        <Carousel.Caption
          className={styles["banner-caption"]}
          style={{ textAlign: "left" }}
        >
          <h3>Support your Local</h3>
          <p>Put your money where your house is</p>
          <button className={styles["banner-btn"]}>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
