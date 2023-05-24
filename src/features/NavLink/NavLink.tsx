import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import NavLinkProps from './NavLink.types'

export default function NavLink({ text, to, isLast }: NavLinkProps) {
    return (
        <div className="navlink" data-testid="navlink">
            <LinkContainer to={to}>
                <Nav.Link
                    className={
                        isLast ? `fs-5` : `fs-5 border-bottom border-primary`
                    }
                >
                    {text}
                </Nav.Link>
            </LinkContainer>
        </div>
    )
}
