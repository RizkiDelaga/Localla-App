import React, { Fragment } from 'react';
import style from './MyTransaction.module.css';

import Default_Product_Image from '../../assets/images/image1.jpg';
import { Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import ProductOfferList from '../../components/ProductOfferList/ProductOfferList';

function MyTransaction() {
  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" normalTitle="Info Penawar" />
      <Container className="d-flex justify-content-center" style={{ marginTop: '100px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser buttonAction={true} />
          <h6 className={`fw-bold my-4`}>Semua transaksi saya</h6>
          <ProductOfferList dispatchType={'my transaction'} directionTo={'/MyTransaction/detailtransaction'} />
        </div>
      </Container>
    </Fragment>
  );
}

export default MyTransaction;
