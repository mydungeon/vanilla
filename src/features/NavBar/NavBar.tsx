import React from 'react'
import NavBarProps from './NavBar.types'
import './NavBar.styles.scss'
import { Container, Navbar as SiteNav } from 'react-bootstrap'
import NavLinks from '../NavLinks'
import Logo from '../Logo'
import List from 'src/icons/List'

export default function NavBar({ children }: NavBarProps) {
    return (
        <Container fluid>
            <SiteNav
                className="border-bottom border-primary"
                collapseOnSelect
                expand="xs"
                bg="dark"
                variant="dark"
            >
                <SiteNav.Brand>
                    <Logo />
                </SiteNav.Brand>
                <SiteNav.Toggle aria-controls="navbarScroll">
                    <List />
                </SiteNav.Toggle>
                <SiteNav.Collapse id="navbarScroll">
                    <NavLinks />
                </SiteNav.Collapse>
            </SiteNav>
        </Container>
    )
}
