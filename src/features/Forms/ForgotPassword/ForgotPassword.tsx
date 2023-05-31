import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { validationSchema, initialValues } from './ForgotPassword.schema'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import { validate } from './ForgotPassword.utils'
import { useForgotMutation } from 'src/appState/authApi'
import { generateOTP } from 'src/app/App.utils'
import { useNavigate } from 'react-router-dom'
import { OTP_LINK } from 'src/app/App.constants'

export default function ForgotPassword() {
    const [email, setEmail] = useState(null)
    const [otp, setOtp] = useState(0)

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
            const oneTimePasscode = generateOTP()
            await forgot({ to: email, otp: oneTimePasscode })
            setEmail(email)
            setOtp(oneTimePasscode)
            actions.resetForm()
        }
    }

    useEffect(() => {
        if (isForgotSuccess && email && otp !== 0) {
            navigate(OTP_LINK.to, { state: { to: email, otp } })
        }
    }, [isForgotSuccess, email, email])

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
