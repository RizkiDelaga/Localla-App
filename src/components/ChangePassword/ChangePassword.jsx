import React, { useState } from "react";
import { Spinner, Modal, Button, Form } from "react-bootstrap";

import fi_eye from "../../assets/icons/fi_eye.png";

import style from "./ChangePassword.module.css";

const ChangePassword = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label className="fw-bolder mt-3">Password Lama</Form.Label>
            <div className={`${style["password-holder"]}`}>
              <input
                className={`${style["password-input"]}`}
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password lama"
                onChange={(e) => {
                  props.newPasswordChange({
                    ...props.newPassword,
                    password: e.target.value,
                  });
                }}
                required
              />
              <button
                className={`${style["password-toggler"]}`}
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <img src={fi_eye} alt="" />
              </button>
            </div>

            <Form.Label className="fw-bolder mt-3">Password Baru</Form.Label>
            <div className={`${style["password-holder"]}`}>
              <input
                className={`${style["password-input"]}`}
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password baru"
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                onChange={(e) => {
                  props.newPasswordChange({
                    ...props.newPassword,
                    newPassword: e.target.value,
                  });
                }}
                required
              />
              <button
                className={`${style["password-toggler"]}`}
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <img src={fi_eye} alt="" />
              </button>
            </div>

            <Form.Label className="fw-bolder mt-3">
              Konfirmasi Password Baru{" "}
            </Form.Label>
            <div className={`${style["password-holder"]}`}>
              <input
                className={`${style["password-input"]}`}
                type={showPassword ? "text" : "password"}
                placeholder="Konfirmasi password baru"
                onChange={(e) => {
                  props.newPasswordChange({
                    ...props.newPassword,
                    confirmPassword: e.target.value,
                  });
                }}
                required
              />
              <button
                className={`${style["password-toggler"]}`}
                type="button"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <img src={fi_eye} alt="" />
              </button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {props.loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <>
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#f6a833",
                }}
                onClick={props.handleClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={props.changePasswordHandler}
                style={{ backgroundColor: "#f6a833", border: "none" }}
              >
                Save Changes
              </Button>{" "}
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChangePassword;
