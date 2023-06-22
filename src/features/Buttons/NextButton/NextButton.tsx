import React from 'react'
import NextButtonProps from './NextButton.types'
import { Button } from 'react-bootstrap'

export default function NextButton({
    handleNext,
    text,
    type,
}: NextButtonProps) {
    return (
        <Button
            data-testid="nextButton"
            className="mx-auto"
            onClick={handleNext}
            size="lg"
            type={type}
        >
            {text}
        </Button>
    )
}
