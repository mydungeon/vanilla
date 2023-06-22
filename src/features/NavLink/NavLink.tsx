import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import NavLinkProps from './NavLink.types'
import { CLASSNAMES } from './NavLink.constants'

export default function NavLink({
    classNames = CLASSNAMES,
    text,
    to,
}: NavLinkProps) {
    return (
        <LinkContainer to={to} data-testid="navlink">
            <Nav.Link className={classNames}>{text}</Nav.Link>
        </LinkContainer>
    )
}
