import React, { useState } from 'react'
import NavBarProps from './NavBar.types'
import { Container, Navbar as SiteNav } from 'react-bootstrap'
import Toggle from './components/Toggle'
import NavMenu from './components/NavMenu'
import NavLogo from './components/NavLogo'

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
                <NavLogo hasLogo={hasLogo} />
                <Toggle isToggled={isToggled} />
                <NavMenu isToggled={isToggled} />
            </SiteNav>
        </Container>
    )
}
