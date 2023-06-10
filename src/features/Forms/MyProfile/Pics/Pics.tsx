import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Col, Container, Form, Row } from 'react-bootstrap'
import NextButton from 'src/features/Buttons/NextButton'
import { PROFILE_LINKS } from 'src/app/App.constants'

export default function Pics() {
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState(0)

    function handleChange() {
        setValue(value)
    }

    async function handleNext() {
        const { dob, gender, orientation, zipCode } = location?.state

        navigate(PROFILE_LINKS.INDEX.to, {
            state: { dob, gender, orientation, pic: value, zipCode },
        })
    }
    console.log('value', value)
    console.log('state', location.state)
    return (
        <div className="pics mb-3" data-testid="pics">
            <Form className="mb-3">
                <Container fluid>
                    <Row className="mb-5">
                        <Col>
                            <Form.Group controlId="pics">
                                <Form.Control
                                    size="lg"
                                    type="file"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <NextButton handleNext={handleNext} text="Finish" />
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}
