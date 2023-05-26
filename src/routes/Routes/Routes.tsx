import React from 'react'
import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom'
import HomePage from 'src/pages/Home'
import SignupPage from 'src/pages/Signup'
import Blog from 'src/blog/Blog'
// import Search from 'src/pages/Search'

export default function Routes() {
    return (
        <ReactRouterDomRoutes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="search" element={<Search />} /> */}
            <Route path="signup" element={<SignupPage />} />
            <Route path="blog" element={<Blog />} />
        </ReactRouterDomRoutes>
    )
}
