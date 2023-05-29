import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks'
import { clearUserAndToken } from 'src/appState/authSlice'
import { Button } from 'react-bootstrap'
import { clearLocalStorage } from 'src/app/App.utils'

export default function SignoutButton() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    function handleSignout() {
        clearLocalStorage()
        dispatch(clearUserAndToken())
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
