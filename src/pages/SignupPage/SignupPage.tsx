import React from 'react'
import { SignupForm } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page h1Text="Sign up">
            <SignupForm />
        </Page>
    )
}

export default function SignupPage() {
    return (
        <div className="signupPage" data-testid="signupPage">
            <Layout isDarkTheme={false} hasLogo={true} main={<Main />} />
        </div>
    )
}
