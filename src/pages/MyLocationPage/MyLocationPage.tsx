import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page classNames="text-center" h1Text="My zipcode is">
            <MyProfile.Zipcode />
        </Page>
    )
}

export default function MyLocationPage() {
    return (
        <div className="myLocationPage" data-testid="myLocationPage">
            <Layout isDarkTheme={false} hasLogo={true} main={<Main />} />
        </div>
    )
}
