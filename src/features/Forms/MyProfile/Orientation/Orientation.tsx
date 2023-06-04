import React, { useState } from 'react'
import OrientationProps from './Orientation.types'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

export default function Orientation({ children }: OrientationProps) {
    const [value, setValue] = useState([])
    const handleChange = (val: any) => setValue(val)
    return (
        <div className="orientation" data-testid="orientation">
            <ToggleButtonGroup
                className="mb-3"
                size="lg"
                type="checkbox"
                value={value}
                onChange={handleChange}
            >
                <ToggleButton id="tbg-btn-2" value={2}>
                    Woman
                </ToggleButton>
                <ToggleButton id="tbg-btn-1" value={1}>
                    Man
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}
