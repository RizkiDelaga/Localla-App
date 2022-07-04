import React, { Fragment } from 'react';
import style from './CardProduct.module.css';
import Default_Product_Image from '../../assets/images/image1.jpg';
import { Link } from 'react-router-dom';


function CardProduct({ product }) {
  // console.log(product);
  
  return (
    <Fragment>
        <Link to={`/product/${product.id}`}>
          <div className={`${style['card-product']}`}>
              <img src={product? product.image_url.url : Default_Product_Image} className={`${style['img-container']}`} alt="" />
              <div className={`my-2`}>
                  <h6 className={`m-0`}>{product? product.title : "Lorem ipsum dolor sit"}</h6>
                  <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>{product? product.category : "Category"}</p>
                  <h6 className={`m-0`}>Rp {new Intl.NumberFormat('de-DE').format(parseInt(product? product.price : 125000))}</h6>
              </div>
          </div>
        </Link>
    </Fragment>
  );
}

export default CardProduct;