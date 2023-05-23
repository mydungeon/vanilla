import React from 'react'
import heart from 'src/heart.svg'
import './Heart.styles.scss'

export default function Heart() {
    return (
        <img
            alt="heart"
            className="heart img-fluid m-3"
            data-testid="heart"
            src={heart}
        />
    )
}
