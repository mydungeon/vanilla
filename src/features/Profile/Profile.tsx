import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'src/appState/hooks'
import ProfileProps from './Profile.types'
import { selectAuth, unsetAuth } from 'src/appState/authSlice'
import { Button } from 'react-bootstrap'

function SignoutButton() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    function handleSignout() {
        dispatch(unsetAuth())
        navigate('/')
    }
    return (
        <Button
            className="mx-auto"
            onClick={handleSignout}
            variant="primary"
            size="lg"
        >
            Sign out
        </Button>
    )
}

export default function Profile({ children }: ProfileProps) {
    const { name } = useAppSelector(selectAuth)
    const navigate = useNavigate()

    return (
        <div className="profile" data-testid="profile">
            <div>{name}</div>
            <SignoutButton />
        </div>
    )
}
