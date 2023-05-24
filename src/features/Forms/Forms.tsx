import React from 'react'
import FormsProps from './Forms.types'
import './Forms.styles.scss'

export default function Forms({ children }: FormsProps) {
    return (
        <div className="forms" data-testid="forms">
            {children}
        </div>
    )
}
