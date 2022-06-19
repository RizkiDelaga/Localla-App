import React, {Fragment} from 'react';
import Search from '../../assets/icon/fi_search.png';
import {Button, Container} from 'react-bootstrap';
import style from './ButtonGroup.module.css';

const GroupButton = () => {
  return (
      <Fragment>
        <Container className={`${style.buttonGroup}`}>
            <h4>Telusuri Kategori</h4>
            <Button><img src={Search} alt=""/>Semua</Button>
            <Button><img src={Search} alt=""/>Hobi</Button>
            <Button><img src={Search} alt=""/>Kendaraan</Button>
            <Button><img src={Search} alt=""/>Baju</Button>
            <Button><img src={Search} alt=""/>Elektronik</Button>
            <Button><img src={Search} alt=""/>Kesehatan</Button>
        </Container>
      </Fragment>
  )
}

export default GroupButton;