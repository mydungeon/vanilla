import React, { useState } from 'react'
import NavBarProps from './NavBar.types'
import './NavBar.styles.scss'
import { Container, Navbar as SiteNav } from 'react-bootstrap'
import NavLinks from '../NavLinks'
import List from 'src/icons/List'
import X from 'src/icons/X'

export default function NavBar({ children }: NavBarProps) {
    const [isToggled, setIsToggled] = useState(false)
    const handleSetIsToggled = () => setIsToggled(!isToggled)

    return (
        <Container className="p-0" fluid>
            <SiteNav
                className="border-bottom border-primary pb-0"
                collapseOnSelect
                expand="xs"
                bg="dark"
                variant="dark"
                onToggle={handleSetIsToggled}
            >
                <SiteNav.Brand></SiteNav.Brand>
                <SiteNav.Toggle aria-controls="navbarScroll">
                    {isToggled ? <X /> : <List />}
                </SiteNav.Toggle>
                <SiteNav.Collapse id="myCollapse" in={isToggled}>
                    <NavLinks />
                </SiteNav.Collapse>
            </SiteNav>
        </Container>
    )
}
