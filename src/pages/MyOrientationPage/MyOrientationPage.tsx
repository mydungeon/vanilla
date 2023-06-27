import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function MyOrientationPage() {
    return (
        <div data-testid="myOrientationPage">
            <Layouts.Row1Col3 progress={80}>
                <Page classNames="text-center" h1Text="I am seeking">
                    <MyProfile.Orientation />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
