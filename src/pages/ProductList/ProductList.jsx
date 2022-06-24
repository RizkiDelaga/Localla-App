import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

import style from './ProductList.module.css'
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import Plus_Icon from '../../assets/icon/Plus_Icon.png';
import Box_Icon from '../../assets/icons/Box_Icon.png';
import Heart_Icon from '../../assets/icons/Heart_Icon.png';
import Dollar_Sign_Icon from '../../assets/icons/Dollar_Sign_Icon.png';
import Chevron_Right_Icon from '../../assets/icons/Chevron_Right_Icon.png';


function ProductList() {
    const [buttonGroup, setButtonGroup] = useState("Semua")

    return (
        <Fragment>
            <Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} transparentFade={true} />
            <Container style={{marginTop: '90px'}}>
                <Row>
                    <Col lg={3} className={`p-0 py-2`}>
                        <div className={`${style['category-product-list']}`}>
                            <ToggleButtonGroup type="radio" name="category-mobile-version" defaultValue={buttonGroup} className={`${style['button-group-custom']}`} onChange={(event) => {
                                console.log(event)
                                setButtonGroup(event)}}>
                                <h6 className={`mb-3 ${style['text-category']}`}>Kategori</h6>
                                <ToggleButton id="radio-button-1" value={"Semua"} className={`${style['btn-group-category']} ${style['bb-category']}`}>
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src={Box_Icon} className={`me-2`} style={{width: '25px'}} alt=""/><p className={`m-0`}>Semua Produk</p>
                                    </div>
                                    <img src={Chevron_Right_Icon} className={`${style['right-arrow']}`} style={{width: '25px'}} alt=""/>
                                </ToggleButton>
                                <ToggleButton id="radio-button-2" value={"Hobi"} className={`${style['btn-group-category']} ${style['bb-category']}`}>
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src={Heart_Icon} className={`me-2`} style={{width: '25px'}} alt=""/><p className={`m-0`}>Diminati</p>
                                    </div>
                                    <img src={Chevron_Right_Icon} className={`${style['right-arrow']}`} style={{width: '25px'}} alt=""/>
                                </ToggleButton>
                                <ToggleButton id="radio-button-3" value={"Kendaraan"} className={`${style['btn-group-category']}`} >
                                    <div className={`d-flex justify-content-center align-items-center`}>
                                        <img src={Dollar_Sign_Icon} className={`me-2`} style={{width: '25px'}} alt=""/><p className={`m-0`}>Terjual</p>
                                    </div>
                                    <img src={Chevron_Right_Icon} className={`${style['right-arrow']}`} style={{width: '25px'}} alt=""/>
                                </ToggleButton>
                            </ToggleButtonGroup>
                            {console.log("Mobile Button Value: ", buttonGroup)}
                        </div>
                    </Col>
                    <Col lg={9} className={`p-0`}>
                        <Row className={`m-auto`}>
                            <Col xl='3' lg='4' md='4' sm='6' xs='6' className={`my-2 px-2`} >
                                <div className={`p-2 text-center text-secondary ${style['add-product-box']}`}>
                                    <img src={Plus_Icon} className={`mb-3`} alt="" style={{width: '30%'}} />
                                    <p>Tambah Produk</p>
                                </div>
                            </Col>

                            <Col xl='3' lg='4' md='4' sm='6' xs='6' className={`my-2 px-2`} >
                                <CardProduct />
                            </Col>
                            <Col xl='3' lg='4' md='4' sm='6' xs='6' className={`my-2 px-2`} >
                                <CardProduct />
                            </Col>
                            <Col xl='3' lg='4' md='4' sm='6' xs='6' className={`my-2 px-2`} >
                                <CardProduct />
                            </Col>
                            <Col xl='3' lg='4' md='4' sm='6' xs='6' className={`my-2 px-2`} >
                                <CardProduct />
                            </Col>
                            <Col xl='3' lg='4' md='4' sm='6' xs='6' className={`my-2 px-2`} >
                                <CardProduct />
                            </Col>
                            <Col xl='3' lg='4' md='4' sm='6' xs='6' className={`my-2 px-2`} >
                                <CardProduct />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ProductList;