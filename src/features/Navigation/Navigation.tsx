import React, { useState } from 'react'
import NavigationProps from './Navigation.types'
import { Navbar } from 'react-bootstrap'
import Toggle from './components/Toggle'
import NavMenu from './components/NavMenu'
import NavLogo from './components/NavLogo'

export default function Navigation({
    showLogo,
    theme = 'light',
}: NavigationProps) {
    const [isToggled, setIsToggled] = useState(false)
    const handleSetIsToggled = () => setIsToggled(!isToggled)
    return (
        <Navbar
            bg={theme}
            className="border-bottom border-vanillaPink pb-0 pt-0"
            collapseOnSelect
            data-bs-theme={theme}
            expand="xs"
            onToggle={handleSetIsToggled}
        >
            <NavLogo showLogo={showLogo} />
            <Toggle isToggled={isToggled} />
            <NavMenu />
        </Navbar>
    )
}
