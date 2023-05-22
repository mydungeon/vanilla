import React from 'react'
import MainProps from './Main.types'
import { Col, Row } from 'react-bootstrap'
import './Main.styles.scss'

export default function Main({ center, left, right }: MainProps) {
    return (
        <Row className="flex-grow-1 align-items-stretch align-content-center">
            <Col>{left}</Col>
            <Col xs={10}>{center}</Col>
            <Col>{right}</Col>
        </Row>
    )
}
