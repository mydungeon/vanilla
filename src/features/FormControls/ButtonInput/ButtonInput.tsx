import React from 'react'
import ButtonInputProps from './ButtonInput.types'
import { Button } from 'react-bootstrap'
import './ButtonInput.styles.scss'

export default function ButtonInput({
    classNames = 'fs-5',
    disabled = true,
    text,
}: ButtonInputProps) {
    return (
        <Button
            className={classNames}
            variant="outline-dark"
            type="submit"
            disabled={disabled}
            size="lg"
        >
            {text}
        </Button>
    )
}
