import React from 'react'
import logo from 'src/logo.svg'
import './Logo.styles.scss'

export default function Logo() {
    return (
        <img
            alt="logo"
            className="logo img-fluid"
            data-testid="logo"
            src={logo}
        />
    )
}