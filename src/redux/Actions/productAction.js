import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    GET_PRODUCT, CREATE_PRODUCT, GET_DETAIL_PRODUCT, GET_PRODUCT_BY_KEY
} from "../types";

export const getProduct = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_PRODUCT}_LOADING`
        });

        axios({
            method: 'GET',
            url: 'https://localla-api.herokuapp.com/api/v1/product'
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

export const createProduct = (dataProduct) => {
    return (dispatch) => {
        dispatch({
            type: `${CREATE_PRODUCT}_LOADING`
        });

        axios({
            method: 'POST',
            url: 'https://localla-api.herokuapp.com/api/v1/product/',
            data: dataProduct,
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. ", res);
            dispatch({
                type: `${CREATE_PRODUCT}_FULFILLED`,
                payload: res.data
            });
            dispatch(getProduct());
        }).catch((err) => {
            dispatch({
                type: `${CREATE_PRODUCT}_ERROR`,
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
            url: `https://localla-api.herokuapp.com/api/v1/product/${idProduct}`
        }).then((res) => {
            console.log("data.. ", res.data);
            dispatch({
                type: `${GET_DETAIL_PRODUCT}_FULFILLED`,
                payload: res.data.data
            })
        }).catch((err) => {
            dispatch({
                type: `${GET_DETAIL_PRODUCT}_ERROR`,
                error: err.message
            })
        })
    }
}


export const getProductByKey = (key) => {
    return (dispatch) => {
        dispatch({
            type: `${GET_PRODUCT_BY_KEY}_LOADING`
        });

        axios.get(`https://localla-api.herokuapp.com/api/v1/product?q=${key}`)
        .then((res) => {
            console.log("data.. ", res);
            dispatch({
                type: `${GET_PRODUCT_BY_KEY}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            dispatch({
                type: `${GET_PRODUCT_BY_KEY}_ERROR`,
                error: err.message
            })
        })
    }
}