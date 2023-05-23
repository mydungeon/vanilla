import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Heart from 'src/icons/Heart'
import { COPYRIGHT } from './Footer.constants'

export default function Footer() {
    return (
        <Row className="align-items-end bg-dark text-white">
            <Col></Col>
            <Col xs={10}>
                <Heart />
                {COPYRIGHT}
            </Col>
            <Col></Col>
        </Row>
    )
}
