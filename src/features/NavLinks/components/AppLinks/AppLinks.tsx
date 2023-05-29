import React from 'react'
import AppLinksProps from './AppLinks.types'
import { APP_LINKS } from 'src/app/App.constants'
import NavLink from 'src/features/NavLink/NavLink'

export default function AppLinks({ children }: AppLinksProps) {
    return (
        <div className="applinks" data-testid="applinks">
            {APP_LINKS.map(({ text, to }, i, array) => (
                <NavLink key={text} text={text} to={to} hasBorder={true} />
            ))}
        </div>
    )
}
