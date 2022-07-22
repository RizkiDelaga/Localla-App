import axios from "axios";
import {
    UPDATE_WISHLIST, GET_MY_WISHLIST
} from "../types";

export const updateWishList = (productID) => {
    return (dispatch) => {
        dispatch({
            type: `${UPDATE_WISHLIST}_LOADING`
        });

        axios({
            method: 'POST',
            url: `https://localla-api.herokuapp.com/api/v1/product/wishlist/${productID}`,
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. transaction ", res);
            dispatch({
                type: `${UPDATE_WISHLIST}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            console.log("err.. transaction ", err);
            dispatch({
                type: `${UPDATE_WISHLIST}_ERROR`,
                error: err.message
            })
        })
    }
}

export const getMyWishList = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_MY_WISHLIST}_LOADING`
        });

        axios({
            method: 'GET',
            url: `https://localla-api.herokuapp.com/api/v1/user/wishlist`,
            headers: {
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data.. transaction ", res);
            dispatch({
                type: `${GET_MY_WISHLIST}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            console.log("err.. transaction ", err);
            dispatch({
                type: `${GET_MY_WISHLIST}_ERROR`,
                error: err.message
            })
        })
    }
}