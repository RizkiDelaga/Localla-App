import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import style from './InformasiPenawar.module.css';

import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import ProductOfferList from '../../components/ProductOfferList/ProductOfferList';
import { getAllTransactionForSeller } from '../../redux/Actions/TransactionAction';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function InformasiPenawar() {
  const dispatch = useDispatch();
  const { state } = useLocation();


  React.useEffect(() => {
    document.title = 'Informasi Penawar';
    console.log('state',state.item);
  }, []);

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" normalTitle="Info Penawar" />
      <Container className="d-flex justify-content-center" style={{ height: '1200px', marginTop: '100px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser userDetail={state.item}  />
          <div className="diva">
            <h6 className={`fw-bold my-4`}>Produk yang Ditawar</h6>
            <ProductOfferList showButtonAction={true} data={state.item} />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default InformasiPenawar;
