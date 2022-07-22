import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import LandingPage from "./pages/LandingPage/LandingPage";
import InformasiPenawar from "./pages/InformasiPenawar/InformasiPenawar";
import IncomingProductTransactions from "./pages/IncomingProductTransactions/IncomingProductTransactions";
import IncomingAllProductTransactions from "./pages/IncomingAllProductTransactions/IncomingAllProductTransactions";
import DetailMyTransaction from "./pages/DetailMyTransaction/DetailMyTransaction";
import MyTransaction from "./pages/MyTransaction/MyTransaction";
import ProductPreview from "./pages/ProductPreview/ProductPreview";
import ProductForm from "./pages/ProductForm/ProductForm";
import ProductList from "./pages/ProductList/ProductList";
import WishList from "./pages/WishList/WishList";
import EditProfile from "./pages/EditProfile/EditProfile";
import RegisterSeller from "./pages/RegisterSeller/RegisterSeller";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {

  const HandleLoginSuccessfully = () => {
    if (localStorage.getItem("access_token")) {
        return <Navigate to={-1} replace />
    }
    return <Outlet />;
  }

  const ProtectedUserRoute = () => {
    if (!localStorage.getItem("access_token")) {
      return <Navigate to="/login" replace />
    }
    return <Outlet />;
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Provider store={store}>
        <Routes>
        <Route element={<HandleLoginSuccessfully />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<ProtectedUserRoute />}>
          {/* User Route */}
          <Route path="mystore" element={<RegisterSeller />} />
          <Route path="profile" element={<Profile />}/>
          <Route path='editprofile' element={<EditProfile />}/>
          <Route path='MyWishList' element={<WishList />}/>
          
          {/* Product Route */}
          <Route path='productlist' element={<ProductList />}/>
          <Route path='product/:productID/edit' element={<ProductForm />} />
          <Route path='product/addproduct' element={<ProductForm />}/>
          <Route path='product/preview' element={<ProductPreview />}/>

          {/* Transactions Route */}
          <Route path='MyTransaction' element={<MyTransaction />}/>
          <Route path='MyTransaction/detailtransaction' element={<DetailMyTransaction />}/>
          <Route path='product/transaction' element={<IncomingAllProductTransactions />}/>
          <Route path='product/transaction/:idproduct' element={<IncomingProductTransactions />}/>
          <Route path='product/transaction/:idproduct/:idtransaction' element={<InformasiPenawar />}/>
        </Route>

        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path='search/:key' element={<Search />}/>
        <Route path="profile/:id" element={<Profile />}/>
        <Route path='product/:id' element={<DetailProduct />}/>

        {/* Page Not Found Route */}
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
        </Provider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;