import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../redux/Actions/productAction';
import { useDispatch } from 'react-redux';
import style from './CardProduct.module.css';

import Default_Product_Image from '../../assets/images/image1.jpg';
import Remove_Icon from '../../assets/icons/Remove_Icon.png';
import { Button, Modal } from 'react-bootstrap';

function CardProduct({ product, buttonAction }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Fragment>
      <div className={`${style['card-product']}`}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product ? product.image_url.url[0] : Default_Product_Image}
            className={`${style['img-container']}`}
            alt=""
          />
          <div className={`my-2`}>
            <h6 className={`m-0 ${style['product-title']}`}>
              {product ? product.title : 'Lorem ipsum dolor sit'}
            </h6>
            <p
              className={`m-0 py-2 text-secondary`}
              style={{ fontSize: '14px' }}
            >
              {product ? product.category : 'Category'}
            </p>
            <h6 className={`m-0 fs-6`}>
              Rp{' '}
              {new Intl.NumberFormat('de-DE').format(
                parseInt(product ? product.price : 125000)
              )}
            </h6>
          </div>
        </Link>
        {buttonAction ? (
          <div className={`mt-3 ${style['button-action']}`}>
            <button
              className={`mt-2 ${style['edit-product-button']}`}
              onClick={() => {navigate(`/product/${product.id}/edit`, {state: product})}}
            >
              Edit
            </button>
            <button
              className={`mt-2 ${style['delete-product-button']}`}
              onClick={() => {
                setModalShow(true);
              }}
            >
              Hapus
            </button>
          </div>
        ) : null}
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        // dialogClassName={`${style["modal-size"]}`}
        contentClassName={`${style['modal-style']}`}
        className={`${style['modal-centered']}`}
      >
        <Modal.Header closeButton className={`px-4 pt-3 border-0`} />
        <Modal.Body className={`mx-5 p-0 text-center`}>
          <h5 className="fw-bold text-center m-0">Apa anda yakin?</h5>
          <img
            src={Remove_Icon}
            className={`my-3`}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            alt=""
          />
          <p className="m-0">
            Product yang telah dihapus tidak bisa dikembalikan lagi, termasuk
            histori transaksi
          </p>
        </Modal.Body>

        <Modal.Footer className={`px-5 py-4 border-0`}>
          <div className={`w-100 ${style['button-action']}`}>
            <button
              className={`mt-2 mx-1 px-3 ${style['cancel-product-button']}`}
              onClick={() => {
                dispatch(deleteProduct(product.id));
                setModalShow(false);
              }}
            >
              Batalkan
            </button>
            <button
              className={`mt-2 mx-1 px-3 ${style['delete-product-button']}`}
              onClick={() => {
                dispatch(deleteProduct(product.id));
                setModalShow(false);
              }}
            >
              Hapus
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default CardProduct;
