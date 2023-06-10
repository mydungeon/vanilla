import React from 'react'
import PageProps from './Page.types'
import { H1 } from '../Elements'

export default function Page({ children, classNames, h1Text }: PageProps) {
    classNames = classNames ? `page ${classNames}` : `page`
    return (
        <div className={classNames} data-testid="page">
            {h1Text && <H1 text={h1Text} />}
            {children}
        </div>
    )
}
