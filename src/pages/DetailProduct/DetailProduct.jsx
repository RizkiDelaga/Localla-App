import React, { Fragment } from 'react';
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Spinner,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProduct } from '../../redux/Actions/productAction.js';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import style from './DetailProduct.module.css';

import Card from 'react-bootstrap/Card';
import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

import Image1 from '../../assets/images/image1.jpg';
import Facebook_Icon from '../../assets/icons/Facebook_Icon.png';
import Instagram_Icon from '../../assets/icons/Instagram_Icon.png';
import Whatsapp_Icon from '../../assets/icons/Whatsapp_Icon.png';
import Telegram_Icon from '../../assets/icons/Telegram_Icon.png';
import Mail_Icon from '../../assets/icons/Mail_Icon.png';
import Info_Icon from '../../assets/icons/Info_Icon.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import {
  createProductTransaction,
  getProductTransactionByID,
} from '../../redux/Actions/TransactionAction.js';

function DetailProduct() {
  let { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();
  const { isLoading: loadingDetailProduct, data: detailProduct } = useSelector(
    (state) => state.detailProduct
  );
  const { isLoading: loadingTransaction, data: dataTransaction } = useSelector(
    (state) => state.productTransaction
  );
  const {
    isLoading: loadingProductTransactionByID,
    data: dataProductTransactionByID,
  } = useSelector((state) => state.productTransactionByID);

  React.useEffect(() => {
    getDetailProductHandler();
    document.title = detailProduct.title || 'Detail Product';
    getDetailProductHandler2();
  }, [loadingDetailProduct, loadingProductTransactionByID]);

  const getDetailProductHandler = async () => {
    return dispatch(getDetailProduct(id));
  };

  const getDetailProductHandler2 = async () => {
    return dispatch(getProductTransactionByID(id));
  };

  const transactionCheck = dataProductTransactionByID.find((transaction) => {
    // console.log("id", localStorage.getItem('myId'))
    return (
      transaction.user_id === Number(localStorage.getItem('myId')) &&
      transaction.status === 'pending'
    );
  })
    ? true
    : false;

  const isMyProduct = () => {
    console.log('detailProduct.user_id', detailProduct.user_id);
    return detailProduct.user_id === Number(localStorage.getItem('myId'))
      ? true
      : false;
  };

  return (
    <Fragment>
      <Navbar
        logo={true}
        backButton="/productlist"
        login={true}
        desktopMenu={true}
        transparentFade={true}
      />
      {loadingDetailProduct ? (
        <div className="text-center" style={{ marginTop: '100px' }}>
          <Spinner animation="border" />
        </div>
      ) : detailProduct.length <= 0 ? (
        navigate('/notfound')
      ) : (
        <Container style={{ marginTop: '100px' }}>
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
                {detailProduct
                  ? detailProduct.image_url.url.map((image) => {
                      return (
                        <SwiperSlide style={{ width: '100%' }}>
                          <div className={`${style['image-carousell']}`}>
                            <img
                              src={detailProduct ? image : Image1}
                              alt=""
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })
                  : null}
              </Swiper>

              <div className={`my-3 ${style['share-product']}`}>
                <Row>
                  <Col style={{ overflowX: 'auto' }}>
                    <div
                      className={`d-flex align-items-center h-100 ${style['']}`}
                    >
                      <p className="m-0">Share:</p>
                      <button className={`${style['share-btn']}`}>
                        <img
                          src={Facebook_Icon}
                          alt=""
                          style={{ height: '25px' }}
                        />
                      </button>
                      <button className={`${style['share-btn']}`}>
                        <img
                          src={Instagram_Icon}
                          alt=""
                          style={{ height: '25px' }}
                        />
                      </button>
                      <button className={`${style['share-btn']}`}>
                        <img
                          src={Whatsapp_Icon}
                          alt=""
                          style={{ height: '25px' }}
                        />
                      </button>
                      <button className={`${style['share-btn']}`}>
                        <img
                          src={Telegram_Icon}
                          alt=""
                          style={{ height: '25px' }}
                        />
                      </button>
                      <button className={`${style['share-btn']}`}>
                        <img
                          src={Mail_Icon}
                          alt=""
                          style={{ height: '25px' }}
                        />
                      </button>
                    </div>
                  </Col>
                  <Col
                    xs="auto"
                    className={`d-flex justify-content-end align-items-center`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="100%"
                      fill={detailProduct.id ? 'red' : 'black'}
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                    <p className="m-0 ms-1">Disukai ({detailProduct.id})</p>
                  </Col>
                </Row>
              </div>

              <Card className={`mt-3 p-2 ${style['description-card']}`}>
                <Card.Body>
                  <h5 className={`mb-4`}>Deskripsi</h5>
                  <p>{state ? state.description : detailProduct.description}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={`p-2 mb-3 ${style['detail-product-card']}`}>
                <Card.Body>
                  <h5>{state ? state.title : detailProduct.title}</h5>
                  <Card.Text
                    className={`m-0 text-secondary`}
                    style={{ fontSize: '14px' }}
                  >
                    {state ? state.category : detailProduct.category}
                  </Card.Text>
                  <h6
                    className={`mt-3 mb-4 fw-bold fs-5 ${style['secondary-text-color']}`}
                  >
                    Rp{' '}
                    {new Intl.NumberFormat('de-DE').format(
                      parseInt(state ? state.price : detailProduct.price)
                    )}
                  </h6>

                  <div className="d-flex align-items-center">
                    <button
                      className={`${style['btn-decision']}`}
                      onClick={() => {
                        state
                          ? navigate('/productlist')
                          : localStorage.getItem('access_token')
                          ? isMyProduct()
                            ? navigate('/productlist')
                            : setModalShow(true)
                          : navigate('/login');
                      }}
                      disabled={transactionCheck}
                    >
                      {state
                        ? 'Terbitkan'
                        : isMyProduct()
                        ? 'Atur Produk'
                        : transactionCheck
                        ? 'Pending'
                        : 'Nego Sekarang'}
                    </button>

                    {transactionCheck ? (
                      <OverlayTrigger
                        key={'left'}
                        placement={'left'}
                        overlay={
                          <Tooltip id={`tooltip-${'left'}`}>
                            Cek <strong>notifikasi</strong> untuk melihat
                            tawaranmu.
                          </Tooltip>
                        }
                      >
                        <img
                          src={Info_Icon}
                          className="ms-2"
                          width={25}
                          height={25}
                          alt=""
                        />
                      </OverlayTrigger>
                    ) : null}
                  </div>
                  {state ? (
                    <button
                      className={`mt-2 ${style['btn-decision']}`}
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      Edit
                    </button>
                  ) : null}
                </Card.Body>
              </Card>
              <CardUser userDetail={state ? state : detailProduct} />
            </Col>
          </Row>
        </Container>
      )}

      {loadingDetailProduct ? null : (
        <ModalPopUp
          detailProduct={detailProduct}
          loadingProduct={loadingDetailProduct}
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
        />
      )}
    </Fragment>
  );
}

function ModalPopUp(props) {
  const dispatch = useDispatch();
  const [bidPrice, setBidPrice] = React.useState();

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={`${style['modal-size']}`}
      contentClassName={`${style['modal-style']}`}
      className={`${style['modal-centered']}`}
      onExited={() => setBidPrice(undefined)}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(createProductTransaction(bidPrice, props.detailProduct.id));
          props.onHide();
        }}
      >
        <Modal.Header closeButton className={`px-4 pt-3 border-0`} />
        <Modal.Body className={`mx-4 p-0`}>
          <h6>Masukkan Harga Tawarmu</h6>
          <p className={`text-secondary m-0`}>
            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </p>
          <div
            className={`mt-3 d-flex flex-column justify-content-center ${style['match-product-detail']}`}
          >
            <h6 style={{ textAlign: 'center', marginBottom: '20px' }}>
              Product Match
            </h6>
            <Row>
              <Col xs="4">
                <img
                  src={
                    props.detailProduct
                      ? props.detailProduct.image_url.url[0]
                      : Image1
                  }
                  style={{
                    width: '100%',
                    maxWidth: 'max-content',
                    height: '100%',
                    minHeight: '75px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                  }}
                  alt=""
                />
              </Col>
              <Col className={`ps-0 d-flex flex-column justify-content-center`}>
                <h6 className={`mb-1`}>{props.detailProduct.title}</h6>
                <p
                  className={`text-secondary my-0`}
                  style={{ fontSize: '14px' }}
                >
                  Rp{' '}
                  {new Intl.NumberFormat('de-DE').format(
                    parseInt(props.detailProduct.price)
                  )}
                </p>
              </Col>
            </Row>
          </div>

          <div className={`mt-3`}>
            <p
              className={`m-0`}
              style={{ fontSize: '14px', fontWeight: '500' }}
            >
              Harga Tawar
            </p>
            <Form.Control
              className={`${style['input-price']}`}
              type="text"
              placeholder="Rp 0,00"
              pattern="[0-9]*"
              title="Harga harus berupa angka. Cth: 125000"
              onChange={(e) => {
                setBidPrice(e.target.value);
              }}
            />
          </div>
        </Modal.Body>

        <Modal.Footer className={`px-4 py-4 border-0`}>
          <Button
            type="submit"
            className={`m-0 ${style['modal-button-action']}`}
            disabled={bidPrice === undefined}
          >
            Kirim
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default DetailProduct;
