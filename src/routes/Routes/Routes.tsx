import React from 'react'
import { Routes as ReactRouterDomRoutes, Route } from 'react-router-dom'
import Home from 'src/pages/Home'

export default function Routes() {
    return (
        <ReactRouterDomRoutes>
            <Route path="/" element={<Home />} />
        </ReactRouterDomRoutes>
    )
}
