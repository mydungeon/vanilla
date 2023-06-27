import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function MyPicsPage() {
    return (
        <div data-testid="myPicsPage">
            <Layouts.Row1Col3 progress={100}>
                <Page classNames="text-center" h1Text="My best pic">
                    <MyProfile.Pics />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
