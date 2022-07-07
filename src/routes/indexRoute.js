import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import OfferList from '../pages/OfferList/OfferList';
import EditProfile from "../pages/EditProfile/EditProfile";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductList from '../pages/ProductList/ProductList';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import NotFound from '../pages/NotFound/NotFound';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';

function IndexRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="Profile" element={<Profile />}>
          <Route path=":id" element={<Profile />}/>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='editprofile' element={<EditProfile />}/>
        <Route path='addproduct' element={<AddProduct />}/>
        <Route path='productlist' element={<ProductList />}/>
        <Route path='product/:id' element={<DetailProduct />}/>
        <Route path='offerlist' element={<OfferList />}/>
        <Route path='search/:key' element={<Search />}/>
        <Route path='*' element={<NotFound />}/>
        
      </Routes>
    </Fragment>
  );
}

export default IndexRoute;
