import React from 'react'
import FooterProps from './Footer.types'
import './Footer.styles.scss'

export default function Footer({ children }: FooterProps) {
    return (
        <div className="footer" data-testid="footer">
            {children}
        </div>
    )
}
