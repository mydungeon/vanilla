import React from 'react'
import { OneTimePasscodeForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function OneTimePasscodePage() {
    return (
        <div data-testid="oneTimePasscodePage">
            <Layouts.Row1Col3>
                <Page h1Text="Enter Your Code">
                    <OneTimePasscodeForm />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
