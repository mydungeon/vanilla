import React from 'react'
import { ResetPasswordForm } from 'src/features/Forms'
import Layout from 'src/features/Layout'
import Page from 'src/features/Page'

function Main() {
    return (
        <Page h1Text="Reset password">
            <ResetPasswordForm />
        </Page>
    )
}

export default function ResetPasswordPage() {
    return (
        <div className="resetPasswordPage" data-testid="resetPasswordPage">
            <Layout isDarkTheme={false} hasLogo={true} main={<Main />} />
        </div>
    )
}
