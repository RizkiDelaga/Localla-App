import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import TransactionCard from '../../components/TransactionCard/TransactionCard';
import { getAllTransactionForSeller } from '../../redux/Actions/TransactionAction';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function InformasiPenawar() {
  const dispatch = useDispatch();
  const { state } = useLocation();

  React.useEffect(() => {
    document.title = 'Informasi Penawar';
    console.log('state', state.item);
  }, []);

  return (
    <Fragment>
      <Navbar logo={true} backButton="true" normalTitle="Info Penawar" desktopMenu={true} />

      <Container className="d-flex justify-content-center" style={{ marginTop: '100px', marginBottom: '50px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser userDetail={state.item} />
          <div className="diva">
            <h6 className={`fw-bold my-4`}>Produk yang Ditawar</h6>
            <TransactionCard showButtonAction={true} data={state.item} />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default InformasiPenawar;
