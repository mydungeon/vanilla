import React from 'react'
import ProfilePicProps from './ProfilePic.types'
import './ProfilePic.styles.scss'
import { Image } from 'react-bootstrap'
const { REACT_APP_AWS_BUCKET_URL } = process.env
export default function ProfilePic({ imageURL, fileName }: ProfilePicProps) {
    const imageSource = imageURL
        ? imageURL
        : `${REACT_APP_AWS_BUCKET_URL}${fileName}`
    return fileName ? (
        <div className="profilepic" data-testid="profilepic">
            <Image
                alt="myProfilePic"
                className="mb-4 shadow-sm border-primary"
                src={imageSource}
                width="200"
                rounded
                fluid
            />
        </div>
    ) : null
}
