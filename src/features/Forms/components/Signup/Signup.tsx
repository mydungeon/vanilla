import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import SignupProps from './Signup.types'
import './Signup.styles.scss'

export default function Signup({ children }: SignupProps) {
    return (
        <div className="signup" data-testid="signup">
            <Container style={{ maxWidth: '400px', textAlign: 'left' }} fluid>
                <Form className="w-100 text-align-start">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="w-100">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="w-100">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
