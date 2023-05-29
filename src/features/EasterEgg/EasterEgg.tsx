import React from 'react'
import EasterEggProps from './EasterEgg.types'

export default function EasterEgg({ children, handleClick }: EasterEggProps) {
    return (
        <div
            className="easterEgg"
            data-testid="easterEgg"
            onClick={handleClick}
        >
            {children}
        </div>
    )
}
