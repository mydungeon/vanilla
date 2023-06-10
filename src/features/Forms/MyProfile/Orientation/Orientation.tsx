import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import OrientationProps from './Orientation.types'
import {
    Col,
    Container,
    Row,
    ToggleButton,
    ToggleButtonGroup,
} from 'react-bootstrap'
import { PROFILE_LINKS } from 'src/app/App.constants'
import NextButton from 'src/features/Buttons/NextButton'

export default function Orientation({ children }: OrientationProps) {
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState(0)

    function handleChange(val: any) {
        setValue(val)
    }

    async function handleNext() {
        const { dob, gender, zipCode } = location?.state

        navigate(PROFILE_LINKS.PICS.to, {
            state: { dob, gender, orientation: value, zipCode },
        })
    }
    console.log('state', location.state)

    return (
        <div className="orientation mb-3" data-testid="orientation">
            <Container fluid>
                <Row className="mb-5">
                    <Col></Col>
                    <Col>
                        <ToggleButtonGroup
                            name="orientation"
                            onChange={handleChange}
                            size="lg"
                            type="radio"
                            value={value}
                        >
                            <ToggleButton id="tbg-btn-2" value={1}>
                                Women
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-1" value={2}>
                                Men
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <NextButton handleNext={handleNext} text="Next" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
