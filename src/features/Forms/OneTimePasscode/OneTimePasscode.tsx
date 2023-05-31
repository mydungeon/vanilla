import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { Button, Col, Container, Form, Ratio, Row } from 'react-bootstrap'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import { useForgotMutation } from 'src/appState/authApi'
import { useLocation } from 'react-router-dom'
import { initialValues, validationSchema } from './OneTimePasscode.schema'
import { validate } from './OneTimePasscode.utils'

export default function OneTimePasscode() {
    const location = useLocation()
    const { to, otp } = location.state
    const [disabledTime, setDisabledTime] = useState(60)
    const [disabled, setDisabled] = useState(true)
    // const navigate = useNavigate()
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
        let parsedOtp = parseInt(
            [values.one, values.two, values.three, values.four].join('')
        )
        if (parsedOtp === otp) {
            console.log('otp', otp)
            console.log('values are equal', parsedOtp, otp)
            // await reset({ otc })
            actions.resetForm()
        }
    }

    async function handleResendCode() {
        if (disabled) {
            return
        } else {
            await forgot({ to, otp })
        }
    }

    useEffect(() => {
        if (isForgotSuccess) {
            setDisabled(true)
        }
    }, [isForgotSuccess])

    useEffect(() => {
        let interval = setInterval(() => {
            setDisabledTime((lastTimerCount) => {
                lastTimerCount <= 1 && clearInterval(interval)
                if (lastTimerCount <= 1) setDisabled(false)
                if (lastTimerCount <= 0) return lastTimerCount
                return lastTimerCount - 1
            })
        }, 1000) //each count lasts for a second
        //cleanup the interval on complete
        return () => clearInterval(interval)
    }, [disabled])

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
                            <Row>
                                <Col>
                                    <Ratio aspectRatio={'1x1'}>
                                        <TextInput
                                            controlId="one"
                                            error={errors?.one}
                                            formControlClasses="h-100 text-center"
                                            isInvalid={Boolean(
                                                touched?.one && errors?.one
                                            )}
                                            isValid={Boolean(
                                                touched?.one && !errors?.one
                                            )}
                                            name="one"
                                            onChange={handleChange}
                                            placeholder=""
                                            type="string"
                                            value={values.one}
                                        />
                                    </Ratio>
                                </Col>
                                <Col>
                                    <Ratio aspectRatio={'1x1'}>
                                        <TextInput
                                            controlId="two"
                                            error={errors?.two}
                                            formControlClasses="h-100 text-center"
                                            isInvalid={Boolean(
                                                touched?.two && errors?.two
                                            )}
                                            isValid={Boolean(
                                                touched?.two && !errors?.two
                                            )}
                                            name="two"
                                            onChange={handleChange}
                                            placeholder=""
                                            type="string"
                                            value={values.two}
                                        />
                                    </Ratio>
                                </Col>
                                <Col>
                                    <Ratio aspectRatio={'1x1'}>
                                        <TextInput
                                            controlId="three"
                                            error={errors?.three}
                                            formControlClasses="h-100 text-center"
                                            isInvalid={Boolean(
                                                touched?.three && errors?.three
                                            )}
                                            isValid={Boolean(
                                                touched?.three && !errors?.three
                                            )}
                                            name="three"
                                            onChange={handleChange}
                                            placeholder=""
                                            type="string"
                                            value={values.three}
                                        />
                                    </Ratio>
                                </Col>
                                <Col>
                                    <Ratio aspectRatio={'1x1'}>
                                        <TextInput
                                            controlId="four"
                                            error={errors?.four}
                                            formControlClasses="h-100 text-center"
                                            isInvalid={Boolean(
                                                touched?.four && errors?.four
                                            )}
                                            isValid={Boolean(
                                                touched?.four && !errors?.four
                                            )}
                                            name="four"
                                            onChange={handleChange}
                                            placeholder=""
                                            type="string"
                                            value={values.four}
                                        />
                                    </Ratio>
                                </Col>
                            </Row>
                            <Container>
                                <Row className="mt-3">
                                    <Col xs={8}>
                                        <ButtonInput
                                            text={`Reset my password`}
                                            disabled={!(dirty && isValid)}
                                        />
                                    </Col>
                                    <Col xs={4} className="align-self-center">
                                        <Button
                                            className="mx-auto "
                                            onClick={handleResendCode}
                                            variant="link"
                                            size="lg"
                                            disabled={disabled}
                                        >
                                            Resend OTP
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
