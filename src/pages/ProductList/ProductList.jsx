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

function ProductList() {
  const navigate = useNavigate();
  const [changeCategory, setChangeCategory] = useState('All Product');
  const [showAddProduct, setShowAddProduct] = useState(true);
  const [loadProductSeller, setLoadProductSeller] = useState(true);

  const dispatch = useDispatch();
  const { isLoading: loadingDataMyProfile, data: dataMyProfile } = useSelector(
    (state) => state.myProfile
  );
  const { isLoading: loadingProductSeller, data: dataProductSeller } =
    useSelector((state) => state.productBySellerId);

  React.useEffect(() => {
    document.title = 'My Product List';
    dispatchMyprofile();
    dispatchMyProduct();
  }, [loadingDataMyProfile, loadingProductSeller]);

  const dispatchMyprofile = async () => {
    return await dispatch(getMyProfile());
  };

  const dispatchMyProduct = async () => {
    return await dispatch(getProductBySellerId(dataMyProfile.id));
  };

  const productItems = (isLoading, listProduct) => {
    return listProduct.length <= 0 ? (
      <NoDataFound />
    ) : isLoading ? (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    ) : (
      listProduct.map((item) => {
        return (
          <Col xl="3" lg="4" md="4" sm="6" xs="6" className={`my-2 px-2`}>
            <CardProduct product={item} buttonAction={true} />
          </Col>
        );
      })
    );
  };

  return (
    <Fragment>
      <Navbar logo={true} search={true} mobileMenu={true} desktopMenu={true} />
      <Container style={{ marginTop: '100px' }}>
        <Row>
          <Col lg={3} className={`p-0 py-2`}>
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
                  <div
                    className={`d-flex justify-content-center align-items-center`}
                  >
                    <img
                      src={Box_Icon}
                      className={`me-2`}
                      style={{ width: '25px' }}
                      alt=""
                    />
                    <p className={`m-0`}>Semua Produk</p>
                  </div>
                  <img
                    src={Chevron_Right_Icon}
                    className={`${style['right-arrow']}`}
                    style={{ width: '25px' }}
                    alt=""
                  />
                </ToggleButton>
                <ToggleButton
                  id="radio-button-2"
                  value={'Interested'}
                  className={`my-2 ${style['btn-group-category']} ${style['bb-category']}`}
                  onClick={() => {
                    setShowAddProduct(false);
                  }}
                >
                  <div
                    className={`d-flex justify-content-center align-items-center`}
                  >
                    <img
                      src={Heart_Icon}
                      className={`me-2`}
                      style={{ width: '25px' }}
                      alt=""
                    />
                    <p className={`m-0`}>Diminati</p>
                  </div>
                  <img
                    src={Chevron_Right_Icon}
                    className={`${style['right-arrow']}`}
                    style={{ width: '25px' }}
                    alt=""
                  />
                </ToggleButton>
                <ToggleButton
                  id="radio-button-3"
                  value={'Sold'}
                  className={`my-2 ${style['btn-group-category']}`}
                  onClick={() => {
                    setShowAddProduct(false);
                  }}
                >
                  <div
                    className={`d-flex justify-content-center align-items-center`}
                  >
                    <img
                      src={Dollar_Sign_Icon}
                      className={`me-2`}
                      style={{ width: '25px' }}
                      alt=""
                    />
                    <p className={`m-0`}>Terjual</p>
                  </div>
                  <img
                    src={Chevron_Right_Icon}
                    className={`${style['right-arrow']}`}
                    style={{ width: '25px' }}
                    alt=""
                  />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Col>
          <Col lg={9} className={`p-0`}>
            <Row className={`m-auto`}>
              {showAddProduct ? (
                dataProductSeller.length >= 4 ? null : (
                  <Col
                    xl="3"
                    lg="4"
                    md="4"
                    sm="6"
                    xs="6"
                    className={`my-3 px-2`}
                  >
                    <div
                      className={`p-2 text-center text-secondary ${style['add-product-box']}`}
                      onClick={() => {
                        navigate('/product/addproduct');
                      }}
                    >
                      <img
                        src={Plus_Icon}
                        className={`mb-3`}
                        alt=""
                        style={{ width: '30%' }}
                      />
                      <p>Tambah Produk</p>
                    </div>
                  </Col>
                )
              ) : null}
              {changeCategory === 'All Product'
                ? productItems(loadingProductSeller, dataProductSeller)
                : changeCategory === 'Interested'
                ? productItems(
                    loadingProductSeller,
                    dataProductSeller.filter((e) => {
                      return e.status === 'available';
                    })
                  )
                : changeCategory === 'Sold'
                ? productItems(
                    loadingProductSeller,
                    dataProductSeller.filter((e) => {
                      return e.status === 'true';
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
