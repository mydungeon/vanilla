import React from 'react'
import { SigninForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function SigninPage() {
    return (
        <div data-testid="signinPage">
            <Layouts.Row1Col3>
                <Page h1Text="Sign in">
                    <SigninForm />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
