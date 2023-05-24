import React from 'react'
import TextInputProps from './TextInput.types'
import { Form } from 'react-bootstrap'

export default function TextInput({
    controlId,
    label,
    placeholder,
    message,
    type,
}: TextInputProps) {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            {label ?? <Form.Label className="w-100">{label}</Form.Label>}
            <Form.Control type={type} placeholder={placeholder} />
            {message ?? <Form.Text className="text-muted">{message}</Form.Text>}
        </Form.Group>
    )
}
