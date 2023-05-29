import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Heart from 'src/icons/Heart'
import { getCopyright } from './Footer.utils'
import FooterProps from './Footer.types'
import EasterEgg from '../EasterEgg/EasterEgg'

export default function Footer({ isDarkTheme, handleClick }: FooterProps) {
    const theme = isDarkTheme ? `bg-dark text-white` : `bg-light text-black`
    return (
        <Row className={`align-items-end ${theme} border-top border-primary`}>
            <Col />
            <Col xs={1}>
                <EasterEgg handleClick={handleClick}>
                    <Heart />
                </EasterEgg>
            </Col>
            <Col className="copyright align-self-center text-end">
                {getCopyright()}
            </Col>
        </Row>
    )
}
