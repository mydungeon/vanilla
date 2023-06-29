import React from 'react'
import { Outlet } from 'react-router-dom'
import MyProfileProps from './MyProfile.types'
import Layouts from 'src/features/Layouts'
import ProfileTabs from 'src/features/ProfileTabs'

export default function MyProfile({ children }: MyProfileProps) {
    return (
        <Layouts.TopAligned>
            <>
                <ProfileTabs />
                <Outlet />
            </>
        </Layouts.TopAligned>
    )
}
