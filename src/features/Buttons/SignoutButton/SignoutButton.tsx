import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/appState/hooks'
import { unsetAuth } from 'src/appState/authSlice'
import { Button } from 'react-bootstrap'

export default function SignoutButton() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    function handleSignout() {
        dispatch(unsetAuth())
        navigate('/signin')
    }
    return (
        <Button
            className="mx-auto "
            onClick={handleSignout}
            variant="link"
            size="lg"
        >
            Sign out
        </Button>
    )
}
