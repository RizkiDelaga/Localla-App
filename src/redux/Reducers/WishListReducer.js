import {
    UPDATE_WISHLIST, GET_MY_WISHLIST
} from "../types";

const initialState = {
    data: [],
    isLoading: true,
    error: []
}

export const updateWishListReducer = (state = initialState, action) => {
    const {
        type,
        payload,
        error
    } = action;

    switch (type) {
        case `${UPDATE_WISHLIST}_LOADING`:
            return {
                isLoading: true,
            };
        case `${UPDATE_WISHLIST}_FULFILLED`:
            return {
                ...state,
                data: payload,
                    isLoading: false
            };
        case `${UPDATE_WISHLIST}_ERROR`:
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

export const myWishListReducer = (state = initialState, action) => {
    const {
        type,
        payload,
        error
    } = action;

    switch (type) {
        case `${GET_MY_WISHLIST}_LOADING`:
            return {
                ...state
            };
        case `${GET_MY_WISHLIST}_FULFILLED`:
            return {
                ...state,
                data: payload,
                    isLoading: false
            };
        case `${GET_MY_WISHLIST}_ERROR`:
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