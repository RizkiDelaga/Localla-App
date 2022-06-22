import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import CardProduct from '../../components/CardProduct/CardProduct';
import Navbar from '../../components/Navbar/Navbar';
import RadioButtonsGroup from "../../components/RadioButtonsGroup/RadioButtonsGroup";
import style from './LandingPage.module.css';

import White_Plus_Icon from '../../assets/icons/White_Plus_Icon.png';


function LandingPage() {
  return (
    <Fragment>
        <Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} transparentFade={true} />

        <Container style={{marginTop: '100px', marginBottom: '50px', padding: '0px'}}>
          <h1>Hello World!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quisquam neque doloremque vero nam perferendis, dicta ratione error nihil! Molestiae praesentium placeat eaque deserunt eos amet culpa voluptate laboriosam eum.</p>
          <br />
          <RadioButtonsGroup />

          <Row className={`m-auto`}>
            <Col xl='2' lg='3' md='4' sm='6' xs='6' className={`my-2 px-2`} >
              <CardProduct/>
            </Col>
          </Row>
        </Container>

        <button className={`d-flex align-items-center ${style['btn-add-product']}`}><img src={White_Plus_Icon} className={`me-2`} style={{height: '30px'}} alt="" />Jual</button>
    </Fragment>
  );
}

export default LandingPage;