import React from 'react'
import ButtonInputProps from './ButtonInput.types'
import { Button } from 'react-bootstrap'
import './ButtonInput.styles.scss'

export default function ButtonInput({ text }: ButtonInputProps) {
    return (
        <Button className="fs-5" variant="primary" type="submit">
            {text}
        </Button>
    )
}
