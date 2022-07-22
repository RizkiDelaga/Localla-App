import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./AuthLayout.module.css";

import Rectangle_131 from "../../assets/images/Rectangle_131.png";

const AuthLayout = (props) => {
  return (
    <Container fluid className="100h">
      <Row>
        <Col md={6} sm={12} xs={0} className={`p-0`}>
          <img
            className={`${styles["login-img"]}`}
            src={Rectangle_131}
            alt="login-img"
          />
        </Col>
        <Col
          md={6}
          sm={12}
          xs={12}
          className={`d-flex flex-column align-items-center justify-content-center`}
        >
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
