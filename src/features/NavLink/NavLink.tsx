import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import NavLinkProps from './NavLink.types'

export default function NavLink({ hasBorder, text, to }: NavLinkProps) {
    return (
        <div className="navlink" data-testid="navlink">
            <LinkContainer to={to}>
                <Nav.Link
                    className={
                        hasBorder ? `fs-5 border-bottom border-primary` : `fs-5`
                    }
                >
                    {text}
                </Nav.Link>
            </LinkContainer>
        </div>
    )
}
