import {
    GET_ALL_TRANSACTION_FOR_SELLER,
    GET_ALL_MY_TRANSACTION,
    GET_TRANSACTION_BY_PRODUCT_ID,
    CREATE_TRANSACTION,
    UPDATE_TRANSACTION
} from '../types';

const initialState = {
    data: [],
    isLoading: true,
    error: []
}

export const createTransactionReducer = (state = initialState, action) => {
    const {
        type,
        payload,
        error
    } = action;

    switch (type) {
        case `${CREATE_TRANSACTION}_LOADING`:
            return {
                isLoading: true,
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

export const updateTransactionReducer = (state = initialState, action) => {
    const {
        type,
        payload,
        error
    } = action;

    switch (type) {
        case `${UPDATE_TRANSACTION}_LOADING`:
            return {
                ...state,
            };
        case `${UPDATE_TRANSACTION}_FULFILLED`:
            return {
                ...state,
                data: payload,
                    isLoading: false
            };
        case `${UPDATE_TRANSACTION}_ERROR`:
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

export const allTransactionForSellerReducer = (state = initialState, action) => {
    const {
        type,
        payload,
        error
    } = action;

    switch (type) {
        case `${GET_ALL_TRANSACTION_FOR_SELLER}_LOADING`:
            return {
                ...state
            };
        case `${GET_ALL_TRANSACTION_FOR_SELLER}_FULFILLED`:
            return {
                ...state,
                data: payload,
                    isLoading: false
            };
        case `${GET_ALL_TRANSACTION_FOR_SELLER}_ERROR`:
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

export const myTransactionReducer = (state = initialState, action) => {
    const {
        type,
        payload,
        error
    } = action;

    switch (type) {
        case `${GET_ALL_MY_TRANSACTION}_LOADING`:
            return {
                ...state
            };
        case `${GET_ALL_MY_TRANSACTION}_FULFILLED`:
            return {
                ...state,
                data: payload,
                    isLoading: false
            };
        case `${GET_ALL_MY_TRANSACTION}_ERROR`:
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


export const transactionByProductIDReducer = (state = initialState, action) => {
    const {
        type,
        payload,
        error
    } = action;

    switch (type) {
        case `${GET_TRANSACTION_BY_PRODUCT_ID}_LOADING`:
            return {
                ...state,
            };
        case `${GET_TRANSACTION_BY_PRODUCT_ID}_FULFILLED`:
            return {
                ...state,
                data: payload,
                    isLoading: false
            };
        case `${GET_TRANSACTION_BY_PRODUCT_ID}_ERROR`:
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