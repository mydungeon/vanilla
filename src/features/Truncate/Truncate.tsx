import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import TruncateProps from './Truncate.types'

export default function Truncate({ text }: TruncateProps) {
    return (
        <OverlayTrigger overlay={<Tooltip>{text}</Tooltip>}>
            <a className="text-black" href="#">
                <div
                    className="fs-6 d-inline-block text-truncate"
                    style={{ maxWidth: '225px' }}
                >
                    {text}
                </div>
            </a>
        </OverlayTrigger>
    )
}
