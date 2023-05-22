import React from 'react'
import FooterProps from './Footer.types'
import { Col, Row } from 'react-bootstrap'
import './Footer.styles.scss'

export default function Footer({ children }: FooterProps) {
    return (
        <Row className="align-items-end">
            <Col>1</Col>
            <Col xs={10}>{children}</Col>
            <Col>3</Col>
        </Row>
    )
}
