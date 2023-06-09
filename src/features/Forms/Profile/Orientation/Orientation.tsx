import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import OrientationProps from './Orientation.types'
import { Stack, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { PROFILE_LINKS } from 'src/app/App.constants'
import NextButton from 'src/features/Buttons/NextButton'
import { useCreateProfileMutation } from 'src/appState/profileApi'

export default function Orientation({ children }: OrientationProps) {
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState(0)
    const [
        createProfile,
        {
            data: createProfileData,
            isSuccess: isCreateProfileSuccess,
            isError: isCreateProfileError,
            error: createProfileError,
        },
    ] = useCreateProfileMutation()

    function handleChange(val: any) {
        setValue(val)
    }

    async function handleNext() {
        const { dob, gender, zipCode } = location?.state
        await createProfile({
            dob,
            gender,
            orientation: value.toString(),
            zipCode,
        })
    }

    useEffect(() => {
        if (isCreateProfileSuccess) {
            navigate(PROFILE_LINKS.PICS.to)
        }
    })

    return (
        <div className="orientation mb-3" data-testid="orientation">
            <Stack className="mb-3" direction="horizontal" gap={3}>
                <ToggleButtonGroup
                    className="m-auto"
                    name="orientation"
                    onChange={handleChange}
                    size="lg"
                    type="radio"
                    value={value}
                >
                    <ToggleButton id="tbg-btn-2" value="f">
                        Women
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-0" value="b">
                        Both
                    </ToggleButton>
                    <ToggleButton id="tbg-btn-1" value="m">
                        Men
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <NextButton handleNext={handleNext} text="Next" />
        </div>
    )
}
