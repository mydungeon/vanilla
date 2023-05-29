import React from 'react'
import AuthLinksProps from './AuthLinks.types'
import NavLink from 'src/features/NavLink'
import { SignoutButton } from 'src/features/Buttons'
import { getUserFromLocalStorage } from 'src/app/App.utils'
import { AUTH_LINKS } from 'src/app/App.constants'

export default function AuthLinks({ children }: AuthLinksProps) {
    const user = getUserFromLocalStorage()
    return (
        <div className="authlinks" data-testid="authlinks">
            {user ? (
                <SignoutButton />
            ) : (
                AUTH_LINKS.map(({ text, to }, i, array) => (
                    <NavLink
                        key={text}
                        text={text}
                        to={to}
                        hasBorder={!(i + 1 === array.length)}
                    />
                ))
            )}
        </div>
    )
}
