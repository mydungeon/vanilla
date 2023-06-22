import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavLinks from 'src/features/NavLinks'

export default function NavMenu() {
    return (
        <Navbar.Collapse className="text-center">
            <NavLinks />
        </Navbar.Collapse>
    )
}
