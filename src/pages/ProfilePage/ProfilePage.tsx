import React from 'react'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'
import Profile from 'src/features/Profile'

function Main() {
    return (
        <Page h1Text="My Profile">
            <Profile />
        </Page>
    )
}

export default function ProfilePage() {
    return (
        <div className="profilePage" data-testid="profilePage">
            <Layout hasLogo={true} isDarkTheme={false} main={<Main />} />
        </div>
    )
}
