import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import style from './IncomingAllProductTransactions.module.css';

import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import TransactionCard from '../../components/TransactionCard/TransactionCard';

function IncomingAllProductTransactions() {
  React.useEffect(() => {
    document.title = 'Daftar Penawar';
  }, []);

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" normalTitle="Info Penawar" />
      <Container className="d-flex justify-content-center" style={{ marginTop: '100px', marginBottom: '50px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser />
          <h6 className={`fw-bold my-4`}>Semua tawaran produk</h6>
          <TransactionCard dispatchType={'transaction for seller'} isSeller={true} />
        </div>
      </Container>
    </Fragment>
  );
}

export default IncomingAllProductTransactions;
