import React from 'react'
import { SignupForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function SignupPage() {
    return (
        <div data-testid="signupPage">
            <Layouts.VerticalCentered>
                <Page h1Text="Sign up">
                    <SignupForm />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
