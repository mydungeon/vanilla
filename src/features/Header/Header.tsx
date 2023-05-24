import React from 'react'
import HeaderProps from './Header.types'
import { Col, Row } from 'react-bootstrap'
import NavBar from 'src/features/NavBar'

export default function Header({ ...props }: HeaderProps) {
    return (
        <Row className="align-items-start">
            <Col className="p-0" xs={12}>
                <NavBar {...props} />
            </Col>
        </Row>
    )
}
