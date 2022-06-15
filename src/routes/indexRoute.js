import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
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

            {/* ---- Endpoint Testing ---- */}
        </Routes>
    </Fragment>
  );
}

export default IndexRoute;