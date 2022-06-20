import React, { Fragment, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import style from './CardProduct.module.css';

import Default_Product_Image from '../../assets/images/Default_Product_Image.png';


function CardProduct() {

  return (
    <Fragment>

        <Row className={`pt-5 `}>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-3 px-2`} >
                <div className={`mx-auto ${style['card-product']}`}>
                    <img src={Default_Product_Image} className={`${style['img-container']}`} alt="" />
                    <div className={`my-2`}>
                        <h6 className={`m-0`}>Jam Tangan Casio Lorem ipsum, dolor sit amet</h6>
                        <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                        <h6 className={`m-0`}>Rp 250.000</h6>
                    </div>
                </div>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-3 px-2`} >
                <div className={`mx-auto ${style['card-product']}`}>
                    <img src={Default_Product_Image} className={`${style['img-container']}`} alt="" />
                    <div className={`my-2`}>
                        <h6 className={`m-0`}>Jam Tangan Casio Lorem ipsum, dolor sit amet</h6>
                        <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                        <h6 className={`m-0`}>Rp 250.000</h6>
                    </div>
                </div>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-3 px-2`} >
                <div className={`mx-auto ${style['card-product']}`}>
                    <img src={Default_Product_Image} className={`${style['img-container']}`} alt="" />
                    <div className={`my-2`}>
                        <h6 className={`m-0`}>Jam Tangan Casio Lorem ipsum, dolor sit amet</h6>
                        <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                        <h6 className={`m-0`}>Rp 250.000</h6>
                    </div>
                </div>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-3 px-2`} >
                <div className={`mx-auto ${style['card-product']}`}>
                    <img src={Default_Product_Image} className={`${style['img-container']}`} alt="" />
                    <div className={`my-2`}>
                        <h6 className={`m-0`}>Jam Tangan Casio Lorem ipsum, dolor sit amet</h6>
                        <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                        <h6 className={`m-0`}>Rp 250.000</h6>
                    </div>
                </div>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-3 px-2`} >
                <div className={`mx-auto ${style['card-product']}`}>
                    <img src={Default_Product_Image} className={`${style['img-container']}`} alt="" />
                    <div className={`my-2`}>
                        <h6 className={`m-0`}>Jam Tangan Casio Lorem ipsum, dolor sit amet</h6>
                        <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                        <h6 className={`m-0`}>Rp 250.000</h6>
                    </div>
                </div>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-3 px-2`} >
                <div className={`mx-auto ${style['card-product']}`}>
                    <img src={Default_Product_Image} className={`${style['img-container']}`} alt="" />
                    <div className={`my-2`}>
                        <h6 className={`m-0`}>Jam Tangan Casio Lorem ipsum, dolor sit amet</h6>
                        <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                        <h6 className={`m-0`}>Rp 250.000</h6>
                    </div>
                </div>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-3 px-2`} >
                <div className={`mx-auto ${style['card-product']}`}>
                    <img src={Default_Product_Image} className={`${style['img-container']}`} alt="" />
                    <div className={`my-2`}>
                        <h6 className={`m-0`}>Jam Tangan Casio Lorem ipsum, dolor sit amet</h6>
                        <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                        <h6 className={`m-0`}>Rp 250.000</h6>
                    </div>
                </div>
            </Col>
            <Col xl='2' lg='3' md='4' sm='6' xs='12' className={`my-3 px-2`} >
                <div className={`mx-auto ${style['card-product']}`}>
                    <img src={Default_Product_Image} className={`${style['img-container']}`} alt="" />
                    <div className={`my-2`}>
                        <h6 className={`m-0`}>Jam Tangan Casio Lorem ipsum, dolor sit amet</h6>
                        <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                        <h6 className={`m-0`}>Rp 250.000</h6>
                    </div>
                </div>
            </Col>
            
        </Row>
        {/* </Container> */}
    </Fragment>
  );
}

export default CardProduct;