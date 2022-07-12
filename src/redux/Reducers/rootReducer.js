import { combineReducers } from "redux";
import { productReducer, createProductReducer, editProductReducer, detailProductReducer, productByCategoryReducer, productBySellerIdReducer } from './productReducer';
import { myProfileReducer, userProfilByIdeReducer } from "./ProfileReducer";
import { productTransactionReducer, productTransactionByIDReducer } from "./TransactionReducer";

export default combineReducers({
    product: productReducer,
    createProduct : createProductReducer,
    editProduct: editProductReducer,
    detailProduct: detailProductReducer,
    productBySellerId: productBySellerIdReducer,
    productByCategory: productByCategoryReducer,
    myProfile: myProfileReducer,
    userProfileById: userProfilByIdeReducer,
    productTransaction: productTransactionReducer,
    productTransactionByID: productTransactionByIDReducer,
});