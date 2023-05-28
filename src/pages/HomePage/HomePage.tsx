import React from 'react'
import Layout from 'src/features/Layout'
import Splash from 'src/features/Splash'

export default function HomePage() {
    return (
        <div className="homePage" data-testid="homePage">
            <Layout hasLogo={false} isDarkTheme={true} main={<Splash />} />
        </div>
    )
}
