import {
    CREATE_TRANSACTION, GET_PRODUCT_TRANSACTION_BY_ID
} from '../types';

const initialState = {
    data: [],
    isLoading: true,
    error: []
}

export const productTransactionReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        // case `${GET_PRODUCT}_LOADING`:
        //     return {
        //         ...state
        //     };
        // case `${GET_PRODUCT}_FULFILLED`:
        //     return {
        //         ...state,
        //         data: payload,
        //         isLoading: false
        //     };
        // case `${GET_PRODUCT}_ERROR`:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: error
        //     };

        case `${CREATE_TRANSACTION}_LOADING`:
            return {
                ...state,
            };
        case `${CREATE_TRANSACTION}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${CREATE_TRANSACTION}_ERROR`:
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

export const productTransactionByIDReducer = (state = initialState, action) => {
    const { type, payload, error } = action;

    switch (type) {
        case `${GET_PRODUCT_TRANSACTION_BY_ID}_LOADING`:
            return {
                ...state
            };
        case `${GET_PRODUCT_TRANSACTION_BY_ID}_FULFILLED`:
            return {
                ...state,
                data: payload,
                isLoading: false
            };
        case `${GET_PRODUCT_TRANSACTION_BY_ID}_ERROR`:
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