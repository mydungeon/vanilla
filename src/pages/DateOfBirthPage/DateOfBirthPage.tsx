import React from 'react'
import { Profile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function DateOfBirthPage() {
    return (
        <div data-testid="dateOfBirthPage">
            <Layouts.VerticalCentered progress={20}>
                <Page classNames="text-center" h1Text="My birthday is">
                    <Profile.DateOfBirth />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
