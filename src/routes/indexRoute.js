import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import OfferList from '../pages/OfferList/OfferList';
import EditProfile from "../pages/EditProfile/EditProfile";
// import AddProduct from "../pages/ProductForm/AddProduct";
import ProductList from '../pages/ProductList/ProductList';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Profile from '../pages/Profile/Profile';
import Search from '../pages/Search/Search';
import RegisterSeller from '../pages/RegisterSeller/RegisterSeller';
import MyTransaction from '../pages/MyTransaction/MyTransaction';
import InformasiPenawar from '../pages/InformasiPenawar/InformasiPenawar';
import DetailMyTransaction from '../pages/DetailMyTransaction/DetailMyTransaction';
import ProductPreview from '../pages/ProductPreview/ProductPreview';
import ProductForm from '../pages/ProductForm/ProductForm';
import WishList from '../pages/WishList/WishList';
import IncomingProductTransactions from '../pages/IncomingProductTransactions/IncomingProductTransactions';

function IndexRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="mystore" element={<RegisterSeller />} />

        {/* User Route */}
        {/* :id */}
        <Route exact path="profile" element={<Profile />}>
          <Route path=":id" element={<Profile />}/>
        </Route>
        <Route path='editprofile' element={<EditProfile />}/>
        <Route path='productlist' element={<ProductList />}/>
        {/* <Route path='offerlist' element={<OfferList />}/> */}
        <Route path='MyWishList' element={<WishList />}/>
        <Route path='MyTransaction' element={<MyTransaction />}/>
        <Route path='MyTransaction/detailtransaction' element={<DetailMyTransaction />}/>
        
        {/* Product Route */}
        <Route path='product/preview' element={<ProductPreview />}/>
        <Route path='product/:id' element={<DetailProduct />}/>
        <Route path='product/transaction' element={<OfferList />}/>
        <Route path='product/transaction/:idproduct' element={<IncomingProductTransactions />}/>
        <Route path='product/transaction/:idproduct/:idtransaction' element={<InformasiPenawar />}/>
        <Route path='product/:productID/edit' element={<ProductForm />} />
        <Route path='product/addproduct' element={<ProductForm />}/>
        <Route path='search/:key' element={<Search />}/>

        <Route path='*' element={<PageNotFound />}/>
        
      </Routes>
    </Fragment>
  );
}

export default IndexRoute;
