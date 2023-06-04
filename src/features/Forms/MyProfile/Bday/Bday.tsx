import React from 'react'
import { Form } from 'react-bootstrap'

export default function Bday() {
    return (
        <div className="bday" data-testid="bday">
            <Form>
                <Form.Group className="mb-3" controlId="bday">
                    <Form.Control size="lg" type="date" />
                </Form.Group>
            </Form>
        </div>
    )
}
