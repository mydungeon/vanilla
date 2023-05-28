import React from 'react'
import { SigninForm } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page h1Text="Sign in">
            <SigninForm />
        </Page>
    )
}

export default function SigninPage() {
    return (
        <div className="signinPage" data-testid="signinPage">
            <Layout isDarkTheme={false} hasLogo={true} main={<Main />} />
        </div>
    )
}
