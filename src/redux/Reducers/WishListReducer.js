import {
    UPDATE_WISHLIST
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