import { combineReducers } from "redux";
import { productReducer, detailProductReducer, productByCategoryReducer } from './productReducer';
import { productBySellerIdReducer } from './ProductSellerReducer';

export default combineReducers({
    product: productReducer,
    detailProduct: detailProductReducer,
    productBySellerId: productBySellerIdReducer,
    productByCategory: productByCategoryReducer
});