import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./AuthLayout.module.css";

const AuthLayout = (props) => {
  return (
    <div className={styles.cont}>
      <Row>
        <Container className={`${styles.arrow}`}>
          <img src="./assets/icons/fi_arrow-left.png" alt="" />
        </Container>
        <Col md={6} xs={0} className={`${styles.image} p-0`}>
          <img
            className={`${styles["login-img"]}`}
            src="./assets/Rectangle 131.png"
            alt=""
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className={`${styles["form-container"]} d-flex align-items-center justify-content-center p-0`}
        >
          {props.children}
        </Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
