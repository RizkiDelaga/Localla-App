import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import OfferList from '../pages/OfferList/OfferList';

function IndexRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/daftarpenawar' element={<OfferList />}/>


        {/* ---- Endpoint Testing ---- */}

          <Route path='/navbar' element={<Navbar logo={true} search={true} mobileMenu={true} backButton={true} login={false} desktopMenu={true} normalTitle='Lanjutkan Pembayaran' largeTitle='Nyoba ajah' />}/>
        
        {/* ---- Endpoint Testing ---- */}
      </Routes>
    </Fragment>
  );
}

export default IndexRoute;
