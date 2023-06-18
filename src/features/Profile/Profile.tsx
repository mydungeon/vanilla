import React from 'react'
import { useAppSelector } from 'src/hooks'
import ProfileProps from './Profile.types'
import { selectAuth } from 'src/appState/authSlice'
import ProfilePic from 'src/features/ProfilePic'
import { SignoutButton } from 'src/features/Buttons'
import { useGetProfileQuery } from 'src/appState/profileApi'
import { getUserFromLocalStorage } from 'src/app/App.utils'
import PagePreloader from '../Page/components/PagePreloader'
//INFO: https://redux-toolkit.js.org/rtk-query/usage/queries
export default function Profile({ children }: ProfileProps) {
    const { name } = useAppSelector(selectAuth)
    const { id } = getUserFromLocalStorage() || {}
    const { data: profile, isLoading, isFetching } = useGetProfileQuery({ id })
    if (isLoading) return <PagePreloader />
    if (!profile) return <div>No profile!</div>
    if (isFetching) return <div>...isFetching</div>
    return (
        <div className="profile" data-testid="profile">
            {profile && <ProfilePic fileName={profile?.fileName} />}
            <div>{name}</div>
            <SignoutButton />
        </div>
    )
}
