import React, { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateWishList } from '../../redux/Actions/WishListAction';
import { useNavigate } from 'react-router-dom';
import style from './ShareButtons.module.css';

import Facebook_Icon from '../../assets/icons/Facebook_Icon.png';
import hacker from '../../assets/icons/hacker.png';
import reddit from '../../assets/icons/reddit.png';
import Mail_Icon from '../../assets/icons/Mail_Icon.png';
import twitter from '../../assets/icons/twitter.png';

const ShareButtons = (props) => {
  const navigate = useNavigate();

  const [loadingUploadData, setLoadingUploadData] = useState(false);
  const [currentWishlistStatus, setCurrentWishlistStatus] = useState(false);

  const dispatch = useDispatch();
  const { isLoading: loadingUpdateWishList, data: dataUpdateWishList } = useSelector((state) => state.updateWishList);

  React.useEffect(() => {}, []);
  return (
    <div className={`my-3 ${style['share-product']}`}>
      <Row className="justify-content-center">
        <Col className="p-0 ps-3 me-3" style={{ overflowX: 'auto', minWidth: '120px' }}>
          <div className={`d-flex align-items-center h-100 py-1 ${style['']}`}>
            <p className="m-0">Share:</p>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style['share-btn']}`}>
                <img src={Facebook_Icon} alt="fb-icon" style={{ height: '25px' }} />
              </button>
            </a>
            <a
              href={`https://twitter.com/share?url=${window.location.href}&text=${props.detailProduct.description}via=${props.detailProduct.user_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style['share-btn']}`}>
                <img src={twitter} alt="twt-icon" style={{ height: '25px' }} />
              </button>
            </a>

            <a
              href={`https://reddit.com/submit?url=${window.location.href}&title=${props.detailProduct.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style['share-btn']}`}>
                <img src={reddit} alt="red-icon" style={{ height: '25px' }} />
              </button>
            </a>

            <a
              href={`https://news.ycombinator.com/submitlink?u=${window.location.href}&t=${props.detailProduct.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style['share-btn']}`}>
                <img src={hacker} alt="hck-icon" style={{ height: '25px' }} />
              </button>
            </a>

            <a
              href={`mailto:?subject=${props.detailProduct.title}&body=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${style['share-btn']}`}>
                <img src={Mail_Icon} alt="mail-icon" style={{ height: '25px' }} />
              </button>
            </a>
          </div>
        </Col>
        <Col
          xs="auto"
          className={`d-flex justify-content-center align-items-center py-1`}
          style={{ width: 'fit-content' }}
        >
          <button
            className={`${style['update-wishlist']}`}
            onClick={() => {
              if (
                localStorage.getItem('access_token') &&
                props.detailProduct.user_id !== Number(localStorage.getItem('myId'))
              ) {
                dispatch(updateWishList(props.detailProduct.id));
                setLoadingUploadData(true);
                setCurrentWishlistStatus(!currentWishlistStatus);
              }
              if (!localStorage.getItem('access_token')) {
                navigate('/login');
              }
            }}
          >
            {currentWishlistStatus ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="100%"
                fill={'red'}
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="100%"
                fill="red"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            )}

            <p className="m-0 ms-1">
              {loadingUploadData ? (
                loadingUpdateWishList ? (
                  <div className={`${style['loading-upload-data']}`}>
                    <Spinner animation="border" variant="warning" />
                  </div>
                ) : currentWishlistStatus ? (
                  'Disukai'
                ) : null
              ) : null}
              {props.detailProduct.id ? props.detailProduct.productWishlist.total_wishlist : null}
            </p>
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ShareButtons;
