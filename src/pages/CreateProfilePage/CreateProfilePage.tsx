import React from 'react'
import CreateProfilePageProps from 'src/pages/CreateProfilePage/CreateProfilePage.types'
import ProfileWizard from 'src/features/ProfileWizard'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page>
            <ProfileWizard />
        </Page>
    )
}

export default function CreateProfilePage({
    children,
}: CreateProfilePageProps) {
    return (
        <div className="createMyProfilePage" data-testid="createMyProfilePage">
            <Layout hasLogo={true} isDarkTheme={false} main={<Main />} />
        </div>
    )
}
