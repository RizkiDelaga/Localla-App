import React, { Fragment, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDropzone } from 'react-dropzone';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, editProduct } from '../../redux/Actions/productAction.js';
import style from './ProductForm.module.css';

import Navbar from '../../components/Navbar/Navbar';

import Plus_Icon from '../../assets/icon/Plus_Icon.png';

function ProductForm() {
  let { state } = useLocation();
  const navigate = useNavigate();
  const [loadingUploadData, setLoadingUploadData] = useState(false);
  const [error, setError] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    image: '',
  });
  const [dataProduct, setDataProduct] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    status: '',
  });

  const dispatch = useDispatch();
  const { isLoading: loadingCreateProduct, data: dataCreateProduct } = useSelector((state) => state.createProduct);
  const { isLoading: loadingEditProduct, data: dataEditProduct } = useSelector((state) => state.editProduct);

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    maxSize: 10000,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles, fileRejections) => {
      console.log('fileRejections..  ', fileRejections);
      if (fileRejections.length) {
        return setError({ ...error, image: '(Tidak sesuai format ketentuan)' });
      }
      setError({
        ...error,
        image: '',
      });
      console.log('acceptedFiles..  ', acceptedFiles);
      return setFiles([
        ...(files.length < 4 ? files : null),
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const filesName = files.map((file) => (
    <li>
      <div className="d-flex mb-2">
        <p className={`m-0 ${style['text-ellipsis']}`}>
          {console.log('file.. ', typeof file)}
          {typeof file === 'string' ? file : file.path || file.name}
        </p>
        <Button
          variant="danger"
          className={`ms-3 py-0`}
          onClick={() => {
            setFiles(files.filter((item) => item !== file));
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  ));

  const imagePreview = files.map((file) => (
    <div className={`${style['thumb']}`} key={file.name}>
      <div className={`${style['thumb-inner']}`}>
        <img
          src={typeof file === 'string' ? file : file.preview || URL.createObjectURL(file)}
          className={`${style['img-preview']}`}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt=""
        />
      </div>
    </div>
  ));

  const submitHandler = () => {
    const formData = new FormData();
    console.log('files..123 ', files.length <= 0);
    console.log('dataProduct.status ', dataProduct.status);
    if (dataProduct.title === '') {
      setError({ ...error, title: '(Nama produk tidak boleh kosong)' });
    } else if (dataProduct.price === '' || dataProduct.price.toString().match(/^[0-9]+$/) === null) {
      setError({ ...error, price: '(Harga tidak sesuai dengan format. Contoh: 125000)' });
    } else if (dataProduct.category === '') {
      setError({ ...error, category: '(Kategori tidak boleh kosong)' });
    } else if (files.length <= 0) {
      setError({ ...error, image: '(Gambar produk tidak boleh kosong)' });
    } else {
      formData.append('title', dataProduct.title);
      formData.append('category', dataProduct.category);
      formData.append('description', dataProduct.description);
      formData.append('price', dataProduct.price);
      formData.append('status', dataProduct.status);

      files
        .filter((file) => typeof file !== 'string')
        .map((item, index) => {
          console.log('file landingpage', item);
          formData.append(`image`, item);
        });

      files
        .filter((file) => typeof file === 'string')
        .map((item, index) => {
          console.log('file landingpage', item);
          formData.append(`image${index + 1}`, item);
        });
      if (state) {
        if (state.id) {
          dispatch(editProduct(state.id, formData));
        } else if (!state.id) {
          dispatch(createProduct(formData));
        }
      } else {
        dispatch(createProduct(formData));
      }
      // state ? dispatch(editProduct(state.id, formData)) : dispatch(createProduct(formData));
      setLoadingUploadData(true);
    }
  };

  React.useEffect(() => {
    document.title = state ? 'Edit Produk' : 'Tambah Produk';
    refreshForm();
  }, []);

  const refreshForm = () => {
    if (state) {
      setDataProduct({
        title: state.id ? state.title : state.dataProduct.title,
        category: state.id ? state.category : state.dataProduct.category,
        description: state.id ? state.description : state.dataProduct.description,
        price: state.id ? state.price : state.dataProduct.price,
        status: state.id ? state.status : state.dataProduct.status,
      });
      setFiles(state.id ? state.image_url.url : state.files);
    } else {
      setDataProduct({
        title: '',
        category: '',
        description: '',
        price: '',
        status: 'available',
        image: [],
      });
      setFiles([]);
    }
  };

  const disableButtonCondition = () => {
    console.log('cek file.. ', state);
    if (state) {
      if (
        state.title === dataProduct.title &&
        state.category === dataProduct.category &&
        state.description === dataProduct.description &&
        (state.price === dataProduct.price || dataProduct.price.match(/^[0-9]+$/) === null) &&
        (state.image_url.url.map((element, index) => {
          return element === files[index];
        }) ||
          files.length === 0)
        // (state.image_url.url.length === files.length || files.length === 0)
      ) {
        return true;
      }
    }
    if (
      dataProduct.title === '' &&
      dataProduct.category === '' &&
      dataProduct.description === '' &&
      dataProduct.price === '' &&
      files.length === 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" desktopMenu={true} />

      <Container fluid className={`d-flex justify-content-center`} style={{ marginTop: '100px' }}>
        <section style={{ width: '100%', maxWidth: '800px' }}>
          <h5 className={`mb-5 text-center`}>Lengkapi Data Produk</h5>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Produk"
                value={dataProduct.title}
                className={`${style['input-form-style']}`}
                onChange={(e) => {
                  console.log('e.target.files', e.target.value);
                  setDataProduct({ ...dataProduct, title: e.target.value });
                  setError({ ...error, title: '' });
                }}
                required
              />
              <Form.Text className="text-muted d-block m-0">
                <strong className="text-danger">{error.title}</strong>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Harga Produk</Form.Label>
              <Form.Control
                type="text"
                className={`${style['input-form-style']}`}
                placeholder="Harga produk. Cth: 125000"
                value={dataProduct.price}
                pattern="^[0-9]+$"
                title="Harga harus berupa angka. Cth: 125000"
                onChange={(e) => {
                  console.log('e.target.files', e.target.value);
                  setDataProduct({ ...dataProduct, price: e.target.value });
                  setError({ ...error, price: '' });
                }}
                required
              />
              <Form.Text className="text-muted d-block m-0">
                <strong className="text-danger">{error.price}</strong>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: '100% !important' }}>
              <Form.Label>Kategori</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={dataProduct.category}
                className={`text-secondary ${style['input-form-style']}`}
                onChange={(e) => {
                  console.log('e.target.files', e.target.value);
                  setDataProduct({ ...dataProduct, category: e.target.value });
                  setError({ ...error, category: '' });
                }}
                required
              >
                <option hidden>Pilih Kategori</option>
                <option value="Kaos" style={{ color: '#000' }}>
                  Kaos
                </option>
                <option value="Kemeja" style={{ color: '#000' }}>
                  Kemeja
                </option>
                <option value="Pakaian Olahraga" style={{ color: '#000' }}>
                  Pakaian Olahraga
                </option>
                <option value="Celana" style={{ color: '#000' }}>
                  Celana
                </option>
                <option value="Sepatu" style={{ color: '#000' }}>
                  Sepatu
                </option>
                <option value="Sandal" style={{ color: '#000' }}>
                  Sandal
                </option>
                <option value="Tas" style={{ color: '#000' }}>
                  Tas
                </option>
              </Form.Select>
              <Form.Text className="text-muted d-block m-0">
                <strong className="text-danger">{error.category}</strong>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="Deskripsi produk"
                value={dataProduct.description}
                className={`${style['input-form-style']}`}
                onChange={(e) => {
                  console.log('e.target.files', e.target.value);
                  setDataProduct({
                    ...dataProduct,
                    description: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Foto Produk</Form.Label>

              <div
                {...getRootProps({ className: 'dropzone' })}
                className={`d-flex justify-content-center align-items-center ${style['dropzone-box']}`}
              >
                <input {...getInputProps()} required />
                <div className={`p-2 text-center text-secondary ${style['dropzone-area']}`}>
                  <img src={Plus_Icon} className={`mb-3`} style={{ width: '40%' }} alt="" />
                  <p>Tambah Foto</p>
                </div>
              </div>
              <Form.Text className="text-muted d-block m-0">
                Minimal 1 foto dan maksimal 4 foto (max 5 MB per foto){' '}
                <strong className="text-danger">{error.image}</strong>
              </Form.Text>
              <aside className={`d-block ${style['thumbs-container']}`}>
                {files ? (
                  <>
                    {imagePreview}
                    <ul>{filesName}</ul>
                  </>
                ) : null}
              </aside>
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: '100% !important' }}>
              <Form.Label>Status Product</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={dataProduct.status}
                className={`text-secondary ${style['input-form-style']}`}
                onChange={(e) => {
                  console.log('e.target.files', e.target.value);
                  setDataProduct({ ...dataProduct, status: e.target.value });
                  // setError({ ...error, category: '' });
                }}
                required
              >
                <option value="available" style={{ color: '#000' }}>
                  available
                </option>
                {state ? (
                  state.id ? (
                    <option value="sold" style={{ color: '#000' }}>
                      sold
                    </option>
                  ) : null
                ) : null}
              </Form.Select>
            </Form.Group>

            <div className="d-flex justify-content-end">
              <button className={`d-flex align-items-center ${style['refresh-button']}`} onClick={() => refreshForm()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
                <p className="m-0 ms-1">Reset</p>
              </button>
            </div>

            <div className={`my-5 ${style['display-button']}`}>
              <button
                type="button"
                className={`me-4 mb-3 ${style['btn-decision']}`}
                onClick={() => {
                  navigate('/product/preview', {
                    state: {
                      dataProduct,
                      files,
                    },
                  });
                }}
              >
                Preview
              </button>
              <button
                type="submit"
                className={`${style['btn-decision']}`}
                onClick={() => {
                  console.log('dataProduct', dataProduct);
                  submitHandler();
                }}
                // disabled={disableButtonCondition()}
              >
                Terbitkan
              </button>

              {console.log('state addproduct', state)}
              {loadingUploadData ? (
                (state ? (state.id ? loadingEditProduct : loadingCreateProduct) : loadingCreateProduct) ? (
                  <div className={`${style['loading-upload-data']}`}>
                    <Spinner animation="border" />
                  </div>
                ) : (
                  navigate('/productlist')
                )
              ) : null}
            </div>
          </Form>
        </section>
      </Container>
    </Fragment>
  );
}

export default ProductForm;
