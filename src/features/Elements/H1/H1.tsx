import React from 'react'
import H1Props from './H1.types'

export default function H1({ text }: H1Props) {
    return <h1 className="h1">{text}</h1>
}
