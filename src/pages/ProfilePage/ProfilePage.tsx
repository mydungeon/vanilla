import React from 'react'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'
import Profile from 'src/features/Profile'

export default function ProfilePage() {
    return (
        <div className="profilePage" data-testid="profilePage">
            <Layouts.Row1Col3>
                <Page h1Text="My Profile">
                    <Profile />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
