import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToggleButton, ToggleButtonGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../../redux/Actions/ProfileAction';
import { getProductBySellerId } from '../../redux/Actions/productAction';
import { useNavigate } from 'react-router-dom';
import style from './ProductList.module.css';

import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

import Plus_Icon from '../../assets/icon/Plus_Icon.png';
import Box_Icon from '../../assets/icons/Box_Icon.png';
import Heart_Icon from '../../assets/icons/Heart_Icon.png';
import Dollar_Sign_Icon from '../../assets/icons/Dollar_Sign_Icon.png';
import Chevron_Right_Icon from '../../assets/icons/Chevron_Right_Icon.png';
import CardUser from '../../components/CardUser/CardUser';

function ProductList() {
  const navigate = useNavigate();
  const [changeCategory, setChangeCategory] = useState('All Product');
  const [showAddProduct, setShowAddProduct] = useState(true);
  const [loadProductSeller, setLoadProductSeller] = useState(true);

  const dispatch = useDispatch();
  const { isLoading: loadingDataMyProfile, data: dataMyProfile } = useSelector((state) => state.myProfile);
  const { isLoading: loadingProductSeller, data: dataProductSeller } = useSelector((state) => state.productBySellerId);

  React.useEffect(() => {
    document.title = 'My Product List';
    dispatchMyprofile();
    dispatchMyProduct();
  }, [loadingDataMyProfile, loadingProductSeller]);
  // }, [loadingDataMyProfile, loadingProductSeller, dispatch]);

  const dispatchMyprofile = async () => {
    return await dispatch(getMyProfile());
  };

  const dispatchMyProduct = async () => {
    return (await loadingDataMyProfile) ? null : dispatch(getProductBySellerId(dataMyProfile.id));
  };

  const productItems = (isLoading, listProduct) => {
    return isLoading ? (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    ) : listProduct.length <= 0 ? (
      <NoDataFound />
    ) : (
      listProduct.map((item) => {
        return (
          <Col xl="3" lg="4" md="4" sm="6" xs="6" className={`my-2 px-2`}>
            <CardProduct product={item} buttonAction={true} dispatchMyProduct={dispatchMyProduct} />
          </Col>
        );
      })
    );
  };

  return (
    <Fragment>
      <Navbar logo={true} search={true} mobileMenu={true} desktopMenu={true} />
      <Container style={{ marginTop: '100px', marginBottom: '50px' }}>
        <h4 className="fw-bold mb-3">Daftar Jual Saya</h4>
        <CardUser buttonAction={true} />
        <Row className="mt-3">
          <Col lg={3} className={`py-2`}>
            <div className={`${style['category-product-list']}`}>
              <ToggleButtonGroup
                type="radio"
                name="category-product-seller"
                defaultValue={changeCategory}
                className={`${style['button-group-custom']}`}
                onChange={(event) => {
                  setChangeCategory(event);
                }}
              >
                <h6 className={`mb-3 ${style['text-category']}`}>Kategori</h6>
                <ToggleButton
                  id="radio-button-1"
                  value={'All Product'}
                  className={`my-2 ${style['btn-group-category']} `}
                  onClick={() => {
                    setShowAddProduct(true);
                  }}
                >
                  <div className={`d-flex justify-content-center align-items-center`}>
                    {/* <img src={Box_Icon} className={`me-2`} style={{ width: '25px' }} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="100%"
                      fill="currentColor"
                      className="bi bi-box-seam me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>
                    <p className={`m-0`}>Semua Produk</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="100%"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </ToggleButton>
                <ToggleButton
                  id="radio-button-2"
                  value={'Interested'}
                  className={`my-2 ${style['btn-group-category']} ${style['bb-category']}`}
                  onClick={() => {
                    setShowAddProduct(false);
                  }}
                >
                  <div className={`d-flex justify-content-center align-items-center`}>
                    {/* <img src={Heart_Icon} className={`me-2`} style={{ width: '25px' }} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="100%"
                      fill="currentColor"
                      className="bi bi-heart me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    <p className={`m-0`}>Diminati</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="100%"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </ToggleButton>
                <ToggleButton
                  id="radio-button-3"
                  value={'Sold'}
                  className={`my-2 ${style['btn-group-category']}`}
                  onClick={() => {
                    setShowAddProduct(false);
                  }}
                >
                  <div className={`d-flex justify-content-center align-items-center`}>
                    {/* <img src={Dollar_Sign_Icon} className={`me-2`} style={{ width: '25px' }} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="100%"
                      fill="currentColor"
                      className="bi bi-cash-stack me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                      <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                    </svg>
                    <p className={`m-0`}>Terjual</p>
                  </div>
                  {/* <img
                    src={Chevron_Right_Icon}
                    className={`${style['right-arrow']}`}
                    style={{ width: '25px' }}
                    alt=""
                  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="100%"
                    fill="currentColor"
                    class="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Col>
          <Col lg={9} className={`p-0`}>
            <Row className={`m-auto`}>
              {showAddProduct ? (
                loadingProductSeller ? null : dataProductSeller.length >= 4 ? null : (
                  <Col xl="3" lg="4" md="4" sm="6" xs="6" className={`my-3 px-2`}>
                    <div
                      className={`p-2 text-center text-secondary ${style['add-product-box']}`}
                      onClick={() => {
                        navigate('/product/addproduct');
                      }}
                    >
                      <img src={Plus_Icon} className={`mb-3`} alt="" style={{ width: '30%' }} />
                      <p>Tambah Produk</p>
                    </div>
                  </Col>
                )
              ) : null}
              {changeCategory === 'All Product'
                ? productItems(
                    loadingProductSeller,
                    dataProductSeller.filter((e) => {
                      return e.status === 'Available';
                    })
                  )
                : changeCategory === 'Interested'
                ? productItems(
                    loadingProductSeller,
                    dataProductSeller.filter((e) => {
                      return e.status === 'Available';
                    })
                  )
                : changeCategory === 'Sold'
                ? productItems(
                    loadingProductSeller,
                    dataProductSeller.filter((e) => {
                      return e.status === 'Sold';
                    })
                  )
                : null}
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ProductList;
