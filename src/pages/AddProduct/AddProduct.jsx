import React, {Fragment, useState} from 'react';
import { Button, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../redux/Actions/productAction.js';
import style from './AddProduct.module.css';

import Navbar from '../../components/Navbar/Navbar';

import Plus_Icon from '../../assets/icon/Plus_Icon.png';

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
  // const { isLoading: loadingProduct, data: statusDataProduct, error: getErrorPostProduct } = useSelector((state) => state.product);
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

      console.log("dataProduct... landng page", dataProduct);
      formData.append('title', dataProduct.title);
      formData.append('category', dataProduct.category);
      formData.append('description', dataProduct.description);
      formData.append('price', dataProduct.price);
      formData.append('status', dataProduct.status);
      files.map(file => {
        console.log("file landingpage", file);
        formData.append('image', file);
      });
      console.log("formData landingpage ", formData);

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
              <Form.Control type="text" placeholder="Nama Produk" value={dataProduct.title} className={`${style['input-form-style']}`} onChange={(e) => {
              console.log("e.target.files", e.target.value);
              setDataProduct({...dataProduct, title: e.target.value})
            }}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Harga Produk</Form.Label>
              <Form.Control type="text" placeholder="Rp 0,00" value={dataProduct.price} className={`${style['input-form-style']}`} controlId="exampleForm.ControlInput1" onChange={(e) => {
              console.log("e.target.files", e.target.value);
              setDataProduct({...dataProduct, price: e.target.value})
            }}/>
            </Form.Group>
            
            <Form.Group className="mb-3" style={{width: '100% !important'}}>
              <Form.Label>Kategori</Form.Label>
              <Form.Select aria-label="Default select example" value={dataProduct.category} className={`text-secondary ${style['input-form-style']}`} onChange={(e) => {
              console.log("e.target.files", e.target.value);
              setDataProduct({...dataProduct, category: e.target.value})
            }}>
                <option hidden>Pilih Kategori</option>
                <option value="Kaos" style={{color: '#000'}}>Kaos</option>
                <option value="Kemeja" style={{color: '#000'}}>Kemeja</option>
                <option value="Pakaian Olahraga" style={{color: '#000'}}>Pakaian Olahraga</option>
                <option value="Celana" style={{color: '#000'}}>Celana</option>
                <option value="Sepatu" style={{color: '#000'}}>Sepatu</option>
                <option value="Sandal" style={{color: '#000'}}>Sandal</option>
                <option value="Tas" style={{color: '#000'}}>Tas</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Contoh: Jalan Ikan Hiu 33" value={dataProduct.description} className={`${style['input-form-style']}`} onChange={(e) => {
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
                {files?
                <>
                {thumbs}
                <ul>{filesName}</ul>
                </> : null}
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