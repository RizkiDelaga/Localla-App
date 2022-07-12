import React, { Fragment, useState } from 'react';
import { Container, Row, Col, ToggleButton, ToggleButtonGroup, Spinner } from 'react-bootstrap';
import style from './NoDataFound.module.css';

import No_Data_Image from '../../assets/images/No_Data_Image.png';
import Search from '../../assets/icon/fi_search.png';

function NoDataFound() {

  return (
    <Fragment>
        <div className="text-center" >
            <img src={No_Data_Image} alt="" className='w-100 my-5' style={{maxWidth: '400px'}} />
        </div>
    </Fragment>
  );
}

export default NoDataFound;
