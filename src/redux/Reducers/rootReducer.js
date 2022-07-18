import { combineReducers } from "redux";
import { productReducer, createProductReducer, editProductReducer, detailProductReducer, productByCategoryReducer, productBySellerIdReducer } from './productReducer';
import { myProfileReducer, userProfilByIdeReducer } from "./ProfileReducer";
import { createTransactionReducer, updateTransactionReducer, allTransactionForSellerReducer, myTransactionReducer, transactionByProductIDReducer } from "./TransactionReducer";

export default combineReducers({
    product: productReducer,
    createProduct : createProductReducer,
    editProduct: editProductReducer,
    detailProduct: detailProductReducer,
    productBySellerId: productBySellerIdReducer,
    productByCategory: productByCategoryReducer,
    myProfile: myProfileReducer,
    userProfileById: userProfilByIdeReducer,
    createTransaction: createTransactionReducer,
    updateTransaction: updateTransactionReducer,
    allTransactionForSeller: allTransactionForSellerReducer,
    myTransaction: myTransactionReducer,
    transactionByProductID: transactionByProductIDReducer,
});