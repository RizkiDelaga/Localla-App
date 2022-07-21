import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Row, Col, Spinner, Modal, Button, Form, Container, Popover, OverlayTrigger } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../../components/CardProduct/CardProduct';
import { getMyProfile, getUserProfileById } from '../../redux/Actions/ProfileAction';
import { getProductBySellerId } from '../../redux/Actions/productAction';
import { useNavigate, useParams } from 'react-router-dom';
import fi_eye from '../../assets/icons/fi_eye.png';
import style from './Profile.module.css';

import Navbar from '../../components/Navbar/Navbar';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import NoDataFound from '../../components/NoDataFound/NoDataFound';

import Default_PP_Icon from '../../assets/icon/Default_PP_Icon.png';
import ChangePassword from '../../components/ChangePassword/ChangePassword';

function Profile() {
  const navigate = useNavigate();
  let { id } = useParams();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState(null);

  const { isLoading: loadingDataMyProfile, data: dataMyProfile } = useSelector((state) => state.myProfile);
  const { isLoading: loadingDataProductSeller, data: dataProductSeller } = useSelector(
    (state) => state.productBySellerId
  );
  const { isLoading: loadingDataUserProfileById, data: dataUserProfileById } = useSelector(
    (state) => state.userProfileById
  );

  React.useEffect(() => {
    document.title = 'Profile';
    dispatchUserID();
    dispatchProductSeller();
  }, [loadingDataMyProfile, loadingDataUserProfileById, id]);

  const dispatchUserID = async () => {
    return await dispatch(id ? getUserProfileById(id) : getMyProfile());
  };

  const dispatchProductSeller = async () => {
    return (await loadingDataMyProfile) && loadingDataUserProfileById
      ? null
      : dispatch(getProductBySellerId(id ? id : dataMyProfile.id));
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleChangeBackground = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    try {
      const res = await axios({
        method: 'put',
        url: 'https://localla-api.herokuapp.com/api/v1/user/image',
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      });

      if (res.status === 200) {
        toast.warn('Change background success', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          icon: false,
        });
        dispatchUserID();
        window.location.reload();
      }
    } catch (error) {
      toast.error('Please select a valid image', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        icon: false,
      });
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header style={{ backgroundColor: '#f6a833' }} as="h3">
        Change Background
      </Popover.Header>
      <Popover.Body>
        <input type="file" name="image" onChange={handleImage} required />
        <button className={style['btn-bg']} onClick={handleChangeBackground}>
          Change
        </button>
      </Popover.Body>
    </Popover>
  );
  return (
    <Fragment>
      <Navbar logo={true} search={true} mobileMenu={true} desktopMenu={true} />
      <div className={`${style['background-image-layer']}`} style={{ marginTop: '70px' }}>
        <OverlayTrigger trigger="click" placement="bottom-start" overlay={popover}>
          <img
            src={
              id
                ? dataUserProfileById.imageBackground === null
                  ? Default_PP_Icon
                  : dataUserProfileById.imageBackground
                : dataMyProfile.imageBackground === null
                ? Default_PP_Icon
                : dataMyProfile.imageBackground
            }
            className={`${style['background-image']}`}
            alt=""
          />
        </OverlayTrigger>
      </div>
      <section className="d-flex justify-content-center" style={{ marginTop: '-100px' }}>
        <ToastContainer
          style={{ textAlign: 'center' }}
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Row className={`mx-3 ${style['profile-card']}`}>
          <Col xs="auto" className="d-flex justify-content-center">
            <img
              src={
                id
                  ? dataUserProfileById.imageShop === null
                    ? Default_PP_Icon
                    : dataUserProfileById.imageShop
                  : dataMyProfile.imageShop === null
                  ? Default_PP_Icon
                  : dataMyProfile.imageShop
              }
              className={`rounded-circle ${style['profile-picture']}`}
              alt=""
            />
          </Col>
          <Col className="w-100">
            <h3 className={`${style['ellipsis-text']}`}>
              {id ? dataUserProfileById.nameShop : dataMyProfile.nameShop}
            </h3>
            <p className={`${style['ellipsis-text']}`}>
              {id ? dataUserProfileById.province : dataMyProfile.province},{' '}
              {id ? dataUserProfileById.city : dataMyProfile.city}
            </p>
            {id ? null : (
              <div className="d-flex align-items-center">
                <button
                  className={`w-100 me-3 ${style['action-edit-button']}`}
                  onClick={() => {
                    navigate('/mystore');
                  }}
                >
                  {dataMyProfile.nameShop && dataMyProfile.imageShop ? 'Edit Toko' : 'Buka Toko'}
                </button>

                <button
                  className={`${style['account-setting-button']}`}
                  onClick={() => {
                    setModalShow(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="100%"
                    fill="currentColor"
                    class="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                </button>
              </div>
            )}
          </Col>
        </Row>
      </section>

      {/* <Container className="d-flex justify-content-center" style={{ marginTop: '100px' }}>

      </Container> */}
      <Row className={`mx-auto mt-5 pt-3`} style={{ maxWidth: '800px', borderTop: '1px solid black' }}>
        {loadingDataProductSeller ? (
          <div className="text-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : dataProductSeller.length <= 0 ? (
          <NoDataFound />
        ) : (
          dataProductSeller
            .filter((e) => {
              return e.status === 'Available';
            })
            .map((item) => {
              return (
                <Col lg="3" md="4" sm="6" xs="6" className={`my-3`} style={{ width: 'maxContent' }} key={item.id}>
                  <CardProduct product={item} />
                </Col>
              );
            })
        )}
      </Row>
      <BottomNavigation />

      <ModalPopUp
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </Fragment>
  );
}

function ModalPopUp(props) {
  const navigate = useNavigate();
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName={`${style['modal-size']}`}
        contentClassName={`${style['modal-style']}`}
        className={`${style['modal-centered']}`}
      >
        <Modal.Body className={`mx-3 my-4 p-0`}>
          <div className="text-center mb-3">
            <h5 className="fw-bold">Pengaturan Akun</h5>
          </div>
          <div
            className={`${style['account-setting-item']}`}
            onClick={() => {
              setShowChangePasswordForm(true);
            }}
          >
            <p className="m-0 w-100">Ubah Password</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <div
            className={`${style['account-setting-item']}`}
            onClick={() => {
              navigate('/editprofile');
            }}
          >
            <p className="m-0 w-100">Edit Profil</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </Modal.Body>
      </Modal>

      <ChangePassword
        show={showChangePasswordForm}
        onHide={() => {
          setShowChangePasswordForm(false);
        }}
      />
    </>
  );
}

export default Profile;
