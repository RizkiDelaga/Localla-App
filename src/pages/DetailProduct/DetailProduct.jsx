import React, { Fragment } from 'react';
import { Container, Row, Col, Modal, Button, Form, Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from "react-redux";
import style from './DetailProduct.module.css';
import { getProduct, getDetailProduct } from '../../redux/Actions/productAction.js';


import Image1 from '../../assets/images/image1.jpg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CardUser from '../../components/CardUser/CardUser';


function DetailProduct() {
  let { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();
  const { isLoading: loadingProduct, data: detailProduct } = useSelector((state) => state.detailProduct);
  console.log("detailProduct.. ", detailProduct);

  React.useEffect(() => {
    if (!state) {
      console.log("isPreviewProduct.. ", state);
      dispatch(getDetailProduct(id));
    }
}, []);

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" login={true} desktopMenu={true} transparentFade={true} />
      {loadingProduct?
      <div className="text-center" style={{marginTop: '100px'}}>
        <Spinner animation="border" />
      </div> :
      <Container style={{marginTop: '100px'}}>
        <Row>
          <Col className={`mb-4`}>
            <Card className={`p-2 ${style['description-card']}`}>
                <Card.Body>
                  <h5 className={`mb-4`}>Deskripsi</h5>
                  <p>{state? state.description : detailProduct.description}</p>
                </Card.Body>
            </Card>
          </Col>
          <Col xl="4" lg="4" md="5" sm="12" xs="12">
            <Card className={`p-2 mb-3 ${style['detail-product-card']}`}>
                <Card.Body>
                  <h5>{state? state.title : detailProduct.title}</h5>
                  <Card.Text className={`m-0 text-secondary`} style={{fontSize: "14px"}}>{state? state.category : detailProduct.category}</Card.Text>
                  <h6 className={`mt-3 mb-4 ${style.cardBody}`}> Rp {new Intl.NumberFormat('de-DE').format(parseInt(state? state.price : detailProduct.price))}</h6>

                  <button className={`${style['btn-decision']}`} onClick={() => {state? navigate('/productlist') : setModalShow(true)}}>{state? "Terbitkan" : "Nego Sekarang"}</button>
                  {state? <button className={`mt-2 ${style['btn-decision']}`} onClick={() =>{navigate(-1)}}>Edit</button> : null}
                </Card.Body>
            </Card>
            <CardUser userDetail={detailProduct}/>
          </Col>
        </Row>
      </Container>}

      <ModalPopUp
        detailProduct={detailProduct}
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </Fragment>
  );
}

function ModalPopUp(props) {
  const [bidPrice, setBidPrice] = React.useState("");

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={`${style["modal-size"]}`}
      contentClassName={`${style["modal-style"]}`}
      className={`${style["modal-centered"]}`}
      onExited={() => setBidPrice(false)}
    >
      <Modal.Header closeButton className={`px-4 pt-3 border-0`} />
        <Modal.Body className={`mx-4 p-0`}>
          <h6>Masukkan Harga Tawarmu</h6>
          <p className={`text-secondary m-0`}>Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
          <div className={`mt-3 d-flex flex-column justify-content-center ${style['match-product-detail']}`}>
            <h6 style={{ textAlign: 'center', marginBottom: '20px'}}>Product Match</h6>
            <Row>
              <Col xs="4">
                <img src={Image1} style={{width: '100%', maxWidth: 'max-content', height: '100%', minHeight: '75px', borderRadius: '12px', objectFit: 'cover'}} alt="" />
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
        <Button className={`m-0 ${style['modal-button-action']}`} disabled={bidPrice === ""} >Kirim</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailProduct;
