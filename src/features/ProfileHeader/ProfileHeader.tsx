import React, { useEffect, useState } from 'react'
import ProfileHeaderProps from './ProfileHeader.types'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import ProfilePic from 'src/features/ProfilePic'
import {
    BsCircle,
    BsFillChatTextFill,
    BsGeoAltFill,
    BsHeartFill,
    BsThreeDotsVertical,
    BsTrashFill,
} from 'react-icons/bs'
import { FaImages } from 'react-icons/fa'
import { useAppSelector } from 'src/hooks'
import { selectAuth } from 'src/appState/authSlice'
import { H1 } from 'src/features/Elements'
import { useParams } from 'react-router-dom'
import { useLazyGetProfileQuery } from 'src/appState/profileApi'

export default function ProfileHeader({
    showChat,
    showPictures,
    showUserActions,
}: ProfileHeaderProps) {
    const { userId } = useParams()
    const [profileData, setProfileData] = useState<any>()
    const { name } = useAppSelector(selectAuth)
    const [getProfile, { isError, data }] = useLazyGetProfileQuery()

    useEffect(() => {
        if (data) {
            setProfileData(data)
        }
        if (userId && !profileData && !isError) {
            getProfile({ userId })
        }
    }, [getProfile, isError, profileData, data, userId])

    return (
        <div data-testid="profileHeader">
            <Stack>
                <div className="m-auto mb-1">
                    {profileData && (
                        <ProfilePic fileName={profileData.fileName} />
                    )}
                </div>
                <Container fluid>
                    <Row className="align-items-center justify-content-center">
                        <Col className="justify-content-left">
                            <Stack
                                className="m-auto float-start"
                                direction="horizontal"
                                gap={3}
                            >
                                <FaImages onClick={showPictures} size={30} />
                                <div className="vr opacity-100 w-3px" />
                                <BsFillChatTextFill
                                    onClick={showChat}
                                    size={30}
                                />
                            </Stack>
                        </Col>
                        <Col>
                            {name && (
                                <div className="text-center text-black">
                                    <H1 text={name} />
                                </div>
                            )}
                        </Col>
                        <Col className="justify-content-right">
                            <Stack
                                className="m-auto float-end"
                                direction="horizontal"
                                gap={3}
                            >
                                <BsTrashFill size={30} />
                                <div className="vr opacity-100 w-3px" />
                                <BsHeartFill size={30} />
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </Stack>
            <Stack
                className="bg-black d-flex align-items-center p-2 rounded text-light"
                direction="horizontal"
            >
                <h6 className="p-2 m-0">44</h6>
                <div className="p-2 me-auto">
                    <BsGeoAltFill className="me-2" />
                    Washington DC, VA
                </div>
                <div className="p-2 position-relative">
                    <h6 className="fs-6 m-0">75%</h6>
                    <BsCircle
                        className="position-absolute top-50 start-50 translate-middle"
                        size={50}
                    />
                </div>
                <div className="p-2">
                    <BsThreeDotsVertical onClick={showUserActions} size={25} />
                </div>
            </Stack>
        </div>
    )
}
