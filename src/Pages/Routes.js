import React, { useContext } from 'react'

import Frontend from './Frontend'
import Auth from './Auth'

import { Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Components/PrivateRoutes'
import { AuthContext } from './Context/AuthContext'

export default function Index() {
    const { state } = useContext(AuthContext)
    const {isAuthenticated} = state
    console.log("🚀 ~ file: Routes.js:12 ~ Index ~ isAuthenticated:", isAuthenticated)
    return (
        <>
            <Routes>
                <Route path='/*' element={<PrivateRoute Component={Frontend} />} />
                <Route path='/auth/*' element={!isAuthenticated? <Auth/> : <Navigate to='/'/> } />
            </Routes>
        </>
    )
}
