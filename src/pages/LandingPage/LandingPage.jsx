import React, { Fragment, useState } from 'react';
import { Container, Row, Col, ToggleButton, ToggleButtonGroup, Spinner } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductByKey } from '../../redux/Actions/productAction';
import style from './LandingPage.module.css';

import CardProduct from '../../components/CardProduct/CardProduct';
import Navbar from '../../components/Navbar/Navbar';
import Banner from "../../components/Banner/Banner";
import NoDataFound from '../../components/NoDataFound/NoDataFound';

import Search from '../../assets/icon/fi_search.png';


function LandingPage() {
  const navigate = useNavigate();
  const [changeCategory, setChangeCategory] = useState("All Product")
  
  const dispatch = useDispatch();
  const { isLoading: loadingProduct, data: dataProduct } = useSelector((state) => state.product);
  const { isLoading: loadingProductByCategory, data: dataProductByCategory } = useSelector((state) => state.productByCategory);

  React.useEffect(() => {
      document.title = "Localla | Home";
      dispatch(getProduct());
  }, []);

  const productItems = (loadingProduct, listProduct) => {
    return (
      loadingProduct? 
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
      : listProduct.length <= 0? <NoDataFound />
      : listProduct.map((item) => {
        return (
          <Col xl='2' lg='3' md='4' sm='6' xs='6' className={`my-3 `} style={{width: "maxContent"}} key={item.id} >
            <CardProduct product={item} />
          </Col>
        )
      })
    )
  }

  return (
    <Fragment>
        <Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} transparentFade={true} />
        <Banner />
        <Container className='p-0 my-5'>
          <div className={`${style['horizontal-scroll']}`}>
            <ToggleButtonGroup type="radio" name="options" defaultValue={"All Product"} className={`${style['button-group-custom']}`} onChange={(event) => {
              setChangeCategory(event)}}>
              <ToggleButton id="category-product-1" value={"All Product"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list-columns-reverse me-2" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"/>
                </svg>
                Semua
              </ToggleButton>
              <ToggleButton id="category-product-2" value={"Kaos"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} onClick={() => {
                    dispatch(getProductByKey("Kaos"))
                }}>
                {/* <ion-icon name="shirt" size="small" className="me-2"></ion-icon> */}
                Kaos
              </ToggleButton>
              <ToggleButton id="category-product-3" value={"Kemeja"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} onClick={() => {
                    dispatch(getProductByKey('Kemeja'))
                }}>
                {/* <img src={Search} className={`me-2`} alt=""/> */}
                Kemeja
              </ToggleButton>
              <ToggleButton id="category-product-4" value={"Pakaian Olahraga"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} onClick={() => {
                    dispatch(getProductByKey('Pakaian Olahraga'))
                }}>
                Pakaian Olahraga
              </ToggleButton>
              <ToggleButton id="category-product-5" value={"Celana"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} onClick={() => {
                    dispatch(getProductByKey('Celana'))
                }}>
                {/* <img src={Search} className={`me-2`} alt=""/> */}
                Celana
              </ToggleButton>
              <ToggleButton id="category-product-6" value={"Sepatu"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} onClick={() => {
                    dispatch(getProductByKey('Sepatu'))
                }}>
                Sepatu
              </ToggleButton>
              <ToggleButton id="category-product-7" value={"Sandal"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} onClick={() => {
                    dispatch(getProductByKey('Sandal'))
                }}>
                Sandal
              </ToggleButton>
              <ToggleButton id="category-product-8" value={"Tas"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} onClick={() => {
                    dispatch(getProductByKey('Tas'))
                }}>
                Tas
              </ToggleButton>
              <ToggleButton id="category-product-9" value={"Aksesoris"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} onClick={() => {
                    dispatch(getProductByKey('Aksesoris'))
                }}>
                Aksesoris
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <Row className={`mx-auto mt-3`}>
            {changeCategory === "All Product"? productItems(loadingProduct, dataProduct)
            : changeCategory === "Kaos"? productItems(loadingProductByCategory, dataProductByCategory)
            : changeCategory === "Kemeja"? productItems(loadingProductByCategory, dataProductByCategory)
            : changeCategory === "Pakaian Olahraga"? productItems(loadingProductByCategory, dataProductByCategory)
            : changeCategory === "Celana"? productItems(loadingProductByCategory, dataProductByCategory)
            : changeCategory === "Sepatu"? productItems(loadingProductByCategory, dataProductByCategory)
            : changeCategory === "Sandal"? productItems(loadingProductByCategory, dataProductByCategory)
            : changeCategory === "Tas"? productItems(loadingProductByCategory, dataProductByCategory)
            : changeCategory === "Aksesoris"? productItems(loadingProductByCategory, dataProductByCategory)
            : null}
          </Row>
        </Container>

        <button className={`d-flex align-items-center ${style['btn-add-product']}`} onClick={() => {navigate("/addproduct")}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Jual
        </button>
    </Fragment>
  );
}

export default LandingPage;
