import React from 'react'
import { useAppSelector } from 'src/hooks'
import ProfileProps from './Profile.types'
import { selectAuth } from 'src/appState/authSlice'
import { SignoutButton } from 'src/features/Buttons'

export default function Profile({ children }: ProfileProps) {
    const { name } = useAppSelector(selectAuth)

    return (
        <div className="profile" data-testid="profile">
            <div>{name}</div>
            <SignoutButton />
        </div>
    )
}
