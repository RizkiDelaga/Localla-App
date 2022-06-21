import React, {Fragment, useEffect, useState} from 'react';
import {Button, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDropzone } from 'react-dropzone';
import style from './AddProduct.module.css';
import Plus_Icon from '../../assets/icon/Plus_Icon.png';


function AddProduct() {
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
  
  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Fragment>
      <Container fluid className={`d-flex justify-content-center`} style={{marginTop: '90px'}}>
        <section className={`my-5`} style={{width: '100%', maxWidth: '800px'}}>
          <Form onSubmit={(event) => {event.preventDefault()}}>
            <Form.Group className="mb-3">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control type="text" placeholder="Nama Produk" className={`${style['input-form-style']}`} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Harga Produk</Form.Label>
              <Form.Control type="text" placeholder="Rp 0,00" className={`${style['input-form-style']}`} controlId="exampleForm.ControlInput1" />
            </Form.Group>
            
            <Form.Group className="mb-3" style={{width: '100% !important'}}>
              <Form.Label>Kategori</Form.Label>
              <Form.Select aria-label="Default select example" className={`text-secondary ${style['input-form-style']}`}>
                <option hidden>Pilih Kategori</option>
                <option value="1" style={{color: '#000'}}>One</option>
                <option value="2" style={{color: '#000'}}>Two</option>
                <option value="3" style={{color: '#000'}}>Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Alamat</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Contoh: Jalan Ikan Hiu 33" className={`${style['input-form-style']}`} />
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
            
            <div className="d-flex my-5">
              <button className={`me-4 ${style['btn-decision']}`}>Preview</button>
              <button type='submit' className={`${style['btn-decision']}`}>Terbitakan</button>
            </div>
          </Form>
        </section>
      </Container>
    </Fragment>
  )
}

export default AddProduct;