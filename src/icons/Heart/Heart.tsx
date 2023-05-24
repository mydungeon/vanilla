import React from 'react'
import { FOOTER_LOGO } from 'src/App.constants'
import './Heart.styles.scss'

export default function Heart() {
    return (
        <img
            alt="heart"
            className="heart m-3"
            data-testid="heart"
            src={FOOTER_LOGO}
        />
    )
}
