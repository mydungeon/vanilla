import React from 'react'
import ProfileInterestsProps from './ProfileInterests.types'
import { Badge } from 'react-bootstrap'
import { INTERESTS } from '../Profile/Profile.constants'

export default function ProfileInterests({ children }: ProfileInterestsProps) {
    return (
        <div className="profileInterests m-5" data-testid="profileInterests">
            {INTERESTS.map((interest) => {
                return (
                    <Badge key={interest} bg="black" className="fs-6 m-2">
                        {interest}
                    </Badge>
                )
            })}
        </div>
    )
}
