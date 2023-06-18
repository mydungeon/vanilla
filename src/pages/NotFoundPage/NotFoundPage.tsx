import React from 'react'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function NotFoundPage() {
    return (
        <div className="notFoundPage" data-testid="notFoundPage">
            <Layouts.Row1Col3>
                <Page h1Text="Sorry...Page Not Found" />
            </Layouts.Row1Col3>
        </div>
    )
}
