import axios from "axios";
import {
    GET_PRODUCT
} from "../types";

export const getProduct = () => {
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

        // axios({
        //     method: 'GET',
        //     url: 'https://localla-api.herokuapp.com/product/all'
        // }).then((res) => {
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
    }
}