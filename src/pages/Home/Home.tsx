import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Layout from 'src/features/Layout'
import Logo from 'src/icons/Logo'
import './Home.styles.scss'

function Center() {
    return (
        <>
            <Container style={{ maxWidth: '400px' }} fluid className="w-100">
                <Row>
                    <Col>
                        <Logo />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Button className="mx-auto" variant="primary" size="lg">
                            Signup
                        </Button>
                    </Col>
                    <Col>
                        <Button className="mx-auto" variant="primary" size="lg">
                            Signin
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default function Home() {
    return (
        <div className="home" data-testid="home">
            <Layout center={<Center />} />
        </div>
    )
}
