import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import LayoutProps from './Layout.types'
import Alert from 'src/features/Alert'
import Header from 'src/features/Header'
import Main from 'src/features/Main'
import Footer from 'src/features/Footer'
import ProgressBar from 'src/features/ProgressBar'

export default function Layout({
    hasLogo,
    isDarkTheme,
    main,
    progress,
}: LayoutProps) {
    const [easterEgg, setEastEgg] = useState(false)

    function handleClick() {
        setEastEgg(!easterEgg)
    }

    return (
        <div className="layout" data-testid="layout">
            <Alert />
            <Container fluid className="d-flex flex-column vh-100">
                <Header hasLogo={hasLogo} isDarkTheme={isDarkTheme} />
                {progress && <ProgressBar progress={progress} />}
                <Main easterEgg={easterEgg} main={main} />
                <Footer isDarkTheme={isDarkTheme} handleClick={handleClick} />
            </Container>
        </div>
    )
}
