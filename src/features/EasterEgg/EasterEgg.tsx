import React from 'react'
import EasterEggProps from './EasterEgg.types'
import './EasterEgg.styles.scss'

export default function EasterEgg({ children, easterEgg }: EasterEggProps) {
    const classNames = easterEgg ? 'easterEgg' : ''
    return (
        <div className={classNames} data-testid="easterEgg">
            {children}
        </div>
    )
}
