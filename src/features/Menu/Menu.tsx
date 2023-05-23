import React from 'react'
import MenuProps from './Menu.types'
import './Menu.styles.scss'

export default function Menu({ children }: MenuProps) {
    return (
        <div className="menu" data-testid="menu">
            {children}
        </div>
    )
}
