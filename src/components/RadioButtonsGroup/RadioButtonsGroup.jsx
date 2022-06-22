import React, { Fragment } from 'react';
import Search from '../../assets/icon/fi_search.png';
import { ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import style from './RadioButtonsGroup.module.css';
import { useState } from 'react';

function RadioButtonsGroup() {
  const [buttonGroup, setButtonGroup] = useState('All')

  return (
      <Fragment>
        <div className={`${style['horizontal-scroll']}`}>
          <ToggleButtonGroup type="radio" name="options" defaultValue={"Semua"} className={`${style['button-group-custom']}`} onChange={(event) => {
            console.log(event)
            setButtonGroup(event)}}>
            <ToggleButton id="radio-button-1" value={"Semua"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center button1 ${style['btn-group-style']}`} >
              <img src={Search} className={`me-2`} alt=""/>Semua
            </ToggleButton>
            <ToggleButton id="radio-button-2" value={"Hobi"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} >
              <img src={Search} className={`me-2`} alt=""/>Hobi
            </ToggleButton>
            <ToggleButton id="radio-button-3" value={"Kendaraan"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} >
              <img src={Search} className={`me-2`} alt=""/>Kendaraan
            </ToggleButton>
            <ToggleButton id="radio-button-4" value={"Baju"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} >
              <img src={Search} className={`me-2`} alt=""/>Baju
            </ToggleButton>
            <ToggleButton id="radio-button-5" value={"Elektronik"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} >
              <img src={Search} className={`me-2`} alt=""/>Elektronik
            </ToggleButton>
            <ToggleButton id="radio-button-6" value={"Kesehatan"} className={`me-3 py-2 px-3 d-flex justify-content-center align-items-center ${style['btn-group-style']}`} >
              <img src={Search} className={`me-2`} alt=""/>Kesehatan
            </ToggleButton>
          </ToggleButtonGroup>
          {console.log("Button Value: ", buttonGroup)}
        </div>
      </Fragment>
  )
}

export default RadioButtonsGroup;