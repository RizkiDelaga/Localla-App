import React, { Fragment, useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDropzone } from 'react-dropzone';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProduct,
  editProduct,
} from '../../redux/Actions/productAction.js';
import style from './AddProduct.module.css';

import Navbar from '../../components/Navbar/Navbar';

import Plus_Icon from '../../assets/icon/Plus_Icon.png';

function AddProduct() {
  let { state } = useLocation();
  const navigate = useNavigate();
  const [loadingUploadData, setLoadingUploadData] = useState(false);
  const [dataProduct, setDataProduct] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    status: state ? state.status : 'available',
    image: [],
  });

  const dispatch = useDispatch();
  const { isLoading: loadingCreateProduct, data: dataCreateProduct } =
    useSelector((state) => state.createProduct);

  const { isLoading: loadingEditProduct, data: dataEditProduct } = useSelector(
    (state) => state.editProduct
  );

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const deleteImageItem = (file) => {
    setFiles(files.filter((item) => item !== file));
  };

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
          onClick={() => deleteImageItem(file)}
        >
          Delete
        </Button>
      </div>
    </li>
  ));

  const thumbs = files.map((file) => (
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

  const addProductHandler = () => {
    const formData = new FormData();

    console.log('dataProduct... landng page', dataProduct);
    formData.append('title', dataProduct.title);
    formData.append('category', dataProduct.category);
    formData.append('description', dataProduct.description);
    formData.append('price', dataProduct.price);
    formData.append('status', dataProduct.status);
    // files.map((file) => {
    //   console.log('file landingpage', file);
    //   formData.append('image', file);
    // });

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

    console.log('formData addproduct files ', files[0]);
    console.log('formData addproduct files ', typeof files[0]);
    console.log('formData addproduct ', formData);

    state
      ? dispatch(editProduct(state.id, formData))
      : dispatch(createProduct(formData));
  };

  React.useEffect(() => {
    console.log('state landingpage', state);
    document.title = state ? 'Edit Product' : 'Add Product';
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
      <Navbar
        logo={true}
        backButton="/productlist"
        normalTitle="Lengkapi Detail Produk"
      />

      <Container
        fluid
        className={`d-flex justify-content-center`}
        style={{ marginTop: '90px' }}
      >
        <section
          className={`my-5`}
          style={{ width: '100%', maxWidth: '800px' }}
        >
          <div className="text-end">
            <button onClick={() => refreshForm()}>Refresh</button>
          </div>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              addProductHandler();
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
                <div
                  className={`p-2 text-center text-secondary ${style['dropzone-area']}`}
                >
                  <img
                    src={Plus_Icon}
                    className={`mb-3`}
                    style={{ width: '40%' }}
                    alt=""
                  />
                  <p>Tambah Foto</p>
                </div>
              </div>
              <Form.Text className="text-muted d-block m-0">
                Maksimal 4 foto
              </Form.Text>
              <aside className={`d-block ${style['thumbs-container']}`}>
                {files ? (
                  <>
                    {thumbs}
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
                      dataProduct, files,
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
                  addProductHandler();
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

              {/* {loadingUploadData ? (
                state? loadingEditProduct?  (
                  <div className={`${style['loading-upload-data']}`}>
                    <Spinner animation="border" />
                  </div>
                ) : (
                  navigate('/productlist')
                ) : loadingCreateProduct? (
                  <div className={`${style['loading-upload-data']}`}>
                    <Spinner animation="border" />
                  </div>
                ) : (
                  navigate('/productlist')
                )
              ) : null} */}
            </div>
          </Form>
        </section>
      </Container>
    </Fragment>
  );
}

export default AddProduct;
