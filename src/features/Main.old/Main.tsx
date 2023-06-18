import React from 'react'
import MainProps from './Main.types'
import { Col, Row } from 'react-bootstrap'
import './Main.styles.scss'

export default function Main({
    children,
    easterEgg,
    main,
    left,
    right,
}: MainProps) {
    const classNames = easterEgg
        ? 'main flex-grow-1 align-items-center blinking'
        : 'main flex-grow-1 align-items-center'
    return (
        <Row xs="auto" className={classNames}>
            <Col xs={1} sm={2} lg={3}>
                {left}
            </Col>
            <Col className="justify-content-center" xs={10} sm={8} lg={6}>
                {children}
            </Col>
            <Col xs={1} sm={2} lg={3}>
                {right}
            </Col>
        </Row>
    )
}
