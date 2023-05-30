import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Formik } from 'formik'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { validationSchema, initialValues } from './Signup.schema'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import NavLink from 'src/features/NavLink'
import { validate } from './Signup.utils'
import { SIGN_IN_LINK, SIGN_UP_LINK } from 'src/app/App.constants'

export default function Signup() {
    function handleOnSubmit(values: any, actions: any) {
        console.log('submitted', values)
        actions.resetForm()
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
                    dirty,
                    errors,
                    handleChange,
                    handleSubmit,
                    isValid,
                    touched,
                    values,
                }) => (
                    <Container>
                        <Row className="justify-content-center" xs={12}>
                            <Col>
                                <Form
                                    noValidate
                                    className="w-100 text-align-start"
                                    onSubmit={handleSubmit}
                                >
                                    <TextInput
                                        controlId="firstName"
                                        error={errors?.firstName}
                                        isInvalid={Boolean(
                                            touched?.firstName &&
                                                errors?.firstName
                                        )}
                                        isValid={Boolean(
                                            touched?.firstName &&
                                                !errors?.firstName
                                        )}
                                        name="firstName"
                                        onChange={handleChange}
                                        placeholder="First name"
                                        type="firstName"
                                        value={values.firstName}
                                    />
                                    <TextInput
                                        controlId="lastName"
                                        error={errors?.lastName}
                                        isInvalid={Boolean(
                                            touched?.lastName &&
                                                errors?.lastName
                                        )}
                                        isValid={Boolean(
                                            touched?.lastName &&
                                                !errors?.lastName
                                        )}
                                        name="lastName"
                                        onChange={handleChange}
                                        placeholder="Last name"
                                        type="lastName"
                                        value={values.lastName}
                                    />
                                    <TextInput
                                        controlId="emailAddress"
                                        error={errors?.email}
                                        isInvalid={Boolean(
                                            touched?.email && errors?.email
                                        )}
                                        isValid={Boolean(
                                            touched?.email && !errors?.email
                                        )}
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="Email"
                                        type="email"
                                        value={values.email}
                                    />
                                    <TextInput
                                        controlId="password"
                                        error={errors?.password}
                                        isInvalid={Boolean(
                                            touched?.password &&
                                                errors?.password
                                        )}
                                        isValid={Boolean(
                                            touched?.password &&
                                                !errors?.password
                                        )}
                                        name="password"
                                        onChange={handleChange}
                                        placeholder="Password"
                                        type="password"
                                        value={values.password}
                                    />
                                    <TextInput
                                        controlId="passwordConfirm"
                                        error={errors?.passwordConfirm}
                                        isInvalid={Boolean(
                                            touched?.passwordConfirm &&
                                                errors?.passwordConfirm
                                        )}
                                        isValid={Boolean(
                                            touched?.passwordConfirm &&
                                                !errors?.passwordConfirm
                                        )}
                                        name="passwordConfirm"
                                        onChange={handleChange}
                                        placeholder="Confirm Password"
                                        type="password"
                                        value={values.passwordConfirm}
                                    />
                                    <Container>
                                        <Row>
                                            <Col xs={8}>
                                                <ButtonInput
                                                    text={SIGN_UP_LINK.text}
                                                    disabled={
                                                        !(dirty && isValid)
                                                    }
                                                />
                                            </Col>
                                            <Col
                                                xs={4}
                                                className="align-self-center"
                                            >
                                                <LinkContainer
                                                    to={SIGN_IN_LINK.to}
                                                >
                                                    <NavLink
                                                        hasBorder={false}
                                                        text={SIGN_IN_LINK.text}
                                                        to={SIGN_IN_LINK.to}
                                                    />
                                                </LinkContainer>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                )}
            </Formik>
        </div>
    )
}
