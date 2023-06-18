import React from 'react'
import { ResetPasswordForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function ResetPasswordPage() {
    return (
        <div className="resetPasswordPage" data-testid="resetPasswordPage">
            <Layouts.Row1Col3>
                <Page h1Text="Reset password">
                    <ResetPasswordForm />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
