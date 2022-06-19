import React, {Fragment} from 'react';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from './AddProduct.module.css';

const AddProduct = () => {
  return (
    <Fragment>
        
          <Navbar expand="lg" variant="light"  style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'}} >
            <Navbar.Brand href="#" style={{marginTop:'10px', marginLeft:'136px'}} >Localla</Navbar.Brand>
          </Navbar>

          <Container>
            <div className={`${style.formProduct}`}>
              <Form.Label htmlFor="inputPassword5" style={{marginTop:'40px'}}>Nama Produk</Form.Label>
              <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Nama Produk"
              style={{borderRadius:'16px', height:'48px'}}
              />

              <Form.Label htmlFor="inputPassword5" style={{marginTop:'16px'}} >Harga Produk</Form.Label>
              <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Rp 1.000,00"
              style={{borderRadius:'16px', height:'48px'}}
              />

              <Form.Label style={{marginTop:'16px'}}>Pilih Kategori</Form.Label>
              <Form.Select style={{borderRadius:'16px', height:'48px'}} >
                <option>Pilih Kategori</option>
                <option>Bandung</option>
                <option>Yogyakarta</option>
                <option>Jakarta</option>
              </Form.Select>    

              <Form.Label htmlFor="inputPassword5" style={{marginTop:'16px'}}>Deskripsi</Form.Label>
              <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Produk ini terbuat dari serbuk emas"
              style={{borderRadius:'16px', height:'48px'}}
              /> 

              <Form.Label htmlFor="inputPassword5" style={{marginTop:'16px'}}>Foto Produk</Form.Label>
              <Form.Control
              type=""
              id="inputimage"
              aria-describedby="passwordHelpBlock"
              style={{width: '96px',height: '96px',border: '1px dashed #D0D0D0',borderRadius: '12px'}}
              />

              <Button>Preview</Button>
              <Button>Terbitkan</Button>  
            </div>
        </Container>
    </Fragment>
    
  )
}

export default AddProduct