import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import OfferList from '../pages/OfferList/OfferList';
import GroupButton from "../components/ButtonGroup/ButtonGroup";
import EditProfile from "../pages/EditProfile/EditProfile";
import AddProduct from "../pages/AddProduct/AddProduct";

function IndexRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="editprofile" element={<EditProfile />}/>
        <Route path="addproduct" element={<AddProduct />}/>


        {/* ---- Endpoint Testing ---- */}
          
          <Route path="daftarpenawar" element={<OfferList />}/>
          <Route path="radiobutton" element={<GroupButton />}/>
          <Route path="navbar" element={<Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} transparentFade={true} />}/>

        {/* ---- Endpoint Testing ---- */}
        </Routes>
    </Fragment>
  );
}

export default IndexRoute;
