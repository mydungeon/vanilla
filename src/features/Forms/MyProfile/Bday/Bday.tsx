import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { initialValues, validate, validationSchema } from './Bday.config'
import { formatMonthOrDay } from './Bday.utils'

export default function Bday() {
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [year, setYear] = useState('')
    const [dob, setDob] = useState('')

    function handleMonthChange(month: string) {
        setMonth(formatMonthOrDay(month))
    }
    function handleDayChange(day: string) {
        setDay(formatMonthOrDay(day))
    }
    function handleYearChange(year: number) {
        setYear(year.toString())
    }

    useEffect(() => {
        if (month !== '' && day !== '' && year !== '') {
            setDob(`${month}-${day}-${year}`)
        }
    }, [dob, month, day, year])

    return (
        <div className="bday" data-testid="bday">
            <div>{dob}</div>
            <Formik
                onSubmit={() => {}}
                validationSchema={validationSchema}
                validate={validate}
                validateOnChange={true}
                initialValues={initialValues}
            >
                {() => (
                    <Form>
                        <Form.Group className="mb-3" controlId="bday">
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            maxLength={2}
                                            min="01"
                                            max="12"
                                            onChange={(e: any) =>
                                                handleMonthChange(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="MM"
                                            size="lg"
                                            type="number"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            maxLength={2}
                                            min="01"
                                            max="31"
                                            onChange={(e: any) =>
                                                handleDayChange(e.target.value)
                                            }
                                            placeholder="DD"
                                            size="lg"
                                            type="number"
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Control
                                            maxLength={2}
                                            min="1950"
                                            max="2005"
                                            onChange={(e: any) =>
                                                handleYearChange(e.target.value)
                                            }
                                            placeholder="YYYY"
                                            size="lg"
                                            type="number"
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </Form.Group>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
