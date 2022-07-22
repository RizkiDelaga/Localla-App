import React, { Fragment, useEffect, useState } from 'react';
import { Container, Dropdown, Button, Form, Tab, Tabs, Collapse } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';

import Login_Icon from '../../assets/icons/Login_Icon.png';
import Logout_Icon from '../../assets/icons/Logout_Icon.png';
import Search_Icon from '../../assets/icons/Search_Icon.png';
import Arrow_Left_Icon from '../../assets/icons/Arrow_Left_Icon.png';
import TransactionCard from '../TransactionCard/TransactionCard';
import Localla_Logo from '../../assets/icons/Localla_Logo.png';

function Navbar({ logo, mobileMenu, desktopMenu, backButton, normalTitle, largeTitle, search, transparentFade }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [searchingKey, setSearchingKey] = useState();
  const [navbarTransparent, setNavbarTransparent] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({
    notification: false,
    myAccount: false,
  });

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    desktopMenu = false;
  }

  const options = [
    {
      name: 'Enable both scrolling & backdrop',
      scroll: true,
      backdrop: true,
      responsive: 'lg',
    },
  ];

  const transparentNavbar = () => {
    if (window.scrollY > 70) {
      setNavbarTransparent(true);
    } else {
      setNavbarTransparent(false);
    }
  };

  useEffect(() => {
    if (transparentFade) {
      window.addEventListener('scroll', transparentNavbar);
    }
  }, []);

  return (
    <Fragment>
      <section
        className={`d-flex align-items-center ${style['navbar-section']} ${
          transparentFade ? null : style['white-navbar']
        } ${navbarTransparent ? style['white-navbar'] : null}`}
      >
        <Container fluid="lg" className={`p-0 d-flex align-items-center`}>
          {mobileMenu ? (
            <div className={`${style['switch-mobile-navbar']}`}>
              <button onClick={toggleShow} className={`${style['collapse-button-menu']}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>

              <Offcanvas
                show={show}
                onHide={handleClose}
                {...options}
                style={{ width: '50%', minWidth: '200px', zIndex: '9999' }}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    className={`ps-2`}
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Localla
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {accessToken ? (
                    <div className="d-flex flex-column justify-content-between h-100">
                      <section>
                        <div
                          className={`d-flex align-items-center ps-2 ${style['mobile-menu']}`}
                          onClick={() => setOpenSubMenu({ ...openSubMenu, notification: !openSubMenu.notification })}
                          aria-controls="example-collapse-text"
                          aria-expanded={openSubMenu.notification}
                        >
                          Notifikasi
                        </div>
                        <Collapse in={openSubMenu.notification}>
                          <div id="example-collapse-text">
                            <div
                              className={`d-flex align-items-center ps-2 ms-3 ${style['mobile-menu']}`}
                              onClick={() => {
                                navigate('/MyTransaction');
                              }}
                            >
                              Transaksi saya
                            </div>
                            <div
                              className={`d-flex align-items-center ps-2 ms-3 ${style['mobile-menu']}`}
                              onClick={() => {
                                navigate('/product/transaction');
                              }}
                            >
                              Produk yang ditawar
                            </div>
                          </div>
                        </Collapse>
                        <div
                          className={`d-flex align-items-center ps-2 ${style['mobile-menu']}`}
                          onClick={() => {
                            navigate('/productlist');
                          }}
                        >
                          Daftar Jual
                        </div>
                        <div
                          className={`d-flex align-items-center ps-2 ${style['mobile-menu']}`}
                          onClick={() => setOpenSubMenu({ ...openSubMenu, myAccount: !openSubMenu.myAccount })}
                          aria-controls="example-collapse-text"
                          aria-expanded={openSubMenu.myAccount}
                        >
                          Akun Saya
                        </div>
                        <Collapse in={openSubMenu.myAccount}>
                          <div id="example-collapse-text">
                            <div
                              className={`d-flex align-items-center ps-2 ms-3 ${style['mobile-menu']}`}
                              onClick={() => {
                                navigate('/profile');
                              }}
                            >
                              Profil
                            </div>
                            <div
                              className={`d-flex align-items-center ps-2 ms-3 ${style['mobile-menu']}`}
                              onClick={() => {
                                navigate('/mywishlist');
                              }}
                            >
                              Daftar keinginan
                            </div>
                          </div>
                        </Collapse>
                      </section>
                      <section className="d-flex justify-content-end">
                        <button
                          className={`${style['logout-button']}`}
                          onClick={() => {
                            localStorage.removeItem('access_token');
                            localStorage.removeItem('myId');
                            navigate('/');
                          }}
                        >
                          <img src={Logout_Icon} alt="" style={{ width: '25px', paddingRight: '5px' }} />
                          Keluar
                        </button>
                      </section>
                    </div>
                  ) : (
                    <Button
                      className={`ms-2 d-flex justify-content-center align-items-center ${style['button-login-mobile']}`}
                      onClick={() => {
                        navigate('/login');
                      }}
                    >
                      <img src={Login_Icon} alt="" style={{ width: '25px', paddingRight: '5px' }} />
                      <p className="m-0">Masuk</p>
                    </Button>
                  )}
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          ) : null}

          {backButton ? (
            <div className={`${style['switch-mobile-navbar']}`}>
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                className={`me-3 ${style['back-button']}`}
              >
                <img src={Arrow_Left_Icon} alt="" style={{ width: '100%' }} />
              </Button>
            </div>
          ) : null}

          {logo ? (
            <Link to={'/'}>
              <img src={Localla_Logo} alt="Home" className={`${style['navbar-logo']}`} style={{ height: '35px' }} />
            </Link>
          ) : null}
          {search ? (
            <Form
              className={`w-100 ms-4`}
              onSubmit={(event) => {
                event.preventDefault();
                if (searchingKey) {
                  navigate(`/search/${searchingKey}`);
                }
              }}
            >
              <Form.Group
                controlId="formBasicEmail"
                className={`d-flex align-items-center justify-content-center px-2 ${style['search-input']} ${
                  transparentFade ? null : style['search-input-color-on-transparent']
                } ${navbarTransparent ? style['search-input-color-on-transparent'] : null}`}
              >
                <input
                  type="search"
                  placeholder="Cari di sini ..."
                  onChange={(e) => {
                    setSearchingKey(e.target.value);
                  }}
                  className={`${style['search-input']} ${
                    transparentFade ? null : style['search-input-color-on-transparent']
                  } ${navbarTransparent ? style['search-input-color-on-transparent'] : null}`}
                />
                <button type="submit" className={`${style['button-search']}`}>
                  <img src={Search_Icon} alt="" style={{ width: '25px' }} />
                </button>
              </Form.Group>
            </Form>
          ) : null}

          {normalTitle ? (
            <div className={`${style['normal-title']}`}>
              <h6 className={`fw-bold m-0 text-center`}>{normalTitle}</h6>
            </div>
          ) : null}

          {largeTitle ? (
            <div className={`ps-3 ${style['large-title']}`}>
              <h6 className={`fw-bold fs-4 m-0 text-start`}>{largeTitle}</h6>
            </div>
          ) : null}

          <div className={`${style['menu-desktop']} ${normalTitle ? null : 'w-100'}`}>
            {accessToken ? (
              desktopMenu ? (
                <div className={`d-flex align-items-center justify-content-center`}>
                  <Button
                    className={`ms-3  ${style['button-icon']}`}
                    onClick={() => {
                      navigate('/productlist');
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="100%"
                      fill="currentColor"
                      className="bi bi-menu-button-wide-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </Button>

                  <Dropdown align={{ md: 'end', lg: 'end' }} className={`ms-3`}>
                    <Dropdown.Toggle split className={`p-0 ${style['button-icon']} ${style['dropdown-toggle-split']}`}>
                      <Button className={` ${style['button-icon']}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="100%"
                          fill="currentColor"
                          class="bi bi-bell-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                        </svg>
                      </Button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={`${style['dropdown-notification-menu']}`}>
                      <Tabs
                        defaultActiveKey="history Transaksi"
                        id="fill-tab-example"
                        className={`mb-2 ${style['coloredTab']}`}
                        fill
                      >
                        <Tab eventKey="history Transaksi" title="Transaksi">
                          <button
                            className={`mb-2 w-100 border-0 ${style['button-more-transaction']}`}
                            onClick={() => {
                              navigate('/MyTransaction');
                            }}
                          >
                            Lihat semua transaksi
                          </button>
                          <TransactionCard
                            dispatchType={'my transaction'}
                            directionTo={'/MyTransaction/detailtransaction'}
                          />
                        </Tab>
                        <Tab eventKey="entry offer" title="Produk yang ditawar">
                          <button
                            className={`mb-2 w-100 border-0 ${style['button-more-transaction']}`}
                            onClick={() => {
                              navigate('/product/transaction');
                            }}
                          >
                            Lihat semua tawaran
                          </button>
                          <TransactionCard dispatchType={'transaction for seller'} isSeller={true} />
                        </Tab>
                      </Tabs>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown align={{ md: 'end', lg: 'end' }} className={`ms-3`}>
                    <Dropdown.Toggle split className={`p-0 ${style['button-icon']} ${style['dropdown-toggle-split']}`}>
                      <Button className={`${style['button-icon']}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="100%"
                          fill="currentColor"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                          />
                        </svg>
                      </Button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className={`${style['dropdown-profile-menu']}`}>
                      <Dropdown.Item
                        className={`d-flex align-items-center ${style['list-item']}`}
                        onClick={() => {
                          navigate('/profile');
                        }}
                      >
                        <p className="m-0 w-100 me-3">Profil</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="100%"
                          fill="currentColor"
                          class="bi bi-person"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className={`d-flex align-items-center ${style['list-item']}`}
                        onClick={() => {
                          navigate('/mywishlist');
                        }}
                      >
                        <p className="m-0 w-100 me-3">Daftar keinginan</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="100%"
                          fill="currentColor"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      </Dropdown.Item>
                      <Dropdown.Item
                        className={`border-top d-flex align-items-center ${style['list-item']}`}
                        onClick={() => {
                          localStorage.removeItem('access_token');
                          localStorage.removeItem('myId');
                          navigate('/');
                          window.location.reload();
                        }}
                      >
                        <p className="m-0 w-100 me-3">Keluar</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="100%"
                          fill="currentColor"
                          class="bi bi-box-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                          />
                        </svg>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : null
            ) : (
              <Button
                className={`d-flex justify-content-center align-items-center ${style['button-login']}`}
                onClick={() => {
                  navigate('/login');
                }}
              >
                <img src={Login_Icon} alt="" style={{ width: '25px', paddingRight: '5px' }} />
                <p className="m-0">Masuk</p>
              </Button>
            )}
          </div>
        </Container>
      </section>
    </Fragment>
  );
}

export default Navbar;
