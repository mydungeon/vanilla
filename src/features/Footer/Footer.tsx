import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Heart from 'src/icons/Heart'
import { getCopyright } from './Footer.utils'
import FooterProps from './Footer.types'

export default function Footer({ theme, handleClick }: FooterProps) {
    theme = theme === 'light' ? `bg-light text-black` : `bg-dark text-white`
    return (
        <Row
            className={`align-items-end ${theme} border-top border-vanillaPink`}
        >
            <Col />
            <Col xs={1}>
                <div onClick={handleClick}>
                    <Heart />
                </div>
            </Col>
            <Col className="copyright align-self-center text-end text-vanillaPink">
                <h6>{getCopyright()}</h6>
            </Col>
        </Row>
    )
}
