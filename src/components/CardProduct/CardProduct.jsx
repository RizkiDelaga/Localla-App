import React, { Fragment } from 'react';
import style from './CardProduct.module.css';
import Default_Product_Image from '../../assets/images/image1.jpg';


function CardProduct({ product }) {
  console.log(product);
  
  return (
    <Fragment>
          <div className={`mx-auto ${style['card-product']}`}>
              <img src={product? product.image : Default_Product_Image} className={`${style['img-container']}`} alt="" />
              <div className={`my-2`}>
                  <h6 className={`m-0`}>{product? product.title : "Lorem ipsum dolor sit"}</h6>
                  <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>Aksesoris</p>
                  <h6 className={`m-0`}>Rp {product? product.price : 125000}</h6>
              </div>
          </div>
    </Fragment>
  );
}

export default CardProduct;