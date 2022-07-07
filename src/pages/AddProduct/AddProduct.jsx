import React, {Fragment, useEffect, useState} from 'react';
import { Button, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDropzone } from 'react-dropzone';
import style from './AddProduct.module.css';
import Plus_Icon from '../../assets/icon/Plus_Icon.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../redux/Actions/productAction.js';


function AddProduct() {
  const navigate = useNavigate();
  const [dataProduct, setDataProduct] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    status: "Available",
    image: []
  });

  const dispatch = useDispatch();
  const { isLoading: loadingProduct, data: statusDataProduct, error: getErrorPostProduct } = useSelector((state) => state.product);
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }))]);
    }
  });

  const filesName = files.map(file => <li key={file.path}>{file.path} <Button variant='danger' className={`ms-3 py-0`} onClick={() => {}}>Delete</Button></li>);
    
  const thumbs = files.map(file => (
    <div className={`${style['thumb']}`} key={file.name}>
      <div className={`${style['thumb-inner']}`}>
        <img
          src={file.preview}
          className={`${style['img-preview']}`}
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
          alt=""
        />
      </div>
    </div>
  ));

  const addProductHandler = () => {
      const formData = new FormData();

      console.log("e.target.files[0].... ", dataProduct.image[0]);
      console.log("dataProduct.image", dataProduct.image);
      formData.append('title', dataProduct.title);
      formData.append('category', dataProduct.category);
      formData.append('description', dataProduct.description);
      formData.append('price', dataProduct.price);
      formData.append('status', dataProduct.status);
      files.map(file => {
        formData.append('image', file);
      });
      dispatch(createProduct(formData));
  }
  
  React.useEffect(() => {
    document.title = "Add Product";
  }, []);

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" normalTitle="Lengkapi Detail Produk" />

      <Container fluid className={`d-flex justify-content-center`} style={{marginTop: '90px'}}>
        <section className={`my-5`} style={{width: '100%', maxWidth: '800px'}}>
          <Form onSubmit={(event) => {event.preventDefault()}}>
            <Form.Group className="mb-3">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control type="text" placeholder="Nama Produk" className={`${style['input-form-style']}`} onChange={(e) => {
              console.log("e.target.files", e.target.value);
              setDataProduct({...dataProduct, title: e.target.value})
            }}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Harga Produk</Form.Label>
              <Form.Control type="text" placeholder="Rp 0,00" className={`${style['input-form-style']}`} controlId="exampleForm.ControlInput1" onChange={(e) => {
              console.log("e.target.files", e.target.value);
              setDataProduct({...dataProduct, price: e.target.value})
            }}/>
            </Form.Group>
            
            <Form.Group className="mb-3" style={{width: '100% !important'}}>
              <Form.Label>Kategori</Form.Label>
              <Form.Select aria-label="Default select example" className={`text-secondary ${style['input-form-style']}`} onChange={(e) => {
              console.log("e.target.files", e.target.value);
              setDataProduct({...dataProduct, category: e.target.value})
            }}>
                <option hidden>Pilih Kategori</option>
                <option value="T-Shirt" style={{color: '#000'}}>T-Shirt</option>
                <option value="Shoes" style={{color: '#000'}}>Shoes</option>
                <option value="Pants" style={{color: '#000'}}>Pants</option>
                <option value="Accessories" style={{color: '#000'}}>Accessories</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Contoh: Jalan Ikan Hiu 33" className={`${style['input-form-style']}`} onChange={(e) => {
              console.log("e.target.files", e.target.value);
              setDataProduct({...dataProduct, description: e.target.value})
            }}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Foto Produk</Form.Label>

              <div {...getRootProps({className: 'dropzone'})} className={`d-flex justify-content-center align-items-center ${style['dropzone-box']}`}>
                <input {...getInputProps()} />
                <div className={`p-2 text-center text-secondary ${style['dropzone-area']}`}>
                  <img src={Plus_Icon} className={`mb-3`} alt="" style={{width: '40%'}} />
                  <p>Tambah Foto</p>
                </div>
              </div>
              <aside className={`d-block ${style['thumbs-container']}`}>
                {thumbs}
                <ul>{filesName}</ul>
              </aside>
            </Form.Group>
            
            <div className={`my-5 ${style['display-button']}`}>
              <button className={`me-4 mb-3 ${style['btn-decision']}`} onClick={() => {navigate("/product/preview", { state: {description: "Lorem ipsum", title: "asd saa dasd", category: "baju", price: 213138} })}}>Preview</button>
              <button type='submit' className={`${style['btn-decision']}`} onClick={() => {
                console.log("dataProduct", dataProduct);
                addProductHandler();
                // navigate("/productlist");
              }}>Terbitkan</button>
            </div>
          </Form>
        </section>
      </Container>
    </Fragment>
  )
}

export default AddProduct;