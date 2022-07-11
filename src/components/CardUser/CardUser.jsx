import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import style from './CardUser.module.css';

import Image1 from '../../assets/images/image1.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../../redux/Actions/ProfileAction';


function CardUser(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("props.. ", props);

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
        <div className='d-flex justify-content-center align-items-center w-100 h-100' style={{cursor: 'pointer'}} onClick={() => {navigate(`/profile/${props.userDetail.user_id}`)}}>
            <img src={props.userDetail? props.userDetail.owner.image : dataMyProfile.image} alt="" className={`me-3 ${style.imgUser}`}/>
            <div className={`${style.userInfoText}`}>
                <h5>{props.userDetail? props.userDetail.owner.name : dataMyProfile.name}</h5>
                <p className='m-0' style={{fontSize: '14px'}}>{props.userDetail? props.userDetail.owner.city : dataMyProfile.city}</p>
            </div>
        </div>
        {props.buttonAction?
        <button className={`px-3 ${style.btnEdit}`} onClick={() => {navigate('/editprofile')}}>Edit</button> : null}
      </div>
    </Fragment>
  )
}

export default CardUser;