import { GET_PRODUCT_BY_SELLER_ID,  } from '../types';

const initialState = {
    data: [],
    isLoading: true,
    error: null
}

export const productBySellerIdReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {

        case `${GET_PRODUCT_BY_SELLER_ID}_LOADING`:
            return {
                ...state
            };
        case `${GET_PRODUCT_BY_SELLER_ID}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${GET_PRODUCT_BY_SELLER_ID}_ERROR`:
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