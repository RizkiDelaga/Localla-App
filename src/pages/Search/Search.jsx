import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductByKey } from '../../redux/Actions/productAction';

import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

function Search() {
  let { key } = useParams();

  const dispatch = useDispatch();
  const { isLoading: loadingProductByCategory, data: productByCategory } = useSelector(
    (state) => state.productByCategory
  );

  React.useEffect(() => {
    document.title = 'My Product List';
    dispatchMyprofile();
  }, [key]);

  const dispatchMyprofile = async () => {
    return await dispatch(getProductByKey(key));
  };

  return (
    <Fragment>
      <Navbar logo={true} search={true} mobileMenu={true} desktopMenu={true} />
      <Container style={{ marginTop: '100px', marginBottom: '50px' }}>
        <h6>
          Hasil pencarian untuk <strong>"{key}"</strong>
        </h6>
        <Row>
          {loadingProductByCategory ? (
            <div className="text-center mt-5">
              <Spinner animation="border" />
            </div>
          ) : productByCategory.length <= 0 ? (
            <NoDataFound />
          ) : (
            productByCategory
              .filter((e) => {
                return e.status === 'Available';
              })
              .map((item) => {
                return (
                  <Col xl="2" lg="3" md="4" sm="6" xs="6" className={`my-3 px-2`}>
                    <CardProduct product={item} />
                  </Col>
                );
              })
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Search;
