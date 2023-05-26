import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from 'src/auth/authSlice'
import { useLoginMutation } from 'src/auth/authApi'
import { Button, Container, Form } from 'react-bootstrap'
import SignupProps from './Signup.types'
import { TextInput, CheckboxInput } from 'src/features/FormControls'

export default function Signup({ children }: SignupProps) {
    // const userRef = useRef()
    // const errRef = useRef()
    // const [user, setUser] = useState('')
    // const [pwd, setPwd] = useState('')
    // const [errMsg, setErrMsg] = useState('')
    // const navigate = useNavigate()

    // const [login, { isLoading }] = useLoginMutation()
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     userRef.current.focus()
    // }, [])

    // useEffect(() => {
    //     setErrMsg('')
    // }, [user, pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     try {
    //         const userData = await login({ user, pwd }).unwrap()
    //         dispatch(setCredentials({ ...userData, user }))
    //         setUser('')
    //         setPwd('')
    //         navigate('/welcome')
    //     } catch (err) {
    //         if (!err?.originalStatus) {
    //             // isLoading: true until timeout occurs
    //             setErrMsg('No Server Response')
    //         } else if (err.originalStatus === 400) {
    //             setErrMsg('Missing Username or Password')
    //         } else if (err.originalStatus === 401) {
    //             setErrMsg('Unauthorized')
    //         } else {
    //             setErrMsg('Login Failed')
    //         }
    //         errRef.current.focus()
    //     }
    // }

    // const handleUserInput = (e) => setUser(e.target.value)

    // const handlePwdInput = (e) => setPwd(e.target.value)

    // return isLoading ? (
    //     <h1>Loading...</h1>
    // ) : (
    return (
        <div className="signup" data-testid="signup">
            <Container style={{ maxWidth: '400px', textAlign: 'left' }} fluid>
                <Form className="w-100 text-align-start">
                    <TextInput
                        controlId="formBasicEmail"
                        label="Email address"
                        placeholder="Enter email"
                        type="email"
                        message={`We'll never share your email with anyone else.`}
                    />
                    <TextInput
                        controlId="formBasicPassword"
                        label="Password"
                        placeholder="Password"
                        type="password"
                    />
                    <CheckboxInput
                        controlId="formBasicRememberMe"
                        label="Remember me"
                        type="checkbox"
                    />
                    <Button className="fs-5" variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
