import React from 'react'
import TopAlignedProps from './TopAligned.types'
import Layout from 'src/features/Layout/Layout'
import Rows from 'src/features/Rows'
import Cols from 'src/features/Cols'

export default function TopAligned({
    children,
    theme = 'light',
    showLogo = true,
}: TopAlignedProps) {
    return (
        <Layout theme={theme} showLogo={showLogo}>
            <Rows.Single>
                <Cols.TripleWithBorder>{children}</Cols.TripleWithBorder>
            </Rows.Single>
        </Layout>
    )
}
