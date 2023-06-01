import React from 'react'
import { Navigate } from 'react-router-dom'
import ProtectedRouteProps from './ProtectedRoute.types'
import { getUserFromLocalStorage } from 'src/app/App.utils'

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const user = getUserFromLocalStorage()

    return !user ? <Navigate to="/signin" replace /> : <>{children}</>
}
