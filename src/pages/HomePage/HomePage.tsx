import React from 'react'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'
import Splash from 'src/features/Splash'

export default function HomePage() {
    return (
        <div data-testid="homePage">
            <Layouts.Row1Col3 theme="dark" showLogo={false}>
                <Page>
                    <Splash />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
