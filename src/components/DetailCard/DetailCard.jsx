import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import style from './DetailCard.module.css';

const DetailCard = () => {

  return (
    <Fragment>
        <Card className={`${style.cardImages}`}>
            <Card.Body>
                <Card.Title className={`${style.cardBody}`}>Jam Tangan Casio</Card.Title>
                <Card.Subtitle className={`mb-2 text-muted ${style.cardBody}`} eventKey="disabled">Aksesoris</Card.Subtitle>
                <Card.Text className={`${style.cardBody}`}> Rp 250.000 </Card.Text>
            
            <button className={`${style['btn-cardImage']}`}>Preview</button>
            <button className={`${style['btn-cardImage']}`}>Terbitkan</button>
            </Card.Body>
        </Card>
    </Fragment>
  )
}

export default DetailCard;