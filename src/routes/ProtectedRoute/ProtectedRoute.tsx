import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ProtectedRouteProps from './ProtectedRoute.types'
import { getUserFromLocalStorage } from 'src/app/App.utils'

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const user = getUserFromLocalStorage()
    if (!user) {
        return <Navigate to="/signin" replace />
    }
    return children ? <>{children}</> : <Outlet />
}
