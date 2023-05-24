import React from 'react'
import NavLogoProps from './NavLogo.types'
import { Navbar } from 'react-bootstrap'
import Logo from 'src/icons/Logo'

export default function NavLogo({ hasLogo }: NavLogoProps) {
    return (
        <Navbar.Brand className="ps-3">
            {hasLogo ? <Logo /> : null}
        </Navbar.Brand>
    )
}
