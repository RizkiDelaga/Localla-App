import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/Actions/productAction';
import style from './WishList.module.css';

import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

function WishList() {
  const dispatch = useDispatch();
  const { isLoading: loadingProduct, data: dataProduct } = useSelector((state) => state.product);

  React.useEffect(() => {
    document.title = 'My Product List';
    dispatchMyprofile();
  }, []);

  const dispatchMyprofile = async () => {
    return await dispatch(getProduct());
  };

  return (
    <Fragment>
      <Navbar logo={true} search={true} mobileMenu={true} desktopMenu={true} />
      <Container className="d-flex justify-content-center" style={{ marginTop: '100px' }}>
        <section style={{ width: '100%', maxWidth: '800px' }}>
          <h4 className="fw-bold mb-3">Produk yang disukai</h4>
          <Row>
            {loadingProduct ? (
              <div className="text-center mt-5">
                <Spinner animation="border" />
              </div>
            ) : dataProduct.length <= 0 ? (
              <NoDataFound />
            ) : (
              dataProduct
                .filter((e) => {
                  return e.status === 'Available';
                })
                .map((item) => {
                  return (
                    <Col lg="3" md="4" sm="6" xs="6" className={`my-3 px-2`}>
                      <CardProduct product={item} />
                    </Col>
                  );
                })
            )}
          </Row>
        </section>
      </Container>
    </Fragment>
  );
}

export default WishList;
