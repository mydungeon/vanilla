import React, { useEffect, useState } from 'react'
import TaglineProps from './Tagline.types'
import { getRandomTagline } from './Tagline.utils'
import './Tagline.styles.scss'

export default function Tagline({ taglines }: TaglineProps) {
    const [tagline, setTagline] = useState('')

    useEffect(() => {
        setTagline(getRandomTagline(taglines))
    }, [tagline])
    return (
        <p className="tagline m-0" data-testid="tagline">
            {tagline}
        </p>
    )
}
