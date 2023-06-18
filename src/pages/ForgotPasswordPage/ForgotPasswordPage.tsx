import React from 'react'
import { ForgotPasswordForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function ForgotPasswordPage() {
    return (
        <div className="forgotPasswordPage" data-testid="forgotPasswordPage">
            <Layouts.Row1Col3>
                <Page h1Text="Forgot password">
                    <ForgotPasswordForm />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
