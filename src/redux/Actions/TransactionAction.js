import axios from "axios";
import {
    CREATE_TRANSACTION, GET_PRODUCT_TRANSACTION_BY_ID
} from "../types";

export const createProductTransaction = (bidPrice, productID) => {
    return (dispatch) => {
        dispatch({
            type: `${CREATE_TRANSACTION}_LOADING`
        });

        axios({
            method: 'POST',
            url: `https://localla-api.herokuapp.com/api/v1/transaction/${productID}`,
            data: { price: bidPrice },
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. transaction ", res);
            dispatch({
                type: `${CREATE_TRANSACTION}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            console.log("err.. transaction ", err);
            dispatch({
                type: `${CREATE_TRANSACTION}_ERROR`,
                error: err.message
            })
        })
    }
}


export const getProductTransactionByID = (productID) => {
    return (dispatch) => {
        dispatch({
            type: `${GET_PRODUCT_TRANSACTION_BY_ID}_LOADING`
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
                type: `${GET_PRODUCT_TRANSACTION_BY_ID}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            console.log("err.. transaction by id", err);
            dispatch({
                type: `${GET_PRODUCT_TRANSACTION_BY_ID}_ERROR`,
                error: err.message
            })
        })
    }
}