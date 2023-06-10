import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page classNames="text-center" h1Text="My best pic">
            <MyProfile.Pics />
        </Page>
    )
}

export default function MyPicsPage() {
    return (
        <div className="myPicsPage" data-testid="myPicsPage">
            <Layout isDarkTheme={false} hasLogo={true} main={<Main />} />
        </div>
    )
}
