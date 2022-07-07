import { GET_MY_PROFILE,  GET_USER_PROFILE_BY_ID  } from '../types';

const initialState = {
    data: [],
    isLoading: true,
    error: null
}

export const myProfileReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {

        case `${GET_MY_PROFILE}_LOADING`:
            return {
                ...state
            };
        case `${GET_MY_PROFILE}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${GET_MY_PROFILE}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error
            };
                    
        default:
            return {
                ...state
            }
    }
};

export const userProfilByIdeReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {

        case `${GET_USER_PROFILE_BY_ID}_LOADING`:
            return {
                ...state
            };
        case `${GET_USER_PROFILE_BY_ID}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${GET_USER_PROFILE_BY_ID}_ERROR`:
            return {
                ...state,
                isLoading: false,
                error: error
            };
                    
        default:
            return {
                ...state
            }
    }
};