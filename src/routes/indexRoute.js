import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import OfferList from '../pages/OfferList/OfferList';
import RadioButtonsGroup from "../components/RadioButtonsGroup/RadioButtonsGroup";
import EditProfile from "../pages/EditProfile/EditProfile";
import InfoProfile from '../pages/InfoProfile/InfoProfile';
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductList from '../pages/ProductList/ProductList';
import DetailCard from '../components/DetailCard/DetailCard';

function IndexRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="infoprofile" element={<InfoProfile/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='editprofile' element={<EditProfile />}/>
        <Route path='addproduct' element={<AddProduct />}/>
        <Route path='ProductList' element={<ProductList />}/>
        <Route path='DetailCard' element={<DetailCard />}/>

        {/* ---- Endpoint Testing ---- */}
          
          <Route path='daftarpenawar' element={<OfferList />}/>
          <Route path='radiobutton' element={<RadioButtonsGroup />}/>
          <Route path='navbar' element={<Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} transparentFade={true} />}/>

        {/* ---- Endpoint Testing ---- */}
        </Routes>
    </Fragment>
  );
}

export default IndexRoute;
