import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page classNames="text-center" h1Text="I am a">
            <MyProfile.Gender />
        </Page>
    )
}

export default function MyGenderPage() {
    return (
        <div className="myGenderPage" data-testid="myGenderPage">
            <Layout
                isDarkTheme={false}
                hasLogo={true}
                main={<Main />}
                progress={60}
            />
        </div>
    )
}
