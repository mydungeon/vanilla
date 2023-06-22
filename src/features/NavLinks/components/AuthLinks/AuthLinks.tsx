import React from 'react'
import AuthLinksProps from './AuthLinks.types'
import NavLink from 'src/features/NavLink'
import { SignoutButton } from 'src/features/Buttons'
import { AUTH_LINKS } from 'src/app/App.constants'
import useAuth from 'src/hooks/useAuth'
import { LAST_LINK_CLASSNAMES } from './AuthLinks.constants'

export default function AuthLinks({ children }: AuthLinksProps) {
    const [isLoggedIn] = useAuth()
    return (
        <div data-testid="authlinks">
            {isLoggedIn ? (
                <SignoutButton />
            ) : (
                AUTH_LINKS.map(({ text, to }, i, array) => {
                    if (i === array.length - 1) {
                        return (
                            <NavLink
                                classNames={LAST_LINK_CLASSNAMES}
                                key={text}
                                text={text}
                                to={to}
                            />
                        )
                    }
                    return <NavLink key={text} text={text} to={to} />
                })
            )}
        </div>
    )
}
