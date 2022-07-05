import React, {Fragment} from 'react';
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Default_PP_Icon from '../../assets/icon/Default_PP_Icon.png'
import style from './EditProfile.module.css';
import Navbar from '../../components/Navbar/Navbar';


function EditProfile() {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = "Edit Profile";
  }, []);

  return (
    <Fragment>
      <Navbar logo={true} backButton="/myprofile" normalTitle="Lengkapi Info Akun" />
      <Container fluid className={`d-flex justify-content-center`} style={{marginTop: '90px'}}>
        <section style={{width: '100%', maxWidth: '800px'}}>

          <div className="d-flex justify-content-center">
            <div className={`${style['personal-photo']}`}>
              <img src={Default_PP_Icon} alt="" style={{width: '100%', objectFit: 'cover'}}/>
            </div>
            <div className="upload-photo">

            </div>
          </div>
          <Form onSubmit={(event) => {event.preventDefault()}}>
            <Form.Group className="mb-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Nama" className={`${style['input-form-style']}`} />
            </Form.Group>
            
            <Form.Group className="mb-3" style={{width: '100% !important'}}>
              <Form.Label>Kota</Form.Label>
              <Form.Select aria-label="Default select example" className={`text-secondary ${style['input-form-style']}`}>
                <option hidden>Pilih Kota</option>
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
              <Form.Label>No Handphone</Form.Label>
              <Form.Control type="text" placeholder="contoh: +628123456789" className={`${style['input-form-style']}`} controlId="exampleForm.ControlInput1" />
            </Form.Group>
          </Form>

          <div className="d-flex mt-4">
            <button className={`${style['btn-decision']}`} onClick={() => {navigate("/myprofile")}}>Simpan</button>
          </div>
        </section>
      </Container>
    </Fragment>
  )
}

export default EditProfile