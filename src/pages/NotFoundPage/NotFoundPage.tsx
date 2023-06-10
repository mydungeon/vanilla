import React from 'react'
import { H1 } from 'src/features/Elements'
import Layout from 'src/features/Layout'

export default function NotFoundPage() {
    return (
        <div className="notFoundPage" data-testid="notFoundPage">
            <Layout
                isDarkTheme={false}
                hasLogo={true}
                main={
                    <div className="text-center">
                        <H1 text="Sorry...Page Not Found" />
                    </div>
                }
            />
        </div>
    )
}
