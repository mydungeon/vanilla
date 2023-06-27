import React from 'react'
import { Profile } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function MyPicsPage() {
    return (
        <div data-testid="myPicsPage">
            <Layouts.VerticalCentered progress={100}>
                <Page classNames="text-center" h1Text="My best pic">
                    <Profile.Pics />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
