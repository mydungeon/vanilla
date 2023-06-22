import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import {
    initialValues,
    validate,
    validationSchema,
} from './ResetPassword.config'
import { LinkContainer } from 'react-router-bootstrap'
import { Form, Stack } from 'react-bootstrap'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import ButtonLink from 'src/features/Buttons/ButtonLink'
import { useResetMutation } from 'src/appState/authApi'
import { SIGN_IN_LINK } from 'src/app/App.constants'

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
                    <Form
                        noValidate
                        className="w-100 text-align-start"
                        onSubmit={handleSubmit}
                    >
                        <Stack>
                            <TextInput
                                controlId="password"
                                error={errors?.password}
                                isInvalid={Boolean(
                                    touched?.password && errors?.password
                                )}
                                isValid={Boolean(
                                    touched?.password && !errors?.password
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
                        </Stack>
                        <Stack direction="horizontal">
                            <div className="p-2 m-auto">
                                <ButtonInput
                                    text={`Reset my password`}
                                    disabled={!(dirty && isValid)}
                                />
                            </div>
                            <div className="p-2 m-auto">
                                <LinkContainer to={SIGN_IN_LINK.to}>
                                    <ButtonLink
                                        text={SIGN_IN_LINK.text}
                                        to={SIGN_IN_LINK.to}
                                    />
                                </LinkContainer>
                            </div>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
