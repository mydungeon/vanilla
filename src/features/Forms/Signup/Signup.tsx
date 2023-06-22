import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Formik } from 'formik'
import { Form, Stack } from 'react-bootstrap'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import ButtonLink from 'src/features/Buttons/ButtonLink'
import { initialValues, validate, validationSchema } from './Signup.config'
import {
    PROFILE_LINKS,
    SIGN_IN_LINK,
    SIGN_UP_LINK,
} from 'src/app/App.constants'
import { useSignUpMutation } from 'src/appState/authApi'
import { useNavigate } from 'react-router-dom'
import { setUserInLocalStorage } from 'src/app/App.utils'

export default function Signup() {
    const navigate = useNavigate()
    const [
        signUp,
        {
            data: signUpData,
            isSuccess: isSignUpSuccess,
            isError: isSignUpError,
            error: signUpError,
        },
    ] = useSignUpMutation()

    async function handleOnSubmit(values: any, actions: any) {
        const { email, firstName, password } = values
        if (email && firstName && password) {
            await signUp({ email, firstName, password })

            actions.resetForm()
        }
    }

    useEffect(() => {
        if (isSignUpSuccess) {
            const {
                result: { _id, name },
                token,
            } = signUpData
            setUserInLocalStorage(_id, name, token)
            navigate(PROFILE_LINKS.DOB.to)
            // navigate(SIGN_IN_LINK.to)
        }
    }, [isSignUpSuccess])

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
                    <Form
                        noValidate
                        className="w-100 text-align-start"
                        onSubmit={handleSubmit}
                    >
                        <Stack>
                            <TextInput
                                controlId="firstName"
                                error={errors?.firstName}
                                isInvalid={Boolean(
                                    touched?.firstName && errors?.firstName
                                )}
                                isValid={Boolean(
                                    touched?.firstName && !errors?.firstName
                                )}
                                name="firstName"
                                onChange={handleChange}
                                placeholder="First name"
                                type="firstName"
                                value={values.firstName}
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
                                    touched?.password && errors?.password
                                )}
                                isValid={Boolean(
                                    touched?.password && !errors?.password
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
                        </Stack>
                        <Stack direction="horizontal">
                            <div className="p-2 m-auto">
                                <ButtonInput
                                    disabled={!(dirty && isValid)}
                                    text={SIGN_UP_LINK.text}
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
