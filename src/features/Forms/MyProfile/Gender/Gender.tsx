import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import GenderProps from './Gender.types'
import {
    Col,
    Container,
    Row,
    ToggleButton,
    ToggleButtonGroup,
} from 'react-bootstrap'
import { PROFILE_LINKS } from 'src/app/App.constants'
import NextButton from 'src/features/Buttons/NextButton'

export default function Gender({ children }: GenderProps) {
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState('')

    function handleChange(val: any) {
        setValue(val)
    }

    async function handleNext() {
        const { dob, zipCode } = location?.state

        navigate(PROFILE_LINKS.ORIENTATION.to, {
            state: { dob, gender: value, zipCode },
        })
    }

    return (
        <div className="gender mb-3" data-testid="gender">
            <Container fluid>
                <Row className="mb-5">
                    <Col></Col>
                    <Col>
                        <ToggleButtonGroup
                            name="gender"
                            onChange={handleChange}
                            size="lg"
                            type="radio"
                            value={value}
                        >
                            <ToggleButton id="tbg-btn-2" value="f">
                                Woman
                            </ToggleButton>
                            <ToggleButton id="tbg-btn-1" value="m">
                                Man
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
