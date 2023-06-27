import React from 'react'
import { ResetPasswordForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function ResetPasswordPage() {
    return (
        <div data-testid="resetPasswordPage">
            <Layouts.VerticalCentered>
                <Page h1Text="Reset password">
                    <ResetPasswordForm />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
