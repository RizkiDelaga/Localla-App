import React, { Fragment, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

import Image1 from '../../assets/images/image1.jpg'
import style from './ProductOfferList.module.css'

function ProductOfferList() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Fragment>
      <Container fluid>
      <div className="product-offer-list" style={{minWidth: '300px'}}>
        <Row>
          <Col xs={3} className={`px-0`} style={{width: '80px', height: '80px'}}>
            <img src={Image1} alt="" className={`${style.productImage}`} />
          </Col>
          <Col>
          <div className={`d-flex justify-content-between`}>
            <p className={`text-secondary mb-2`} style={{fontSize: '14px'}}>Penawaran produk</p>
            <p className={`text-secondary mb-2`} style={{fontSize: '14px'}}>20 Apr, 14:04</p>
          </div>
            <h6 className={`my-1`}>Jam Tangan Casio</h6>
            <h6 className={`my-1`}>Rp 250.000</h6>
            <h6 className={`my-1`}>Ditawar Rp 200.000</h6>
          </Col>
          <Col xs={12} className={`d-flex justify-content-end p-0 mt-3`}>
            <button className={`me-3 ${style.btnDecision}`}>Tolak</button>
            <button className={`${style.btnDecision}`} onClick={() => setModalShow(true)}>Terima</button>
          </Col>
        </Row>
      </div>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {setModalShow(false)}}
      />

    </Fragment>
  );
}


function MyVerticallyCenteredModal(props) {
  const [status, setStatus] = React.useState(true);
  const [value, setValue] = React.useState(false);

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
      {status? 
        (<Modal.Body className={`mx-4 p-0`}>
          <h6>Yeay kamu berhasil mendapat harga yang sesuai</h6>
          <p className={`text-secondary m-0`}>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
          <div className={`mt-3 d-flex flex-column justify-content-center ${style['match-product-detail']}`}>
            <p style={{fontSize: '14px', fontWeight: '500', textAlign: 'center'}}>Product Match</p>
            <Row className={`mb-3`}> 
              <Col xs="4">
                <img src={Image1} style={{width: '100%', maxWidth: 'max-content', height: '100%', minHeight: '75px', borderRadius: '12px', objectFit: 'cover'}} alt="" />
              </Col>
              <Col className={`ps-0 d-flex flex-column justify-content-center`}>
                <p className={`mb-1`} style={{fontSize: '14px', fontWeight: '500'}}>Nama Pembeli</p>
                <p className={`text-secondary my-0`} style={{fontSize: '14px'}} >Kota</p>
              </Col>
            </Row>
            <Row>
              <Col xs="4">
                  <img src={Image1} style={{width: '100%', maxWidth: 'max-content', height: '100%', minHeight: '75px', borderRadius: '12px', objectFit: 'cover'}} alt="" />
              </Col>
              <Col className={`ps-0 d-flex flex-column justify-content-center`}>
                <p className={`mb-1`} style={{fontSize: '14px'}}>Jam Tangan Casio</p>
                <p className={`mb-1`} style={{fontSize: '14px', textDecoration: 'line-through'}}>Rp 250.000</p>
                <p className={`m-0`} style={{fontSize: '14px'}}>Rp 250.000</p>
              </Col>
            </Row>
          </div>
        </Modal.Body>)
      :
        (<Modal.Body className={`mx-4 p-0`}>
          <h6>Perbarui status penjualan produkmu</h6>
            <Form.Group className={`mt-4`}>
                <Form.Check name="status" label="Berhasil terjual" type="radio" checked={value === "Sold Out"} onClick={(e) => {
                  setValue("Sold Out")
                }}/>
                <Form.Label className={`mb-4 ms-4 text-secondary`} style={{fontSize: '14px'}}>Jam Tangan Casio</Form.Label>
                <Form.Check name="status" label="Batalkan transaksi" type="radio" checked={value === "Cancel"} onClick={(e) => {
                  setValue("Cancel")
                }}/>
                <Form.Label className={`ms-4 text-secondary`} style={{fontSize: '14px'}}>Jam Tangan Casio</Form.Label>
            </Form.Group>
            {console.log("Compare.. ", props.show)}
            {console.log(value)}
        </Modal.Body>)
      }

      <Modal.Footer className={`px-4 py-4 border-0`}>
        <Button className={`m-0 ${style['modal-button-action']}`} disabled={status? false : (value === false)} >{status? "Hubungi via Whatsapp" : "Kirim"}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductOfferList;