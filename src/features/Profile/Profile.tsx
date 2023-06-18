import React from 'react'
import { useAppSelector } from 'src/hooks'
import ProfileProps from './Profile.types'
import { selectAuth } from 'src/appState/authSlice'
import ProfilePic from 'src/features/ProfilePic'
import { SignoutButton } from 'src/features/Buttons'
import { useGetProfileQuery } from 'src/appState/profileApi'
import { getUserFromLocalStorage } from 'src/app/App.utils'
import { Stack } from 'react-bootstrap'
import { H1 } from '../Elements'

//INFO: https://redux-toolkit.js.org/rtk-query/usage/queries
export default function Profile({ children }: ProfileProps) {
    const { name } = useAppSelector(selectAuth)
    const { id } = getUserFromLocalStorage() || {}
    const { data: profile, isFetching } = useGetProfileQuery({ id })

    if (!profile) return <div>No profile!</div>
    if (isFetching) return <div>...isFetching</div>
    return (
        <div className="profile mt-4" data-testid="profile">
            <div className="profileHeader border-bottom border-secondary">
                <Stack>
                    <div className="m-auto mb-3">
                        {profile && <ProfilePic fileName={profile?.fileName} />}
                    </div>
                    {name && (
                        <div className="m-auto">
                            <H1 text={name} />
                        </div>
                    )}
                </Stack>
            </div>
            {/* <SignoutButton /> */}
        </div>
    )
}
