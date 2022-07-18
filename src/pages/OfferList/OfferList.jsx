import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import style from './OfferList.module.css';

import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import ProductOfferList from '../../components/ProductOfferList/ProductOfferList';

function OfferList() {
  React.useEffect(() => {
    document.title = 'Daftar Penawar';
  }, []);

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" normalTitle="Info Penawar" />
      <Container className="d-flex justify-content-center" style={{ height: '1200px', marginTop: '100px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser />
          <h6 className={`fw-bold my-4`}>Semua tawaran produk</h6>
          <ProductOfferList dispatchType={'transaction for seller'} isSeller={true} />
        </div>
      </Container>
    </Fragment>
  );
}

export default OfferList;
