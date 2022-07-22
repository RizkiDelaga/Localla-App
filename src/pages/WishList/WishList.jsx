import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { getProduct } from '../../redux/Actions/productAction';
import { getMyWishList } from '../../redux/Actions/WishListAction';

import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

function WishList() {
  const dispatch = useDispatch();
  const { isLoading: loadingProduct, data: dataProduct } = useSelector((state) => state.product);
  const { isLoading: loadingMyWishList, data: dataMyWishList } = useSelector((state) => state.myWishList);

  React.useEffect(() => {
    document.title = 'My Product List';
    dispatchMyprofile();
    console.log('dataMyWishList', dataMyWishList);
  }, [loadingMyWishList]);

  const dispatchMyprofile = async () => {
    return await dispatch(getMyWishList());
  };

  return (
    <Fragment>
      <Navbar logo={true} search={true} mobileMenu={true} desktopMenu={true} />
      <Container className="d-flex justify-content-center" style={{ marginTop: '100px', marginBottom: '50px' }}>
        <section style={{ width: '100%', maxWidth: '800px' }}>
          <h4 className="fw-bold mb-3">Produk yang disukai</h4>
          <Row>
            {loadingMyWishList ? (
              <div className="text-center mt-5">
                <Spinner animation="border" />
              </div>
            ) : dataMyWishList.length <= 0 ? (
              <NoDataFound />
            ) : (
              dataMyWishList.map((item) => {
                return (
                  <Col lg="3" md="4" sm="6" xs="6" className={`my-3 px-2`}>
                    <CardProduct
                      product={{
                        id: item.product_id,
                        user_id: item.user_id,
                        seller_id: item.seller_id,
                        createdAt: item.createdAt,
                        updatedAt: item.updatedAt,
                        owner: item.owner,
                        title: item.detailproduct.title,
                        category: item.detailproduct.category,
                        description: item.detailproduct.description,
                        price: item.detailproduct.price,
                        image_url: item.image_url,
                        productWishlist: item.productWishlist,
                      }}
                    />
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
