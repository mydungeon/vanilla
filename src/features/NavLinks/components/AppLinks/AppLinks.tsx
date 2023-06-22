import React from 'react'
import AppLinksProps from './AppLinks.types'
import NavLink from 'src/features/NavLink/NavLink'
import useAuth from 'src/hooks/useAuth'
import { getNavLinks } from './AppLinks.utils'

export default function AppLinks({ children }: AppLinksProps) {
    const [isLoggedIn] = useAuth()
    return (
        <div data-testid="applinks">
            {getNavLinks(isLoggedIn).map(({ text, to }, i, array) => (
                <NavLink key={text} text={text} to={to} />
            ))}
        </div>
    )
}
