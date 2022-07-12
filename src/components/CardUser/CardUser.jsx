import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import style from './CardUser.module.css';

import Image1 from '../../assets/images/image1.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../../redux/Actions/ProfileAction';


function CardUser({ userDetail, buttonAction }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(". ", props);

  const { isLoading: loadingDataMyProfile, data: dataMyProfile } = useSelector((state) => state.myProfile);

  React.useEffect(() => {
    dispatchHandler()
  }, [loadingDataMyProfile]);

  const dispatchHandler = async() => {
    return await dispatch(getMyProfile());
  }

  return (
    <Fragment>
      <div className={`d-flex ${style.CardUser}`}>
        <div className='d-flex justify-content-center align-items-center w-100 h-100' style={{cursor: 'pointer'}} onClick={() => {navigate(`/profile/${userDetail ? userDetail.user_id : dataMyProfile.id}`)}}>
            <img src={userDetail? userDetail.owner.image : dataMyProfile.image} alt="" className={`me-3 ${style.imgUser}`}/>
            <div className={`${style.userInfoText}`}>
                <h5>{userDetail? userDetail.owner.name : dataMyProfile.name}</h5>
                <p className='m-0' style={{fontSize: '14px'}}>{userDetail? userDetail.owner.city : dataMyProfile.city}</p>
            </div>
        </div>
        {buttonAction?
        <button className={`px-3 ${style.btnEdit}`} onClick={() => {navigate('/editprofile')}}>Edit</button> : null}
      </div>
    </Fragment>
  )
}

export default CardUser;