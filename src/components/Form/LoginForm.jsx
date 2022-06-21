import React, { useState } from "react";
import styles from "./Form.module.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import fi_eye from '../../assets/icons/fi_eye.png';


function LoginForm() {
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: ""
    });

    return (
        <Form className={`${styles["form-container"]}`} onSubmit={(event) => {event.preventDefault()}}>
            <p className={`${styles.text} mt-3`}>Masuk</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                className={`${styles["input-field"]}`}
                type="email"
                placeholder="Contoh: johndee@gmail.com"
                onChange={(e) => {
                    setDataLogin({
                        ...dataLogin,
                        email: e.target.value
                    })
                }}
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
                        setDataLogin({
                            ...dataLogin,
                            password: e.target.value
                        })
                    }}
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
                    Password must not contain any white spaces and must be at least 8
                    characters long.
                </p>
                {/* )} */}
            </Form.Group>

            {/* {!isLoading && ( */}
                <Button
                variant="primary"
                type="submit"
                className={`${styles["button-submit"]} mt-3`}
                >
                Masuk
                </Button>
            {/* )} */}

            {/* {isLoading && <p>Loading...</p>} */}
            <div className={`${styles.toggler} pt-3`}>
                <p>
                Belum punya akun?
                <Link
                    to="/register"
                    type="button"
                    className={`${styles.toggle} px-2`}
                >
                    Daftar di sini
                </Link>
                </p>
            </div>
        </Form>
    );
};

export default LoginForm;
