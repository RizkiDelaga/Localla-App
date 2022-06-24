import React from "react";
import { Container } from "react-bootstrap";
import styles from "./Banner.module.css";
import gift from "../../assets/images/png_gift.png";
import img1 from "../../assets/images/Rectangle 137.png";

const Banner = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center"
      style={{ padding: "100px 0 0 " }}
    >
      <div className={`${styles.box} ${styles.box1}`}></div>
      <div className={`${styles.box2}`}>
        <div style={{ paddingLeft: "80px" }}>
          <h2 style={{ fontWeight: "700" }}>Bulan Ramadhan Banyak diskon!</h2>
          <p style={{ fontWeight: "400", margin: "0" }}>Diskon Hingga</p>
          <p style={{ fontWeight: "500", color: "#FA2C5A", fontSize: "32px" }}>
            60%
          </p>
        </div>
        <img src={gift} alt="" style={{ transform: "translateX(57px)" }} />
        <img src={img1} alt="" className={styles.shadow} />
      </div>
      <div className={`${styles.box} ${styles.box3}`}></div>
    </Container>
  );
};

export default Banner;
