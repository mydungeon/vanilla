import React from 'react'
import H2Props from './H2.types'

export default function H2({ text }: H2Props) {
    return (
        <h2 className="h2 mb-4" data-testid="h2">
            {text}
        </h2>
    )
}
