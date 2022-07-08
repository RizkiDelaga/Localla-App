import { combineReducers } from "redux";
import { productReducer, detailProductReducer, productByCategoryReducer, productBySellerIdReducer } from './productReducer';
import { myProfileReducer, userProfilByIdeReducer } from "./ProfileReducer";

export default combineReducers({
    product: productReducer,
    detailProduct: detailProductReducer,
    productBySellerId: productBySellerIdReducer,
    productByCategory: productByCategoryReducer,
    myProfile: myProfileReducer,
    userProfileById: userProfilByIdeReducer,
});