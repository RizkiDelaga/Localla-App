import { GET_PRODUCT, CREATE_PRODUCT, GET_DETAIL_PRODUCT, GET_PRODUCT_BY_KEY } from '../types';

const initialState = {
    data: [],
    isLoading: true,
    error: null
}

export const productReducer = (state = initialState, action) => {
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

        case `${CREATE_PRODUCT}_LOADING`:
            return {
                ...state,
            };
        case `${CREATE_PRODUCT}_FULFILLED`:
            return {
                ...state,
                isLoading: false
            };
        case `${CREATE_PRODUCT}_ERROR`:
            return {
                ...state,
                isLoading: false,
            };
                    
        default:
            return {
                ...state
            }
    }
};

export const detailProductReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {

        case `${GET_DETAIL_PRODUCT}_LOADING`:
            return {
                ...state
            };
        case `${GET_DETAIL_PRODUCT}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${GET_DETAIL_PRODUCT}_ERROR`:
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

export const productByCategoryReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {

        case `${GET_PRODUCT_BY_KEY}_LOADING`:
            return {
                ...state
            };
        case `${GET_PRODUCT_BY_KEY}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${GET_PRODUCT_BY_KEY}_ERROR`:
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