import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initailstate = {
    cart: [],
    totalitem: "",
    total_amount: "",
    shoping_fee: 5000,

}

const reducer = (state, action) => {
    switch (action) {
        case "ADD_TO_CART":

            let CartProduct;
            CartProduct = {
                
            }

            return {
                cart: []
            }



        default:
            return state;
    }
}

export const CartContextProvider = ({ props }) => {

    const [state, dispatch] = useReducer(reducer, initailstate)

    const addtocart = (product) => {
        dispatch({ type: "ADD_TO_CART", payload: product })

    }

    return <CartContext.Provider value={{ ...state, addtocart }}>
        {props.children}
    </CartContext.Provider>
}