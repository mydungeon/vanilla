import React, { useState } from 'react'
import ProfileHeader from '../ProfileHeader'
import ProfileDetails from 'src/features/ProfileDetails'
import ProfileInterests from '../ProfileInterests'
import Modals from 'src/features/Modals'
import ProfileDescription from '../ProfileDescription'

//INFO: https://redux-toolkit.js.org/rtk-query/usage/queries
export default function Profile() {
    const [showChat, setShowChat] = useState(false)
    const [showCarousel, setShowCarousel] = useState(false)
    const [showUserActions, setShowUserActions] = useState(false)

    return (
        <>
            <div className="profile mt-4" data-testid="profile">
                <ProfileHeader
                    showChat={() => setShowChat(true)}
                    showPictures={() => setShowCarousel(true)}
                    showUserActions={() => setShowUserActions(true)}
                />
                <ProfileDetails />
                <ProfileDescription />
                <ProfileInterests />
            </div>
            <Modals.CarouselModal
                show={showCarousel}
                onHide={() => setShowCarousel(false)}
            />
            <Modals.ChatModal
                onHide={() => setShowChat(false)}
                placement="end"
                show={showChat}
            />
            <Modals.UserActionsModal
                show={showUserActions}
                onHide={() => setShowUserActions(false)}
            />
        </>
    )
}
