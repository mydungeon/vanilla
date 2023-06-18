import React from 'react'
import TripleProps from './Triple.types'
import './Triple.styles.scss'
import { Col } from 'react-bootstrap'

export default function Triple({ left, children, right }: TripleProps) {
    return (
        <>
            <Col xs={1} sm={2} lg={3}>
                {left}
            </Col>
            <Col className="justify-content-center" xs={10} sm={8} lg={6}>
                {children}
            </Col>
            <Col xs={1} sm={2} lg={3}>
                {right}
            </Col>
        </>
    )
}
