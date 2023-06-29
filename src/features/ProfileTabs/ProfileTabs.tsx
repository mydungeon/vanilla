import React from 'react'
import { useParams } from 'react-router-dom'
import ProfileTabsProps from './ProfileTabs.types'
import Tabs from '../Tabs'

export default function ProfileTabs({ children }: ProfileTabsProps) {
    const { userId } = useParams()

    const profileTabData = [
        {
            text: 'Profile',
            to: `/profile/${userId}`,
        },
        {
            text: 'Edit',
            to: `/profile/${userId}/edit`,
        },
        {
            text: 'Preferences',
            to: `/profile/${userId}/preferences`,
        },
        {
            text: 'Settings',
            to: `/profile/${userId}/settings`,
        },
    ]

    return (
        <Tabs
            classNames="profileTabs"
            data-testid="profiletabs"
            tabs={profileTabData}
        />
    )
}
