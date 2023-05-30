import React from 'react'
import { ForgotPasswordForm } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page h1Text="Forgot password">
            <ForgotPasswordForm />
        </Page>
    )
}

export default function ForgotPasswordPage() {
    return (
        <div className="forgotPasswordPage" data-testid="forgotPasswordPage">
            <Layout isDarkTheme={false} hasLogo={true} main={<Main />} />
        </div>
    )
}
