import React from 'react'
import HeaderProps from './Header.types'
import { Col, Row } from 'react-bootstrap'
import './Header.styles.scss'

export default function Header({ children }: HeaderProps) {
    return (
        <Row className="align-items-start bg-dark text-white">
            <Col></Col>
            <Col xs={12}>{children}</Col>
            <Col></Col>
        </Row>
    )
}
