import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
// import ProtectedRoute from 'src/routes/ProtectedRoute'
import HomePage from 'src/pages/HomePage'
import ProfilePage from 'src/pages/ProfilePage'
import SignupPage from 'src/pages/SignupPage'
import Blog from 'src/blog/Blog'
import SigninPage from 'src/pages/SigninPage'
import SearchPage from 'src/pages/SearchPage'
import ForgotPasswordPage from 'src/pages/ForgotPasswordPage'
import ResetPasswordPage from 'src/pages/ResetPasswordPage'
import OneTimePasscodePage from 'src/pages/OneTimePasscodePage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/forgot" element={<ForgotPasswordPage />} />
            <Route path="/reset" element={<ResetPasswordPage />} />
            <Route path="/otp" element={<OneTimePasscodePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/blog" element={<Blog />} />
        </>
    )
)

export default function Routes() {
    return <RouterProvider router={router} />
}
