import React from 'react'
import XProps from './X.types'
import { XLg } from 'react-bootstrap-icons'

export default function X({ children }: XProps) {
    return (
        <div className="x" data-testid="x">
            <XLg className="iconOverride m-1" size={40} />
        </div>
    )
}
