import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import SignupProps from './Signup.types'
import TextInput from 'src/features/FormControls/TextInput'
import CheckboxInput from 'src/features/FormControls/CheckboxInput'

export default function Signup({ children }: SignupProps) {
    return (
        <div className="signup" data-testid="signup">
            <Container style={{ maxWidth: '400px', textAlign: 'left' }} fluid>
                <Form className="w-100 text-align-start">
                    <TextInput
                        controlId="formBasicEmail"
                        label="Email address"
                        placeholder="Enter email"
                        type="email"
                        message={`We'll never share your email with anyone else.`}
                    />
                    <TextInput
                        controlId="formBasicPassword"
                        label="Password"
                        placeholder="Password"
                        type="password"
                    />
                    <CheckboxInput
                        controlId="formBasicRememberMe"
                        label="Remember me"
                        type="checkbox"
                    />
                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
