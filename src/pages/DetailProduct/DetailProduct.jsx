import React, { Fragment } from 'react';
import { Container, Row, Col, Modal, Button, Form, Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from "react-redux";
import style from './DetailProduct.module.css';
import { getDetailProduct } from '../../redux/Actions/productAction.js';

import Image1 from '../../assets/images/image1.jpg';
import Facebook_Icon from '../../assets/icons/Facebook_Icon.png';
import Instagram_Icon from '../../assets/icons/Instagram_Icon.png';
import Whatsapp_Icon from '../../assets/icons/Whatsapp_Icon.png';
import Telegram_Icon from '../../assets/icons/Telegram_Icon.png';
import Mail_Icon from '../../assets/icons/Mail_Icon.png';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CardUser from '../../components/CardUser/CardUser';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import NoDataFound from '../../components/NoDataFound/NoDataFound';

function DetailProduct() {
  let { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();
  const { isLoading: loadingDetailProduct, data: detailProduct } = useSelector((state) => state.detailProduct);
  console.log("detailProduct.. ", detailProduct);

  React.useEffect(() => {
    console.log("isPreviewProduct.. ", state);
    console.log("loadingDetailProduct.. ", detailProduct.length <= 0);
    getDetailProductHandler()
    document.title = detailProduct.title || "Detail Product";
  }, [loadingDetailProduct]);

  const getDetailProductHandler = async() => {
    if (!state) {
      return dispatch(getDetailProduct(id));
    }
  }

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" login={true} desktopMenu={true} transparentFade={true} />
      {loadingDetailProduct? 
      <div className="text-center" style={{marginTop: '100px'}}>
        <Spinner animation="border" />
      </div>
      : detailProduct.length <= 0? navigate("/notfound") : 
      <Container style={{marginTop: '100px'}}>
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
              {detailProduct? detailProduct.image_url.url.map((image) => {
                return (
                  <SwiperSlide style={{width: '100%'}}>
                    {console.log("image.. ", image)}
                    <div className={`${style['image-carousell']}`}>
                      <img src={detailProduct? image : Image1} alt="" style={{width: '100%', height: '100%', objectFit: "contain"}} />
                    </div>
                  </SwiperSlide>
                )
              }): null}
            </Swiper>

            <Card className={`mt-3 p-2 ${style['description-card']}`}>
                <Card.Body>
                  <h5 className={`mb-4`}>Deskripsi</h5>
                  <p>{state? state.description : detailProduct.description}</p>
                </Card.Body>
            </Card>
          </Col>
          <Col>
            <div className={`mb-3 ${style['share-product']}`}>
              <p className='fw-bold m-0'>Share:</p>
              <button className={`${style['share-btn']}`}>
                <img src={Facebook_Icon} alt="" style={{height: '35px'}} />
              </button>
              <button className={`${style['share-btn']}`}>
                <img src={Instagram_Icon} alt="" style={{height: '35px'}} />
              </button>
              <button className={`${style['share-btn']}`}>
                <img src={Whatsapp_Icon} alt="" style={{height: '35px'}} />
              </button>
              <button className={`${style['share-btn']}`}>
                <img src={Telegram_Icon} alt="" style={{height: '35px'}} />
              </button>
              <button className={`${style['share-btn']}`}>
                <img src={Mail_Icon} alt="" style={{height: '35px'}} />
              </button>
            </div>
            <Card className={`p-2 mb-3 ${style['detail-product-card']}`}>
                <Card.Body>
                  <h5>{state? state.title : detailProduct.title}</h5>
                  <Card.Text className={`m-0 text-secondary`} style={{fontSize: "14px"}}>{state? state.category : detailProduct.category}</Card.Text>
                  <h6 className={`mt-3 mb-4 ${style.cardBody}`}> Rp {new Intl.NumberFormat('de-DE').format(parseInt(state? state.price : detailProduct.price))}</h6>

                  <button className={`${style['btn-decision']}`} onClick={() => {state? navigate('/productlist') : setModalShow(true)}}>{state? "Terbitkan" : "Nego Sekarang"}</button>
                  {state? <button className={`mt-2 ${style['btn-decision']}`} onClick={() =>{navigate(-1)}}>Edit</button> : null}
                </Card.Body>
            </Card>
            <CardUser userDetail={state? state : detailProduct}/>
          </Col>
        </Row>
      </Container>}

      {loadingDetailProduct? null :
      <ModalPopUp
        detailProduct={detailProduct}
        loadingProduct={loadingDetailProduct}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />}
    </Fragment>
  );
}

function ModalPopUp(props) {
  const [bidPrice, setBidPrice] = React.useState();

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={`${style["modal-size"]}`}
      contentClassName={`${style["modal-style"]}`}
      className={`${style["modal-centered"]}`}
      onExited={() => setBidPrice(undefined)}
    >
      <Modal.Header closeButton className={`px-4 pt-3 border-0`} />
        <Modal.Body className={`mx-4 p-0`}>
          <h6>Masukkan Harga Tawarmu</h6>
          <p className={`text-secondary m-0`}>Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
          <div className={`mt-3 d-flex flex-column justify-content-center ${style['match-product-detail']}`}>
            <h6 style={{ textAlign: 'center', marginBottom: '20px'}}>Product Match</h6>
            <Row>
              <Col xs="4">
                <img src={props.detailProduct? props.detailProduct.image_url.url[0] : Image1} style={{width: '100%', maxWidth: 'max-content', height: '100%', minHeight: '75px', borderRadius: '12px', objectFit: 'cover'}} alt="" />
              </Col>
              <Col className={`ps-0 d-flex flex-column justify-content-center`}>
                <h6 className={`mb-1`}>{props.detailProduct.title}</h6>
                <p className={`text-secondary my-0`} style={{fontSize: '14px'}} >Rp {new Intl.NumberFormat('de-DE').format(parseInt(props.detailProduct.price))}</p>
              </Col>
            </Row>
          </div>

          <div className={`mt-3`}>
            <p className={`m-0`} style={{fontSize: '14px', fontWeight: '500'}}>Harga Tawar</p>
            <Form.Control
                  className={`${style["input-price"]}`}
                  type="text"
                  placeholder="Rp 0,00"
                  onChange={(e) => {
                      setBidPrice(e.target.value)
                      
                  }}
                  />
          </div>
        </Modal.Body>

      <Modal.Footer className={`px-4 py-4 border-0`}>
        {console.log("bidPrice.. ", bidPrice)}
        <Button className={`m-0 ${style['modal-button-action']}`} disabled={bidPrice === undefined} >Kirim</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailProduct;
