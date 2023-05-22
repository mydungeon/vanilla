import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Header.styles.scss'

export default function Header() {
    return (
        <div className="header" data-testid="header">
            <Row>
                <Col>1</Col>
                <Col xs={10}>2</Col>
                <Col>3</Col>
            </Row>
        </div>
    )
}
