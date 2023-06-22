import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ButtonLinkProps from './ButtonLink.types'

export default function ButtonLink({ text, to }: ButtonLinkProps) {
    return (
        <LinkContainer data-testid="buttonLink" to={to}>
            <Nav.Link className="fs-5">{text}</Nav.Link>
        </LinkContainer>
    )
}
