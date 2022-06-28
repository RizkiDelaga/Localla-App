import { combineReducers } from "redux";
import { productReducer, detailProductReducer, productBySellerIdReducer } from './productReducer';

export default combineReducers({
    product: productReducer,
    detailProduct: detailProductReducer,
    productBySellerId: productBySellerIdReducer
});