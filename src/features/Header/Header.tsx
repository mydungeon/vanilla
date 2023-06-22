import React from 'react'
import { Col, Row } from 'react-bootstrap'
import HeaderProps from './Header.types'
import Navigation from 'src/features/Navigation'

export default function Header({ ...props }: HeaderProps) {
    return (
        <Row className="align-items-start">
            <Col className="p-0" xs={12}>
                <Navigation {...props} />
            </Col>
        </Row>
    )
}
