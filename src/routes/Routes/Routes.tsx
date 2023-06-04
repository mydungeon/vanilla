import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import ProtectedRoute from '../ProtectedRoute'
import AdminPage from 'src/pages/AdminPage'
import Blog from 'src/blog/Blog'
import CreateMyPage from 'src/pages/CreateProfilePage'
import ForgotPasswordPage from 'src/pages/ForgotPasswordPage'
import HomePage from 'src/pages/HomePage'
import OneTimePasscodePage from 'src/pages/OneTimePasscodePage'
import ProfilePage from 'src/pages/ProfilePage'
import ResetPasswordPage from 'src/pages/ResetPasswordPage'
import SearchPage from 'src/pages/SearchPage'
import SigninPage from 'src/pages/SigninPage'
import SignupPage from 'src/pages/SignupPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/profile/create" element={<CreateMyPage />} />
            <Route path="/forgot" element={<ForgotPasswordPage />} />
            <Route path="/otp" element={<OneTimePasscodePage />} />
            <Route path="/reset" element={<ResetPasswordPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
        </>
    )
)

export default function Routes() {
    return <RouterProvider router={router} />
}
