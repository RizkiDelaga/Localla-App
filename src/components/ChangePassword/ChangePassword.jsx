import React from "react";

const ChangePassword = () => {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName={`${style["modal-size"]}`}
        contentClassName={`${style["modal-style"]}`}
        className={`${style["modal-centered"]}`}
      >
        <Modal.Body className={`mx-3 my-4 p-0`}>
          <div className="text-center mb-3">
            <h5 className="fw-bold">Pengaturan Akun</h5>
          </div>
          <div
            className={`${style["account-setting-item"]}`}
            onClick={handleShow}
          >
            <p className="m-0 w-100">Ubah Password</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
          <div
            className={`${style["account-setting-item"]}`}
            onClick={() => {
              navigate("/editprofile");
            }}
          >
            <p className="m-0 w-100">Edit Profile</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={show} onHide={handleClose}>
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
                  newPasswordChange({
                    ...newPassword,
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
                onChange={(e) => {
                  newPasswordChange({
                    ...newPassword,
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
                  newPasswordChange({
                    ...newPassword,
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
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <>
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#f6a833",
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={changePasswordHandler}
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
