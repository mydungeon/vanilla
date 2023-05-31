import React from 'react'
import { OneTimePasscodeForm } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page h1Text="Enter One Time Passcode">
            <OneTimePasscodeForm />
        </Page>
    )
}

export default function OneTimePasscodePage() {
    return (
        <div className="oneTimePasscodePage" data-testid="oneTimePasscodePage">
            <Layout isDarkTheme={false} hasLogo={true} main={<Main />} />
        </div>
    )
}
