import React from 'react'
import MainProps from './Main.types'
import { Col, Row } from 'react-bootstrap'

export default function Main({ main, left, right }: MainProps) {
    return (
        <Row className="flex-grow-1 align-items-center align-content-center">
            <Col>{left}</Col>
            <Col xs={10}>{main}</Col>
            <Col>{right}</Col>
        </Row>
    )
}