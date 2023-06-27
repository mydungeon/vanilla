import React from 'react'
import Layouts from 'src/features/Layouts'
import Page from 'src/features/Page'
import heartPreloader from 'src/assets/gif/heart-preloader.gif'
import { Image } from 'react-bootstrap'

export default function NotFoundPage() {
    return (
        <div data-testid="notFoundPage">
            <Layouts.VerticalCentered>
                <Page classNames="text-center" h1Text="Loading...">
                    <Image src={heartPreloader} />
                </Page>
            </Layouts.VerticalCentered>
        </div>
    )
}
