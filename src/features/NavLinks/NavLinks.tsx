import React from 'react'
import { Nav } from 'react-bootstrap'
import { APP_LINKS } from 'src/app/App.constants'
import NavLink from 'src/features/NavLink'

export default function NavLinks() {
    return (
        <div className="navlinks" data-testid="navlinks">
            <Nav className="me-auto my-2 my-lg-0 mb-0">
                {APP_LINKS.map(({ text, to }, i, array) => (
                    <NavLink
                        key={text}
                        text={text}
                        to={to}
                        isLast={i + 1 === array.length}
                    />
                ))}
            </Nav>
        </div>
    )
}
