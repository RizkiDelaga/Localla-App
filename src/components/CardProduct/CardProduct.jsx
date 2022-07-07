import React, { Fragment } from 'react';
import style from './CardProduct.module.css';
import Default_Product_Image from '../../assets/images/image1.jpg';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../redux/Actions/productAction';
import { useDispatch } from 'react-redux';


function CardProduct({ product, productAction }) {
  const dispatch = useDispatch();
  
  return (
    <Fragment>
      <div className={`${style['card-product']}`}>
        <Link to={`/product/${product.id}`}>
              <img src={product? product.image_url.url[0] : Default_Product_Image} className={`${style['img-container']}`} alt="" />
              <div className={`my-2`}>
                  <h6 className={`m-0 ${style['product-title']}`}>{product? product.title : "Lorem ipsum dolor sit"}</h6>
                  <p className={`m-0 py-2 text-secondary`} style={{fontSize: '14px'}}>{product? product.category : "Category"}</p>
                  <h6 className={`m-0 fs-6`}>Rp {new Intl.NumberFormat('de-DE').format(parseInt(product? product.price : 125000))}</h6>
              </div>
        </Link>
        {productAction?
        <div className={`mt-3 ${style['product-action']}`}>
          <button className={`mt-2 ${style['edit-product-button']}`}>Edit</button>
          <button className={`mt-2 ${style['delete-product-button']}`} onClick={() => {dispatch(deleteProduct(product.id))}}>Hapus</button>
        </div> : null}
      </div>
    </Fragment>
  );
}

export default CardProduct;