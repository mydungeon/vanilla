import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import NavLinksProps from './NavLinks.types'
import { navLinks } from './NavLinks.constants'
import './NavLinks.styles.scss'

function NavLink({ text, to }: { text: string; to: string }) {
    return (
        <Nav.Link className="fs-5 border-bottom border-primary">
            {text}
        </Nav.Link>
    )
}

export default function NavLinks({ children }: NavLinksProps) {
    return (
        <div className="navlinks" data-testid="navlinks">
            <Nav className="me-auto my-2 my-lg-0">
                {navLinks.map(({ text, to }) => (
                    <NavLink key={text} text={text} to={to} />
                ))}
            </Nav>
        </div>
    )
}
