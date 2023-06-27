import React from 'react'
import { SigninForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function SigninPage() {
    return (
        <div data-testid="signinPage">
            <Layouts.VerticalCentered>
                <Page h1Text="Sign in">
                    <SigninForm />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
