import React, { Fragment } from 'react';
import { Container, Row, Col, Modal, Button, Form, Spinner, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailProduct } from '../../redux/Actions/productAction.js';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import style from './DetailProduct.module.css';

import Card from 'react-bootstrap/Card';
import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

import Image1 from '../../assets/images/image1.jpg';
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
  createTransaction,
  getProductTransactionByID,
  getTransactionByProductID,
} from '../../redux/Actions/TransactionAction.js';
import ShareButtons from '../../components/ShareButtons/ShareButtons.jsx';
import { updateWishList } from '../../redux/Actions/WishListAction.js';

function DetailProduct() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();
  const { isLoading: loadingDetailProduct, data: detailProduct } = useSelector((state) => state.detailProduct);

  const { isLoading: loadingTransactionByProductID, data: dataTransactionByProductID } = useSelector(
    (state) => state.transactionByProductID
  );

  React.useEffect(() => {
    getDetailProductHandler();
    document.title = detailProduct.title || 'Detail Product';
    getDetailProductHandler2();
  }, [loadingDetailProduct, loadingTransactionByProductID]);

  const getDetailProductHandler = async () => {
    return dispatch(getDetailProduct(id));
  };

  const getDetailProductHandler2 = async () => {
    return dispatch(getTransactionByProductID(id));
  };

  const transactionCheck = dataTransactionByProductID.find((transaction) => {
    console.log('transaction.status', transaction.status);
    return transaction.user_id === Number(localStorage.getItem('myId')) && transaction.status === 'Pending';
  })
    ? true
    : false;

  const isMyProduct = () => {
    console.log('detailProduct.user_id', detailProduct);
    return detailProduct.user_id === Number(localStorage.getItem('myId')) ? true : false;
  };

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" desktopMenu={true} transparentFade={true} />
      {loadingDetailProduct ? (
        <div className="text-center" style={{ marginTop: '100px' }}>
          <Spinner animation="border" />
        </div>
      ) : detailProduct.length <= 0 ? (
        navigate('/notfound')
      ) : (
        <Container fluid="md" className={`${style['conditional-margin']}`} style={{ marginBottom: '50px' }}>
          <Row>
            <Col xl={8} lg={7} md={12} sm={12} xs={12} className={`mb-4 p-0`}>
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
              >
                {detailProduct
                  ? detailProduct.image_url.url.map((image) => {
                      return (
                        <SwiperSlide className="d-flex justify-content-center" style={{ width: '100%' }}>
                          <Zoom>
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
                          </Zoom>
                        </SwiperSlide>
                      );
                    })
                  : null}
              </Swiper>

              <div style={{ padding: '0px 12px' }}>
                <ShareButtons
                  detailProduct={detailProduct}
                />

                <Card className={`mt-3 p-2 ${style['description-card']}`}>
                  <Card.Body>
                    <h5 className={`mb-4`}>Deskripsi</h5>
                    <p>{detailProduct.description}</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col>
              <Card className={`p-2 mb-3 ${style['detail-product-card']}`}>
                <Card.Body>
                  <h5>{detailProduct.title}</h5>
                  <Card.Text className={`m-0 text-secondary`} style={{ fontSize: '14px' }}>
                    {detailProduct.category}
                  </Card.Text>

                  <h6 className={`mt-3 mb-4 fw-bold fs-5 ${style['main-text-color']}`}>
                    Rp {new Intl.NumberFormat('de-DE').format(parseInt(detailProduct.price))}
                  </h6>

                  <div className="d-flex align-items-center">
                    <button
                      className={`${style['btn-decision']}`}
                      onClick={() => {
                        localStorage.getItem('access_token')
                          ? isMyProduct()
                            ? navigate('/productlist')
                            : setModalShow(true)
                          : navigate('/login');
                      }}
                      disabled={transactionCheck}
                    >
                      {isMyProduct() ? 'Atur Produk' : transactionCheck ? 'Pending' : 'Nego Sekarang'}
                    </button>

                    {transactionCheck ? (
                      <OverlayTrigger
                        key={'left'}
                        placement={'left'}
                        overlay={
                          <Tooltip id={`tooltip-${'left'}`}>
                            Cek <strong>notifikasi</strong> untuk melihat tawaranmu.
                          </Tooltip>
                        }
                      >
                        <img src={Info_Icon} className="ms-2" width={25} height={25} alt="" />
                      </OverlayTrigger>
                    ) : null}
                  </div>
                </Card.Body>
              </Card>
              <CardUser sellerDetail={detailProduct} />
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
  const [error, setError] = React.useState('');

  const { isLoading: loadingCreateTransaction, data: dataCreateTransaction } = useSelector(
    (state) => state.createTransaction
  );

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
        onSubmit={async (e) => {
          e.preventDefault();
          await dispatch(createTransaction(bidPrice, props.detailProduct.id));
          loadingCreateTransaction && props.onHide();
        }}
      >
        <Modal.Header closeButton className={`px-4 pt-3 border-0`} />
        <Modal.Body className={`mx-4 p-0`}>
          <h6>Masukkan Harga Tawarmu</h6>
          <p className={`text-secondary m-0`}>
            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.
          </p>
          <div className={`mt-3 d-flex flex-column justify-content-center ${style['match-product-detail']}`}>
            <h6 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Match</h6>
            <Row>
              <Col xs="4">
                <img
                  src={props.detailProduct ? props.detailProduct.image_url.url[0] : Image1}
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
                <p className={`text-secondary my-0`} style={{ fontSize: '14px' }}>
                  Rp {new Intl.NumberFormat('de-DE').format(parseInt(props.detailProduct.price))}
                </p>
              </Col>
            </Row>
          </div>

          <div className={`mt-3`}>
            <p className={`m-0`} style={{ fontSize: '14px', fontWeight: '500' }}>
              Harga Tawar
            </p>
            <Form.Control
              className={`${style['input-price']}`}
              type="text"
              placeholder="Contoh: 10000"
              pattern="^[0-9]+$"
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
            disabled={bidPrice === undefined || bidPrice.toString().match(/^[0-9]+$/) === null}
            onClick={() => {
              loadingCreateTransaction && props.onHide();
            }}
          >
            Kirim
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default DetailProduct;
