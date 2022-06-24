import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import CardProduct from '../../components/CardProduct/CardProduct';
import Navbar from '../../components/Navbar/Navbar';
import RadioButtonsGroup from "../../components/RadioButtonsGroup/RadioButtonsGroup";
import style from './LandingPage.module.css';
import { Link, useNavigate } from "react-router-dom";

import White_Plus_Icon from '../../assets/icons/White_Plus_Icon.png';


function LandingPage() {
  const navigate = useNavigate();

  return (
    <Fragment>
        <Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} transparentFade={true} />

        <Container style={{marginTop: '100px', marginBottom: '50px', padding: '0px'}}>
          <RadioButtonsGroup />

          <Row className={`m-auto`}>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-2 px-2`} >
                <Link to="/detailproduct">
                  <CardProduct/>
                </Link>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-2 px-2`} >
                <Link to="/detailproduct">
                  <CardProduct/>
                </Link>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-2 px-2`} >
                <Link to="/detailproduct">
                  <CardProduct/>
                </Link>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-2 px-2`} >
                <Link to="/detailproduct">
                  <CardProduct/>
                </Link>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-2 px-2`} >
                <Link to="/detailproduct">
                  <CardProduct/>
                </Link>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-2 px-2`} >
                <Link to="/detailproduct">
                  <CardProduct/>
                </Link>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-2 px-2`} >
                <Link to="/detailproduct">
                  <CardProduct/>
                </Link>
            </Col>
          </Row>
        </Container>

        <button className={`d-flex align-items-center ${style['btn-add-product']}`} onClick={() => {navigate("/addproduct")}}><img src={White_Plus_Icon} className={`me-2`} style={{height: '30px'}} alt="" />Jual</button>
    </Fragment>
  );
}

export default LandingPage;