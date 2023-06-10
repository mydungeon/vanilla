import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import {
    validationSchema,
    validate,
    initialValues,
} from './ForgotPassword.config'
import { useForgotMutation } from 'src/appState/authApi'
import { useNavigate } from 'react-router-dom'
import { OTP_LINK } from 'src/app/App.constants'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const [
        forgot,
        {
            data: forgotData,
            isSuccess: isForgotSuccess,
            isError: isForgotError,
            error: forgotError,
        },
    ] = useForgotMutation()

    async function handleOnSubmit(values: any, actions: any) {
        const { email } = values
        if (email) {
            await forgot({ email })
            setEmail(email)
            actions.resetForm()
        }
    }

    useEffect(() => {
        if (forgotData && email) {
            const { otp } = forgotData
            navigate(OTP_LINK.to, {
                replace: true,
                state: { email, otp },
            })
        }
    }, [forgotData, email])

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
                    <Form
                        noValidate
                        className="w-100 text-align-start"
                        onSubmit={handleSubmit}
                    >
                        <Container>
                            <Row className="justify-content-center" xs={12}>
                                <Col>
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
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ButtonInput
                                        text={`Email me a One Time Password`}
                                        disabled={!(dirty && isValid)}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
