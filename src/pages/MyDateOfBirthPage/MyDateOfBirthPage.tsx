import React from 'react'
import { MyProfile } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page classNames="text-center" h1Text="My birthday is">
            <MyProfile.DateOfBirth />
        </Page>
    )
}

export default function MyDateOfBirthPage() {
    return (
        <div className="mydateofbirthpage" data-testid="mydateofbirthpage">
            <Layout
                isDarkTheme={false}
                hasLogo={true}
                main={<Main />}
                progress={20}
            />
        </div>
    )
}
