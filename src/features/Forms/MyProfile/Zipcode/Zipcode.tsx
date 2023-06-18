import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { Form, Stack } from 'react-bootstrap'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import { initialValues, validate, validationSchema } from './Zipcode.config'
import { PROFILE_LINKS } from 'src/app/App.constants'

export default function Zipcode() {
    const location = useLocation()
    const navigate = useNavigate()
    async function handleOnSubmit(values: any, actions: any) {
        const { zipCode } = values
        const { dob } = location?.state
        if (zipCode) {
            navigate(PROFILE_LINKS.GENDER.to, {
                state: { dob, zipCode },
            })
            actions.resetForm()
        }
    }
    console.log('state', location.state)
    return (
        <div className="zipCode" data-testid="zipCode">
            <Formik
                onSubmit={handleOnSubmit}
                validationSchema={validationSchema}
                validate={validate}
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
                    <Form noValidate className="mb-3" onSubmit={handleSubmit}>
                        <Stack className="mb-3" direction="horizontal" gap={3}>
                            <Form.Control
                                className="w-50 m-auto"
                                isInvalid={Boolean(
                                    touched?.zipCode && errors?.zipCode
                                )}
                                isValid={Boolean(
                                    touched?.zipCode && !errors?.zipCode
                                )}
                                minLength={5}
                                maxLength={5}
                                name="zipCode"
                                onChange={handleChange}
                                pattern='pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"'
                                placeholder="Zipcode"
                                size="lg"
                                type="text"
                                value={values.zipCode}
                            />
                        </Stack>
                        <ButtonInput
                            text="Next"
                            disabled={!(dirty && isValid)}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
}
