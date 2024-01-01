import React, { useReducer, useEffect, createContext, useContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { toast } from 'react-toastify'
export const AuthContext = createContext()

const intialstate = { isAuthenticated: false }

const reducer = ((state, action) => {

    switch (action.type) {
        case "LOGIN":
            return { isAuthenticated: true }
        case "LOGOUT":
            return { isAuthenticated: false }
        default:
            return state
    }

})

export  const AuthContextProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, intialstate)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("🚀 ~ file: AuthContext.js:28 ~ onAuthStateChanged ~ user:", user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
              dispatch({type:"LOGIN", payload:user})
                // ...
            } else {
            
            }
        });

    }, [])

    return (
        <>
            <AuthContext.Provider value={{ state, dispatch }}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}
