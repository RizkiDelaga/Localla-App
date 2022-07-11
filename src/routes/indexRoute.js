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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* User Route */}
        {/* :id */}
        <Route exact path="profile" element={<Profile />}>
          <Route path=":id" element={<Profile />}/>
        </Route>
        <Route path='editprofile' element={<EditProfile />}/>
        <Route path='productlist' element={<ProductList />}/>
        <Route path='offerlist' element={<OfferList />}/>

        {/* Product Route */}
        <Route path='product/:id' element={<DetailProduct />}/>
        <Route path='product/:productID/edit' element={<AddProduct />} />
        <Route path='product/addproduct' element={<AddProduct />}/>
        <Route path='search/:key' element={<Search />}/>

        <Route path='*' element={<NotFound />}/>
        
      </Routes>
    </Fragment>
  );
}

export default IndexRoute;
