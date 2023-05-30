import React from 'react'
import MainProps from './Main.types'
import { Col, Row } from 'react-bootstrap'
import './Main.styles.scss'

export default function Main({ easterEgg, main, left, right }: MainProps) {
    const classNames = easterEgg
        ? 'main flex-grow-1 align-items-center blinking'
        : 'main flex-grow-1 align-items-center'
    return (
        <Row xs="auto" className={classNames}>
            <Col xs={1} sm={2} lg={4}>
                {left}
            </Col>
            <Col className="justify-content-center" xs={10} sm={8} lg={4}>
                {main}
            </Col>
            <Col xs={1} sm={2} lg={4}>
                {right}
            </Col>
        </Row>
    )
}
