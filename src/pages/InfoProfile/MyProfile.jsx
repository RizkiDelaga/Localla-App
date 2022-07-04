import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Default_PP_Icon from "../../assets/icon/Default_PP_Icon.png";
import edit from "../../assets/icons/fi_edit-3.png";
import setting from "../../assets/icons/fi_settings.png";
import exit from "../../assets/icons/fi_log-out.png";
import style from "./MyProfile.module.css";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Container
        fluid
        className={`d-flex justify-content-center flex-column `}
        style={{ height: "100vh" }}
      >
        <section style={{ width: "100%", padding: "0 16px 100px" }}>
          <div className="d-flex justify-content-center pb-5">
            <div className={`${style["personal-photo"]}`}>
              <img
                src={Default_PP_Icon}
                alt=""
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="upload-photo"></div>
          </div>
          <div className={style["btn-holder"]} onClick={() => {navigate("/editprofile")}}>
            <img src={edit} alt="" />
            <h6 className={`ms-3 mb-0`}>Ubah Akun</h6>
          </div>
          <div className={style["btn-holder"]}>
            <img src={setting} alt="" />
            <h6 className={`ms-3 mb-0`}>Pengaturan Akun</h6>
          </div>
          <div className={style["btn-holder"]} onClick={() => {
            navigate("/")
            localStorage.removeItem("access_token")
            }}>
            <img src={exit} alt="" />
            <h6 className={`ms-3 mb-0`}>Keluar</h6>
          </div>
          <div className={style.version}>
            <p className={style["version-text"]}>Version 1.0.0</p>
          </div>
        </section>
      </Container>
      <BottomNavigation />
    </Fragment>
  );
};

export default MyProfile;
