import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

interface PrivateRouteProps {
  redirectPath?: string
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ redirectPath = '/auth' }) => {
  const { currentUserData } = useContext(AuthContext)
  const location = useLocation()

  if (!currentUserData) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />
  }

  return <Outlet />
}