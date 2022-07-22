import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import style from './ProductPreview.module.css';

import Card from 'react-bootstrap/Card';
import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import ShareButtons from '../../components/ShareButtons/ShareButtons.jsx';

function ProductPreview() {
  const { state } = useLocation();
  const dataProduct = state.dataProduct;
  const files = state.files;
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'Preview Product';
  }, []);

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" desktopMenu={true} transparentFade={true} />
      <Container style={{ marginTop: '100px', marginBottom: '50px' }}>
        <Row>
          <Col xl={8} lg={7} md={12} sm={12} xs={12} className={`mb-4`}>
            <Swiper
              navigation={true}
              mousewheel={{
                invert: true,
              }}
              rewind={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className={`${style['swipper']}`}
            >
              {state.files.map((image) => {
                return (
                  <SwiperSlide className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <Zoom>
                      <div className={`${style['image-carousell']}`}>
                        <img
                          src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                          alt=""
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                    </Zoom>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <ShareButtons detailProduct={dataProduct} />

            <Card className={`mt-3 p-2 ${style['description-card']}`}>
              <Card.Body>
                <h5 className={`mb-4`}>Deskripsi</h5>
                <p>{state.dataProduct.description}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={`p-2 mb-3 ${style['detail-product-card']}`}>
              <Card.Body>
                <h5>{state.dataProduct.title}</h5>
                <Card.Text className={`m-0 text-secondary`} style={{ fontSize: '14px' }}>
                  {state.dataProduct.category}
                </Card.Text>

                <h6 className={`mt-3 mb-4 fw-bold fs-5 ${style['main-text-color']}`}>
                  Rp {new Intl.NumberFormat('de-DE').format(parseInt(state.dataProduct.price))}
                </h6>

                <div className="d-flex align-items-center">
                  <button
                    className={`${style['btn-continue']}`}
                    onClick={() => {
                      navigate('/product/addproduct', {
                        state: {
                          dataProduct,
                          files,
                        },
                      });
                    }}
                  >
                    Lanjutkan
                  </button>
                </div>
                <button
                  className={`mt-2 ${style['btn-cancel']}`}
                  onClick={() => {
                    navigate('/productlist');
                  }}
                >
                  Batalkan
                </button>
              </Card.Body>
            </Card>
            <CardUser />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ProductPreview;
