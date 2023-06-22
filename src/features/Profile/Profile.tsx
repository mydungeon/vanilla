import React, { useState } from 'react'
import { useAppSelector } from 'src/hooks'
import { Badge, Col, Container, Row, Stack } from 'react-bootstrap'
import {
    BsCircle,
    BsFillChatTextFill,
    BsGeoAltFill,
    BsHeartFill,
    BsThreeDotsVertical,
    BsTrashFill,
} from 'react-icons/bs'
import {
    FaDog,
    FaGlobeAmericas,
    FaGlassMartiniAlt,
    FaGraduationCap,
    FaYinYang,
    FaBriefcase,
    FaChild,
    FaSmoking,
} from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import { FaImages, FaBan } from 'react-icons/fa'
import { PiGenderMaleBold } from 'react-icons/pi'
import { RiHeartsFill } from 'react-icons/ri'
import { selectAuth } from 'src/appState/authSlice'
import ProfilePic from 'src/features/ProfilePic'
import { useGetProfileQuery } from 'src/appState/profileApi'
import { getUserFromLocalStorage } from 'src/app/App.utils'
import { H1 } from 'src/features/Elements'
import Truncate from '../Truncate'
import { INTERESTS } from './Profile.constants'
import CarouselModal from '../CarouselModal'
import ChatModal from '../ChatModal'
import UserActionsModal from '../UserActionsModal'

//INFO: https://redux-toolkit.js.org/rtk-query/usage/queries
export default function Profile() {
    const [carouselModalShow, setCarouselModalShow] = useState(false)
    const [chatModalShow, setChatModalShow] = useState(false)
    const [userActionsModalShow, setUserActionsModalShow] = useState(false)
    const { name } = useAppSelector(selectAuth)
    const { id } = getUserFromLocalStorage() || {}
    const { data: profile, isFetching } = useGetProfileQuery({ id })
    if (!profile) return <div>No profile!</div>
    if (isFetching) return <div>...isFetching</div>
    return (
        <>
            <div className="profile mt-4" data-testid="profile">
                <Stack>
                    <div className="m-auto mb-1">
                        {profile && <ProfilePic fileName={profile?.fileName} />}
                    </div>
                    <Container fluid>
                        <Row className="align-items-center justify-content-center">
                            <Col className="justify-content-left">
                                <Stack
                                    className="m-auto float-start"
                                    direction="horizontal"
                                    gap={3}
                                >
                                    <FaImages
                                        onClick={() =>
                                            setCarouselModalShow(true)
                                        }
                                        size={30}
                                    />
                                    <div className="vr opacity-100 w-3px" />
                                    <BsFillChatTextFill
                                        onClick={() => setChatModalShow(true)}
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
                    <h6 className="p-2 m-0">37</h6>
                    <div className="p-2 me-auto">
                        <BsGeoAltFill className="me-2" />
                        Midlothian, VA
                    </div>
                    <div className="p-2 position-relative">
                        <h6 className="fs-6 m-0">75%</h6>
                        <BsCircle
                            className="position-absolute top-50 start-50 translate-middle"
                            size={50}
                        />
                    </div>
                    <div className="p-2">
                        <BsThreeDotsVertical
                            onClick={() => setUserActionsModalShow(true)}
                            size={25}
                        />
                    </div>
                </Stack>
                <Stack className="mt-3" direction="horizontal" gap={5}>
                    <Stack gap={1}>
                        <Stack className="p-2" direction="horizontal">
                            <PiGenderMaleBold className="me-3" size={30} />
                            <Truncate text="Male | Straight" />
                        </Stack>
                        <Stack className="p-2" direction="horizontal">
                            <FaPerson className="me-3" size={30} />
                            <div className="fs-6">6'2" Fit</div>
                        </Stack>
                        <Stack className="p-2" direction="horizontal">
                            <FaGlobeAmericas className="me-3" size={25} />
                            <Truncate text="White" />
                        </Stack>
                        <Stack className="p-2" direction="horizontal">
                            <FaBriefcase className="me-3" size={25} />
                            <div className="fs-6">Software Engineer</div>
                        </Stack>
                        <Stack className="p-2" direction="horizontal">
                            <FaGraduationCap className="me-3" size={30} />
                            <div className="fs-6">Bachelors Degree</div>
                        </Stack>
                    </Stack>
                    <Stack gap={1}>
                        <Stack className="p-2" direction="horizontal">
                            <RiHeartsFill className="me-3" size={25} />
                            <div className="fs-6">Something Serious</div>
                        </Stack>
                        <Stack className="p-2" direction="horizontal">
                            <FaGlassMartiniAlt className="me-3" size={25} />
                            <Truncate text="Light drinking" />
                        </Stack>
                        <Stack className="p-2" direction="horizontal">
                            <FaBan className="me-3" size={25} />
                            <Truncate text="No smoking | No drugs" />
                        </Stack>
                        <Stack className="p-2" direction="horizontal">
                            <FaYinYang className="me-3" size={25} />
                            <Truncate text="Agnostic | Libra" />
                        </Stack>
                        <Stack direction="horizontal">
                            <Stack className="ps-2 pe-2" direction="horizontal">
                                <FaChild className="me-3" size={25} />
                                <div className="fs-6">Has Kids</div>
                            </Stack>
                            <Stack className="ps-2" direction="horizontal">
                                <FaDog className="me-3" size={30} />
                                <div className="fs-6">Has Pets</div>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <div className="border border-1 border-uiLightGrey shadow rounded p-3 me-2 ms-2 mt-4 mb-4">
                    <h5>About Me</h5>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it lo.
                </div>
                <div className="interests m-5">
                    {INTERESTS.map((interest) => {
                        return (
                            <Badge
                                key={interest}
                                bg="black"
                                className="fs-6 m-2"
                            >
                                {interest}
                            </Badge>
                        )
                    })}
                </div>
                {/* <SignoutButton /> */}
            </div>
            <CarouselModal
                show={carouselModalShow}
                onHide={() => setCarouselModalShow(false)}
            />
            <ChatModal
                onHide={() => setChatModalShow(false)}
                placement="end"
                show={chatModalShow}
            />
            <UserActionsModal
                show={userActionsModalShow}
                onHide={() => setUserActionsModalShow(false)}
            />
        </>
    )
}
