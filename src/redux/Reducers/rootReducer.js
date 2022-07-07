import { combineReducers } from "redux";
import { productReducer, detailProductReducer, productByCategoryReducer } from './productReducer';
import { productBySellerIdReducer } from './ProductSellerReducer';
import { myProfileReducer, userProfilByIdeReducer } from "./ProfileReducer";

export default combineReducers({
    product: productReducer,
    detailProduct: detailProductReducer,
    productBySellerId: productBySellerIdReducer,
    productByCategory: productByCategoryReducer,
    myProfile: myProfileReducer,
    userProfileById: userProfilByIdeReducer,
});