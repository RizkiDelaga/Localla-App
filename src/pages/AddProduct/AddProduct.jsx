import React, { Fragment, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDropzone } from 'react-dropzone';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, editProduct } from '../../redux/Actions/productAction.js';
import style from './AddProduct.module.css';

import Navbar from '../../components/Navbar/Navbar';

import Plus_Icon from '../../assets/icon/Plus_Icon.png';

function AddProduct() {
  let { state } = useLocation();
  const navigate = useNavigate();
  const [loadingUploadData, setLoadingUploadData] = useState(false);
  const [error, setError] = useState('');
  const [dataProduct, setDataProduct] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    status: state ? state.status : 'available',
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
        return setError('(Tidak sesuai format ketentuan)');
      }
      setError('');
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
          {typeof file === 'string' ? file : file.path}
        </p>
        <Button
          variant="danger"
          className={`ms-3 py-0`}
          onClick={(file) => {
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
          src={typeof file === 'string' ? file : file.preview}
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

    // console.log('formData addproduct files ', files[0]);
    // console.log('formData addproduct files ', typeof files[0]);
    // console.log('formData addproduct ', formData);

    state ? dispatch(editProduct(state.id, formData)) : dispatch(createProduct(formData));
  };

  React.useEffect(() => {
    // console.log('state landingpage', state);
    document.title = state ? 'Edit Produk' : 'Tambah Produk';
    refreshForm();
  }, []);

  const refreshForm = () => {
    if (state) {
      setDataProduct({
        title: state.title,
        category: state.category,
        description: state.description,
        price: state.price,
        status: state.status,
        image: { ...state.image_url.url },
      });
      setFiles(state.image_url.url);
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

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" desktopMenu={true} />

      <Container fluid className={`d-flex justify-content-center`} style={{ marginTop: '100px' }}>
        <section style={{ width: '100%', maxWidth: '800px' }}>
          <h5 className={`mb-5 text-center`}>{state ? 'Edit Produk' : 'Tambah Produk'}</h5>
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
              <p className="m-0 ms-1">Refresh</p>
            </button>
          </div>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              submitHandler();
            }}
          >
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
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Harga Produk</Form.Label>
              <Form.Control
                type="text"
                className={`${style['input-form-style']}`}
                placeholder="Harga produk. Cth: 125000"
                value={dataProduct.price}
                pattern="[0-9]*"
                title="Harga harus berupa angka. Cth: 125000"
                controlId="exampleForm.ControlInput1"
                onChange={(e) => {
                  console.log('e.target.files', e.target.value);
                  setDataProduct({ ...dataProduct, price: e.target.value });
                }}
                required
              />
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
                required
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
                Minimal 1 foto dan maksimal 4 foto (max 5 MB per foto) <strong className="text-danger">{error}</strong>
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
                  setLoadingUploadData(true);
                }}
              >
                Terbitkan
              </button>

              {console.log('state addproduct', state)}
              {loadingUploadData ? (
                (state ? loadingEditProduct : loadingCreateProduct) ? (
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

export default AddProduct;
