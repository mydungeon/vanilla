import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import LayoutProps from './Layout.types'
import Alert from 'src/features/Alert'
import Header from 'src/features/Header'
import Main from 'src/features/Main'
import Footer from 'src/features/Footer'

export default function Layout({ hasLogo, isDarkTheme, main }: LayoutProps) {
    const [easterEgg, setEastEgg] = useState(false)

    function handleClick() {
        setEastEgg(!easterEgg)
    }

    return (
        <div className="layout" data-testid="layout">
            <Alert />
            <Container fluid className="d-flex flex-column vh-100">
                <Header hasLogo={hasLogo} isDarkTheme={isDarkTheme} />
                <Main easterEgg={easterEgg} main={main} />
                <Footer isDarkTheme={isDarkTheme} handleClick={handleClick} />
            </Container>
        </div>
    )
}
