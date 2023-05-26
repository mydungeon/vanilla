import React from 'react'
import CheckboxInputProps from './CheckboxInput.types'
import { Form } from 'react-bootstrap'

export default function CheckboxInput({
    controlId,
    label,
    type,
}: CheckboxInputProps) {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            <Form.Check
                className="checkbox-lg m-3 fs-5"
                type={type}
                label={label}
            />
        </Form.Group>
    )
}
