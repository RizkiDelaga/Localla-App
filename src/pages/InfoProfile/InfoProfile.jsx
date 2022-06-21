import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Default_PP_Icon from "../../assets/icon/Default_PP_Icon.png";
import edit from "../../assets/icons/fi_edit-3.png";
import setting from "../../assets/icons/fi_settings.png";
import exit from "../../assets/icons/fi_log-out.png";
import styles from "./InfoProfile.module.css";
import Footer from "../../components/Footer/Footer";

const InfoProfile = () => {
  return (
    <Fragment>
      <Container
        fluid
        className={`d-flex justify-content-center flex-column `}
        style={{ height: "100vh" }}
      >
        <section style={{ width: "100%", padding: "0 16px 100px" }}>
          <div className="d-flex justify-content-center pb-5">
            <div className={`${styles["personal-photo"]}`}>
              <img
                src={Default_PP_Icon}
                alt=""
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="upload-photo"></div>
          </div>
          <div className={styles["btn-holder"]}>
            <img src={edit} alt="" />
            <h6 className={styles["btn-logo1"]}>Ubah Akun</h6>
          </div>
          <div className={styles["btn-holder"]}>
            <img src={setting} alt="" />
            <h6 className={styles["btn-logo2"]}>Pengaturan Akun</h6>
          </div>
          <div className={styles["btn-holder"]}>
            <img src={exit} alt="" />
            <h6 className={styles["btn-logo3"]}>Keluar</h6>
          </div>
          <div className={styles.version}>
            <p className={styles["version-text"]}>Version 1.0.0</p>
          </div>
        </section>
        <Footer />
      </Container>
    </Fragment>
  );
};

export default InfoProfile;
