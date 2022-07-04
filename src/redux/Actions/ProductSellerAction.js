import axios from "axios";
import {
    GET_PRODUCT_BY_SELLER_ID, 
} from "../types";

export const getProductBySellerId = (idSeller) => {
    return (dispatch) => {
        dispatch({
            type: `${GET_PRODUCT_BY_SELLER_ID}_LOADING`
        });

        axios({
            method: 'GET',
            url: `https://localla-api.herokuapp.com/api/v1/product/seller/${idSeller}`
        }).then((res) => {
            console.log("data............. ", res.data.data);
            dispatch({
                type: `${GET_PRODUCT_BY_SELLER_ID}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            dispatch({
                type: `${GET_PRODUCT_BY_SELLER_ID}_ERROR`,
                error: err.message
            })
        })
    }
}