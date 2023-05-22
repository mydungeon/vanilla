import React from 'react'
import MainProps from './Main.types'
import './Main.styles.scss'

export default function Main({ children }: MainProps) {
    return (
        <div className="main" data-testid="main">
            {children}
        </div>
    )
}
