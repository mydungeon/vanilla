import React from 'react'
import NavMenuProps from './NavMenu.types'
import { Navbar } from 'react-bootstrap'
import NavLinks from 'src/features/NavLinks'

export default function NavMenu({ isToggled }: NavMenuProps) {
    return (
        <Navbar.Collapse id="myCollapse" in={isToggled}>
            <NavLinks />
        </Navbar.Collapse>
    )
}
