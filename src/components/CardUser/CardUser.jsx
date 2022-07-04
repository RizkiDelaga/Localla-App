import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';

import style from './CardUser.module.css';



import Image1 from '../../assets/images/image1.jpg';
import { Link, useNavigate } from 'react-router-dom';


function CardUser(props) {
    const navigate = useNavigate();
  
    
  return (
    <Fragment>
      <div className={`d-flex ${style.CardUser}`}>
        <div className='d-flex justify-content-center align-items-center w-100' onClick={() => {navigate('/myprofile')}}>
            <img src={props.userDetail? props.userDetail.image_url.url : Image1} alt="" className={`me-3 ${style.imgUser}`}/>
            <div className={`${style.userInfoText}`}>
                <h5>John Doe</h5>
                <p className='m-0' style={{fontSize: '14px'}}>Kota</p>
            </div>
        </div>
        <button className={`px-3 ${style.btnEdit}`} onClick={() => {navigate('/editprofile')}}>Edit</button>
      </div>
    </Fragment>
  )
}

export default CardUser;