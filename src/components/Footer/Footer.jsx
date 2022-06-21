import React from "react";
import { Row, Col } from "react-bootstrap";
import home from "../../assets/icons/fi_home.png";
import bell from "../../assets/icons/fi_bell.png";
import plus from "../../assets/icons/fi_plus-circle.png";
import list from "../../assets/icons/fi_list.png";
import user from "../../assets/icons/fi_user.png";
import styles from "./Footer.module.css";

const Footer = () => {
  const logo = [
    {
      img: home,
      text: "Home",
    },
    {
      img: bell,
      text: "Notifikasi",
    },
    {
      img: plus,
      text: "Jual",
    },
    {
      img: list,
      text: "Daftar Jual",
    },
    {
      img: user,
      text: "Akun",
    },
  ];

  return (
    <Row className={styles.footer}>
      {logo.map((item) => {
        return (
          <Col className={styles["logo-holder"]}>
            <img src={item.img} alt="" />
            <h6 className={styles.text}>{item.text}</h6>
          </Col>
        );
      })}
    </Row>
  );
};

export default Footer;
