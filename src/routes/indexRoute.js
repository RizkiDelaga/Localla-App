import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import LandingPage from '../pages/LandingPage/LandingPage';
import OfferList from '../pages/OfferList/OfferList';

function IndexRoute() {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/daftarpenawar' element={<OfferList />}/>


            {/* ---- Endpoint Testing ---- */}

            {/* <Route path='/exampletesting' element={<ExampleTesting />}/> */}
            <Route path='/navbar' element={<Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} transparentFade={true} />}/>


            {/* ---- Endpoint Testing ---- */}
        </Routes>
    </Fragment>
  );
}

export default IndexRoute;