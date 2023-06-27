import React, { useEffect } from 'react'
import { useAppDispatch } from 'src/hooks'
import { LinkContainer } from 'react-router-bootstrap'
import { Formik } from 'formik'
import { Form, Stack } from 'react-bootstrap'
import { TextInput } from 'src/features/FormControls'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import ButtonLink from 'src/features/Buttons/ButtonLink'
import { initialValues, validate, validationSchema } from './Signin.config'
import { useSignInMutation } from 'src/appState/authApi'
import {
    FORGOT_LINK,
    PROFILE_LINKS,
    SIGN_IN_LINK,
    SIGN_UP_LINK,
} from 'src/app/App.constants'
import { useNavigate } from 'react-router-dom'
import { setUserAndToken } from 'src/appState/authSlice'
import { setUserInLocalStorage } from 'src/app/App.utils'

export default function Signin() {
    //TODO: create /users/signin api in vanilla-api
    const dispatch = useAppDispatch()
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
            const {
                result: { _id, name },
                token,
            } = signInData
            setUserInLocalStorage(_id, name, token)
            dispatch(
                setUserAndToken({
                    name,
                    token,
                })
            )
            navigate(`${PROFILE_LINKS.INDEX.to}/${_id}`)
        }
    }, [isSignInSuccess])

    return (
        <div className="signin text-center" data-testid="signin">
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
                        </Stack>
                        <Stack direction="horizontal">
                            <div className="p-2 m-auto">
                                <ButtonInput
                                    text={SIGN_IN_LINK.text}
                                    disabled={!(dirty && isValid)}
                                />
                            </div>
                            <div className="p-2 m-auto">
                                <LinkContainer to={FORGOT_LINK.to}>
                                    <ButtonLink
                                        text={FORGOT_LINK.text}
                                        to={FORGOT_LINK.to}
                                    />
                                </LinkContainer>
                            </div>
                        </Stack>
                        <LinkContainer to={SIGN_UP_LINK.to}>
                            <ButtonLink
                                text={SIGN_UP_LINK.text}
                                to={SIGN_UP_LINK.to}
                            />
                        </LinkContainer>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
