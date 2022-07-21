import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Modal, Form, Accordion, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  getAllMyTransaction,
  getAllTransactionForSeller,
  getTransactionByProductID,
  updateTransaction,
} from '../../redux/Actions/TransactionAction';
import style from './ProductOfferList.module.css';

import Image1 from '../../assets/images/image1.jpg';
import Whatsapp_Icon from '../../assets/icons/Whatsapp_Icon.png';

function ProductOfferList({
  dispatchType,
  IDProduct,
  showButtonAction,
  data,
  directionTo,
  showButtonCallSeller,
  isSeller,
}) {
  let { idtransaction } = useParams();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = React.useState(false);
  const [modalUpdateStatus, setModalUpdateStatus] = React.useState();
  // const [transactionItem, setTransactionItem] = React.useState([]);
  const [dataTransaction, setDataTransaction] = React.useState({
    isLoading: true,
    data: [],
  });
  const [loadingUpdateStatus, setLoadingUpdateStatus] = React.useState(false);

  const dispatch = useDispatch();
  const { isLoading: loadingTransactionForSeller, data: dataTransactionForSeller } = useSelector(
    (state) => state.allTransactionForSeller
  );
  const { isLoading: loadingMyTransaction, data: dataMyTransaction } = useSelector((state) => state.myTransaction);
  const { isLoading: loadingTransactionByProductID, data: dataTransactionByProductID } = useSelector(
    (state) => state.transactionByProductID
  );
  const { isLoading: loadingUpdateTransaction, data: dataUpdateTransaction } = useSelector(
    (state) => state.updateTransaction
  );

  React.useEffect(() => {
    // setDataTransaction({ isLoading: true, data: [] });
    console.log('isLoading: true', dataTransaction.isLoading);

    if (dispatchType === 'transaction for seller') {
      dispatch(getAllTransactionForSeller());
      setDataTransaction({ isLoading: loadingTransactionForSeller, data: dataTransactionForSeller });
    } else if (dispatchType === 'my transaction') {
      dispatch(getAllMyTransaction());
      setDataTransaction({ isLoading: loadingMyTransaction, data: dataMyTransaction });
    } else if (dispatchType === 'transaction by product id') {
      handleDispatch();
      console.log('dataTransactionByProductID', dataTransactionByProductID);
      setDataTransaction({ isLoading: loadingTransactionByProductID, data: dataTransactionByProductID });
    } else {
      setDataTransaction({ isLoading: false, data: [data] });
    }
    console.log('isLoading: true', dataTransaction.isLoading);
    console.log('isLoading: true', data);
  }, [loadingTransactionForSeller, loadingMyTransaction, loadingTransactionByProductID, dataTransaction.isLoading]);

  const handleDispatch = async () => {
    await dispatch(getTransactionByProductID(IDProduct));
  };
  console.log('bidder data', data);

  return (
    <div>
      {dataTransaction.isLoading
        ? 'loading...'
        : dataTransaction.data.map((item) => (
            // <div>
            <Accordion
              className={`mb-3 py-3 ${style['transaction-card']}`}
              onClick={() => {
                if (directionTo) {
                  return navigate(directionTo, {
                    state: { item },
                  });
                }
                if (isSeller) {
                  navigate(`/product/transaction/${item.product_id}/${item.id}`, {
                    state: { item },
                  });
                }
              }}
              key={item.id}
              alwaysOpen
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header className="py-0">
                  {/* <div> */}
                  <Row className={`w-100 ${style['flex-condition']}`}>
                    <Col lg="2" md="2" sm="3" xs="3" className="pe-0" style={{ minWidth: '120px' }}>
                      <img
                        src={item.image_url === null ? null : item.image_url.url[0]}
                        className={`${style['product-image']}`}
                        alt=""
                      />
                    </Col>
                    <Col
                      className={`d-flex flex-column justify-content-center px-3`}
                      style={{ minWidth: '200px', width: '100%' }}
                    >
                      <div className={`d-flex justify-content-between`}>
                        <p className={`text-secondary mb-2`} style={{ fontSize: '14px' }}>
                          {item.status}
                        </p>
                        <p className={`text-secondary mb-2 text-end`} style={{ fontSize: '14px' }}>
                          {item.transactionDate.slice(0, 10)}
                        </p>
                      </div>
                      <h6 className={`my-1`}>{item.detailproduct.title}</h6>
                      <h6 className={`my-1`}>
                        Rp {new Intl.NumberFormat('de-DE').format(parseInt(item.detailproduct.price))}
                      </h6>
                      <h6 className={`my-1`}>
                        Ditawar{' '}
                        <span className="main-text-color fw-bold">
                          Rp {new Intl.NumberFormat('de-DE').format(parseInt(item.price))}
                        </span>
                      </h6>
                    </Col>
                  </Row>
                  {/* </div> */}
                </Accordion.Header>
                <Accordion.Body className="py-0">
                  {showButtonCallSeller ? (
                    item.status === 'Accept' ? (
                      <button
                        className={`mt-2 ${style.btnDecision}`}
                        onClick={() => {
                          if (item.status === 'Accept') {
                            // setTransactionItem(item);
                            setModalUpdateStatus(false);
                            setModalShow(true);
                          } else {
                            alert('You can not update status');
                          }
                        }}
                      >
                        {item.status === 'Accept' ? 'Hubungi Seller via' : item.status}
                        {item.status === 'Accept' ? (
                          <img src={Whatsapp_Icon} className="ms-1" width="25" alt="" />
                        ) : null}
                      </button>
                    ) : (
                      <h4 className="text-center">{item.status}</h4>
                    )
                  ) : null}
                  {showButtonAction ? (
                    item.status === 'Declined' || item.status === 'Sold' || item.status === 'Cancel' ? (
                      <div className="d-flex justify-content-center py-2">
                        <h4 className="m-0">{item.status}</h4>
                      </div>
                    ) : (
                      <>
                        {loadingUpdateStatus ? (
                          loadingUpdateTransaction ? (
                            <div className={`text-center ${style['loading-upload-data']}`}>
                              <Spinner animation="border" />
                            </div>
                          ) : (
                            navigate('/productlist')
                          )
                        ) : (
                          <Col xs={12} className={`d-flex justify-content-end ${style['button-action']}`}>
                            <button
                              className={`mt-2 ${style.btnDecision}`}
                              onClick={() => {
                                if (item.status === 'Accept') {
                                  setModalUpdateStatus(true);
                                  setModalShow(true);
                                } else {
                                  dispatch(updateTransaction(item.id, { status: 'Declined' }));
                                  setLoadingUpdateStatus(true);
                                }
                              }}
                            >
                              {item.status === 'Accept' ? 'Update Status' : 'Tolak'}
                            </button>
                            {/* {loadingTransactionForSeller || loadingTransactionByProductID ? null : navigate('/product')} */}
                            <button
                              className={`mt-2 ${style.btnDecision}`}
                              onClick={() => {
                                if (item.status === 'Accept') {
                                  setModalUpdateStatus(false);
                                  setModalShow(true);
                                } else {
                                  dispatch(updateTransaction(item.id, { status: 'Accept' }));
                                  setLoadingUpdateStatus(true);
                                }
                              }}
                            >
                              {item.status === 'Accept' ? 'Hubungi di' : 'Terima'}
                              {item.status === 'Accept' ? (
                                <img src={Whatsapp_Icon} className="ms-1" width="25" alt="" />
                              ) : null}
                            </button>
                          </Col>
                        )}
                      </>
                    )
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            // </div>
          ))}
      {dataTransaction.isLoading ? null : modalShow ? (
        <ModalPopUp
          data={data}
          idtransaction={idtransaction}
          isUpdateStatus={modalUpdateStatus}
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
        />
      ) : null}
    </div>
  );
}

function ModalPopUp(props) {
  const [modalUpdateStatus, setModalUpdateStatus] = React.useState(props.isUpdateStatus);
  const [value, setValue] = React.useState(false);
  console.log('data data data', props.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {}, [props.data.data]);

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={`${style['modal-size']}`}
      contentClassName={`${style['modal-style']}`}
      className={`${style['modal-centered']}`}
      onExited={() => setValue(false)}
    >
      <Modal.Header closeButton className={`px-4 pt-3 border-0`} />
      {console.log('data data data......', props.data)}
      {!modalUpdateStatus ? (
        <Modal.Body className={`mx-4 p-0`}>
          <h6>Yeay kamu berhasil mendapat harga yang sesuai</h6>
          <p className={`text-secondary m-0`}>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
          <div className={`mt-3 d-flex flex-column justify-content-center ${style['match-product-detail']}`}>
            <h6 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Match</h6>
            <Row className={`mb-3`}>
              <Col xs="4">
                <img
                  src={props.data.owner.imageShop}
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
                <p className={`mb-1`} style={{ fontSize: '14px', fontWeight: '500' }}>
                  {props.data.owner.nameShop}
                </p>
                <p className={`text-secondary my-0`} style={{ fontSize: '14px' }}>
                  {props.data.owner.province}
                  {', '} {props.data.owner.city}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                <img
                  src={props.data.image_url.url[0]}
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
                <p className={`mb-1`} style={{ fontSize: '14px' }}>
                  {props.data.detailproduct.title}
                </p>
                <p className={`mb-1`} style={{ fontSize: '14px', textDecoration: 'line-through' }}>
                  Rp {props.data.detailproduct.price}
                </p>
                <p className={`m-0`} style={{ fontSize: '14px' }}>
                  Rp {props.data.price}
                </p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      ) : (
        <Modal.Body className={`mx-4 p-0`}>
          <h6>Perbarui status penjualan produkmu</h6>
          <Form.Group className={`mt-4`}>
            <Form.Check
              name="status"
              label="Berhasil terjual"
              type="radio"
              checked={value === 'Sold'}
              onClick={(e) => {
                setValue('Sold');
              }}
            />
            <Form.Label className={`mb-4 ms-4 text-secondary`} style={{ fontSize: '14px' }}>
              Kamu telah sepakat menjual produk ini kepada pembeli
            </Form.Label>
            <Form.Check
              name="status"
              label="Batalkan transaksi"
              type="radio"
              checked={value === 'Cancel'}
              onClick={(e) => {
                setValue('Cancel');
              }}
            />
            <Form.Label className={`ms-4 text-secondary`} style={{ fontSize: '14px' }}>
              Kamu membatalkan transaksi produk ini dengan pembeli
            </Form.Label>
          </Form.Group>
          {console.log('Compare.. ', props.show)}
          {console.log(value)}
        </Modal.Body>
      )}

      <Modal.Footer className={`px-4 py-4 border-0`}>
        <Button
          className={`m-0 ${style['modal-button-action']}`}
          onClick={() => {
            console.log('props.dispatchType', props.idtransaction);
            if (!modalUpdateStatus) {
              window.open(
                `https://api.whatsapp.com/send?phone=${
                  props.idtransaction !== undefined ? props.data.buyer.phone : props.data.owner.phone
                }`,
                '_blank'
              );
            } else {
              dispatch(updateTransaction(props.data.id, { status: value }));
              navigate('/productlist');
            }
          }}
        >
          {!modalUpdateStatus ? 'Hubungi via Whatsapp' : 'Kirim'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductOfferList;
