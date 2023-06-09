import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

export default function Zipcode() {
    return (
        <div className="zipCode" data-testid="zipCode">
            <Form>
                <Form.Group className="mb-3" controlId="zipCode">
                    <Container fluid>
                        <Row>
                            <Col></Col>
                            <Col>
                                <Form.Control
                                    minLength={5}
                                    maxLength={5}
                                    pattern='pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"'
                                    placeholder="Zipcode"
                                    size="lg"
                                    type="text"
                                />
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </Form.Group>
            </Form>
        </div>
    )
}
