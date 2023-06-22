import React from 'react'
import EasterEggProps from './EasterEgg.types'
import './EasterEgg.styles.scss'

export default function EasterEgg({ children, easterEgg }: EasterEggProps) {
    return easterEgg === true ? (
        <div className="easterEgg" data-testid="easterEgg">
            {children}
        </div>
    ) : (
        <>{children}</>
    )
}
