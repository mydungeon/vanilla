import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { Col, Container, Form, Row } from 'react-bootstrap'
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
                        <Container fluid>
                            <Row className="mb-5">
                                <Col></Col>
                                <Col>
                                    <Form.Control
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
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row className="mt-3">
                                <Col>
                                    <ButtonInput
                                        text="Next"
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
