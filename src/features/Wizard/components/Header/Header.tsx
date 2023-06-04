import React from 'react'
import { Button as BackButton, Col, Row } from 'react-bootstrap'
import { Button as NextButton } from 'react-bootstrap'
import { WizardHeaderProps } from 'src/features/Wizard/components/Header/Header.types'

export default function WizardHeader({
    handleBack,
    handleNext,
    showBack,
    showNext,
}: WizardHeaderProps) {
    const backButton = (
        <BackButton size="lg" name="backButton" onClick={handleBack}>
            Back
        </BackButton>
    )
    const nextButton = (
        <NextButton
            size="lg"
            className=""
            disabled={false}
            name="nextButton"
            onClick={handleNext}
        >
            Next
        </NextButton>
    )
    return (
        <div className="wizardHeader">
            <Row>
                <Col>{showBack && backButton}</Col>
                <Col></Col>
                <Col className="d-flex justify-content-end">
                    {showNext && nextButton}
                </Col>
            </Row>
        </div>
    )
}
