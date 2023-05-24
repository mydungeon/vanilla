import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Logo from 'src/icons/Logo'
import SplashProps from './Splash.types'

export default function Splash({ children }: SplashProps) {
    return (
        <div className="splash" data-testid="splash">
            <Container style={{ maxWidth: '400px' }} fluid className="w-100">
                <Row>
                    <Col>
                        <Logo />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <LinkContainer to="signup">
                            <Button
                                className="mx-auto"
                                variant="primary"
                                size="lg"
                            >
                                Sign up
                            </Button>
                        </LinkContainer>
                    </Col>
                    <Col>
                        <LinkContainer to="signin">
                            <Button
                                className="mx-auto"
                                variant="primary"
                                size="lg"
                            >
                                Sign in
                            </Button>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
