import React from 'react'
import PageProps from './Page.types'
import { H1 } from '../Elements'

export default function Page({ children, h1Text }: PageProps) {
    return (
        <div className="page" data-testid="page">
            {h1Text && <H1 text={h1Text} />}
            {children}
        </div>
    )
}
