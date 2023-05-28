import React from 'react'
import ProfileProps from './Profile.types'

export default function Profile({ children }: ProfileProps) {
    return (
        <div className="profilePage" data-testid="profile">
            {children}
        </div>
    )
}
