import axios from "axios";
import {
    GET_PRODUCT, GET_DETAIL_PRODUCT, GET_PRODUCT_BY_SELLER_ID
} from "../types";

export const getProduct = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_PRODUCT}_LOADING`
        });

        // axios.get('https://6266738863e0f382568253d1.mockapi.io/api/custom-todo')
        // .then((res) => {
        //     console.log("data.. ", res);
        //     dispatch({
        //         type: `${GET_PRODUCT}_FULFILLED`,
        //         payload: res.data
        //     });
        // }).catch((err) => {
        //     dispatch({
        //         type: `${GET_PRODUCT}_ERROR`,
        //         error: err.message
        //     })
        // })

        axios({
            method: 'GET',
            url: 'https://localla-api.herokuapp.com/product/all'
        }).then((res) => {
            console.log("data.. ", res);
            dispatch({
                type: `${GET_PRODUCT}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            dispatch({
                type: `${GET_PRODUCT}_ERROR`,
                error: err.message
            })
        })
    }
}


export const getDetailProduct = (idProduct) => {
    return (dispatch) => {
        dispatch({
            type: `${GET_DETAIL_PRODUCT}_LOADING`
        });

        axios({
            method: 'GET',
            url: `https://localla-api.herokuapp.com/product/detail/${idProduct}`
        }).then((res) => {
            console.log("data.. ", res);
            dispatch({
                type: `${GET_DETAIL_PRODUCT}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            dispatch({
                type: `${GET_DETAIL_PRODUCT}_ERROR`,
                error: err.message
            })
        })
    }
}

export const getProductBySellerId = (idProduct) => {
    return (dispatch) => {
        dispatch({
            type: `${GET_PRODUCT_BY_SELLER_ID}_LOADING`
        });

        axios({
            method: 'GET',
            url: `https://localla-api.herokuapp.com/product/all`
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


export const getProductCategory = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_PRODUCT}_LOADING`
        });

        axios.get('https://6266738863e0f382568253d1.mockapi.io/api/custom-todo')
        .then((res) => {
            console.log("data.. ", res);
            dispatch({
                type: `${GET_PRODUCT}_FULFILLED`,
                payload: res.data
            });
        }).catch((err) => {
            dispatch({
                type: `${GET_PRODUCT}_ERROR`,
                error: err.message
            })
        })
    }
}