import React from 'react'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'

export default function NotFoundPage() {
    return (
        <div data-testid="notFoundPage">
            <Layouts.VerticalCentered>
                <Page
                    classNames="text-center"
                    h1Text="Sorry...Page Not Found"
                />
            </Layouts.VerticalCentered>
        </div>
    )
}
