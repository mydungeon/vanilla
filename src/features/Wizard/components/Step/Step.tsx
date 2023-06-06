import React from 'react'
import { StepProps } from 'src/features/Wizard/components/Step/Step.types'
import H1 from 'src/features/Elements/H1'

export default function Step({ children, title }: StepProps) {
    return (
        <div className="step">
            {title && <H1 text={title} />}
            {children}
        </div>
    )
}
