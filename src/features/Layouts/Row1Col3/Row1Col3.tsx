import React from 'react'
import Row1Col3Props from './Row1Col3.types'
import Layout from 'src/features/Layout/Layout'
import Rows from 'src/features/Rows'
import Cols from 'src/features/Cols'

export default function Row1Col3({
    children,
    isDarkTheme = false,
    showLogo = true,
}: Row1Col3Props) {
    return (
        <Layout isDarkTheme={isDarkTheme} showLogo={showLogo}>
            <Rows.SingleVerticalCenter>
                <Cols.Triple>{children}</Cols.Triple>
            </Rows.SingleVerticalCenter>
        </Layout>
    )
}
