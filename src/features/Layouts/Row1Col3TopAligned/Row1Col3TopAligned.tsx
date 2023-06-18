import React from 'react'
import Row1Col3TopAlignedProps from './Row1Col3TopAligned.types'
import Layout from 'src/features/Layout/Layout'
import Rows from 'src/features/Rows'
import Cols from 'src/features/Cols'

export default function Row1Col3TopAligned({
    children,
    isDarkTheme = false,
    showLogo = true,
}: Row1Col3TopAlignedProps) {
    return (
        <Layout isDarkTheme={isDarkTheme} showLogo={showLogo}>
            <Rows.Single>
                <Cols.TripleWithBorder>{children}</Cols.TripleWithBorder>
            </Rows.Single>
        </Layout>
    )
}
