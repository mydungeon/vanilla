import React from 'react'
import { Profile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function GenderPage() {
    return (
        <div data-testid="genderPage">
            <Layouts.VerticalCentered progress={60}>
                <Page classNames="text-center" h1Text="I am a">
                    <Profile.Gender />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
