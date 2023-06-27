import React from 'react'
import VerticalCenteredProps from './VerticalCentered.types'
import Layout from 'src/features/Layout/Layout'
import Rows from 'src/features/Rows'
import Cols from 'src/features/Cols'

export default function VerticalCentered({
    children,
    progress,
    showLogo = true,
    theme = 'light',
}: VerticalCenteredProps) {
    return (
        <Layout theme={theme} showLogo={showLogo} progress={progress}>
            <Rows.Single classNames="align-items-center">
                <Cols.Triple>{children}</Cols.Triple>
            </Rows.Single>
        </Layout>
    )
}
