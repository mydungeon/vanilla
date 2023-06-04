import React from 'react'
import { Form } from 'react-bootstrap'

export default function Pics() {
    return (
        <div className="pics" data-testid="pics">
            <Form>
                <Form.Group className="mb-3" controlId="pics">
                    <Form.Control size="lg" type="file" />
                </Form.Group>
            </Form>
        </div>
    )
}
