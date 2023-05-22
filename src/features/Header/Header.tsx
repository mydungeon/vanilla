import React from 'react'
import HeaderProps from './Header.types'
import { Col, Row } from 'react-bootstrap'
import './Header.styles.scss'

export default function Header({ children }: HeaderProps) {
    return (
        <Row className="align-items-start">
            <Col>1.1</Col>
            <Col xs={10}>{children}</Col>
            <Col>3.1</Col>
        </Row>
    )
}
