import React from 'react'
import ProfileDescriptionProps from './ProfileDescription.types'

export default function ProfileDescription() {
    return (
        <div
            className="profileDescription border border-1 border-uiLightGrey shadow rounded p-3 me-2 ms-2 mt-4 mb-4"
            data-testid="profileDescription"
        >
            <h5>About Me</h5>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it lo.
        </div>
    )
}
