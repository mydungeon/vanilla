import React from 'react'
import { Nav } from 'react-bootstrap'
import { navLinks } from './NavLinks.constants'
import './NavLinks.styles.scss'
import NavLink from 'src/features/NavLink'

export default function NavLinks() {
    return (
        <div className="navlinks" data-testid="navlinks">
            <Nav className="me-auto my-2 my-lg-0 mb-0">
                {navLinks.map(({ text, to }) => (
                    <NavLink key={text} text={text} to={to} />
                ))}
            </Nav>
        </div>
    )
}
