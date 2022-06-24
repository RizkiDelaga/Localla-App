import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./AuthLayout.module.css";

import Arrow_Left_Icon from '../../assets/icons/Arrow_Left_Icon.png';
import Rectangle_131 from '../../assets/images/Rectangle_131.png';


const AuthLayout = (props) => {
  return (
    <Container fluid>
      <Row>
        {/* <Container className={`${styles.arrow}`}>
          <img src={Arrow_Left_Icon} alt="" />
        </Container> */}
        <Col md={6} sm={12} xs={0} className={`p-0`}>
          <img
            className={`${styles["login-img"]}`}
            src={Rectangle_131}
            alt=""
          />
        </Col>
        <Col
          md={6}
          sm={12}
          xs={12}
          className={`px-0 py-5 d-flex flex-column mt-auto mb-auto align-items-center`}
          
        >
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
