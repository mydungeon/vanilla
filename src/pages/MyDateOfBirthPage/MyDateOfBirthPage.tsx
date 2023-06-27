import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function MyDateOfBirthPage() {
    return (
        <div data-testid="mydateofbirthpage">
            <Layouts.Row1Col3 progress={20}>
                <Page classNames="text-center" h1Text="My birthday is">
                    <MyProfile.DateOfBirth />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
