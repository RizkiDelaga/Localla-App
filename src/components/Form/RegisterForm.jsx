import React, { Fragment, useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './Form.module.css';

import fi_eye from '../../assets/icons/fi_eye.png';
import Google_Icon from '../../assets/icons/Google_Icon.png';

function RegisterForm() {
  const [dataRegistrasi, setDataRegistrasi] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [registerStatus, setRegisterStatus] = useState({
    isSuccess: false,
    message: '',
  });

  console.log('dataRegistrasi..  ', dataRegistrasi);

  const submitHandler = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://localla-api.herokuapp.com/api/v1/user/register',
        data: dataRegistrasi,
      });
      if (res.status === 201) {
        setRegisterStatus({
          isSuccess: true,
          message: 'Register Successfully!',
        });
        setShowAlert(true);
        setDataRegistrasi({
          name: '',
          email: '',
          phone: '',
          password: '',
        });
      }
    } catch (error) {
      setRegisterStatus({
        isSuccess: false,
        message: error.response.data.message,
      });
      setShowAlert(true);
      console.log('error..  ', error);
    }
  };

  const googleAuthHandler = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'https://localla-api.herokuapp.com/api/v1/auth/google',
      });
      console.log('respon..a register google auth ', res);
      if (res.status === 201) {
        setRegisterStatus({
          isSuccess: true,
          message: 'Register Successfully!',
        });
        setShowAlert(true);
        setDataRegistrasi({
          name: '',
          email: '',
          password: '',
        });
      }
    } catch (error) {
      setRegisterStatus({
        isSuccess: false,
        message: error.response.data.message,
      });
      setShowAlert(true);
      console.log('error..  ', error);
    }
  };

  return (
    <Fragment>
      <Form
        className={`px-3 ${style['form-container']}`}
        onSubmit={(event) => {
          event.preventDefault();
          submitHandler();
        }}
      >
        <h3 className={`fw-bold mb-3 text-center`} style={{marginBottom: '250px'}}>Daftar</h3>
        {showAlert ? (
          <Alert
            className={`${style['auth-alert']} ${
              registerStatus.isSuccess ? style['success-alert'] : style['failed-alert']
            }`}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            <h5 className="m-0">{registerStatus.message}</h5>
          </Alert>
        ) : null}

        <Form.Label className="fw-bolder">Nama</Form.Label>
        <Form.Control
          className={`${style['input-field']}`}
          type="text"
          placeholder="Nama Lengkap"
          value={dataRegistrasi.name}
          onChange={(e) => {
            setDataRegistrasi({
              ...dataRegistrasi,
              name: e.target.value,
            });
          }}
          required
        />

        <Form.Label className="fw-bolder mt-3">Email</Form.Label>
        <Form.Control
          className={`${style['input-field']}`}
          type="email"
          placeholder="Contoh: johndee@gmail.com"
          value={dataRegistrasi.email}
          pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          onChange={(e) => {
            setDataRegistrasi({
              ...dataRegistrasi,
              email: e.target.value,
            });
          }}
          required
        />
        <Form.Text className="text-muted d-block m-0">Email harus valid</Form.Text>

        <Form.Label className="fw-bolder mt-3">No Telepon</Form.Label>
        <Form.Control
          className={`${style['input-field']}`}
          type="text"
          placeholder="081234567890"
          value={dataRegistrasi.phone}
          pattern="^[0-9]+$"
          title="No Telepon harus angka"
          onChange={(e) => {
            setDataRegistrasi({
              ...dataRegistrasi,
              phone: e.target.value,
            });
          }}
          required
        />
        <Form.Text className="text-muted d-block m-0">Nomer telepon harus valid</Form.Text>

        <Form.Label className="fw-bolder mt-3">Password</Form.Label>
        <div className={`${style['password-holder']}`}>
          <input
            className={`${style['password-input']}`}
            type={showPassword ? 'text' : 'password'}
            placeholder="Masukkan password"
            value={dataRegistrasi.password}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            title="Password harus memiliki setidaknya 1 karakter huruf kecil, 1 karakter huruf besar, 1 karakter angka, dan 1 karakter spesial"
            onChange={(e) => {
              setDataRegistrasi({
                ...dataRegistrasi,
                password: e.target.value,
              });
            }}
            required
          />
          <button
            className={`${style['password-toggler']}`}
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <img src={fi_eye} alt="" />
          </button>
        </div>
        <Form.Text className="text-muted">
          Password harus mengangandung huruf kapital, huruf kecil, angka, dan karakter spesial
        </Form.Text>

        <input type="submit" className={`${style['button-submit']} mt-3`} value="Daftar" />
      </Form>

      <div className={`${style.toggler} pt-3`}>
        <p className="m-0">
          Sudah punya akun?
          <Link to="/login" className={`${style.toggle} px-2`}>
            Masuk di sini
          </Link>
        </p>
        <p className="my-2 fw-bold">atau</p>
        {/* <a href="https://localla-api.herokuapp.com/api/v1/auth/google"> */}
        <button
          className={`${style['login-with-google']}`}
          onClick={() => {
            googleAuthHandler();
          }}
        >
          <img src={Google_Icon} alt="" style={{ width: '35px', paddingRight: '5px' }} />
          <p className="m-0">Masuk dengan Google</p>
        </button>
        {/* </a> */}
      </div>
    </Fragment>
  );
}

export default RegisterForm;
