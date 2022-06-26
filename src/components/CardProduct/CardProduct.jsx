import React, { Fragment } from 'react';
import style from './CardProduct.module.css';
import Default_Product_Image from '../../assets/images/image1.jpg';


function CardProduct({ product }) {
  return (
    <Fragment>
          <div className={`mx-auto ${style['card-product']}`}>
              <img src={product.image} className={`${style['img-container']}`} alt="" />
              <div className={`my-2`}>
                  <h6 className={`m-0`}>{product.title}</h6>
                  <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                  <h6 className={`m-0`}>Rp {product.price}</h6>
              </div>
          </div>
    </Fragment>
  );
}

export default CardProduct;