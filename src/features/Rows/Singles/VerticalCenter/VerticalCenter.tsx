import React from 'react'
import { Row } from 'react-bootstrap'
import VerticalCenterProps from './VerticalCenter.types'

export default function SingleVerticalCenter({
    children,
}: VerticalCenterProps) {
    return (
        <Row xs="auto" className="main flex-grow-1 align-items-center">
            {children}
        </Row>
    )
}
