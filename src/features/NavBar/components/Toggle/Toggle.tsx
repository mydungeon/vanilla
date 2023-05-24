import React from 'react'
import ToggleProps from './Toggle.types'
import { Navbar } from 'react-bootstrap'
import List from 'src/icons/List'
import X from 'src/icons/X'

export default function Toggle({ isToggled }: ToggleProps) {
    return (
        <Navbar.Toggle aria-controls="navbarScroll">
            {isToggled ? <X /> : <List />}
        </Navbar.Toggle>
    )
}
