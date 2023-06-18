import React from 'react'
import { SignupForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function SignupPage() {
    return (
        <div className="signupPage" data-testid="signupPage">
            <Layouts.Row1Col3>
                <Page h1Text="Sign up">
                    <SignupForm />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
