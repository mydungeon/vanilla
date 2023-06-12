import React from 'react'
import { ProgressBar as BsProgressBar } from 'react-bootstrap'
import ProgressBarProps from './ProgressBar.types'
import './ProgressBar.styles.scss'

export default function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="progressbar pt-3" data-testid="progressbar">
            <BsProgressBar animated={true} now={progress} variant="info" />
        </div>
    )
}
