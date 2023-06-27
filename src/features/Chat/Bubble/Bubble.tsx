import React from 'react'
import BubbleProps from './Bubble.types'

export default function Bubble({ isMe = false, message, date }: BubbleProps) {
    const classNames = isMe
        ? `bg-dark text-light ms-auto`
        : `me-auto text-start`
    return (
        <div
            className={`border border-dark rounded p-2 mb-2 w-75 ${classNames}`}
        >
            <p className="mb-1">{message}</p>
            <small>
                <i>{date}</i>
            </small>
        </div>
    )
}
