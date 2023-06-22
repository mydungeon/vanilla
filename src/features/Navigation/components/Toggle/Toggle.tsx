import React from 'react'
import ToggleProps from './Toggle.types'
import { Navbar } from 'react-bootstrap'
import { BsList, BsXLg } from 'react-icons/bs'

export default function Toggle({ isToggled }: ToggleProps) {
    return (
        <Navbar.Toggle
            aria-controls="navbarScroll"
            as="div"
            className="border-0 cursor"
            role="button"
        >
            {isToggled ? (
                <BsXLg className="text-vanillaPink m-1" size={40} />
            ) : (
                <BsList className="text-vanillaPink" size={50} />
            )}
        </Navbar.Toggle>
    )
}
