import React from 'react'
import NavLogoProps from './NavLogo.types'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from 'src/icons/Logo'

export default function NavLogo({ hasLogo }: NavLogoProps) {
    return (
        <Navbar.Brand className="ps-3">
            {hasLogo ? (
                <LinkContainer to="/">
                    <Nav.Link>
                        <Logo classNames="header" />
                    </Nav.Link>
                </LinkContainer>
            ) : null}
        </Navbar.Brand>
    )
}
