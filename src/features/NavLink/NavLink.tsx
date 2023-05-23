import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import NavLinkProps from './NavLink.types'
import './NavLink.styles.scss'

export default function NavLink({ text, to }: NavLinkProps) {
    return (
        <div className="navlink" data-testid="navlink">
            <LinkContainer to={to}>
                <Nav.Link className="fs-5 border-bottom border-primary">
                    {text}
                </Nav.Link>
            </LinkContainer>
        </div>
    )
}
