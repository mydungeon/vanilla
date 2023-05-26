import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import { validationSchema, initialValues } from './Signup.schema'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import SignupProps from './Signup.types'
import { TextInput, CheckboxInput } from 'src/features/FormControls'

export default function Signup({ children }: SignupProps) {
    function handleOnSubmit(values: any, actions: any) {
        console.log('submitted', values)
    }

    function validate(values: any) {
        const errors: any = {}

        if (!values.email) {
            errors.email = 'Required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        console.log('errors', errors)
        return errors
    }

    return (
        <div className="signup" data-testid="signup">
            <Formik
                validationSchema={validationSchema}
                validate={validate}
                onSubmit={handleOnSubmit}
                initialValues={initialValues}
            >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                    isValid,
                }) => (
                    <Container>
                        <Row className="justify-content-center" xs="auto">
                            <Col>
                                <Form
                                    noValidate
                                    className="w-100 text-align-start"
                                    onSubmit={handleSubmit}
                                >
                                    <TextInput
                                        controlId="emailAddress"
                                        isInvalid={Boolean(
                                            touched.email && errors.email
                                        )}
                                        isValid={Boolean(
                                            touched.email && !errors.email
                                        )}
                                        label="Email address"
                                        message={`We'll never share your email with anyone else.`}
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                        type="email"
                                        value={values.email}
                                    />
                                    <TextInput
                                        controlId="password"
                                        isInvalid={Boolean(
                                            touched.password && errors.password
                                        )}
                                        isValid={Boolean(
                                            touched.password && !errors.password
                                        )}
                                        label="Password"
                                        name="password"
                                        onChange={handleChange}
                                        placeholder="Password"
                                        type="password"
                                        value={values.password}
                                    />
                                    <CheckboxInput
                                        controlId="formBasicRememberMe"
                                        label="Remember me"
                                        type="checkbox"
                                    />
                                    <ButtonInput text="Sign up" />
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                )}
            </Formik>
        </div>
    )
}
