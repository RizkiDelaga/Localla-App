import React, { Fragment } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Default_Product_Image from '../../assets/images/image1.jpg';
import { Container } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import ProductOfferList from '../../components/ProductOfferList/ProductOfferList';

function DetailMyTransaction() {
  const { state } = useLocation();

  return (
    <Fragment>
      <Navbar logo={true} backButton="true" normalTitle="Info Penawar" />
      <Container className="d-flex justify-content-center" style={{ marginTop: '100px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <CardUser userDetail={state.item} />
          <h6 className={`fw-bold my-4`}>Detail transaksi</h6>
          <ProductOfferList showButtonCallSeller={true} data={state.item} />
        </div>
      </Container>
    </Fragment>
  );
}

export default DetailMyTransaction;
