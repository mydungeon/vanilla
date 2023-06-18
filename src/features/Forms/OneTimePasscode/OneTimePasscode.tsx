import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { Button, Form, Ratio, Stack } from 'react-bootstrap'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import H2 from 'src/features/Elements/H2'
import { useForgotMutation } from 'src/appState/authApi'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    initialValues,
    validate,
    validationSchema,
} from './OneTimePasscode.config'
import { RESET_LINK, SIGN_IN_LINK } from 'src/app/App.constants'

const DISABLE_TIME = 60

export default function OneTimePasscode() {
    const location = useLocation()
    const navigate = useNavigate()
    const [otp, setOtp] = useState(location?.state?.otp)
    const [disabledTime, setDisabledTime] = useState(DISABLE_TIME)
    const [disabled, setDisabled] = useState(true)
    const [
        forgot,
        {
            data: forgotData,
            isSuccess: isForgotSuccess,
            isError: isForgotError,
            error: forgotError,
        },
    ] = useForgotMutation()
    const { email } = location?.state || {}

    const cta = !disabled
        ? `Time is expired`
        : `Expires: ${disabledTime} seconds`

    function handleOnSubmit(values: any, actions: any) {
        if (!disabled) return
        let parsedOtp = parseInt(
            [
                values['otp-0'],
                values['otp-1'],
                values['otp-2'],
                values['otp-3'],
            ].join('')
        )
        if (parsedOtp === otp) {
            actions.resetForm()
            navigate(RESET_LINK.to, { replace: true, state: { email } })
        }
    }

    function handleRefresh() {
        if (isForgotSuccess) {
            setDisabled(true)
        }
        if (forgotData) {
            const { otp } = forgotData
            setOtp(otp)
        }
    }

    async function handleResendCode() {
        if (disabled) {
            return
        } else {
            await forgot({ email })
            setDisabledTime(DISABLE_TIME)
        }
    }

    useEffect(() => {
        if (!location.state) {
            navigate(SIGN_IN_LINK.to)
        }
        handleRefresh()
    }, [isForgotSuccess, forgotData])

    useEffect(() => {
        let interval = setInterval(() => {
            setDisabledTime((lastTimerCount) => {
                lastTimerCount <= 1 && clearInterval(interval)
                if (lastTimerCount <= 1) {
                    setOtp(0)
                    setDisabled(false)
                }
                if (lastTimerCount <= 0) return lastTimerCount
                return lastTimerCount - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [disabled])

    return (
        <div className="forgotPassword" data-testid="forgotPassword">
            <H2 text={cta} />
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
                        <Stack className="pb-4" direction="horizontal" gap={5}>
                            {['otp-0', 'otp-1', 'otp-2', 'otp-3'].map(
                                (name, i) => (
                                    <Ratio aspectRatio={'1x1'} key={i}>
                                        <TextInput
                                            controlId={name}
                                            error={(errors as any)[name]}
                                            formControlClasses="h-100 text-center"
                                            isInvalid={Boolean(
                                                (touched as any)[name] &&
                                                    (errors as any)[name]
                                            )}
                                            isValid={Boolean(
                                                (touched as any)[name] &&
                                                    !(errors as any)[name]
                                            )}
                                            maxLength={1}
                                            name={name}
                                            onChange={handleChange}
                                            placeholder=""
                                            type="string"
                                            value={(values as any)[name]}
                                        />
                                    </Ratio>
                                )
                            )}
                        </Stack>
                        <Stack direction="horizontal">
                            <div className="p-2 m-auto">
                                <ButtonInput
                                    text={`Reset my password`}
                                    disabled={!disabled || !(dirty && isValid)}
                                />
                            </div>
                            <div className="p-2 m-auto">
                                <Button
                                    className="mx-auto "
                                    onClick={handleResendCode}
                                    variant="link"
                                    size="lg"
                                    disabled={disabled}
                                >
                                    Resend OTP
                                </Button>
                            </div>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
