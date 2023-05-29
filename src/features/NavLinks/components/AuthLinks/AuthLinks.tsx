import React from 'react'
import AuthLinksProps from './AuthLinks.types'
import NavLink from 'src/features/NavLink'
import { SignoutButton } from 'src/features/Buttons'
import { AUTH_LINKS } from 'src/app/App.constants'
import useAuth from 'src/hooks/useAuth'

export default function AuthLinks({ children }: AuthLinksProps) {
    const [isLoggedIn] = useAuth()
    return (
        <div className="authlinks" data-testid="authlinks">
            {isLoggedIn ? (
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
