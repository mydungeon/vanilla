import React, { Children } from 'react'
import { StepsProps } from 'src/features/Wizard/components/Steps/Steps.types'
import { Col, Row } from 'react-bootstrap'

export default function Steps({ children, step }: StepsProps) {
    return (
        <div className="steps">
            <Row>
                <Col>{Children.toArray(children)[step]}</Col>
            </Row>
        </div>
    )
}
