import React from 'react'
import Row1Col3Props from './Row1Col3.types'
import Layout from 'src/features/Layout/Layout'
import Rows from 'src/features/Rows'
import Cols from 'src/features/Cols'

export default function Row1Col3({
    children,
    progress,
    showLogo = true,
    theme = 'dark',
}: Row1Col3Props) {
    return (
        <Layout theme={theme} showLogo={showLogo} progress={progress}>
            <Rows.Single classNames="align-items-center">
                <Cols.Triple>{children}</Cols.Triple>
            </Rows.Single>
        </Layout>
    )
}
