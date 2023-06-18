import React from 'react'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'
import Splash from 'src/features/Splash'

export default function HomePage() {
    return (
        <div className="homePage" data-testid="homePage">
            <Layouts.Row1Col3 isDarkTheme={true} showLogo={false}>
                <Page>
                    <Splash />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
