import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';

import { createContext, useContext, useEffect, useReducer } from 'react'

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products"

const initailState = {

    isLoading: false,

    isErrer: false,

    products: [],

    featureproducts: [],

}

const reduser = (state, action) => {

    switch (action.type) {

        case "SET_LOADING":

            return {

                ...state,

                isLoading: true,

            };
        case "API_ERROR":

            return {

                ...state,

                isLoading: false,

                isErrer: true,

            };
        case "SET_API_DATA":

            const featureData = action.payload.filter((curElem) => {
                return curElem.featured == true
            })

            return {

                ...state,

                isLoading: false,

                products: action.payload,

                featureproducts: featureData,

                isSingleLoading: false,

                singleproduct: {},

            };
        case "SET_LOADING":

            return {

                ...state,

                isLoading: true,

            };
        case "SET_SINGLE_LOADING":

            return {

                ...state,

                isSingleLoading: true,

            };
        case "SET_SINGLE_PRODUCT":

            return {

                ...state,

                isSingleLoading: false,

                singleproduct: action.payload,

            };
        case "SET_SINGLE_ERROR":

            return {

                ...state,

                isSingleLoading: false,

                isErrer: true,
            };

        default:
            return state;
    }
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reduser, initailState)
    useEffect(() => {
        getProducts(API);
    }, [])

    const getProducts = async (API) => {

        dispatch({ type: "SET_LOADING" })

        try {

            const respons = await axios.get(API);

            const products = await respons.data;

            dispatch({ type: "SET_API_DATA", payload: products });

        } catch (error) {

            dispatch({ type: "API_ERROR" })

        }

    }

    const getSingleProducts = async (url) => {

        dispatch({ type: "SET_SINGLE_LOADING" })

        try {

            const respons = await axios.get(url);

            const singleproduct = await respons.data;

            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproduct });

        } catch (error) {

            dispatch({ type: "SET_SINGLE_ERROR" })

        }

    }


    return (

        <AppContext.Provider value={{ ...state, getSingleProducts }}>

            {children}

        </AppContext.Provider>

    )

}

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useProductContext }
