import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Card, Stack } from 'react-bootstrap'
import Logo from 'src/icons/Logo'
import SplashProps from './Splash.types'
import Tagline from 'src/features/Tagline'
import { TAGLINES } from 'src/app/App.constants'

export default function Splash({ children }: SplashProps) {
    return (
        <div className="splash" data-testid="splash">
            <Card className="bg-transparent border-0 text-center">
                <Card.Header className="bg-transparent border-0">
                    <Logo />
                </Card.Header>
                <Card.Body>
                    <Tagline taglines={TAGLINES} />
                </Card.Body>
                <Card.Footer className="bg-transparent border-0">
                    <Stack direction="horizontal">
                        <LinkContainer to="signup">
                            <Button
                                className="mx-auto"
                                variant="outline-dark"
                                size="lg"
                            >
                                Sign up
                            </Button>
                        </LinkContainer>
                        <LinkContainer to="signin">
                            <Button
                                className="mx-auto"
                                variant="outline-dark"
                                size="lg"
                            >
                                Sign in
                            </Button>
                        </LinkContainer>
                    </Stack>
                </Card.Footer>
            </Card>
        </div>
    )
}
