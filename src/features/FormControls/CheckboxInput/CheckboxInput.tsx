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
            <Form.Check type={type} label={label} />
        </Form.Group>
    )
}
