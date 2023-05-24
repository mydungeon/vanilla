import React from 'react'
import { Container } from 'react-bootstrap'
import LayoutProps from './Layout.types'
import Header from 'src/features/Header'
import Main from 'src/features/Main'
import Footer from 'src/features/Footer'

export default function Layout({ hasLogo, isDarkTheme, main }: LayoutProps) {
    return (
        <div className="layout" data-testid="layout">
            <Container fluid className="d-flex flex-column vh-100">
                <Header hasLogo={hasLogo} isDarkTheme={isDarkTheme} />
                <Main main={main} />
                <Footer isDarkTheme={isDarkTheme} />
            </Container>
        </div>
    )
}
