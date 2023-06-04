import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Formik } from 'formik'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { validationSchema, initialValues } from './ResetPassword.schema'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import NavLink from 'src/features/NavLink'
import { useResetMutation } from 'src/appState/authApi'
import { OTP_LINK, SIGN_IN_LINK } from 'src/app/App.constants'
import { validate } from './ResetPassword.utils'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ResetPassword() {
    const location = useLocation()
    const navigate = useNavigate()
    const [
        reset,
        {
            data: resetData,
            isSuccess: isResetSuccess,
            isError: isResetError,
            error: resetError,
        },
    ] = useResetMutation()

    async function handleOnSubmit(values: any, actions: any) {
        const { password } = values
        if (password) {
            await reset({ email: location.state.email, password })
            actions.resetForm()
        }
    }

    useEffect(() => {
        if (isResetSuccess || !location?.state?.email) {
            navigate(SIGN_IN_LINK.to)
        }
    }, [isResetSuccess])
    return (
        <div className="forgotPassword" data-testid="forgotPassword">
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
                                        placeholder="New Password"
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
                                        placeholder="Confirm New Password"
                                        type="password"
                                        value={values.passwordConfirm}
                                    />
                                    <Container>
                                        <Row>
                                            <Col xs={8}>
                                                <ButtonInput
                                                    text={`Reset my password`}
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
