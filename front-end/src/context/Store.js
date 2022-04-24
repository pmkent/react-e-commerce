import { createContext, useReducer } from 'react';
import { ADD_CART_ITEM } from '../types';

export const Store = createContext();

const initialState = {
    cart: {
        cartItems: [],
    }
};

function reducer(state, action) {
    switch (action.type) {
        // case 'ADD_CART_ITEM':
        case ADD_CART_ITEM:
            // Add to cart
            return {
                ...state,
                cart: { ...state.cart, cartItems: [...state.cart.cartItems, action.payload]}
            }
        default:
            return state;
    }
}

export function StoreProvider(props) {  // higher-order component (HOC) higher order function
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Store.Provider value={value} > {props.children} </Store.Provider>
}