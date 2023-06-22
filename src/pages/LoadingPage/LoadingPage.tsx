import React from 'react'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'
import heartPreloader from 'src/assets/gif/heart-preloader.gif'
import { Image } from 'react-bootstrap'

export default function NotFoundPage() {
    return (
        <div data-testid="notFoundPage">
            <Layouts.Row1Col3>
                <Page classNames="text-center" h1Text="Loading...">
                    <Image src={heartPreloader} />
                </Page>
            </Layouts.Row1Col3>
        </div>
    )
}
