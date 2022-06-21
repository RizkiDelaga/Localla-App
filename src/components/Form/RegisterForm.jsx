import React, { useState } from "react";
import styles from "./Form.module.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import fi_eye from '../../assets/icons/fi_eye.png';


function RegisterForm() {
    const [dataRegistrasi, setDataRegistrasi] = useState({
        name: "",
        email: "",
        password: ""
    });

  return (
    <Form className={`${styles["form-container"]}`} onSubmit={(event) => {event.preventDefault()}}>
      <p className={`${styles.text} mt-3`}>Daftar</p>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          className={`${styles["input-field"]}`}
          type="text"
          placeholder="Nama Lengkap"
          onChange={(e) => {
            setDataRegistrasi({
                ...dataRegistrasi,
                name: e.target.value
            })}}
          required
        />
        {/* {userNameError && ( */}
          <p className={`${styles["error-text"]}`}>
            Name harus diisi dan minimal 4 karakter
          </p>
        {/* )} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className={`${styles["input-field"]}`}
          type="email"
          placeholder="Contoh: johndee@gmail.com"
          onChange={(e) => {
            setDataRegistrasi({
                ...dataRegistrasi,
                email: e.target.value
            })}}
          required
        />
        {/* {emailError && ( */}
          <p className={`${styles["error-text"]}`}>Email tidak valid</p>
        {/* )} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div className={`${styles["password-holder"]}`}>
          <input
            className={`${styles["password-input"]}`}
            type={"password"}
            placeholder="Masukkan password"
            onChange={(e) => {
                setDataRegistrasi({
                    ...dataRegistrasi,
                    email: e.target.value
                })}}
            required
          />
          <button
            className={`${styles["password-toggler"]}`}
            type="button"
          >
            <img src={fi_eye} alt="" />
          </button>
        </div>
        {/* {passwordError && ( */}
          <p className={`${styles["error-text"]}`}>
            Password harus ada 1 uppercase, 1 lowercase, 1 angka dan minimal 9
            karakter
          </p>
        {/* )} */}
      </Form.Group>

      {/* {!isLoading && ( */}
        <Button
          variant="primary"
          type="submit"
          className={`${styles["button-submit"]} mt-3`}
        >
          Daftar
        </Button>
      {/* )} */}

      <div className={`${styles.toggler} pt-3`}>
        <p>
          Sudah punya akun?
          <Link to="/login" type="button" className={`${styles.toggle} px-2`}>
            Masuk di sini
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default RegisterForm;
