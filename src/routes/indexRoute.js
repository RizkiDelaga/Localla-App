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
        </Routes>
    </Fragment>
  );
}

export default IndexRoute;