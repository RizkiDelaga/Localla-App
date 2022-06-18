import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../../assets/images/image1.jpg'
import style from './ProductOfferList.module.css'

function ProductOfferList() {
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
            <button className={`${style.btnDecision}`}>Terima</button>
          </Col>
        </Row>
      </div>
      </Container>

    </Fragment>
  );
}

export default ProductOfferList;