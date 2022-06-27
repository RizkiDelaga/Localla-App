import { GET_PRODUCT } from '../types';

const initialState = {
    data: [],
    isLoading: true,
    error: null
}

const productReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case `${GET_PRODUCT}_LOADING`:
            return {
                ...state
            };
        case `${GET_PRODUCT}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${GET_PRODUCT}_ERROR`:
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

export default productReducer;