import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
// import style from './OfferList.module.css';

import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import { useParams } from 'react-router-dom';

function IncomingProductTransactions() {
  let { idproduct } = useParams();
  React.useEffect(() => {
    document.title = 'Transaksi Produk';
    console.log(idproduct);
  }, [idproduct]);

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" normalTitle="Info Penawar" />
      <Container className="d-flex justify-content-center" style={{ marginTop: '100px', marginBottom: '50px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser />
          <h6 className={`fw-bold my-4`}>Tawaran pada produk</h6>
          <TransactionCard
            dispatchType={'transaction by product id'}
            directionTo={'/MyTransaction/detailtransaction'}
            IDProduct={idproduct}
          />
        </div>
      </Container>
    </Fragment>
  );
}

export default IncomingProductTransactions;
