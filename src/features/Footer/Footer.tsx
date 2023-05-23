import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Heart from 'src/icons/Heart'
import { getCopyright } from './Footer.utils'

export default function Footer() {
    return (
        <Row className="align-items-end bg-dark text-white">
            <Col></Col>
            <Col xs={1}>
                <Heart />
            </Col>
            <Col className="copyright align-self-center text-end">
                {getCopyright()}
            </Col>
        </Row>
    )
}
