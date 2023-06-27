import React from 'react'
import { Profile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function LocationPage() {
    return (
        <div data-testid="locationPage">
            <Layouts.VerticalCentered progress={40}>
                <Page classNames="text-center" h1Text="My zipcode is">
                    <Profile.Zipcode />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
