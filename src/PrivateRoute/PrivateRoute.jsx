import React from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  )
}

export default PrivateRoute