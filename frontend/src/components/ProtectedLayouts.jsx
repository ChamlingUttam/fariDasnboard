import React from 'react'
import { useAuthStore } from '../stores/auth.store'
import { Navigate } from 'react-router-dom'

const ProtectedLayouts = ({children}) => {
  const {authUser} = useAuthStore()
  return authUser ? children : <Navigate to={'/login'} /> 
}

export default ProtectedLayouts

