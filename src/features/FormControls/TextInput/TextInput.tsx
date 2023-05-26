import React from 'react'
import TextInputProps from './TextInput.types'
import { Form } from 'react-bootstrap'

export default function TextInput({
    controlId,
    error,
    isInvalid,
    isValid,
    label,
    onChange,
    placeholder,
    message,
    name,
    type,
    value,
}: TextInputProps) {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            {label && <Form.Label className="w-100 fs-5">{label}</Form.Label>}
            <Form.Control
                isValid={isValid}
                isInvalid={isInvalid}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                size="lg"
                type={type}
                value={value}
            />
            {message && <Form.Text className="text-muted">{message}</Form.Text>}
            {error && (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    )
}
