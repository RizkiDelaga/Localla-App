import React, { Fragment, useEffect, useState } from 'react';
import { Container, Dropdown, Button, Form } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import style from './Navbar.module.css';

import Menu_Icon from '../../assets/icons/Menu_Icon.png';
import Logo_Icon from '../../assets/icons/Logo_Icon.png';
import Bell_Icon from '../../assets/icons/Bell_Icon.png';
import Product_List_Icon from '../../assets/icons/Product_List_Icon.png';
import User_Icon from '../../assets/icons/User_Icon.png';
import Login_Icon from '../../assets/icons/Login_Icon.png';
import Search_Icon from '../../assets/icons/Search_Icon.png';
import Arrow_Left_Icon from '../../assets/icons/Arrow_Left_Icon.png';
import ProductOfferList from '../ProductOfferList/ProductOfferList';


function Navbar({ logo, mobileMenu, desktopMenu, backButton, normalTitle, largeTitle, search, login, transparentFade }) {
  const [show, setShow] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const options = [
    {
      name: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
      responsive: "lg"
    },
  ];

  const transparentNavbar = () => {
    if (window.scrollY > 70) {
      setNavbarTransparent(true);
    } else {
      setNavbarTransparent(false);
    }
  }

  useEffect(() => {
    if (transparentFade) {
      window.addEventListener("scroll", transparentNavbar) 
    }
  }, []);

  return (
    <Fragment>
        <section className={`d-flex align-items-center ${style['navbar-section']} ${transparentFade? null : style['white-navbar']} ${navbarTransparent? style['white-navbar'] : null}`}>
          <Container fluid='lg' className={`p-0 d-flex align-items-center`}>
            {mobileMenu?
              <div className={`${style['switch-mobile-navbar']}`}>
                  <button onClick={toggleShow} className={`me-3 ${style['collapse-button-menu']}`}>
                      <img src={Menu_Icon} alt="" style={{width: '100%'}}/>
                  </button>
                  <Offcanvas show={show} onHide={handleClose} {...options} style={{width: '50%', minWidth: '200px', zIndex: '9999'}}>
                      <Offcanvas.Header closeButton>
                      <Offcanvas.Title className={`ps-2`}>Localla</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                          <div className={`d-flex align-items-center ps-2 ${style['mobile-menu']}`}>Notifikasi</div>
                          <div className={`d-flex align-items-center ps-2 ${style['mobile-menu']}`}>Daftar Jual</div>
                          <div className={`d-flex align-items-center ps-2 ${style['mobile-menu']}`}>Akun Saya</div>
                          {login?
                            <Button className={`ms-2 ${style['button-login-mobile']}`}>
                                <img src={Login_Icon} alt="" style={{width: '25px', paddingRight: '5px'}}/>Masuk
                            </Button>
                          : null}
                      </Offcanvas.Body>
                  </Offcanvas>
              </div> : null}

              {backButton?
                <div className={`${style['switch-mobile-navbar']}`}>
                  <Button onClick={toggleShow} className={`me-3 ${style['back-button']}`}>
                    <img src={Arrow_Left_Icon} alt="" style={{width: '100%'}}/>
                  </Button>
                </div> : null}

              {logo?
                <img src={Logo_Icon} alt="" className={`me-4 ${style['navbar-logo']}`} style={{height: '40px'}}/>
              : null}
              {search?
                <Form className={`w-100`} onSubmit={(event) => {event.preventDefault()}}>
                  <Form.Group controlId="formBasicEmail" className={`d-flex align-items-center justify-content-center px-2 ${style['search-input']} ${transparentFade? null : style['search-input-color-on-transparent']} ${navbarTransparent? style['search-input-color-on-transparent'] : null}`}>
                    <input type="search" placeholder="Cari di sini ..." className={`${style['search-input']} ${transparentFade? null : style['search-input-color-on-transparent']} ${navbarTransparent? style['search-input-color-on-transparent'] : null}`} />
                    <button type='submit' className={`${style['button-search']}`}>
                        <img src={Search_Icon} alt="" style={{width: '25px'}}/>
                    </button> 
                  </Form.Group>
                </Form>
                : null}

              {normalTitle?
                <div className={`${style['normal-title']}`} >
                  <h6 className={`fw-bold m-0 text-center`}>{normalTitle}</h6>
                </div> : null}
              
              {largeTitle?
                <div className={`ps-3 ${style['large-title']}`} >
                  <h6 className={`fw-bold fs-4 m-0 text-start`}>{largeTitle}</h6>
                </div> : null}

              {(login || desktopMenu)?
                <div className={`${style['menu-desktop']} ${normalTitle? null : 'w-100'}`} >
                    {login?
                      <Button className={`${style['button-login']}`}>
                          <img src={Login_Icon} alt="" style={{width: '25px', paddingRight: '5px'}}/>Masuk
                      </Button> 
                    : null}
                    {desktopMenu? 
                      <div className={`d-flex align-items-center justify-content-center`}>
                        <Button utton className={`ms-3 ${style['button-icon']}`}>
                            <img src={Product_List_Icon} alt="" style={{width: '25px'}}/>
                        </Button>

                        <Dropdown align={{ md: 'end', lg: 'end' }} className={`ms-3`}>
                          <Dropdown.Toggle split className={`p-0 ${style['button-icon']} ${style['dropdown-toggle-split']}`} >
                            <Button className={`${style['button-icon']}`}>
                                <img src={Bell_Icon} alt="" style={{width: '25px'}}/>
                            </Button>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className={`${style['dropdown-menu']}`}>
                            <Dropdown.Item className={`${style['list-notif']}`}><ProductOfferList/></Dropdown.Item>
                            <hr />
                            <Dropdown.Item className={`${style['list-notif']}`}><ProductOfferList/></Dropdown.Item>
                            <hr />
                            <Dropdown.Item className={`${style['list-notif']}`}><ProductOfferList/></Dropdown.Item>
                            <hr />
                            <Dropdown.Item className={`${style['list-notif']}`}><ProductOfferList/></Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

                        <Button utton className={`ms-3 ${style['button-icon']}`}>
                            <img src={User_Icon} alt="" style={{width: '25px'}}/>
                        </Button>
                      </div>
                    : null}
                </div> : null}
          </Container>
        </section>
    </Fragment>
  );
}

export default Navbar;