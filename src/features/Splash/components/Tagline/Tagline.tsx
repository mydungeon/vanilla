import React from 'react'
import TaglineProps from './Tagline.types'
import './Tagline.styles.scss'

export default function Tagline({ text }: TaglineProps) {
    return (
        <p className="tagline m-0" data-testid="tagline">
            {text}
        </p>
    )
}
