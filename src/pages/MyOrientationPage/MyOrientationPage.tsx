import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page classNames="text-center" h1Text="I am seeking">
            <MyProfile.Orientation />
        </Page>
    )
}

export default function MyOrientationPage() {
    return (
        <div className="myOrientationPage" data-testid="myOrientationPage">
            <Layout isDarkTheme={false} hasLogo={true} main={<Main />} />
        </div>
    )
}
