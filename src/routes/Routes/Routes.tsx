import React from 'react'
import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom'
// import ProtectedRoute from 'src/routes/ProtectedRoute'
import HomePage from 'src/pages/HomePage'
import ProfilePage from 'src/pages/ProfilePage'
import SignupPage from 'src/pages/SignupPage'
import Blog from 'src/blog/Blog'
import SigninPage from 'src/pages/SigninPage'
import SearchPage from 'src/pages/SearchPage'
import ForgotPasswordPage from 'src/pages/ForgotPasswordPage'

export default function Routes() {
    return (
        <ReactRouterDomRoutes>
            <Route path="/" element={<HomePage />} />
            {/* TODO: add protected routes  */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="/forgot" element={<ForgotPasswordPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/blog" element={<Blog />} />
        </ReactRouterDomRoutes>
    )
}
