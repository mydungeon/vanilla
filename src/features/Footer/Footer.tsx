import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Heart from 'src/icons/Heart'
import { getCopyright } from './Footer.utils'
import FooterProps from './Footer.types'

export default function Footer({ isDarkTheme }: FooterProps) {
    const theme = isDarkTheme ? `bg-dark text-white` : `bg-light text-black`
    return (
        <Row className={`align-items-end ${theme} border-top border-primary`}>
            <Col />
            <Col xs={1}>
                <Heart />
            </Col>
            <Col className="copyright align-self-center text-end">
                {getCopyright()}
            </Col>
        </Row>
    )
}
