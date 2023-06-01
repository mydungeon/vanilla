import React from 'react'
import TextInputProps from './TextInput.types'
import { Form } from 'react-bootstrap'

export default function TextInput({
    controlId,
    error,
    formControlClasses,
    isInvalid,
    isValid,
    label,
    maxLength,
    message,
    name,
    onChange,
    placeholder,
    type,
    value,
}: TextInputProps) {
    return (
        <Form.Group className="mb-3" controlId={controlId}>
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control
                className={formControlClasses}
                isValid={isValid}
                isInvalid={isInvalid}
                maxLength={maxLength}
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
