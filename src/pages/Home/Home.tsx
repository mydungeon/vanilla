import React from 'react'
import Layout from 'src/features/Layout'
import Splash from 'src/features/Splash'

export default function Home() {
    return (
        <div className="home" data-testid="home">
            <Layout hasLogo={false} isDarkTheme={true} main={<Splash />} />
        </div>
    )
}
