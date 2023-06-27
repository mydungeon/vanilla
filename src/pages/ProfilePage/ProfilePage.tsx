import React from 'react'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'
import Profile from 'src/features/Profile'

export default function ProfilePage() {
    return (
        <div data-testid="profilePage">
            <Layouts.TopAligned>
                <Page>
                    <Profile />
                </Page>
            </Layouts.TopAligned>
        </div>
    )
}
