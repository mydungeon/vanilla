import React from 'react'
import { Container } from 'react-bootstrap'
import LayoutProps from './Layout.types'
import Header from 'src/features/Header'
import NavBar from 'src/features/NavBar'
import Main from 'src/features/Main'
import Footer from 'src/features/Footer'
import './Layout.styles.scss'

export default function Layout({ ...props }: LayoutProps) {
    return (
        <div className="layout" data-testid="layout">
            <Container fluid className="d-flex flex-column vh-100">
                <Header>
                    <NavBar />
                </Header>
                <Main {...props} />
                <Footer />
            </Container>
        </div>
    )
}
