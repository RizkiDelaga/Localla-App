import React, { Fragment } from 'react';

import Default_Product_Image from '../../assets/images/image1.jpg';
import { Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import TransactionCard from '../../components/TransactionCard/TransactionCard';

function MyTransaction() {
  return (
    <Fragment>
      <Navbar logo={true} search={true} mobileMenu={true} desktopMenu={true} />

      <Container className="d-flex justify-content-center" style={{ marginTop: '100px', marginBottom: '50px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser buttonAction={true} />
          <h6 className={`fw-bold my-4`}>Semua transaksi saya</h6>
          <TransactionCard dispatchType={'my transaction'} directionTo={'/MyTransaction/detailtransaction'} />
        </div>
      </Container>
    </Fragment>
  );
}

export default MyTransaction;
