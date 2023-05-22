import React from 'react'
import { Container } from 'react-bootstrap'
import LayoutProps from './Layout.types'
import Header from 'src/features/Header'
import Main from 'src/features/Main'
import Footer from 'src/features/Footer'
import './Layout.styles.scss'

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="layout" data-testid="layout">
            <Container>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </div>
    )
}
