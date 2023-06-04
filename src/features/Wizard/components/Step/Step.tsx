import React from 'react'
import { StepProps } from 'src/features/Wizard/components/Step/Step.types'
import H2 from 'src/features/Elements/H2'

export default function Step({ children, title }: StepProps) {
    return (
        <div className="step">
            {title && <H2 text={title} />}
            {children}
        </div>
    )
}
