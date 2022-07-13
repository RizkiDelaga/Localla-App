import axios from "axios";
import {
    GET_MY_PROFILE,  GET_USER_PROFILE_BY_ID, 
} from "../types";

export const registerSeller = () => {
    return (dispatch) => {
        dispatch({
            type: `${GET_MY_PROFILE}_LOADING`
        });

        axios({
            method: 'GET',
            url: `https://localla-api.herokuapp.com/api/v1/user/profile`,
            headers: {                
                'authorization': `${localStorage.getItem('access_token')}`
            }
        }).then((res) => {
            console.log("data............. ", res.data.data);
            dispatch({
                type: `${GET_MY_PROFILE}_FULFILLED`,
                payload: res.data.data
            });
        }).catch((err) => {
            dispatch({
                type: `${GET_MY_PROFILE}_ERROR`,
                error: err.message
            })
        })
    }
}