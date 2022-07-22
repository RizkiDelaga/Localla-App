import React, { Fragment, useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './Form.module.css';

import fi_eye from '../../assets/icons/fi_eye.png';
// import Google_Icon from '../../assets/icons/Google_Icon.png';

function LoginForm() {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [registerStatus, setRegisterStatus] = useState({
    isSuccess: false,
    message: '',
  });

  const submitHandler = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://localla-api.herokuapp.com/api/v1/auth/login',
        data: dataLogin,
      });
      if (res.status === 200) {
        localStorage.setItem('access_token', res.data.tokenAccess);
        localStorage.setItem('myId', res.data.data.id);
      }
      if (res.data.data.role === 'seller') {
        return navigate('/');
      }
      navigate('/editprofile');
    } catch (error) {
      setRegisterStatus({
        isSuccess: false,
        message: error.response.data.message,
      });
      setShowAlert(true);
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
        <h3 className={`fw-bold mb-5 text-center`}>Masuk</h3>
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

        <Form.Label className="fw-bolder">Email</Form.Label>
        <Form.Control
          className={`${style['input-field']}`}
          type="email"
          placeholder="Contoh: johndee@gmail.com"
          onChange={(e) => {
            setDataLogin({
              ...dataLogin,
              email: e.target.value,
            });
          }}
          required
        />

        <Form.Label className="fw-bolder mt-3">Password</Form.Label>
        <div className={`${style['password-holder']}`}>
          <input
            className={`${style['password-input']}`}
            type={showPassword ? 'text' : 'password'}
            placeholder="Masukkan password"
            onChange={(e) => {
              setDataLogin({
                ...dataLogin,
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

        <input type="submit" className={`${style['button-submit']} mt-3`} value="Masuk" />
      </Form>

      <div className={`${style.toggler} pt-3`}>
        <p className="m-0">
          Belum punya akun?
          <Link
            to="/register"
            className={`${style.toggle} px-2`}
            onClick={() => {
              setDataLogin({ email: '', password: '' });
            }}
          >
            Daftar di sini
          </Link>
        </p>
        {/* Nonaktikan fitur Google Auth || Perbaikan */}
        {/* <p className="my-3 fw-bold">atau</p>
        <button className={`${style['login-with-google']}`}>
          <img src={Google_Icon} alt="" style={{ width: '35px', paddingRight: '5px' }} />
          <p className="m-0">Masuk dengan Google</p>
        </button> */}
      </div>
    </Fragment>
  );
}

export default LoginForm;
