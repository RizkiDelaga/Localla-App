import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import TransactionCard from '../../components/TransactionCard/TransactionCard';

function DetailMyTransaction() {
  const { state } = useLocation();

  return (
    <Fragment>
      <Navbar logo={true} backButton="true" normalTitle="Detail transaksi" desktopMenu={true} />
      <Container className="d-flex justify-content-center" style={{ marginTop: '100px', marginBottom: '50px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser sellerDetail={state.item} />
          <h6 className={`fw-bold my-4`}>Detail transaksi</h6>
          <TransactionCard showButtonCallSeller={true} data={state.item} />
        </div>
      </Container>
    </Fragment>
  );
}

export default DetailMyTransaction;
