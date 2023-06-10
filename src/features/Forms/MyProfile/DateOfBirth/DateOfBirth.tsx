import React from 'react'
import { Formik } from 'formik'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { initialValues, validate, validationSchema } from './DateOfBirth.config'
import ButtonInput from 'src/features/FormControls/ButtonInput'
import { useNavigate } from 'react-router-dom'
import { PROFILE_LINKS } from 'src/app/App.constants'
import { formatMonthOrDay } from './DateOfBirth.utils'

export default function DateOfBirth() {
    const navigate = useNavigate()
    async function handleOnSubmit(values: any, actions: any) {
        const { month, day, year } = values
        if (month && day && year) {
            navigate(PROFILE_LINKS.LOCATION.to, {
                state: {
                    dob: `${formatMonthOrDay(month)}-${formatMonthOrDay(
                        day
                    )}-${year}`,
                },
            })
            actions.resetForm()
        }
    }

    return (
        <div className="dateOfBirth" data-testid="dateOfBirth">
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
                            <Row>
                                <Col>
                                    <Form.Control
                                        isInvalid={Boolean(
                                            touched?.month && errors?.month
                                        )}
                                        isValid={Boolean(
                                            touched?.month && !errors?.month
                                        )}
                                        maxLength={2}
                                        min="01"
                                        max="12"
                                        name="month"
                                        onChange={handleChange}
                                        placeholder="MM"
                                        size="lg"
                                        type="number"
                                        value={values.month}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        isInvalid={Boolean(
                                            touched?.day && errors?.day
                                        )}
                                        isValid={Boolean(
                                            touched?.day && !errors?.day
                                        )}
                                        maxLength={2}
                                        min="01"
                                        max="31"
                                        name="day"
                                        onChange={handleChange}
                                        placeholder="DD"
                                        size="lg"
                                        type="number"
                                        value={values.day}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        isInvalid={Boolean(
                                            touched?.year && errors?.year
                                        )}
                                        isValid={Boolean(
                                            touched?.year && !errors?.year
                                        )}
                                        maxLength={4}
                                        min="1950"
                                        max="2005"
                                        name="year"
                                        onChange={handleChange}
                                        placeholder="YYYY"
                                        size="lg"
                                        type="number"
                                        value={values.year}
                                    />
                                </Col>
                            </Row>
                            <Row className="mt-5">
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
