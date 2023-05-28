import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Formik } from 'formik'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { validationSchema, initialValues } from './Signin.schema'
import { TextInput, CheckboxInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import NavLink from 'src/features/NavLink'
import { validate } from './Signin.utils'
import { useSignInMutation } from 'src/apis/authApi'
import { PROFILE_LINK, SIGN_IN_LINK, SIGN_UP_LINK } from 'src/app/App.constants'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    //TODO: create /users/signin api in vanilla-api
    const navigate = useNavigate()
    const [
        signIn,
        {
            data: signInData,
            isSuccess: isSignInSuccess,
            isError: isSignInError,
            error: signInError,
        },
    ] = useSignInMutation()

    async function handleOnSubmit(values: any, actions: any) {
        const { email, password } = values
        if (email && password) {
            await signIn({ email, password })
            actions.resetForm()
        }
    }

    useEffect(() => {
        if (isSignInSuccess) {
            navigate(PROFILE_LINK.to)
        }
    }, [isSignInSuccess])

    return (
        <div className="signin" data-testid="signin">
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
                                    <CheckboxInput
                                        controlId="formBasicRememberMe"
                                        label="Remember me"
                                        type="checkbox"
                                    />
                                    <Container>
                                        <Row>
                                            <Col xs={8}>
                                                <ButtonInput
                                                    text={SIGN_IN_LINK.text}
                                                    disabled={
                                                        !(dirty && isValid)
                                                    }
                                                />
                                            </Col>
                                            <Col xs={4}>
                                                <LinkContainer
                                                    to={SIGN_UP_LINK.to}
                                                >
                                                    <NavLink
                                                        hasBorder={false}
                                                        text={SIGN_UP_LINK.text}
                                                        to={SIGN_UP_LINK.to}
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
