import React, { Fragment } from 'react';
import style from './CardUser.module.css';

import Image1 from '../../assets/images/image1.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../../redux/Actions/ProfileAction';

function CardUser({ userDetail, sellerDetail, buttonAction }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading: loadingDataMyProfile, data: dataMyProfile } = useSelector((state) => state.myProfile);

  React.useEffect(() => {
    if (!userDetail || !sellerDetail) {
      dispatch(getMyProfile());
    }
  }, [loadingDataMyProfile]);

  return (
    <Fragment>
      <div className={`d-flex ${style.CardUser}`}>
        <div
          className="d-flex justify-content-center align-items-center w-100 h-100"
          style={sellerDetail ? { cursor: 'pointer' } : null}
          onClick={() => {
            if (sellerDetail) {
              navigate(`/profile/${sellerDetail ? sellerDetail.user_id : dataMyProfile.id}`);
            }
          }}
        >
          <img
            src={
              userDetail
                ? userDetail.image_url.url[0]
                : sellerDetail
                ? sellerDetail.owner.imageShop
                : dataMyProfile.imageShop
            }
            alt=""
            className={`me-3 ${style.imgUser}`}
          />
          <div className={`${style.userInfoText}`}>
            <h5>
              {userDetail ? userDetail.status : sellerDetail ? sellerDetail.owner.nameShop : dataMyProfile.nameShop}
            </h5>
            <p className="m-0" style={{ fontSize: '14px' }}>
              {userDetail ? userDetail.status : sellerDetail ? sellerDetail.owner.province : dataMyProfile.province},{' '}
              {userDetail ? userDetail.status : sellerDetail ? sellerDetail.owner.city : dataMyProfile.city}
            </p>
          </div>
        </div>
        {buttonAction ? (
          <button
            className={`px-3 ${style.btnEdit}`}
            onClick={() => {
              navigate('/editprofile');
            }}
          >
            Edit
          </button>
        ) : null}
      </div>
    </Fragment>
  );
}

export default CardUser;
