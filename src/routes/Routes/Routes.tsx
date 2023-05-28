import React from 'react'
import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom'
import HomePage from 'src/pages/HomePage'
import ProfilePage from 'src/pages/ProfilePage'
import SignupPage from 'src/pages/SignupPage'
import Blog from 'src/blog/Blog'
import SigninPage from 'src/pages/SigninPage'
import SearchPage from 'src/pages/SearchPage'

export default function Routes() {
    return (
        <ReactRouterDomRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/blog" element={<Blog />} />
        </ReactRouterDomRoutes>
    )
}
