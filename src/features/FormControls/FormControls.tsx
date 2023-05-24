import React from 'react'
import FormControlsProps from './FormControls.types'

export default function FormControls({ children }: FormControlsProps) {
    return (
        <div className="formcontrols" data-testid="formcontrols">
            {children}
        </div>
    )
}
