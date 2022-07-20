import axios from "axios";
import {
    GET_ALL_TRANSACTION_FOR_SELLER,
    GET_ALL_MY_TRANSACTION,
    GET_TRANSACTION_BY_PRODUCT_ID,
    CREATE_TRANSACTION,
    UPDATE_TRANSACTION
} from "../types";

export const createTransaction = (bidPrice, productID) => {
    return (dispatch) => {
        dispatch({
            type: `${CREATE_TRANSACTION}_LOADING`
        });

        axios({
            method: 'POST',
            url: `https://localla-api.herokuapp.com/api/v1/transaction/${productID}`,
            data: {
                price: bidPrice
            },
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. transaction ", res);
            dispatch({
                type: `${CREATE_TRANSACTION}_FULFILLED`,
                payload: res.data.data
            });
            dispatch(getTransactionByProductID(productID))
        }).catch((err) => {
            console.log("err.. transaction ", err);
            dispatch({
                type: `${CREATE_TRANSACTION}_ERROR`,
                error: err.message
            })
        })
    }
}

export const updateTransaction = (transactionID, updateStatus) => {
    return (dispatch) => {
        dispatch({
            type: `${UPDATE_TRANSACTION}_LOADING`
        });

        axios({
            method: 'PUT',
            url: `https://localla-api.herokuapp.com/api/v1/transaction/update/${transactionID}`,
            data: updateStatus,
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. transaction ", res);
            dispatch({
                type: `${UPDATE_TRANSACTION}_FULFILLED`,
                payload: res.data.data
            });
            getAllTransactionForSeller();
            getAllMyTransaction();
        }).catch((err) => {
            console.log("err.. transaction ", err);
            dispatch({
                type: `${UPDATE_TRANSACTION}_ERROR`,
                error: err.message
            })
        })
    }
}


export const getAllTransactionForSeller = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_ALL_TRANSACTION_FOR_SELLER}_LOADING`
        });

        axios({
            method: 'GET',
            url: `https://localla-api.herokuapp.com/api/v1/transaction`,
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. transaction by id ", res.data.data);
            dispatch({
                type: `${GET_ALL_TRANSACTION_FOR_SELLER}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            console.log("err.. transaction by id", err);
            dispatch({
                type: `${GET_ALL_TRANSACTION_FOR_SELLER}_ERROR`,
                error: err.message
            })
        })
    }
}

export const getAllMyTransaction = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_ALL_MY_TRANSACTION}_LOADING`
        });

        axios({
            method: 'GET',
            url: `https://localla-api.herokuapp.com/api/v1/transaction/user`,
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. transaction by id ", res.data.data);
            dispatch({
                type: `${GET_ALL_MY_TRANSACTION}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            console.log("err.. transaction by id", err);
            dispatch({
                type: `${GET_ALL_MY_TRANSACTION}_ERROR`,
                error: err.message
            })
        })
    }
}

export const getTransactionByProductID = (productID) => {
    return (dispatch) => {
        dispatch({
            type: `${GET_TRANSACTION_BY_PRODUCT_ID}_LOADING`
        });

        axios({
            method: 'GET',
            url: `https://localla-api.herokuapp.com/api/v1/transaction/product/${productID}`,
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. transaction by id ", res.data.data);
            dispatch({
                type: `${GET_TRANSACTION_BY_PRODUCT_ID}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            console.log("err.. transaction by id", err);
            dispatch({
                type: `${GET_TRANSACTION_BY_PRODUCT_ID}_ERROR`,
                error: err.message
            })
        })
    }
}