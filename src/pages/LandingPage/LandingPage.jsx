import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import CardProduct from '../../components/CardProduct/CardProduct';
import Navbar from '../../components/Navbar/Navbar';
import GroupButton from "../../components/ButtonGroup/ButtonGroup";
import style from './LandingPage.module.css';

import White_Plus_Icon from '../../assets/icons/White_Plus_Icon.png';


function LandingPage() {
  return (
    <Fragment>
        <Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} transparentFade={true} />

        <Container style={{marginTop: '100px', marginBottom: '50px'}}>
          <h1>Hello World!!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quisquam neque doloremque vero nam perferendis, dicta ratione error nihil! Molestiae praesentium placeat eaque deserunt eos amet culpa voluptate laboriosam eum.</p>
          <br />
          <GroupButton />
          <CardProduct/>
        </Container>

        <button className={`d-flex align-items-center ${style['btn-add-product']}`}><img src={White_Plus_Icon} className={`me-2`} style={{height: '30px'}} alt="" />Jual</button>
    </Fragment>
  );
}

export default LandingPage;