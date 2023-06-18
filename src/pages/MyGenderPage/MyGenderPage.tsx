import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function MyGenderPage() {
    return (
        <div className="myGenderPage" data-testid="myGenderPage">
            <Layouts.Row1Col3>
                <Page classNames="text-center" h1Text="I am a">
                    <MyProfile.Gender />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
