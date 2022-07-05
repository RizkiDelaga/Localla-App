import React, { Fragment, useState } from 'react';
import { Container, Row, Col, ToggleButton, ToggleButtonGroup, Spinner } from 'react-bootstrap';
import style from './NoDataFound.module.css';

import Error404_Icon from '../../assets/images/404_Icon.png';
import Search from '../../assets/icon/fi_search.png';

function NoDataFound() {

  return (
    <Fragment>
        <div className="text-center" >
            <img src={Error404_Icon} alt="" className='w-100 my-5' style={{maxWidth: '400px'}} />
        </div>
    </Fragment>
  );
}

export default NoDataFound;
