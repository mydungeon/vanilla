import React from 'react'
import { Col } from 'react-bootstrap'
import TripleWithBorderProps from './TripleWithBorder.types'

export default function TripleWithBorder({
    left,
    children,
    right,
}: TripleWithBorderProps) {
    return (
        <>
            <Col xs={1} sm={2} lg={3}>
                {left}
            </Col>
            <Col className="justify-content-center p-0" xs={10} sm={8} lg={6}>
                {children}
            </Col>
            <Col xs={1} sm={2} lg={3}>
                {right}
            </Col>
        </>
    )
}
