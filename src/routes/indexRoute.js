import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import OfferList from '../pages/OfferList/OfferList';
import EditProfile from "../pages/EditProfile/EditProfile";
import MyProfile from '../pages/InfoProfile/MyProfile';
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductList from '../pages/ProductList/ProductList';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import NotFound from '../pages/NotFound/NotFound';

function IndexRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="myprofile" element={<MyProfile />}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='editprofile' element={<EditProfile />}/>
        <Route path='addproduct' element={<AddProduct />}/>
        <Route path='productlist' element={<ProductList />}/>
        <Route path='product/:id' element={<DetailProduct />}/>
        <Route path='offerlist' element={<OfferList />}/>
        <Route path='*' element={<NotFound />}/>
        
      </Routes>
    </Fragment>
  );
}

export default IndexRoute;
