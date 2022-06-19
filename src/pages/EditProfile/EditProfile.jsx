import React, {Fragment} from 'react';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Camera from '../../assets/icon/fi_camera.png'
import style from './EditProfile.module.css';
import ButtonBack from '../../assets/icon/fi_arrow-left.png';

const EditProfile = () => {
  return (
    
    <Fragment>
      <Navbar expand="lg" variant="light" className={`${style.navbar}`} >
        <Navbar.Brand href="#" style={{marginTop:'10px', marginLeft:'136px'}}>Localla</Navbar.Brand>
        <div style={{marginLeft :'409px', marginTop:'27px', fontSize:'16px'}}>
          <p >Lengkapi Info Akun</p>
        </div>
      </Navbar>
      <Container>
        <img src={ButtonBack} alt="back"style={{marginLeft:'250px', marginTop:'35px'}} />
        <Card className={`${style.profileImage}`}>
          <Card.Img variant="top" src= {Camera} style={{ width:'24px', margin : '36px'}} />
        </Card>

        <div className={`${style.formData}`}>
          <Form.Label htmlFor="inputPassword5">Nama*</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Nama"
            style={{borderRadius:'16px', height:'48px'}}
          />
          <Form.Label style={{marginTop:'16px'}}>Pilih Kota</Form.Label>
          <Form.Select style={{borderRadius:'16px', height:'48px'}} >
            <option>Pilih Kota</option>
            <option>Bandung</option>
            <option>Yogyakarta</option>
            <option>Jakarta</option>
          </Form.Select>

          <Form.Label htmlFor="inputPassword5" style={{marginTop:'16px'}} >Alamat*</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder='Contoh : Jalan jeruk 06'
            style={{borderRadius:'16px', height:'80px'}}
          />
          <Form.Label htmlFor="inputPassword5" style={{marginTop:'16px'}}>No Handphone*</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder='Contoh : +6285351432198'
            style={{borderRadius:'16px', height:'48px'}}
          />

          <Button style={{width:'538px', height :'48px' ,borderRadius:'16px', backgroundColor :'#7126B5', padding:'12px 24px', fontSize:'14px', marginTop:'16px', border:'none'}}>Simpan</Button>   
        </div>
         
      </Container>
    </Fragment>
  )
}

export default EditProfile