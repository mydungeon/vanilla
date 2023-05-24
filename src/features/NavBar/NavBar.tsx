import React, { useState } from 'react'
import NavBarProps from './NavBar.types'
import { Container, Navbar as SiteNav } from 'react-bootstrap'
import Logo from 'src/icons/Logo'
import NavLinks from 'src/features/NavLinks'
import List from 'src/icons/List'
import X from 'src/icons/X'

export default function NavBar({ hasLogo, isDarkTheme }: NavBarProps) {
    const [isToggled, setIsToggled] = useState(false)
    const handleSetIsToggled = () => setIsToggled(!isToggled)
    const theme = isDarkTheme ? 'dark' : 'light'
    return (
        <Container className="p-0" fluid>
            <SiteNav
                className="border-bottom border-primary pb-0 pt-0"
                collapseOnSelect
                expand="xs"
                bg={theme}
                variant={theme}
                onToggle={handleSetIsToggled}
            >
                <SiteNav.Brand className="ps-3">
                    {hasLogo ? <Logo /> : null}
                </SiteNav.Brand>
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
