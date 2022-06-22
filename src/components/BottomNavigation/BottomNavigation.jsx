import React from "react";
import home from "../../assets/icons/fi_home.png";
import bell from "../../assets/icons/fi_bell.png";
import plus from "../../assets/icons/fi_plus-circle.png";
import list from "../../assets/icons/fi_list.png";
import user from "../../assets/icons/fi_user.png";
import style from "./BottomNavigation.module.css";

const BottomNavigation = () => {
  const logo = [
    {
      img: home,
      text: "Home",
    },
    {
      img: bell,
      text: "Notifikasi",
    },
    {
      img: plus,
      text: "Jual",
    },
    {
      img: list,
      text: "Daftar Jual",
    },
    {
      img: user,
      text: "Akun",
    },
  ];

  return (
      <section className={style['bottom-navigation']} >
      {logo.map((item) => {
        return (
          <div className={`mx-auto py-2 d-flex flex-column justify-content-center align-items-center text-center ${style['btn-menu']}`}>
            <img src={item.img} alt="" />
            <h6 className={` m-0 ${style['text']}`}>{item.text}</h6>
          </div>
        )
        })}
      </section>
  );
};

export default BottomNavigation;
