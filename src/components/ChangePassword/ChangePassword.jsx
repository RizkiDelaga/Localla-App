import React, { useState } from 'react';
import axios from 'axios';
import { Spinner, Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import style from './ChangePassword.module.css';

import fi_eye from '../../assets/icons/fi_eye.png';

const ChangePassword = (props) => {
  const [newPassword, newPasswordChange] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [error, setError] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const changePasswordHandler = async () => {
    setLoading(true);

    if (newPassword.password === '') {
      setLoading(false);
      return setError({ ...error, oldPassword: 'Masukan password anda yang sekarang' });
    } else if (newPassword.password === newPassword.newPassword) {
      setLoading(false);
      return setError({ ...error, newPassword: 'Password baru tidak boleh sama dengan password lama' });
    } else if (newPassword.newPassword !== newPassword.confirmPassword) {
      setLoading(false);
      return setError({ ...error, confirmPassword: 'Password tidak sama' });
    }

    try {
      const res = await axios({
        method: 'PUT',
        url: `https://localla-api.herokuapp.com/api/v1/user/updatepassword`,
        data: {
          password: newPassword.password,
          new_password: newPassword.newPassword,
          confirm_new_password: newPassword.confirmPassword,
        },
        headers: {
          Authorization: `${localStorage.getItem('access_token')}`,
        },
      });
      if (res.status === 200) {
        newPasswordChange({
          password: '',
          newPassword: '',
          confirmPassword: '',
        });
        props.onHide();
        setLoading(false);
        toast.warn('Password Berhasil Diganti', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          icon: false,
        });
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        icon: false,
      });
    }
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName={`${style['modal-size']}`}
      contentClassName={`${style['modal-style']}`}
      className={`${style['modal-centered']}`}
    >
      <Modal.Header closeButton>
        <Modal.Title>Ubah Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group classname="mb-3">
            <Form.Label className="fw-bolder">Password Lama</Form.Label>
            <div className={`${style['password-holder']}`}>
              <input
                className={`${style['password-input']}`}
                type={showPassword.oldPassword ? 'text' : 'password'}
                placeholder="Masukkan password lama"
                onChange={(e) => {
                  newPasswordChange({
                    ...newPassword,
                    password: e.target.value,
                  });
                  setError({ ...error, oldPassword: '' });
                }}
                required
              />
              <button
                className={`${style['password-toggler']}`}
                type="button"
                onClick={() => {
                  setShowPassword({ ...showPassword, oldPassword: !showPassword.oldPassword });
                }}
              >
                <img src={fi_eye} alt="" />
              </button>
            </div>
            <Form.Text className="text-muted d-block m-0">
              <strong className="text-danger">{error.oldPassword}</strong>
            </Form.Text>
          </Form.Group>

          <Form.Group classname="mb-3">
            <Form.Label className="fw-bolder">Password Baru</Form.Label>
            <div className={`${style['password-holder']}`}>
              <input
                className={`${style['password-input']}`}
                type={showPassword.newPassword ? 'text' : 'password'}
                placeholder="Masukkan password baru"
                onChange={(e) => {
                  newPasswordChange({
                    ...newPassword,
                    newPassword: e.target.value,
                  });
                  setError({ ...error, newPassword: '' });
                }}
                required
              />
              <button
                className={`${style['password-toggler']}`}
                type="button"
                onClick={() => {
                  setShowPassword({ ...showPassword, newPassword: !showPassword.newPassword });
                }}
              >
                <img src={fi_eye} alt="" />
              </button>
            </div>
            <Form.Text className="text-muted d-block m-0">
              <strong className="text-danger">{error.newPassword}</strong>
            </Form.Text>
          </Form.Group>

          <Form.Group classname="mb-3">
            <Form.Label className="fw-bolder">Konfirmasi Password Baru </Form.Label>
            <div className={`${style['password-holder']}`}>
              <input
                className={`${style['password-input']}`}
                type={showPassword.confirmPassword ? 'text' : 'password'}
                placeholder="Konfirmasi password baru"
                onChange={(e) => {
                  newPasswordChange({
                    ...newPassword,
                    confirmPassword: e.target.value,
                  });
                  setError({ ...error, confirmPassword: '' });
                }}
                required
              />
              <button
                className={`${style['password-toggler']}`}
                type="button"
                onClick={() => {
                  setShowPassword({ ...showPassword, confirmPassword: !showPassword.confirmPassword });
                }}
              >
                <img src={fi_eye} alt="" />
              </button>
            </div>
            <Form.Text className="text-muted d-block m-0">
              <strong className="text-danger">{error.confirmPassword}</strong>
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <>
            <Button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#f6a833',
              }}
              onClick={() => {
                props.onHide();
              }}
            >
              Batalkan
            </Button>
            <Button
              type="submit"
              onClick={changePasswordHandler}
              style={{ backgroundColor: '#f6a833', border: 'none' }}
            >
              Ubah Password
            </Button>{' '}
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePassword;
