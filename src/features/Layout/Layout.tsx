import React, { useState } from 'react'
import LayoutProps from './Layout.types'
import { Container } from 'react-bootstrap'
import Alert from 'src/features/Alert'
import Header from 'src/features/Header'
import Footer from 'src/features/Footer'
import ProgressBar from 'src/features/ProgressBar'
import EasterEgg from '../EasterEgg'

export default function Layout({
    children,
    showLogo,
    isDarkTheme,
    progress,
}: LayoutProps) {
    const [easterEgg, setEastEgg] = useState(false)

    function handleClick() {
        setEastEgg(!easterEgg)
    }

    return (
        <div className="layout" data-testid="layout">
            <Alert />
            <EasterEgg easterEgg={easterEgg}>
                <Container fluid className="d-flex flex-column vh-100">
                    <Header showLogo={showLogo} isDarkTheme={isDarkTheme} />
                    {progress && <ProgressBar progress={progress} />}
                    {children}
                    <Footer
                        isDarkTheme={isDarkTheme}
                        handleClick={handleClick}
                    />
                </Container>
            </EasterEgg>
        </div>
    )
}
