
import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { firestore } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const AppContext = createContext();


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
       
      
      

        default:
            return state;
    }
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reduser, initailState)
    const [Product, setproduct] = useState([])
 
    useEffect(() => {
        fetchDoc()
    }, [])
    const fetchDoc = async () => {
        dispatch({ type: "SET_LOADING" })
        try{
            let products = []
            const querySnapshot = await getDocs(collection(firestore, "Products"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                let data = doc.data()
                products.push(data)
            });
            setproduct(products)
            dispatch({ type: "SET_API_DATA", payload: products });
        }catch(err){
            dispatch({ type: "API_ERROR" })
        }
    }
    

    


    return (

        <AppContext.Provider value={{ ...state, Product }}>

            {children}

        </AppContext.Provider>

    )

}

const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useProductContext }
