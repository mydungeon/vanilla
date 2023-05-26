import React from 'react'
import { LOGO } from 'src/app/App.constants'
import LogoProps from './Logo.types'
import './Logo.styles.scss'

export default function Logo({ classNames = '' }: LogoProps) {
    return (
        <img
            alt="logo"
            className={`logo img-fluid ${classNames}`}
            data-testid="logo"
            src={LOGO}
        />
    )
}
