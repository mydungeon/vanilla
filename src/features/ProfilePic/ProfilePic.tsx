import React from 'react'
import { Image } from 'react-bootstrap'
import ProfilePicProps from './ProfilePic.types'
import './ProfilePic.styles.scss'

const { REACT_APP_AWS_BUCKET_URL } = process.env

export default function ProfilePic({ imageURL, fileName }: ProfilePicProps) {
    const imageSource = imageURL
        ? imageURL
        : `${REACT_APP_AWS_BUCKET_URL}${fileName}`
    return fileName ? (
        <div
            className="profilepic avatar-lg rounded-circle"
            data-testid="profilepic"
        >
            <Image
                alt="my profile pic"
                className="mb-4 shadow avatar-img"
                src={imageSource}
                width="200"
                roundedCircle
                fluid
            />
        </div>
    ) : null
}
