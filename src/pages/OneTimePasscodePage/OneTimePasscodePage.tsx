import React from 'react'
import { OneTimePasscodeForm } from 'src/features/Forms'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function OneTimePasscodePage() {
    return (
        <div data-testid="oneTimePasscodePage">
            <Layouts.VerticalCentered>
                <Page h1Text="Enter Your Code">
                    <OneTimePasscodeForm />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
