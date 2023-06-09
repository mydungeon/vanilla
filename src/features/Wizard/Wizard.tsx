import React, { Children, useState } from 'react'
import { Container } from 'react-bootstrap'
import WizardHeader from 'src/features/Wizard/components/Header'
import Steps from 'src/features/Wizard/components/Steps'
import { WizardProps } from 'src/features/Wizard/Wizard.types'

export default function Wizard({ children }: WizardProps) {
    const [step, setStep] = useState(0)
    const handleBack = () => setStep(step - 1)
    const handleNext = () => setStep(step + 1)
    const length = Children.count(children)
    return (
        <div className="wizard">
            <Container className="text-center">
                <Steps step={step}>{children}</Steps>
                <WizardHeader
                    handleBack={handleBack}
                    handleNext={handleNext}
                    showBack={step > 0}
                    showNext={step < length - 1}
                />
            </Container>
        </div>
    )
}
