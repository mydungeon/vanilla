import React from 'react'
import { Stack } from 'react-bootstrap'
import ProfileDetailsProps from './ProfileDetails.types'
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
import { FaBan } from 'react-icons/fa'
import { PiGenderMaleBold, PiGenderFemaleBold } from 'react-icons/pi'
import { RiHeartsFill } from 'react-icons/ri'

export default function ProfileDetails({ children }: ProfileDetailsProps) {
    return (
        <Stack
            className="mt-3"
            data-testid="profiledetails"
            direction="horizontal"
            gap={5}
        >
            <Stack gap={1}>
                <Stack className="p-2" direction="horizontal">
                    <PiGenderMaleBold className="me-3" size={30} />
                    <div className="fs-6">Male | Straight</div>
                </Stack>
                <Stack className="p-2" direction="horizontal">
                    <FaPerson className="me-3" size={30} />
                    <div className="fs-6">6'2" Fit</div>
                </Stack>
                <Stack className="p-2" direction="horizontal">
                    <FaGlobeAmericas className="me-3" size={25} />
                    <div className="fs-6">White</div>
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
                    <RiHeartsFill className="me-3" size={30} />
                    <div className="fs-6">Something Serious</div>
                </Stack>
                <Stack className="p-2" direction="horizontal">
                    <FaGlassMartiniAlt className="me-3" size={30} />
                    <div className="fs-6">Light drinking</div>
                </Stack>
                <Stack className="p-2" direction="horizontal">
                    <FaBan className="me-3" size={25} />
                    <div className="fs-6">No smoking | No drugs</div>
                </Stack>
                <Stack className="p-2" direction="horizontal">
                    <FaYinYang className="me-3" size={25} />
                    <div className="fs-6">Agnostic | Libra</div>
                </Stack>
                <Stack className="pt-2" direction="horizontal">
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
    )
}
