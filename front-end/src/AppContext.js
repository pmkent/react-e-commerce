import { createContext, useReducer } from "react";
import logger from "use-reducer-logger";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED } from "./types";

// export const ACTION = {
//     FETCH_REQUEST: 'fetch-request',
//     FETCH_SUCCESS: 'fetch-success',
//     FETCH_FAIL: 'fetch-fail'
// }

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
        // case ACTION.FETCH_REQUEST:
            return {...state, loading: true}; // keep current list and update only loading field
        case FETCH_SUCCESS:
        // case ACTION.FETCH_SUCCESS:
            return {...state, products: action.payload, loading: false}
        // case ACTION.FETCH_FAIL:
        case FETCH_FAILED:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
};

export const initialState = {
    products: [],
    loading: true,
    error: ''
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer( logger(reducer), initialState);

    return (
        <AppContext.Provider value={
            {
                products: state.products,
                loading: state.loading,
                error: state.error,
                dispatch
            }
        }>
            {props.children}
        </AppContext.Provider>
    );
};