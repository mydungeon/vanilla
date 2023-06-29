import React from 'react'
import Page from 'src/features/Page'
import Profile from 'src/features/Profile'

export default function ProfilePage() {
    return (
        <div data-testid="profilePage">
            <Page>
                <Profile />
            </Page>
        </div>
    )
}
