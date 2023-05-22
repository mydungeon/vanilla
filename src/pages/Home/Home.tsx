import React from 'react'
import HomeProps from './Home.types'
import Layout from 'src/features/Layout'
import Logo from 'src/features/Logo'
import './Home.styles.scss'

function Center() {
    return <Logo />
}

export default function Home({ children }: HomeProps) {
    return (
        <div className="home" data-testid="home">
            <Layout center={<Center />} />
        </div>
    )
}
