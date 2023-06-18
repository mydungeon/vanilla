import React from 'react'
import { Row } from 'react-bootstrap'
import SingleProps from './Single.types'

export default function Single({ children, classNames }: SingleProps) {
    classNames = classNames
        ? `main flex-grow-1 ${classNames}`
        : `main flex-grow-1`
    return (
        <Row xs="auto" className={classNames}>
            {children}
        </Row>
    )
}
