import React from 'react'
import NextButtonProps from './NextButton.types'
import { Button } from 'react-bootstrap'

export default function NextButton({ handleNext, text }: NextButtonProps) {
    return (
        <Button className="mx-auto" onClick={handleNext} size="lg">
            {text}
        </Button>
    )
}
