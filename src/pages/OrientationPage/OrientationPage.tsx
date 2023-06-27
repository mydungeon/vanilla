import React from 'react'
import { Profile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function OrientationPage() {
    return (
        <div data-testid="orientationPage">
            <Layouts.VerticalCentered progress={80}>
                <Page classNames="text-center" h1Text="I am seeking">
                    <Profile.Orientation />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
