import React from 'react'
import MainProps from './Main.types'
import { Col, Row } from 'react-bootstrap'

export default function Main({ main, left, right }: MainProps) {
    return (
        <Row xs="auto" className="flex-grow-1 align-items-center">
            <Col xs={2} sm={3} lg={4}>
                {left}
            </Col>
            <Col className="justify-content-center" xs={8} sm={6} lg={4}>
                {main}
            </Col>
            <Col xs={2} sm={3} lg={4}>
                {right}
            </Col>
        </Row>
    )
}
