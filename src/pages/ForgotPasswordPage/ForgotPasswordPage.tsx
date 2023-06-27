import React from 'react'
import { ForgotPasswordForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function ForgotPasswordPage() {
    return (
        <div data-testid="forgotPasswordPage">
            <Layouts.VerticalCentered>
                <Page h1Text="Forgot password">
                    <ForgotPasswordForm />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
