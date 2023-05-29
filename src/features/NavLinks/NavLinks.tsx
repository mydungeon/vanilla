import React from 'react'
import { Nav } from 'react-bootstrap'
import AppLinks from './components/AppLinks'
import AuthLinks from './components/AuthLinks'

export default function NavLinks() {
    return (
        <div className="navlinks" data-testid="navlinks">
            <Nav className="me-auto my-2 my-lg-0 mb-0">
                <AppLinks />
                <AuthLinks />
            </Nav>
        </div>
    )
}
