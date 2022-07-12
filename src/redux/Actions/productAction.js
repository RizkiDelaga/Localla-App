import axios from "axios";
import {
    GET_PRODUCT,
    CREATE_PRODUCT,
    DETELE_PRODUCT,
    GET_DETAIL_PRODUCT,
    GET_PRODUCT_BY_KEY,
    GET_PRODUCT_BY_SELLER_ID,
    EDIT_PRODUCT
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
            console.log("data.. create", res);
            dispatch({
                type: `${CREATE_PRODUCT}_FULFILLED`,
                payload: res
            });
        }).catch((err) => {
            console.log("err.. create", err);
            dispatch({
                type: `${CREATE_PRODUCT}_ERROR`,
                error: err
            })
        })
    }
}

export const editProduct = (productID, dataProduct) => {

    return (dispatch) => {
        dispatch({
            type: `${EDIT_PRODUCT}_LOADING`
        });

        axios({
            method: 'PUT',
            url: `https://localla-api.herokuapp.com/api/v1/product/${productID}`,
            data: dataProduct,
            headers: {
                'content-type': 'multipart/form-data',
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. create", res);
            dispatch({
                type: `${EDIT_PRODUCT}_FULFILLED`,
                payload: res
            });
            dispatch(getProduct());
        }).catch((err) => {
            console.log("err.. create", err);
            dispatch({
                type: `${EDIT_PRODUCT}_ERROR`,
                error: err
            })
        })
    }
}

export const deleteProduct = (idProduct) => {
    return (dispatch) => {
        dispatch({
            type: `${DETELE_PRODUCT}_LOADING`
        });

        axios({
            method: 'DELETE',
            url: `https://localla-api.herokuapp.com/api/v1/product/${idProduct}`,
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. delete ", res);
            dispatch({
                type: `${DETELE_PRODUCT}_FULFILLED`,
            });
        }).catch((err) => {
            console.log("error.. delete ", err);
            dispatch({
                type: `${DETELE_PRODUCT}_ERROR`,
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
            console.log("error.. ", err);
            dispatch({
                type: `${GET_DETAIL_PRODUCT}_ERROR`,
                error: err.request
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