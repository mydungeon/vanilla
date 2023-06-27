import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function MyLocationPage() {
    return (
        <div data-testid="myLocationPage">
            <Layouts.Row1Col3 progress={40}>
                <Page classNames="text-center" h1Text="My zipcode is">
                    <MyProfile.Zipcode />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
