import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Logo from 'src/icons/Logo'
import SplashProps from './Splash.types'
import Tagline from './components/Tagline'
import { APP_TAGLINE } from 'src/app/App.constants'

export default function Splash({ children }: SplashProps) {
    return (
        <div className="splash" data-testid="splash">
            <Container fluid className="w-100">
                <Row>
                    <Col>
                        <Logo />
                        <Tagline text={APP_TAGLINE} />
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
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
