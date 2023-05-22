import React from 'react'
import HomeProps from './Home.types'
import './Home.styles.scss'

export default function Home({ children }: HomeProps) {
    return (
        <div className="home" data-testid="home">
            {children}
        </div>
    )
}
