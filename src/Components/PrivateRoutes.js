import React, { useContext } from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Pages/Context/AuthContext'

export default function PrivateRoute({ Component }) {
  const { state } = useContext(AuthContext)
  const {isAuthenticated} = state
  console.log("🚀 ~ file: PrivateRoutes.js:9 ~ PrivateRoute ~ isAuthenticated:", isAuthenticated)
  const location = useLocation()
     
    if (!isAuthenticated) {
      return <Navigate to='/auth/login' state={{ from: location.pathname }} replace />
    }
  
    return (
    <>
        <Component />
    </>
    )
}
