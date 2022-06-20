import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import style from './AddProduct.module.css';

function AddProduct() {
  return (
    <Fragment>
      <Container fluid className={`d-flex justify-content-center`} style={{marginTop: '90px'}}>
        <section style={{width: '100%', maxWidth: '800px'}}>
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
          </Form>

          <div className="d-flex mt-4">
            <button className={`me-4 ${style['btn-decision']}`}>Preview</button>
            <button className={`${style['btn-decision']}`}>Terbitakan</button>
          </div>
        </section>
      </Container>
    </Fragment>
    
  )
}

export default AddProduct